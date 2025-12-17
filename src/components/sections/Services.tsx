"use client";

import { motion } from "framer-motion";
import { useMotionPreference } from "@/components/ReducedMotionWrapper";
import { useTranslations } from "next-intl";

const expertiseItems = [
  { key: "cicd", span: "md:col-span-7" },
  { key: "iac", span: "md:col-span-5" },
  { key: "backend", span: "md:col-span-5" },
  { key: "dx", span: "md:col-span-7" },
  { key: "security", span: "md:col-span-6" },
  { key: "observability", span: "md:col-span-6" },
];

export function Services() {
  const t = useTranslations("services");
  const prefersReducedMotion = useMotionPreference();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.08,
          },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="hidden md:flex relative w-full scroll-mt-24 md:h-[100dvh] md:snap-start md:scroll-mt-0 md:flex-col md:items-center md:justify-center md:px-4 md:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 border-b border-white/10 pb-6 sm:pb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between md:gap-6">
          <div className="flex items-center gap-3 text-sm font-mono text-muted">
            <span className="text-accent-a">{t("id")}</span>
            <span className="uppercase tracking-[0.2em]">{t("label")}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
              {t("subtitle")}
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-12"
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid-surface relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur sm:p-6 ${item.span}`}
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.14em] text-muted">
                <span className="text-accent-a">{`0${index + 1}.`}</span>
                <span className="min-w-0 text-right">{t(`list.${item.key}.tech`)}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-text sm:text-xl md:text-2xl">
                {t(`list.${item.key}.title`)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
