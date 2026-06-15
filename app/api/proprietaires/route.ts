import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  const proprietaires = await prisma.proprietaire.findMany({ orderBy: { nom: "asc" } })
  return NextResponse.json(proprietaires)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session || session.user?.role !== "ADMIN")
    return NextResponse.json({ error: "Réservé aux administrateurs" }, { status: 403 })

  const body = await req.json()
  const nom = (body.nom ?? "").trim()
  if (!nom) return NextResponse.json({ error: "Le nom est requis" }, { status: 400 })

  try {
    const created = await prisma.proprietaire.create({ data: { nom } })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    if ((err as { code?: string }).code === "P2002")
      return NextResponse.json({ error: "Ce propriétaire existe déjà" }, { status: 409 })
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
