"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { useRouter } from "next/navigation"

interface AjouterCostumeFormProps {
  proprietaires: { id: string; nom: string }[]
}

type Epoque =
  | "AVANT_1900"
  | "E1900_1910"
  | "E1910_1920"
  | "E1920_1930"
  | "E1930_1940"
  | "E1940_1950"
  | "E1950_1960"
  | "E1960_1970"
  | "E1970_1980"
  | "E1980_1990"
  | "E1990_2000"
  | "E2000_2010"
  | "E2010_2020"
  | "E2020_PRESENT"

type Etat = "NEUF" | "BON" | "USE" | "A_REPARER" | "A_NETTOYER"

const EPOQUES: { value: Epoque; label: string }[] = [
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

const ETATS: { value: Etat; label: string }[] = [
  { value: "NEUF", label: "Neuf" },
  { value: "BON", label: "Bon" },
  { value: "USE", label: "Usé" },
  { value: "A_REPARER", label: "À réparer" },
  { value: "A_NETTOYER", label: "À nettoyer" },
]

const MAX_PHOTO_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]

type FieldErrors = Partial<{
  nom: string
  epoque: string
  taille: string
  couleur: string
  etat: string
  quantite: string
  proprietaireId: string
  photo: string
  submit: string
}>

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-50"

const labelClass = "block text-sm font-medium text-slate-700 mb-1.5"

const errorClass = "mt-1 text-xs text-red-600"

const sectionTitleClass =
  "text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-200"

export default function AjouterCostumeForm({
  proprietaires,
}: AjouterCostumeFormProps) {
  const [nom, setNom] = useState("")
  const [epoque, setEpoque] = useState<Epoque | "">("")
  const [taille, setTaille] = useState("")
  const [couleur, setCouleur] = useState("")
  const [etat, setEtat] = useState<Etat | "">("")
  const [quantite, setQuantite] = useState<number>(1)
  const [proprietaireId, setProprietaireId] = useState("")
  const [emplacement, setEmplacement] = useState("")
  const [description, setDescription] = useState("")
  const [fichierPhoto, setFichierPhoto] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const router = useRouter()
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setErrors((prev) => ({ ...prev, photo: undefined }))

    if (!file) {
      setFichierPhoto(null)
      setPreviewUrl(null)
      return
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors((prev) => ({ ...prev, photo: "Format non supporté (JPG, PNG, WebP)" }))
      return
    }
    if (file.size > MAX_PHOTO_SIZE) {
      setErrors((prev) => ({ ...prev, photo: "Fichier trop lourd (max 5 Mo)" }))
      return
    }

    setFichierPhoto(file)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const supprimerPhoto = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setFichierPhoto(null)
    setPreviewUrl(null)
    setErrors((prev) => ({ ...prev, photo: undefined }))
  }

  const validate = (): FieldErrors => {
    const e: FieldErrors = {}
    if (!nom.trim()) e.nom = "Le nom est obligatoire"
    if (!epoque) e.epoque = "L'époque est obligatoire"
    if (!taille.trim()) e.taille = "La taille est obligatoire"
    if (!couleur.trim()) e.couleur = "La couleur est obligatoire"
    if (!etat) e.etat = "L'état est obligatoire"
    if (!Number.isFinite(quantite) || quantite < 1)
      e.quantite = "La quantité doit être au moins 1"
    if (!proprietaireId) e.proprietaireId = "Le propriétaire est obligatoire"
    return e
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setLoading(true)

    try {
      let imageUrl: string | undefined

      if (fichierPhoto) {
        const formData = new FormData()
        formData.append("file", fichierPhoto)
        const res = await fetch("/api/upload", { method: "POST", body: formData })
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(data.error ?? "Échec de l'upload de la photo")
        }
        const data = (await res.json()) as { url: string }
        imageUrl = data.url
      }

      const res = await fetch("/api/costumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: nom.trim(),
          epoque,
          taille: taille.trim(),
          couleur: couleur.trim(),
          etat,
          quantiteTotal: quantite,
          quantiteDispo: quantite,
          proprietaireId,
          emplacement: emplacement.trim() || undefined,
          description: description.trim() || undefined,
          imageUrl,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error ?? "Échec de la création du costume")
      }

      if (previewUrl) URL.revokeObjectURL(previewUrl)
      router.push("/gestion")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue"
      setErrors({ submit: message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[680px] rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
    >
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Ajouter un costume</h1>
        <p className="mt-1 text-sm text-slate-500">
          Renseigne les informations du costume à ajouter au stock.
        </p>
      </header>

      {/* Section 1 — Informations générales */}
      <section className="mb-8">
        <h2 className={sectionTitleClass}>Informations générales</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="nom" className={labelClass}>
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              id="nom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="ex: Robe de bal Belle Époque"
              disabled={loading}
              className={inputClass}
            />
            {errors.nom && <p className={errorClass}>{errors.nom}</p>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="epoque" className={labelClass}>
                Époque <span className="text-red-500">*</span>
              </label>
              <select
                id="epoque"
                value={epoque}
                onChange={(e) => setEpoque(e.target.value as Epoque | "")}
                disabled={loading}
                className={inputClass}
              >
                <option value="">Sélectionner une époque</option>
                {EPOQUES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.epoque && <p className={errorClass}>{errors.epoque}</p>}
            </div>

            <div>
              <label htmlFor="etat" className={labelClass}>
                État <span className="text-red-500">*</span>
              </label>
              <select
                id="etat"
                value={etat}
                onChange={(e) => setEtat(e.target.value as Etat | "")}
                disabled={loading}
                className={inputClass}
              >
                <option value="">Sélectionner un état</option>
                {ETATS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.etat && <p className={errorClass}>{errors.etat}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="taille" className={labelClass}>
                Taille <span className="text-red-500">*</span>
              </label>
              <input
                id="taille"
                type="text"
                value={taille}
                onChange={(e) => setTaille(e.target.value)}
                placeholder="ex: M, 38, 42, Unique…"
                disabled={loading}
                className={inputClass}
              />
              {errors.taille && <p className={errorClass}>{errors.taille}</p>}
            </div>

            <div>
              <label htmlFor="couleur" className={labelClass}>
                Couleur <span className="text-red-500">*</span>
              </label>
              <input
                id="couleur"
                type="text"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
                placeholder="ex: Bleu marine, Rouge / blanc…"
                disabled={loading}
                className={inputClass}
              />
              {errors.couleur && <p className={errorClass}>{errors.couleur}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Stock */}
      <section className="mb-8">
        <h2 className={sectionTitleClass}>Stock</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="quantite" className={labelClass}>
              Quantité disponible <span className="text-red-500">*</span>
            </label>
            <input
              id="quantite"
              type="number"
              min={1}
              value={quantite}
              onChange={(e) => setQuantite(Number.parseInt(e.target.value, 10) || 0)}
              disabled={loading}
              className={inputClass}
            />
            <p className="mt-1 text-xs text-slate-500">
              La quantité disponible sera initialisée à cette valeur
            </p>
            {errors.quantite && <p className={errorClass}>{errors.quantite}</p>}
          </div>

          <div>
            <label htmlFor="proprietaire" className={labelClass}>
              Propriétaire <span className="text-red-500">*</span>
            </label>
            <select
              id="proprietaire"
              value={proprietaireId}
              onChange={(e) => setProprietaireId(e.target.value)}
              disabled={loading}
              className={inputClass}
            >
              <option value="">Sélectionner un propriétaire</option>
              {proprietaires.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nom}
                </option>
              ))}
            </select>
            {errors.proprietaireId && <p className={errorClass}>{errors.proprietaireId}</p>}
          </div>

          <div>
            <label htmlFor="emplacement" className={labelClass}>
              Emplacement
            </label>
            <input
              id="emplacement"
              type="text"
              value={emplacement}
              onChange={(e) => setEmplacement(e.target.value)}
              placeholder="ex: Rayon A — Étagère 2"
              disabled={loading}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* Section 3 — Détails */}
      <section className="mb-8">
        <h2 className={sectionTitleClass}>Détails</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="description" className={labelClass}>
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Notes, détails particuliers…"
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="photo" className={labelClass}>
              Photo
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              disabled={loading}
              className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200 disabled:cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP — max 5 Mo</p>
            {errors.photo && <p className={errorClass}>{errors.photo}</p>}

            {previewUrl && (
              <div className="mt-3 flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                <img
                  src={previewUrl}
                  alt="Aperçu de la photo sélectionnée"
                  className="max-h-[200px] rounded-md object-contain"
                />
                <button
                  type="button"
                  onClick={supprimerPhoto}
                  disabled={loading}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Supprimer la photo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {errors.submit && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errors.submit}
        </div>
      )}

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={() => router.push("/gestion")}
          disabled={loading}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Ajout en cours…" : "Ajouter le costume"}
        </button>
      </div>
    </form>
  )
}
