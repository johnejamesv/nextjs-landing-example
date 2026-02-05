"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends HTMLMotionProps<"span"> {
  variant?: "hero" | "vibrant" | "cyan" | "purple" | "pink" | "rainbow";
  glow?: boolean;
  children: React.ReactNode;
}

/**
 * GradientText - Animated gradient text component
 *
 * @param variant - Gradient color variant
 * @param glow - Add text glow effect
 */
export function GradientText({
  variant = "vibrant",
  glow = false,
  className,
  children,
  ...props
}: GradientTextProps) {
  const variantStyles = {
    hero: "gradient-text-hero",
    vibrant: "gradient-text-vibrant",
    cyan: "gradient-text-cyan",
    purple: "gradient-text-purple",
    pink: "gradient-text-pink",
    rainbow: "gradient-text",
  };

  return (
    <motion.span
      className={cn(
        variantStyles[variant],
        glow && "glow-text-strong",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}

GradientText.displayName = "GradientText";
