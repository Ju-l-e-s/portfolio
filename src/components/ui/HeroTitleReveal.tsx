"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionPreference } from "@/components/ReducedMotionWrapper";

interface HeroTitleRevealProps {
  lines: string[];
  className?: string;
}

export function HeroTitleReveal({ lines, className }: HeroTitleRevealProps) {
  const prefersReducedMotion = useMotionPreference();

  const container = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.08 * i },
        }),
      };

  const child = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: "0%" },
        visible: { opacity: 1, y: "0%" },
      }
    : {
        hidden: {
          opacity: 0,
          y: "100%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.2, 0.8, 0.2, 1], // ease-snappy
          },
        },
      };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("flex flex-col items-start text-left", className)}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden py-1">
          <motion.div
            variants={child}
            className="mr-[0.25em]" // To keep a similar spacing
          >
            {line}
          </motion.div>
        </div>
      ))}
    </motion.h1>
  );
}
