export interface StatCardProps {
  label: string
  valeur: number
  couleur?: "bleu" | "vert" | "orange"
}

const palettes: Record<NonNullable<StatCardProps["couleur"]>, { bg: string; ring: string; text: string; dot: string }> = {
  bleu:   { bg: "bg-sky-50",     ring: "ring-sky-200",     text: "text-sky-700",     dot: "bg-sky-500" },
  vert:   { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
  orange: { bg: "bg-amber-50",   ring: "ring-amber-200",   text: "text-amber-700",   dot: "bg-amber-500" },
}

export default function StatCard({ label, valeur, couleur }: StatCardProps) {
  const p = couleur ? palettes[couleur] : null

  return (
    <div
      className={`flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-inset ${
        p ? p.ring : "ring-slate-100"
      }`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className={`mt-1 text-3xl font-bold tabular-nums ${p ? p.text : "text-slate-900"}`}>
          {valeur.toLocaleString("fr-FR")}
        </p>
      </div>
      {p && (
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${p.bg}`}>
          <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
        </div>
      )}
    </div>
  )
}
