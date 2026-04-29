import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import GestionPage from "@/app/components/GestionPage";

const EPOQUE_LABELS: Record<string, string> = {
  AVANT_1900: "Avant 1900",
  E1900_1910: "1900 – 1910",
  E1910_1920: "1910 – 1920",
  E1920_1930: "1920 – 1930",
  E1930_1940: "1930 – 1940",
  E1940_1950: "1940 – 1950",
  E1950_1960: "1950 – 1960",
  E1960_1970: "1960 – 1970",
  E1970_1980: "1970 – 1980",
  E1980_1990: "1980 – 1990",
  E1990_2000: "1990 – 2000",
  E2000_2010: "2000 – 2010",
  E2010_2020: "2010 – 2020",
  E2020_PRESENT: "2020 – présent",
};

const ETAT_LABELS: Record<string, string> = {
  NEUF: "NEUF",
  BON: "BON",
  USE: "USÉ",
  A_REPARER: "À RÉPARER",
  A_NETTOYER: "À NETTOYER",
};

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");

  const [costumes, proprietaires, stats] = await Promise.all([
    prisma.costume.findMany({
      include: { proprietaire: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.proprietaire.findMany({ orderBy: { nom: "asc" } }),
    Promise.all([
      prisma.costume.count(),
      prisma.costume.aggregate({ _sum: { quantiteDispo: true } }),
      prisma.pret.count({ where: { statut: "EN_COURS" } }),
    ]),
  ]);

  const [totalCostumes, dispoAgg, pretsEnCours] = stats;
  const totalDispo = dispoAgg._sum.quantiteDispo ?? 0;

  const costumesFormatted = costumes.map((c: (typeof costumes)[number]) => ({
    id: c.id,
    nom: c.nom,
    epoque: EPOQUE_LABELS[c.epoque] ?? c.epoque,
    taille: c.taille,
    couleur: c.couleur,
    etat: ETAT_LABELS[c.etat] ?? c.etat,
    imageUrl: c.imageUrl ?? undefined,
    quantiteDispo: c.quantiteDispo,
    quantiteTotal: c.quantiteTotal,
    proprietaire: c.proprietaire.nom,
    proprietaireId: c.proprietaire.id,
    emplacement: c.emplacement ?? undefined,
  }));

  return (
    <GestionPage
      costumes={costumesFormatted}
      proprietaires={proprietaires}
      totalCostumes={totalCostumes}
      totalDispo={totalDispo}
      pretsEnCours={pretsEnCours}
      utilisateurNom={session.user?.name ?? "Utilisateur"}
      estAdmin={session.user?.role === "ADMIN"}
    />
  );
}
