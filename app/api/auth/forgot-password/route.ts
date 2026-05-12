import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { Resend } from "resend"
import crypto from "crypto"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: "Email requis" }, { status: 400 })

    const user = await prisma.user.findUnique({ where: { email } })

    // On répond toujours "ok" même si l'email n'existe pas (sécurité)
    if (!user) return NextResponse.json({ ok: true })

    // Supprimer les anciens tokens de cet email
    await prisma.passwordResetToken.deleteMany({ where: { email } })

    // Générer un token sécurisé valable 1 heure
    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)

    await prisma.passwordResetToken.create({
      data: { email, token, expiresAt },
    })

    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`

    await resend.emails.send({
      from: "Costumerie <onboarding@resend.dev>",
      to: email,
      subject: "Réinitialisation de votre mot de passe",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #1e293b; margin-bottom: 8px;">Réinitialisation du mot de passe</h2>
          <p style="color: #475569; margin-bottom: 24px;">
            Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le bouton ci-dessous.
            Ce lien est valable <strong>1 heure</strong>.
          </p>
          <a href="${resetUrl}"
             style="display: inline-block; background: #1e293b; color: #fff; padding: 12px 24px;
                    border-radius: 8px; text-decoration: none; font-weight: 600;">
            Réinitialiser mon mot de passe
          </a>
          <p style="color: #94a3b8; font-size: 13px; margin-top: 24px;">
            Si vous n'avez pas fait cette demande, ignorez cet email.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[POST /api/auth/forgot-password]", err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
