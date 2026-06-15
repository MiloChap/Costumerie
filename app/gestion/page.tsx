import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import GestionPage from "@/app/components/GestionPage";
import { EPOQUE_LABELS, ETAT_LABELS_UPPER as ETAT_LABELS } from "@/app/lib/constants";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");

  const [costumes, proprietaires, stats] = await Promise.all([
    prisma.costume.findMany({
      include: { images: { orderBy: { ordre: "asc" } } },
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
    matiere: c.matiere ?? undefined,
    etat: ETAT_LABELS[c.etat] ?? c.etat,
    imageUrl: c.images[0]?.url ?? undefined,
    imageIds: c.images.map((img) => img.id),
    images: c.images.map((img) => ({ id: img.id, url: img.url, ordre: img.ordre })),
    description: c.description ?? undefined,
    quantiteDispo: c.quantiteDispo,
    quantiteTotal: c.quantiteTotal,
    proprietaire: c.proprietaire,
    emplacement: c.emplacement ?? undefined,
    epoqueEnum: c.epoque as string,
    etatEnum: c.etat as string,
    createdAt: c.createdAt.toISOString(),
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
