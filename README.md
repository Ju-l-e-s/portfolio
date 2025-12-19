# Voici mon portfolio !

Bienvenue sur le code source de mon portfolio personnel. Je suis Jules Laconfourque, développeur Backend & DevOps. Ce projet est une single-page-app moderne et responsive, avec une navigation verticale en "snap-scroll".

## Architecture du Projet

J'ai basé l'architecture sur Next.js (App Router), TypeScript, et Tailwind CSS, en visant une approche modulaire et facile à maintenir.

### 1. La Stack Technique

*   **Framework**: [Next.js](https://nextjs.org/) (React avec App Router)
*   **Langage**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Linting**: ESLint

### 2. Structure des Fichiers

Voici un aperçu des dossiers importants pour comprendre l'organisation du projet :

```
/
├── public/             # Contient les fichiers statiques (ex: images).
├── messages/           # Textes multi-langues (FR/EN).
├── src/
│   ├── app/            # Pages et layouts principaux (Next.js App Router).
│   ├── components/     # Composants React, divisés en `sections` et `ui`.
│   ├── content/        # Données structurées (projets, identité, liens, etc.).
│   └── styles/         # Fichiers de style globaux.
│
├── next.config.mjs     # Fichier de configuration principal de Next.js.
├── tailwind.config.ts  # Fichier de configuration pour Tailwind CSS.
└── package.json        # Scripts et dépendances du projet.
```

### 3. Gestion du Contenu

Le contenu est centralisé pour éviter de modifier les composants :

*   **Textes multi-langues** : `messages/fr.json` et `messages/en.json`
*   **Identité + liens** : `src/content/site.ts`
*   **Projets** : `src/content/portfolio.ts`

**Avantage** : Je peux modifier le contenu sans toucher à la logique des composants React.

### 4. Composants & Design

L'approche est modulaire :
*   **`components/sections/`** : Chaque fichier correspond à une grande section de la page (Héro, À propos, etc.).
*   **`components/ui/`** : Contient les petits composants réutilisables (boutons, cartes, etc.).

### 5. Layout & Navigation

La navigation est un point clé de l'expérience sur ce site.

*   **Snap Scroll Vertical** : J'ai configuré le scroll pour qu'il "s'aimante" sur chaque section, qui fait 100% de la hauteur de l'écran (`100dvh`).
*   **Header `sticky`** : Le header reste visible en haut de l'écran pendant qu'on scrolle.
*   **Gestion de l'Offset du Header** : Pour que le header ne cache pas le haut des sections, j'ai utilisé `scroll-padding-top`.

### 6. Responsive Design

Le design est pensé "mobile-first".
*   **Logique de Rendu Conditionnel** : Pour la section Contact, par exemple, la version mobile affiche des boutons d'action rapides, tandis que la version desktop affiche un formulaire plus classique.

---

N'hésitez pas à explorer le code !
