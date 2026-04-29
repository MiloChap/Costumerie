import { PrismaClient } from "../generated/prisma"
import { Epoque, Etat } from "../generated/prisma"
import { PrismaNeon } from "@prisma/adapter-neon"
import bcrypt from "bcryptjs"

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

async function main() {
  // Admin
  const hashedPassword = await bcrypt.hash("admin1234", 10)
  await prisma.user.upsert({
    where: { email: "admin@costumerie.fr" },
    update: {},
    create: {
      email: "admin@costumerie.fr",
      password: hashedPassword,
      nom: "Administrateur",
      role: "ADMIN",
    },
  })

  // Propriétaires
  const p1 = await prisma.proprietaire.upsert({
    where: { id: "p1" },
    update: {},
    create: { id: "p1", nom: "Costumerie municipale", email: "municipal@costumerie.fr" },
  })
  const p2 = await prisma.proprietaire.upsert({
    where: { id: "p2" },
    update: {},
    create: { id: "p2", nom: "Théâtre des Arts", email: "theatre@costumerie.fr" },
  })
  const p3 = await prisma.proprietaire.upsert({
    where: { id: "p3" },
    update: {},
    create: { id: "p3", nom: "Compagnie Lumière", email: "lumiere@costumerie.fr" },
  })

  // Costumes
  const costumes = [
    {
      nom: "Robe de bal Belle Époque",
      epoque: "E1900_1910" as Epoque,
      taille: "38",
      couleur: "Ivoire",
      etat: "BON" as Etat,
      quantiteTotal: 3,
      quantiteDispo: 2,
      emplacement: "Rayon A — Étagère 2",
      proprietaireId: p1.id,
    },
    {
      nom: "Costume trois-pièces gangster",
      epoque: "E1920_1930" as Epoque,
      taille: "L",
      couleur: "Anthracite",
      etat: "NEUF" as Etat,
      quantiteTotal: 4,
      quantiteDispo: 4,
      emplacement: "Rayon B — Étagère 1",
      proprietaireId: p2.id,
    },
    {
      nom: "Tenue swing à pois",
      epoque: "E1950_1960" as Epoque,
      taille: "M",
      couleur: "Rouge / blanc",
      etat: "USE" as Etat,
      quantiteTotal: 2,
      quantiteDispo: 0,
      emplacement: "Rayon C — Étagère 4",
      proprietaireId: p3.id,
    },
    {
      nom: "Veste à franges hippie",
      epoque: "E1960_1970" as Epoque,
      taille: "S",
      couleur: "Marron",
      etat: "A_REPARER" as Etat,
      quantiteTotal: 1,
      quantiteDispo: 1,
      emplacement: "Atelier — Bac 3",
      proprietaireId: p1.id,
    },
    {
      nom: "Combinaison disco pailletée",
      epoque: "E1970_1980" as Epoque,
      taille: "M",
      couleur: "Or",
      etat: "BON" as Etat,
      quantiteTotal: 5,
      quantiteDispo: 3,
      emplacement: "Rayon D — Étagère 1",
      proprietaireId: p2.id,
    },
    {
      nom: "Tailleur années 80 à épaulettes",
      epoque: "E1980_1990" as Epoque,
      taille: "40",
      couleur: "Bleu électrique",
      etat: "NEUF" as Etat,
      quantiteTotal: 2,
      quantiteDispo: 0,
      emplacement: "Rayon D — Étagère 3",
      proprietaireId: p3.id,
    },
  ]

  for (const costume of costumes) {
    await prisma.costume.create({ data: costume })
  }

  console.log("✅ Seed terminé — propriétaires, costumes et admin créés")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())