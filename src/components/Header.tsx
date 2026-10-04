"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, rfqMailto } from "@/content/site";

type HeaderProduct = {
  slug: string;
  name: string;
  photo: string;
};

type HeaderProps = {
  /** Catalog entries for the Products dropdown, already in display order. */
  products: HeaderProduct[];
};

export function Header({ products }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-1 items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-full.png"
              alt="SK Ceylon"
              width={537}
              height={120}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>
        </div>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href.replace(/\/$/, ""));
            const linkClass = `text-sm font-medium transition-colors ${
              active
                ? "text-forest underline decoration-forest/40 decoration-2 underline-offset-8"
                : "text-ink/80 hover:text-forest"
            }`;

            if (link.href !== "/products/") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              );
            }

            // Products opens a dropdown on hover and on keyboard focus; the
            // label itself still links to the catalog page.
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
                onFocus={() => setMenu(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setMenu(false);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setMenu(false);
                }}
              >
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menu}
                  aria-controls="products-menu"
                  className={`inline-flex items-center gap-1.5 ${linkClass}`}
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`transition-transform duration-200 motion-reduce:transition-none ${
                      menu ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2 3.5 5 6.5 8 3.5" />
                  </svg>
                </Link>

                {/* pt-4 bridges the gap so the pointer can travel from the
                    link into the panel without closing it. */}
                <div
                  id="products-menu"
                  className={`absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4 transition-all duration-150 motion-reduce:transition-none ${
                    menu
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-rule bg-paper shadow-lg shadow-ink/10">
                    <ul className="p-2">
                      {products.map((product) => {
                        const current =
                          pathname === `/products/${product.slug}/`;
                        return (
                          <li key={product.slug}>
                            <Link
                              href={`/products/${product.slug}/`}
                              aria-current={current ? "page" : undefined}
                              onClick={() => setMenu(false)}
                              className={`flex items-center gap-3 rounded-xl p-2 text-sm font-medium transition-colors ${
                                current
                                  ? "bg-parchment text-forest"
                                  : "text-ink hover:bg-parchment hover:text-forest"
                              }`}
                            >
                              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-rule bg-parchment">
                                <Image
                                  src={product.photo}
                                  alt=""
                                  fill
                                  sizes="40px"
                                  className="object-cover"
                                />
                              </span>
                              {product.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      href="/products/"
                      onClick={() => setMenu(false)}
                      className="block border-t border-rule bg-parchment px-4 py-3 font-mono text-xs font-medium text-green-deep hover:underline"
                    >
                      View all products →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={rfqMailto()}
            className="hidden rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-deep md:inline-flex"
          >
            Request a Quotation
          </a>
          <button
            type="button"
            className="-mr-2 p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              {open ? (
                <path d="M4 4 L18 18 M18 4 L4 18" />
              ) : (
                <path d="M2 6 H20 M2 11 H20 M2 16 H20" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-rule px-5 pt-2 pb-5 md:hidden"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="border-b border-dotted border-rule-strong/70"
              >
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.href === "/products/" && (
                  <ul className="pb-3 pl-4">
                    {products.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}/`}
                          className="block py-1.5 text-sm text-ink-soft"
                          onClick={() => setOpen(false)}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href={rfqMailto()}
            className="mt-4 block rounded-full bg-forest px-4 py-3 text-center text-sm font-medium text-paper"
          >
            Request a Quotation
          </a>
        </nav>
      )}
    </header>
  );
}
