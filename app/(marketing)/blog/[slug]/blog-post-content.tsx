"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Clock,
  Calendar,
  Share2,
  Bookmark,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "optimizing-nextjs-navigation": {
    title: "Optimizing Next.js Navigation Performance",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Performance", "Next.js"],
    content: `
## The Challenge

Modern web applications demand instant navigation. Users expect sub-100ms transitions 
between pages, similar to native app experiences. Next.js provides powerful primitives 
to achieve this, but they require strategic implementation.

## Strategy 1: Route-Level Prefetching

Next.js automatically prefetches pages linked with the Link component. However, 
understanding when and how this happens is crucial for optimization.

### Viewport-Based Prefetching

By default, Next.js uses Intersection Observer to prefetch links as they enter 
the viewport:

- Efficient bandwidth usage
- Respects user's data preferences
- Loads content before interaction

### Hover-Based Prefetching

For critical navigation paths, consider prefetching on hover:

- Reduces perceived latency
- Predicts user intent
- Balances resource usage

## Strategy 2: Dynamic Import Optimization

Code splitting at the route level ensures users only download what they need:

- Automatic with App Router
- Manual control when needed
- Keep initial bundles small

## Results

Implementing these strategies reduced our navigation times by 70%, achieving 
consistent sub-100ms transitions across the application.
    `
  },
  "route-groups-explained": {
    title: "Route Groups Explained: Organizing at Scale",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Architecture", "Routing"],
    content: `
## What Are Route Groups?

Route groups in Next.js allow you to organize your application logically without 
affecting the URL structure. They are defined using parentheses in folder names.

## Why Use Route Groups?

### 1. Feature Organization

Separate concerns:
- (marketing) - Public pages
- (shop) - E-commerce
- (dashboard) - Admin tools

### 2. Shared Layouts

Each group can have its own layout:
- Marketing layout with navigation
- Shop layout with cart sidebar
- Dashboard layout with sidebar

### 3. Clean URLs

The group name never appears in the URL:
- File: app/(marketing)/about/page.tsx
- URL: /about

## Best Practices

1. Use descriptive group names
2. Keep layouts focused
3. Consider loading states per group
4. Plan for future scaling
    `
  },
  "parallel-routes-dashboards": {
    title: "Building Complex Dashboards with Parallel Routes",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Dashboards", "Advanced"],
    content: `
## Understanding Parallel Routes

Parallel routes (using @folder convention) enable rendering multiple pages 
simultaneously within the same layout. Each slot operates independently.

## Key Benefits

### Independent Loading States

Each slot can show its own loading state:
- Analytics loading while Team renders
- Better perceived performance
- No waterfall blocking

### Isolated Error Boundaries

Errors in one slot don't crash the entire page:
- Analytics error doesn't affect Team
- Graceful degradation
- Better UX

### Parallel Data Fetching

Data fetching happens simultaneously:
- No sequential loading
- Faster time to interactive
- Optimal resource usage

## Implementation Pattern

\`\`\`tsx
// layout.tsx with parallel routes
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-3">{team}</aside>
      <main className="col-span-6">{children}</main>
      <aside className="col-span-3">{analytics}</aside>
    </div>
  )
}
\`\`\`

This pattern enables building complex, performant dashboards with excellent UX.
    `
  },
  "dynamic-segments-seo": {
    title: "SEO Best Practices for Dynamic Route Segments",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["SEO", "Dynamic Routes"],
    content: `
## The SEO Challenge with Dynamic Routes

Dynamic routes (e.g., /blog/[slug]) require special attention for SEO:
- Static generation at build time
- Proper metadata for each page
- Sitemap generation
- Open Graph images

## generateStaticParams

Pre-render dynamic routes at build time:

\`\`\`tsx
export async function generateStaticParams() {
  const posts = await fetchPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
\`\`\`

## Dynamic Metadata

Export metadata based on page data:

\`\`\`tsx
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  }
}
\`\`\`

## Sitemap Generation

Generate comprehensive sitemaps including all dynamic routes:
- All blog posts
- Product pages
- Category pages

## Testing

Verify SEO implementation:
1. Use Google Search Console
2. Test with Rich Results Test
3. Check Open Graph with Facebook Debugger
4. Validate Twitter Cards
    `
  }
};

interface BlogPostContentProps {
  slug: string;
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const post = blogPosts[slug];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <section className="relative pt-16 pb-12 border-b">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card>
              <CardContent className="prose prose-slate max-w-none py-8">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```tsx?\n?|```/g, '');
                    return (
                      <pre key={index} className="my-6">
                        <code>{code}</code>
                      </pre>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          <Separator className="my-12" />

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
            
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                More Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technical Note */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dynamic Route Rendering</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This page is rendered using Next.js dynamic route segments. 
                      The URL <code className="px-1 py-0.5 bg-muted rounded text-xs">/blog/{slug}</code> maps to 
                      <code className="px-1 py-0.5 bg-muted rounded text-xs">app/(marketing)/blog/[slug]/page.tsx</code>.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Technical Details:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Route parameter extracted from URL: <code className="text-xs">params.slug</code></li>
                        <li>• Content fetched based on slug</li>
                        <li>• <code className="text-xs">generateStaticParams</code> pre-renders at build time</li>
                        <li>• <code className="text-xs">notFound()</code> handles 404s for invalid slugs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
