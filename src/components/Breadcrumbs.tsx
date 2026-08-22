import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] tracking-wide text-ink-soft uppercase">
        {crumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-rule-strong">
                /
              </span>
            )}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-ink">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-green-deep">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
