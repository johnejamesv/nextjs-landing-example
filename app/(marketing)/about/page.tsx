"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Layers, 
  GitBranch, 
  ArrowLeft,
  FolderTree,
  FileCode,
  Layout,
  Target,
  ArrowUpRight,
  Zap,
  ExternalLink,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/newsletter-signup";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background noise">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.015]" />
        
        <div className="container">
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
          >
            <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-white/5 rounded-xl">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <Layers className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs font-medium">Strategy 1 & 3</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-purple-500/20">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                <span className="text-xs font-medium">Now with Intercepting Routes</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-4">
              Route Groups <span className="gradient-text">&</span>
              <br />Parallel Routes
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              This page demonstrates Strategy 1 (Route Groups), Strategy 3 (Parallel Routes), 
              and now <strong>Intercepting Routes</strong>. Navigate to blog posts to see modals 
              that preserve context while updating the URL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Route Groups Explanation */}
            <motion.div variants={itemVariants}>
              <Card className="h-full overflow-hidden border-2 border-white/8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <FolderTree className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl">Route Groups</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Route groups allow you to organize your application into logical sections 
                    without affecting the URL structure. The folder name with parentheses 
                    <code className="mx-1 px-2 py-0.5 bg-blue-500/10 rounded-md text-xs font-mono text-blue-400">(marketing)</code>
                    is not included in the URL.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <div className="h-1 w-4 rounded-full bg-blue-500" />
                      Current File Structure
                    </h4>
                    <pre className="text-xs rounded-xl">
{`app/
├── (marketing)/           # Route group (not in URL)
│   ├── layout.tsx        # Marketing layout
│   ├── page.tsx          # → / (home)
│   ├── about/
│   │   └── page.tsx      # → /about (current page)
│   └── blog/
│       └── page.tsx      # → /blog
│
└── (shop)/               # Another route group
    ├── layout.tsx        # Shop layout
    └── products/
        └── page.tsx      # → /products`}
                    </pre>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <div className="h-1 w-4 rounded-full bg-blue-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "Organize routes by feature/domain",
                        "Share layouts within a group",
                        "Keep URLs clean and SEO-friendly",
                        "Separate concerns (marketing vs. shop vs. dashboard)"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="h-5 w-5 rounded-md bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-400 text-xs font-bold">{i + 1}</span>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Parallel Routes + Intercepting Routes Explanation */}
            <motion.div variants={itemVariants}>
              <Card className="h-full overflow-hidden border-2 border-white/8 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
                <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Parallel + Intercepting</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        Combined for modal overlays
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Parallel routes (<code className="text-xs bg-muted px-1 rounded">@folder</code>) + 
                    Intercepting routes (<code className="text-xs bg-muted px-1 rounded">(.)</code>) enable 
                    modals that preserve context. Click a blog post from /blog to see it in action.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <div className="h-1 w-4 rounded-full bg-amber-500" />
                      How It Works
                    </h4>
                    <pre className="text-xs rounded-xl">
{`app/
├── layout.tsx              # Renders children + @modal
├── page.tsx                # Home page
├── blog/
│   └── [slug]/
│       └── page.tsx        # Full blog post page
└── @modal/                 # Parallel route slot
    └── (.)blog/[slug]/     # Intercepting route
        └── page.tsx        # Modal version

// When on /blog:
// - Click → /blog/post-1
// - Shows modal OVER the blog list
// - URL updates to /blog/post-1
// - Refresh → shows full page`}
                    </pre>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <div className="h-1 w-4 rounded-full bg-amber-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "Preserve scroll position and context",
                        "URL updates enable sharing/bookmarking",
                        "Progressive enhancement (works without JS)",
                        "Instant modal appearance with server fetch"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="h-5 w-5 rounded-md bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Target className="h-3 w-3 text-amber-400" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="outline" className="w-full group">
                    <Link href="/blog">
                      <Zap className="mr-2 h-4 w-4 text-amber-400" />
                      Try It: Go to Blog
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="section-divider my-16" />

          {/* Server Actions Demo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <NewsletterSignup />
            </motion.div>
          </motion.div>

          <div className="section-divider my-16" />

          {/* File Layout Visualization */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-2 border-white/8">
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <FileCode className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Current Page Location</CardTitle>
                      <p className="text-sm text-muted-foreground">app/(marketing)/about/page.tsx</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You are currently viewing a page inside the 
                    <code className="mx-1 px-2 py-0.5 bg-emerald-500/10 rounded-md text-xs font-mono text-emerald-400">(marketing)</code>
                    route group. The URL is simply "/about" - the group name is not part of the URL.
                    This page shares the marketing layout defined in
                    <code className="mx-1 px-2 py-0.5 bg-emerald-500/10 rounded-md text-xs font-mono text-emerald-400">app/(marketing)/layout.tsx</code>.
                  </p>

                  <div className="bg-slate-950/80 rounded-xl p-6 relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
                      <Layout className="h-4 w-4 text-emerald-400" />
                      Page Component Code
                    </h4>
                    <pre className="text-xs text-slate-300">
{`// app/(marketing)/about/page.tsx
// This is a Server Component by default

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Route Groups Demo",
  description: "Demonstrating Next.js route groups",
};

export default function AboutPage() {
  // Server-side data fetching
  // const data = await fetchData();
  
  return (
    <div>
      <h1>About Page</h1>
      {/* Content */}
    </div>
  );
}`}
                    </pre>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button asChild variant="outline" className="gap-2">
                      <Link href="https://nextjs.org/docs/app/building-your-application/routing/route-groups" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Route Groups Docs
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <Link href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Parallel Routes Docs
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
