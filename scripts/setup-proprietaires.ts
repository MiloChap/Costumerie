import { PrismaClient } from "../generated/prisma"
import { PrismaNeon } from "@prisma/adapter-neon"
import * as dotenv from "dotenv"

dotenv.config()

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const PROPRIETAIRES = ["Gaëlle", "Julie", "Johanne", "Caro", "Patricia"]

async function main() {
  // Afficher les propriétaires existants
  const existants = await prisma.proprietaire.findMany({ orderBy: { nom: "asc" } })
  console.log("Propriétaires existants :", existants.map(p => `${p.id} — ${p.nom}`).join(", "))

  // Créer les nouveaux si ils n'existent pas déjà
  for (const nom of PROPRIETAIRES) {
    const existe = existants.find(p => p.nom.toLowerCase() === nom.toLowerCase())
    if (existe) {
      console.log(`✓ Déjà existant : ${nom}`)
    } else {
      const created = await prisma.proprietaire.create({ data: { nom } })
      console.log(`✅ Créé : ${created.nom} (${created.id})`)
    }
  }

  // Afficher les anciens à supprimer manuellement si besoin
  const obsoletes = existants.filter(p =>
    !PROPRIETAIRES.some(nom => nom.toLowerCase() === p.nom.toLowerCase())
  )
  if (obsoletes.length > 0) {
    console.log("\n⚠️  Anciens propriétaires à vérifier (peuvent avoir des costumes liés) :")
    obsoletes.forEach(p => console.log(`  - ${p.id} — ${p.nom}`))
    console.log("Réassigne leurs costumes dans l'interface avant de les supprimer.")
  }
}

main().catch(console.error).finally(() => prisma.$disconnect())
