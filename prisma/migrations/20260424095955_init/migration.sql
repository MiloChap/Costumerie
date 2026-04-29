-- CreateEnum
CREATE TYPE "Epoque" AS ENUM ('AVANT_1900', 'E1900_1910', 'E1910_1920', 'E1920_1930', 'E1930_1940', 'E1940_1950', 'E1950_1960', 'E1960_1970', 'E1970_1980', 'E1980_1990', 'E1990_2000', 'E2000_2010', 'E2010_2020', 'E2020_PRESENT');

-- CreateEnum
CREATE TYPE "Etat" AS ENUM ('NEUF', 'BON', 'USE', 'A_REPARER', 'HORS_SERVICE');

-- CreateEnum
CREATE TYPE "StatutPret" AS ENUM ('EN_COURS', 'RENDU', 'EN_RETARD');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GESTIONNAIRE', 'ADMIN');

-- CreateTable
CREATE TABLE "Costume" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "epoque" "Epoque" NOT NULL,
    "description" TEXT,
    "taille" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "etat" "Etat" NOT NULL DEFAULT 'BON',
    "quantiteTotal" INTEGER NOT NULL DEFAULT 1,
    "quantiteDispo" INTEGER NOT NULL DEFAULT 1,
    "emplacement" TEXT,
    "imageUrl" TEXT,
    "proprietaireId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Costume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proprietaire" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "Proprietaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pret" (
    "id" TEXT NOT NULL,
    "costumeId" TEXT NOT NULL,
    "emprunteur" TEXT NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetourPrevue" TIMESTAMP(3),
    "dateRetourReelle" TIMESTAMP(3),
    "statut" "StatutPret" NOT NULL DEFAULT 'EN_COURS',
    "notes" TEXT,

    CONSTRAINT "Pret_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Costume" ADD CONSTRAINT "Costume_proprietaireId_fkey" FOREIGN KEY ("proprietaireId") REFERENCES "Proprietaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pret" ADD CONSTRAINT "Pret_costumeId_fkey" FOREIGN KEY ("costumeId") REFERENCES "Costume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
