"use client"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)
  const [retryAt, setRetryAt] = useState<string | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json().catch(() => ({})) as { error?: string; rateLimited?: boolean; retryAt?: string }

      if (!res.ok) throw new Error(data.error ?? "Erreur serveur")

      if (data.rateLimited) {
        setRateLimited(true)
        if (data.retryAt) {
          setRetryAt(new Date(data.retryAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }))
        }
      } else {
        setSent(true)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fbb9b6]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="L'équipe costumes" className="h-24 w-auto" />
        </div>
        <p className="text-sm text-slate-500 text-center mb-6">Réinitialisation du mot de passe</p>

        {rateLimited ? (
          <div className="text-center space-y-4">
            <div className="rounded-lg bg-amber-50 border border-amber-300 px-4 py-3 text-sm text-amber-800">
              Un lien de réinitialisation a déjà été envoyé à <strong>{email}</strong>.{retryAt ? <> Vous pourrez réessayer à <strong>{retryAt}</strong>.</> : " Veuillez patienter 15 minutes avant de réessayer."}
            </div>
            <Link href="/login" className="block text-sm text-slate-500 hover:text-[#e21713] transition underline">
              Retour à la connexion
            </Link>
          </div>
        ) : sent ? (
          <div className="text-center space-y-4">
            <div className="rounded-lg bg-[#fbb9b6] border border-[#f04d46] px-4 py-3 text-sm text-[#e21713]">
              Si un compte existe pour <strong>{email}</strong>, un email de réinitialisation vient d&apos;être envoyé.
            </div>
            <Link href="/login" className="block text-sm text-slate-500 hover:text-[#e21713] transition underline">
              Retour à la connexion
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Adresse email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f04d46]/40"
              />
            </div>

            {error && <p className="text-[#e21713] text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e21713] text-white py-2 rounded-md text-sm font-medium hover:bg-[#f04d46] disabled:opacity-50 transition"
            >
              {loading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
            </button>

            <Link href="/login" className="block text-center text-sm text-slate-500 hover:text-[#e21713] transition underline">
              Retour à la connexion
            </Link>
          </form>
        )}
      </div>
    </main>
  )
}
