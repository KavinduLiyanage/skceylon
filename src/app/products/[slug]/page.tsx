import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaLink } from "@/components/CtaLink";
import { JsonLd } from "@/components/JsonLd";
import { ProductDiagram } from "@/components/ProductDiagram";
import { RfqSection } from "@/components/RfqSection";
import { SpecTable } from "@/components/SpecTable";
import { PRODUCTS, getProduct } from "@/content/products";
import { COMPANY, SITE_URL, rfqMailto } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}/` },
    openGraph: {
      title: `${product.name} — SK Ceylon`,
      description: product.summary,
      url: `/products/${product.slug}/`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    url: `${SITE_URL}/products/${product.slug}/`,
    category: "Horticultural growing media",
    brand: { "@type": "Brand", name: "SK Ceylon" },
    manufacturer: { "@type": "Organization", name: COMPANY.name },
    countryOfOrigin: { "@type": "Country", name: "Sri Lanka" },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.note ? `${spec.value} (${spec.note})` : spec.value,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/products/${product.slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/" },
              { label: product.shortName },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div>
              <h1 className="font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-green-deep">
                {product.tagline}
              </p>
              {product.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink href={rfqMailto(product.name)}>
                  Request a Quotation
                </CtaLink>
              </div>
            </div>
            <div className="space-y-5 self-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule shadow-sm shadow-ink/5">
                <Image
                  src={product.photo.src}
                  alt={product.photo.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5">
                <ProductDiagram kind={product.diagram} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.gallery && (
        <section className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <h2 className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
              Product photos
            </h2>
            <div
              className={`mt-4 grid gap-4 ${
                product.gallery.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {product.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-rule shadow-sm shadow-ink/5"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-rule bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <SpecTable caption="Specification" rows={product.specs} />
          <div className="space-y-10">
            <SpecTable caption="Packing & loading" rows={product.packing} />
            <div>
              <h2 className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                Applications
              </h2>
              <ul className="mt-2 border-y border-rule-strong">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="border-b border-dotted border-rule-strong/70 py-2.5 text-sm text-ink last:border-b-0"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RfqSection
        product={product.name}
        heading={`Quote ${product.shortName.toLowerCase()} for your next container.`}
      />
    </>
  );
}
