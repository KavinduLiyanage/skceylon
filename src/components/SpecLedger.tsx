import type { SpecRow } from "@/content/site";

type SpecLedgerProps = {
  rows: SpecRow[];
  /** Small mono caption above the rows, e.g. "TYPICAL SPECIFICATION". */
  caption?: string;
  /** Renders on dark (ink) backgrounds when true. */
  onInk?: boolean;
  /** Wraps the ledger in a rounded card. */
  framed?: boolean;
  className?: string;
};

/**
 * The signature "spec ledger" band: ruled rows of lab figures set in mono,
 * styled like a line item on a test certificate.
 */
export function SpecLedger({
  rows,
  caption,
  onInk = false,
  framed = false,
  className = "",
}: SpecLedgerProps) {
  const border = onInk ? "border-paper/25" : "border-rule-strong";
  const dotted = onInk ? "border-paper/20" : "border-rule-strong/70";
  const label = onInk ? "text-paper/70" : "text-ink-soft";
  const value = onInk ? "text-paper" : "text-ink";
  const note = onInk ? "text-paper/50" : "text-ink-faint";
  const frame = framed
    ? onInk
      ? "rounded-2xl border border-paper/15 bg-paper/5 p-6 sm:p-7"
      : "rounded-2xl border border-rule bg-paper p-6 shadow-sm shadow-ink/5 sm:p-7"
    : "";

  return (
    <div className={`${frame} ${className}`}>
      {caption && (
        <p
          className={`mb-2 font-mono text-[0.6875rem] tracking-[0.18em] uppercase ${label}`}
        >
          {caption}
        </p>
      )}
      <dl className={framed ? "" : `border-y ${border}`}>
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex flex-wrap items-baseline gap-x-4 border-b border-dotted py-2.5 last:border-b-0 ${dotted}`}
          >
            <dt className={`w-36 shrink-0 text-sm sm:w-44 ${label}`}>
              {row.label}
            </dt>
            <dd className={`font-mono text-sm font-medium ${value}`}>
              {row.value}
            </dd>
            {row.note && (
              <dd className={`ml-auto font-mono text-xs ${note}`}>
                {row.note}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
