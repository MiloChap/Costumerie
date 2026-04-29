import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect, notFound } from "next/navigation";
import ModifierCostumeForm from "@/app/components/ModifierCostumeForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  const { id } = await params;

  const [costume, proprietaires] = await Promise.all([
    prisma.costume.findUnique({
      where: { id },
      include: { proprietaire: true },
    }),
    prisma.proprietaire.findMany({ orderBy: { nom: "asc" } }),
  ]);

  if (!costume) notFound();

  const costumeFormatted = {
    id: costume.id,
    nom: costume.nom,
    epoque: costume.epoque,
    taille: costume.taille,
    couleur: costume.couleur,
    etat: costume.etat,
    quantiteTotal: costume.quantiteTotal,
    quantiteDispo: costume.quantiteDispo,
    emplacement: costume.emplacement ?? undefined,
    description: costume.description ?? undefined,
    imageUrl: costume.imageUrl ?? undefined,
    proprietaireId: costume.proprietaireId,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center gap-4">
          <a
            href="/gestion"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            ← Retour au stock
          </a>
          <h1 className="text-lg font-semibold text-slate-900">
            Modifier un costume
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <ModifierCostumeForm
          costume={costumeFormatted}
          proprietaires={proprietaires}
        />
      </main>
    </div>
  );
}
