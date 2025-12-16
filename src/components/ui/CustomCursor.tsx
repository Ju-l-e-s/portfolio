"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const isInteractive = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return tag === "a" || tag === "button" || target.dataset.cursor === "interactive";
};

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 450, damping: 40, mass: 0.6 };
  const trailX = useSpring(x, springConfig);
  const trailY = useSpring(y, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      const enable = event.matches;
      setIsDesktop(enable);
      document.body.style.cursor = enable ? "none" : "";
    };
    updateDesktop(mediaQuery);
    mediaQuery.addEventListener("change", updateDesktop);

    const showCursor = () => setVisible(true);
    const hideCursor = () => setVisible(false);

    const handleMove = (e: MouseEvent) => {
      if (!isDesktop) return;
      setVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      setHover(isInteractive(e.target));
    };

    const handleOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) setHover(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      mediaQuery.removeEventListener("change", updateDesktop);
      document.body.style.cursor = "";
    };
  }, [isDesktop, x, y]);

  if (!visible || !isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1000] hidden md:block">
      <motion.div
        className="fixed h-2 w-2 rounded-full bg-accent-a shadow-[0_0_12px_rgba(255,92,122,0.6)]"
        style={{
          left: 0,
          top: 0,
          translateX: x,
          translateY: y,
        }}
      />
      <motion.div
        className="fixed h-10 w-10 rounded-full border border-accent-a/60 bg-accent-a/10 backdrop-blur-sm"
        style={{
          left: 0,
          top: 0,
          translateX: trailX,
          translateY: trailY,
          x: "-50%",
          y: "-50%",
          mixBlendMode: hover ? "difference" : "normal",
          opacity: hover ? 0.9 : 0.6,
          scale: hover ? 1.35 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      />
    </div>
  );
}
