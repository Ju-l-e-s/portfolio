"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import { ProjectIllustration } from "./ProjectIllustrations";

type Project = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
    illustration: "crm" | "security" | "social" | "scraping";
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative w-full rounded-md border border-line bg-surface overflow-hidden"
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Illustration */}
      <div className="h-48 w-full bg-gradient-to-br from-surface to-bg transition-transform duration-300 group-hover:scale-105">
        <ProjectIllustration name={project.illustration} />
      </div>

      <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-text">{project.title}</h3>
          <p className="text-base leading-relaxed text-muted break-words">{project.description}</p>
          <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="rounded-md border border-accent-a/30 bg-accent-a/10 px-3 py-1 text-xs font-medium text-accent-a">
                      {tag}
                  </span>
              ))}
          </div>
          <div className="flex items-center gap-6 pt-2">
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted transition-colors hover:text-accent-a">
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
              </Link>
              {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted transition-colors hover:text-accent-a">
                      <LinkIcon size={18} />
                      <span className="text-sm">Live Demo</span>
                  </Link>
              )}
          </div>
      </div>
    </motion.div>
  );
}

