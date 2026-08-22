import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/content/products";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "products/", "quality/", "about/", "contact/"].map(
    (path) => ({
      url: `${SITE_URL}/${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const productPages = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
