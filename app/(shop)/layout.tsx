import { MainNav } from "@/components/main-nav";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <MainNav />
      {/* Shop layout wrapper - demonstrates different layout from marketing */}
      <div className="bg-background">
        <div className="bg-gradient-to-r from-primary/5 via-background to-primary/5 border-b">
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Shop</span>
              <span>/</span>
              <span>Products</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
