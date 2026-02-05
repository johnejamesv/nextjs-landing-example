"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    GitBranch,
    Zap,
    Layers,
    Route,
    Globe,
    Code2,
    ChevronRight,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import Link from "next/link";

const strategies = [
    {
        id: 1,
        title: "Route Groups for Flattened Architecture",
        description: "Organize routes by feature/domain without affecting URL structure. Create logical separation between marketing, shop, and dashboard sections.",
        icon: Layers,
        code: `app/
├── (marketing)/          # Route group
│   ├── page.tsx         # -> /
│   ├── about/
│   │   └── page.tsx     # -> /about
│   └── blog/
│       └── page.tsx     # -> /blog
├── (shop)/              # Route group
│   ├── products/
│   │   └── page.tsx     # -> /products
│   └── cart/
│       └── page.tsx     # -> /cart
└── layout.tsx`,
        benefits: ["Cleaner project structure", "Shared layouts per domain", "No URL prefix pollution"],
        href: "/about",
        gradient: "from-cyan-500 to-blue-600",
        accentColor: "#06b6d4"
    },
    {
        id: 2,
        title: "Dynamic Route Segments & Catch-All",
        description: "Handle variable URL patterns with dynamic segments and catch-all routes. Support nested product categories and slugs efficiently.",
        icon: Route,
        code: `// app/products/[...slug]/page.tsx
export default function ProductPage({
  params,
}: {
  params: { slug: string[] }
}) {
  // /products/electronics/laptops/macbook
  // params.slug = ['electronics', 'laptops', 'macbook']

  const [category, subcategory, product] = params.slug;

  return <ProductDetail
    breadcrumbs={params.slug}
    depth={params.slug.length}
  />;
}`,
        benefits: ["Infinite nesting support", "SEO-friendly URLs", "Single component for all depths"],
        href: "/products/electronics/laptops/macbook-pro",
        gradient: "from-purple-500 to-pink-600",
        accentColor: "#8b5cf6"
    },
    {
        id: 3,
        title: "Parallel Routes + Intercepting Routes",
        description: "Render multiple pages simultaneously AND intercept navigations for modal overlays. The URL updates for sharing while context is preserved underneath.",
        icon: GitBranch,
        code: `// app/@modal/(.)blog/[slug]/page.tsx
// Intercepts /blog/[slug] navigations from /blog

export default function BlogModal({ params }) {
  const { slug } = params;
  return (
    <Modal>
      <BlogPost slug={slug} />
    </Modal>
  );
}

// Result: Modal opens over blog list,
// URL updates to /blog/[slug] for sharing`,
        benefits: ["Context-preserving modals", "Shareable URLs", "Progressive enhancement", "Independent loading states"],
        href: "/blog",
        gradient: "from-fuchsia-500 to-rose-600",
        accentColor: "#d946ef"
    },
    {
        id: 4,
        title: "Intelligent Prefetching & Link Optimization",
        description: "Leverage Next.js automatic prefetching with custom viewport detection and priority loading for critical navigation paths.",
        icon: Zap,
        code: `// Custom Link with intelligent prefetching
import Link from 'next/link';

<Link
  href="/products"
  prefetch={true}
  // Prefetches on viewport entry
  // Uses Intersection Observer
>
  Products
</Link>

// Programmatic prefetch
const router = useRouter();
router.prefetch('/dashboard'); // On hover/intent`,
        benefits: ["Instant page loads", "Bandwidth-aware loading", "Predictive navigation"],
        href: "/blog",
        gradient: "from-violet-500 to-purple-600",
        accentColor: "#8b5cf6"
    },
    {
        id: 5,
        title: "Smooth Page Transitions & State Persistence",
        description: "Implement animated transitions between routes while preserving scroll position and UI state across navigation.",
        icon: Globe,
        code: `// Page transition wrapper with Framer Motion
<motion.div
  key={pathname}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>

// Scroll restoration
export const scrollBehavior = {
  scrollRestoration: true,
  scrollBehavior: 'smooth'
}`,
        benefits: ["60fps animations", "Scroll position memory", "Reduced perceived latency"],
        href: "/products",
        gradient: "from-pink-500 to-orange-600",
        accentColor: "#ec4899"
    }
];

export function StrategiesSection() {
    return (
        <section id="strategies" className="py-24 relative">
            <div className="absolute inset-0 -z-10 mesh-gradient-vibrant opacity-40" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Core Techniques</span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        5 Navigation Strategies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Each strategy addresses specific challenges in building scalable,
                        performant navigation systems with Next.js App Router.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 max-w-5xl mx-auto"
                >
                    {strategies.map((strategy, index) => (
                        <motion.div
                            key={strategy.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: strategy.id * 0.1 }}
                        >
                            <div className="strategy-card group card-shine">
                                {/* Gradient accent bar */}
                                <div className={`h-1 w-full bg-gradient-to-r ${strategy.gradient}`} />

                                <div className="p-6 lg:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                                        {/* Left: Icon & Title */}
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div
                                                    className="flex h-14 w-14 items-center justify-center rounded-2xl flex-shrink-0"
                                                    style={{ background: `linear-gradient(135deg, ${strategy.accentColor}20, ${strategy.accentColor}08)` }}
                                                >
                                                    <strategy.icon className="h-7 w-7" style={{ color: strategy.accentColor }} />
                                                </div>
                                                <div className="flex-1">
                                                    <Badge variant="outline" className="mb-2 text-xs font-mono border-white/10">
                                                        Strategy 0{strategy.id}
                                                    </Badge>
                                                    <h3 className="text-2xl font-bold text-foreground">{strategy.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                                {strategy.description}
                                            </p>
                                        </div>

                                        {/* Right: Action */}
                                        <Button variant="ghost" size="icon" asChild className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/5 lg:mt-2">
                                            <Link href={strategy.href}>
                                                <ArrowUpRight className="h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Code & Benefits Grid */}
                                    <div className="grid lg:grid-cols-2 gap-6 mt-8">
                                        {/* Code Block */}
                                        <div className="relative group/code">
                                            <div className="absolute -top-3 left-4 glass px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
                                                <Code2 className="h-3 w-3" />
                                                Implementation
                                            </div>
                                            <pre className="text-xs overflow-x-auto h-full rounded-xl">
                                                <code>{strategy.code}</code>
                                            </pre>
                                        </div>

                                        {/* Benefits */}
                                        <div className="space-y-5">
                                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                                                <div className={`h-1 w-4 rounded-full bg-gradient-to-r ${strategy.gradient}`} />
                                                Key Benefits
                                            </h4>
                                            <ul className="space-y-3">
                                                {strategy.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-center gap-3 group/benefit">
                                                        <div
                                                            className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                            style={{ background: `${strategy.accentColor}15` }}
                                                        >
                                                            <ChevronRight className="h-4 w-4" style={{ color: strategy.accentColor }} />
                                                        </div>
                                                        <span className="text-sm font-medium">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Button asChild variant="outline" className="mt-4 w-full group/btn hover:bg-white/5 border-white/10 rounded-xl transition-all duration-300">
                                                <Link href={strategy.href}>
                                                    See it in action
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="section-divider" />
        </section>
    );
}
