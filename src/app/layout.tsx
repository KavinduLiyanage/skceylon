import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  COMPANY,
  MARKETS,
  SITE_TITLE_SUFFIX,
  SITE_URL,
} from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_SUFFIX,
    template: `%s — ${SITE_TITLE_SUFFIX}`,
  },
  description:
    "SK Ceylon exports lab-tested coco peat blocks, husk chips, grow bags and coir fiber from Sri Lanka's coconut triangle. Low EC, verified pH and moisture, FOB Colombo.",
  openGraph: {
    siteName: "SK Ceylon",
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: SITE_URL,
  email: COMPANY.email,
  description:
    "Sri Lankan exporter of lab-tested coco peat blocks, coconut husk chips, coco grow bags and coir fiber for professional horticulture.",
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.city,
    addressCountry: "LK",
  },
  areaServed: MARKETS.map((name) => ({ "@type": "Country", name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: COMPANY.email,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-green focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
