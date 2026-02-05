"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { GradientText } from "@/components/ui/gradient-text";
import {
    ArrowRight,
    ExternalLink,
    Sparkles,
    Box,
    Workflow,
    Cpu,
    Shield,
    Zap,
    Globe,
    Code2,
    Clock
} from "lucide-react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";

const features = [
    { icon: Code2, label: "TypeScript First", desc: "Full type safety across routes" },
    { icon: Clock, label: "Fast Navigation", desc: "Sub-100ms page transitions" },
    { icon: Sparkles, label: "Next.js 16", desc: "PPR, View Transitions, Turbopack" },
    { icon: Zap, label: "Server Actions", desc: "No API routes needed" },
];

const bentoFeatures = [
    { icon: Box, title: "Modular", desc: "Composable architecture" },
    { icon: Workflow, title: "Streamlined", desc: "Optimized workflows" },
    { icon: Cpu, title: "Performant", desc: "Built for speed" },
    { icon: Shield, title: "Reliable", desc: "Production ready" },
    { icon: Zap, title: "Server Actions", desc: "No API routes" },
    { icon: Globe, title: "Middleware", desc: "Request-time logic" },
];

export function HeroSection() {
    return (
        <>
            <div className="min-h-screen bg-background noise aurora-bg">
                <MainNav />

                {/* Hero Section */}
                <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
                    {/* Enhanced aurora blobs with cyan/purple/pink */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-[900px] h-[900px] bg-gradient-to-br from-cyan-500/25 via-purple-500/20 to-pink-500/15 rounded-full blur-[120px] animate-pulse-glow" />
                        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/20 via-pink-500/15 to-orange-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-gradient-to-r from-cyan-500/8 via-purple-500/8 to-pink-500/8 rounded-full blur-[100px]" />
                        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/15 to-transparent rounded-full blur-[100px] animate-float-slow" />
                    </div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 -z-10 bg-grid opacity-[0.015]" />

                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                            >
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-foreground/90">Next.js Navigation Patterns</span>
                            </motion.div>

                            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-8 tracking-tight-hero">
                                <span className="block text-foreground/90">Master</span>
                                <span className="block mt-2">
                                    <GradientText variant="hero" glow>App Router</GradientText>
                                </span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                                Five practical strategies for creating <span className="text-foreground font-medium">flatter, faster</span> navigation
                                experiences in modern Next.js applications.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" variant="gradient" className="btn-lift gap-2 px-8 rounded-xl">
                                    <Link href="#strategies">
                                        Explore Strategies
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="glass" size="lg" asChild className="btn-lift gap-2 rounded-xl">
                                    <Link href="https://github.com" target="_blank">
                                        View on GitHub
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Bento Grid Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
                        >
                            {bentoFeatures.map((feature, index) => (
                                <GlowCard
                                    key={feature.title}
                                    variant="glass-tinted"
                                    glow="subtle"
                                    className="p-5"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                                        <feature.icon className="h-5 w-5 text-cyan-300" />
                                    </div>
                                    <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                                    <span className="text-xs text-muted-foreground">{feature.desc}</span>
                                </GlowCard>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <div className="section-divider" />
            </div>
        </>
    );
}
