"use client"

import { useState } from "react"

export interface ProprietaireEntry {
  id: string
  nom: string
}

interface Props {
  proprietaires: ProprietaireEntry[]
  onClose: () => void
  onUpdate: (proprietaires: ProprietaireEntry[]) => void
}

export default function ProprietairesModal({ proprietaires, onClose, onUpdate }: Props) {
  const [liste, setListe] = useState(proprietaires)
  const [nouveauNom, setNouveauNom] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAjouter = async () => {
    const nom = nouveauNom.trim()
    if (!nom) return
    setLoading(true)
    setError(null)
    const res = await fetch("/api/proprietaires", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom }),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error ?? "Erreur"); setLoading(false); return }
    const newListe = [...liste, data as ProprietaireEntry].sort((a, b) => a.nom.localeCompare(b.nom))
    setListe(newListe)
    onUpdate(newListe)
    setNouveauNom("")
    setLoading(false)
  }

  const handleSupprimer = async (id: string) => {
    setLoading(true)
    setError(null)
    const res = await fetch(`/api/proprietaires/${id}`, { method: "DELETE" })
    if (!res.ok) { setError("Erreur lors de la suppression"); setLoading(false); return }
    const newListe = liste.filter((p) => p.id !== id)
    setListe(newListe)
    onUpdate(newListe)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Gérer les propriétaires</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl leading-none"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          {error && (
            <p className="text-sm text-red-600 rounded-md border border-red-200 bg-red-50 px-3 py-2">
              {error}
            </p>
          )}

          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {liste.length === 0 && (
              <li className="text-sm text-slate-400 text-center py-4">Aucun propriétaire</li>
            )}
            {liste.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-2.5"
              >
                <span className="text-sm text-slate-800">{p.nom}</span>
                <button
                  type="button"
                  onClick={() => handleSupprimer(p.id)}
                  disabled={loading}
                  className="text-xs font-medium text-slate-400 hover:text-rose-600 disabled:opacity-40 transition"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <input
              type="text"
              value={nouveauNom}
              onChange={(e) => setNouveauNom(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAjouter()}
              placeholder="Nouveau propriétaire…"
              disabled={loading}
              className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 disabled:bg-slate-50"
            />
            <button
              type="button"
              onClick={handleAjouter}
              disabled={loading || !nouveauNom.trim()}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ajouter
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Supprimer un propriétaire ne modifie pas les costumes déjà assignés.
          </p>
        </div>
      </div>
    </div>
  )
}
