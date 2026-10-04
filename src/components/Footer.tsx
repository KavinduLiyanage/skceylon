import Link from "next/link";
import {
  COMPANY,
  COMPLIANCE,
  IMAGE_CREDITS,
  NAV_LINKS,
  rfqMailto,
} from "@/content/site";
import { PRODUCTS } from "@/content/products";
import { WhatsAppLinks } from "./WhatsAppLinks";

export function Footer() {
  return (
    <footer className="print:hidden on-ink border-t-2 border-gold bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">SK Ceylon</p>
            <p className="mt-1 font-mono text-[0.625rem] tracking-[0.18em] text-paper/60 uppercase">
              Coco Peat · Coir · Est. {COMPANY.city}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {COMPANY.city}-based exporter of lab-tested coco peat blocks and
              bales, grow bags, chip blocks, discs and coir fibre from Sri
              Lanka&rsquo;s coconut triangle.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gold uppercase">
              Site
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gold uppercase">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}/`}
                    className="text-paper/80 hover:text-gold"
                  >
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gold uppercase">
              Contact
            </p>
            <p className="mt-4 text-sm">
              <a href={rfqMailto()} className="text-gold hover:underline">
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.18em] text-paper/60 uppercase">
              WhatsApp
            </p>
            <WhatsAppLinks onInk className="mt-2" />
          </div>
        </div>

        <div className="mt-12 border-t border-paper/20 pt-6">
          <p className="font-mono text-[0.625rem] leading-relaxed tracking-wide text-paper/70">
            {COMPLIANCE.join(" · ")}
          </p>
          <p className="mt-2 font-mono text-[0.625rem] leading-relaxed text-paper/65">
            {IMAGE_CREDITS.join(" · ")}
          </p>
          <p className="mt-3 font-mono text-[0.625rem] text-paper/65">
            © {new Date().getFullYear()} {COMPANY.name} · {COMPANY.city},{" "}
            {COMPANY.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
