import { products } from "@/data/content";
import { ProductDetailView } from "@/components/product/ProductDetailView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return {
      title: "Product Not Found | G&L Glow",
    };
  }
  return {
    title: `${product.name} | G&L Glow Luxury Rituals`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailView productId={id} />;
}
