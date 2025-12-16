"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { Search, Code, Cloud, Rocket } from "lucide-react";

const iconMap = {
  1: Search,
  2: Code,
  3: Cloud,
  4: Rocket,
};

// Tags for each step
const tags = ["Specs & KPIs", "Architecture", "Dev & Tests", "CI/CD & Docs"];

export function Process() {
  return (
    <section
      id="process"
      className="relative hidden w-full scroll-mt-24 md:flex md:h-[100dvh] md:snap-start md:scroll-mt-0 md:flex-col md:items-center md:justify-center md:px-4 md:py-10"
    >
      <div className="mx-auto max-w-7xl w-full px-6 md:px-8">
        <div className="mb-8 max-w-2xl text-left sm:mb-10">
        <span className="font-mono text-accent-a text-sm tracking-widest uppercase">03. Workflow</span>
        <h2 className="mt-2 text-2xl font-bold text-text sm:text-4xl">Un processus transparent</h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Pas de boîte noire. Juste une méthodologie éprouvée pour livrer de la qualité à chaque itération.
        </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        {processSteps.map((step, idx) => {
          const Icon = iconMap[step.step as keyof typeof iconMap] || Code;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-5 hover:border-accent-a/30 hover:bg-white/5 transition-all duration-300 sm:p-7 lg:p-8"
            >
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-a transition-colors duration-300 group-hover:bg-accent-a group-hover:text-white sm:h-12 sm:w-12">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-3xl font-bold text-white/5 transition-colors group-hover:text-white/10 sm:text-4xl">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold text-text sm:text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-xs font-mono uppercase tracking-wider text-muted transition-colors group-hover:text-accent-a">
                  {tags[idx]}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-accent-a transition-colors" />
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
