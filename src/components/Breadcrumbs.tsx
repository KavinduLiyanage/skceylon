import Link from "next/link";
import { SITE_URL } from "@/content/site";
import { JsonLd } from "./JsonLd";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
  /**
   * Path of the current page, e.g. "/quality/". When given, the trail is
   * also output as BreadcrumbList structured data for search engines.
   */
  currentPath?: string;
};

export function Breadcrumbs({ crumbs, currentPath }: BreadcrumbsProps) {
  const jsonLd = currentPath && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href ?? currentPath}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      {jsonLd && <JsonLd data={jsonLd} />}
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
