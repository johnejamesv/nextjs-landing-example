/**
 * Framer Motion Animation Presets
 *
 * Reusable animation variants for common patterns.
 */

import { Variants, Transition } from 'framer-motion';

// Base easing curve used throughout the app
export const easing = [0.22, 1, 0.36, 1] as const;

// Fade in from below
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing }
  }
};

// Fade in with scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easing }
  }
};

// Stagger children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Stagger item (for list items)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing }
  }
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

// Button press animation
export const buttonPress = {
  tap: { scale: 0.97 },
  hover: { scale: 1.02 }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easing }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easing }
  }
};

// Pop in animation
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25
    }
  }
};

// Glow pulse animation
export const glowPulse = {
  initial: { opacity: 0.4, scale: 1 },
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Export all presets
export const presets = {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonPress,
  slideInLeft,
  slideInRight,
  popIn,
  glowPulse
};

// Default transition
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: easing
};

// Spring transition for hover effects
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25
};
