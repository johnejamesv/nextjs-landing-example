import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Breadcrumb Skeleton */}
      <section className="relative pt-8 pb-6 border-b bg-muted/30">
        <div className="container">
          <Skeleton className="h-9 w-32 mb-4" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12">
        <div className="container">
          <Skeleton className="h-6 w-40 mb-6" />
          
          <Card>
            <CardHeader>
              <Skeleton className="h-9 w-3/4 mb-2" />
              <Skeleton className="h-5 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <Skeleton className="h-24 w-full" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Skeleton className="h-16" />
                <Skeleton className="h-16" />
                <Skeleton className="h-16" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
