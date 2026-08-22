import { COMPANY, TRADE_TERMS, rfqMailto } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { SpecLedger } from "./SpecLedger";

type RfqSectionProps = {
  /** Pre-fills the Product line of the RFQ email template. */
  product?: string;
  heading?: string;
};

/** Closing call-to-action band, reused at the foot of every page. */
export function RfqSection({
  product,
  heading = "Get a quotation with the lab report attached.",
}: RfqSectionProps) {
  return (
    <section className="on-ink border-t-2 border-gold bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gold uppercase">
            Request for Quotation
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-medium text-paper text-balance sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Tell us the product, blend and EC grade, monthly volume and
            destination port. You&rsquo;ll receive pricing with an independent
            lab report, mill photos and a packing specification.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <CtaLink href={rfqMailto(product)}>Request a Quotation</CtaLink>
            <p className="font-mono text-xs text-paper/60">
              or WhatsApp {COMPANY.whatsapp}
            </p>
          </div>
        </div>
        <SpecLedger
          rows={TRADE_TERMS}
          caption="Standard trade terms"
          onInk
          framed
          className="self-center"
        />
      </div>
    </section>
  );
}
