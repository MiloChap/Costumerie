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

  const pret = await prisma.pret.findUnique({ where: { id } })
  if (!pret) return NextResponse.json({ error: "Prêt introuvable" }, { status: 404 })

  const updated = await prisma.pret.update({
    where: { id },
    data: {
      dateDebut: body.dateDebut ? new Date(body.dateDebut) : undefined,
      dateRetourPrevue: body.dateRetourPrevue !== undefined
        ? (body.dateRetourPrevue ? new Date(body.dateRetourPrevue) : null)
        : undefined,
      notes: body.notes !== undefined ? (body.notes || null) : undefined,
    },
  })

  return NextResponse.json(updated)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  
  const { id } = await params

  const pret = await prisma.pret.findUnique({
    where: { id },
  })

  if (!pret) return NextResponse.json({ error: "Prêt introuvable" }, { status: 404 })

  if (pret.statut === "EN_COURS") {
    // Réincrémenter la dispo si le prêt était en cours
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await prisma.$transaction(async (tx: any) => {
      await tx.pret.delete({ where: { id } })
      await tx.costume.update({
        where: { id: pret.costumeId },
        data: { quantiteDispo: { increment: 1 } },
      })
    })
  } else {
    await prisma.pret.delete({ where: { id } })
  }

  return NextResponse.json({ success: true })
}