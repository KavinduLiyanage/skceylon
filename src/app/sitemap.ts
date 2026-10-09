import type { MetadataRoute } from "next";
import { GUIDES } from "@/content/guides";
import { PRODUCTS } from "@/content/products";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified on static and product pages: stamping the build time on
  // every deploy would tell crawlers that everything changed each time, so
  // the field is only set where a real date exists (guides).
  const staticPages = [
    "",
    "products/",
    "guides/",
    "quality/",
    "about/",
    "contact/",
  ].map(
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
    images: [
      `${SITE_URL}${product.photo.src}`,
      ...(product.gallery ?? []).map((image) => `${SITE_URL}${image.src}`),
    ],
  }));

  const guidePages = GUIDES.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}/`,
    lastModified: new Date(guide.published),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...guidePages];
}
