"use client";

import { createContext, useContext } from "react";
import { useReducedMotion } from "framer-motion";

const MotionPreferenceContext = createContext<boolean>(false); // Default to false

export function ReducedMotionWrapper({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  // Ensure prefersReducedMotion is always a boolean, defaulting to false
  const motionPreference = prefersReducedMotion ?? false; 
  return (
    <MotionPreferenceContext.Provider value={motionPreference}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionPreferenceContext);
  // No need for null check if createContext default value is boolean
  return context; 
}