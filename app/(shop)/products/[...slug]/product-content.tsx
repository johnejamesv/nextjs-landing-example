"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronRight, 
  Home,
  ArrowLeft,
  Package,
  FolderOpen,
  FileText
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data for demonstration
const mockData: Record<string, {
  type: string;
  name: string;
  description: string;
  items?: string[];
  price?: string;
  specs?: string[];
}> = {
  "electronics": {
    type: "category",
    name: "Electronics",
    description: "Latest gadgets and devices",
    items: ["Laptops", "Phones", "Accessories"]
  },
  "electronics/laptops": {
    type: "subcategory",
    name: "Laptops",
    description: "Professional and consumer laptops",
    items: ["MacBook Pro", "Dell XPS", "ThinkPad"]
  },
  "electronics/laptops/macbook-pro": {
    type: "product",
    name: "MacBook Pro",
    description: "Apple M3 Pro chip, 16GB RAM, 512GB SSD",
    price: "$1,999",
    specs: ["14-inch display", "M3 Pro chip", "18-hour battery"]
  }
};

interface ProductContentProps {
  slug: string[];
}

export function ProductContent({ slug }: ProductContentProps) {
  const pathKey = slug.join('/');
  const data = mockData[pathKey];
  
  // Build breadcrumbs
  const breadcrumbs = slug.map((segment, index) => ({
    label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
    href: '/products/' + slug.slice(0, index + 1).join('/')
  }));

  // Determine view type based on depth
  const depth = slug.length;
  const viewType = depth === 1 ? 'category' : depth === 2 ? 'subcategory' : 'product';

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Breadcrumb Header */}
      <section className="relative pt-8 pb-6 border-b bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </Button>
            
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <Link href="/" className="hover:text-foreground transition-colors">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-foreground transition-colors">
                Products
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary">
                {viewType === 'category' && <FolderOpen className="mr-1 h-3 w-3" />}
                {viewType === 'subcategory' && <Package className="mr-1 h-3 w-3" />}
                {viewType === 'product' && <FileText className="mr-1 h-3 w-3" />}
                {viewType.charAt(0).toUpperCase() + viewType.slice(1)} View
              </Badge>
              <span className="text-sm text-muted-foreground">
                Depth: {depth} segments
              </span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  {breadcrumbs[breadcrumbs.length - 1]?.label}
                </CardTitle>
                <CardDescription className="text-lg">
                  {data?.description || `Dynamic route for path: /${pathKey}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Show params info */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">Route Parameters</h4>
                  <pre className="text-xs">
                    {JSON.stringify({ slug, depth, viewType }, null, 2)}
                  </pre>
                </div>

                {/* Render based on view type */}
                {data?.items && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">
                      {viewType === 'category' ? 'Subcategories' : 'Products'}
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {data.items.map((item: string) => (
                        <Link 
                          key={item} 
                          href={`/products/${pathKey}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{item}</span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {data?.specs && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Specifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.specs.map((spec: string) => (
                        <Badge key={spec} variant="secondary">{spec}</Badge>
                      ))}
                    </div>
                    {data.price && (
                      <p className="text-2xl font-bold text-primary mt-4">
                        {data.price}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Technical Details */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>How This Page Works</CardTitle>
                <CardDescription>
                  Technical implementation of the catch-all route
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Route File Location</h4>
                    <p className="text-sm text-muted-foreground">
                      This page is served from <code className="text-xs bg-muted px-1 py-0.5 rounded">app/(shop)/products/[...slug]/page.tsx</code>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">2. Parameters Received</h4>
                    <pre className="text-xs">
{`// Current URL: /products/${pathKey}
// params.slug = ${JSON.stringify(slug)}

// You can access any segment:
const category = slug[0];    // "${slug[0] || 'undefined'}"
const subcategory = slug[1]; // "${slug[1] || 'undefined'}"  
const product = slug[2];     // "${slug[2] || 'undefined'}"`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Dynamic Rendering</h4>
                    <p className="text-sm text-muted-foreground">
                      The component determines what to render based on the URL depth:
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• 1 segment → Category listing</li>
                      <li>• 2 segments → Subcategory or product list</li>
                      <li>• 3+ segments → Product detail page</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> The optional catch-all route 
                    <code className="mx-1 px-1 py-0.5 bg-amber-100 rounded text-xs">[[...slug]]</code>
                    would also match <code className="mx-1 px-1 py-0.5 bg-amber-100 rounded text-xs">/products</code>
                    (with no segments). The current
                    <code className="mx-1 px-1 py-0.5 bg-amber-100 rounded text-xs">[...slug]</code>
                    requires at least one segment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
