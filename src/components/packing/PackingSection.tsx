import { Fragment } from "react";
import { SpecRows } from "@/components/SpecRows";
import type { Application, Packing } from "@/content/site";
import { ApplicationIcon } from "./ApplicationIcon";
import { UnitIcon } from "./UnitIcon";

type PackingSectionProps = {
  packing: Packing;
  applications: Application[];
  /** Mailto for the quotation prompt under the applications. */
  rfqHref: string;
};

function Eyebrow({ children }: { children: string }) {
  return (
    <h3 className="flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
      {children}
      <span aria-hidden className="h-px flex-1 bg-rule-strong" />
    </h3>
  );
}

/**
 * Packing & loading as a shipment story: the unitisation chain (unit →
 * pallet → container) with multipliers, how each unit is packed, and the
 * order notes, with applications alongside.
 */
export function PackingSection({
  packing,
  applications,
  rfqHref,
}: PackingSectionProps) {
  const { lead, units, steps, notes, terms } = packing;
  const chainLabel = units
    .map((unit) => `${unit.label}: ${unit.value}`)
    .join(", ");

  return (
    <section
      aria-labelledby="packing-heading"
      className="border-b border-rule bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
            Packaging &amp; shipping
          </p>
          <h2
            id="packing-heading"
            className="mt-2 font-display text-3xl leading-tight font-medium text-ink text-balance sm:text-4xl"
          >
            How it ships
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
            {lead}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule bg-parchment px-6 py-4 sm:px-7">
              <h3 className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                Packing &amp; loading
              </h3>
              <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                FOB Colombo · 40 ft HC
              </p>
            </div>

            {/* Unitisation chain: stacked on small screens, a row from lg. */}
            <ol
              aria-label={`Shipping units: ${chainLabel}`}
              className="flex flex-col px-6 py-6 sm:px-7 lg:flex-row lg:items-stretch"
            >
              {units.map((unit, index) => (
                <Fragment key={unit.label}>
                  {index > 0 && (
                    <li
                      aria-hidden
                      className="flex items-center justify-center lg:flex-col"
                    >
                      <span className="h-6 w-px bg-rule-strong lg:h-px lg:w-5" />
                      {unit.multiplier && (
                        <span className="my-1 rounded-full border border-gold/50 bg-paper px-2 py-0.5 font-mono text-xs font-medium text-gold-deep lg:mx-1 lg:my-0">
                          {unit.multiplier}
                        </span>
                      )}
                      <span className="h-6 w-px bg-rule-strong lg:h-px lg:w-5" />
                    </li>
                  )}
                  <li className="flex flex-1 items-center gap-4 rounded-xl border border-rule bg-parchment/60 p-4 lg:flex-col lg:items-start lg:gap-3 lg:p-5">
                    <UnitIcon kind={unit.icon} />
                    <div className="min-w-0">
                      <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
                        {unit.label}
                      </p>
                      <p className="mt-1 font-display text-[1.375rem] leading-tight font-medium tracking-tight text-ink">
                        {unit.value}
                      </p>
                      {unit.note && (
                        <p className="mt-1 text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                          {unit.note}
                        </p>
                      )}
                    </div>
                  </li>
                </Fragment>
              ))}
            </ol>

            <div className="grid gap-8 border-t border-rule px-6 py-6 sm:px-7 md:grid-cols-2">
              <div>
                <Eyebrow>How it is packed</Eyebrow>
                <ol className="mt-4 space-y-2.5">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-px shrink-0 font-mono text-xs font-medium text-gold-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-ink text-pretty">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <Eyebrow>Order notes</Eyebrow>
                <div className="mt-2">
                  <SpecRows rows={notes} labelWidth="narrow" />
                </div>
              </div>
            </div>

            <div className="border-t border-rule bg-parchment/60 px-6 py-5 sm:px-7">
              <Eyebrow>Terms</Eyebrow>
              <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                {terms.map((row) => (
                  <div key={row.label} className="min-w-0">
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 font-mono text-[0.9375rem] leading-snug font-medium text-ink">
                      {row.value}
                    </dd>
                    {row.note && (
                      <dd className="mt-1 text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                        {row.note}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <section
            aria-labelledby="applications-heading"
            className="overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule bg-parchment px-6 py-4 sm:px-7">
              <h2
                id="applications-heading"
                className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase"
              >
                Applications
              </h2>
              <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                Crop fit
              </p>
            </div>
            <ul className="grid gap-x-8 divide-y divide-rule px-6 sm:grid-cols-2 sm:divide-y-0 sm:px-7 lg:grid-cols-4">
              {applications.map((application) => (
                <li key={application.title} className="flex gap-4 py-5 sm:flex-col sm:gap-3">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rule bg-parchment/60">
                    <ApplicationIcon kind={application.icon} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[0.9375rem] font-medium text-ink">
                      {application.title}
                    </h3>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                      {application.detail}
                    </p>
                    {application.tag && (
                      <p className="mt-1.5 font-mono text-xs text-green-deep">
                        {application.tag}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-rule bg-parchment/60 px-6 py-4 sm:px-7">
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                Growing something else?{" "}
                <a
                  href={rfqHref}
                  className="font-medium text-green-deep underline-offset-4 hover:underline"
                >
                  Tell us the crop
                </a>{" "}
                and we will propose a specification to suit it.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
