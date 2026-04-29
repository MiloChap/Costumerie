"use client"

import { useEffect, useState } from "react"

export interface Filtres {
  recherche?: string       // ← ajouter
  epoque?: string
  taille?: string
  couleur?: string
  etat?: string
  disponibleSeulement: boolean
  proprietaireId?: string
}

export interface FiltresSidebarProps {
  proprietaires: { id: string; nom: string }[]
  onFiltrer: (filtres: Filtres) => void
}

const EPOQUES = [
  "Avant 1900",
  "1900 – 1910",
  "1910 – 1920",
  "1920 – 1930",
  "1930 – 1940",
  "1940 – 1950",
  "1950 – 1960",
  "1960 – 1970",
  "1970 – 1980",
  "1980 – 1990",
  "1990 – 2000",
  "2000 – 2010",
  "2010 – 2020",
  "2020 – présent",
]

const ETATS = ["Neuf", "Bon", "Usé", "À réparer", "À nettoyer"]

const initial: Filtres = {
  recherche: undefined,    // ← ajouter
  epoque: undefined,
  taille: undefined,
  couleur: undefined,
  etat: undefined,
  disponibleSeulement: false,
  proprietaireId: undefined,
}

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-slate-600"
const inputClass =
  "mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"

export default function FiltresSidebar({ proprietaires, onFiltrer }: FiltresSidebarProps) {
  const [filtres, setFiltres] = useState<Filtres>(initial)

  useEffect(() => {
    onFiltrer(filtres)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtres])

  const update = <K extends keyof Filtres>(key: K, value: Filtres[K]) =>
    setFiltres((f) => ({ ...f, [key]: value }))

  const reset = () => setFiltres(initial)

  return (
    <aside className="w-[280px] shrink-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Filtres
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="f-recherche">Recherche</label>
          <input
            id="f-recherche"
            type="text"
            className={inputClass}
            placeholder="ex: robe, chapeau…"
            value={filtres.recherche ?? ""}
            onChange={(e) => update("recherche", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="f-epoque">Époque</label>
          <select
            id="f-epoque"
            className={inputClass}
            value={filtres.epoque ?? ""}
            onChange={(e) => update("epoque", e.target.value || undefined)}
          >
            <option value="">Toutes</option>
            {EPOQUES.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="f-taille">Taille</label>
          <input
            id="f-taille"
            type="text"
            className={inputClass}
            placeholder="ex: M, 38, 42…"
            value={filtres.taille ?? ""}
            onChange={(e) => update("taille", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="f-couleur">Couleur</label>
          <input
            id="f-couleur"
            type="text"
            className={inputClass}
            placeholder="ex: bleu marine"
            value={filtres.couleur ?? ""}
            onChange={(e) => update("couleur", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="f-etat">État</label>
          <select
            id="f-etat"
            className={inputClass}
            value={filtres.etat ?? ""}
            onChange={(e) => update("etat", e.target.value || undefined)}
          >
            <option value="">Tous</option>
            {ETATS.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="f-prop">Propriétaire</label>
          <select
            id="f-prop"
            className={inputClass}
            value={filtres.proprietaireId ?? ""}
            onChange={(e) => update("proprietaireId", e.target.value || undefined)}
          >
            <option value="">Tous</option>
            {proprietaires.map((p) => (
              <option key={p.id} value={p.id}>{p.nom}</option>
            ))}
          </select>
        </div>

        <label className="flex cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
          <span className="text-sm font-medium text-slate-700">
            Disponibles uniquement
          </span>
          <span className="relative inline-flex">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={filtres.disponibleSeulement}
              onChange={(e) => update("disponibleSeulement", e.target.checked)}
            />
            <span className="block h-5 w-9 rounded-full bg-slate-300 transition peer-checked:bg-emerald-600" />
            <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-4" />
          </span>
        </label>

        <button
          type="button"
          onClick={reset}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </aside>
  )
}
