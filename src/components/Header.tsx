"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, rfqMailto } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-md">
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
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-forest underline decoration-forest/40 decoration-2 underline-offset-8"
                    : "text-ink/80 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
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
