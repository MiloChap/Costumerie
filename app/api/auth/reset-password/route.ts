import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json()

    if (!token || !password || password.length < 12) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 })
    }

    const record = await prisma.passwordResetToken.findUnique({ where: { token } })

    if (!record) {
      return NextResponse.json({ error: "Lien invalide ou déjà utilisé" }, { status: 400 })
    }

    if (record.expiresAt < new Date()) {
      await prisma.passwordResetToken.delete({ where: { token } })
      return NextResponse.json({ error: "Lien expiré, veuillez refaire une demande" }, { status: 400 })
    }

    const hashed = await bcrypt.hash(password, 10)

    await prisma.$transaction([
      prisma.user.update({ where: { email: record.email }, data: { password: hashed } }),
      prisma.passwordResetToken.delete({ where: { token } }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[POST /api/auth/reset-password]", err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
