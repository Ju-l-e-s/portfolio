// src/lib/data.ts

import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export const navLinks = [
  { name: "Intro", href: "#hero", showOnMobile: true },
  { name: "My Story", href: "#about", showOnMobile: true },
  { name: "How I Work", href: "#process", showOnMobile: false },
  { name: "Expertise", href: "#services", showOnMobile: false },
  { name: "Projects", href: "#projects", showOnMobile: true },
  { name: "Contact", href: "#contact", showOnMobile: true },
];

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "63+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export const timelineItems = [
    {
        badge: "Ce que je suis",
        icon: Briefcase,
        title: "Développeur junior orienté DevOps",
        subtitle: "",
    },
    {
        badge: "Ce que je fais",
        icon: Trophy,
        title: "Apps web & outillage",
        subtitle: "Projets personnels",
    },
    {
        badge: "Formation",
        icon: GraduationCap,
        title: "JavaScript & Python",
        subtitle: "OpenClassrooms",
    },
];

export const processSteps = [
  {
    step: 1,
    title: "Cadrage",
    description: "Objectif, contraintes, critères de succès, définition du “done”.",
  },
  {
    step: 2,
    title: "Plan",
    description: "Architecture simple, jalons courts, priorité au résultat visible.",
  },
  {
    step: 3,
    title: "Build",
    description: "Code propre, itérations rapides, environnement reproductible.",
  },
  {
    step: 4,
    title: "Livraison",
    description: "CI/CD, tests essentiels, documentation et prise en main.",
  },
];

export const skillCategories = [
    {
        title: "Langages & Frameworks",
        skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML5", "CSS3"]
    },
    {
        title: "DevOps & Automatisation",
        skills: ["Docker", "GitHub Actions", "CI/CD", "Scripts (Bash, Python)"]
    },
    {
        title: "Cloud & Outils",
        skills: ["AWS (en cours)", "Git", "PyTest", "API REST"]
    }
];

export const projects = [
    {
      title: "CRM CLI – Gestion commerciale",
      description: "Application CLI en Python pour gérer des utilisateurs, des clients et des contrats. Ce projet intègre une architecture claire (MVC), une authentification sécurisée par JWT, et une gestion fine des rôles utilisateurs.",
      tags: ["Python", "Click", "JWT", "PyTest"],
      github: "https://github.com/Ju-l-e-s/crm_cli",
      live: "#",
      illustration: "crm"
    },
    {
      title: "Secure URL Analysis Tool",
      description: "Outil conteneurisé permettant d’analyser des URL potentiellement malveillantes sans exposer son système. Sécurité renforcée grâce à Docker, multiples couches d’isolation et détection avancée (redirections, phishing, etc.).",
      tags: ["Python", "Docker", "Sécurité", "Analyse Web"],
      github: "https://github.com/Ju-l-e-s/secure-url-analysis",
      live: "#",
      illustration: "security"
    },
    {
      title: "Social Network – Réseau d’entreprise",
      description: "Application web de réseau social interne pour entreprise. Authentification, publication de posts, gestion des utilisateurs et interactions. Full-stack JavaScript avec React côté client et Node.js côté serveur.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Ju-l-e-s/Social-Network",
      live: "#",
      illustration: "social"
    },
    {
      title: "Scraping & APIs",
      description: "Plusieurs projets de scraping web (livres, entreprises, etc.) enrichis par des APIs externes. Extraction, structuration et automatisation de données pour analyses ou intégration.",
      tags: ["Python", "Scraping", "APIs"],
      github: "https://github.com/Ju-l-e-s?tab=repositories&q=scrap&type=&language=",
      live: "#",
      illustration: "scraping"
    }
  ];
