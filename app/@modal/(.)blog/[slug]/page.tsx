"use client";

/**
 * Parallel Route + Intercepting Route: Blog Post Modal
 * 
 * This demonstrates Strategy 3 (Parallel Routes) combined with Intercepting Routes.
 * 
 * How it works:
 * - @modal is a parallel route slot defined in the root layout
 * - (.)blog/[slug] is an intercepting route that catches navigation TO /blog/[slug]
 * - When user clicks a blog post link, this modal opens OVER the blog list
 * - The URL still updates to /blog/[slug] enabling deep linking
 * - Refreshing the page shows the full blog post page (no modal)
 * 
 * Benefits:
 * - Context preservation: User doesn't lose scroll position in blog list
 * - Faster perceived navigation: Modal appears instantly while content loads
 * - Deep linking: URL is shareable and works correctly on direct access
 * - Progressive enhancement: Falls back to full page if JS fails
 */

import { use } from "react";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Sample blog posts data
const blogPosts: Record<string, {
  slug: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  gradient: string;
}> = {
  "optimizing-nextjs-navigation": {
    slug: "optimizing-nextjs-navigation",
    title: "Optimizing Next.js Navigation Performance",
    content: `Navigation performance is critical for user experience. In this comprehensive guide, we explore how to leverage Next.js 14+ features to achieve sub-100ms page transitions.

Key strategies include:
• Intelligent prefetching with viewport detection
• Route groups for logical code splitting  
• Dynamic imports for heavy components
• Streaming SSR with Suspense boundaries

The App Router architecture fundamentally changes how we think about navigation, moving from page-based transitions to component-level streaming.`,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Performance", "Next.js"],
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
  },
  "route-groups-explained": {
    slug: "route-groups-explained",
    title: "Route Groups Explained: Organizing at Scale",
    content: `Route groups in Next.js App Router provide a powerful way to organize your application without affecting the URL structure. Using the (group) syntax, you can create logical separations between different sections of your app.

Common patterns:
• (marketing) - Landing pages, about, blog
• (shop) - Product catalog, cart, checkout
• (dashboard) - Admin panels, analytics, settings

Each group can have its own layout, loading states, and error boundaries while maintaining flat URLs.`,
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Architecture", "Routing"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  "parallel-routes-dashboards": {
    slug: "parallel-routes-dashboards",
    title: "Building Complex Dashboards with Parallel Routes",
    content: `Parallel routes (@folder syntax) allow you to render multiple pages simultaneously within the same layout. This is perfect for dashboards with independent sections.

Benefits:
• Independent loading states per section
• Isolated error boundaries
• Parallel data fetching
• Complex layouts without prop drilling

Combined with intercepting routes, you can create modals that maintain context while updating the URL.`,
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Dashboards", "Advanced"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  "dynamic-segments-seo": {
    slug: "dynamic-segments-seo",
    title: "SEO Best Practices for Dynamic Route Segments",
    content: `Dynamic segments ([slug]) and catch-all routes ([...slug]) are powerful but require careful SEO consideration.

Best practices:
• Always implement generateStaticParams for known paths
• Use generateMetadata for dynamic meta tags
• Implement proper canonical URLs
• Create XML sitemaps for dynamic content
• Handle 404s gracefully with notFound()

With Next.js 14+, you can combine static generation with on-demand revalidation for the perfect balance of performance and freshness.`,
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["SEO", "Dynamic Routes"],
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
};

interface BlogModalProps {
  params: Promise<{
    slug: string;
  }>;
}

// Wrapper component to handle Suspense
function BlogModalWrapper({ params }: BlogModalProps) {
  return (
    <Suspense fallback={<ModalSkeleton />}>
      <BlogModalContent params={params} />
    </Suspense>
  );
}

function ModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-3xl h-[70vh] rounded-2xl bg-card border animate-pulse" />
    </div>
  );
}

function BlogModalContent({ params }: BlogModalProps) {
  // In Next.js 15+, params is a Promise - use the use() hook to unwrap it
  const { slug } = use(params);
  const router = useRouter();
  
  const post = blogPosts[slug] || blogPosts["optimizing-nextjs-navigation"];

  const handleClose = () => {
    router.push("/blog", { scroll: false });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={handleBackdropClick}
      >
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl bg-card border shadow-2xl"
        >
          {/* Header with gradient */}
          <div className={`relative bg-gradient-to-br ${post.gradient} p-6 sm:p-8`}>
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full bg-black/20 hover:bg-black/40 text-white border-none"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-white/20 text-white border-none backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h2>

              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[50vh]">
            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical note */}
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <div className="h-1 w-4 rounded-full bg-gradient-to-r from-primary to-primary/50" />
                How This Modal Works
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This is a <strong>Parallel Route</strong> combined with an{" "}
                <strong>Intercepting Route</strong>. The URL updates to{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">/blog/{slug}</code>{" "}
                but the blog list remains mounted underneath. Refresh the page to see
                the full article page.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t">
              <Button variant="outline" onClick={handleClose}>
                Close Modal
              </Button>
              <Button asChild>
                <Link href={`/blog/${slug}`} onClick={handleClose}>
                  View Full Page
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BlogModalWrapper;
