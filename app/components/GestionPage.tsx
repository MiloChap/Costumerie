"use client";

import { useEffect, useMemo, useState } from "react";
import CostumeCard, { type CostumeCardProps } from "./CostumeCard";
import CostumePopup from "./CostumePopup";
import FiltresSidebar, { type Filtres } from "./FiltresSidebar";
import StatCard from "./StatCard";
import LogoutButton from "./LogoutButton";
import FormulaireModal from "./FormulaireModal";
import AjouterCostumeForm from "./AjouterCostumeForm";
import Footer from "./Footer";
import ModifierCostumeForm, { type ModifierCostumeFormProps } from "./ModifierCostumeForm";
import { useRouter } from "next/navigation";

type Costume = Omit<
  CostumeCardProps,
  "onModifier" | "onGererPret" | "onSupprimer" | "onOpenPopup"
> & {
  proprietaire: string;
  epoqueEnum: string;
  etatEnum: string;
  images: { id: string; url: string; ordre: number }[];
  createdAt: string;
};

interface GestionPageProps {
  costumes: Costume[];
  totalCostumes: number;
  totalDispo: number;
  pretsEnCours: number;
  utilisateurNom?: string;
  estAdmin?: boolean;
}

export default function GestionPage({
  costumes,
  totalCostumes,
  totalDispo,
  pretsEnCours,
  utilisateurNom = "Utilisateur",
  estAdmin = false,
}: GestionPageProps) {
  const [filtres, setFiltres] = useState<Filtres>({ disponibleSeulement: false, tri: "DATE_DESC" });
  const [costumesLocaux, setCostumesLocaux] = useState(costumes);
  const [supprimantId, setSupprimantId] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [showAjouter, setShowAjouter] = useState(false);
  const [modifierCostumeId, setModifierCostumeId] = useState<string | null>(null);
  const [modifierCostumeData, setModifierCostumeData] = useState<ModifierCostumeFormProps["costume"] | null>(null);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setCostumesLocaux(costumes) }, [costumes]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!modifierCostumeId) { setModifierCostumeData(null); return }
    const c = costumesLocaux.find((c) => c.id === modifierCostumeId)
    if (!c) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setModifierCostumeData({
      id: c.id,
      nom: c.nom,
      epoque: c.epoqueEnum,
      taille: c.taille,
      couleur: c.couleur,
      matiere: c.matiere,
      etat: c.etatEnum,
      quantiteTotal: c.quantiteTotal,
      quantiteDispo: c.quantiteDispo,
      emplacement: c.emplacement,
      description: c.description,
      images: c.images,
      proprietaire: c.proprietaire,
    })
  }, [modifierCostumeId, costumesLocaux]);

  const costumesFiltres = useMemo(() => {
    const filtered = costumesLocaux.filter((c) => {
      if (filtres.recherche && !c.nom.toLowerCase().includes(filtres.recherche.toLowerCase()))
        return false;
      if (filtres.epoque && c.epoque !== filtres.epoque) return false;
      if (filtres.taille && !c.taille.toLowerCase().includes(filtres.taille.toLowerCase()))
        return false;
      if (filtres.couleur && !c.couleur.toLowerCase().includes(filtres.couleur.toLowerCase()))
        return false;
      if (filtres.matiere && !c.matiere?.toLowerCase().includes(filtres.matiere.toLowerCase()))
        return false;
      if (filtres.etat && c.etat !== filtres.etat)
        return false;
      if (filtres.disponibleSeulement && c.quantiteDispo <= 0) return false;
      if (filtres.proprietaire && c.proprietaire !== filtres.proprietaire)
        return false;
      return true;
    });
    if (filtres.tri === "DATE_ASC") filtered.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    else if (filtres.tri === "EPOQUE_ASC") filtered.sort((a, b) => a.epoqueEnum.localeCompare(b.epoqueEnum));
    else if (filtres.tri === "EPOQUE_DESC") filtered.sort((a, b) => b.epoqueEnum.localeCompare(a.epoqueEnum));
    else filtered.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return filtered;
  }, [filtres, costumesLocaux]);

  const popupIndex = costumesFiltres.findIndex((c) => c.id === popupId);
  const popupCostume = popupIndex >= 0 ? costumesFiltres[popupIndex] : null;

  const naviguerPopup = (direction: 1 | -1) => {
    if (costumesFiltres.length === 0) return;
    const newIndex = (popupIndex + direction + costumesFiltres.length) % costumesFiltres.length;
    setPopupId(costumesFiltres[newIndex].id);
  };

  const handleModifier = (id: string) => {
    setPopupId(null);
    setModifierCostumeId(id);
  };

  const handleGererPret = (id: string) => {
    setPopupId(null);
    router.push(`/gestion/prets?costumeId=${id}`);
  };

  const handleSupprimer = async (id: string) => {
    setPopupId(null);
    if (!confirm("Supprimer ce costume ? Cette action est irréversible.")) return;

    setSupprimantId(id);
    await new Promise((res) => setTimeout(res, 300));

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="L'équipe costumes" className="h-16 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-slate-900">{utilisateurNom}</p>
              <p className="text-xs text-slate-500">{estAdmin ? "Administrateur" : "Gestionnaire"}</p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total costumes" valeur={totalCostumes} couleur="bleu" />
          <StatCard label="Disponibles" valeur={totalDispo} couleur="vert" />
          <StatCard label="Prêts en cours" valeur={pretsEnCours} couleur="orange" />
        </section>

        {/* Actions */}
        <section className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Stock de costumes</h2>
            <p className="text-sm text-slate-500">
              {costumesFiltres.length} résultat{costumesFiltres.length > 1 ? "s" : ""} affiché{costumesFiltres.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => router.push("/gestion/prets")}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Gérer les prêts
            </button>
            <button
              type="button"
              onClick={() => setShowAjouter(true)}
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              + Ajouter un costume
            </button>
          </div>
        </section>

        {/* Sidebar + Grid */}
        <section className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          <FiltresSidebar onFiltrer={setFiltres} />

          <div className="flex-1">
            {costumesFiltres.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <p className="text-sm text-slate-500">Aucun costume ne correspond à ces filtres.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {costumesFiltres.map((c) => (
                  <div
                    key={c.id}
                    className={`transition-opacity duration-300 ${
                      supprimantId === c.id ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <CostumeCard
                      {...c}
                      onModifier={handleModifier}
                      onGererPret={handleGererPret}
                      onSupprimer={estAdmin ? handleSupprimer : undefined}
                      onOpenPopup={setPopupId}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal ajout */}
      {showAjouter && (
        <FormulaireModal onClose={() => setShowAjouter(false)}>
          <AjouterCostumeForm
            onSuccess={() => { setShowAjouter(false); router.refresh() }}
            onCancel={() => setShowAjouter(false)}
          />
        </FormulaireModal>
      )}

      {/* Modal modification */}
      {modifierCostumeId && (
        <FormulaireModal onClose={() => setModifierCostumeId(null)}>
          {modifierCostumeData ? (
            <ModifierCostumeForm
              costume={modifierCostumeData}
              onSuccess={() => { setModifierCostumeId(null); router.refresh() }}
              onCancel={() => setModifierCostumeId(null)}
            />
          ) : (
            <div className="flex items-center justify-center rounded-xl bg-white p-12 text-slate-500">
              Chargement…
            </div>
          )}
        </FormulaireModal>
      )}

      <Footer />

      {/* Popup centralisé — rendu hors stacking context via Portal dans CostumePopup */}
      {popupCostume && (
        <CostumePopup
          {...popupCostume}
          onClose={() => setPopupId(null)}
          onModifier={handleModifier}
          onGererPret={handleGererPret}
          onSupprimer={estAdmin ? handleSupprimer : undefined}
          onPrecedent={costumesFiltres.length > 1 ? () => naviguerPopup(-1) : undefined}
          onSuivant={costumesFiltres.length > 1 ? () => naviguerPopup(1) : undefined}
          position={popupIndex + 1}
          total={costumesFiltres.length}
        />
      )}
    </div>
  );
}
