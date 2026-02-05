"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "glass" | "glass-tinted" | "glass-cyan" | "glass-purple" | "glass-magenta";
  glow?: "none" | "subtle" | "normal" | "strong";
  shine?: boolean;
  spotlight?: boolean;
  children: React.ReactNode;
}

/**
 * GlowCard - Premium card component with glassmorphism and glow effects
 *
 * @param variant - Glass effect variant
 * @param glow - Glow intensity
 * @param shine - Enable shine effect on hover
 * @param spotlight - Enable mouse-tracking spotlight effect
 */
export function GlowCard({
  variant = "default",
  glow = "normal",
  shine = true,
  spotlight = false,
  className,
  children,
  ...props
}: GlowCardProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const variantStyles = {
    default: "",
    glass: "glass",
    "glass-tinted": "glass-tinted",
    "glass-cyan": "glass-cyan",
    "glass-purple": "glass-purple",
    "glass-magenta": "glass-magenta",
  };

  const glowStyles = {
    none: "",
    subtle: "hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.3)]",
    normal: "hover:shadow-[0_0_60px_-12px_rgba(139,92,246,0.5)]",
    strong: "hover:shadow-[0_0_80px_-20px_rgba(236,72,153,0.5),0_0_120px_-40px_rgba(217,70,239,0.3)]",
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{
        scale: 1.02,
        y: -6,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 20
        }
      }}
      className={cn(
        "bento-card group",
        variantStyles[variant],
        glowStyles[glow],
        shine && "card-shine",
        spotlight && "spotlight",
        className
      )}
      style={
        spotlight
          ? {
              "--mouse-x": `${mousePosition.x}%`,
              "--mouse-y": `${mousePosition.y}%`,
            } as React.CSSProperties
          : undefined
      }
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </motion.div>
  );
}

GlowCard.displayName = "GlowCard";
