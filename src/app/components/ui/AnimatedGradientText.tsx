"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface AnimatedGradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const AnimatedGradientText: FC<AnimatedGradientTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn("gradient-animated-text", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default AnimatedGradientText;
