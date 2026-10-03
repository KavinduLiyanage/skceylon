import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { RfqSection } from "@/components/RfqSection";
import { SectionHeading } from "@/components/SectionHeading";
import { PRODUCTS } from "@/content/products";
import { CHECKPOINTS } from "@/content/quality";
import {
  COMPLIANCE,
  FEATURES,
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
      <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center justify-center overflow-hidden bg-forest-deep text-center">
        <Image
          src="/images/hero-plantation.avif"
          alt="Coconut palm plantation with sunlight falling through the canopy"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-4xl px-5 py-20 sm:px-6">
          <h1 className="font-display text-4xl leading-tight font-semibold text-white text-balance md:text-5xl lg:text-6xl">
            Premium coconut substrates, grown and graded at the source.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Coco peat blocks, husk chips, grow bags and coir fiber from Sri
            Lanka&rsquo;s coconut triangle — every lot verified by an
            independent Colombo laboratory before it ships. The report comes
            with the quotation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={rfqMailto()}
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-medium text-forest-deep transition-colors hover:bg-parchment sm:w-auto sm:text-base"
            >
              Request Wholesale Pricing
            </a>
            <Link
              href="/products/"
              className="w-full rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Browse the catalog
            </Link>
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
              title="Every product, one specification discipline."
            />
            <CtaLink href="/products/" variant="ghost" className="!px-0">
              View full catalog →
            </CtaLink>
          </div>
          <div
            className={`mt-10 grid gap-5 sm:grid-cols-2 ${
              PRODUCTS.length % 3 === 0 ? "lg:grid-cols-3" : ""
            }`}
          >
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:border-rule-strong hover:shadow-lg hover:shadow-ink/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-rule bg-parchment">
                  <Image
                    src={product.photo.src}
                    alt={product.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
