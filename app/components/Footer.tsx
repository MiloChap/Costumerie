export default function Footer({ variant = "default" }: { variant?: "default" | "pink" }) {
  const base = "border-t py-6 text-center text-xs"
  const styles = variant === "pink"
    ? "border-[#f04d46]/50 text-[#f04d46]"
    : "border-slate-200 text-slate-400"
  const linkStyles = variant === "pink"
    ? "text-[#e21713] hover:text-[#e21713]"
    : "hover:text-[#e21713] transition"

  return (
    <footer className={`${base} ${styles}`}>
      <a href="/mentions-legales" className={linkStyles}>
        Mentions légales & Politique de confidentialité
      </a>
      {" · "}
      <span>© {new Date().getFullYear()} L&apos;Équipe Costumes</span>
      {" · "}
      <span>
        Made with ♥ by{" "}
        <a href="mailto:mchapat1998@gmail.com" className={linkStyles}>
          Milo Chapat
        </a>
      </span>
    </footer>
  )
}
