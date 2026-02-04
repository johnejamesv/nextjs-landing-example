import { MainNav } from "@/components/main-nav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <MainNav />
      {/* Marketing layout wrapper - shared across marketing pages */}
      <div className="bg-background">
        {children}
      </div>
    </div>
  );
}
