-- Étape 1 : ajouter la colonne proprietaire (string) avec valeur par défaut vide
ALTER TABLE "Costume" ADD COLUMN "proprietaire" TEXT NOT NULL DEFAULT '';

-- Étape 2 : copier le nom du propriétaire depuis la table Proprietaire
UPDATE "Costume" c
SET "proprietaire" = p."nom"
FROM "Proprietaire" p
WHERE c."proprietaireId" = p."id";

-- Étape 3 : supprimer la contrainte FK et la colonne proprietaireId
ALTER TABLE "Costume" DROP CONSTRAINT IF EXISTS "Costume_proprietaireId_fkey";
ALTER TABLE "Costume" DROP COLUMN "proprietaireId";

-- Étape 4 : supprimer la table Proprietaire
DROP TABLE "Proprietaire";
