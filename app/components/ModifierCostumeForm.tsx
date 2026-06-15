"use client";

import { useRouter } from "next/navigation";
import { useState, type ChangeEvent } from "react";
import { EPOQUES, ETATS } from "@/app/lib/constants";

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface ImageExistante {
  id: string;
  url: string;
  ordre: number;
}

interface NouvellePhoto {
  file: File;
  previewUrl: string;
}

export interface ModifierCostumeFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  proprietaires: string[];
  costume: {
    id: string;
    nom: string;
    epoque: string;
    taille: string;
    couleur: string;
    matiere?: string;
    etat: string;
    quantiteTotal: number;
    quantiteDispo: number;
    emplacement?: string;
    description?: string;
    images: ImageExistante[];
    proprietaire: string;
  };
}

export default function ModifierCostumeForm({
  costume,
  proprietaires,
  onSuccess,
  onCancel,
}: ModifierCostumeFormProps) {
  const router = useRouter();

  const [nom, setNom] = useState<string>(costume.nom);
  const [epoque, setEpoque] = useState<string>(costume.epoque);
  const [taille, setTaille] = useState<string>(costume.taille);
  const [couleur, setCouleur] = useState<string>(costume.couleur);
  const [matiere, setMatiere] = useState<string>(costume.matiere ?? "");
  const [etat, setEtat] = useState<string>(costume.etat);
  const [quantiteTotal, setQuantiteTotal] = useState<number>(costume.quantiteTotal);
  const [quantiteDispo, setQuantiteDispo] = useState<number>(costume.quantiteDispo);
  const [emplacement, setEmplacement] = useState<string>(costume.emplacement ?? "");
  const [description, setDescription] = useState<string>(costume.description ?? "");
  const [proprietaire, setProprietaire] = useState<string>(costume.proprietaire);

  const [imagesExistantes, setImagesExistantes] = useState<ImageExistante[]>(costume.images);
  const [idsASupprimer, setIdsASupprimer] = useState<string[]>([]);
  const [nouvellesPhotos, setNouvellesPhotos] = useState<NouvellePhoto[]>([]);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuantiteTotalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(1, Number(e.target.value) || 1);
    setQuantiteTotal(v);
    if (quantiteDispo > v) setQuantiteDispo(v);
  };

  const handleQuantiteDispoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(0, Number(e.target.value) || 0);
    setQuantiteDispo(Math.min(v, quantiteTotal));
  };

  const handleSupprimerExistante = (id: string) => {
    setImagesExistantes((prev) => prev.filter((img) => img.id !== id));
    setIdsASupprimer((prev) => [...prev, id]);
  };

  const handleNouvellesPhotos = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";

    const invalides = files.filter(
      (f) => !ALLOWED_TYPES.includes(f.type) || f.size > MAX_PHOTO_SIZE
    );
    if (invalides.length > 0) {
      setError("Certains fichiers sont invalides (format JPG/PNG/WebP, max 5 Mo)");
      return;
    }

    const nouvelles: NouvellePhoto[] = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setNouvellesPhotos((prev) => [...prev, ...nouvelles]);
  };

  const handleSupprimerNouvelle = (index: number) => {
    setNouvellesPhotos((prev) => {
      URL.revokeObjectURL(prev[index].previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setError(null);

    if (quantiteDispo > quantiteTotal) {
      setError("La quantité disponible ne peut pas dépasser la quantité totale.");
      return;
    }

    setSubmitting(true);
    try {
      const addImageUrls: string[] = [];

      for (const photo of nouvellesPhotos) {
        const formData = new FormData();
        formData.append("file", photo.file);
        const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
        if (!uploadRes.ok) {
          const data = (await uploadRes.json().catch(() => ({}))) as { error?: string };
          throw new Error(data.error ?? "Échec de l'upload de la photo.");
        }
        const data = (await uploadRes.json()) as { url: string };
        addImageUrls.push(data.url);
      }

      const res = await fetch(`/api/costumes/${costume.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          epoque,
          taille,
          couleur,
          matiere: matiere || undefined,
          etat,
          quantiteTotal,
          quantiteDispo,
          proprietaire,
          emplacement: emplacement || undefined,
          description: description || undefined,
          addImageUrls,
          deleteImageIds: idsASupprimer,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Échec de la modification du costume.");
      }

      nouvellesPhotos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      if (onSuccess) onSuccess(); else router.push("/gestion");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10";

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
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-slate-700">
            Nom <span className="text-red-500">*</span>
          </label>
          <input id="nom" type="text" required value={nom} onChange={(e) => setNom(e.target.value)} className={fieldClass} />
        </div>

        <div>
          <label htmlFor="epoque" className="mb-1 block text-sm font-medium text-slate-700">
            Époque <span className="text-red-500">*</span>
          </label>
          <select id="epoque" required value={epoque} onChange={(e) => setEpoque(e.target.value)} className={fieldClass}>
            {EPOQUES.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="etat" className="mb-1 block text-sm font-medium text-slate-700">
            État <span className="text-red-500">*</span>
          </label>
          <select id="etat" required value={etat} onChange={(e) => setEtat(e.target.value)} className={fieldClass}>
            {ETATS.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="taille" className="mb-1 block text-sm font-medium text-slate-700">
            Taille <span className="text-red-500">*</span>
          </label>
          <input id="taille" type="text" required value={taille} onChange={(e) => setTaille(e.target.value)} className={fieldClass} />
        </div>

        <div>
          <label htmlFor="couleur" className="mb-1 block text-sm font-medium text-slate-700">
            Couleur <span className="text-red-500">*</span>
          </label>
          <input id="couleur" type="text" required value={couleur} onChange={(e) => setCouleur(e.target.value)} className={fieldClass} />
        </div>

        <div>
          <label htmlFor="matiere" className="mb-1 block text-sm font-medium text-slate-700">
            Matière
          </label>
          <input id="matiere" type="text" value={matiere} onChange={(e) => setMatiere(e.target.value)} placeholder="ex: Soie, Coton, Velours…" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="quantiteTotal" className="mb-1 block text-sm font-medium text-slate-700">
            Quantité totale <span className="text-red-500">*</span>
          </label>
          <input id="quantiteTotal" type="number" min={1} required value={quantiteTotal} onChange={handleQuantiteTotalChange} className={fieldClass} />
        </div>

        <div>
          <label htmlFor="quantiteDispo" className="mb-1 block text-sm font-medium text-slate-700">
            Quantité disponible <span className="text-red-500">*</span>
          </label>
          <input id="quantiteDispo" type="number" min={0} max={quantiteTotal} required value={quantiteDispo} onChange={handleQuantiteDispoChange} className={fieldClass} />
        </div>

        <p className="text-xs text-slate-500 sm:col-span-2 -mt-2">
          La quantité disponible ne peut pas dépasser la quantité totale.
        </p>

        <div>
          <label htmlFor="proprietaire" className="mb-1 block text-sm font-medium text-slate-700">
            Propriétaire <span className="text-red-500">*</span>
          </label>
          <select id="proprietaire" required value={proprietaire} onChange={(e) => setProprietaire(e.target.value)} className={fieldClass}>
            {proprietaires.map((nom) => <option key={nom} value={nom}>{nom}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="emplacement" className="mb-1 block text-sm font-medium text-slate-700">
            Emplacement
          </label>
          <input id="emplacement" type="text" value={emplacement} onChange={(e) => setEmplacement(e.target.value)} placeholder="Ex : Étagère B-3" className={fieldClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea id="description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className={`${fieldClass} resize-y`} />
        </div>

        {/* Photos */}
        <div className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Photos</span>

          {/* Photos existantes */}
          {imagesExistantes.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-3">
              {imagesExistantes.map((img) => (
                <div key={img.id} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/api/images/${img.id}`}
                    alt="Photo existante"
                    className="h-24 w-24 rounded-lg border border-slate-200 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleSupprimerExistante(img.id)}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white shadow hover:bg-rose-700"
                    aria-label="Supprimer cette photo"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Nouvelles photos en attente */}
          {nouvellesPhotos.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-3">
              {nouvellesPhotos.map((photo, i) => (
                <div key={i} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.previewUrl}
                    alt={`Nouvelle photo ${i + 1}`}
                    className="h-24 w-24 rounded-lg border border-slate-200 object-cover opacity-80 ring-2 ring-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => handleSupprimerNouvelle(i)}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white shadow hover:bg-rose-700"
                    aria-label="Retirer cette photo"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            id="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={handleNouvellesPhotos}
            className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-slate-800"
          />
          <p className="mt-1 text-xs text-slate-500">JPG, PNG ou WEBP, 5 Mo maximum par photo.</p>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => onCancel ? onCancel() : router.push("/gestion")}
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
  );
}
