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

  const costume = await prisma.costume.update({
    where: { id },
    data: {
      nom: body.nom,
      epoque: body.epoque,
      description: body.description || null,
      taille: body.taille,
      couleur: body.couleur,
      etat: body.etat,
      quantiteTotal: Number(body.quantiteTotal),
      emplacement: body.emplacement || null,
      imageUrl: body.imageUrl !== undefined ? body.imageUrl : undefined,
      proprietaireId: body.proprietaireId,
    },
  })

  return NextResponse.json(costume)
}

export async function DELETE(
  req: Request,
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