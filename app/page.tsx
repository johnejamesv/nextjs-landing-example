"use client";

import { motion } from "framer-motion";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  GitBranch, 
  Zap, 
  Layers, 
  Route, 
  Globe,
  Code2,
  Clock,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Box,
  Workflow,
  Cpu,
  Shield
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
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "#3b82f6"
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
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "#10b981"
  },
  {
    id: 3,
    title: "Parallel Routes for Complex Layouts",
    description: "Render multiple pages in the same layout simultaneously. Perfect for dashboards with independent sections that can load in parallel.",
    icon: GitBranch,
    code: `// app/layout.tsx with parallel routes
export default function Layout({
  children,
  team,      // @team slot
  analytics, // @analytics slot
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-2">
      <div>{team}</div>
      <div>{analytics}</div>
      {children}
    </div>
  )
}`,
    benefits: ["Independent loading states", "Isolated error boundaries", "Parallel data fetching"],
    href: "/about",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "#f59e0b"
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
    gradient: "from-purple-500 to-fuchsia-600",
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
    gradient: "from-rose-500 to-pink-600",
    accentColor: "#f43f5e"
  }
];

const features = [
  { icon: Code2, label: "TypeScript First", desc: "Full type safety across routes" },
  { icon: Clock, label: "Fast Navigation", desc: "Sub-100ms page transitions" },
  { icon: Sparkles, label: "Modern Stack", desc: "Next.js 14+ App Router" },
];

const bentoFeatures = [
  { icon: Box, title: "Modular", desc: "Composable architecture" },
  { icon: Workflow, title: "Streamlined", desc: "Optimized workflows" },
  { icon: Cpu, title: "Performant", desc: "Built for speed" },
  { icon: Shield, title: "Reliable", desc: "Production ready" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background noise aurora-bg">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Animated aurora blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-orange-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-full blur-3xl" />
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
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-8">
              <span className="block text-foreground/90">Master</span>
              <span className="block mt-2 gradient-text-hero">App Router</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Five practical strategies for creating <span className="text-foreground font-medium">flatter, faster</span> navigation 
              experiences in modern Next.js applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-lift gap-2 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                <Link href="#strategies">
                  Explore Strategies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="btn-lift gap-2 rounded-xl glass">
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
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {bentoFeatures.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="bento-card p-5 group"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="block text-sm font-semibold text-foreground">{feature.title}</span>
                <span className="text-xs text-muted-foreground">{feature.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Strategies Section - Bento Layout */}
      <section id="strategies" className="py-24 relative">
        <div className="absolute inset-0 -z-10 mesh-gradient opacity-30" />
        
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
                <div className="strategy-card group">
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
      </section>

      <div className="section-divider" />

      {/* Implementation Details - Bento Grid */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              {
                title: "App Router Structure",
                content: "Leveraging Next.js 14+ App Router with file-system based routing, nested layouts, and server components by default.",
                icon: Layers,
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                title: "Client-Side Transitions",
                content: "Framer Motion for smooth page transitions with AnimatePresence for exit animations and state persistence.",
                icon: Globe,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Prefetch Strategy",
                content: "Hybrid approach combining Next.js automatic prefetching with custom viewport-based eager loading.",
                icon: Zap,
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Route Groups",
                content: "Feature-based organization using (marketing), (shop), and (dashboard) route groups for clean separation.",
                icon: GitBranch,
                gradient: "from-purple-500 to-fuchsia-500"
              },
              {
                title: "Dynamic Segments",
                content: "Catch-all [...slug] routes for flexible content hierarchies with generateStaticParams for SSG.",
                icon: Route,
                gradient: "from-rose-500 to-pink-500"
              },
              {
                title: "Loading States",
                content: "Strategic loading.tsx files for instant feedback during navigation with streaming SSR support.",
                icon: Clock,
                gradient: "from-cyan-500 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="bento-card card-shine h-full p-6 group">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl glass-strong px-8 py-20 sm:px-16 sm:py-24"
          >
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
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
                Navigate through the site to experience these strategies in action. 
                Each page demonstrates different aspects of the implementation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 btn-lift gap-2 px-8 rounded-xl">
                  <Link href="/blog">
                    Visit Blog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 btn-lift rounded-xl" asChild>
                  <Link href="/products">
                    Browse Products
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
              Built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui
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
    </div>
  );
}
