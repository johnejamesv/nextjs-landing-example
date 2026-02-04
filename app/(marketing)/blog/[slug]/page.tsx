import { BlogPostContent } from "./blog-post-content";

// Generate static params for all blog posts
export function generateStaticParams() {
  return [
    { slug: "optimizing-nextjs-navigation" },
    { slug: "route-groups-explained" },
    { slug: "parallel-routes-dashboards" },
    { slug: "dynamic-segments-seo" }
  ];
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
