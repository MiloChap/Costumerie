"use client";

import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { EPOQUES, ETATS, type EpoqueValue, type EtatValue } from "@/app/lib/constants";

interface AjouterCostumeFormProps {
  proprietaires: string[];
  onSuccess?: () => void;
  onCancel?: () => void;
}

type Epoque = EpoqueValue;
type Etat = EtatValue;

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface PhotoEntry {
  file: File;
  previewUrl: string;
}

type FieldErrors = Partial<{
  nom: string;
  epoque: string;
  taille: string;
  couleur: string;
  etat: string;
  quantite: string;
  proprietaire: string;
  photo: string;
  submit: string;
}>;

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-50";

const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

const errorClass = "mt-1 text-xs text-red-600";

const sectionTitleClass =
  "text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-200";

export default function AjouterCostumeForm({
  proprietaires,
  onSuccess,
  onCancel,
}: AjouterCostumeFormProps) {
  const [nom, setNom] = useState("");
  const [epoque, setEpoque] = useState<Epoque | "">("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [matiere, setMatiere] = useState("");
  const [etat, setEtat] = useState<Etat | "">("");
  const [quantite, setQuantite] = useState<number>(1);
  const [proprietaire, setProprietaire] = useState("");
  const [emplacement, setEmplacement] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<PhotoEntry[]>([]);

  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  const handlePhotosChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    setErrors((prev) => ({ ...prev, photo: undefined }));

    const invalides = files.filter(
      (f) => !ALLOWED_TYPES.includes(f.type) || f.size > MAX_PHOTO_SIZE
    );

    if (invalides.length > 0) {
      setErrors((prev) => ({
        ...prev,
        photo: "Certains fichiers sont invalides (format JPG/PNG/WebP, max 5 Mo)",
      }));
      return;
    }

    const nouvelles: PhotoEntry[] = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...nouvelles]);
  };

  const supprimerPhoto = (index: number) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!nom.trim()) e.nom = "Le nom est obligatoire";
    if (!epoque) e.epoque = "L'époque est obligatoire";
    if (!taille.trim()) e.taille = "La taille est obligatoire";
    if (!couleur.trim()) e.couleur = "La couleur est obligatoire";
    if (!etat) e.etat = "L'état est obligatoire";
    if (!Number.isFinite(quantite) || quantite < 1)
      e.quantite = "La quantité doit être au moins 1";
    if (!proprietaire) e.proprietaire = "Le propriétaire est obligatoire";
    return e;
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const imageUrls: string[] = [];

      for (const photo of photos) {
        const formData = new FormData();
        formData.append("file", photo.file);
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          throw new Error(data.error ?? "Échec de l'upload de la photo");
        }
        const data = (await res.json()) as { url: string };
        imageUrls.push(data.url);
      }

      const res = await fetch("/api/costumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: nom.trim(),
          epoque,
          taille: taille.trim(),
          couleur: couleur.trim(),
          matiere: matiere.trim() || undefined,
          etat,
          quantiteTotal: quantite,
          proprietaire,
          emplacement: emplacement.trim() || undefined,
          description: description.trim() || undefined,
          imageUrls,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Échec de la création du costume");
      }

      photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      if (onSuccess) onSuccess(); else router.push("/gestion");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Une erreur est survenue";
      setErrors({ submit: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[680px] rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
    >
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Ajouter un costume
        </h1>
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

            <div>
              <label htmlFor="matiere" className={labelClass}>
                Matière
              </label>
              <input
                id="matiere"
                type="text"
                value={matiere}
                onChange={(e) => setMatiere(e.target.value)}
                placeholder="ex: Soie, Coton, Velours…"
                disabled={loading}
                className={inputClass}
              />
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
              onChange={(e) =>
                setQuantite(Number.parseInt(e.target.value, 10) || 0)
              }
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
              value={proprietaire}
              onChange={(e) => setProprietaire(e.target.value)}
              disabled={loading}
              className={inputClass}
            >
              <option value="">Sélectionner un propriétaire</option>
              {proprietaires.map((nom) => (
                <option key={nom} value={nom}>
                  {nom}
                </option>
              ))}
            </select>
            {errors.proprietaire && (
              <p className={errorClass}>{errors.proprietaire}</p>
            )}
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
            <label className={labelClass}>Photos</label>
            <input
              id="photos"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={handlePhotosChange}
              disabled={loading}
              className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200 disabled:cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-slate-500">
              JPG, PNG, WebP — max 5 Mo par photo — plusieurs photos acceptées
            </p>
            {errors.photo && <p className={errorClass}>{errors.photo}</p>}

            {photos.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {photos.map((photo, i) => (
                  <div key={i} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.previewUrl}
                      alt={`Photo ${i + 1}`}
                      className="h-24 w-24 rounded-md border border-slate-200 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => supprimerPhoto(i)}
                      disabled={loading}
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white shadow hover:bg-rose-700 disabled:opacity-50"
                      aria-label="Supprimer cette photo"
                    >
                      ×
                    </button>
                  </div>
                ))}
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
          onClick={() => onCancel ? onCancel() : router.push("/gestion")}
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
  );
}
