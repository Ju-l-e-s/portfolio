"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";

export function ProfileCard() {
  const t = useTranslations("hero");
  const { person, links } = site;
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-24 w-24 rounded-full border border-line bg-surface overflow-hidden">
        <Image
          src={person.image.src}
          alt={person.image.alt}
          fill
          sizes="96px"
          priority
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-text">{person.name}</h2>
        <p className="text-base text-muted">{t("role")}</p>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent-a flex items-center justify-center gap-1 mt-4">
            <span>GITHUB</span> <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>
  );
}
