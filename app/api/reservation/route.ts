import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, costumeName, message } = await req.json()

    if (!nom || !email || !costumeName) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"L'équipe costumes" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO,
      replyTo: email,
      subject: `Demande de réservation — ${costumeName}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Costume :</strong> ${costumeName}</p>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ""}
        ${message ? `<p><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[POST /api/reservation]", err)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
