import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

const MAX_ATTEMPTS = 5
const LOCK_DURATION_MS = 15 * 60 * 1000

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json(null, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) return NextResponse.json(null, { status: 401 })

  // Compte verrouillé
  if (user.lockedUntil && user.lockedUntil > new Date()) {
    return NextResponse.json(
      { locked: true, lockedUntil: user.lockedUntil.toISOString() },
      { status: 429 }
    )
  }

  const ok = await bcrypt.compare(password, user.password)

  if (!ok) {
    const attempts = user.failedAttempts + 1
    const shouldLock = attempts >= MAX_ATTEMPTS
    await prisma.user.update({
      where: { email },
      data: {
        failedAttempts: attempts,
        ...(shouldLock ? { lockedUntil: new Date(Date.now() + LOCK_DURATION_MS) } : {}),
      },
    })
    return NextResponse.json(null, { status: 401 })
  }

  // Succès — reset compteur
  await prisma.user.update({
    where: { email },
    data: { failedAttempts: 0, lockedUntil: null },
  })

  return NextResponse.json({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.nom,
  })
}
