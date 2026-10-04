import type { Application, Datasheet, Packing } from "./site";

export type ProductDiagramKind =
  | "block"
  | "chips"
  | "chipblock"
  | "peatbale"
  | "peatdisc"
  | "growbag"
  | "bale";

export type Product = {
  slug: string;
  name: string;
  /** Short name used in cards and navigation. */
  shortName: string;
  /** One-line positioning used under the name. */
  tagline: string;
  /** Card summary, shown on the homepage and catalog. */
  summary: string;
  /** Search-result description; keep to about 155 characters. */
  metaDescription?: string;
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
  /** Who buys it; switches grower-specific copy to manufacturing wording. */
  audience?: "growers" | "manufacturers";
  /** Line drawing shown under the hero photo; omit to show the photo alone. */
  diagram?: ProductDiagramKind;
  /** Branded infographic shown in the hero instead of the line drawing. */
  diagramImage?: { src: string; alt: string; width: number; height: number };
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
    metaDescription:
      "5 kg coco peat blocks from Sri Lanka, 30 × 30 × 15 cm, expanding to 60 L or more. Low-EC washed and high-EC grades. Request a wholesale quotation.",
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
    diagramImage: { src: "/images/product-blocks-4.avif", alt: "5 kg coco peat block diagram with length, width and height called out", width: 1200, height: 800 },
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
    metaDescription:
      "5 kg coco husk chip blocks from Sri Lanka, 30 × 30 × 15 cm. Chips for orchid mixes, nursery containers and greenhouse blends. Bulk or retail packed.",
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
    slug: "25kg-coco-peat-bales",
    photo: { src: "/images/product-bales-1.avif", alt: "Open 25 kg SK Ceylon coco peat bale showing the coir pith inside", width: 1200, height: 1200 },
    gallery: [
      { src: "/images/product-bales-2.avif", alt: "Sealed 25 kg coco peat bale in its branded polythene bag", width: 1200, height: 1200 },
      { src: "/images/product-bales-3.avif", alt: "Sealed 25 kg coco peat bale, front view", width: 1200, height: 1200 },
    ],
    highlights: ["25 kg bales", "Polythene-bagged"],
    name: "25 kg Coco Peat Bales",
    shortName: "Coco Peat Bales",
    tagline: "Bulk coir pith for nurseries, growers and potting mixes.",
    metaDescription:
      "25 kg coco peat bales from Sri Lanka for nurseries, potting-mix producers and growers. Individually bagged, with grade and washing to your spec.",
    summary:
      "Coconut coir pith in compact 25 kg bales for bulk growing-media preparation. Individually bagged, floor-loaded or palletized, with grade, washing and buffering agreed to your application.",
    description: [
      "Our 25 kg coco peat bales supply coconut coir pith in a compact format for bulk growing-media preparation. Made from the material obtained during coconut husk processing, coco peat holds moisture and suits growing mixes for a wide range of plants.",
      "After loosening and adding water as needed, the material can be blended with other growing-media ingredients to suit the crop, container and watering method. Its moisture-holding properties help keep water around roots, while the blend you choose sets aeration and drainage.",
      "The bale format takes less storage space than loose material and makes bulk supply practical for nurseries, substrate producers and commercial growing operations.",
    ],
    datasheet: {
      lead: "Share your intended application, preferred grade, packaging requirements and destination port. We propose a suitable product specification and loading plan.",
      // The source sheet (files/25 kg Cocopeat Bales.pdf) gives no figures
      // for dimensions, compression, expanded volume, moisture, EC or pH.
      // When they are confirmed, add keyFigures, dimensions and lab gauges
      // like the coco peat block entry above.
      keyFigures: [
        { value: "25 kg", label: "nominal weight" },
        { value: "Coir pith", label: "raw material" },
        { value: "Sri Lanka", label: "country of origin" },
      ],
      lab: [],
      groups: [
        {
          title: "Bale",
          rows: [
            { label: "Product", value: "coco peat bale" },
            { label: "Nominal weight", value: "25 kg" },
            { label: "Raw material", value: "coconut coir pith" },
            { label: "Country of origin", value: "Sri Lanka" },
            { label: "Bale dimensions", value: "in the quotation", note: "specified for your order" },
            { label: "Compression", value: "per agreed spec", note: "ratio according to the agreed product specification" },
            { label: "Expanded volume", value: "per grade", note: "specified for the selected grade" },
          ],
        },
        {
          title: "Grade & processing",
          rows: [
            { label: "Particle size & blend", value: "to buyer requirements", note: "considered when selecting the grade" },
            { label: "Washing", value: "on request", note: "specify your requirement when enquiring" },
            { label: "Buffering", value: "on request", note: "specify your requirement when enquiring" },
          ],
        },
        {
          title: "Lab values",
          aside: true,
          rows: [
            { label: "EC", value: "agreed with buyer", note: "target EC and test method" },
            { label: "pH", value: "per agreed spec" },
            { label: "Moisture", value: "per agreed spec" },
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
      advantages: [
        { label: "Moisture retention", detail: "holds water within the growing medium" },
        { label: "Flexible blending", detail: "mixes with other substrate ingredients to reach the growing conditions you need" },
        { label: "Compact storage", detail: "compressed material takes less space than loose coco peat" },
        { label: "Bulk preparation", detail: "a practical format for preparing larger quantities of growing media" },
        { label: "Useful coconut resource", detail: "makes productive use of material from coconut husk processing" },
      ],
      options: [
        { label: "Grade", detail: "particle size and blend chosen for your application" },
        { label: "Washing & buffering", detail: "specified when you enquire" },
        { label: "EC target", detail: "target and test method agreed with you" },
        { label: "Packaging", detail: "plain or custom-branded polythene bags" },
        { label: "Loading", detail: "floor-loaded or palletized, as agreed" },
      ],
      footnote: "Final specifications, packaging and quantities are agreed before order confirmation. Choose the grade and blend for the intended application; loosen the material and adjust its moisture before use.",
    },
    packing: {
      lead: "Bales ship individually bagged, floor-loaded or palletized as agreed. Container quantity depends on bale dimensions and packing arrangement, and the loading plan is provided with the quotation.",
      units: [
        { icon: "bale", label: "Bale", value: "25 kg", note: "individually packed in a protective polythene bag" },
        { icon: "pallet", label: "Pallet", value: "Palletized", note: "or floor-loaded, as agreed" },
        { icon: "container", label: "Container", value: "40 ft HC", note: "quantity based on bale dimensions and packing" },
      ],
      steps: [
        "Coir pith is compressed into 25 kg bales.",
        "Each bale is packed in a protective polythene bag, plain or custom-branded.",
        "Bales are floor-loaded or palletized, as agreed.",
      ],
      notes: [
        { label: "Packaging", value: "polythene bags", note: "individually packed for protection" },
        { label: "Branding", value: "plain or custom", note: "custom-branded packaging enquiries welcome" },
        { label: "Loading", value: "floor-loaded or palletized", note: "as agreed" },
        { label: "Container quantity", value: "per loading plan", note: "based on bale dimensions and packing arrangement" },
        { label: "Loading plan", value: "with quotation" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "40 ft HC", note: "quantity per loading plan" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "pot", title: "Nursery production", detail: "Growing mixes for young plants and ornamental plants." },
      { icon: "slab", title: "Potting-mix production", detail: "A moisture-retaining ingredient for commercial substrate blends." },
      { icon: "vine", title: "Greenhouse cultivation", detail: "Growing media selected for the crop and irrigation system." },
      { icon: "flower", title: "Container gardening", detail: "Mixes for vegetables, flowers and other potted plants." },
      { icon: "leaf", title: "Seed propagation", detail: "Fine-grade material with EC suited to sensitive seedlings." },
      { icon: "soil", title: "Landscaping & soil conditioning", detail: "Worked into soil blends to improve moisture retention." },
    ],
    diagram: "peatbale",
  },
  {
    slug: "coco-peat-discs",
    photo: { src: "/images/product-discs-1.avif", alt: "Close-up of a compressed coco peat disc with a second disc behind it", width: 1200, height: 1200 },
    gallery: [
      { src: "/images/product-discs-2.avif", alt: "Three compressed coco peat discs, two stacked and one in front", width: 1200, height: 1200 },
      { src: "/images/product-discs-3.avif", alt: "Four compressed coco peat discs arranged on a white surface", width: 1200, height: 1200 },
    ],
    highlights: ["Expand with water", "Bare discs or netted plugs"],
    name: "Coco Peat Discs",
    shortName: "Coco Peat Discs",
    tagline: "Compact growing media for seed starting, nurseries and potted plants.",
    metaDescription:
      "Coco peat discs from Sri Lanka that expand when watered, for seed starting, nurseries and potted plants. Disc size and grade to your spec.",
    summary:
      "Coconut coir pith compressed into round discs that expand when watered, for preparing growing media directly in pots and propagation trays. Disc size and grade matched to your container and crop.",
    description: [
      "Our coco peat discs are a convenient way to prepare growing media directly in pots and propagation trays. Made from coconut coir pith compressed into round discs, they expand when watered, so there is less loose substrate to measure and handle.",
      "The expanded coco peat holds moisture while providing air spaces around roots. Disc size and material grade are matched to the container and crop, from fine material for seed starting to coarser blends for flowering and potted plants.",
      "Compact to store and simple to prepare, the discs suit commercial nurseries, greenhouse growers, garden retailers and home gardeners. Share your pot or tray dimensions and growing requirements and we will propose a suitable specification.",
    ],
    datasheet: {
      lead: "Tell us your crop, pot or tray dimensions, required expanded volume and preferred EC grade. We propose a suitable disc specification with the quotation.",
      // The source sheet (files/coco-peat-discs.pdf) gives no figures for
      // diameter, thickness, unit weight, expanded volume, EC, pH or
      // moisture; each is set per order. When standard sizes are confirmed,
      // add keyFigures, dimensions and lab gauges like the coco peat block
      // entry above.
      keyFigures: [
        { value: "Coir pith", label: "raw material" },
        { value: "Round disc", label: "compressed shape" },
        { value: "Sri Lanka", label: "country of origin" },
      ],
      lab: [],
      groups: [
        {
          title: "Disc",
          rows: [
            { label: "Product", value: "compressed coco peat discs" },
            { label: "Raw material", value: "coconut coir pith" },
            { label: "Shape", value: "round, flat disc" },
            { label: "Diameter", value: "to fit your pot or tray", note: "selected per order" },
            { label: "Thickness & weight", value: "per expanded volume", note: "matched to the volume you need" },
            { label: "Expanded volume", value: "per disc size", note: "specified for the selected disc" },
            { label: "Origin", value: "Sri Lanka" },
          ],
        },
        {
          title: "Grade & format",
          rows: [
            { label: "Material grade", value: "per crop and container", note: "fine for seed starting, coarser for potted plants" },
            { label: "Format", value: "bare discs", note: "netted propagation plugs on enquiry" },
            { label: "Additional", value: "on request", note: "seed indentation, washing or buffering" },
          ],
        },
        {
          title: "Lab values",
          aside: true,
          rows: [
            { label: "EC", value: "agreed grade", note: "value and test method stated in the quotation" },
            { label: "pH", value: "per agreed spec", note: "range stated" },
            { label: "Moisture", value: "per agreed spec", note: "limit at packing stated" },
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
      usage: {
        steps: [
          "Place the disc in a suitable pot or tray cell with drainage.",
          "Add water gradually and allow it to expand fully.",
          "Gently loosen the material if needed and let excess water drain.",
          "Sow seeds or insert cuttings, then manage watering and feeding for the crop.",
        ],
        note: "Bare discs should stay supported by a suitable container after expansion. Netted plugs use a surrounding mesh to help hold the growing medium together during handling.",
      },
      advantages: [
        { label: "Simple preparation", detail: "place in a container, add water and let the disc expand" },
        { label: "Convenient portions", detail: "individual discs reduce the need to measure loose growing media" },
        { label: "Moisture retention", detail: "coco peat holds water within the root zone" },
        { label: "Root-zone aeration", detail: "a porous structure gives air spaces when properly hydrated and drained" },
        { label: "Compact storage and transport", detail: "supplied compressed to reduce bulk before use" },
        { label: "Flexible selection", detail: "disc dimensions and material grade chosen for the application" },
      ],
      options: [
        { label: "Disc diameter", detail: "sized to your pot or tray" },
        { label: "Thickness & unit weight", detail: "matched to the expanded volume you need" },
        { label: "Material grade", detail: "selected for crop and container" },
        { label: "Format", detail: "bare discs or netted propagation plugs" },
        { label: "Seed indentation", detail: "available on request" },
        { label: "Washing & buffering", detail: "discussed per order" },
        { label: "Retail packs", detail: "labelled packs and buyer branding" },
      ],
      footnote: "Final specifications, product options and packaging are agreed before order confirmation.",
    },
    packing: {
      lead: "Discs ship in protective cartons. Carton, pallet and container quantities are calculated for your disc size and provided with the quotation.",
      units: [
        { icon: "disc", label: "Disc", value: "Compressed", note: "bare disc or netted plug" },
        { icon: "carton", label: "Carton", value: "Cartons", note: "quantity by disc size and pack" },
        { icon: "pallet", label: "Pallet", value: "Palletized", note: "arranged by carton size and handling" },
        { icon: "container", label: "Container", value: "Per quotation", note: "calculated for your product and packing" },
      ],
      steps: [
        "Coir pith is compressed into round, flat discs.",
        "Discs are packed in protective cartons, or labelled retail packs on enquiry.",
        "Cartons are palletized to suit carton size and handling requirements.",
        "Container loading is calculated for the selected product and packing.",
      ],
      notes: [
        { label: "Bulk packaging", value: "protective cartons" },
        { label: "Retail packaging", value: "on enquiry", note: "labelled packs and buyer branding" },
        { label: "Packing quantity", value: "per disc size", note: "based on disc dimensions and pack requirements" },
        { label: "Pallet arrangement", value: "as agreed", note: "by carton size and handling requirements" },
        { label: "Loading details", value: "with quotation", note: "carton, pallet and container quantities" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "per quotation", note: "calculated for your product and packing" },
        { label: "Lead time", value: "3 – 5 weeks", note: "from order confirmation" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "leaf", title: "Seed germination", detail: "Grades and sizes for seed trays and starter pots." },
      { icon: "pot", title: "Nursery propagation", detail: "Growing media for seedlings and rooting cuttings." },
      { icon: "flower", title: "Flowering & ornamental plants", detail: "Pot-sized discs for gerberas and other suitable plants." },
      { icon: "vine", title: "Greenhouse production", detail: "Media preparation for nursery and container-growing systems." },
      { icon: "slab", title: "Hydroponic propagation", detail: "Starter media used with appropriate irrigation and nutrient management." },
      { icon: "soil", title: "Home gardening & growing kits", detail: "Convenient portions for small pots and seed-starting kits." },
    ],
    diagram: "peatdisc",
  },
  {
    slug: "coir-fibre-bales",
    audience: "manufacturers",
    photo: { src: "/images/product-fibre-1.avif", alt: "Compressed coir fibre bale bound with yellow straps", width: 1200, height: 800 },
    gallery: [
      { src: "/images/product-fibre-2.avif", alt: "Three strapped coir fibre bales standing side by side", width: 1200, height: 675 },
      { src: "/images/product-fibre-3.avif", alt: "Loose golden coir fibre after opening a bale", width: 1200, height: 675 },
    ],
    highlights: ["Compressed bales", "Grades to order"],
    name: "Coir Fibre Bales",
    shortName: "Coir Fibre Bales",
    tagline: "Natural coconut fibre for manufacturing and industry.",
    metaDescription:
      "Coir fibre bales from Sri Lanka for mattresses, upholstery, erosion control, mats and ropes. Fibre grade and bale weight agreed per order.",
    summary:
      "Coconut husk fibre compressed into compact bales for handling, storage and bulk transport. A raw material for mattresses, upholstery, erosion-control products, mats, pots and ropes, with grade and bale weight agreed per order.",
    description: [
      "Our coir fibre bales contain coconut husk fibre compressed into compact bales for convenient handling, storage and bulk transport.",
      "Coir fibre is a raw material in mattress, upholstery and erosion-control product manufacturing. Depending on the fibre grade and further processing, it can also be made into mats, plant pots, ropes and other coir products.",
      "The compressed format reduces the space loose fibre would need and makes bulk supply practical. Tell us your intended application, fibre requirements and preferred packing, and we will propose a suitable supply option.",
    ],
    datasheet: {
      lead: "Tell us your intended use, required fibre grade, order quantity, preferred bale weight and destination port. We confirm the figures with the quotation.",
      // The source sheet (files/coir-fibre-bales.pdf) leaves every figure as
      // "Confirm": fibre grade, colour, fibre length, net bale weight and
      // tolerance, bale dimensions, moisture and impurity / pith content.
      // Replace the "on request" / "per agreed spec" rows when confirmed.
      keyFigures: [
        { value: "Husk fibre", label: "raw material" },
        { value: "Compressed", label: "bale format" },
        { value: "Sri Lanka", label: "country of origin" },
      ],
      lab: [],
      groups: [
        {
          title: "Fibre",
          rows: [
            { label: "Raw material", value: "coconut husk fibre" },
            { label: "Fibre grade", value: "on request", note: "mattress, mixed or other grades by availability" },
            { label: "Fibre length", value: "per grade", note: "range confirmed with quotation" },
            { label: "Colour", value: "per sample", note: "confirmed against the supplied lot" },
            { label: "Country of origin", value: "Sri Lanka" },
          ],
        },
        {
          title: "Bale",
          rows: [
            { label: "Packing form", value: "compressed bales" },
            { label: "Net bale weight", value: "to order", note: "weight and tolerance agreed per order" },
            { label: "Bale dimensions", value: "in the quotation", note: "length × width × height" },
          ],
        },
        {
          title: "Quality",
          aside: true,
          rows: [
            { label: "Moisture", value: "per agreed spec", note: "maximum and test method stated" },
            { label: "Impurity / pith", value: "per agreed spec", note: "maximum and measurement basis stated" },
          ],
        },
        {
          title: "Documentation",
          aside: true,
          rows: [
            { label: "Phytosanitary", value: "every shipment", note: "CDA export permit included" },
            { label: "Fumigation", value: "where required", note: "to destination import rules" },
          ],
        },
      ],
      advantages: [
        { label: "Natural raw material", detail: "made from coconut husk fibre" },
        { label: "Compact packing", detail: "compression reduces the space loose fibre occupies" },
        { label: "Convenient bulk handling", detail: "bales are easier to store, load and transport" },
        { label: "Versatile applications", detail: "different fibre grades serve a range of manufacturing needs" },
        { label: "Resource use", detail: "adds value to coconut husks through further processing" },
      ],
      options: [
        { label: "Fibre grade", detail: "chosen for your manufacturing process" },
        { label: "Fibre length", detail: "range agreed per grade" },
        { label: "Bale weight", detail: "your preferred weight, with agreed tolerance" },
        { label: "Strapping & wrapping", detail: "options confirmed per order" },
        { label: "Marking", detail: "labels and buyer markings" },
      ],
      footnote: "Application suitability depends on fibre grade, length, cleanliness and your manufacturing process. Final specifications are agreed before order confirmation.",
    },
    packing: {
      lead: "Fibre ships as compressed bales. Strapping, wrapping, marking and container loading are confirmed with the quotation.",
      units: [
        { icon: "bale", label: "Bale", value: "Compressed", note: "net weight agreed per order" },
        { icon: "container", label: "Container", value: "Per quotation", note: "net weight and bale count by container type" },
      ],
      steps: [
        "Coconut husk fibre is compressed into compact bales.",
        "Bales are strapped, and covered where the order calls for it.",
        "Loaded to the plan confirmed with your quotation.",
      ],
      notes: [
        { label: "Strapping", value: "on request", note: "plastic or metal, confirmed per order" },
        { label: "Wrapping", value: "on request", note: "unwrapped or covered, confirmed per order" },
        { label: "Marking", value: "to buyer spec", note: "labels and buyer markings" },
        { label: "Minimum order", value: "with quotation" },
        { label: "Loading plan", value: "with quotation", note: "net weight and bale count per container" },
      ],
      terms: [
        { label: "Incoterms", value: "FOB Colombo", note: "or CIF / DAP to your port or warehouse" },
        { label: "Container", value: "per quotation", note: "bale count by container type" },
        { label: "Lead time", value: "with quotation", note: "production and dispatch time confirmed per order" },
        { label: "Documents", value: "CDA permit · phytosanitary", note: "fumigation where the destination requires it" },
      ],
    },
    applications: [
      { icon: "slab", title: "Mattresses & bedding", detail: "Raw material for coir mattress layers and padding." },
      { icon: "fiber", title: "Furniture & vehicle upholstery", detail: "Fibre for cushioning and upholstery components after processing." },
      { icon: "leaf", title: "Erosion-control products", detail: "Used to manufacture coir blankets and related products." },
      { icon: "soil", title: "Drainage filtration", detail: "Fibre for suitable drainage-filter applications." },
      { icon: "brush", title: "Mats & floor coverings", detail: "Raw material for selected coir matting products." },
      { icon: "pot", title: "Horticultural products", detail: "Used to manufacture coir pots and liners." },
      { icon: "rope", title: "Yarn, twine & ropes", detail: "Suitable grades can be processed into twisted products." },
    ],
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
    photo: { src: "/images/product-growbags-1.avif", alt: "SK Ceylon coco grow bag with three planting holes cut in white UV-treated film", width: 1200, height: 800 },
    highlights: ["60:40 peat : chips standard", "UV-treated film, 2 yr"],
    name: "Coco Grow Bags",
    shortName: "Grow Bags",
    tagline: "A finished substrate system, built to your spec.",
    metaDescription:
      "Coco grow bags from Sri Lanka, 100 × 18 × 14 cm, in UV-treated film. Peat and chip blends from 100:0 to 50:50, with holes cut to your spec.",
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
    diagramImage: { src: "/images/product-growbags-2.avif", alt: "Grow bag diagram showing planting holes, plant spacing, irrigation openings, drainage cuts and the coco peat and husk chip blend, all set to buyer requirements", width: 1200, height: 800 },
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

/**
 * Display order for the catalog, homepage, footer, sitemap and forms.
 * Reorder the slugs here; a product missing from the list sorts last.
 */
const PRODUCT_ORDER = [
  "5kg-coco-peat-blocks",
  "grow-bags",
  "5kg-coco-chip-blocks",
  "coir-fibre-bales",
  "25kg-coco-peat-bales",
  "coco-peat-discs",
];

const orderOf = (slug: string) => {
  const index = PRODUCT_ORDER.indexOf(slug);
  return index === -1 ? PRODUCT_ORDER.length : index;
};

export const PRODUCTS: Product[] = ALL_PRODUCTS.filter(
  (p) => !HIDDEN_SLUGS.has(p.slug),
).sort((a, b) => orderOf(a.slug) - orderOf(b.slug));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
