import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Navigation Optimization Proxy (formerly Middleware)
 * 
 * Next.js 16 renamed 'middleware' to 'proxy' for request-time code.
 * This proxy demonstrates practical URL optimization strategies:
 * 1. Flatten legacy deep URLs to modern flat structure
 * 2. Add security headers for navigation safety
 * 3. Handle trailing slashes consistently
 * 4. Implement smart redirects for SEO
 */
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  
  // Strategy 1: Flatten legacy deep URLs
  // Redirect /shop/products/* -> /products/* (removes redundant /shop prefix)
  if (pathname.startsWith("/shop/products/")) {
    const newPath = pathname.replace("/shop/products/", "/products/");
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, 301); // Permanent redirect for SEO
  }
  
  // Strategy 2: Normalize trailing slashes
  // Remove trailing slashes for consistency (except root)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }
  
  // Strategy 3: Handle legacy category URLs
  // /category/electronics -> /products/electronics
  const categoryMatch = pathname.match(/^\/category\/(.+)$/);
  if (categoryMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/products/${categoryMatch[1]}`;
    return NextResponse.redirect(url, 301);
  }
  
  // Strategy 4: Add navigation-performance headers
  const response = NextResponse.next();
  
  // Enable Early Hints for faster navigation (HTTP 103)
  response.headers.set("Accept-CH", "DPR, Width, Viewport-Width");
  
  // Add cache control for navigational prefetching
  response.headers.set(
    "Cache-Control",
    "public, max-age=0, must-revalidate, stale-while-revalidate=86400"
  );
  
  // Security headers for safe navigation
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  return response;
}

/**
 * Matcher configuration
 * - Excludes static files, api routes, and Next.js internals
 * - Applies to all page routes for consistent navigation behavior
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes)
     * - *.svg, *.png, *.jpg, *.jpeg, *.gif, *.webp (image files)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
