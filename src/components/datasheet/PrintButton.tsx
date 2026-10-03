"use client";

/** Opens the browser print dialog; buyers save the page as a PDF datasheet. */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 bg-paper/60 px-6 py-3 font-mono text-sm font-medium tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-paper print:hidden"
    >
      Print datasheet
    </button>
  );
}
