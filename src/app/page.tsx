import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { HeroScene } from "@/components/HeroScene";
import { ProductDiagram } from "@/components/ProductDiagram";
import { RfqSection } from "@/components/RfqSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecLedger } from "@/components/SpecLedger";
import { PRODUCTS } from "@/content/products";
import { CHECKPOINTS } from "@/content/quality";
import {
  COMPANY,
  COMPLIANCE,
  FEATURES,
  KEY_SPECS,
  MARKETS,
  rfqMailto,
} from "@/content/site";

export const metadata: Metadata = {
  description:
    "Coco peat exporter in Sri Lanka. Lab-tested 5 kg coco peat blocks, husk chips, grow bags and coir fiber — EC < 0.5 mS/cm washed, pH 5.5–6.8, FOB Colombo. Request a quotation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SK Ceylon — Coco Peat & Coir Exports Sri Lanka",
    description:
      "Lab-tested coco peat blocks, husk chips, grow bags and coir fiber from Sri Lanka's coconut triangle.",
    url: "/",
  },
};

function FeatureIcon({ icon }: { icon: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="stroke-green-deep"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon === "flask" && (
        <path d="M10 3 H16 M11 3 V10 L5.5 20 A1.6 1.6 0 0 0 7 22.5 H19 A1.6 1.6 0 0 0 20.5 20 L15 10 V3 M8 16.5 H18" />
      )}
      {icon === "eye" && (
        <>
          <path d="M2.5 13 C 6 7.5 20 7.5 23.5 13 C 20 18.5 6 18.5 2.5 13 Z" />
          <circle cx="13" cy="13" r="3.25" />
        </>
      )}
      {icon === "document" && (
        <path d="M7 2.5 H15.5 L20 7 V21.5 A1.5 1.5 0 0 1 18.5 23 H7 A1.5 1.5 0 0 1 5.5 21.5 V4 A1.5 1.5 0 0 1 7 2.5 Z M15 3 V7.5 H19.5 M9 13 H17 M9 17 H14.5" />
      )}
      {icon === "blend" && (
        <>
          <circle cx="9.5" cy="9.5" r="6" />
          <circle cx="16.5" cy="16.5" r="6" />
        </>
      )}
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,rgba(198,137,43,0.12),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-rule-strong bg-paper/70 px-4 py-1.5 font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-green"
              />
              {COMPANY.name} · {COMPANY.city}, {COMPANY.country}
            </p>
            <h1 className="mt-7 font-display text-[2.75rem] leading-[1.05] font-medium text-ink text-balance sm:text-6xl">
              Premium coconut substrates,{" "}
              <em className="text-green-deep italic">
                grown and graded at the source.
              </em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Coco peat blocks, husk chips, grow bags and coir fiber from Sri
              Lanka&rsquo;s coconut triangle — every lot verified by an
              independent Colombo laboratory before it ships. The report comes
              with the quotation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaLink href={rfqMailto()}>Request Wholesale Pricing</CtaLink>
              <CtaLink href="/products/" variant="secondary">
                Browse the catalog
              </CtaLink>
            </div>
            <SpecLedger
              rows={KEY_SPECS}
              caption="Typical specification · verified per lot"
              framed
              className="mt-12 max-w-2xl"
            />
          </div>
          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-3xl border border-rule shadow-lg shadow-ink/10">
              <HeroScene />
            </div>
            <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 font-mono text-[0.6875rem] tracking-wide text-ink shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-green"
              />
              Kurunegala – Puttalam coconut triangle
            </p>
          </div>
        </div>
      </section>

      {/* Markets strip */}
      <section
        aria-label="Export markets"
        className="border-b border-rule bg-paper"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
            Shipping FOB Colombo to
          </p>
          <ul className="flex flex-wrap gap-2">
            {MARKETS.map((market) => (
              <li
                key={market}
                className="rounded-full border border-rule-strong bg-parchment px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-ink"
              >
                {market}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product catalog preview */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product catalog"
              title="Four products, one specification discipline."
            />
            <CtaLink href="/products/" variant="ghost" className="!px-0">
              View full catalog →
            </CtaLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:border-rule-strong hover:shadow-lg hover:shadow-ink/10"
              >
                <div className="border-b border-rule bg-parchment px-7 pt-6 pb-2 transition-colors group-hover:bg-[#efe6d2]">
                  <ProductDiagram
                    kind={product.diagram}
                    className="mx-auto max-w-[280px]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {product.name}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.highlights.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full bg-green/10 px-3 py-1 font-mono text-[0.6875rem] font-medium text-green-deep"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {product.summary}
                  </p>
                  <p className="mt-5 font-mono text-xs font-medium text-green-deep group-hover:underline">
                    Specs &amp; wholesale pricing →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built for buyers who read the spec sheet first."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-rule bg-parchment p-6"
              >
                <span className="inline-flex rounded-xl bg-green/10 p-2.5">
                  <FeatureIcon icon={feature.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality process summary */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Quality"
            title="Four checkpoints between the mill and your port."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKPOINTS.map((checkpoint) => (
              <li
                key={checkpoint.number}
                className="rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5"
              >
                <p className="inline-flex rounded-full bg-green/10 px-2.5 py-1 font-mono text-xs font-medium text-green-deep">
                  {checkpoint.number}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {checkpoint.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {checkpoint.short}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10">
            <CtaLink href="/quality/" variant="secondary">
              The full quality process
            </CtaLink>
          </p>
        </div>
      </section>

      {/* Compliance strip */}
      <section aria-label="Compliance" className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMPLIANCE.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="mt-0.5 shrink-0 stroke-green"
                  fill="none"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M2 7.5 L5.5 11 L12 3" />
                </svg>
                <span className="font-mono text-xs leading-relaxed text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RfqSection />
    </>
  );
}
