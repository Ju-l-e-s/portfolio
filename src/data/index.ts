import {
  Briefcase,
  GraduationCap,
  Trophy,
  MessageSquare,
  PenTool,
  CodeXml,
  Rocket,
} from "lucide-react";

export const navLinks = [
  { name: "Mon parcours", href: "#about" },
  { name: "Méthode", href: "#process" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  {
    value: "DevOps & automatisation",
    label: "CI/CD, scripts, intégrations, QA",
  },
  {
    value: "Stack",
    label: "Docker • GitHub Actions • AWS (certif en cours)",
  },
  { value: "Projets", label: "Web • outils CLI • prototypes IoT" },
];

export const timelineItems = [
  {
    badge: "Aujourd’hui",
    icon: Briefcase,
    title: "Développeur junior orienté DevOps",
    subtitle: "en recherche d’opportunités",
    description:
      "Building portfolio projects and preparing AWS certification.",
  },
  {
    badge: "Projets récents",
    icon: Briefcase,
    title: "Apps web et outils d’automatisation",
    subtitle: "Docker, CI/CD, intégrations, scripts, outillage",
    description:
      "Inter-institutional coordination, briefings, meeting notes & reporting.",
  },
  {
    badge: "Formation",
    icon: GraduationCap,
    title: "JavaScript & Python",
    subtitle: "base solide, pratique orientée projet",
    description: "and deployable prototypes.",
  },
  {
    badge: "En ce moment",
    icon: Trophy,
    title: "Préparation de certifications AWS",
    subtitle: "fondamentaux cloud en consolidation",
    description: "Laying the foundation for a career in technology.",
  },
];

export const processSteps = [
  {
    icon: MessageSquare,
    title: "Cadrage",
    description: "Objectif, contraintes, critères de succès.",
  },
  {
    icon: PenTool,
    title: "Plan",
    description: "Architecture simple, jalons courts, priorité au livrable.",
  },
  {
    icon: CodeXml,
    title: "Build",
    description:
      "Code propre + itérations rapides, environnement reproductible (Docker).",
  },
  {
    icon: Rocket,
    title: "Livraison",
    description: "CI/CD, tests essentiels, documentation et prise en main.",
  },
];

export const skills = [
  {
    title: "Front-end",
    description: "React / Next.js / TypeScript.",
  },
  {
    title: "Back-end",
    description: "Python (API, scripts, tooling).",
  },
  {
    title: "Ops",
    description: "Docker, CI/CD (GitHub Actions), déploiements.",
  },
  {
    title: "Cloud",
    description: "AWS (préparation Solutions Architect Associate).",
  },
];

export const projectHighlight = {
  title: "Projets récents",
  description:
    "Portfolio en cours : apps web et outils d’automatisation (Docker, CI/CD, intégrations, scripts, outillage).",
  tags: ["Web", "Outils CLI", "Prototypes IoT"],
};

export const projects = [
  {
    title: "Apps web déployables",
    status: "En cours",
    description:
      "Next.js + TypeScript, API légère, environnement Docker, CI/CD GitHub Actions.",
  },
  {
    title: "Outils CLI / scripts Python",
    status: "En cours",
    description:
      "Automatisations ciblées (build, intégrations, QA) avec packaging reproductible.",
  },
  {
    title: "Prototypes IoT",
    status: "Exploration",
    description:
      "Petits prototypes avec attention à la confidentialité et à l’observabilité de base.",
  },
];
