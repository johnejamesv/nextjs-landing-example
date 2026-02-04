import { ProductContent } from "./product-content";

// Generate static params for all product paths
export function generateStaticParams() {
  return [
    { slug: ["electronics"] },
    { slug: ["electronics", "laptops"] },
    { slug: ["electronics", "laptops", "macbook-pro"] },
    { slug: ["clothing"] },
    { slug: ["home-garden"] },
    { slug: ["sports"] }
  ];
}

interface ProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DynamicProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  return <ProductContent slug={slug} />;
}
