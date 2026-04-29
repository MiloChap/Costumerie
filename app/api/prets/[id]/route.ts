import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const pret = await prisma.pret.findUnique({
    where: { id: params.id },
  })

  if (!pret) return NextResponse.json({ error: "Prêt introuvable" }, { status: 404 })

  if (pret.statut === "EN_COURS") {
    // Réincrémenter la dispo si le prêt était en cours
    await prisma.$transaction(async (tx) => {
      await tx.pret.delete({ where: { id: params.id } })
      await tx.costume.update({
        where: { id: pret.costumeId },
        data: { quantiteDispo: { increment: 1 } },
      })
    })
  } else {
    await prisma.pret.delete({ where: { id: params.id } })
  }

  return NextResponse.json({ success: true })
}