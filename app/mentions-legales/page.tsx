import Link from "next/link"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="L'équipe costumes" className="h-10 w-auto" />
          <Link href="/catalogue" className="text-sm text-slate-500 hover:text-[#e21713] transition">
            ← Retour au catalogue
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-8 text-2xl font-semibold text-slate-900">Mentions légales & Politique de confidentialité</h1>

        {/* Éditeur */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Éditeur du site</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 space-y-1">
            <p><span className="font-medium">Raison sociale :</span> L&apos;Équipe Costumes</p>
            <p><span className="font-medium">Adresse :</span> 36 rue du Faubourg des Arts, 33300 Bordeaux</p>
            <p><span className="font-medium">Email :</span>{" "}
              <a href="mailto:lequipecostumes@gmail.com" className="text-[#e21713] hover:underline">
                lequipecostumes@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Hébergeur */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Hébergeur</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 space-y-1">
            <p><span className="font-medium">Société :</span> Vercel Inc.</p>
            <p><span className="font-medium">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><span className="font-medium">Site :</span>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#e21713] hover:underline">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Données personnelles */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Données personnelles collectées</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 space-y-4">
            <div>
              <p className="font-medium mb-1">Comptes administrateurs</p>
              <p className="text-slate-600">Nom, adresse email et mot de passe (chiffré, non lisible). Ces données sont utilisées uniquement pour l&apos;authentification à l&apos;interface de gestion. Elles sont conservées tant que le compte est actif.</p>
            </div>
            <div>
              <p className="font-medium mb-1">Formulaire de réservation</p>
              <p className="text-slate-600">Nom, adresse email, numéro de téléphone (facultatif) et message. Ces données sont transmises par email à L&apos;Équipe Costumes pour traiter votre demande. Elles ne sont pas stockées dans une base de données.</p>
            </div>
            <div>
              <p className="font-medium mb-1">Cookies</p>
              <p className="text-slate-600">Ce site utilise uniquement un cookie de session strictement nécessaire au maintien de votre connexion (authentification). Aucun cookie publicitaire ou de traçage n&apos;est utilisé.</p>
            </div>
          </div>
        </section>

        {/* Droits */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Vos droits</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants sur vos données personnelles :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Droit d&apos;accès — obtenir une copie des données vous concernant</li>
              <li>Droit de rectification — corriger des données inexactes</li>
              <li>Droit à l&apos;effacement — demander la suppression de vos données</li>
              <li>Droit d&apos;opposition — vous opposer au traitement de vos données</li>
              <li>Droit à la portabilité — recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:lequipecostumes@gmail.com" className="text-[#e21713] hover:underline">
                lequipecostumes@gmail.com
              </a>
            </p>
            <p className="mt-2 text-slate-500">
              En cas de réclamation non résolue, vous pouvez saisir la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#e21713] hover:underline">
                cnil.fr
              </a>
            </p>
          </div>
        </section>

        {/* Responsable de traitement */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-800">Responsable de traitement</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <p>L&apos;Équipe Costumes — 36 rue du Faubourg des Arts, 33300 Bordeaux</p>
            <p className="mt-1">
              <a href="mailto:lequipecostumes@gmail.com" className="text-[#e21713] hover:underline">
                lequipecostumes@gmail.com
              </a>
            </p>
          </div>
        </section>

        <p className="text-xs text-slate-400 text-center mt-10">
          Dernière mise à jour : mai 2026
        </p>
      </main>
    </div>
  )
}
