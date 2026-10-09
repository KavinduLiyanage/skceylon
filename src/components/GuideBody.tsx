import type { GuideBlock } from "@/content/guides";

/** Renders a guide's body blocks in the site's editorial style. */
export function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={block.id}
                id={block.id}
                className="scroll-mt-28 pt-4 font-display text-2xl leading-tight font-medium text-ink sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p
                key={index}
                className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                    />
                    <span className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, step) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-1 shrink-0 font-mono text-sm font-medium text-gold-deep">
                      {String(step + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto rounded-2xl border border-rule bg-paper shadow-sm shadow-ink/5"
              >
                <table className="w-full text-left text-[0.9375rem]">
                  {block.caption && (
                    <caption className="px-5 pt-4 pb-2 text-left font-mono text-[0.6875rem] tracking-[0.18em] text-ink-soft uppercase">
                      {block.caption}
                    </caption>
                  )}
                  <thead>
                    <tr className="border-b border-rule-strong">
                      {block.head.map((cell) => (
                        <th
                          key={cell}
                          scope="col"
                          className="px-5 py-3 font-mono text-[0.6875rem] font-normal tracking-[0.14em] text-ink-soft uppercase"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr
                        key={row.join("|")}
                        className="border-b border-dotted border-rule-strong/70 align-top last:border-b-0"
                      >
                        {row.map((cell, column) => (
                          <td
                            key={column}
                            className={`px-5 py-3 leading-snug text-pretty ${
                              column === 0
                                ? "font-medium whitespace-nowrap text-ink"
                                : "text-ink-soft"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="rounded-2xl border border-green/30 bg-green/5 p-6"
              >
                <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-green-deep uppercase">
                  {block.title}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink text-pretty">
                  {block.text}
                </p>
              </aside>
            );
        }
      })}
    </div>
  );
}
