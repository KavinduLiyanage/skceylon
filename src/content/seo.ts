import type { Metadata } from "next";
import { SITE_NAME } from "./site";

/**
 * Site-wide share image. A saved copy of what src/app/opengraph-image.tsx
 * renders, kept as a real .png because the generated route exports without
 * a file extension. Re-save it if that design changes:
 *   curl -L http://localhost:4000/opengraph-image -o public/og/default.png
 */
const DEFAULT_SHARE_IMAGE = {
  url: "/og/default.png",
  width: 1200,
  height: 630,
  alt: "SK Ceylon — coco peat and coir exports from Sri Lanka",
};

type PageMetaInput = {
  /** Page title without the brand; the layout template appends it. */
  title?: string;
  /** Aim for 155 characters or fewer so search results show it whole. */
  description: string;
  /** Path with leading and trailing slash, e.g. "/products/". */
  path: string;
  /** Share image; JPEG or PNG, since social crawlers skip AVIF. */
  image?: { url: string; alt: string; width?: number; height?: number };
};

/**
 * Builds the metadata for one page. A page's own `openGraph` object replaces
 * the layout's rather than merging with it, so every field a share preview
 * needs (site name, type, image) is set here on each page.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
}: PageMetaInput): Metadata {
  const shareImage = image
    ? { width: 1200, height: 630, ...image }
    : DEFAULT_SHARE_IMAGE;
  const shareTitle = title ? `${title} | ${SITE_NAME}` : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(shareTitle ? { title: shareTitle } : {}),
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      ...(shareTitle ? { title: shareTitle } : {}),
      description,
      images: [shareImage.url],
    },
  };
}
