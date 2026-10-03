import type { ApplicationIcon as Kind } from "@/content/site";

/** Small ink-line crop and use-case icons, 32 × 32 viewBox. */
export function ApplicationIcon({ kind }: { kind: Kind }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className="h-8 w-8 shrink-0 stroke-ink"
      fill="none"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "vine" && (
        <>
          <path d="M16 29 V8" />
          <path d="M16 12 c-4 0 -6 -2 -7 -5 c4 0 7 1 7 5 Z" className="fill-parchment" />
          <path d="M16 18 c4 0 6 -2 7 -5 c-4 0 -7 1 -7 5 Z" className="fill-parchment" />
          <circle cx="12" cy="23" r="3" className="fill-paper" />
          <circle cx="20" cy="26" r="2.5" className="fill-paper" />
        </>
      )}
      {kind === "berry" && (
        <>
          <path d="M16 11 c-5 0 -8 4 -8 8 c0 5 4 9 8 10 c4 -1 8 -5 8 -10 c0 -4 -3 -8 -8 -8 Z" className="fill-paper" />
          <path d="M16 11 c-2 -2 -2 -5 0 -7 c2 2 2 5 0 7 Z" className="fill-parchment" />
          <path d="M12 17 l1 1 M19 15 l1 1 M15 22 l1 1 M20 22 l1 1 M11 23 l1 1" />
        </>
      )}
      {kind === "flower" && (
        <>
          <path d="M16 29 V17" />
          <path d="M16 20 c-3 0 -5 -1 -6 -3 c3 0 5 1 6 3 Z" className="fill-parchment" />
          <circle cx="16" cy="11" r="3" className="fill-paper" />
          <path d="M16 5 a3 3 0 0 1 0 6 a3 3 0 0 1 0 -6 Z M22 11 a3 3 0 0 1 -6 0 a3 3 0 0 1 6 0 Z M16 17 a3 3 0 0 1 0 -6 a3 3 0 0 1 0 6 Z M10 11 a3 3 0 0 1 6 0 a3 3 0 0 1 -6 0 Z" className="fill-paper" />
        </>
      )}
      {kind === "melon" && (
        <>
          <circle cx="16" cy="18" r="9" className="fill-paper" />
          <path d="M16 9 c-5 3 -5 15 0 18 M16 9 c5 3 5 15 0 18 M8 15 h16 M8 21 h16" strokeWidth="0.75" opacity="0.6" />
          <path d="M16 9 c0 -3 2 -5 5 -5" />
        </>
      )}
      {kind === "pot" && (
        <>
          <path d="M8 12 h16 l-2 14 h-12 Z" className="fill-paper" />
          <path d="M7 12 h18 v-3 h-18 Z" className="fill-parchment" />
          <path d="M16 9 V4 M16 6 c-3 0 -4 -2 -4 -3 c2 0 4 1 4 3 Z M16 6 c3 0 4 -2 4 -3 c-2 0 -4 1 -4 3 Z" />
        </>
      )}
      {kind === "slab" && (
        <>
          <path d="M5 22 h18 v-5 h-18 Z" className="fill-paper" />
          <path d="M5 17 l5 -4 h18 l-5 4 Z" className="fill-parchment" />
          <path d="M23 22 l5 -4 v-5 l-5 4 Z" className="fill-rule/60" />
        </>
      )}
      {kind === "soil" && (
        <>
          <path d="M4 20 c4 -3 8 -3 12 0 s8 3 12 0 v8 h-24 Z" className="fill-parchment" />
          <path d="M9 24 l1 1 M15 25 l1 1 M21 24 l1 1" />
          <path d="M16 17 V9 M16 12 c-3 0 -4 -2 -4 -3 c2 0 4 1 4 3 Z M16 12 c3 0 4 -2 4 -3 c-2 0 -4 1 -4 3 Z" />
        </>
      )}
      {kind === "leaf" && (
        <>
          <path d="M7 25 c0 -10 7 -17 18 -18 c-1 11 -8 18 -18 18 Z" className="fill-parchment" />
          <path d="M7 25 c4 -6 8 -10 14 -14" />
        </>
      )}
      {kind === "brush" && (
        <>
          <path d="M8 6 h16 v6 h-16 Z" className="fill-parchment" />
          <path d="M9 12 v12 M12 12 v14 M15 12 v12 M18 12 v14 M21 12 v12 M24 12 v14" />
        </>
      )}
      {kind === "rope" && (
        <>
          <path d="M8 4 c6 4 10 8 10 12 s-4 8 -10 12" />
          <path d="M24 4 c-6 4 -10 8 -10 12 s4 8 10 12" />
          <path d="M11 7 l10 0 M11 25 l10 0 M14 16 h4" strokeWidth="0.75" opacity="0.6" />
        </>
      )}
      {kind === "fiber" && (
        <>
          <path d="M4 10 c4 -3 8 3 12 0 s8 3 12 0" />
          <path d="M4 16 c4 -3 8 3 12 0 s8 3 12 0" />
          <path d="M4 22 c4 -3 8 3 12 0 s8 3 12 0" />
        </>
      )}
    </svg>
  );
}
