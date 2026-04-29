"use client";

import { useMemo, useState } from "react";
import CostumeCard, { type CostumeCardProps } from "./CostumeCard";
import FiltresSidebar, { type Filtres } from "./FiltresSidebar";
import StatCard from "./StatCard";
import LogoutButton from "./LogoutButton";
import { useRouter } from "next/navigation";

type Costume = Omit<
  CostumeCardProps,
  "onModifier" | "onGererPret" | "onSupprimer"
> & {
  proprietaireId: string;
};

interface GestionPageProps {
  costumes: Costume[];
  proprietaires: { id: string; nom: string }[];
  totalCostumes: number;
  totalDispo: number;
  pretsEnCours: number;
  utilisateurNom?: string;
  estAdmin?: boolean;
  onSeDeconnecter?: () => void;
  onAjouter?: () => void;
  onGererPrets?: () => void;
}

export default function GestionPage({
  costumes,
  proprietaires,
  totalCostumes,
  totalDispo,
  pretsEnCours,
  utilisateurNom = "Utilisateur",
  estAdmin = false,
  onSeDeconnecter,
  onAjouter,
  onGererPrets,
}: GestionPageProps) {
  const [filtres, setFiltres] = useState<Filtres>({
    disponibleSeulement: false,
  });
  const [costumesLocaux, setCostumesLocaux] = useState(costumes);
  const [supprimantId, setSupprimantId] = useState<string | null>(null);
  const router = useRouter();

  const costumesFiltres = useMemo(() => {
    return costumesLocaux.filter((c) => {
      if (
        filtres.recherche &&
        !c.nom.toLowerCase().includes(filtres.recherche.toLowerCase())
      )
        return false;
      if (filtres.epoque && c.epoque !== filtres.epoque) return false;
      if (
        filtres.taille &&
        !c.taille.toLowerCase().includes(filtres.taille.toLowerCase())
      )
        return false;
      if (
        filtres.couleur &&
        !c.couleur.toLowerCase().includes(filtres.couleur.toLowerCase())
      )
        return false;
      if (filtres.etat && c.etat.toLowerCase() !== filtres.etat.toLowerCase())
        return false;
      if (filtres.disponibleSeulement && c.quantiteDispo <= 0) return false;
      if (filtres.proprietaireId && c.proprietaireId !== filtres.proprietaireId)
        return false;
      return true;
    });
  }, [filtres, costumesLocaux]);

  const handleModifier = (id: string) => router.push(`/gestion/costume/${id}`);
  const handleSupprimer = async (id: string) => {
    if (!confirm("Supprimer ce costume ? Cette action est irréversible."))
      return;

    setSupprimantId(id);

    await new Promise((res) => setTimeout(res, 300)); // attendre le fade

    const res = await fetch(`/api/costumes/${id}`, { method: "DELETE" });

    if (res.ok) {
      setCostumesLocaux((prev) => prev.filter((c) => c.id !== id));
      router.refresh();
    } else {
      setSupprimantId(null);
      const data = await res.json();
      alert(data.error ?? "Erreur lors de la suppression");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <span className="text-sm font-bold">C</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Costumerie
              </h1>
              <p className="text-xs text-slate-500">Gestion du stock</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-slate-900">
                {utilisateurNom}
              </p>
              <p className="text-xs text-slate-500">
                {estAdmin ? "Administrateur" : "Gestionnaire"}
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="Total costumes"
            valeur={totalCostumes}
            couleur="bleu"
          />
          <StatCard label="Disponibles" valeur={totalDispo} couleur="vert" />
          <StatCard
            label="Prêts en cours"
            valeur={pretsEnCours}
            couleur="orange"
          />
        </section>

        {/* Actions */}
        <section className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Stock de costumes
            </h2>
            <p className="text-sm text-slate-500">
              {costumesFiltres.length} résultat
              {costumesFiltres.length > 1 ? "s" : ""} affiché
              {costumesFiltres.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => router.push("/gestion/prets")}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Gérer les prêts
            </button>
            <button
              type="button"
              onClick={() => router.push("/gestion/ajouter")}
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
            >
              + Ajouter un costume
            </button>
          </div>
        </section>

        {/* Sidebar + Grid */}
        <section className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          <FiltresSidebar
            proprietaires={proprietaires}
            onFiltrer={setFiltres}
          />

          <div className="flex-1">
            {costumesFiltres.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <p className="text-sm text-slate-500">
                  Aucun costume ne correspond à ces filtres.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {costumesFiltres.map((c) => (
                  <div
                    key={c.id}
                    className={`transition-all duration-400 ease-in-out ${
                      supprimantId === c.id
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <CostumeCard
                      {...c}
                      onModifier={handleModifier}
                      onGererPret={(id) =>
                        router.push(`/gestion/prets?costumeId=${id}`)
                      }
                      onSupprimer={estAdmin ? handleSupprimer : undefined}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
