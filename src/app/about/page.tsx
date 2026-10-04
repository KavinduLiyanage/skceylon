import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RfqSection } from "@/components/RfqSection";
import { SpecLedger } from "@/components/SpecLedger";
import { COMPANY, MARKETS, VISION_MISSION } from "@/content/site";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "SK Ceylon is a Colombo-based exporter of coco peat and coir products, sourcing from Sri Lanka's coconut triangle with hands-on quality supervision.",
  path: "/about/",
});

const FACTS = [
  { label: "Based", value: "Colombo, Sri Lanka" },
  { label: "Sourcing", value: "Kurunegala – Puttalam", note: "coconut triangle" },
  { label: "Mills", value: "CDA-registered", note: "with washing capability" },
  { label: "Testing", value: "independent lab report", note: "on request" },
  { label: "Markets", value: `${MARKETS.length} countries`, note: MARKETS.slice(0, 3).join(", ") + " …" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
            currentPath="/about/"
          />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
            One exporter. One name on every shipment.
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              {COMPANY.name} is a {COMPANY.city}-based exporter of coco peat
              blocks and bales, grow bags, chip blocks, discs and coir fibre.
              We source exclusively from
              the Kurunegala–Puttalam coconut triangle — the belt of Sri Lanka
              where coconut milling is a generational trade and the best pith
              is produced — and ship from the Port of Colombo.
            </p>
            <p>
              We are deliberately not a trading desk. Large exporters route
              orders through whichever mill has capacity that week; the
              specification drifts, and the buyer finds out at the greenhouse.
              We work with a small, vetted set of CDA-registered mills, and the
              founder personally supervises quality from lot selection to
              container loading.
            </p>
            <p>
              That structure is our positioning: direct, personal
              accountability. When you buy from SK Ceylon, you know exactly who
              chose the mill, who checked the specification, and who stood at the
              container door while it was loaded. The same person answers your
              email.
            </p>
            <p>
              It also means we say no. If a lot misses specification, it does
              not ship under our name — a delayed container is recoverable, a
              greenhouse full of salty substrate is not.
            </p>
          </div>
          <SpecLedger
            rows={FACTS}
            caption="At a glance"
            framed
            className="self-start lg:mt-2"
          />
        </div>
      </section>

      <section className="border-t border-rule bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16">
          {VISION_MISSION.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
                {item.label}
              </p>
              <p className="mt-4 font-display text-2xl leading-snug font-medium text-ink text-balance">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RfqSection heading="Deal directly with the person who checks your cargo." />
    </>
  );
}
