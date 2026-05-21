"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token") ?? ""
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setError("")

    if (password.length < 12) {
      setError("Le mot de passe doit contenir au moins 12 caractères")
      return
    }
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json().catch(() => ({})) as { error?: string }
      if (!res.ok) throw new Error(data.error ?? "Erreur serveur")

      router.push("/login?reset=ok")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="text-center space-y-4">
        <p className="text-sm text-[#e21713]">Lien invalide ou expiré.</p>
        <Link href="/forgot-password" className="text-sm text-slate-500 hover:text-[#e21713] transition underline">
          Refaire une demande
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Nouveau mot de passe
        </label>
        <input
          type="password"
          required
          minLength={12}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="12 caractères minimum"
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f04d46]/40"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Répétez le mot de passe"
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f04d46]/40"
        />
      </div>

      {error && <p className="text-[#e21713] text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#e21713] text-white py-2 rounded-md text-sm font-medium hover:bg-[#f04d46] disabled:opacity-50 transition"
      >
        {loading ? "Enregistrement..." : "Enregistrer le nouveau mot de passe"}
      </button>
    </form>
  )
}

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fbb9b6]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="L'équipe costumes" className="h-24 w-auto" />
        </div>
        <p className="text-sm text-slate-500 text-center mb-6">Nouveau mot de passe</p>
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </main>
  )
}
