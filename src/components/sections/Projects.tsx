"use client";

import { useRef } from "react";
import { projects } from "@/content/portfolio";
import { ProjectIllustration } from "../ui/ProjectIllustrations";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations("projects");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative flex h-[100svh] md:h-[100dvh] w-full snap-start snap-always scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-bg pb-[max(6rem,env(safe-area-inset-bottom))] md:pb-0"
    >
      <div className="mb-4 w-full max-w-7xl px-6 md:px-8 text-center md:text-left">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-a">{t("label")}</h2>
        <h3 className="text-2xl font-bold text-text">{t("title")}</h3>
      </div>

      <div
        ref={scrollRef}
        className="relative flex w-full max-w-7xl items-center gap-4 overflow-x-auto px-6 pb-10 snap-x snap-mandatory no-scrollbar"
        aria-label="Liste horizontale de projets"
      >
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent"
          aria-hidden
        />

        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex h-[55vh] sm:h-[40vh] min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[28vw] snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-xl"
          >
            <div className="relative h-1/3 w-full shrink-0 bg-gradient-to-br from-gray-800 to-black">
              <ProjectIllustration name={project.illustration as "crm" | "security" | "social" | "scraping"} />
              {t(`list.${project.id}.tag`) && (
                <div className="absolute left-3 top-3">
                  <span className="rounded border border-white/10 bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur">
                    {t(`list.${project.id}.tag`)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h4 className="mb-2 line-clamp-1 text-lg font-bold text-text">{t(`list.${project.id}.title`)}</h4>
              <p className="text-sm leading-relaxed text-muted">{t(`list.${project.id}.description`)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex w-full justify-center px-6 md:px-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-text backdrop-blur">
          <span className="text-muted">{t("swipe_hint")}</span>
          <span className="text-accent-a animate-wiggle-x">→</span>
        </div>
      </div>
    </section>
  );
}
