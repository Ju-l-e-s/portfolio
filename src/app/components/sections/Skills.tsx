"use client";
import { skills } from "@/data";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            <AnimatedGradientText>Expertise</AnimatedGradientText>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 border border-white/15 backdrop-blur-sm card-glow"
            >
              <h3 className="text-xl font-black mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-100 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
