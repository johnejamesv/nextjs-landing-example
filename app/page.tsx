"use cache";

import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import { StrategiesSection } from "@/components/strategies-section";
import { CTASection, Footer, ImplementationSection } from "@/components/cta-section";

function SectionSkeleton() {
  return <div className="h-[600px] w-full bg-muted/5 animate-pulse" />;
}

export default async function Home() {
  // This is now a cached Server Component
  // It renders instant HTML shell and streams in interactive parts

  return (
    <>
      {/* Hero loads immediately (critical LCP) but hydration is deferred */}
      <HeroSection />

      {/* Strategies section streams in */}
      <Suspense fallback={<SectionSkeleton />}>
        <StrategiesSection />
      </Suspense>

      {/* Implementation details stream in */}
      <Suspense fallback={<SectionSkeleton />}>
        <ImplementationSection />
      </Suspense>

      {/* CTA streams in */}
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>

      <Footer />
    </>
  );
}
