import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session || session.user?.role !== "ADMIN")
    return NextResponse.json({ error: "Réservé aux administrateurs" }, { status: 403 })

  const { id } = await params
  await prisma.proprietaire.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
