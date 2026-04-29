"use client"

import { useRouter } from "next/navigation"
import { useState, type ChangeEvent, type FormEvent } from "react"

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
  { value: "E2020_PRESENT", label: "2020 – aujourd'hui" },
] as const

const ETATS = [
  { value: "NEUF", label: "Neuf" },
  { value: "BON", label: "Bon" },
  { value: "USE", label: "Usé" },
  { value: "A_REPARER", label: "À réparer" },
  { value: "HORS_SERVICE", label: "Hors service" },
] as const

export interface ModifierCostumeFormProps {
  costume: {
    id: string
    nom: string
    epoque: string
    taille: string
    couleur: string
    etat: string
    quantiteTotal: number
    quantiteDispo: number
    emplacement?: string
    description?: string
    imageUrl?: string
    proprietaireId: string
  }
  proprietaires: { id: string; nom: string }[]
}

export default function ModifierCostumeForm({
  costume,
  proprietaires,
}: ModifierCostumeFormProps) {
  const router = useRouter()

  const [nom, setNom] = useState<string>(costume.nom)
  const [epoque, setEpoque] = useState<string>(costume.epoque)
  const [taille, setTaille] = useState<string>(costume.taille)
  const [couleur, setCouleur] = useState<string>(costume.couleur)
  const [etat, setEtat] = useState<string>(costume.etat)
  const [quantiteTotal, setQuantiteTotal] = useState<number>(costume.quantiteTotal)
  const [quantiteDispo, setQuantiteDispo] = useState<number>(costume.quantiteDispo)
  const [emplacement, setEmplacement] = useState<string>(costume.emplacement ?? "")
  const [description, setDescription] = useState<string>(costume.description ?? "")
  const [proprietaireId, setProprietaireId] = useState<string>(costume.proprietaireId)

  const [photoSupprimee, setPhotoSupprimee] = useState<boolean>(false)
  const [nouvelleImageFile, setNouvelleImageFile] = useState<File | null>(null)
  const [nouvelleImagePreview, setNouvelleImagePreview] = useState<string | null>(null)

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const photoActuelleVisible =
    !!costume.imageUrl && !photoSupprimee && !nouvelleImagePreview

  const handleQuantiteTotalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(1, Number(e.target.value) || 1)
    setQuantiteTotal(v)
    if (quantiteDispo > v) setQuantiteDispo(v)
  }

  const handleQuantiteDispoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(0, Number(e.target.value) || 0)
    setQuantiteDispo(Math.min(v, quantiteTotal))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setNouvelleImageFile(file)
    if (nouvelleImagePreview) URL.revokeObjectURL(nouvelleImagePreview)
    setNouvelleImagePreview(file ? URL.createObjectURL(file) : null)
    if (file) setPhotoSupprimee(false)
  }

  const handleSupprimerPhotoActuelle = () => {
    setPhotoSupprimee(true)
  }

  const handleAnnulerNouvellePhoto = () => {
    setNouvelleImageFile(null)
    if (nouvelleImagePreview) URL.revokeObjectURL(nouvelleImagePreview)
    setNouvelleImagePreview(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (quantiteDispo > quantiteTotal) {
      setError("La quantité disponible ne peut pas dépasser la quantité totale.")
      return
    }

    setSubmitting(true)
    try {
      let nouvelleImageUrl: string | null | undefined = undefined

      if (nouvelleImageFile) {
        const formData = new FormData()
        formData.append("file", nouvelleImageFile)
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })
        if (!uploadRes.ok) {
          const data = (await uploadRes.json().catch(() => ({}))) as { error?: string }
          throw new Error(data.error ?? "Échec de l'upload de la photo.")
        }
        const data = (await uploadRes.json()) as { url: string }
        nouvelleImageUrl = data.url
      }

      const imageUrlPayload =
        nouvelleImageUrl !== undefined
          ? nouvelleImageUrl
          : photoSupprimee
            ? null
            : undefined

      const res = await fetch(`/api/costumes/${costume.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          epoque,
          taille,
          couleur,
          etat,
          quantiteTotal,
          quantiteDispo,
          proprietaireId,
          emplacement: emplacement || undefined,
          description: description || undefined,
          imageUrl: imageUrlPayload,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error ?? "Échec de la modification du costume.")
      }

      router.push("/gestion")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleAnnuler = () => {
    router.push("/gestion")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Modifier le costume
        </h1>
        <p className="text-sm text-slate-500">
          Mettez à jour les informations du costume puis enregistrez les modifications.
        </p>
      </header>

      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-slate-700">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div>
          <label htmlFor="epoque" className="mb-1 block text-sm font-medium text-slate-700">
            Époque <span className="text-red-500">*</span>
          </label>
          <select
            id="epoque"
            required
            value={epoque}
            onChange={(e) => setEpoque(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            {EPOQUES.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="etat" className="mb-1 block text-sm font-medium text-slate-700">
            État <span className="text-red-500">*</span>
          </label>
          <select
            id="etat"
            required
            value={etat}
            onChange={(e) => setEtat(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            {ETATS.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="taille" className="mb-1 block text-sm font-medium text-slate-700">
            Taille <span className="text-red-500">*</span>
          </label>
          <input
            id="taille"
            type="text"
            required
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div>
          <label htmlFor="couleur" className="mb-1 block text-sm font-medium text-slate-700">
            Couleur <span className="text-red-500">*</span>
          </label>
          <input
            id="couleur"
            type="text"
            required
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="quantiteTotal"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Quantité totale <span className="text-red-500">*</span>
          </label>
          <input
            id="quantiteTotal"
            type="number"
            min={1}
            required
            value={quantiteTotal}
            onChange={handleQuantiteTotalChange}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="quantiteDispo"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Quantité disponible <span className="text-red-500">*</span>
          </label>
          <input
            id="quantiteDispo"
            type="number"
            min={0}
            max={quantiteTotal}
            required
            value={quantiteDispo}
            onChange={handleQuantiteDispoChange}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <p className="text-xs text-slate-500 sm:col-span-2 -mt-2">
          La quantité disponible ne peut pas dépasser la quantité totale.
        </p>

        <div>
          <label
            htmlFor="proprietaireId"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Propriétaire <span className="text-red-500">*</span>
          </label>
          <select
            id="proprietaireId"
            required
            value={proprietaireId}
            onChange={(e) => setProprietaireId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            {proprietaires.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nom}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="emplacement"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Emplacement
          </label>
          <input
            id="emplacement"
            type="text"
            value={emplacement}
            onChange={(e) => setEmplacement(e.target.value)}
            placeholder="Ex : Étagère B-3"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Photo</span>

          {photoActuelleVisible && costume.imageUrl && (
            <div className="mb-3 flex items-start gap-4">
              <img
                src={`/api/costumes/${costume.id}/image`}
                alt={`Photo actuelle de ${costume.nom}`}
                className="h-32 w-32 rounded-lg border border-slate-200 object-cover"
              />
              <button
                type="button"
                onClick={handleSupprimerPhotoActuelle}
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
              >
                Supprimer la photo actuelle
              </button>
            </div>
          )}

          {photoSupprimee && !nouvelleImagePreview && (
            <p className="mb-3 text-sm text-amber-700">
              La photo actuelle sera supprimée à l'enregistrement.{" "}
              <button
                type="button"
                onClick={() => setPhotoSupprimee(false)}
                className="underline hover:no-underline"
              >
                Annuler
              </button>
            </p>
          )}

          {nouvelleImagePreview && (
            <div className="mb-3 flex items-start gap-4">
              <img
                src={nouvelleImagePreview}
                alt="Aperçu de la nouvelle photo"
                className="h-32 w-32 rounded-lg border border-slate-200 object-cover"
              />
              <button
                type="button"
                onClick={handleAnnulerNouvellePhoto}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Retirer la nouvelle photo
              </button>
            </div>
          )}

          <input
            id="photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-slate-800"
          />
          <p className="mt-1 text-xs text-slate-500">
            JPG, PNG ou WEBP, 5 Mo maximum.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={handleAnnuler}
          disabled={submitting}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Enregistrement..." : "Enregistrer les modifications"}
        </button>
      </div>
    </form>
  )
}