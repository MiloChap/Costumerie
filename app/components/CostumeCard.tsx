"use client"

import { useState } from "react"

export interface CostumeCardProps {
  id: string
  nom: string
  epoque: string
  taille: string
  couleur: string
  etat: string
  imageUrl?: string
  quantiteDispo: number
  quantiteTotal: number
  proprietaire: string
  emplacement?: string
  onModifier: (id: string) => void
  onGererPret: (id: string) => void
  onSupprimer?: (id: string) => void
}

const etatStyles: Record<string, string> = {
  NEUF: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  BON: "bg-sky-50 text-sky-700 ring-sky-600/20",
  "USÉ": "bg-amber-50 text-amber-800 ring-amber-600/20",
  "À RÉPARER": "bg-rose-50 text-rose-700 ring-rose-600/20",
  "À NETTOYER": "bg-violet-50 text-violet-700 ring-violet-600/20",
}

function HangerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 8a2 2 0 1 1 2-2" />
      <path d="M12 8v2" />
      <path d="M3 18l9-6 9 6a1 1 0 0 1-.6 1.8H3.6A1 1 0 0 1 3 18z" />
    </svg>
  )
}

export default function CostumeCard({
  id,
  nom,
  epoque,
  taille,
  couleur,
  etat,
  imageUrl,
  quantiteDispo,
  quantiteTotal,
  proprietaire,
  emplacement,
  onModifier,
  onGererPret,
  onSupprimer,
}: CostumeCardProps) {
  const [imgError, setImgError] = useState(false)
  const disponible = quantiteDispo > 0
  const etatKey = etat.toUpperCase()
  const etatClass =
    etatStyles[etatKey] ?? "bg-slate-100 text-slate-700 ring-slate-600/20"

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {imageUrl && !imgError ? (
          <img
            src={`/api/costumes/${id}/image`}
            alt={nom}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <HangerIcon className="h-16 w-16" />
          </div>
        )}

        <div className="absolute left-3 top-3">
          {disponible ? (
            <span className="inline-flex items-center rounded-full bg-emerald-600/95 px-2.5 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-emerald-700/20">
              Disponible ({quantiteDispo}/{quantiteTotal})
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-rose-600/95 px-2.5 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-rose-700/20">
              Indisponible
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold leading-tight text-slate-900">
            {nom}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
            {epoque}
          </span>
          <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
            Taille {taille}
          </span>
          <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
            {couleur}
          </span>
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${etatClass}`}
          >
            {etatKey}
          </span>
        </div>

        <dl className="space-y-1 text-xs text-slate-500">
          <div className="flex gap-1">
            <dt className="font-medium text-slate-600">Propriétaire :</dt>
            <dd className="truncate">{proprietaire}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-medium text-slate-600">Emplacement :</dt>
            <dd className="truncate">{emplacement ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => onModifier(id)}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={() => onGererPret(id)}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            Gérer le prêt
          </button>
          {onSupprimer && (
            <button
              type="button"
              onClick={() => onSupprimer(id)}
              className="inline-flex items-center justify-center rounded-md border border-rose-200 bg-white px-3 py-1.5 text-sm font-medium text-rose-700 shadow-sm transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-400"
              aria-label={`Supprimer ${nom}`}
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
