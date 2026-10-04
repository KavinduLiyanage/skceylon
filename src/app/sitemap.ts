import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/content/products";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // The site is statically exported, so the build date is the last change.
  const lastModified = new Date();

  const staticPages = ["", "products/", "quality/", "about/", "contact/"].map(
    (path) => ({
      url: `${SITE_URL}/${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const productPages = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: [
      `${SITE_URL}${product.photo.src}`,
      ...(product.gallery ?? []).map((image) => `${SITE_URL}${image.src}`),
    ],
  }));

  return [...staticPages, ...productPages];
}
