import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { Epoque, Etat } from "@prisma/client"

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const body = await req.json()

  const costume = await prisma.costume.update({
    where: { id: params.id },
    data: {
      nom: body.nom,
      epoque: body.epoque as Epoque,
      taille: body.taille,
      couleur: body.couleur,
      etat: body.etat as Etat,
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
  { params }: { params: { id: string } }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  if (session.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Interdit" }, { status: 403 })
  }

  const pretsEnCours = await prisma.pret.count({
    where: { costumeId: params.id, statut: "EN_COURS" },
  })

  if (pretsEnCours > 0) {
    return NextResponse.json(
      { error: "Impossible de supprimer un costume avec des prêts en cours" },
      { status: 409 }
    )
  }

  await prisma.costume.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}