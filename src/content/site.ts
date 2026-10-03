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
  whatsapp: "+94 76 867 7530 / +94 77 422 9289",
} as const;

/** Shown on the About page. */
export const VISION_MISSION = [
  {
    label: "Our Vision",
    text: "To become Sri Lanka’s most trusted agricultural export brand, bringing the excellence of our island to markets worldwide.",
  },
  {
    label: "Our Mission",
    text: "To connect Sri Lanka’s agricultural producers with global buyers through quality coconut products, spices, and other agricultural goods — delivering consistent standards, dependable service, and lasting value through responsible sourcing and strong partnerships.",
  },
] as const;

export type SpecRow = {
  label: string;
  value: string;
  note?: string;
};

/** A headline number shown as a tile at the top of a product datasheet. */
export type KeyFigure = {
  value: string;
  label: string;
};

/**
 * A lab figure drawn as a gauge: `band` is the guaranteed range plotted on a
 * `scale` of [min, max]. A one-sided limit such as "< 0.5" is a band from
 * the scale minimum to the limit.
 */
export type LabValue = {
  label: string;
  /** Display value, e.g. "< 0.5 mS/cm". */
  value: string;
  note?: string;
  scale: [number, number];
  band: [number, number];
  /** Tick labels printed under the scale ends; defaults to the numbers. */
  ticks?: [string, string];
};

/** A peat : chips ratio, as whole percentages summing to 100. */
export type BlendRatio = {
  peat: number;
  chips: number;
  /** What the ratio does for water and air, e.g. "Free draining with good water-holding". */
  character: string;
  /** Crops and systems the ratio is typically used for. */
  uses: string;
};

export type SpecGroup = {
  title: string;
  rows: SpecRow[];
  /** Render in the narrower side column (with lab values and options). */
  aside?: boolean;
};

export type PackingUnitIcon =
  | "slab"
  | "block"
  | "bag"
  | "bale"
  | "pallet"
  | "container";

/** One step of the unitisation chain: unit → pallet → container. */
export type PackingUnit = {
  icon: PackingUnitIcon;
  label: string;
  /** Headline figure, e.g. "450 slabs". */
  value: string;
  note?: string;
  /** Multiplier printed on the connector leading to this unit, e.g. "× 450". */
  multiplier?: string;
};

/** Structured content behind the packing & loading section. */
export type Packing = {
  /** One line under the "How it ships" heading. */
  lead: string;
  units: PackingUnit[];
  /** How the product is packed, in order. */
  steps: string[];
  notes: SpecRow[];
  /** Shipping terms band: Incoterms, container, lead time, documents. */
  terms: SpecRow[];
};

export type ApplicationIcon =
  | "vine"
  | "berry"
  | "flower"
  | "melon"
  | "pot"
  | "slab"
  | "soil"
  | "leaf"
  | "brush"
  | "rope"
  | "fiber";

/** One crop or use case a product is sold into. */
export type Application = {
  icon: ApplicationIcon;
  title: string;
  /** One line on why the product fits. */
  detail: string;
  /** Short mono tag, e.g. a typical blend or grade. */
  tag?: string;
};

/** Structured content behind the product datasheet section. */
export type Datasheet = {
  /** One line under the heading, e.g. how figures are verified. */
  lead: string;
  keyFigures: KeyFigure[];
  /** Outer dimensions, drawn to proportion with the rows beside it. */
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
    /** Label for the drawn object, e.g. "expanded slab". */
    caption: string;
    rows: SpecRow[];
  };
  lab: LabValue[];
  /** Substrate blend selector; only for blended products. */
  blend?: {
    /** One line above the picker, e.g. that any ratio can be pressed. */
    intro: string;
    standard: BlendRatio;
    options: BlendRatio[];
    rows: SpecRow[];
  };
  /** Any further fixed specification groups. */
  groups: SpecGroup[];
  /** What is set per order rather than fixed. */
  options: { label: string; detail?: string }[];
  /** Small print under the sheet, e.g. that figures are from current production. */
  footnote?: string;
};

/** The four headline specs, shown in the hero ledger and repeated sitewide. */
export const KEY_SPECS: SpecRow[] = [
  { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:5 v/v" },
  { label: "pH", value: "5.5 – 6.5" },
  { label: "Moisture", value: "< 20 %", note: "at dispatch" },
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
  { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP on request" },
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
