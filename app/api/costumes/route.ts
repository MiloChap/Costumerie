import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  try {
    const body = await req.json()
    const imageUrls: string[] = Array.isArray(body.imageUrls) ? body.imageUrls : []

    const costume = await prisma.costume.create({
      data: {
        nom: body.nom,
        epoque: body.epoque,
        description: body.description || null,
        taille: body.taille,
        couleur: body.couleur,
        matiere: body.matiere || null,
        etat: body.etat,
        quantiteTotal: Number(body.quantiteTotal),
        quantiteDispo: Number(body.quantiteTotal),
        emplacement: body.emplacement || null,
        proprietaire: body.proprietaire ?? "",
        images: imageUrls.length > 0
          ? { createMany: { data: imageUrls.map((url, i) => ({ url, ordre: i })) } }
          : undefined,
      },
    })

    return NextResponse.json(costume, { status: 201 })
  } catch (err) {
    console.error("[POST /api/costumes]", err)
    const message = err instanceof Error ? err.message : "Erreur inconnue"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
