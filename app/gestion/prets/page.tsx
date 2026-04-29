import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import PretsPage from "@/app/components/PretsPage";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");

  const [prets, costumesDisponibles] = await Promise.all([
    prisma.pret.findMany({
      include: {
        costume: {
          select: { id: true, nom: true, taille: true, couleur: true },
        },
      },
      orderBy: { dateDebut: "desc" },
    }),
    prisma.costume.findMany({
      where: { quantiteDispo: { gt: 0 } },
      select: {
        id: true,
        nom: true,
        taille: true,
        couleur: true,
        quantiteDispo: true,
      },
      orderBy: { nom: "asc" },
    }),
  ]);

  const pretsFormatted = prets.map((p: (typeof prets)[number]) => ({
    id: p.id,
    emprunteur: p.emprunteur,
    dateDebut: p.dateDebut.toISOString(),
    dateRetourPrevue: p.dateRetourPrevue?.toISOString(),
    dateRetourReelle: p.dateRetourReelle?.toISOString(),
    statut: p.statut as "EN_COURS" | "RENDU" | "EN_RETARD",
    notes: p.notes ?? undefined,
    costume: p.costume,
  }));

  return (
    <PretsPage
      prets={pretsFormatted}
      costumesDisponibles={costumesDisponibles}
    />
  );
}
