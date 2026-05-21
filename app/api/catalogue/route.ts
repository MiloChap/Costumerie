import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  const costumes = await prisma.costume.findMany({
    select: {
      id: true,
      nom: true,
      epoque: true,
      createdAt: true,
      taille: true,
      couleur: true,
      matiere: true,
      etat: true,
      description: true,
      quantiteDispo: true,
      quantiteTotal: true,
      images: { select: { id: true }, orderBy: { ordre: "asc" } },
    },
    orderBy: { nom: "asc" },
  })

  return NextResponse.json(
    costumes.map((c) => ({ ...c, imageIds: c.images.map((img) => img.id) }))
  )
}
