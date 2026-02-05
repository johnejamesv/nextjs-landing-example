/**
 * Design Tokens - Theme Configuration
 *
 * Central source of truth for all visual properties.
 * Uses HSL format for color values to enable opacity manipulation.
 */

export const colors = {
  // Base Colors (HSL format: H S% L%)
  background: '230 40% 8%',        // Rich navy-purple
  foreground: '220 30% 98%',       // Cool white
  card: '230 35% 10%',             // Lighter navy
  cardForeground: '220 30% 98%',
  popover: '230 35% 10%',
  popoverForeground: '220 30% 98%',

  // Primary - Cyan based
  primary: '190 95% 55%',          // Vibrant cyan
  primaryForeground: '230 40% 8%',

  // Secondary - Purple based
  secondary: '280 70% 20%',        // Deep purple
  secondaryForeground: '220 30% 98%',

  // Muted
  muted: '230 35% 12%',
  mutedForeground: '225 20% 60%',

  // Accent - Magenta based
  accent: '300 80% 60%',           // Vibrant magenta
  accentForeground: '220 30% 98%',

  // Destructive
  destructive: '0 84% 60%',
  destructiveForeground: '220 30% 98%',

  // Borders & Inputs
  border: '230 30% 15%',
  input: '230 30% 15%',
  ring: '190 95% 55%',             // Cyan ring

  // Chart colors
  chart1: '190 95% 55%',           // Cyan
  chart2: '280 70% 55%',           // Purple
  chart3: '300 80% 55%',           // Magenta
  chart4: '340 85% 55%',           // Pink
  chart5: '30 95% 55%',            // Orange

  // Semantic color shortcuts
  cyan: '190 95% 55%',
  purple: '280 70% 55%',
  magenta: '300 80% 55%',
  pink: '340 85% 55%',
  rose: '0 84% 60%',
  orange: '30 95% 55%',
} as const;

export const gradients = {
  // Primary gradient - Cyan to Purple to Pink
  primary: 'linear-gradient(135deg, hsl(190 95% 55%) 0%, hsl(280 70% 55%) 50%, hsl(300 80% 55%) 100%)',
  secondary: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(267 83% 60%) 50%, hsl(280 70% 60%) 100%)',
  accent: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(300 80% 55%) 50%, hsl(280 70% 55%) 100%)',

  // Two-color gradients
  cyanToBlue: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  purpleToPink: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
  pinkToOrange: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
  cyanToPurple: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',

  // Multi-color animated gradient
  aurora: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 20%, #d946ef 40%, #f43f5e 60%, #f97316 80%, #eab308 100%)',

  // Subtle gradients
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
  glassStrong: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.06) 100%)',
  glassTinted: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
} as const;

export const shadows = {
  // Glow effects - Multi-layer for depth
  glowCyan: '0 0 60px -12px rgba(6, 182, 212, 0.5)',
  glowPurple: '0 0 60px -12px rgba(139, 92, 246, 0.5)',
  glowMagenta: '0 0 60px -12px rgba(236, 72, 153, 0.5)',
  glowPink: '0 0 60px -12px rgba(244, 63, 94, 0.5)',

  // Combined glows
  glowMix: '0 0 80px -15px rgba(139, 92, 246, 0.3), 0 0 40px -10px rgba(6, 182, 212, 0.2)',
  glowVibrant: '0 0 60px -15px rgba(6, 182, 212, 0.4), 0 0 100px -30px rgba(139, 92, 246, 0.2), 0 0 140px -45px rgba(236, 72, 153, 0.1)',

  // Text glows
  glowText: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.4)',
  glowTextStrong: '0 0 50px rgba(139, 92, 246, 0.6), 0 0 100px rgba(6, 182, 212, 0.3)',

  // Card shadows
  card: '0 4px 16px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
  cardHover: '0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
  cardGlow: '0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.15) inset, 0 0 40px -10px rgba(139, 92, 246, 0.2)',

  // Strategy card shadows
  strategyCard: '0 4px 20px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
  strategyCardHover: '0 32px 64px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(139, 92, 246, 0.15) inset, 0 0 60px -15px rgba(139, 92, 246, 0.25)',
} as const;

export const blur = {
  sm: 'blur(8px)',
  md: 'blur(16px)',
  lg: 'blur(24px)',
  xl: 'blur(32px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(48px)',
} as const;

export const radius = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.22, 1, 0.36, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Export theme object
export const theme = {
  colors,
  gradients,
  shadows,
  blur,
  radius,
  animation,
} as const;

export type Theme = typeof theme;
