export type EpoqueValue =
  | "AVANT_1900"
  | "E1900_1910"
  | "E1910_1920"
  | "E1920_1930"
  | "E1930_1940"
  | "E1940_1950"
  | "E1950_1960"
  | "E1960_1970"
  | "E1970_1980"
  | "E1980_1990"
  | "E1990_2000"
  | "E2000_2010"
  | "E2010_2020"
  | "E2020_PRESENT"

export type EtatValue = "NEUF" | "BON" | "USE" | "A_REPARER" | "A_NETTOYER" | "A_FABRIQUER"

// Tableau utilisé dans les selects des formulaires et sidebars
export const EPOQUES: { value: EpoqueValue; label: string }[] = [
  { value: "AVANT_1900", label: "Avant 1900" },
  { value: "E1900_1910", label: "1900 – 1910" },
  { value: "E1910_1920", label: "1910 – 1920" },
  { value: "E1920_1930", label: "1920 – 1930" },
  { value: "E1930_1940", label: "1930 – 1940" },
  { value: "E1940_1950", label: "1940 – 1950" },
  { value: "E1950_1960", label: "1950 – 1960" },
  { value: "E1960_1970", label: "1960 – 1970" },
  { value: "E1970_1980", label: "1970 – 1980" },
  { value: "E1980_1990", label: "1980 – 1990" },
  { value: "E1990_2000", label: "1990 – 2000" },
  { value: "E2000_2010", label: "2000 – 2010" },
  { value: "E2010_2020", label: "2010 – 2020" },
  { value: "E2020_PRESENT", label: "2020 – présent" },
]

// Record dérivé pour les mappings côté serveur (gestion/page.tsx)
export const EPOQUE_LABELS: Record<string, string> = Object.fromEntries(
  EPOQUES.map(({ value, label }) => [value, label])
)

export const ETATS: { value: EtatValue; label: string }[] = [
  { value: "NEUF", label: "Neuf" },
  { value: "BON", label: "Bon" },
  { value: "USE", label: "Usé" },
  { value: "A_REPARER", label: "À réparer" },
  { value: "A_NETTOYER", label: "À nettoyer" },
  { value: "A_FABRIQUER", label: "À fabriquer" },
]

// Labels uppercase pour l'affichage dans le backoffice (badges CostumeCard)
export const ETAT_LABELS_UPPER: Record<string, string> = {
  NEUF: "NEUF",
  BON: "BON",
  USE: "USÉ",
  A_REPARER: "À RÉPARER",
  A_NETTOYER: "À NETTOYER",
  A_FABRIQUER: "À FABRIQUER",
}
