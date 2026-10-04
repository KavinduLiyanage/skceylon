import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { SpecLedger } from "@/components/SpecLedger";
import { WhatsAppLinks } from "@/components/WhatsAppLinks";
import { COMPANY, TRADE_TERMS } from "@/content/site";
import { pageMeta } from "@/content/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Wholesale Quotation",
  description:
    "Request a wholesale quotation for coco peat and coir products from SK Ceylon. Send your product, specification, volume and destination port.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-16">
          <Breadcrumbs
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-medium text-ink text-balance sm:text-5xl">
            Request wholesale pricing.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Tell us what you grow and where it ships. You&rsquo;ll receive
            pricing with a product specification, packing details and a
            loading plan — usually within two working days.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
              Bulk order inquiry
            </p>
            <InquiryForm />
          </div>

          <div className="space-y-10 self-start">
            <SpecLedger rows={TRADE_TERMS} caption="Standard trade terms" framed />
            <div>
              <h2 className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                What you&rsquo;ll receive
              </h2>
              <ul className="mt-2 border-y border-rule-strong">
                {[
                  "Pricing for your specification and volume",
                  "Independent Colombo lab report for the offered lot",
                  "Mill photos and packing specification",
                  "Loading plan for a 40 ft HC container",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-b border-dotted border-rule-strong/70 py-2.5 text-sm text-ink last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                Direct
              </h2>
              <p className="mt-2 text-sm">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-mono text-green-deep hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                WhatsApp
              </p>
              <WhatsAppLinks className="mt-2" />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                Samples are available against courier account for serious
                enquiries. If you prefer, send your existing substrate
                specification and we&rsquo;ll quote against it directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
