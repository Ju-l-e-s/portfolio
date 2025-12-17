# Portfolio de Jules Laconfourque

Ce projet est le portfolio personnel de Jules Laconfourque, un développeur Backend & DevOps. Il est conçu comme une expérience web moderne, single-page, et entièrement responsive avec une navigation verticale de type "snap-scroll".

## Architecture Détaillée

L'architecture de ce projet est basée sur Next.js avec le App Router, TypeScript, et Tailwind CSS. Elle est pensée pour être modulaire, facile à maintenir et à mettre à jour.

### 1. Stack Technique

*   **Framework**: [Next.js](https://nextjs.org/) (React avec App Router)
*   **Langage**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Linting**: ESLint

### 2. Structure des Dossiers

La structure des dossiers est organisée pour séparer clairement les préoccupations (`separation of concerns`). Elle inclut la gestion de l'internationalisation (i18n) pour de futures traductions.

```
/
├── public/
│   └── images/
│       └── profile.png
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Services.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       ├── FloatingLabelInput.tsx
│   │       ├── HeroTitleReveal.tsx
│   │       ├── InteractiveTerminal.tsx
│   │       ├── ProfileCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectIllustrations.tsx
│   │       ├── ScrollDown.tsx
│   │       ├── ScrollToTop.tsx
│   │       └── TerminalStack.tsx
│   │
│   ├── data/
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── use-mouse-position.ts
│   │   └── use-reduced-motion.ts
│   │
│   ├── lib/
│   │   ├── data.ts
│   │   ├── motion.ts
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   ├── design-tokens.css
│   │   └── globals.css
│   │
│   ├── i18n.ts
│   └── middleware.ts
│
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

### 3. Internationalisation (i18n)

Le projet est structuré pour supporter plusieurs langues.
*   **`src/app/[locale]`**: Ce dossier utilise une route dynamique de Next.js pour capturer la langue (ex: `/fr` ou `/en`).
*   **`src/i18n.ts`**: Fichier de configuration pour `next-intl`, gérant les langues supportées.
*   **`src/middleware.ts`**: Le middleware intercepte les requêtes pour gérer les redirections et déterminer la langue à utiliser en fonction du chemin d'accès ou des préférences du navigateur.

### 4. Gestion des Données

Le contenu statique du site (textes, informations des projets, liens de navigation) est centralisé dans le fichier `src/lib/data.ts`.

*   **Avantage** : Cela permet de modifier le contenu du site sans avoir à toucher à la logique ou à la structure des composants React. Ajouter un projet ou modifier une description se fait en éditant un simple objet JavaScript.

### 4. Composants & Design

L'approche est modulaire :
*   **`components/sections/`** : Chaque fichier correspond à une section verticale de la page (`<section>`). Ces composants sont responsables de la structure générale de la section.
*   **`components/ui/`** : Contient des composants plus petits et génériques qui sont utilisés à plusieurs endroits. Par exemple, `ProfileCard.tsx` et `ProjectCard.tsx` sont des composants UI réutilisables.

### 5. Layout & Navigation

La navigation est l'un des piliers de l'expérience utilisateur de ce site.

*   **Snap Scroll Vertical** : Le conteneur principal (`<html>`) est configuré avec `snap-y snap-mandatory`. Chaque composant de section a une hauteur de `100dvh` et `snap-start`, forçant le défilement à s'arrêter précisément sur une section à la fois.
*   **Header `sticky`** : Le header utilise `position: sticky` pour rester visible en haut de la page lors du défilement.
*   **Gestion de l'Offset du Header** : Pour éviter que le header ne masque le haut des sections lors du snap, un `scroll-padding-top` est appliqué à l'élément `<html>`. Cela crée un décalage au point de "snap", assurant que chaque section s'aligne parfaitement sous le header.

### 6. Responsive Design

Le design est "mobile-first". Les styles par défaut s'appliquent aux petits écrans. Les classes préfixées par `md:` (ex: `md:hidden`) sont utilisées pour adapter la mise en page aux écrans plus grands.

*   **Logique de Rendu Conditionnel** : Pour des sections comme `Contact`, la structure du DOM est complètement différente entre mobile et desktop, en utilisant des `div` avec `md:hidden` et `hidden md:flex` pour afficher soit les boutons d'action (mobile), soit le formulaire complet (desktop).

---

Ce document peut être complété au besoin pour refléter l'évolution du projet.
