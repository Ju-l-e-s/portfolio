"use client";
import { processSteps } from "@/data";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { TiltCard } from "../ui/TiltCard";

const Process = () => {
  return (
    <section
      id="process"
      className="sm:min-h-screen flex items-center justify-center relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 relative text-white">
            <AnimatedGradientText>Méthode</AnimatedGradientText>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {processSteps.map((step, index) => (
            <TiltCard key={index} className="h-full">
              <motion.div
                initial={{ y: 40, opacity: 0, rotate: -0.5 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 border border-white/15 hover:bg-white/10 transition-colors backdrop-blur-sm card-glow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
