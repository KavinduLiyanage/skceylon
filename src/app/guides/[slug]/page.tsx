import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBody } from "@/components/GuideBody";
import { JsonLd } from "@/components/JsonLd";
import { ProductFaq } from "@/components/ProductFaq";
import { RelatedProducts } from "@/components/RelatedProducts";
import { RfqSection } from "@/components/RfqSection";
import { GUIDES, getGuide, readingMinutes } from "@/content/guides";
import { getProduct } from "@/content/products";
import { pageMeta } from "@/content/seo";
import { COMPANY, SITE_NAME, SITE_URL } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.metaTitle,
    description: guide.description,
    path: `/guides/${guide.slug}/`,
  });
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/guides/${guide.slug}/`;
  const headings = guide.blocks.filter((block) => block.type === "h2");
  const products = guide.products
    .map((productSlug) => getProduct(productSlug))
    .filter((product) => product !== undefined);
  const others = GUIDES.filter((other) => other.slug !== guide.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: url,
    datePublished: guide.published,
    dateModified: guide.published,
    inLanguage: "en",
    image: `${SITE_URL}/og/default.png`,
    author: { "@id": `${SITE_URL}/#organization`, name: COMPANY.name },
    publisher: { "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
    about: products.map((product) => ({
      "@type": "Product",
      name: product.name,
      url: `${SITE_URL}/products/${product.slug}/`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      <article>
        <header className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides/" },
                { label: guide.category },
              ]}
              currentPath={`/guides/${guide.slug}/`}
            />
            <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
              {guide.category} · {readingMinutes(guide)} min read
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
              {guide.summary}
            </p>
            <p className="mt-5 font-mono text-xs text-ink-soft">
              By {SITE_NAME} ·{" "}
              <time dateTime={guide.published}>
                {dateFormat.format(new Date(guide.published))}
              </time>
            </p>
          </div>
        </header>

        <div className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <aside className="rounded-2xl border border-rule bg-parchment p-6 sm:p-7">
                <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
                  Key takeaways
                </p>
                <ul className="mt-3 space-y-2.5">
                  {guide.takeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-deep"
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                          <path
                            d="M2.5 6.5 5 9l4.5-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[0.9375rem] leading-snug text-ink text-pretty">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="mt-10">
                <GuideBody blocks={guide.blocks} />
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <nav
                  aria-label="In this guide"
                  className="rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5"
                >
                  <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                    In this guide
                  </p>
                  <ol className="mt-3 space-y-2">
                    {headings.map((heading, index) => (
                      <li key={heading.id} className="flex gap-3">
                        <span className="font-mono text-xs text-gold-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${heading.id}`}
                          className="text-sm leading-snug text-ink-soft hover:text-green-deep"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-5 rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5">
                  <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                    More guides
                  </p>
                  <ul className="mt-3 space-y-3">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/guides/${other.slug}/`}
                          className="text-sm leading-snug font-medium text-ink hover:text-green-deep"
                        >
                          {other.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <ProductFaq
        product={guide.category}
        heading="Frequently asked"
        faqs={guide.faqs}
      />
      <RelatedProducts products={products} />
      <RfqSection heading="Ask us which grade or blend suits your crop." />
    </>
  );
}
