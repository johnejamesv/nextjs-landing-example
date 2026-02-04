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
    
    // Small delay for transition effect
    setTimeout(() => {
      router.push(href);
      setIsNavigating(false);
    }, 150);
  }, [router, pathname]);

  const prefetch = useCallback((href: string) => {
    router.prefetch(href);
  }, [router]);

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
