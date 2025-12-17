"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { useMotionPreference } from "./ReducedMotionWrapper";

type MotionDivProps = ComponentProps<typeof motion.div>;

export function Background() {
  const prefersReducedMotion = useMotionPreference();

  const animationProps: Partial<MotionDivProps> = prefersReducedMotion
    ? {}
    : {
        animate: { opacity: [0.1, 0.3, 0.1] },
        transition: {
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut",
        },
      };

  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-bg">
      {/* Animated Radial Gradients */}
      <motion.div className="absolute inset-0 opacity-5" {...animationProps}>
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[100vh] w-[100vw] bg-[radial-gradient(circle_farthest-side,rgba(var(--accent-a),0.2),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[100vh] w-[100vw] bg-[radial-gradient(circle_farthest-side,rgba(var(--accent-b),0.1),rgba(255,255,255,0))]" />
      </motion.div>

      {/* Static Noise */}
      <div
        className="pointer-events-none fixed inset-0 -z-40 h-full w-full opacity-[0.02]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%271%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')",
        }}
      />
    </div>
  );
}
