"use client";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const TiltCard = ({ className, children }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 4; // -4° à 4°
    const rotateX = -((y - midY) / midY) * 4;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-transform duration-200 will-change-transform",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerUp={reset}
    >
      {children}
    </div>
  );
};
