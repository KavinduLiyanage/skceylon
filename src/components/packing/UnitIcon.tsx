import type { PackingUnitIcon } from "@/content/site";

/**
 * Line drawings of shipping units in the same hand as the product diagrams:
 * ink outlines, parchment fills, 64 × 48 viewBox.
 */
export function UnitIcon({ kind }: { kind: PackingUnitIcon }) {
  return (
    <svg
      viewBox="0 0 64 48"
      aria-hidden
      className="h-12 w-16 shrink-0"
      fill="none"
      strokeWidth="1.25"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {kind === "slab" && (
        <g className="stroke-ink">
          <path d="M8 34 h40 v-8 h-40 Z" className="fill-paper" />
          <path d="M8 26 l8 -6 h40 l-8 6 Z" className="fill-parchment" />
          <path d="M48 34 l8 -6 v-8 l-8 6 Z" className="fill-rule/60" />
        </g>
      )}
      {kind === "block" && (
        <g className="stroke-ink">
          <path d="M16 38 h24 v-16 h-24 Z" className="fill-paper" />
          <path d="M16 22 l10 -8 h24 l-10 8 Z" className="fill-parchment" />
          <path d="M40 38 l10 -8 v-16 l-10 8 Z" className="fill-rule/60" />
        </g>
      )}
      {kind === "bag" && (
        <g className="stroke-ink">
          <path
            d="M20 14 h24 l4 26 a3 3 0 0 1 -3 3 h-26 a3 3 0 0 1 -3 -3 Z"
            className="fill-paper"
          />
          <path d="M24 14 v-4 h16 v4" />
        </g>
      )}
      {kind === "bale" && (
        <g className="stroke-ink">
          <rect x="12" y="14" width="40" height="24" rx="3" className="fill-paper" />
          <path d="M24 14 v24 M40 14 v24" />
          <path
            d="M16 22 c4 -2 8 2 12 0 s8 2 12 0 s6 2 8 0 M16 30 c4 -2 8 2 12 0 s8 2 12 0 s6 2 8 0"
            strokeWidth="0.75"
            opacity="0.5"
          />
        </g>
      )}
      {kind === "pallet" && (
        <g className="stroke-ink">
          <path d="M10 40 h44 v-4 h-44 Z" className="fill-rule/60" />
          <path d="M14 36 v-4 M32 36 v-4 M50 36 v-4" />
          <path d="M14 32 h36 v-5 h-36 Z" className="fill-paper" />
          <path d="M14 27 h36 v-5 h-36 Z" className="fill-paper" />
          <path d="M14 22 h36 v-5 h-36 Z" className="fill-paper" />
          <path d="M14 17 h36 v-5 h-36 Z" className="fill-paper" />
          <path d="M14 12 l5 -4 h36 l-5 4 Z" className="fill-parchment" />
          <path d="M50 32 l5 -4 v-20 l-5 4 Z" className="fill-rule/60" />
        </g>
      )}
      {kind === "container" && (
        <g className="stroke-ink">
          <path d="M6 38 h40 v-20 h-40 Z" className="fill-paper" />
          <path d="M6 18 l8 -6 h40 l-8 6 Z" className="fill-parchment" />
          <path d="M46 38 l8 -6 v-20 l-8 6 Z" className="fill-rule/60" />
          <path
            d="M11 22 v12 M16 22 v12 M21 22 v12 M26 22 v12 M31 22 v12 M36 22 v12 M41 22 v12"
            strokeWidth="0.75"
            opacity="0.6"
          />
          <path d="M50 22 v12" strokeWidth="0.75" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}
