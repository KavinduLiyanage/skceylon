import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RfqSection } from "@/components/RfqSection";
import { SpecLedger } from "@/components/SpecLedger";
import { CHECKPOINTS, QUOTATION_INCLUDES } from "@/content/quality";
import { KEY_SPECS } from "@/content/site";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "Quality Process",
  description:
    "How SK Ceylon controls quality from mill to port: sourcing in Sri Lanka's coconut triangle, EC, pH and moisture checks, export documents and loading.",
  path: "/quality/",
});

export default function QualityPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
            currentPath="/quality/"
          />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
            Consistency isn&rsquo;t claimed. It&rsquo;s measured.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Coco peat fails buyers in predictable ways: salt that wasn&rsquo;t
            washed out, moisture that wasn&rsquo;t controlled, loading that
            wasn&rsquo;t watched. Our process is four checkpoints, each one
            closing off a specific way a shipment goes wrong.
          </p>
          <SpecLedger
            rows={KEY_SPECS}
            caption="What the lab verifies · every lot"
            framed
            className="mt-8 max-w-2xl"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ol>
            {CHECKPOINTS.map((checkpoint) => (
              <li
                key={checkpoint.number}
                className="grid gap-4 border-b border-rule py-12 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-10 lg:grid-cols-[200px_1fr]"
              >
                <div>
                  <p className="font-mono text-3xl text-green sm:text-4xl">
                    {checkpoint.number}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-medium text-ink">
                    {checkpoint.title}
                  </h2>
                </div>
                <div className="max-w-xl space-y-4">
                  {checkpoint.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="text-base leading-relaxed text-ink-soft"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
            With every quotation
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight font-medium text-ink text-balance sm:text-4xl">
            The proof arrives before the order does.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {QUOTATION_INCLUDES.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-rule bg-paper p-7 shadow-sm shadow-ink/5"
              >
                <p className="inline-flex rounded-full bg-green/10 px-2.5 py-1 font-mono text-xs font-medium text-green-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RfqSection heading="See your lot's numbers before you commit." />
    </>
  );
}
