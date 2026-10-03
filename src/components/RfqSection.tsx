import { COMPANY, rfqMailto } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { WhatsAppLinks } from "./WhatsAppLinks";

type RfqSectionProps = {
  /** Pre-fills the Product line of the RFQ email template. */
  product?: string;
  heading?: string;
};

/** Closing call-to-action band, reused at the foot of every page. */
export function RfqSection({
  product,
  heading = "Get a quotation matched to your specification.",
}: RfqSectionProps) {
  return (
    <section className="print:hidden on-ink border-t-2 border-gold bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gold uppercase">
            Request for Quotation
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight font-medium text-paper text-balance sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Tell us the product, blend and EC grade, monthly volume and
            destination port. You&rsquo;ll receive pricing with a product
            specification, packing details and a loading plan.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
          <CtaLink href={rfqMailto(product)}>Request a Quotation</CtaLink>
          <p className="font-mono text-xs text-paper/60">
            or email{" "}
            <a
              href={rfqMailto(product)}
              className="text-gold underline-offset-4 hover:underline"
            >
              {COMPANY.email}
            </a>
          </p>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-paper/60 uppercase">
              WhatsApp
            </p>
            <WhatsAppLinks onInk className="lg:justify-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
