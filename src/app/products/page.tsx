import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RfqSection } from "@/components/RfqSection";
import { SpecLedger } from "@/components/SpecLedger";
import { JsonLd } from "@/components/JsonLd";
import { PRODUCTS } from "@/content/products";
import { KEY_SPECS, SITE_URL } from "@/content/site";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "Coco Peat & Coir Products",
  description:
    "Coco peat blocks, grow bags, coco chip blocks, peat bales, discs and coir fibre bales from Sri Lanka. Full specifications and packing details.",
  path: "/products/",
});

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SK Ceylon coco peat and coir products",
  itemListElement: PRODUCTS.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `${SITE_URL}/products/${product.slug}/`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={catalogJsonLd} />
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
          />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
            Coco peat &amp; coir products, specified like lab samples.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Every product below ships against a written specification, and
            every lot is tested by an independent Colombo laboratory before
            loading. These are the figures we hold ourselves to:
          </p>
          <SpecLedger
            rows={KEY_SPECS}
            caption="Sitewide baseline · verified per lot"
            framed
            className="mt-8 max-w-2xl"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="space-y-5">
            {PRODUCTS.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="group grid gap-6 rounded-2xl border border-rule bg-paper p-7 shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:border-rule-strong hover:shadow-lg hover:shadow-ink/10 sm:p-9 lg:grid-cols-[280px_1fr] lg:gap-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-rule bg-parchment lg:aspect-auto lg:h-full">
                  <Image
                    src={product.photo.src}
                    alt={product.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <p className="inline-flex rounded-full bg-green/10 px-2.5 py-1 font-mono text-xs font-medium text-green-deep">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-medium text-ink">
                    {product.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-green-deep">
                    {product.tagline}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {product.summary}
                  </p>
                  <p className="mt-4 font-mono text-xs font-medium text-green-deep group-hover:underline">
                    Full specification →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RfqSection />
    </>
  );
}
