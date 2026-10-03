import type { ReactNode } from "react";
import { CtaLink } from "@/components/CtaLink";
import { SpecRows } from "@/components/SpecRows";
import type { Datasheet as DatasheetContent } from "@/content/site";
import { BlendMixer } from "./BlendMixer";
import { DimensionDrawing } from "./DimensionDrawing";
import { LabGauge } from "./LabGauge";
import { PrintButton } from "./PrintButton";

type DatasheetProps = {
  product: string;
  rfqHref: string;
  sheet: DatasheetContent;
  audience?: "growers" | "manufacturers";
};

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-label={title}
      className={`rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5 break-inside-avoid sm:p-7 ${className}`}
    >
      <h3 className="flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
        {title}
        <span aria-hidden className="h-px flex-1 bg-rule-strong" />
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Checklist({ items }: { items: { label: string; detail?: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((option) => (
        <li key={option.label} className="flex gap-3">
          <span
            aria-hidden
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-deep"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
              <path
                d="M2.5 6.5 5 9l4.5-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-medium text-ink">{option.label}</p>
            {option.detail && (
              <p className="text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                {option.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * The product datasheet: headline figures, a dimensioned drawing, lab
 * gauges, the blend picker, fixed spec groups and the built-to-order list.
 */
export function Datasheet({
  product,
  rfqHref,
  sheet,
  audience = "growers",
}: DatasheetProps) {
  const {
    keyFigures,
    dimensions,
    lab,
    blend,
    groups,
    advantages,
    usage,
    options,
    footnote,
  } = sheet;

  return (
    <section
      aria-labelledby="datasheet-heading"
      className="border-b border-rule bg-parchment"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
              Specification
            </p>
            <h2
              id="datasheet-heading"
              className="mt-2 font-display text-3xl leading-tight font-medium text-ink text-balance sm:text-4xl"
            >
              {product} datasheet
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
              {sheet.lead}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 print:hidden">
            <PrintButton />
            <CtaLink href={rfqHref}>Request a Quotation</CtaLink>
          </div>
        </div>

        {keyFigures.length > 0 && (
          <dl
            className={`mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5 ${
              keyFigures.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
            }`}
          >
            {keyFigures.map((figure, index) => (
              <div
                key={figure.label}
                className={`px-6 py-5 sm:px-7 ${index % 2 === 1 ? "border-l border-rule" : ""} ${
                  index >= 2 ? "border-t border-rule sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <dd className="font-display text-[1.75rem] leading-none font-medium tracking-tight text-ink sm:text-[2rem]">
                  {figure.value}
                </dd>
                <dt className="mt-2 font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
                  {figure.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        {/* Single-column on small screens (wrappers are display: contents so
            panels can be ordered), two columns from lg. */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="contents lg:col-span-7 lg:block lg:space-y-6">
            {dimensions && (
              <Panel title="Dimensions" className="order-1">
                <div className="rounded-xl border border-rule bg-parchment/60 px-4 py-3">
                  <DimensionDrawing
                    length={dimensions.length}
                    width={dimensions.width}
                    height={dimensions.height}
                    unit={dimensions.unit}
                    caption={dimensions.caption}
                  />
                </div>
                <div className="mt-4">
                  <SpecRows rows={dimensions.rows} />
                </div>
              </Panel>
            )}

            {blend && (
              <Panel title="Substrate blend" className="order-3">
                <p className="mb-5 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
                  {blend.intro}
                </p>
                <BlendMixer standard={blend.standard} options={blend.options} />
                <div className="mt-5 border-t border-rule-strong pt-1">
                  <SpecRows rows={blend.rows} />
                </div>
              </Panel>
            )}

            {groups
              .filter((group) => !group.aside)
              .map((group) => (
                <Panel key={group.title} title={group.title} className="order-4">
                  <SpecRows rows={group.rows} />
                </Panel>
              ))}

            {usage && (
              <Panel title="How to use" className="order-4">
                <ol className="space-y-2.5">
                  {usage.steps.map((step, index) => (
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
                {usage.note && (
                  <p className="mt-4 border-t border-rule-strong pt-4 text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                    {usage.note}
                  </p>
                )}
              </Panel>
            )}

            {advantages && advantages.length > 0 && (
              <Panel title="Key advantages" className="order-4">
                <Checklist items={advantages} />
              </Panel>
            )}
          </div>

          <div className="contents lg:col-span-5 lg:block lg:space-y-6">
            {lab.length > 0 && (
              <Panel title="Lab values" className="order-2">
                <div className="divide-y divide-dotted divide-rule-strong/70">
                  {lab.map((item) => (
                    <LabGauge key={item.label} {...item} />
                  ))}
                </div>
                <p className="mt-4 text-[0.8125rem] leading-snug text-ink-soft">
                  Green band marks the guaranteed range on each scale.
                </p>
              </Panel>
            )}

            <Panel title="Built to your order" className="order-5">
              <Checklist items={options} />
              <p className="mt-5 border-t border-rule-strong pt-4 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
                {audience === "manufacturers"
                  ? "Tell us the application, fibre grade and volume."
                  : "Tell us the crop, irrigation strategy and volume."}{" "}
                We confirm the spec against samples before any container is
                booked.
              </p>
            </Panel>

            {groups
              .filter((group) => group.aside)
              .map((group) => (
                <Panel key={group.title} title={group.title} className="order-6">
                  <SpecRows rows={group.rows} labelWidth="narrow" />
                </Panel>
              ))}
          </div>
        </div>

        {footnote && (
          <p className="mt-6 max-w-3xl text-[0.8125rem] leading-relaxed text-ink-soft text-pretty">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
