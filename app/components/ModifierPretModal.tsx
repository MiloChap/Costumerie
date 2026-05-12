"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Pret } from "@/app/components/PretsPage";

interface ModifierPretModalProps {
  pret: Pret;
  onSuccess: (pretModifie: Pret) => void;
  onFermer: () => void;
}

export default function ModifierPretModal({
  pret,
  onSuccess,
  onFermer,
}: ModifierPretModalProps) {
  const [dateDebut, setDateDebut] = useState<string>(pret.dateDebut.slice(0, 10));
  const [dateRetourPrevue, setDateRetourPrevue] = useState<string>(
    pret.dateRetourPrevue ? pret.dateRetourPrevue.slice(0, 10) : ""
  );
  const [notes, setNotes] = useState<string>(pret.notes ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const handleClose = () => { setVisible(false); setTimeout(onFermer, 150) };
  useEffect(() => { requestAnimationFrame(() => setVisible(true)) }, []);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/prets/${pret.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateDebut: dateDebut || undefined,
          dateRetourPrevue: dateRetourPrevue || null,
          notes: notes || null,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Échec de la modification.");
      }

      onSuccess({
        ...pret,
        dateDebut: dateDebut ? new Date(dateDebut).toISOString() : pret.dateDebut,
        dateRetourPrevue: dateRetourPrevue
          ? new Date(dateRetourPrevue).toISOString()
          : undefined,
        notes: notes || undefined,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10";

  const content = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Modifier le prêt</h2>
            <p className="mt-0.5 text-sm text-slate-500">
              {pret.costume.nom} — {pret.emprunteur}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 text-lg"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="dateDebut" className="mb-1.5 block text-sm font-medium text-slate-700">
              Date de début
            </label>
            <input
              id="dateDebut"
              type="date"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="dateRetourPrevue" className="mb-1.5 block text-sm font-medium text-slate-700">
              Date de retour prévue
            </label>
            <input
              id="dateRetourPrevue"
              type="date"
              value={dateRetourPrevue}
              onChange={(e) => setDateRetourPrevue(e.target.value)}
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-slate-700">
              Commentaires
            </label>
            <textarea
              id="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes, remarques sur l'état, conditions particulières…"
              disabled={loading}
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
            >
              {loading ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
