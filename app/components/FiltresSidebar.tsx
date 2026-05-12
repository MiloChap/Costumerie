"use client"

import { useEffect, useState } from "react"

export interface Filtres {
  recherche?: string
  epoque?: string
  taille?: string
  couleur?: string
  matiere?: string
  etat?: string
  disponibleSeulement: boolean
  proprietaireId?: string
}

export interface FiltresSidebarProps {
  proprietaires: { id: string; nom: string }[]
  onFiltrer: (filtres: Filtres) => void
}

const EPOQUES = [
  { value: "AVANT_1900", label: "Avant 1900" },
  { value: "E1900_1910", label: "1900 – 1910" },
  { value: "E1910_1920", label: "1910 – 1920" },
  { value: "E1920_1930", label: "1920 – 1930" },
  { value: "E1930_1940", label: "1930 – 1940" },
  { value: "E1940_1950", label: "1940 – 1950" },
  { value: "E1950_1960", label: "1950 – 1960" },
  { value: "E1960_1970", label: "1960 – 1970" },
  { value: "E1970_1980", label: "1970 – 1980" },
  { value: "E1980_1990", label: "1980 – 1990" },
  { value: "E1990_2000", label: "1990 – 2000" },
  { value: "E2000_2010", label: "2000 – 2010" },
  { value: "E2010_2020", label: "2010 – 2020" },
  { value: "E2020_PRESENT", label: "2020 – présent" },
]

const ETATS = [
  { value: "NEUF", label: "Neuf" },
  { value: "BON", label: "Bon" },
  { value: "USE", label: "Usé" },
  { value: "A_REPARER", label: "À réparer" },
  { value: "A_NETTOYER", label: "À nettoyer" },
  { value: "A_FABRIQUER", label: "À fabriquer" },
]

const initial: Filtres = {
  recherche: undefined,
  epoque: undefined,
  taille: undefined,
  couleur: undefined,
  matiere: undefined,
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
              <option key={e.value} value={e.value}>{e.label}</option>
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
          <label className={labelClass} htmlFor="f-matiere">Matière</label>
          <input
            id="f-matiere"
            type="text"
            className={inputClass}
            placeholder="ex: soie, coton…"
            value={filtres.matiere ?? ""}
            onChange={(e) => update("matiere", e.target.value || undefined)}
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
              <option key={e.value} value={e.value}>{e.label}</option>
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
