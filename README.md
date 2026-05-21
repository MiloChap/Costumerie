# L'Équipe Costumes — Gestion de stock & catalogue en ligne

Application web fullstack livrée à une association bordelaise gérant une collection de costumes de scène. Le projet couvre deux besoins distincts : un **backoffice de gestion interne** (stock, prêts, utilisateurs) et une **vitrine publique** permettant aux clients de parcourir le catalogue et de soumettre des demandes de réservation.

> **Site livré :** [lequipecostumes.vercel.app](https://lequipecostumes.vercel.app)

---

## Contexte métier

L'association prête et loue des costumes à des particuliers et troupes de théâtre. Avant cette application, le suivi du stock se faisait manuellement. Les besoins identifiés en phase de cadrage :

- Suivre les quantités disponibles en temps réel (plusieurs exemplaires par costume)
- Enregistrer et clôturer les prêts avec dates et emprunteurs
- Offrir aux clients un catalogue filtrable sans compte à créer
- Recevoir les demandes de réservation par email
- Permettre à plusieurs bénévoles d'administrer le stock sans partager un mot de passe unique

---

## Stack technique & justifications

| Technologie                 | Rôle                 | Pourquoi ce choix                                                                                                                                                                              |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js 15** (App Router) | Framework fullstack  | Server Components pour le SEO et le chargement initial ; API Routes pour le backend ; déploiement natif sur Vercel                                                                             |
| **React 19**                | UI                   | Concurrent features, `createPortal` pour les modaux                                                                                                                                            |
| **TypeScript (strict)**     | Typage statique      | Sécurité des contrats entre composants et API, détection d'erreurs à la compilation                                                                                                            |
| **Prisma 7**                | ORM                  | Migrations versionnées, typage auto-généré depuis le schéma, client typesafe                                                                                                                   |
| **Neon PostgreSQL**         | Base de données      | PostgreSQL serverless avec connexion poolée — compatible avec les cold starts de Vercel                                                                                                        |
| **NextAuth v5**             | Authentification     | Sessions JWT, provider Credentials (email + bcrypt), callbacks pour injecter le rôle utilisateur dans le token                                                                                 |
| **Vercel Blob**             | Stockage d'images    | Stockage privé managé, intégré à l'écosystème Vercel, URL signées                                                                                                                              |
| **nodemailer + Gmail SMTP** | Email transactionnel | L'association partage une adresse Gmail collective — pas de domaine vérifié, pas de service tiers payant. Un compte `noreply@` dédié avec App Password envoie pour le compte de l'organisation |
| **Tailwind CSS**            | Styles               | Utility-first, responsive intégré, pas de CSS mort en production                                                                                                                               |
| **Vercel**                  | Déploiement          | CI/CD automatique depuis GitHub, Edge Network, variables d'environnement sécurisées                                                                                                            |

---

## Architecture

```
app/
├── api/                        # API Routes (backend)
│   ├── auth/                   # Forgot-password, reset-password
│   ├── catalogue/              # GET public — liste costumes sans données sensibles
│   ├── costumes/               # CRUD costumes (authentifié)
│   ├── images/[imageId]/       # Proxy image — sert le Blob privé sans exposer l'URL signée
│   ├── prets/                  # Gestion des prêts (GET, POST, PATCH, DELETE)
│   ├── reservation/            # POST public — envoie email de réservation
│   └── upload/                 # Upload images vers Vercel Blob
├── components/                 # Composants React réutilisables
├── catalogue/                  # Page publique (Client Component)
├── gestion/                    # Backoffice (Server Component, auth requise)
├── mentions-legales/           # Page RGPD statique
├── login/ forgot-password/ reset-password/
middleware.ts                   # Protection des routes, redirection RBAC
auth.ts                         # Config NextAuth — JWT + role injection
prisma/schema.prisma            # Modèles BDD
```

### Séparation public / authentifié

Le middleware NextAuth intercepte toutes les requêtes. Les routes publiques (`/catalogue`, `/mentions-legales`, `/api/catalogue`, `/api/reservation`, `/api/images/*`) sont explicitement whitelistées. Toutes les autres nécessitent une session valide. Les routes `/admin/*` vérifient en plus le rôle `ADMIN`.

### Proxy images

Les images sont stockées en mode **privé** sur Vercel Blob. Plutôt qu'exposer des URLs signées côté client (durée de vie limitée, recalcul nécessaire), un API Route `/api/images/[imageId]` récupère l'image par son ID en base, appelle le Blob avec le token serveur, et la pipe directement dans la réponse HTTP. Cette approche centralise le contrôle d'accès et permet de changer de provider de stockage sans modifier un seul composant front.

---

## Fonctionnalités principales

### Backoffice (`/gestion`)

- **Catalogue interne** : grille filtrée et triée (époque, état, taille, couleur, matière, propriétaire, disponibilité)
- **Fiche costume** : popup avec carrousel d'images, données complètes, navigation précédent/suivant
- **CRUD costumes** : formulaires en modal (ouverture instantanée — données déjà chargées côté serveur, pas de second fetch)
- **Gestion des prêts** : création, modification, clôture avec mise à jour automatique de la quantité disponible via transaction Prisma
- **Gestion des utilisateurs** : création de comptes administrateurs (rôle `ADMIN` ou `USER`)
- **Réinitialisation de mot de passe** : flow complet email → token cryptographique (32 bytes hex, TTL 1h) → nouveau mot de passe

### Catalogue public (`/catalogue`)

- Accès sans compte, aucune donnée de session
- Filtres : époque, taille, couleur, matière, état, disponibilité, tri (date d'ajout, époque)
- Popup fiche détaillée en lecture seule
- Formulaire de réservation (nom, email, téléphone, dates, message) avec consentement RGPD obligatoire
- Les données de réservation sont transmises par email uniquement — **rien n'est stocké en base**

---

## Logique métier clé

### Gestion des quantités

Chaque costume possède `quantiteTotal` et `quantiteDispo`. La création d'un prêt et sa clôture sont encapsulées dans une **transaction Prisma** qui met à jour atomiquement les deux tables :

```ts
await prisma.$transaction(async (tx) => {
  await tx.pret.create({ data: { ... } })
  await tx.costume.update({ data: { quantiteDispo: { decrement: 1 } } })
})
```

Cela garantit qu'un prêt ne peut pas exister sans que la quantité disponible soit décrémentée — même en cas d'erreur réseau entre les deux opérations.

### Authentification & rôles

NextAuth v5 utilise un provider `Credentials`. À la connexion, le mot de passe est vérifié avec `bcryptjs`. Le rôle (`ADMIN` / `USER`) est injecté dans le JWT via le callback `jwt`, puis lu dans le callback `session`. Le middleware lit `req.auth?.user?.role` pour autoriser ou non l'accès aux routes admin.

### Animations & UX modaux

Tous les modaux utilisent le pattern `createPortal(content, document.body)` pour sortir du contexte de stacking CSS. L'animation fade est gérée via un état `visible` déclenché par `requestAnimationFrame` (fade-in) et `setTimeout(onClose, 150ms)` (fade-out). Au montage, la largeur de la scrollbar est mesurée (`window.innerWidth - document.documentElement.clientWidth`) et appliquée en `paddingRight` sur le `body` pour éviter le décalage de mise en page à l'ouverture.

---

## Conformité RGPD

- Page `/mentions-legales` avec éditeur, hébergeur, données collectées, droits (accès, rectification, effacement, opposition, portabilité), contact CNIL
- Checkbox de consentement obligatoire dans le formulaire de réservation
- Les demandes de réservation ne sont pas persistées en base — email only
- Cookie de session strictement nécessaire (NextAuth JWT), aucun cookie tiers

---

## Installation locale

```bash
# 1. Cloner et installer
git clone https://github.com/MiloChap/Costumerie.git
cd costumerie
npm install

# 2. Variables d'environnement
cp .env.example .env
# Remplir DATABASE_URL, DIRECT_URL, AUTH_SECRET, BLOB_READ_WRITE_TOKEN,
# GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO, NEXTAUTH_URL

# 3. Base de données
npx prisma migrate dev

# 4. Lancer le serveur
npm run dev
```

> **Note :** Le projet utilise Prisma 7 avec `prisma.config.ts`. La variable `DIRECT_URL` est requise pour les migrations (connexion directe, sans pooler).

---

## Points techniques notables

- **Server Components par défaut** — seuls les composants nécessitant de l'interactivité ou des hooks sont marqués `"use client"`, minimisant le JavaScript envoyé au navigateur
- **Responsive mobile-first** — sidebar de filtres collapsible sur mobile (toggle avec badge du nombre de filtres actifs), grille adaptative
- **Optimistic UI** — suppressions et modifications reflétées immédiatement dans l'état local sans recharger la page
- **TypeScript strict** — aucun `any` non justifié, interfaces explicites sur toutes les props et réponses API
- **Sécurité emails** — échappement HTML systématique des entrées utilisateur avant injection dans les templates nodemailer

---

_Made with ♥ by [Milo Chapat](mailto:mchapat1998@gmail.com)_
