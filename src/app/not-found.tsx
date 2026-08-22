import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
        404 — not found
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight font-medium text-ink text-balance">
        This page isn&rsquo;t in the ledger.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        The address may have changed. Everything we ship is listed under
        products.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <CtaLink href="/products/">View products</CtaLink>
        <CtaLink href="/" variant="secondary">
          Back to home
        </CtaLink>
      </div>
    </section>
  );
}
