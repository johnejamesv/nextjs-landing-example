"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Route, 
  ArrowRight,
  Layers,
  FolderTree,
  ChevronRight,
  ArrowUpRight,
  Target,
  ArrowLeft,
  Zap,
  Box,
  ShoppingBag,
  Home,
  Shirt,
  Dumbbell
} from "lucide-react";
import Link from "next/link";

// Sample product categories demonstrating dynamic routing
const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Laptops, phones, and accessories",
    subcategories: ["Laptops", "Phones", "Accessories"],
    productCount: 156,
    icon: Zap,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    accentColor: "#3b82f6"
  },
  {
    name: "Clothing",
    slug: "clothing",
    description: "Men's and women's fashion",
    subcategories: ["Men", "Women", "Kids"],
    productCount: 342,
    icon: Shirt,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "#10b981"
  },
  {
    name: "Home & Garden",
    slug: "home-garden",
    description: "Furniture, decor, and outdoor",
    subcategories: ["Furniture", "Decor", "Garden"],
    productCount: 215,
    icon: Home,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accentColor: "#f59e0b"
  },
  {
    name: "Sports",
    slug: "sports",
    description: "Equipment and apparel",
    subcategories: ["Fitness", "Outdoor", "Team Sports"],
    productCount: 189,
    icon: Dumbbell,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    accentColor: "#8b5cf6"
  }
];

// Example deep paths to demonstrate catch-all routing
const examplePaths = [
  { path: "/products/electronics", label: "Category", color: "bg-blue-500" },
  { path: "/products/electronics/laptops", label: "Subcategory", color: "bg-indigo-500" },
  { path: "/products/electronics/laptops/macbook-pro", label: "Product", color: "bg-violet-500" },
  { path: "/products/electronics/laptops/macbook-pro/reviews", label: "Reviews", color: "bg-purple-500" },
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

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background noise pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/5 via-transparent to-teal-600/5" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-600/10 to-transparent rounded-full blur-3xl" />
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
            
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <Route className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium">Strategy 2</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-4">
              Dynamic Route <span className="gradient-text">Segments</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              This page demonstrates Strategy 2: Dynamic Route Segments & Catch-All Routes. 
              Click any category to see how the same component handles infinitely nested paths.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example Paths */}
      <section className="py-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-teal-600/5" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-sm text-muted-foreground mr-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Example URL paths handled by [...slug]:
            </span>
            {examplePaths.map((item, index) => (
              <div key={item.path} className="flex items-center">
                <Button variant="ghost" size="sm" asChild className="h-auto py-1.5 px-3 text-xs rounded-full hover:bg-white/5 group">
                  <Link href={item.path}>
                    <span className={`w-2 h-2 rounded-full ${item.color} mr-2`} />
                    {item.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
                {index < examplePaths.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold mb-8 flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              Browse Categories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <motion.div key={category.slug} variants={itemVariants}>
                  <Link href={`/products/${category.slug}`}>
                    <Card className="group h-full border-2 border-white/8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent">
                      {/* Gradient header */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${category.gradient}`} />
                      
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div 
                              className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-inner"
                              style={{ background: `${category.accentColor}15` }}
                            >
                              <category.icon className="h-7 w-7" style={{ color: category.accentColor }} />
                            </div>
                            <div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {category.name}
                              </CardTitle>
                              <CardDescription className="mt-1">
                                {category.description}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="secondary" className="font-mono bg-white/5">{category.productCount}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.subcategories.map((sub) => (
                            <Badge key={sub} variant="outline" className="text-xs px-2 py-1 border-white/10">
                              {sub}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-primary font-medium">
                          <span>Browse category</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Technical Explanation */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-600/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* File Structure */}
              <Card className="overflow-hidden border-2 border-white/8 hover:border-emerald-500/30 transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <FolderTree className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle>File Structure</CardTitle>
                      <CardDescription>Single file handles all nested paths</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs rounded-xl">
{`app/
└── (shop)/
    └── products/
        └── [...slug]/      # Catch-all segment
            ├── page.tsx    # Handles all paths
            └── loading.tsx # Loading state

// URL → File mapping:
// /products/electronics
//   → app/(shop)/products/[...slug]/page.tsx
//   → params.slug = ['electronics']

// /products/electronics/laptops
//   → params.slug = ['electronics', 'laptops']

// /products/electronics/laptops/macbook
//   → params.slug = ['electronics', 'laptops', 'macbook']`}
                  </pre>
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card className="overflow-hidden border-2 border-white/8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <CardTitle>Implementation</CardTitle>
                      <CardDescription>How to handle dynamic segments</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs rounded-xl">
{`// app/(shop)/products/[...slug]/page.tsx

interface Props {
  params: {
    slug: string[];  // Array of path segments
  }
}

export default function ProductPage({ 
  params 
}: Props) {
  const { slug } = params;
  
  // Build breadcrumbs from slug array
  const breadcrumbs = slug.map((segment, i) => ({
    label: segment,
    href: '/products/' + slug.slice(0, i + 1).join('/')
  }));
  
  // Determine view type based on depth
  const depth = slug.length;
  
  if (depth === 1) {
    return <CategoryView slug={slug} />;
  } else if (depth === 2) {
    return <SubcategoryView slug={slug} />;
  } else {
    return <ProductDetailView slug={slug} />;
  }
}

// Optional: Generate static paths
export async function generateStaticParams() {
  return [
    { slug: ['electronics'] },
    { slug: ['electronics', 'laptops'] },
    { slug: ['clothing'] },
  ];
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-600/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 border-white/8">
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Box className="h-5 w-5 text-emerald-400" />
                  </div>
                  <CardTitle>Key Benefits of Catch-All Routes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Infinite Nesting",
                      desc: "Handle any depth of URL hierarchy with a single component. Perfect for category trees and content hierarchies.",
                      icon: Layers
                    },
                    {
                      title: "SEO-Friendly URLs",
                      desc: "Create human-readable, keyword-rich URLs that search engines love. No query parameters needed.",
                      icon: Target
                    },
                    {
                      title: "Single Component",
                      desc: "Reduce code duplication by handling all path depths in one place. Easier maintenance and consistent UX.",
                      icon: ShoppingBag
                    }
                  ].map((item, index) => (
                    <div key={index} className="space-y-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
