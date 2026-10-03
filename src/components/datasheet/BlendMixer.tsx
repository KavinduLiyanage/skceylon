"use client";

import { useId, useState } from "react";
import type { BlendRatio } from "@/content/site";

type BlendMixerProps = {
  standard: BlendRatio;
  options: BlendRatio[];
};

const ratioLabel = (ratio: BlendRatio) => `${ratio.peat} : ${ratio.chips}`;
const same = (a: BlendRatio, b: BlendRatio) =>
  a.peat === b.peat && a.chips === b.chips;

/**
 * Peat : chips ratio picker. Choosing a ratio redraws the proportion bar and
 * highlights that row in the ratio table, so a buyer sees what each blend
 * looks like, what it does, and which crops usually run on it.
 */
export function BlendMixer({ standard, options }: BlendMixerProps) {
  const [selected, setSelected] = useState<BlendRatio>(standard);
  const labelId = useId();
  const isStandard = same(selected, standard);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span id={labelId} className="text-[0.9375rem] text-ink-soft">
          Peat : chips
        </span>
        <span className="font-mono text-[0.9375rem] font-medium text-ink">
          {ratioLabel(selected)}
          <span className="ml-2 font-sans text-sm font-normal text-ink-soft">
            {isStandard ? "standard" : "on order"}
          </span>
        </span>
      </div>

      <div
        className="mt-2.5 flex h-7 overflow-hidden rounded-md"
        role="img"
        aria-label={`${selected.peat} percent coir peat, ${selected.chips} percent husk chips`}
      >
        <div
          className="flex items-center bg-gold-deep px-2 font-mono text-[0.625rem] tracking-[0.08em] text-paper uppercase transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: `${selected.peat}%` }}
        >
          {selected.peat >= 25 && <span>peat</span>}
        </div>
        <div
          className="flex items-center justify-end bg-green px-2 font-mono text-[0.625rem] tracking-[0.08em] text-paper uppercase transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: `${selected.chips}%` }}
        >
          {selected.chips >= 25 && <span>chips</span>}
        </div>
      </div>

      <div
        role="group"
        aria-labelledby={labelId}
        className="mt-3 flex flex-wrap gap-2"
      >
        {options.map((ratio) => {
          const active = same(ratio, selected);
          const std = same(ratio, standard);
          return (
            <button
              key={ratioLabel(ratio)}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(ratio)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-strong bg-paper text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {ratioLabel(ratio)}
              {std && (
                <span
                  className={`ml-1.5 ${active ? "text-paper/60" : "text-green-deep"}`}
                >
                  ·&nbsp;std
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Ratio table; the selected row is highlighted. */}
      <table className="mt-5 w-full border-t border-rule-strong text-sm">
        <thead>
          <tr className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
            <th scope="col" className="py-2 pr-3 text-left font-normal">
              Ratio
            </th>
            <th scope="col" className="py-2 pr-3 text-left font-normal">
              Character
            </th>
            <th
              scope="col"
              className="hidden py-2 text-left font-normal md:table-cell"
            >
              Typically used for
            </th>
          </tr>
        </thead>
        <tbody>
          {options.map((ratio) => {
            const active = same(ratio, selected);
            return (
              <tr
                key={ratioLabel(ratio)}
                aria-current={active ? "true" : undefined}
                onClick={() => setSelected(ratio)}
                className={`cursor-pointer border-t border-dotted border-rule-strong/70 align-top transition-colors ${
                  active ? "bg-parchment" : "hover:bg-parchment/50"
                }`}
              >
                <th
                  scope="row"
                  className="py-3 pr-3 text-left font-mono text-[0.9375rem] font-medium whitespace-nowrap text-ink"
                >
                  {ratioLabel(ratio)}
                  {same(ratio, standard) && (
                    <span className="ml-1.5 text-xs font-normal text-green-deep">
                      std
                    </span>
                  )}
                </th>
                <td className="py-3 pr-3 text-[0.9375rem] leading-snug text-ink text-pretty">
                  {ratio.character}
                  <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-soft md:hidden">
                    {ratio.uses}
                  </span>
                </td>
                <td className="hidden py-3 text-[0.9375rem] leading-snug text-ink-soft text-pretty md:table-cell">
                  {ratio.uses}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
