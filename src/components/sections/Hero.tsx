"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HeroTitleReveal } from "../ui/HeroTitleReveal";
import { InteractiveTerminal } from "../ui/InteractiveTerminal";
import { ProfileCard } from "../ui/ProfileCard";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
<section
      id="hero"
      className="relative w-full h-[100dvh] overflow-hidden snap-start flex flex-col items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/0" aria-hidden />
      
      {/* Mobile layout */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center md:hidden">
        <ProfileCard />
        <div className="flex w-full flex-col items-stretch gap-4 max-w-sm">
          <Link
            href="#projects"
            className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent-a px-6 py-3 text-base font-semibold text-bg transition duration-300 hover:scale-105"
          >
            {t("cta_projects")}
          </Link>
        </div>
      </div>

      {/* Desktop layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 hidden h-full w-full items-center md:flex"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-10 px-0 md:px-6">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2">
            {/* Left side */}
            <div className="flex flex-col gap-6">
              {/* Desktop Profile Card */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full border border-line bg-surface overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="Jules Laconfourque"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text">Jules Laconfourque</h2>
                  <p className="text-sm text-muted">{t("role")}</p>
                  <a href="https://github.com/Ju-l-e-s/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent-a flex items-center gap-1 mt-2">
                    <span>GITHUB</span> <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                </div>
              </div>

              <HeroTitleReveal
                lines={t("title").split("\n")}
                className="text-left text-[clamp(36px,8vw,68px)] font-bold leading-[0.95] tracking-tight text-text"
              />
              <motion.p
                variants={itemVariants}
                className="max-w-[52ch] break-words text-base leading-relaxed text-muted sm:text-lg"
              >
                {t("subtitle")}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4 sm:pt-3"
              >
                <Link
                  href="#projects"
                  className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent-a px-6 py-3 text-base font-semibold text-bg transition duration-300 hover:scale-105 sm:w-auto"
                >
                  {t("cta_projects")}
                </Link>
                <Link
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-muted transition duration-300 hover:border-white/40 hover:text-text"
                >
                  {t("cta_contact")}
                </Link>
              </motion.div>
            </div>
            {/* Right side */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <InteractiveTerminal />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
