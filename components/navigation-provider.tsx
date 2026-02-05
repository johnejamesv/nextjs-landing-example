"use client";

import { createContext, useContext, useCallback, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
  isNavigating: boolean;
  navigate: (href: string) => void;
  prefetch: (href: string) => void;
  navigationHistory: string[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

/**
 * Navigation Provider
 * 
 * Provides programmatic navigation with:
 * - Navigation state tracking
 * - History management  
 * - Prefetching utilities
 * 
 * Note: Removed artificial delays - Next.js handles transitions natively.
 * Use this for complex navigation patterns beyond simple <Link> usage.
 * 
 * @deprecated For simple navigation, prefer Next.js <Link> component
 * which provides automatic prefetching and smooth transitions.
 */
export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState<string[]>([pathname]);

  const navigate = useCallback((href: string) => {
    if (href === pathname) return;
    
    setIsNavigating(true);
    
    // Add to history before navigation
    setNavigationHistory(prev => [...prev.slice(-9), href]);
    
    // Use Next.js native navigation - no artificial delays
    // The router handles scroll restoration and transition optimization
    router.push(href);
    
    // Reset navigating state after transition starts
    // Note: Actual navigation is async, this just signals intent
    requestAnimationFrame(() => {
      setIsNavigating(false);
    });
  }, [router, pathname]);

  const prefetch = useCallback((href: string) => {
    // Only prefetch if not already on that page
    if (href !== pathname) {
      router.prefetch(href);
    }
  }, [router, pathname]);

  return (
    <NavigationContext.Provider 
      value={{ 
        isNavigating, 
        navigate, 
        prefetch,
        navigationHistory 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
