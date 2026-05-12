"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Pret, CostumeDispo } from "@/app/components/PretsPage";

interface NouveauPretModalProps {
  costumesDisponibles: CostumeDispo[];
  onSuccess: (nouveauPret: Pret) => void;
  onFermer: () => void;
}

export default function NouveauPretModal({
  costumesDisponibles,
  onSuccess,
  onFermer,
}: NouveauPretModalProps) {
  const [costumeId, setCostumeId] = useState<string>("");
  const [rechercheCostume, setRechercheCostume] = useState<string>("");
  const [menuOuvert, setMenuOuvert] = useState<boolean>(false);
  const [emprunteur, setEmprunteur] = useState<string>("");
  const [dateRetourPrevue, setDateRetourPrevue] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = () => { setVisible(false); setTimeout(onFermer, 150); };

  const costumesFiltres = costumesDisponibles.filter((c) =>
    `${c.nom} ${c.taille} ${c.couleur}`
      .toLowerCase()
      .includes(rechercheCostume.toLowerCase()),
  );

  const costumeSelectionne = costumesDisponibles.find(
    (c) => c.id === costumeId,
  );

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (!costumeId || !emprunteur.trim()) {
      setError("Costume et emprunteur sont requis.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/prets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          costumeId,
          emprunteur: emprunteur.trim(),
          dateRetourPrevue: dateRetourPrevue || undefined,
          notes: notes.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        setError(msg || "Erreur lors de la création du prêt.");
        return;
      }

      const nouveauPret = (await res.json()) as Pret;
      onSuccess(nouveauPret);
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nouveau-pret-titre"
    >
      <div
        className="w-full max-w-[560px] overflow-hidden rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-gray-200 px-6 py-4">
          <h2
            id="nouveau-pret-titre"
            className="text-lg font-semibold text-gray-900"
          >
            Nouveau prêt
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <div className="relative">
            <label
              htmlFor="costume"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Costume <span className="text-red-600">*</span>
            </label>
            <input
              id="costume"
              type="text"
              autoComplete="off"
              placeholder="Rechercher un costume..."
              value={
                costumeSelectionne
                  ? `${costumeSelectionne.nom} — Taille ${costumeSelectionne.taille} — ${costumeSelectionne.couleur}`
                  : rechercheCostume
              }
              onChange={(e) => {
                setRechercheCostume(e.target.value);
                setCostumeId("");
                setMenuOuvert(true);
              }}
              onFocus={() => setMenuOuvert(true)}
              onBlur={() => setTimeout(() => setMenuOuvert(false), 150)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
            {menuOuvert && costumesFiltres.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
                {costumesFiltres.map((c) => (
                  <li
                    key={c.id}
                    onMouseDown={() => {
                      setCostumeId(c.id);
                      setMenuOuvert(false);
                    }}
                    className="cursor-pointer px-3 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    {c.nom} — Taille {c.taille} — {c.couleur}{" "}
                    <span className="text-gray-500">
                      ({c.quantiteDispo} dispo)
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label
              htmlFor="emprunteur"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Emprunteur <span className="text-red-600">*</span>
            </label>
            <input
              id="emprunteur"
              type="text"
              required
              value={emprunteur}
              onChange={(e) => setEmprunteur(e.target.value)}
              placeholder="Nom de l'emprunteur"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="dateRetour"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Date de retour prévue
            </label>
            <input
              id="dateRetour"
              type="date"
              value={dateRetourPrevue}
              onChange={(e) => setDateRetourPrevue(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Commentaires libres..."
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-inset ring-red-200">
              {error}
            </p>
          )}

          <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={submitting}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Création..." : "Créer le prêt"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
