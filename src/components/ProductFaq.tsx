import type { Faq } from "@/content/site";

type ProductFaqProps = {
  /** Short product name used in the heading, e.g. "Grow Bags". */
  product: string;
  faqs: Faq[];
};

/**
 * Frequently asked questions as native disclosure widgets: no script, and
 * every answer is in the page HTML for search engines whether open or not.
 */
export function ProductFaq({ product, faqs }: ProductFaqProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-b border-rule bg-parchment print:hidden"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-2 font-display text-3xl leading-tight font-medium text-ink text-balance sm:text-4xl"
          >
            Questions about {product.toLowerCase()}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            The answers buyers ask for most. Anything else, ask with your
            quotation request.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5 lg:col-span-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-rule last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-green-deep sm:px-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty">{faq.question}</h3>
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-deep transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty sm:px-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
