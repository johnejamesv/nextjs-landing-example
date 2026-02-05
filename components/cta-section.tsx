"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import {
    ArrowRight,
    GitBranch,
    Layers,
    Route,
    Globe,
    Sparkles,
    Box,
    Cpu,
    Zap,
    Clock,
    Shield
} from "lucide-react";
import Link from "next/link";

export function ImplementationSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/8 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/8 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                        <Cpu className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Under the Hood</span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Implementation Architecture
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technical decisions and patterns used throughout this implementation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {[
                        {
                            title: "App Router + Next.js 16",
                            content: "Latest features: PPR (Partial Prerendering), View Transitions API, and Turbopack for optimal performance.",
                            icon: Layers,
                            gradient: "from-cyan-500 to-blue-600"
                        },
                        {
                            title: "Parallel & Intercepting",
                            content: "Modal overlays with @modal slot and (.) intercepting routes. Context-preserving navigation with URL updates.",
                            icon: GitBranch,
                            gradient: "from-amber-500 to-orange-500"
                        },
                        {
                            title: "Server Actions",
                            content: "Form mutations without API routes. Type-safe server functions with progressive enhancement.",
                            icon: Zap,
                            gradient: "from-fuchsia-500 to-pink-600"
                        },
                        {
                            title: "Middleware",
                            content: "Request-time redirects, URL normalization, and security headers for optimized navigation.",
                            icon: Globe,
                            gradient: "from-emerald-500 to-teal-600"
                        },
                        {
                            title: "Route Groups",
                            content: "Feature-based organization using (marketing), (shop) route groups for clean URL structure.",
                            icon: Box,
                            gradient: "from-violet-500 to-purple-600"
                        },
                        {
                            title: "Dynamic Segments",
                            content: "Catch-all [...slug] routes for flexible hierarchies with generateStaticParams for SSG.",
                            icon: Route,
                            gradient: "from-pink-500 to-rose-600"
                        },
                        {
                            title: "Prefetch Strategy",
                            content: "Automatic viewport-based prefetching with custom intent detection for instant navigation.",
                            icon: Cpu,
                            gradient: "from-cyan-500 to-purple-600"
                        },
                        {
                            title: "Loading States",
                            content: "Strategic loading.tsx with Suspense boundaries for streaming SSR and instant feedback.",
                            icon: Clock,
                            gradient: "from-blue-500 to-indigo-600"
                        }
                    ].map((item, index) => (
                        <GlowCard
                            key={index}
                            variant="glass-tinted"
                            glow="subtle"
                            shine
                            className="h-full p-6"
                        >
                            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CTASection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl glass-premium px-8 py-20 sm:px-16 sm:py-24"
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-purple-600/15 to-pink-600/15" />
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/25 to-pink-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
                    </div>

                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-grid-small opacity-[0.02]" />

                    <div className="relative z-10 mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Ready to explore?</span>
                        </motion.div>

                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Experience it firsthand
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            Navigate through the site to experience all 5 strategies plus Server Actions
                            and Middleware. Click a blog post to see Intercepting Routes in action!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" asChild variant="gradient" className="btn-lift gap-2 px-8 rounded-xl">
                                <Link href="/blog">
                                    Visit Blog
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="glass" className="border-cyan-500/20 hover:bg-cyan-500/10 btn-lift rounded-xl" asChild>
                                <Link href="/products">
                                    Browse Products
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="text-primary-foreground font-bold">N</span>
                        </div>
                        <div>
                            <span className="font-bold text-lg block">NavArch</span>
                            <span className="text-xs text-muted-foreground">Next.js Navigation Patterns</span>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Built with Next.js 16, React 19, TypeScript, Tailwind v4, and shadcn/ui
                    </p>

                    <div className="flex items-center gap-6 text-sm">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">Home</Link>
                        <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">About</Link>
                        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">Blog</Link>
                        <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">Products</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
