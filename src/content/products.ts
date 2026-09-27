import type { SpecRow } from "./site";

export type ProductDiagramKind = "block" | "chips" | "growbag" | "bale";

export type Product = {
  slug: string;
  name: string;
  /** Short name used in cards and navigation. */
  shortName: string;
  /** One-line positioning used under the name. */
  tagline: string;
  /** Meta description + card summary. */
  summary: string;
  /** Two short spec chips shown on catalog cards. */
  highlights: [string, string];
  /** Real photograph shown on catalog cards and the product page. */
  photo: { src: string; alt: string; width: number; height: number };
  /** Additional photos shown in a gallery on the product page. */
  gallery?: { src: string; alt: string; width: number; height: number }[];
  /** Body paragraphs on the product page. */
  description: string[];
  specs: SpecRow[];
  packing: SpecRow[];
  applications: string[];
  diagram: ProductDiagramKind;
};

const ALL_PRODUCTS: Product[] = [
  {
    slug: "5kg-coco-peat-blocks",
    photo: { src: "/images/product-blocks-1.avif", alt: "Compressed 5 kg coco peat block", width: 1200, height: 800 },
    gallery: [
      { src: "/images/product-blocks-2.avif", alt: "Close-up of compressed coco peat texture and layered coir fibre", width: 1200, height: 800 },
      { src: "/images/product-blocks-3.avif", alt: "Palletized coco peat blocks strapped and shrink-wrapped for export", width: 1200, height: 800 },
    ],
    highlights: ["EC < 0.5 mS/cm", "5:1 compression"],
    name: "5 kg Coco Peat Blocks",
    shortName: "Coco Peat Blocks",
    tagline: "The standard unit of substrate supply.",
    summary:
      "Compressed 5 kg coco peat blocks, 30 × 30 × 12 cm at 5:1 compression, expanding to roughly 70–75 litres. Washed, unwashed and low-EC grades, every lot lab-tested before shipment.",
    description: [
      "The 5 kg block is the workhorse of coco peat export: dense enough to ship economically, sized for manual or line handling, and consistent enough to feed automated mixing. Each block is compressed 5:1 from sieved coco pith and expands to roughly 70–75 litres with water.",
      "Blocks are available washed or unwashed, with a low-EC grade for buyers blending for salt-sensitive crops. Washing is done at the mill with fresh water and verified by an independent Colombo laboratory before any container is confirmed — the lab report travels with the quotation, not after the sale.",
    ],
    specs: [
      { label: "Block dimensions", value: "30 × 30 × 12 cm" },
      { label: "Block weight", value: "5 kg", note: "± tolerance to buyer spec" },
      { label: "Compression", value: "5 : 1" },
      { label: "Expanded volume", value: "≈ 70 – 75 L", note: "per block" },
      { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:1.5 method" },
      { label: "EC, low-EC grade", value: "on request", note: "for salt-sensitive crops" },
      { label: "pH", value: "5.5 – 6.8" },
      { label: "Moisture", value: "< 18 %", note: "at packing" },
      { label: "Grades", value: "washed / unwashed / low-EC" },
    ],
    packing: [
      { label: "Unit", value: "5 kg block", note: "shrink-wrapped, optional printed sleeve" },
      { label: "Loading", value: "palletized or floor-loaded", note: "40 ft HC" },
      { label: "Loading plan", value: "shared with quotation" },
      { label: "Marking", value: "to buyer spec" },
    ],
    applications: [
      "Greenhouse growing media, hydroponic and soilless culture",
      "Substrate base for grow bag and slab production",
      "Professional potting mix and nursery media",
      "Soil conditioning and horticultural blends",
    ],
    diagram: "block",
  },
  {
    slug: "husk-chips",
    photo: { src: "/images/product-chips.jpg", alt: "Coconut husks stockpiled at a coir mill before cutting", width: 1200, height: 673 },
    highlights: ["Graded 1 – 3 cm", "Washed on request"],
    name: "Coconut Husk Chips",
    shortName: "Husk Chips",
    tagline: "Graded structure for air and drainage.",
    summary:
      "Cut coconut husk chips graded 1–3 cm, washed on request, supplied compressed in blocks or loose. The structural fraction for blends that need air-filled porosity and drainage.",
    description: [
      "Husk chips are cut from whole coconut husk and screen-graded to 1–3 cm, giving substrate blends the air-filled porosity and drainage that fine pith alone cannot provide. They resist compaction across multi-year crop cycles, which is why chip fractions dominate long-cycle crops like orchids and berries.",
      "Chips are supplied unwashed by default and washed on request, compressed into blocks for economical freight or loose where the buyer's process requires it. Grading consistency is checked per lot — a chip fraction is only useful if the size band actually holds.",
    ],
    specs: [
      { label: "Chip grade", value: "1 – 3 cm", note: "screen-graded" },
      { label: "Washing", value: "on request", note: "fresh-water washed at mill" },
      { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:1.5 method" },
      { label: "pH", value: "5.5 – 6.8" },
      { label: "Moisture", value: "< 18 %", note: "at packing" },
      { label: "Form", value: "compressed blocks or loose" },
    ],
    packing: [
      { label: "Compressed", value: "5 kg blocks", note: "5:1 compression" },
      { label: "Loose", value: "bagged", note: "bag size to buyer spec" },
      { label: "Loading", value: "palletized or floor-loaded", note: "40 ft HC" },
      { label: "Loading plan", value: "shared with quotation" },
    ],
    applications: [
      "Orchid and anthurium growing media",
      "Chip fraction in peat:chip substrate blends",
      "Berry and long-cycle crop substrates",
      "Mulching and landscaping",
    ],
    diagram: "chips",
  },
  {
    slug: "grow-bags",
    photo: { src: "/images/product-growbags.avif", alt: "Greenhouse tomato rows growing on coco substrate slabs", width: 896, height: 1200 },
    highlights: ["Blends 50:50 – 70:30", "UV-stabilized film"],
    name: "Coco Grow Bags",
    shortName: "Grow Bags",
    tagline: "A finished substrate system, built to your spec.",
    summary:
      "Ready-to-plant coco grow bags, 100 × 15 × 12 cm standard in UV-stabilized white/black film. Custom peat:chip blends from 50:50 to 70:30, buffered on request, holes cut to buyer spec.",
    description: [
      "Grow bags arrive at the greenhouse as a finished system: compressed substrate slab, UV-stabilized co-extruded film, planting and drainage holes already cut. Lay, drip, expand, plant. The standard bag is 100 × 15 × 12 cm; other dimensions are produced against order.",
      "The blend is the specification that matters most, and it is yours to set: peat to chips from 50:50 to 70:30 depending on crop and irrigation strategy, washed or buffered substrate, and hole patterns matched to your planting density and drip layout. Every blend batch is lab-verified for EC and pH before filling.",
    ],
    specs: [
      { label: "Standard size", value: "100 × 15 × 12 cm", note: "custom sizes on order" },
      { label: "Film", value: "UV-stabilized", note: "co-extruded white / black" },
      { label: "Blend, peat : chips", value: "50:50 – 70:30", note: "to buyer spec" },
      { label: "Buffering", value: "on request", note: "calcium nitrate treated" },
      { label: "Planting holes", value: "to buyer spec", note: "count, size, position" },
      { label: "Drain holes", value: "to buyer spec" },
      { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:1.5 method" },
      { label: "pH", value: "5.5 – 6.8" },
    ],
    packing: [
      { label: "Unit", value: "flat compressed bag" },
      { label: "Loading", value: "palletized or floor-loaded", note: "40 ft HC" },
      { label: "Loading plan", value: "shared with quotation" },
      { label: "Marking", value: "printed film to buyer spec" },
    ],
    applications: [
      "Greenhouse tomatoes, cucumbers and peppers",
      "Strawberries and other berries on gutters",
      "Cut flowers — roses and gerbera",
      "Melon and other high-wire crops",
    ],
    diagram: "growbag",
  },
  {
    slug: "coir-fiber",
    photo: { src: "/images/product-fiber.jpg", alt: "Baled golden coir fiber stacked in an export warehouse", width: 1200, height: 675 },
    highlights: ["Bristle & mattress", "100 – 120 kg bales"],
    name: "Coir Fiber",
    shortName: "Coir Fiber",
    tagline: "Golden fiber, baled for industry.",
    summary:
      "Sri Lankan coir fiber in compressed bales of roughly 100–120 kg. Bristle and mattress grades for brushes, twine, upholstery, erosion control and horticultural liners.",
    description: [
      "Coir fiber is the long golden strand extracted from coconut husk — strong, elastic and resistant to salt water, which is why it has been export cargo from this coastline for over a century. We supply both bristle fiber, the longer and stiffer grade, and mattress fiber, the finer curled grade.",
      "Fiber ships in machine-compressed bales of roughly 100–120 kg, strapped for container stuffing. Grade, fiber length and bale weight are agreed per order and confirmed against samples before loading.",
    ],
    specs: [
      { label: "Grades", value: "bristle / mattress" },
      { label: "Bale weight", value: "≈ 100 – 120 kg", note: "machine compressed" },
      { label: "Color", value: "golden brown", note: "natural, unbleached" },
      { label: "Moisture", value: "< 18 %", note: "at packing" },
      { label: "Fiber length", value: "per grade", note: "confirmed against sample" },
    ],
    packing: [
      { label: "Unit", value: "compressed bale", note: "strapped" },
      { label: "Loading", value: "floor-loaded", note: "40 ft HC" },
      { label: "Loading plan", value: "shared with quotation" },
    ],
    applications: [
      "Brushes, brooms and tawashi",
      "Ropes, twine and netting",
      "Mattress and upholstery filling",
      "Erosion-control logs, geotextiles and basket liners",
    ],
    diagram: "bale",
  },
];

/**
 * Slugs temporarily hidden from the catalog (and from generated pages,
 * sitemap, footer and forms). Remove a slug from this set to restore it.
 */
const HIDDEN_SLUGS = new Set(["husk-chips", "coir-fiber"]);

export const PRODUCTS: Product[] = ALL_PRODUCTS.filter(
  (p) => !HIDDEN_SLUGS.has(p.slug),
);

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
