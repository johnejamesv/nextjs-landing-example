"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AuroraBlobProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

/**
 * AuroraBackground - Animated aurora gradient background
 */
export function AuroraBackground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("aurora-bg", className)}>
      {children}
    </div>
  );
}

/**
 * AuroraBlob - Single animated gradient blob
 */
export function AuroraBlob({
  className,
  style,
  delay = 0,
  duration = 6,
}: AuroraBlobProps) {
  return (
    <motion.div
      className={cn("absolute rounded-full blur-3xl animate-pulse-glow", className)}
      style={style}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

AuroraBackground.displayName = "AuroraBackground";
AuroraBlob.displayName = "AuroraBlob";
