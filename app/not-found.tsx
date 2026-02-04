"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card className="text-center">
          <CardContent className="pt-12 pb-12">
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
              <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
              <p className="text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Try searching for what you need:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/products">Products</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
