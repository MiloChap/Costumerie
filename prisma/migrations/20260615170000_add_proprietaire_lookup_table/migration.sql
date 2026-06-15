CREATE TABLE "Proprietaire" (
  "id"  TEXT NOT NULL,
  "nom" TEXT NOT NULL,
  CONSTRAINT "Proprietaire_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Proprietaire_nom_key" ON "Proprietaire"("nom");

INSERT INTO "Proprietaire" ("id", "nom") VALUES
  ('prop_equipe',    'L''équipe costumes'),
  ('prop_johanne',   'Johanne'),
  ('prop_caro',      'Caro'),
  ('prop_patricia',  'Patricia'),
  ('prop_julie',     'Julie'),
  ('prop_gaelle',    'Gaëlle');
