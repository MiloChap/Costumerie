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
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="L'équipe costumes" className="h-8 w-auto" />
          <a href="/gestion" className="text-sm text-slate-500 hover:text-[#e21713] transition">
            ← Retour au stock
          </a>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <AjouterCostumeForm proprietaires={proprietaires} />
      </main>
    </div>
  )
}