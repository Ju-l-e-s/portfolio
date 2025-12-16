"use client";
import { timelineItems } from "@/data";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { TiltCard } from "../ui/TiltCard";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] hidden md:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black mb-8 tracking-tight leading-tight text-white"
            >
              Mon <AnimatedGradientText>parcours</AnimatedGradientText>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-100 leading-relaxed"
            >
              <p>
                Je viens d’une formation JavaScript + Python et je me spécialise
                aujourd’hui sur des sujets DevOps/automation : rendre un projet
                déployable, reproductible, testable et simple à opérer.
              </p>
              <p>
                Je construis un portfolio de projets concrets (apps full-stack,
                outils en ligne de commande, prototypes) avec une attention
                particulière à la fiabilité, à l’observabilité de base (logs),
                et à la confidentialité quand c’est pertinent.
              </p>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 hidden sm:block"></div>
            <div className="space-y-4 sm:space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 sm:gap-10 group"
                >
                  <div className="hidden sm:flex flex-col items-center relative">
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 bg-[#0D1117] group-hover:border-primary transition-all duration-500 z-10 relative"></div>
                  </div>
                  <TiltCard className="flex-1">
                    <div className="flex-1 relative rounded-2xl border border-white/15 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 overflow-hidden group/card transition-shadow duration-300 p-6 hover:shadow-2xl hover:shadow-primary/10 card-glow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-primary/80 px-2 py-1 rounded border border-primary/20 bg-primary/5">
                          {item.badge}
                        </span>
                        <item.icon className="w-5 h-5 text-gray-500 group-hover/card:text-primary transition-colors" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-1 group-hover/card:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-sm text-gray-200 mb-3 font-medium">
                        {item.subtitle}
                      </div>
                      <p className="text-sm text-gray-100 leading-relaxed group-hover/card:text-gray-100 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
