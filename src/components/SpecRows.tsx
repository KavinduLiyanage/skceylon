import type { SpecRow } from "@/content/site";

type SpecRowsProps = {
  rows: SpecRow[];
  /** Label column width; the narrow variant suits side panels. */
  labelWidth?: "default" | "narrow";
};

/**
 * The shared spec ledger row: sans label, mono figure, sans note. Figures
 * stay in mono so numbers line up like a test certificate; notes are prose
 * and read better in the body face.
 */
export function SpecRows({ rows, labelWidth = "default" }: SpecRowsProps) {
  const cols =
    labelWidth === "narrow"
      ? "grid-cols-[6.5rem_1fr] sm:grid-cols-[7.5rem_1fr]"
      : "grid-cols-[7.5rem_1fr] sm:grid-cols-[8.5rem_1fr]";

  return (
    <dl>
      {rows.map((row) => (
        <div
          key={row.label}
          className={`grid ${cols} gap-x-4 border-b border-dotted border-rule-strong/70 py-3 last:border-b-0`}
        >
          <dt className="text-[0.9375rem] leading-snug text-ink-soft">
            {row.label}
          </dt>
          <dd className="min-w-0">
            <span className="block font-mono text-[0.9375rem] leading-snug font-medium text-ink">
              {row.value}
            </span>
            {row.note && (
              <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-soft text-pretty">
                {row.note}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
