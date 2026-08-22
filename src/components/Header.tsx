"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, rfqMailto } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            SK Ceylon
          </span>
          <span className="hidden font-mono text-[0.625rem] tracking-[0.18em] text-ink-soft uppercase sm:inline">
            Coco Peat · Coir
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-ink ${
                  active
                    ? "font-medium text-ink underline decoration-gold decoration-2 underline-offset-8"
                    : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={rfqMailto()}
            className="rounded-full bg-green px-5 py-2 font-mono text-xs font-medium tracking-wide text-paper shadow-sm shadow-green/30 transition-all hover:-translate-y-0.5 hover:bg-green-deep"
          >
            Request a Quotation
          </a>
        </nav>

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

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-rule px-5 pt-2 pb-5 md:hidden"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-dotted border-rule-strong/70">
                <Link
                  href={link.href}
                  className="block py-3 text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={rfqMailto()}
            className="mt-4 block rounded-full bg-green px-4 py-3 text-center font-mono text-xs font-medium tracking-wide text-paper"
          >
            Request a Quotation
          </a>
        </nav>
      )}
    </header>
  );
}
