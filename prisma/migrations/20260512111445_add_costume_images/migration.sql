-- CreateTable
CREATE TABLE "CostumeImage" (
    "id" TEXT NOT NULL,
    "costumeId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CostumeImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CostumeImage" ADD CONSTRAINT "CostumeImage_costumeId_fkey" FOREIGN KEY ("costumeId") REFERENCES "Costume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- MigrateData: move existing imageUrl values to CostumeImage
INSERT INTO "CostumeImage" ("id", "costumeId", "url", "ordre", "createdAt")
SELECT gen_random_uuid()::text, id, "imageUrl", 0, CURRENT_TIMESTAMP
FROM "Costume"
WHERE "imageUrl" IS NOT NULL;

-- AlterTable: drop imageUrl column
ALTER TABLE "Costume" DROP COLUMN "imageUrl";
