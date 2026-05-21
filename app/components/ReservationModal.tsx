"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface ReservationModalProps {
  costumeName: string
  onClose: () => void
}

export default function ReservationModal({ costumeName, onClose }: ReservationModalProps) {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [dateEnlevement, setDateEnlevement] = useState("")
  const [dateRetour, setDateRetour] = useState("")
  const [message, setMessage] = useState(`Bonjour, je souhaite réserver le costume "${costumeName}".`)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [consentement, setConsentement] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 150)
  }

  useEffect(() => { requestAnimationFrame(() => setVisible(true)) }, [])

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom, email, telephone, dateEnlevement, dateRetour, costumeName, message }),
    })

    setLoading(false)
    if (res.ok) {
      setSuccess(true)
    } else {
      setError("Une erreur est survenue. Merci de réessayer.")
    }
  }

  const labelClass = "block text-sm font-medium text-slate-700 mb-1"
  const inputClass = "block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"

  const content = (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-slate-600 hover:bg-black/20 text-lg leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        {success ? (
          <div className="py-4 text-center">
            <div className="mb-3 text-4xl">✓</div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Demande envoyée !</h2>
            <p className="text-sm text-slate-500">
              Nous vous recontacterons dans les plus brefs délais.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-5 w-full rounded-md bg-[#e21713] px-4 py-2 text-sm font-medium text-white hover:bg-[#f04d46]"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Réserver — {costumeName}
            </h2>

            <div>
              <label className={labelClass} htmlFor="r-nom">Nom *</label>
              <input
                id="r-nom"
                type="text"
                required
                className={inputClass}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="r-email">Email *</label>
              <input
                id="r-email"
                type="email"
                required
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="r-tel">Téléphone</label>
              <input
                id="r-tel"
                type="tel"
                className={inputClass}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="06 00 00 00 00"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass} htmlFor="r-enlevement">Date d&apos;enlèvement souhaitée</label>
                <input
                  id="r-enlevement"
                  type="date"
                  className={inputClass}
                  value={dateEnlevement}
                  onChange={(e) => setDateEnlevement(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="r-retour">Date de retour prévue</label>
                <input
                  id="r-retour"
                  type="date"
                  className={inputClass}
                  value={dateRetour}
                  onChange={(e) => setDateRetour(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="r-message">Message</label>
              <textarea
                id="r-message"
                rows={3}
                className={inputClass}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consentement}
                onChange={(e) => setConsentement(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#e21713]"
              />
              <span className="text-xs text-slate-500">
                J&apos;accepte que mes données soient utilisées pour traiter ma demande.{" "}
                <a href="/mentions-legales" target="_blank" className="text-[#e21713] hover:underline">
                  Mentions légales
                </a>
              </span>
            </label>

            {error && (
              <p className="text-sm text-rose-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !consentement}
              className="w-full rounded-md bg-[#e21713] px-4 py-2 text-sm font-medium text-white hover:bg-[#f04d46] disabled:opacity-60"
            >
              {loading ? "Envoi en cours…" : "Envoyer la demande"}
            </button>
          </form>
        )}
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
