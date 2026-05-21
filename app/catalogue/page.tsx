"use client"

import { useEffect, useState } from "react"
import CostumePopup from "@/app/components/CostumePopup"
import ReservationModal from "@/app/components/ReservationModal"
import CatalogueFiltresSidebar, { CatalogueFiltres } from "@/app/components/CatalogueFiltresSidebar"
import Footer from "@/app/components/Footer"
import { EPOQUE_LABELS } from "@/app/lib/constants"

interface CostumeCatalogue {
  id: string
  nom: string
  epoque: string
  createdAt: string
  taille: string
  couleur: string
  matiere?: string
  etat: string
  description?: string
  quantiteDispo: number
  quantiteTotal: number
  imageIds: string[]
}

const etatStyles: Record<string, string> = {
  NEUF: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  BON: "bg-sky-50 text-sky-700 ring-sky-600/20",
  USE: "bg-amber-50 text-amber-800 ring-amber-600/20",
  A_REPARER: "bg-rose-50 text-rose-700 ring-rose-600/20",
  A_NETTOYER: "bg-violet-50 text-violet-700 ring-violet-600/20",
  A_FABRIQUER: "bg-orange-50 text-orange-700 ring-orange-600/20",
}

const etatLabels: Record<string, string> = {
  NEUF: "Neuf",
  BON: "Bon",
  USE: "Usé",
  A_REPARER: "À réparer",
  A_NETTOYER: "À nettoyer",
  A_FABRIQUER: "À fabriquer",
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

function CatalogueCard({
  costume,
  onVoir,
  onReserver,
}: {
  costume: CostumeCatalogue
  onVoir: () => void
  onReserver: () => void
}) {
  const [imgError, setImgError] = useState(false)
  const disponible = costume.quantiteDispo > 0
  const etatClass = etatStyles[costume.etat] ?? "bg-slate-100 text-slate-700 ring-slate-600/20"
  const etatLabel = etatLabels[costume.etat] ?? costume.etat

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={onVoir}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400"
        aria-label={`Voir la fiche de ${costume.nom}`}
      >
        {costume.imageIds.length > 0 && !imgError ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/api/images/${costume.imageIds[0]}`}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-md opacity-40"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/api/images/${costume.imageIds[0]}`}
              alt={costume.nom}
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
              {costume.quantiteDispo}/{costume.quantiteTotal}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-rose-600/95 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
              Indispo
            </span>
          )}
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <button type="button" onClick={onVoir} className="text-left focus:outline-none">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-sm font-semibold text-slate-900 hover:text-slate-600">
              {costume.nom}
            </h3>
            <span className={`shrink-0 inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${etatClass}`}>
              {etatLabel}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">{EPOQUE_LABELS[costume.epoque] ?? costume.epoque}</p>
          <p className="truncate text-xs text-slate-500">
            {costume.taille} · {costume.couleur}{costume.matiere ? ` · ${costume.matiere}` : ""}
          </p>
        </button>

        <div className="mt-auto flex gap-1 pt-1">
          <button
            type="button"
            onClick={onVoir}
            className="flex-1 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Voir la fiche
          </button>
          <button
            type="button"
            onClick={onReserver}
            disabled={!disponible}
            className="flex-1 rounded border border-[#e21713]/30 bg-[#fbb9b6]/30 px-2 py-1 text-xs font-medium text-[#e21713] transition hover:bg-[#fbb9b6]/60 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Réserver
          </button>
        </div>
      </div>
    </article>
  )
}

export default function CataloguePage() {
  const [costumes, setCostumes] = useState<CostumeCatalogue[]>([])
  const [loading, setLoading] = useState(true)
  const [filtres, setFiltres] = useState<CatalogueFiltres>({ disponibleSeulement: false, tri: "DATE_DESC" })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [reserverCostume, setReserverCostume] = useState<{ id: string; nom: string } | null>(null)

  useEffect(() => {
    fetch("/api/catalogue")
      .then((r) => r.json())
      .then((data) => { setCostumes(data); setLoading(false) })
  }, [])

  const filtered = costumes
    .filter((c) => {
      if (filtres.disponibleSeulement && c.quantiteDispo === 0) return false
      if (filtres.recherche && !c.nom.toLowerCase().includes(filtres.recherche.toLowerCase())) return false
      if (filtres.epoque && c.epoque !== filtres.epoque) return false
      if (filtres.taille && !c.taille.toLowerCase().includes(filtres.taille.toLowerCase())) return false
      if (filtres.couleur && !c.couleur.toLowerCase().includes(filtres.couleur.toLowerCase())) return false
      if (filtres.matiere && !c.matiere?.toLowerCase().includes(filtres.matiere.toLowerCase())) return false
      if (filtres.etat && c.etat !== filtres.etat) return false
      return true
    })
    .sort((a, b) => {
      if (filtres.tri === "DATE_ASC") return a.createdAt.localeCompare(b.createdAt)
      if (filtres.tri === "EPOQUE_ASC") return a.epoque.localeCompare(b.epoque)
      if (filtres.tri === "EPOQUE_DESC") return b.epoque.localeCompare(a.epoque)
      return b.createdAt.localeCompare(a.createdAt)
    })

  const selectedIndex = selectedId ? filtered.findIndex((c) => c.id === selectedId) : -1
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null

  const handlePrecedent = () => {
    if (selectedIndex > 0) setSelectedId(filtered[selectedIndex - 1].id)
  }
  const handleSuivant = () => {
    if (selectedIndex < filtered.length - 1) setSelectedId(filtered[selectedIndex + 1].id)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="L'équipe costumes" className="h-16 w-auto" />
          </div>
          <p className="text-sm text-slate-500 hidden sm:block">Catalogue de costumes — location</p>
        </div>
      </header>

      {/* Contenu */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 lg:flex-row lg:gap-6 lg:px-6">
        <CatalogueFiltresSidebar onFiltrer={setFiltres} />

        <main className="flex-1">
          {loading ? (
            <div className="flex h-64 items-center justify-center text-slate-400">
              Chargement…
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center gap-2 text-slate-400">
              <HangerIcon className="h-12 w-12" />
              <p>Aucun costume trouvé</p>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-slate-500">{filtered.length} costume{filtered.length > 1 ? "s" : ""}</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((costume) => (
                  <CatalogueCard
                    key={costume.id}
                    costume={costume}
                    onVoir={() => setSelectedId(costume.id)}
                    onReserver={() => setReserverCostume({ id: costume.id, nom: costume.nom })}
                  />
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Popup fiche costume */}
      {selected && (
        <CostumePopup
          id={selected.id}
          nom={selected.nom}
          epoque={selected.epoque}
          taille={selected.taille}
          couleur={selected.couleur}
          matiere={selected.matiere}
          etat={selected.etat}
          imageIds={selected.imageIds}
          description={selected.description}
          quantiteDispo={selected.quantiteDispo}
          quantiteTotal={selected.quantiteTotal}
          proprietaire=""
          position={selectedIndex + 1}
          total={filtered.length}
          onClose={() => setSelectedId(null)}
          onModifier={() => {}}
          onGererPret={() => {}}
          onPrecedent={selectedIndex > 0 ? handlePrecedent : undefined}
          onSuivant={selectedIndex < filtered.length - 1 ? handleSuivant : undefined}
          readOnly
          onReserver={() => {
            setSelectedId(null)
            setReserverCostume({ id: selected.id, nom: selected.nom })
          }}
        />
      )}

      <Footer />

      {/* Modal réservation */}
      {reserverCostume && (
        <ReservationModal
          costumeName={reserverCostume.nom}
          onClose={() => setReserverCostume(null)}
        />
      )}
    </div>
  )
}
