import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Navigation Architecture | Technical Portfolio",
  description: "Demonstrating 5 practical strategies for flatter, more efficient navigation in Next.js applications with Route Groups, Parallel Routes, Intercepting Routes, and Next.js 16 features.",
  keywords: ["Next.js", "App Router", "Navigation", "Parallel Routes", "Intercepting Routes", "Route Groups"],
  authors: [{ name: "NavArch Demo" }],
  openGraph: {
    title: "Next.js Navigation Architecture",
    description: "5 practical strategies for efficient navigation",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/**
 * Root Layout with Parallel Routes
 * 
 * The @modal slot enables intercepting routes for modal overlays.
 * When navigating to a route that matches an intercepting pattern (e.g., (.)blog/[slug]),
 * the modal renders while the children (page content) stays mounted underneath.
 * 
 * This creates a "modal over context" pattern where:
 * - URL updates for deep linking
 * - Previous page remains visible underneath
 * - Back button closes modal and returns to context
 */
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* Parallel Route Slot: Renders modals from intercepting routes */}
        {modal}
      </body>
    </html>
  );
}
