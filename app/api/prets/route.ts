import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const prets = await prisma.pret.findMany({
    include: { costume: { include: { proprietaire: true } } },
    orderBy: { dateDebut: "desc" },
  })

  return NextResponse.json(prets)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const body = await req.json()

  const costume = await prisma.costume.findUnique({
    where: { id: body.costumeId },
  })

  if (!costume || costume.quantiteDispo < 1) {
    return NextResponse.json({ error: "Aucune unité disponible" }, { status: 409 })
  }

  const pret = await prisma.$transaction(async (tx: any) => {
    const nouveauPret = await tx.pret.create({
      data: {
        costumeId: body.costumeId,
        emprunteur: body.emprunteur,
        dateRetourPrevue: body.dateRetourPrevue ? new Date(body.dateRetourPrevue) : null,
        notes: body.notes || null,
      },
      include: {
        costume: {
            select: {id:true, nom:true, taille:true, couleur:true},
        },
      },
    })

    await tx.costume.update({
      where: { id: body.costumeId },
      data: { quantiteDispo: { decrement: 1 } },
    })

    return nouveauPret
  })

  return NextResponse.json(pret, { status: 201 })
}