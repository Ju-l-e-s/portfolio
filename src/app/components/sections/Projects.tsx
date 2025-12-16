"use client";
import { projectHighlight, projects } from "@/data";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            <AnimatedGradientText>Projets</AnimatedGradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {projectHighlight.description}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 border border-white/15 backdrop-blur-sm flex flex-col gap-3 group card-glow"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-primary/90">
                <span>{project.status}</span>
                <div className="flex gap-2">
                  {projectHighlight.tags[index] && (
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {projectHighlight.tags[index]}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-black text-white">{project.title}</h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-xs text-primary/80 border border-primary/20 rounded-full px-3 py-1 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  En savoir plus
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
