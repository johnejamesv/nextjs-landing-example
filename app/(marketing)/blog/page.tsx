"use client";

/**
 * Blog Listing Page with Intercepting Routes Demo
 * 
 * This page demonstrates Strategy 4 (Intelligent Prefetching) and 
 * works with the Parallel Route + Intercepting Route (@modal/(.)blog/[slug])
 * to show blog posts in a modal overlay while preserving the list context.
 * 
 * How the modal interception works:
 * 1. User is on /blog (this page)
 * 2. User clicks a blog post link to /blog/[slug]
 * 3. The intercepting route @modal/(.)blog/[slug] catches the navigation
 * 4. Modal renders OVER this page, URL updates to /blog/[slug]
 * 5. User can close modal to return to this list (scroll position preserved)
 * 6. Direct navigation to /blog/[slug] or refresh shows full page (not modal)
 */

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  ArrowLeft,
  Clock,
  Calendar,
  Target,
  ArrowUpRight,
  Sparkles,
  Cpu,
  ExternalLink,
  Layers
} from "lucide-react";
import Link from "next/link";

// Sample blog posts with slugs for dynamic routing
const blogPosts = [
  {
    slug: "optimizing-nextjs-navigation",
    title: "Optimizing Next.js Navigation Performance",
    excerpt: "Learn how to leverage prefetching, dynamic imports, and smart caching strategies to achieve sub-100ms page transitions.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Performance", "Next.js"],
    featured: true,
    gradient: "from-blue-500 via-indigo-500 to-violet-500"
  },
  {
    slug: "route-groups-explained",
    title: "Route Groups Explained: Organizing at Scale",
    excerpt: "A deep dive into using route groups for large applications. How to structure marketing, e-commerce, and admin sections.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Architecture", "Routing"],
    featured: false,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500"
  },
  {
    slug: "parallel-routes-dashboards",
    title: "Building Complex Dashboards with Parallel Routes",
    excerpt: "Implement independent loading states and error boundaries for each section of your dashboard using parallel routes.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Dashboards", "Advanced"],
    featured: false,
    gradient: "from-amber-500 via-orange-500 to-red-500"
  },
  {
    slug: "dynamic-segments-seo",
    title: "SEO Best Practices for Dynamic Route Segments",
    excerpt: "How to generate static params, create sitemaps, and handle metadata for catch-all routes and dynamic segments.",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["SEO", "Dynamic Routes"],
    featured: false,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500"
  }
];

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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background noise">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.015]" />
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-white/5 rounded-xl">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <Zap className="h-3.5 w-3.5 text-purple-400" />
                <span className="text-xs font-medium">Strategy 4</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-amber-500/20">
                <Layers className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-xs font-medium">Intercepting Routes Demo</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-4">
              Intelligent <span className="gradient-text">Prefetching</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              This blog listing demonstrates Strategy 4. Click any article to see 
              <strong> Intercepting Routes</strong> in action - a modal opens over this list while 
              the URL updates for sharing. Close the modal to return exactly where you were.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Intercepting Routes Docs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              Featured Post
            </h2>
            
            {blogPosts.filter(p => p.featured).map((post) => (
              <Card key={post.slug} className="group overflow-hidden border-2 border-white/8 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`relative bg-gradient-to-br ${post.gradient} p-8 flex items-center justify-center min-h-[320px] overflow-hidden`}>
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    <div className="relative text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        Featured
                      </div>
                      <div className="h-20 w-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
                        <Zap className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                  </div>
                  
                  <div className="p-8 lg:p-10 flex flex-col justify-center bg-card/30">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <CardTitle className="text-3xl mb-4 group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1 bg-white/5">{tag}</Badge>
                      ))}
                    </div>
                    
                    <Button asChild className="w-fit group/btn rounded-xl">
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          <div className="section-divider my-12" />

          {/* All Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-gradient-to-r from-primary to-primary/50" />
              All Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(p => !p.featured).map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="group h-full flex flex-col border-2 border-white/8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent">
                      {/* Gradient header */}
                      <div className={`h-2 w-full bg-gradient-to-r ${post.gradient}`} />
                      
                      <CardHeader>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-1">
                        <CardDescription className="line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      
                      <CardFooter className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-white/10">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Explanation Sections */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Prefetching Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-2 border-white/8 h-full">
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle>Prefetching Strategy</CardTitle>
                      <CardDescription>Automatic viewport-based loading</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Next.js <code className="text-xs bg-muted px-1 rounded">Link</code> components 
                    automatically prefetch linked pages when they enter the viewport. This means 
                    blog posts are loaded before the user clicks.
                  </p>
                  <pre className="text-xs rounded-xl">
{`<Link 
  href={\`/blog/\${post.slug}\`}
  // prefetch={true} // default behavior
>
  Read Article
</Link>`}
                  </pre>
                </CardContent>
              </Card>
            </motion.div>

            {/* Intercepting Routes Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-white/8 h-full">
                <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <CardTitle>Intercepting Routes</CardTitle>
                      <CardDescription>Modal overlays with URL updates</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The <code className="text-xs bg-muted px-1 rounded">(.)</code> convention 
                    intercepts navigations and renders a modal instead of a full page transition. 
                    This preserves context while enabling deep linking.
                  </p>
                  <pre className="text-xs rounded-xl">
{`// File structure:
app/
├── blog/[slug]/page.tsx       # Full page
└── @modal/(.)blog/[slug]/     # Intercepting
    └── page.tsx               # Modal

// Result:
// From /blog → click → modal opens
// URL: /blog/[slug] (shareable!)`}
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="section-divider my-12 max-w-5xl mx-auto" />

          {/* Configuration Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 border-white/8 max-w-5xl mx-auto">
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle>Next.js 16 Configuration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      label: "PPR", 
                      desc: "Partial Prerendering - static shell with dynamic streaming",
                      code: "experimental.ppr: true"
                    },
                    { 
                      label: "View Transitions", 
                      desc: "Native browser View Transitions API support",
                      code: "experimental.viewTransition: true"
                    },
                    { 
                      label: "Turbopack", 
                      desc: "Fast builds with persistent caching",
                      code: "experimental.turbo: {...}"
                    }
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                      <code className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary block">
                        {item.code}
                      </code>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
