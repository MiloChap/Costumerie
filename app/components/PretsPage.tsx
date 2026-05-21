"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import NouveauPretModal from "@/app/components/NouveauPretModal";
import ModifierPretModal from "@/app/components/ModifierPretModal";
import { useSearchParams } from "next/navigation";
import Footer from "@/app/components/Footer";

export interface Pret {
  id: string;
  emprunteur: string;
  dateDebut: string;
  dateRetourPrevue?: string;
  dateRetourReelle?: string;
  statut: "EN_COURS" | "RENDU" | "EN_RETARD";
  notes?: string;
  costume: {
    id: string;
    nom: string;
    taille: string;
    couleur: string;
  };
}

export interface CostumeDispo {
  id: string;
  nom: string;
  taille: string;
  couleur: string;
  quantiteDispo: number;
}

interface PretsPageProps {
  prets: Pret[];
  costumesDisponibles: CostumeDispo[];
}

type Onglet = "EN_COURS" | "HISTORIQUE";

const formatDate = (iso?: string): string => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const computeStatut = (p: Pret): Pret["statut"] => {
  if (p.statut === "RENDU") return "RENDU";
  if (
    p.dateRetourPrevue &&
    new Date(p.dateRetourPrevue).getTime() < Date.now()
  ) {
    return "EN_RETARD";
  }
  return "EN_COURS";
};

const StatutBadge = ({ statut }: { statut: Pret["statut"] }) => {
  const styles: Record<Pret["statut"], string> = {
    EN_COURS: "bg-blue-100 text-blue-800 ring-blue-200",
    EN_RETARD: "bg-red-100 text-red-800 ring-red-200",
    RENDU: "bg-green-100 text-green-800 ring-green-200",
  };
  const labels: Record<Pret["statut"], string> = {
    EN_COURS: "En cours",
    EN_RETARD: "En retard",
    RENDU: "Rendu",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[statut]}`}
    >
      {labels[statut]}
    </span>
  );
};

export default function PretsPage({
  prets: pretsInitiaux,
  costumesDisponibles,
}: PretsPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const costumeIdFiltre = searchParams.get("costumeId");
  const [prets, setPrets] = useState<Pret[]>(pretsInitiaux);
  const [onglet, setOnglet] = useState<Onglet>("EN_COURS");
  const [modaleOuverte, setModaleOuverte] = useState<boolean>(false);
  const [pretAModifier, setPretAModifier] = useState<Pret | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const pretsAffiches = useMemo(() => {
    return prets
      .map((p) => ({ ...p, statut: computeStatut(p) }))
      .filter((p) => {
        if (costumeIdFiltre && p.costume.id !== costumeIdFiltre) return false;
        return onglet === "EN_COURS"
          ? p.statut === "EN_COURS" || p.statut === "EN_RETARD"
          : p.statut === "RENDU";
      })
      .sort(
        (a, b) =>
          new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime(),
      );
  }, [prets, onglet, costumeIdFiltre]);

  const handleRetour = async (id: string): Promise<void> => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/prets/${id}/retour`, { method: "PATCH" });
      if (res.ok) {
        const aujourdHui = new Date().toISOString();
        setPrets((prev) =>
          prev.map((p) =>
            p.id === id
              ? { ...p, statut: "RENDU", dateRetourReelle: aujourdHui }
              : p,
          ),
        );
        router.refresh();
      }
    } finally {
      setLoadingId(null);
    }
  };

  const handleSupprimerPret = async (id: string): Promise<void> => {
    if (
      !confirm(
        "Supprimer ce prêt ? La quantité disponible sera restaurée si le prêt était en cours.",
      )
    )
      return;

    const res = await fetch(`/api/prets/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPrets((prev) => prev.filter((p) => p.id !== id));
      router.refresh();
    }
  };

  const handleNouveauPret = (nouveau: Pret): void => {
    setPrets((prev) => [nouveau, ...prev]);
    setModaleOuverte(false);
    router.refresh();
  };

  const handlePretModifie = (pretModifie: Pret): void => {
    setPrets((prev) => prev.map((p) => (p.id === pretModifie.id ? pretModifie : p)));
    setPretAModifier(null);
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              type="button"
              onClick={() => router.push("/gestion")}
              className="mb-2 text-sm text-gray-600 hover:text-gray-900"
            >
              ← Retour au stock
            </button>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Gestion des prêts
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setModaleOuverte(true)}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            + Nouveau prêt
          </button>
        </div>

        {/* Onglets */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Onglets">
            {(
              [
                { key: "EN_COURS", label: "En cours" },
                { key: "HISTORIQUE", label: "Historique" },
              ] as { key: Onglet; label: string }[]
            ).map((o) => {
              const actif = onglet === o.key;
              return (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setOnglet(o.key)}
                  className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition ${
                    actif
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </nav>
        </div>

        {costumeIdFiltre && (
          <div className="mb-4 flex items-center gap-3 rounded-md bg-blue-50 px-4 py-2 text-sm text-blue-700 ring-1 ring-inset ring-blue-200">
            <span>Filtré par costume</span>
            <button
              type="button"
              onClick={() => router.push("/gestion/prets")}
              className="ml-auto text-xs underline hover:no-underline"
            >
              Voir tous les prêts
            </button>
          </div>
        )}

        {/* Tableau */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Costume
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Emprunteur
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Date de début
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Retour prévu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {pretsAffiches.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-12 text-center text-sm text-gray-500"
                    >
                      Aucun prêt{" "}
                      {onglet === "EN_COURS" ? "en cours" : "dans l'historique"}
                      .
                    </td>
                  </tr>
                ) : (
                  pretsAffiches.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">
                        <div className="font-medium text-gray-900">
                          {p.costume.nom}
                        </div>
                        <div className="text-xs text-gray-500">
                          Taille {p.costume.taille} · {p.costume.couleur}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {p.emprunteur}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {formatDate(p.dateDebut)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {formatDate(p.dateRetourPrevue)}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <StatutBadge statut={p.statut} />
                      </td>
                      <td className="px-4 py-3 text-right text-sm">
                        <div className="flex items-center justify-end gap-2">
                          {p.statut !== "RENDU" ? (
                            <>
                              <button
                                type="button"
                                onClick={() => setPretAModifier(p)}
                                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                              >
                                Modifier
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRetour(p.id)}
                                disabled={loadingId === p.id}
                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                {loadingId === p.id ? "…" : "Marquer rendu"}
                              </button>
                            </>
                          ) : (
                            <span className="text-xs text-gray-400">
                              Rendu le {formatDate(p.dateRetourReelle)}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => handleSupprimerPret(p.id)}
                            className="inline-flex items-center rounded-md border border-rose-200 bg-white px-3 py-1.5 text-xs font-medium text-rose-700 shadow-sm transition hover:bg-rose-50"
                          >
                            ✕
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {pretAModifier && (
        <ModifierPretModal
          pret={pretAModifier}
          onSuccess={handlePretModifie}
          onFermer={() => setPretAModifier(null)}
        />
      )}

      {modaleOuverte && (
        <NouveauPretModal
          costumesDisponibles={costumesDisponibles}
          onSuccess={handleNouveauPret}
          onFermer={() => setModaleOuverte(false)}
        />
      )}
      <Footer />
    </div>
  );
}
