import { PrismaClient } from "../generated/prisma"
import { PrismaNeon } from "@prisma/adapter-neon"
import bcrypt from "bcryptjs"
import * as dotenv from "dotenv"

dotenv.config()

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = process.argv[2]
  const password = process.argv[3]
  const role = (process.argv[4] ?? "GESTIONNAIRE") as "ADMIN" | "GESTIONNAIRE"
  const nom = process.argv[5] ?? "Utilisateur"

  if (!email || !password) {
    console.error("Usage: npx tsx scripts/create-user.ts <email> <password> [ADMIN|GESTIONNAIRE] [nom]")
    process.exit(1)
  }

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashed, role, nom },
    create: { email, password: hashed, role, nom },
  })

  console.log(`✅ Utilisateur créé/mis à jour : ${user.email} (${user.role})`)
}

main().catch(console.error).finally(() => prisma.$disconnect())
