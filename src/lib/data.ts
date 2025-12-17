// src/lib/data.ts

import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export const navLinks = [
  { key: "intro", href: "#hero", showOnMobile: true },
  { key: "story", href: "#about", showOnMobile: true },
  { key: "process", href: "#process", showOnMobile: false },
  { key: "services", href: "#services", showOnMobile: false },
  { key: "projects", href: "#projects", showOnMobile: true },
  { key: "contact", href: "#contact", showOnMobile: true },
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
  { id: "scoping" },
  { id: "planning" },
  { id: "build" },
  { id: "delivery" },
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
    id: "crm",
    github: "https://github.com/Ju-l-e-s/crm_cli",
    live: "#",
    illustration: "crm",
  },
  {
    id: "secure_url",
    github: "https://github.com/Ju-l-e-s/secure-url-analysis",
    live: "#",
    illustration: "security",
  },
  {
    id: "social",
    github: "https://github.com/Ju-l-e-s/Social-Network",
    live: "#",
    illustration: "social",
  },
  {
    id: "scraping",
    github: "https://github.com/Ju-l-e-s?tab=repositories&q=scrap&type=&language=",
    live: "#",
    illustration: "scraping",
  },
];
