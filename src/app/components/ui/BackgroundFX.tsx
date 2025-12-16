"use client";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

export const BackgroundFX = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E\")",
        }}
      />
      {!reduced && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none fixed -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-cyan-400/15 via-purple-500/10 to-transparent blur-3xl z-0"
            animate={{
              x: [0, 60, -40, 0],
              y: [0, 50, -30, 0],
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, -20, 30, 0],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none fixed top-1/3 right-[-180px] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400/12 via-cyan-400/10 to-transparent blur-3xl z-0"
            animate={{
              x: [0, -40, 20, 0],
              y: [0, 30, -20, 0],
              scale: [1, 0.97, 1.04, 1],
              rotate: [0, 30, -10, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none fixed bottom-[-160px] left-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-500/12 via-blue-500/10 to-transparent blur-3xl z-0"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 40, 0],
              scale: [1, 1.02, 0.96, 1],
              rotate: [0, 20, -25, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/40"
      />
    </>
  );
};
