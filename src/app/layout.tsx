import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PRODUCTS } from "@/content/products";
import { JsonLd } from "@/components/JsonLd";
import {
  COMPANY,
  MARKETS,
  SITE_NAME,
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

const SITE_DESCRIPTION =
  "SK Ceylon exports coco peat blocks, grow bags, chip blocks, bales, discs and coir fibre from Sri Lanka. Low-EC grades, custom specs, FOB Colombo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_SUFFIX,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.name,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-full.png`,
  image: `${SITE_URL}/og/default.png`,
  email: COMPANY.email,
  telephone: COMPANY.whatsapp[0],
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.city,
    addressCountry: "LK",
  },
  areaServed: MARKETS.map((name) => ({ "@type": "Country", name })),
  contactPoint: COMPANY.whatsapp.map((telephone) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    telephone,
    email: COMPANY.email,
    availableLanguage: "English",
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
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
        <JsonLd data={websiteJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-green focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header
          products={PRODUCTS.map((product) => ({
            slug: product.slug,
            name: product.shortName,
            photo: product.photo.src,
          }))}
        />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
