import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import AjouterCostumeForm from "@/app/components/AjouterCostumeForm"

export default async function Page() {
  const session = await auth()
  if (!session) redirect("/login")

  const proprietaires = await prisma.proprietaire.findMany({
    orderBy: { nom: "asc" },
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center gap-4">
          
            <a href="/gestion"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            ← Retour au stock
          </a>
          <h1 className="text-lg font-semibold text-slate-900">
            Ajouter un costume
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <AjouterCostumeForm proprietaires={proprietaires} />
      </main>
    </div>
  )
}