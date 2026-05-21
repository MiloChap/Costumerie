import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, dateEnlevement, dateRetour, costumeName, message } = await req.json()

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
        <p><strong>Costume :</strong> ${esc(costumeName)}</p>
        <p><strong>Nom :</strong> ${esc(nom)}</p>
        <p><strong>Email :</strong> ${esc(email)}</p>
        ${telephone ? `<p><strong>Téléphone :</strong> ${esc(telephone)}</p>` : ""}
        ${dateEnlevement ? `<p><strong>Date d'enlèvement souhaitée :</strong> ${new Date(dateEnlevement).toLocaleDateString("fr-FR")}</p>` : ""}
        ${dateRetour ? `<p><strong>Date de retour prévue :</strong> ${new Date(dateRetour).toLocaleDateString("fr-FR")}</p>` : ""}
        ${message ? `<p><strong>Message :</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>` : ""}
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[POST /api/reservation]", err)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
