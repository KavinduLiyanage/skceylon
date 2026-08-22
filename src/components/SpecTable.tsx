import type { SpecRow } from "@/content/site";

type SpecTableProps = {
  caption: string;
  rows: SpecRow[];
};

/** Full specification table for product pages, in the ledger style. */
export function SpecTable({ caption, rows }: SpecTableProps) {
  return (
    <table className="w-full border-y border-rule-strong text-sm">
      <caption className="pb-2 text-left font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
        {caption}
      </caption>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.label}
            className="border-b border-dotted border-rule-strong/70 last:border-b-0"
          >
            <th
              scope="row"
              className="w-40 py-2.5 pr-4 text-left align-baseline font-normal text-ink-soft sm:w-48"
            >
              {row.label}
            </th>
            <td className="py-2.5 pr-4 align-baseline font-mono font-medium text-ink">
              {row.value}
            </td>
            <td className="hidden py-2.5 text-right align-baseline font-mono text-xs text-ink-faint sm:table-cell">
              {row.note ?? ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
