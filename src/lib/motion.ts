import { Variants } from "framer-motion";

export const fadeUp = (
  distance = 14,
  blur = 6,
  duration = 0.6,
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
    filter: `blur(${blur}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const drawLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
