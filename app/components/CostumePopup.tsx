"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

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

export interface CostumePopupProps {
  id: string
  nom: string
  epoque: string
  taille: string
  couleur: string
  matiere?: string
  etat: string
  imageUrls: string[]
  description?: string
  quantiteDispo: number
  quantiteTotal: number
  proprietaire: string
  emplacement?: string
  position: number
  total: number
  onClose: () => void
  onModifier: (id: string) => void
  onGererPret: (id: string) => void
  onSupprimer?: (id: string) => void
  onPrecedent?: () => void
  onSuivant?: () => void
  readOnly?: boolean
  onReserver?: () => void
}

export default function CostumePopup({
  id,
  nom,
  epoque,
  taille,
  couleur,
  matiere,
  etat,
  imageUrls,
  description,
  quantiteDispo,
  quantiteTotal,
  proprietaire,
  emplacement,
  position,
  total,
  onClose,
  onModifier,
  onGererPret,
  onSupprimer,
  onPrecedent,
  onSuivant,
  readOnly,
  onReserver,
}: CostumePopupProps) {
  const [imgIndex, setImgIndex] = useState(0)
  const [imgErrors, setImgErrors] = useState<boolean[]>([])
  const [visible, setVisible] = useState(false)

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 150)
  }

  const disponible = quantiteDispo > 0
  const etatKey = etat.toUpperCase()
  const etatClass = etatStyles[etatKey] ?? "bg-slate-100 text-slate-700 ring-slate-600/20"

  // Réinitialiser l'index photo quand on change de costume
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setImgIndex(0); setImgErrors([]) }, [id])

  // Fade in + Escape + flèches clavier + scroll lock
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") onPrecedent?.()
      if (e.key === "ArrowRight") onSuivant?.()
    }
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
      window.removeEventListener("keydown", handler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onPrecedent, onSuivant])

  const handleImgError = (i: number) =>
    setImgErrors((prev) => { const next = [...prev]; next[i] = true; return next })

  const showImage = imageUrls.length > 0 && !imgErrors[imgIndex]

  const content = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div
        className="relative flex w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation entre costumes — flèches latérales */}
        {onPrecedent && (
          <button
            type="button"
            onClick={onPrecedent}
            className="absolute -left-12 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg hover:bg-white text-xl font-bold"
            aria-label="Costume précédent"
          >
            ‹
          </button>
        )}
        {onSuivant && (
          <button
            type="button"
            onClick={onSuivant}
            className="absolute -right-12 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg hover:bg-white text-xl font-bold"
            aria-label="Costume suivant"
          >
            ›
          </button>
        )}

        {/* Bouton fermer */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 text-lg leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        {/* Zone photo */}
        <div className="relative w-full shrink-0 overflow-hidden rounded-t-2xl bg-slate-100">
          {showImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${id}-${imgIndex}`}
              src={imageUrls[imgIndex]}
              alt={nom}
              onError={() => handleImgError(imgIndex)}
              className="w-full object-contain"
              style={{ maxHeight: "50vh" }}
            />
          ) : (
            <div className="flex w-full items-center justify-center text-slate-300" style={{ height: "240px" }}>
              <HangerIcon className="h-20 w-20" />
            </div>
          )}

          {/* Badge dispo */}
          <div className="absolute left-3 bottom-3">
            {disponible ? (
              <span className="inline-flex items-center rounded-full bg-emerald-600/95 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
                Disponible ({quantiteDispo}/{quantiteTotal})
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-rose-600/95 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
                Indisponible
              </span>
            )}
          </div>

          {/* Compteur costume */}
          {total > 1 && (
            <div className="absolute right-3 bottom-3 rounded-full bg-black/50 px-2.5 py-0.5 text-xs text-white">
              {position} / {total}
            </div>
          )}

          {/* Navigation carousel photos */}
          {imageUrls.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setImgIndex((i) => (i - 1 + imageUrls.length) % imageUrls.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow hover:bg-white text-lg"
                aria-label="Photo précédente"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setImgIndex((i) => (i + 1) % imageUrls.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow hover:bg-white text-lg"
                aria-label="Photo suivante"
              >
                ›
              </button>
              <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-1">
                {imageUrls.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setImgIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === imgIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900">{nom}</h2>
            <span className={`shrink-0 inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${etatClass}`}>
              {etatKey}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="font-medium text-slate-500">Époque</dt>
              <dd className="mt-0.5 text-slate-900">{epoque}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Taille</dt>
              <dd className="mt-0.5 text-slate-900">{taille}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Couleur</dt>
              <dd className="mt-0.5 text-slate-900">{couleur}</dd>
            </div>
            {matiere && (
              <div>
                <dt className="font-medium text-slate-500">Matière</dt>
                <dd className="mt-0.5 text-slate-900">{matiere}</dd>
              </div>
            )}
            <div>
              <dt className="font-medium text-slate-500">Stock</dt>
              <dd className="mt-0.5 text-slate-900">{quantiteDispo} / {quantiteTotal}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Propriétaire</dt>
              <dd className="mt-0.5 text-slate-900">{proprietaire}</dd>
            </div>
            {emplacement && (
              <div>
                <dt className="font-medium text-slate-500">Emplacement</dt>
                <dd className="mt-0.5 text-slate-900">{emplacement}</dd>
              </div>
            )}
          </dl>

          {description && (
            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">Description</p>
              <p className="text-sm text-slate-700 whitespace-pre-wrap">{description}</p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            {readOnly ? (
              <button
                type="button"
                onClick={onReserver}
                className="inline-flex items-center rounded-md bg-[#e21713] px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-[#f04d46]"
              >
                Réserver ce costume
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => onModifier(id)}
                  className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => onGererPret(id)}
                  className="inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
                >
                  Gérer le prêt
                </button>
                {onSupprimer && (
                  <button
                    type="button"
                    onClick={() => onSupprimer(id)}
                    className="inline-flex items-center rounded-md border border-rose-200 bg-white px-3 py-1.5 text-sm font-medium text-rose-700 shadow-sm hover:bg-rose-50"
                  >
                    Supprimer
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
