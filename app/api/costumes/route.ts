import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
// Supprimer l'import Epoque, Etat

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const body = await req.json()

  const costume = await prisma.costume.create({
    data: {
      nom: body.nom,
      epoque: body.epoque,
      description: body.description || null,
      taille: body.taille,
      couleur: body.couleur,
      etat: body.etat,
      quantiteTotal: Number(body.quantiteTotal),
      quantiteDispo: Number(body.quantiteTotal),
      emplacement: body.emplacement || null,
      imageUrl: body.imageUrl || null,
      proprietaireId: body.proprietaireId,
    },
  })

  return NextResponse.json(costume, { status: 201 })
}