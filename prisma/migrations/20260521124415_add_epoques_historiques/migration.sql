-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Epoque" ADD VALUE 'ANTIQUITE';
ALTER TYPE "Epoque" ADD VALUE 'MOYEN_AGE';
ALTER TYPE "Epoque" ADD VALUE 'RENAISSANCE';
ALTER TYPE "Epoque" ADD VALUE 'E17EME';
ALTER TYPE "Epoque" ADD VALUE 'E18EME';
ALTER TYPE "Epoque" ADD VALUE 'E1800_1850';
ALTER TYPE "Epoque" ADD VALUE 'E1850_1900';
ALTER TYPE "Epoque" ADD VALUE 'INCLASSABLE';
