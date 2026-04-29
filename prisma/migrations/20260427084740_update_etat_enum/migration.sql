/*
  Warnings:

  - The values [HORS_SERVICE] on the enum `Etat` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Etat_new" AS ENUM ('NEUF', 'BON', 'USE', 'A_REPARER', 'A_NETTOYER');
ALTER TABLE "public"."Costume" ALTER COLUMN "etat" DROP DEFAULT;
ALTER TABLE "Costume" ALTER COLUMN "etat" TYPE "Etat_new" USING ("etat"::text::"Etat_new");
ALTER TYPE "Etat" RENAME TO "Etat_old";
ALTER TYPE "Etat_new" RENAME TO "Etat";
DROP TYPE "public"."Etat_old";
ALTER TABLE "Costume" ALTER COLUMN "etat" SET DEFAULT 'BON';
COMMIT;
