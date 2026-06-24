"use client"

import { useState } from "react"

export interface CostumeCardProps {
  id: string
  nom: string
  epoque: string
  taille: string
  couleur: string
  matiere?: string
  etat: string
  imageUrl?: string
  imageIds: string[]
  imageUrls: string[]
  description?: string
  quantiteDispo: number
  quantiteTotal: number
  proprietaire: string
  emplacement?: string
  onModifier: (id: string) => void
  onGererPret: (id: string) => void
  onSupprimer?: (id: string) => void
  onOpenPopup: (id: string) => void
}

const etatStyles: Record<string, string> = {
  NEUF: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  BON: "bg-sky-50 text-sky-700 ring-sky-600/20",
  "USÉ": "bg-amber-50 text-amber-800 ring-amber-600/20",
  "À RÉPARER": "bg-rose-50 text-rose-700 ring-rose-600/20",
  "À NETTOYER": "bg-violet-50 text-violet-700 ring-violet-600/20",
  "À FABRIQUER": "bg-orange-50 text-orange-700 ring-orange-600/20",
}

function HangerIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  matiere,
  etat,
  imageUrl,
  quantiteDispo,
  quantiteTotal,
  onModifier,
  onGererPret,
  onSupprimer,
  onOpenPopup,
}: CostumeCardProps) {
  const [imgError, setImgError] = useState(false)

  const disponible = quantiteDispo > 0
  const etatKey = etat.toUpperCase()
  const etatClass = etatStyles[etatKey] ?? "bg-slate-100 text-slate-700 ring-slate-600/20"

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Zone photo — cliquable pour ouvrir le popup */}
      <button
        type="button"
        onClick={() => onOpenPopup(id)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400"
        aria-label={`Voir la fiche de ${nom}`}
      >
        {imageUrl && !imgError ? (
            <>
              {/* Fond flouté pour uniformiser les formats */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-md opacity-40"
              />
              {/* Photo principale sans rognage */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={nom}
                onError={() => setImgError(true)}
                className="relative h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
              />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-300">
              <HangerIcon className="h-14 w-14" />
            </div>
          )}

        <div className="absolute left-2 top-2">
          {disponible ? (
            <span className="inline-flex items-center rounded-full bg-emerald-600/95 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
              {quantiteDispo}/{quantiteTotal}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-rose-600/95 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
              Indispo
            </span>
          )}
        </div>
      </button>

      {/* Contenu */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <button
          type="button"
          onClick={() => onOpenPopup(id)}
          className="text-left focus:outline-none"
        >
          {/* Nom + état sur la même ligne */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-sm font-semibold text-slate-900 hover:text-slate-600">
              {nom}
            </h3>
            <span className={`shrink-0 inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${etatClass}`}>
              {etatKey}
            </span>
          </div>
          {/* Époque */}
          <p className="mt-1 text-xs text-slate-400">{epoque}</p>
          {/* Taille · Couleur · Matière */}
          <p className="truncate text-xs text-slate-500">
            {taille} · {couleur}{matiere ? ` · ${matiere}` : ""}
          </p>
        </button>

        {/* Boutons compacts */}
        <div className="mt-auto flex items-center gap-1 pt-1">
          <button
            type="button"
            onClick={() => onModifier(id)}
            className="flex-1 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={() => onGererPret(id)}
            className="flex-1 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Gérer le prêt
          </button>
          {onSupprimer && (
            <button
              type="button"
              onClick={() => onSupprimer(id)}
              className="rounded border border-rose-200 bg-white px-2 py-1 text-xs font-medium text-rose-600 transition hover:bg-rose-50"
              aria-label={`Supprimer ${nom}`}
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
