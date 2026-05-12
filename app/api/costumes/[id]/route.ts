import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const { id } = await params
  const body = await req.json()

  const addImageUrls: string[] = Array.isArray(body.addImageUrls) ? body.addImageUrls : []
  const deleteImageIds: string[] = Array.isArray(body.deleteImageIds) ? body.deleteImageIds : []

  try {
    const costume = await prisma.$transaction(async (tx) => {
      if (deleteImageIds.length > 0) {
        await tx.costumeImage.deleteMany({
          where: { id: { in: deleteImageIds }, costumeId: id },
        })
      }

      if (addImageUrls.length > 0) {
        const lastImage = await tx.costumeImage.findFirst({
          where: { costumeId: id },
          orderBy: { ordre: "desc" },
          select: { ordre: true },
        })
        const nextOrdre = (lastImage?.ordre ?? -1) + 1
        await tx.costumeImage.createMany({
          data: addImageUrls.map((url, i) => ({ url, costumeId: id, ordre: nextOrdre + i })),
        })
      }

      return tx.costume.update({
        where: { id },
        data: {
          nom: body.nom,
          epoque: body.epoque,
          description: body.description || null,
          taille: body.taille,
          couleur: body.couleur,
          matiere: body.matiere || null,
          etat: body.etat,
          quantiteTotal: Number(body.quantiteTotal),
          quantiteDispo: Number(body.quantiteDispo),
          emplacement: body.emplacement || null,
          proprietaireId: body.proprietaireId,
        },
      })
    })

    return NextResponse.json(costume)
  } catch (err) {
    console.error("[PATCH /api/costumes/:id]", err)
    const message = err instanceof Error ? err.message : "Erreur inconnue"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  if (session.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Interdit" }, { status: 403 })
  }

  const { id } = await params

  const pretsEnCours = await prisma.pret.count({
    where: { costumeId: id, statut: "EN_COURS" },
  })

  if (pretsEnCours > 0) {
    return NextResponse.json(
      { error: "Impossible de supprimer un costume avec des prêts en cours" },
      { status: 409 }
    )
  }

  await prisma.costume.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
