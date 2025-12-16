"use client";
import { stats } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, drawLine } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const Hero = () => {
  const reduced = usePrefersReducedMotion();
  const title =
    "Des solutions fiables, automatisées et déployables (cloud & web).";
  const titleWords = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[80%_20%] gap-8 items-center">
        <div className="max-w-4xl relative z-10">
          <motion.h1
            variants={fadeUp(12, 6, 0.8, 0.15)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl font-black tracking-tight leading-[1.08] mb-6 md:mb-8 text-white"
          >
            {titleWords.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className="inline-block mr-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: reduced ? 0 : 12,
                    filter: reduced ? "blur(0px)" : "blur(6px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.65,
                      delay: 0.18 + idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={fadeUp(10, reduced ? 0 : 6, 0.6, 0.35)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 md:mb-10 leading-relaxed"
          >
            Je m’appelle Jules Laconfourque. Développeur junior
            (JavaScript/TypeScript & Python) orienté DevOps : Docker, CI/CD,
            intégrations et outillage. J’aime transformer des besoins concrets
            en systèmes propres, maintenables, et plus respectueux de la vie
            privée.
          </motion.p>
          <motion.div
            variants={fadeUp(10, reduced ? 0 : 4, 0.6, 0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-10"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group cursor-pointer gradient-animated-text text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-base px-8 py-4 gap-2.5"
              aria-label="Voir mes projets"
              style={{ transformOrigin: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10"></div>
              <motion.span
                className="relative z-20"
                whileHover={{ scale: reduced ? 1 : 1.02 }}
                whileTap={{ scale: reduced ? 1 : 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Voir mes projets
              </motion.span>
              <ArrowRight className="w-5 h-5 relative z-20 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group cursor-pointer bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 text-base px-8 py-4 gap-2.5"
            >
              <span className="relative z-20">Me contacter</span>
            </Link>
          </motion.div>
          <motion.div
            variants={drawLine}
            initial="hidden"
            animate="visible"
            className="h-px bg-gradient-to-r from-primary/70 via-secondary/70 to-transparent origin-left mb-8"
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-200 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
