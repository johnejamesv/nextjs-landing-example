import type { NextConfig } from "next";

/**
 * Next.js 16 Configuration
 * 
 * NOTE: Static export (output: 'export') is disabled to enable advanced routing features:
 * - Intercepting Routes (modals with URL updates)
 * - Middleware (request-time redirects and headers)
 * - Rewrites/Redirects (server-side URL handling)
 * 
 * For static export deployment, these features would need to be handled by:
 * - Build-time redirects in your hosting platform (Vercel, Netlify, etc.)
 * - Client-side modal handling without intercepting routes
 */
const nextConfig: NextConfig = {
  // output: "export",  // Disabled to support Intercepting Routes & Middleware
  // distDir: "final-build",  // Using default .next for Vercel compatibility
  images: {
    unoptimized: false, // Now enabled with SSR
  },

  /**
   * Next.js 16 Features
   * 
   * 1. cacheComponents: Partial Prerendering (formerly ppr)
   *    - Combines static and dynamic rendering in one page
   *    - Static shell loads instantly, dynamic content streams in
   * 
   * 2. viewTransition: Native View Transitions API
   *    - Smooth page transitions using browser-native API
   *    - Better performance than JS animation libraries
   */
  cacheComponents: true,

  /**
   * React Compiler (Stable in Next.js 16)
   */
  reactCompiler: true,

  experimental: {
    viewTransition: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  /**
   * Turbopack Configuration (Stable in Next.js 16)
   */
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },

  /**
   * Headers for Navigation Performance
   * Applied at request time (requires SSR)
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  /**
   * Redirects for URL Flattening
   * Server-side redirects for legacy URL support
   */
  async redirects() {
    return [
      {
        source: "/old-blog/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // Redirect /category/* to /products/*
      {
        source: "/category/:slug*",
        destination: "/products/:slug*",
        permanent: true,
      },
    ];
  },

  /**
   * Rewrites for internal navigation structure
   * Clean public URLs with flexible internal structure
   */
  async rewrites() {
    return [
      // Short product URLs
      {
        source: "/p/:slug*",
        destination: "/products/:slug*",
      },
    ];
  },
};

export default nextConfig;
