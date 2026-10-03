import type { Application, Datasheet, Packing } from "./site";

export type ProductDiagramKind =
  | "block"
  | "chips"
  | "chipblock"
  | "growbag"
  | "bale";

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
  datasheet: Datasheet;
  packing: Packing;
  applications: Application[];
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
    highlights: ["EC < 0.5 mS/cm", "Min. 12 L/kg expansion"],
    name: "5 kg Coco Peat Blocks",
    shortName: "Coco Peat Blocks",
    tagline: "The standard unit of substrate supply.",
    summary:
      "Washed, screened coir pith compressed into 5 kg blocks, 30 × 30 × 15 cm, expanding to 60 litres or more. Low-EC washed and high-EC grades, with a certificate of analysis for every shipment.",
    description: [
      "The 5 kg block is the standard commercial format of coco peat: washed coir pith from Sri Lankan husk, screened to under 12 mm and compressed for economical freight. Hydrate it to produce a low-EC, free-draining growing medium, or the base for your own potting mix.",
      "Each block expands to at least 12 litres per kilogram, 60 litres or more per block, with higher-purity grades reaching 15 to 18 litres per kilogram. The low-EC washed grade is made for horticulture; a high-EC grade is available for soil amendment, landscaping and bedding. Husk chips or fibre can be blended in to order.",
    ],
    datasheet: {
      lead: "Every shipment is supplied with a certificate of analysis for the actual lot. Sizes, mixes and EC grades can be produced to your own specification.",
      keyFigures: [
        { value: "5 kg", label: "per block" },
        { value: "5 : 1", label: "compression" },
        { value: "≥ 60 L", label: "expanded volume" },
        { value: "< 0.5", label: "mS/cm EC, washed" },
      ],
      dimensions: {
        length: 30,
        width: 30,
        height: 15,
        unit: "cm",
        caption: "compressed block",
        rows: [
          { label: "Dimensions", value: "30 × 30 × 15 cm" },
          { label: "Dry weight", value: "5 kg ± 200 g" },
          { label: "Compression", value: "5 : 1" },
          { label: "Expansion", value: "min. 12 L / kg", note: "60 L or more per block; higher-purity grades reach 15 – 18 L / kg" },
        ],
      },
      lab: [
        { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:5 v/v", scale: [0, 2], band: [0, 0.5], ticks: ["0", "2 mS/cm"] },
        { label: "pH", value: "5.5 – 6.5", scale: [4, 8], band: [5.5, 6.5] },
        { label: "Moisture", value: "< 20 %", note: "at dispatch", scale: [0, 40], band: [0, 20], ticks: ["0", "40 %"] },
      ],
      groups: [
        {
          title: "Material",
          rows: [
            { label: "Material", value: "100 % coir pith", note: "from Sri Lankan coconut husk" },
            { label: "Particle size", value: "< 12 mm", note: "screened" },
            { label: "Blends", value: "to order", note: "husk chips or fibre added on request" },
          ],
        },
        {
          title: "EC grades",
          rows: [
            { label: "Low-EC washed", value: "< 0.5 mS/cm", note: "for horticulture" },
            { label: "High-EC", value: "available", note: "for soil amendment, landscaping and bedding" },
          ],
        },
        {
          title: "Documentation",
          aside: true,
          rows: [
            { label: "Certificate of analysis", value: "every shipment", note: "EC, pH and moisture of the actual lot" },
            { label: "Phytosanitary", value: "every shipment", note: "CDA export permit included" },
            { label: "Fumigation", value: "where required", note: "to destination import rules" },
          ],
        },
      ],
      options: [
        { label: "EC grade", detail: "low-EC washed or high-EC" },
        { label: "Mix", detail: "100 % peat, or husk chips and fibre blended in" },
        { label: "Wrapping", detail: "unwrapped as standard; shrink wrap or printed sleeve on request" },
        { label: "Loading", detail: "palletized, loose-loaded or single pallets" },
      ],
      footnote: "Specifications from current production. Every shipment is supplied with a certificate of analysis for the actual lot, and sizes, mixes and EC grades can be produced to your own specification.",
    },
    packing: {
      lead: "Shipped as full 40 ft high-cube containers, palletized or loose-loaded, or as single pallets for trials and smaller orders. Loading depends on pallet configuration and destination weight limits, so we confirm exact quantities with each quotation.",
      units: [
        { icon: "block", label: "Block", value: "5 kg", note: "30 × 30 × 15 cm, unwrapped as standard" },
        { icon: "pallet", label: "Pallet", value: "240 blocks", note: "strapped and stretch-wrapped", multiplier: "× 240" },
        { icon: "container", label: "Container", value: "4,800 blocks", note: "20 pallets in a 40 ft HC", multiplier: "× 20" },
      ],
      steps: [
        "Washed pith is screened to under 12 mm and compressed into 5 kg blocks.",
        "Blocks are stacked on export pallets without individual shrink wrap.",
        "Pallets are strapped and stretch-wrapped with corner protectors.",
        "Twenty pallets are stuffed into a 40 ft high-cube container at Colombo.",
      ],
      notes: [
        { label: "Loose-loaded", value: "5,120 blocks", note: "per 40 ft HC, without pallets" },
        { label: "Single pallets", value: "available", note: "LCL consignments for trials and smaller orders" },
        { label: "Loading plan", value: "confirmed with quotation" },
        { label: "Marking", value: "to buyer spec" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "4,800 palletized or 5,120 loose-loaded" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "pot", title: "Nursery & potting mixes", detail: "The base for professional mixes, plugs and container stock.", tag: "low-EC washed" },
      { icon: "vine", title: "Vegetables", detail: "Soilless growing media for crops under cover.", tag: "low-EC washed" },
      { icon: "slab", title: "Hydroponics", detail: "Free-draining substrate for drip and slab systems.", tag: "low-EC washed" },
      { icon: "soil", title: "Soil amendment & landscaping", detail: "Water-holding conditioner for beds and blends.", tag: "high-EC" },
      { icon: "fiber", title: "Animal bedding", detail: "Absorbent, low-dust bedding material.", tag: "high-EC" },
    ],
    diagram: "block",
  },
  {
    slug: "5kg-coco-chip-blocks",
    photo: { src: "/images/product-chip-blocks-1.avif", alt: "Compressed 5 kg coco husk chip block", width: 1200, height: 1200 },
    gallery: [
      { src: "/images/product-chip-blocks-2.avif", alt: "Two coco husk chip blocks with loose husk chips in front", width: 1200, height: 1200 },
      { src: "/images/product-chip-blocks-3.avif", alt: "Close-up of a compressed chip block beside loosened husk chips", width: 1200, height: 1200 },
    ],
    highlights: ["100 % husk chips", "Min. 8 – 9 L/kg expansion"],
    name: "5 kg Coco Chip Blocks",
    shortName: "Coco Chip Blocks",
    tagline: "Natural husk chips for moisture, airflow and drainage.",
    summary:
      "Compressed 5 kg coconut husk chip blocks, 30 × 30 × 15 cm, that loosen into chips after hydration. Chips hold moisture while keeping air and drainage around roots, for orchid mixes, nursery containers and greenhouse blends.",
    description: [
      "Our 5 kg coco chip blocks are a practical growing-medium component for commercial growers, nurseries and gardening businesses. Compressed for convenient storage and transport, each block loosens into coconut husk chips after hydration, expanding to at least 8 to 9 litres per kilogram.",
      "The chips hold moisture within their fibres while keeping spaces for air and drainage around roots. Blend them with coco peat or other growing materials to build a mix suited to your crop and watering system, from orchid and anthurium potting mixes to nursery containers and greenhouse blends.",
    ],
    datasheet: {
      lead: "Every shipment is supplied with a certificate of analysis for the actual lot. Chip grade, washing and packing are agreed per order.",
      keyFigures: [
        { value: "5 kg", label: "per block" },
        { value: "100 %", label: "husk chips" },
        { value: "8 – 9 L/kg", label: "minimum expansion" },
        { value: "< 0.5", label: "mS/cm EC, washed" },
      ],
      dimensions: {
        length: 30,
        width: 30,
        height: 15,
        unit: "cm",
        caption: "compressed block",
        rows: [
          { label: "Dimensions", value: "30 × 30 × 15 cm" },
          { label: "Dry weight", value: "5 kg ± 100 g" },
          { label: "Expansion", value: "min. 8 – 9 L / kg", note: "about 40 – 45 L per block after hydration" },
          // Not stated in either source; confirm and replace.
          { label: "Compression", value: "on request", note: "ratio confirmed with quotation" },
        ],
      },
      lab: [
        { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:5 v/v", scale: [0, 2], band: [0, 0.5], ticks: ["0", "2 mS/cm"] },
        { label: "pH", value: "5.5 – 6.5", scale: [4, 8], band: [5.5, 6.5] },
        { label: "Moisture", value: "< 20 %", note: "at dispatch", scale: [0, 40], band: [0, 20], ticks: ["0", "40 %"] },
      ],
      groups: [
        {
          title: "Chips & grades",
          rows: [
            { label: "Mix", value: "100 % husk chips" },
            // Not stated in either source; confirm and replace.
            { label: "Chip size", value: "on request", note: "size range agreed per order" },
            { label: "Low-EC washed", value: "< 0.5 mS/cm", note: "for horticulture" },
            { label: "High-EC", value: "available", note: "for landscaping, mulch and soil amendment" },
            { label: "Buffered", value: "on request" },
          ],
        },
        {
          title: "Documentation",
          aside: true,
          rows: [
            { label: "Certificate of analysis", value: "every shipment", note: "EC, pH and moisture of the actual lot" },
            { label: "Phytosanitary", value: "every shipment", note: "CDA export permit included" },
            { label: "Fumigation", value: "where required", note: "to destination import rules" },
          ],
        },
      ],
      options: [
        { label: "Chip grade", detail: "size range to suit your mix" },
        { label: "Peat-chip blend", detail: "50 : 50 blocks for mixes needing extra air porosity" },
        { label: "Washing & buffering", detail: "low-EC washed, high-EC or buffered" },
        { label: "Packing format", detail: "bulk, shrink-wrapped, LDPE carry bags or retail cartons" },
        { label: "Labelling", detail: "your branding and customized labels" },
      ],
      footnote: "Specifications from current production. Every shipment is supplied with a certificate of analysis for the actual lot, and chip grades, mixes and EC grades can be produced to your own specification.",
    },
    packing: {
      lead: "Blocks ship in bulk, individually wrapped or retail packed, as full containers or single pallets. Loading depends on pallet configuration and destination weight limits, so we confirm exact quantities with each quotation.",
      units: [
        { icon: "block", label: "Block", value: "5 kg", note: "30 × 30 × 15 cm compressed chip block" },
        { icon: "pallet", label: "Pallet", value: "420 blocks", note: "single pallets for LCL orders", multiplier: "× 420" },
        { icon: "container", label: "Container", value: "40 ft HC", note: "full-container quantity quoted per order" },
      ],
      steps: [
        "Husk chips are compressed into 5 kg blocks for storage and transport.",
        "Blocks are left unwrapped for bulk orders, or packed individually for handling and retail.",
        "Loaded directly into the container or stacked on pallets, to the agreed plan.",
      ],
      notes: [
        { label: "Bulk packing", value: "unwrapped blocks", note: "loaded directly into containers or stacked on pallets" },
        { label: "Individual packing", value: "shrink-wrapped", note: "or transparent LDPE bags with carry handles" },
        { label: "Retail packing", value: "label inserts", note: "individually packed blocks; carton packing available" },
        { label: "Labelling", value: "buyer's branding", note: "customized labels" },
        { label: "Loading plan", value: "with quotation", note: "packing method and loading quantities" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "quantity quoted per order" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "flower", title: "Orchids, anthurium & ornamentals", detail: "Open, free-draining potting mixes.", tag: "low-EC washed" },
      { icon: "pot", title: "Nursery pots & containers", detail: "The structural fraction in container growing mixes.", tag: "low-EC washed" },
      { icon: "vine", title: "Greenhouse & hydroponics", detail: "Substrate-based hydroponic and greenhouse blends.", tag: "low-EC washed" },
      { icon: "slab", title: "Coco peat blends", detail: "The chip fraction for grow bags and slabs.", tag: "to specification" },
      { icon: "leaf", title: "Landscaping mulch", detail: "Mulch, drainage layers and surface covering.", tag: "high-EC" },
    ],
    diagram: "chipblock",
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
    datasheet: {
      lead: "Grading is checked per lot and every washed lot is tested by an independent Colombo laboratory before a container is confirmed.",
      keyFigures: [
        { value: "1 – 3 cm", label: "chip grade" },
        { value: "5 : 1", label: "compression" },
        { value: "< 0.5", label: "mS/cm EC, washed" },
        { value: "< 18 %", label: "moisture" },
      ],
      lab: [
        { label: "EC, washed", value: "< 0.5 mS/cm", note: "1:1.5 method", scale: [0, 2], band: [0, 0.5], ticks: ["0", "2 mS/cm"] },
        { label: "pH", value: "5.5 – 6.8", scale: [4, 8], band: [5.5, 6.8] },
        { label: "Moisture", value: "< 18 %", note: "at packing", scale: [0, 40], band: [0, 18], ticks: ["0", "40 %"] },
      ],
      groups: [
        {
          title: "Chips",
          rows: [
            { label: "Chip grade", value: "1 – 3 cm", note: "screen-graded" },
            { label: "Form", value: "compressed blocks or loose" },
          ],
        },
      ],
      options: [
        { label: "Washing", detail: "fresh-water washed at mill on request" },
        { label: "Form", detail: "5 kg compressed blocks or loose bagged" },
        { label: "Bag size", detail: "to buyer spec for loose supply" },
      ],
    },
    packing: {
      lead: "Chips ship compressed or loose. Loading depends on pallet configuration and destination weight limits, so we confirm exact quantities with each quotation.",
      units: [
        { icon: "block", label: "Block or bag", value: "5 kg blocks", note: "or loose, bag size to buyer spec" },
        { icon: "pallet", label: "Pallet", value: "Palletized", note: "or floor-loaded" },
        { icon: "container", label: "Container", value: "40 ft HC", note: "quantity confirmed with quotation" },
      ],
      steps: [
        "Chips are screen-graded to 1 – 3 cm and washed on request.",
        "Compressed 5 : 1 into 5 kg blocks, or bagged loose.",
        "Palletized or floor-loaded to the agreed plan.",
        "Stuffed into a 40 ft high-cube container at Colombo.",
      ],
      notes: [
        { label: "Loading plan", value: "shared with quotation" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "quantity per loading plan" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "flower", title: "Orchids & anthurium", detail: "Open, free-draining media for epiphytes.", tag: "1 – 3 cm" },
      { icon: "slab", title: "Peat : chip blends", detail: "The chip fraction for air-filled porosity in slabs.", tag: "washed" },
      { icon: "berry", title: "Berries & long-cycle crops", detail: "Resists compaction over multi-year cycles.", tag: "washed" },
      { icon: "leaf", title: "Mulching & landscaping", detail: "Decorative, slow-breakdown ground cover.", tag: "unwashed" },
    ],
    diagram: "chips",
  },
  {
    slug: "grow-bags",
    photo: { src: "/images/product-growbags.avif", alt: "Greenhouse tomato rows growing on coco substrate slabs", width: 896, height: 1200 },
    highlights: ["60:40 peat : chips standard", "UV-treated film, 2 yr"],
    name: "Coco Grow Bags",
    shortName: "Grow Bags",
    tagline: "A finished substrate system, built to your spec.",
    summary:
      "Ready-to-plant coco grow bags, 100 × 18 × 14 cm standard (≈ 25 L expanded) in 350-gauge UV-treated white/black LDPE film. Standard 60:40 peat:chip blend, with 100:0, 80:20, 70:30 and 50:50 blends on order, buffered on request, holes cut to buyer spec.",
    description: [
      "Grow bags arrive at the greenhouse as a finished system: compressed substrate slab, UV-treated co-extruded film, planting and drainage holes already cut. Lay, drip, expand, plant. The standard bag expands to 100 × 18 × 14 cm, roughly 25 litres of substrate per slab from a 2.8 kg dry fill; other dimensions are produced against order.",
      "The blend is the specification that matters most, and it is yours to set. The standard fill is 60 % dust-free coir peat to 40 % husk chips of 6–7 mm; 100 % peat, 80:20, 70:30 and 50:50 blends are available, washed or buffered, with hole patterns matched to your planting density and drip layout. Every blend batch is lab-verified for EC and pH before filling.",
    ],
    datasheet: {
      lead: "Every blend batch is lab-verified for EC and pH before filling. Holes, sizes and ratios are cut and mixed to your order.",
      keyFigures: [
        { value: "25 L", label: "substrate per slab" },
        { value: "2.8 kg", label: "dry weight" },
        { value: "60 : 40", label: "peat : chips, standard" },
        { value: "2 yr", label: "UV-treated film" },
      ],
      dimensions: {
        length: 100,
        width: 18,
        height: 14,
        unit: "cm",
        caption: "expanded slab",
        rows: [
          { label: "Expanded size", value: "100 × 18 × 14 cm", note: "≈ 25 L substrate per slab" },
          { label: "Dry weight", value: "2.8 kg ± 10 %", note: "per slab" },
          { label: "Expansion", value: "18 L / kg" },
        ],
      },
      lab: [
        { label: "EC", value: "< 0.5 mS/cm", note: "1:5 v/v, washed", scale: [0, 2], band: [0, 0.5], ticks: ["0", "2 mS/cm"] },
        { label: "pH", value: "5.5 – 6.5", scale: [4, 8], band: [5.5, 6.5] },
        { label: "Moisture", value: "< 20 %", note: "at dispatch", scale: [0, 40], band: [0, 20], ticks: ["0", "40 %"] },
      ],
      blend: {
        intro: "Slabs can be pressed in any peat-to-chip ratio. These are the ratios most often requested; tell us the crop and irrigation strategy and we will recommend one.",
        standard: { peat: 60, chips: 40, character: "Free draining with good water-holding; the standard grow bag mix.", uses: "Tomato, cucumber, pepper, eggplant, cut flowers" },
        options: [
          { peat: 100, chips: 0, character: "Highest water-holding capacity.", uses: "Soilless mixes, seed starting, container growing" },
          { peat: 80, chips: 20, character: "High moisture retention with moderate aeration.", uses: "Strawberry, leafy crops, cooler climates" },
          { peat: 70, chips: 30, character: "Balanced water retention and aeration.", uses: "The common horticultural blend for greenhouse vegetables" },
          { peat: 60, chips: 40, character: "Free draining with good water-holding; the standard grow bag mix.", uses: "Tomato, cucumber, pepper, eggplant, cut flowers" },
          { peat: 50, chips: 50, character: "Improved drainage and air porosity.", uses: "Crops needing strong root oxygenation; warm climates and high-frequency irrigation" },
        ],
        rows: [
          { label: "Coir peat", value: "dust-free", note: "sieved pith" },
          { label: "Husk chips", value: "6 – 7 mm", note: "screen-graded" },
          { label: "Buffering", value: "on request", note: "calcium nitrate treated" },
        ],
      },
      groups: [
        {
          title: "Bag & finishing",
          rows: [
            { label: "Film", value: "LDPE, 350 gauge", note: "black inside / white outside" },
            { label: "UV treatment", value: "2 years" },
            { label: "Finishing", value: "factory-cut", note: "plant holes and drain cuts; pattern, hole shape and slab size customisable" },
            { label: "Printing", value: "to buyer spec" },
          ],
        },
        {
          title: "Documentation",
          aside: true,
          rows: [
            { label: "Certificate of analysis", value: "every shipment", note: "EC, pH and moisture of the actual batch" },
            { label: "Phytosanitary", value: "every shipment", note: "CDA export permit included" },
            { label: "Fumigation", value: "where required", note: "to destination import rules" },
          ],
        },
      ],
      options: [
        { label: "Blend ratio", detail: "100 % peat to 50 : 50, matched to crop and irrigation" },
        { label: "Planting holes", detail: "count, size and position" },
        { label: "Drain cuts", detail: "pattern to your drip layout" },
        { label: "Slab size", detail: "other dimensions produced against order" },
        { label: "Buffering", detail: "calcium nitrate treated substrate" },
        { label: "Film printing", detail: "your brand on the bag" },
      ],
      footnote: "Specifications from current production. Every shipment is supplied with a certificate of analysis for the actual batch, and sizes, mixes and EC grades can be produced to your own specification.",
    },
    packing: {
      lead: "Slabs leave Colombo palletized, strapped and wrapped. Loading depends on pallet configuration and destination weight limits, so we confirm exact quantities with each quotation.",
      units: [
        { icon: "slab", label: "Slab", value: "1 grow bag", note: "100 × 18 × 14 cm, 2.8 kg dry" },
        { icon: "pallet", label: "Pallet", value: "450 slabs", note: "stacked flat, strapped and wrapped", multiplier: "× 450" },
        { icon: "container", label: "Container", value: "9,000 slabs", note: "20 pallets in a 40 ft HC", multiplier: "× 20" },
      ],
      steps: [
        "Each compressed slab is sealed in its UV-treated LDPE grow bag.",
        "Slabs are stacked flat on export pallets.",
        "Pallets are strapped and stretch-wrapped with corner protectors.",
        "Twenty pallets are stuffed into a 40 ft high-cube container at Colombo.",
      ],
      notes: [
        { label: "Loading plan", value: "confirmed with quotation", note: "per pallet configuration and destination weight limits" },
        { label: "Trial pallets", value: "available", note: "for crop trials" },
        { label: "Marking", value: "printed film to buyer spec" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "20 pallets · 9,000 slabs" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "vine", title: "Tomatoes, cucumbers & peppers", detail: "High-wire vegetables on drip in glasshouse or polytunnel.", tag: "typical 60 : 40 – 70 : 30" },
      { icon: "berry", title: "Strawberries & berries", detail: "Gutter and tabletop systems that need drainage.", tag: "typical 50 : 50 – 60 : 40" },
      { icon: "flower", title: "Roses & gerbera", detail: "Cut-flower crops run for several years on one slab.", tag: "typical 50 : 50 – 60 : 40" },
      { icon: "melon", title: "Melon & other high-wire crops", detail: "Heavy-fruiting vines with high water demand.", tag: "typical 60 : 40 – 70 : 30" },
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
    datasheet: {
      lead: "Grade, fiber length and bale weight are agreed per order and confirmed against samples before loading.",
      keyFigures: [
        { value: "100 – 120 kg", label: "per bale" },
        { value: "2 grades", label: "bristle & mattress" },
        { value: "< 18 %", label: "moisture" },
      ],
      lab: [
        { label: "Moisture", value: "< 18 %", note: "at packing", scale: [0, 40], band: [0, 18], ticks: ["0", "40 %"] },
      ],
      groups: [
        {
          title: "Fiber",
          rows: [
            { label: "Grades", value: "bristle / mattress" },
            { label: "Bale weight", value: "≈ 100 – 120 kg", note: "machine compressed" },
            { label: "Color", value: "golden brown", note: "natural, unbleached" },
            { label: "Fiber length", value: "per grade", note: "confirmed against sample" },
          ],
        },
      ],
      options: [
        { label: "Grade", detail: "bristle or mattress" },
        { label: "Bale weight", detail: "agreed per order" },
      ],
    },
    packing: {
      lead: "Bales are floor-loaded at Colombo. Loading depends on bale size and destination weight limits, so we confirm exact quantities with each quotation.",
      units: [
        { icon: "bale", label: "Bale", value: "≈ 100 – 120 kg", note: "machine compressed, strapped" },
        { icon: "container", label: "Container", value: "40 ft HC", note: "floor-loaded, quantity per loading plan" },
      ],
      steps: [
        "Fiber is machine-compressed into bales of roughly 100 – 120 kg.",
        "Bales are strapped for container stuffing.",
        "Floor-loaded into a 40 ft high-cube container at Colombo.",
      ],
      notes: [
        { label: "Loading plan", value: "shared with quotation" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "quantity per loading plan" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "brush", title: "Brushes, brooms & tawashi", detail: "Stiff bristle fiber for sweeping and scouring.", tag: "bristle" },
      { icon: "rope", title: "Ropes, twine & netting", detail: "Salt-resistant cordage for marine and farm use.", tag: "bristle" },
      { icon: "fiber", title: "Mattress & upholstery", detail: "Curled fiber filling with lasting resilience.", tag: "mattress" },
      { icon: "leaf", title: "Erosion control & liners", detail: "Coir logs, geotextiles and hanging-basket liners.", tag: "mattress" },
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
