/**
 * Sitewide content and configuration.
 * Everything a non-developer might need to edit lives in src/content/.
 */

/** Production domain — change this single constant to move the site. */
export const SITE_URL = "https://skceylon.lk";

export const SITE_NAME = "SK Ceylon";
export const SITE_TITLE_SUFFIX =
  "SK Ceylon | Coco Peat & Coir Exports Sri Lanka";

export const COMPANY = {
  name: "SK Ceylon (Pvt) Ltd",
  tagline: "Lab-tested coco peat, shipped from the source.",
  city: "Colombo",
  country: "Sri Lanka",
  /** PLACEHOLDER — replace before launch */
  email: "info@skceylon.lk",
  /** PLACEHOLDER — replace before launch */
  whatsapp: "+94 7X XXX XXXX",
} as const;

export type SpecRow = {
  label: string;
  value: string;
  note?: string;
};

/** The four headline specs, shown in the hero ledger and repeated sitewide. */
export const KEY_SPECS: SpecRow[] = [
  { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:1.5 method" },
  { label: "pH", value: "5.5 – 6.8" },
  { label: "Moisture", value: "< 18 %", note: "at packing" },
  { label: "Compression", value: "5 : 1" },
];

export const MARKETS = [
  "Netherlands",
  "South Korea",
  "Japan",
  "UAE",
  "India",
  "Saudi Arabia",
] as const;

export const TRADE_TERMS: SpecRow[] = [
  { label: "Incoterms", value: "FOB Colombo" },
  { label: "Container", value: "40 ft HC" },
  { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
];

export const COMPLIANCE = [
  "CDA export permit & quality certificate",
  "Phytosanitary certificate for every shipment",
  "Fumigation where the destination requires it",
  "Independent lab report with every quotation",
] as const;

/** "Why Choose Us" feature cards on the home page. */
export const FEATURES = [
  {
    title: "Lab-verified consistency",
    detail:
      "EC, pH and moisture tested by an independent Colombo laboratory for every lot — the report ships with your quotation, not after the sale.",
    icon: "flask",
  },
  {
    title: "Founder-supervised quality",
    detail:
      "One accountable name from mill selection to container loading. The person who checks your cargo is the person who answers your email.",
    icon: "eye",
  },
  {
    title: "Export documentation handled",
    detail:
      "CDA export permit, quality and phytosanitary certificates, and fumigation where your destination requires it — prepared against your import rules.",
    icon: "document",
  },
  {
    title: "Custom blends & buyer specs",
    detail:
      "Peat:chip ratios from 50:50 to 70:30, washing, buffering, hole patterns and printed film — produced to your specification, not ours.",
    icon: "blend",
  },
] as const;

/** Attribution for CC-licensed photography, shown in the footer. */
export const IMAGE_CREDITS = [
  "Plantation photo: Vyacheslav Argenberg (CC BY 4.0)",
  "Coir brick: MatiasMiika (CC BY 3.0)",
  "Greenhouse rows: Lufa Farms (CC BY-SA 2.0)",
  "Fiber warehouse: TheOilLamp (CC BY-SA 4.0)",
  "Husk pile: Rprasanth1 (CC BY-SA 4.0)",
  "via Wikimedia Commons",
] as const;

export const NAV_LINKS = [
  { href: "/products/", label: "Products" },
  { href: "/quality/", label: "Quality" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const RFQ_SUBJECT = "RFQ — Coco Peat";

export const RFQ_BODY_FIELDS = [
  "Product:",
  "Blend & EC grade:",
  "Monthly volume:",
  "Destination port:",
] as const;

/** Builds the mailto: link used by every RFQ call-to-action. */
export function rfqMailto(product?: string): string {
  const body = RFQ_BODY_FIELDS.map((field) =>
    product && field === "Product:" ? `${field} ${product}` : field,
  ).join("\r\n");
  const params = new URLSearchParams({
    subject: RFQ_SUBJECT,
    body,
  });
  // URLSearchParams encodes spaces as "+"; mail clients expect %20.
  return `mailto:${COMPANY.email}?${params.toString().replace(/\+/g, "%20")}`;
}
