"use client"

import { useEffect, useState } from "react"
import { EPOQUES, ETATS } from "@/app/lib/constants"

export interface CatalogueFiltres {
  recherche?: string
  epoque?: string
  taille?: string
  couleur?: string
  matiere?: string
  etat?: string
  disponibleSeulement: boolean
  tri: "DATE_DESC" | "DATE_ASC" | "EPOQUE_ASC" | "EPOQUE_DESC"
}


const initial: CatalogueFiltres = {
  recherche: undefined,
  epoque: undefined,
  taille: undefined,
  couleur: undefined,
  matiere: undefined,
  etat: undefined,
  disponibleSeulement: false,
  tri: "DATE_DESC",
}

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-slate-600"
const inputClass =
  "mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"

export default function CatalogueFiltresSidebar({
  onFiltrer,
}: {
  onFiltrer: (filtres: CatalogueFiltres) => void
}) {
  const [filtres, setFiltres] = useState<CatalogueFiltres>(initial)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    onFiltrer(filtres)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtres])

  const update = <K extends keyof CatalogueFiltres>(key: K, value: CatalogueFiltres[K]) =>
    setFiltres((f) => ({ ...f, [key]: value }))

  const activeCount = [filtres.recherche, filtres.epoque, filtres.taille, filtres.couleur, filtres.matiere, filtres.etat, filtres.disponibleSeulement || undefined].filter(Boolean).length

  return (
    <div className="w-full lg:w-[260px] lg:shrink-0">
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        className="lg:hidden w-full flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          Recherche & filtres
          {activeCount > 0 && (
            <span className="inline-flex items-center justify-center rounded-full bg-[#e21713] px-1.5 py-0.5 text-xs font-semibold text-white leading-none">{activeCount}</span>
          )}
        </span>
        <svg className={`h-4 w-4 transition-transform ${mobileOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>

    <aside className={`${mobileOpen ? "block" : "hidden"} lg:block mt-2 lg:mt-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm`}>
      <h2 className="mb-4 hidden lg:block text-sm font-semibold uppercase tracking-wide text-slate-700">Recherche & filtres</h2>

      <div className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="cf-tri">Trier par</label>
          <select
            id="cf-tri"
            className={inputClass}
            value={filtres.tri}
            onChange={(e) => update("tri", e.target.value as CatalogueFiltres["tri"])}
          >
            <option value="DATE_DESC">Date d&apos;ajout (récent)</option>
            <option value="DATE_ASC">Date d&apos;ajout (ancien)</option>
            <option value="EPOQUE_ASC">Époque (ancienne → récente)</option>
            <option value="EPOQUE_DESC">Époque (récente → ancienne)</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-recherche">Recherche</label>
          <input
            id="cf-recherche"
            type="text"
            className={inputClass}
            placeholder="ex: robe, chapeau…"
            value={filtres.recherche ?? ""}
            onChange={(e) => update("recherche", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-epoque">Époque</label>
          <select
            id="cf-epoque"
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
          <label className={labelClass} htmlFor="cf-taille">Taille</label>
          <input
            id="cf-taille"
            type="text"
            className={inputClass}
            placeholder="ex: M, 38…"
            value={filtres.taille ?? ""}
            onChange={(e) => update("taille", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-couleur">Couleur</label>
          <input
            id="cf-couleur"
            type="text"
            className={inputClass}
            placeholder="ex: bleu marine"
            value={filtres.couleur ?? ""}
            onChange={(e) => update("couleur", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-matiere">Matière</label>
          <input
            id="cf-matiere"
            type="text"
            className={inputClass}
            placeholder="ex: soie, coton…"
            value={filtres.matiere ?? ""}
            onChange={(e) => update("matiere", e.target.value || undefined)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-etat">État</label>
          <select
            id="cf-etat"
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

        <label className="flex cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
          <span className="text-sm font-medium text-slate-700">Disponibles uniquement</span>
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
          onClick={() => setFiltres(initial)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Réinitialiser
        </button>
      </div>
    </aside>
    </div>
  )
}
