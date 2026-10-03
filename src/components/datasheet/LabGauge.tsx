import type { LabValue } from "@/content/site";

/**
 * One lab figure as a ruled gauge: the guaranteed band is drawn in green on
 * a neutral scale, so "< 0.5 mS/cm" or "pH 5.5 – 6.5" reads visually as
 * well as numerically.
 */
export function LabGauge({ label, value, note, scale, band, ticks }: LabValue) {
  const [min, max] = scale;
  const span = max - min;
  const left = ((band[0] - min) / span) * 100;
  const width = ((band[1] - band[0]) / span) * 100;
  const [tickMin, tickMax] = ticks ?? [String(min), String(max)];

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[0.9375rem] text-ink-soft">{label}</span>
        <span className="font-mono text-[0.9375rem] font-medium text-ink">{value}</span>
      </div>
      <div
        className="relative mt-2.5 h-2 rounded-full bg-rule"
        role="img"
        aria-label={`${label} ${value} on a scale of ${tickMin} to ${tickMax}`}
      >
        <div
          className="absolute inset-y-0 rounded-full bg-green"
          style={{ left: `${left}%`, width: `${width}%` }}
        />
        <div
          className="absolute -top-1 h-4 w-px bg-ink"
          style={{ left: `${left + width}%` }}
          aria-hidden
        />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[0.6875rem] tracking-[0.06em] text-ink-soft">
        <span>{tickMin}</span>
        {note && <span className="font-sans tracking-normal">{note}</span>}
        <span>{tickMax}</span>
      </div>
    </div>
  );
}
