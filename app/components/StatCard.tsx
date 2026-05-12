export interface StatCardProps {
  label: string
  valeur: number
  couleur?: "rouge" | "vert" | "orange" | "bleu"
}

const palettes: Record<NonNullable<StatCardProps["couleur"]>, { bg: string; ring: string; text: string; dot: string }> = {
  rouge:  { bg: "bg-[#fbb9b6]",  ring: "ring-[#f04d46]/30", text: "text-[#e21713]",   dot: "bg-[#e21713]" },
  vert:   { bg: "bg-emerald-50", ring: "ring-emerald-200",  text: "text-emerald-700", dot: "bg-emerald-500" },
  orange: { bg: "bg-amber-50",   ring: "ring-amber-200",    text: "text-amber-700",   dot: "bg-amber-500" },
  bleu:   { bg: "bg-sky-50",     ring: "ring-sky-200",      text: "text-sky-700",     dot: "bg-sky-500" },
}

export default function StatCard({ label, valeur, couleur }: StatCardProps) {
  const p = couleur ? palettes[couleur] : null

  return (
    <div
      className={`flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm ring-1 ring-inset ${
        p ? p.ring : "ring-slate-100"
      }`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className={`mt-0.5 text-2xl font-bold tabular-nums ${p ? p.text : "text-slate-900"}`}>
          {valeur.toLocaleString("fr-FR")}
        </p>
      </div>
      {p && (
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${p.bg}`}>
          <span className={`h-2 w-2 rounded-full ${p.dot}`} />
        </div>
      )}
    </div>
  )
}
