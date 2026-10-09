import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RfqSection } from "@/components/RfqSection";
import { GUIDES, readingMinutes } from "@/content/guides";
import { pageMeta } from "@/content/seo";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Coco Peat Buyer Guides",
  description:
    "Practical guides for coco peat buyers: washed vs buffered grades, EC and pH, container loading figures, grow bag blend ratios and hydrating blocks.",
  path: "/guides/",
});

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SK Ceylon buyer guides",
  itemListElement: GUIDES.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    url: `${SITE_URL}/guides/${guide.slug}/`,
  })),
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={listJsonLd} />
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
            currentPath="/guides/"
          />
          <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
            Buyer guides
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
            What to know before you order coco peat.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Short, practical answers to the questions buyers ask before they
            pick a grade, a blend or a container quantity. Written from the
            specification sheet outwards, not from a brochure.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <ol className="grid gap-5 sm:grid-cols-2">
            {GUIDES.map((guide, index) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-rule bg-paper p-7 shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:border-rule-strong hover:shadow-lg hover:shadow-ink/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="inline-flex rounded-full bg-green/10 px-2.5 py-1 font-mono text-xs font-medium text-green-deep">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
                      {guide.category} · {readingMinutes(guide)} min read
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-tight font-medium text-ink text-balance">
                    {guide.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft text-pretty">
                    {guide.summary}
                  </p>
                  <p className="mt-auto pt-5 font-mono text-xs font-medium text-green-deep group-hover:underline">
                    Read the guide →
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RfqSection heading="Ask us which grade or blend suits your crop." />
    </>
  );
}
