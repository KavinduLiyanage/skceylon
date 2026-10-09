import type { Faq } from "./site";

/** One block of guide body content, rendered in order. */
export type GuideBlock =
  | { type: "h2"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type Guide = {
  slug: string;
  /** Page heading. */
  title: string;
  /** Search-result title without the brand; keep under about 55 characters. */
  metaTitle: string;
  /** Search-result description; keep to about 155 characters. */
  description: string;
  /** Category label shown above the title. */
  category: string;
  /** ISO date of first publication. */
  published: string;
  /** One or two sentences for the index card and the article lead. */
  summary: string;
  /** Three to five one-line takeaways shown before the body. */
  takeaways: string[];
  blocks: GuideBlock[];
  faqs: Faq[];
  /** Product slugs this guide relates to, in display order. */
  products: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: "washed-unwashed-buffered-coco-peat",
    title: "Washed, unwashed or buffered coco peat: which should you order?",
    metaTitle: "Washed vs Unwashed vs Buffered Coco Peat",
    description:
      "What washing and buffering do to coco peat, which grade suits nursery mixes, hydroponics, landscaping or bedding, and how to specify it on an order.",
    category: "Choosing a grade",
    published: "2026-10-09",
    summary:
      "Coco peat leaves the husk carrying salts. Whether those salts are rinsed out, and whether the material is treated to stop it holding back calcium, decides which crops it suits.",
    takeaways: [
      "Unwashed coco peat has a naturally high EC and suits soil amendment, landscaping and bedding, or buyers who wash it themselves.",
      "Washed low-EC coco peat, under 0.5 mS/cm at 1:5 v/v, is the standard grade for nursery mixes, potting and general horticulture.",
      "Buffered coco peat is washed and then treated with calcium nitrate, and is the right choice for fruiting crops on drip irrigation.",
      "Always specify the EC limit and the test method together; a limit without a method cannot be checked.",
    ],
    blocks: [
      { type: "h2", id: "where-the-salt-comes-from", text: "Where the salt comes from" },
      {
        type: "p",
        text: "Coco peat is the pith left after fibre is extracted from coconut husk. Coconut palms grow near the coast and take up sodium, potassium and chloride, which end up in the husk. Fresh pith therefore has a high electrical conductivity (EC), and if it is used straight away the salts compete with the crop for water and nutrients.",
      },
      {
        type: "p",
        text: "The second issue is less obvious. Pith has a high cation exchange capacity, and its exchange sites arrive loaded with sodium and potassium. When a grower feeds calcium and magnesium, the pith swaps those for its sodium and potassium during the first weeks, so the crop sees less calcium than the feed recipe intends. Washing deals with the first problem; buffering deals with the second.",
      },
      { type: "h2", id: "unwashed", text: "Unwashed coco peat" },
      {
        type: "p",
        text: "Unwashed material is compressed as it comes from the mill, with its natural EC. It is the cheapest grade and ships the same way as washed material. It suits uses where salt is not critical: soil amendment, landscaping, mulch and animal bedding. Substrate producers who have their own washing line also buy unwashed and process it themselves.",
      },
      {
        type: "p",
        text: "It is a poor choice for seedlings, salt-sensitive crops and any container growing where the roots have nowhere else to go.",
      },
      { type: "h2", id: "washed", text: "Washed low-EC coco peat" },
      {
        type: "p",
        text: "Washing means rinsing the pith with fresh water at the mill, before compression, until soluble salts fall below an agreed limit. The common horticultural specification is an EC under 0.5 mS/cm measured at 1:5 v/v. This is the grade to order for nursery and potting mixes, container growing and hydroponic blends where the crop will be fed a complete nutrient solution.",
      },
      {
        type: "p",
        text: "Washing must happen at source. A mill without fresh-water washing capability cannot produce reliable low-EC material by blending, which is why SK Ceylon buys only from mills that have it.",
      },
      { type: "h2", id: "buffered", text: "Buffered coco peat" },
      {
        type: "p",
        text: "Buffering starts with washed material and adds a soak in calcium nitrate solution, followed by a further rinse. The calcium displaces the sodium and potassium held on the exchange sites, so the pith no longer strips calcium out of the feed. The result is a substrate that behaves predictably from the first irrigation.",
      },
      {
        type: "p",
        text: "Buffered coco peat matters most for fruiting crops on drip, such as tomato, cucumber, pepper and strawberry, where calcium supply in the early weeks affects fruit quality, and for any crop planted straight into the substrate without a conditioning period. Growers who run a pre-plant calcium drench themselves can order washed material instead.",
      },
      {
        type: "table",
        caption: "Which grade for which use",
        head: ["Use", "Grade to order", "Why"],
        rows: [
          ["Soil amendment, landscaping, mulch", "Unwashed (high-EC)", "Salt is diluted in soil; cost matters more than EC"],
          ["Animal bedding", "Unwashed (high-EC)", "Absorbency, not salinity, is the requirement"],
          ["Nursery and potting mixes", "Washed low-EC", "Young plants are salt-sensitive"],
          ["Container growing, hydroponic blends", "Washed low-EC", "Roots are confined; salts cannot leach away"],
          ["Tomato, cucumber, pepper, strawberry on drip", "Buffered", "Early calcium supply affects yield and fruit quality"],
          ["Seed starting and propagation", "Washed low-EC, fine grade", "Seedlings tolerate the least salt"],
        ],
      },
      { type: "h2", id: "how-to-specify", text: "How to specify it on an order" },
      {
        type: "ul",
        items: [
          "State the grade: unwashed, washed or buffered.",
          "State the EC limit and the test method together, for example under 0.5 mS/cm at 1:5 v/v. The same material reads differently under different methods, so a limit on its own cannot be verified.",
          "State the pH range you need. Coco peat is naturally 5.5 to 6.5 and rarely needs adjusting.",
          "State the maximum moisture at dispatch. Under 20 % is usual for compressed products.",
          "Ask for a sample and an independent lab report before confirming a container, so you can check the numbers against your own method.",
        ],
      },
      {
        type: "callout",
        title: "What SK Ceylon supplies",
        text: "5 kg coco peat blocks come in low-EC washed and high-EC grades. Grow bags are washed as standard and buffered on request. Chip blocks, bales and discs can be washed or buffered to your specification.",
      },
    ],
    faqs: [
      {
        question: "Is buffered coco peat the same as washed coco peat?",
        answer:
          "No. All buffered coco peat is washed first, but buffering adds a calcium nitrate treatment that stops the pith holding back calcium from the feed. Washed material lowers soluble salts only.",
      },
      {
        question: "Can I wash unwashed coco peat myself?",
        answer:
          "Yes, with enough fresh water and drainage, and substrate producers often do. For growers it is usually cheaper to order washed material than to handle the water and the run-off.",
      },
      {
        question: "What EC should washed coco peat have?",
        answer:
          "The usual horticultural limit is under 0.5 mS/cm measured at 1:5 v/v. Always confirm the method, because a 1:1.5 extract or a saturated media extract of the same material gives a different number.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "25kg-coco-peat-bales"],
  },

  {
    slug: "coco-peat-ec-and-ph-explained",
    title: "Coco peat EC and pH explained: how to read a specification",
    metaTitle: "Coco Peat EC and pH Explained",
    description:
      "What EC and pH mean for coco peat, why the test method changes the number, what moisture content tells you, and how to read a supplier's specification.",
    category: "Specifications",
    published: "2026-10-09",
    summary:
      "Two numbers decide whether a batch of coco peat will perform: its electrical conductivity and its pH. Both are easy to measure and easy to misread.",
    takeaways: [
      "EC measures dissolved salts, in mS/cm. For washed coco peat the usual limit is under 0.5 mS/cm at 1:5 v/v.",
      "The extraction method changes the reading. 1:5 v/v, 1:1.5 v/v and saturated media extract are not interchangeable, so a specification must name the method.",
      "Coco peat is naturally pH 5.5 to 6.5, which suits most crops without liming.",
      "Moisture under 20 % at dispatch keeps freight weight down and the product stable in storage.",
    ],
    blocks: [
      { type: "h2", id: "what-ec-measures", text: "What EC measures" },
      {
        type: "p",
        text: "Electrical conductivity is a measure of the dissolved salts in a solution. Water conducts electricity better the more ions it carries, so a sample of coco peat is mixed with pure water, the water is tested, and the reading stands in for the salt content of the material. The unit is millisiemens per centimetre (mS/cm), which is the same as decisiemens per metre (dS/m).",
      },
      {
        type: "p",
        text: "For coco peat the salts of concern are sodium and chloride from the husk, and potassium, which is harmless in small amounts but can unbalance a feed recipe in larger ones. A high EC means the roots are competing with salt for water, and the symptoms look like drought even when the substrate is wet.",
      },
      { type: "h2", id: "why-the-method-matters", text: "Why the test method matters" },
      {
        type: "p",
        text: "The reading depends on how much water is used to extract the salts. Three methods are common. In the 1:5 v/v method, one part of coco peat is shaken with five parts of water. In the 1:1.5 v/v method, one part is mixed with one and a half parts of water, so the extract is more concentrated and reads higher for the same material. In the saturated media extract (SME) method, the sample is wetted only to saturation and the solution is drawn off, which gives a higher reading still.",
      },
      {
        type: "p",
        text: "Because of this, a limit such as 'EC under 0.5' is meaningless without its method. SK Ceylon publishes its figures at 1:5 v/v. If your laboratory or your buyer uses a different method, agree the equivalent limit before the order, rather than comparing numbers from different methods afterwards.",
      },
      {
        type: "table",
        caption: "Common EC extraction methods",
        head: ["Method", "Coco peat : water", "Typical reading for the same sample"],
        rows: [
          ["1:5 v/v", "1 : 5 by volume", "Lowest"],
          ["1:1.5 v/v", "1 : 1.5 by volume", "Higher"],
          ["Saturated media extract (SME)", "Wetted to saturation", "Highest"],
          ["Pour-through", "Drainage from a watered pot", "Varies with feed; used in-crop, not for specifying raw material"],
        ],
      },
      { type: "h2", id: "ph", text: "pH, and why coco peat rarely needs liming" },
      {
        type: "p",
        text: "pH describes how acidic or alkaline the substrate solution is, and it controls which nutrients stay available to the roots. Most crops do best between about 5.5 and 6.5. Coco peat sits naturally in that range, which is one of its practical advantages over sphagnum peat, which is strongly acidic and normally needs lime before use.",
      },
      {
        type: "p",
        text: "Two things shift the pH in use: the irrigation water, especially hard or alkaline water, and the fertiliser. A substrate specification only tells you the starting point. From the first irrigation, water quality and feed recipe take over.",
      },
      { type: "h2", id: "moisture", text: "Moisture content" },
      {
        type: "p",
        text: "Compressed coco peat is shipped partly dried, typically under 20 % moisture at dispatch. Lower moisture means more product per tonne of freight, blocks that hold their shape in handling, and less risk of mould in transit. It also means the material needs rehydrating before use; a 5 kg block takes up far more than its own weight in water.",
      },
      { type: "h2", id: "reading-a-spec", text: "Reading a supplier's specification" },
      {
        type: "ol",
        items: [
          "Find the EC figure and check that a method is stated next to it. If not, ask.",
          "Check the pH range. Anything inside 5.5 to 6.8 is normal for coco peat.",
          "Check moisture at dispatch and whether a maximum is stated.",
          "Look for the grade: washed, unwashed or buffered. An EC limit implies washing, but say so explicitly.",
          "Ask for an independent laboratory report and a physical sample before confirming a container. The sample lets you run your own test by your own method.",
        ],
      },
      {
        type: "callout",
        title: "SK Ceylon's standard specification",
        text: "Low-EC washed grade under 0.5 mS/cm at 1:5 v/v, pH 5.5 to 6.5, moisture under 20 % at dispatch. An independent lab report and samples are available on request.",
      },
    ],
    faqs: [
      {
        question: "Is EC the same as salinity?",
        answer:
          "EC is the measurement; salinity is what it indicates. A higher EC reading means more dissolved salts in the extract, which for coco peat usually means sodium, chloride and potassium from the husk.",
      },
      {
        question: "Why does my lab report a different EC from the supplier's?",
        answer:
          "Almost always because the extraction method differs. A 1:1.5 extract or a saturated media extract reads higher than a 1:5 extract of the same material. Compare like with like, or agree one method before the order.",
      },
      {
        question: "Do I need to adjust the pH of coco peat?",
        answer:
          "Usually not. Coco peat is naturally around pH 5.5 to 6.5, which suits most crops. Monitor the pH of the drainage once the crop is being fed, since water and fertiliser move it over time.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "25kg-coco-peat-bales", "coco-peat-discs"],
  },

  {
    slug: "coco-peat-container-loading",
    title: "How many coco peat blocks or grow bags fit in a 40 ft container?",
    metaTitle: "Coco Peat Blocks per 40 ft Container",
    description:
      "Loading figures for 5 kg coco peat blocks, grow bags and chip blocks per pallet and per 40 ft high-cube container, and what changes the quantity.",
    category: "Shipping",
    published: "2026-10-09",
    summary:
      "The container is the unit most buyers price in. These are the standard loading figures for SK Ceylon products, and the factors that make a real shipment differ from them.",
    takeaways: [
      "A 40 ft high-cube container takes 4,800 five-kilogram coco peat blocks on 20 pallets, or 5,120 loose-loaded.",
      "The same container takes 9,000 grow bag slabs on 20 pallets of 450.",
      "Destination road weight limits, not container space, often set the real quantity.",
      "Single pallets ship as LCL for trials, and exact counts are confirmed with each quotation.",
    ],
    blocks: [
      { type: "h2", id: "standard-figures", text: "Standard loading figures" },
      {
        type: "table",
        caption: "Per pallet and per 40 ft high-cube container",
        head: ["Product", "Per pallet", "Per 40 ft HC"],
        rows: [
          ["5 kg coco peat blocks, palletized", "240 blocks", "4,800 blocks (20 pallets)"],
          ["5 kg coco peat blocks, loose-loaded", "—", "5,120 blocks"],
          ["Coco grow bags, 100 × 18 × 14 cm", "450 slabs", "9,000 slabs (20 pallets)"],
          ["5 kg coco chip blocks", "420 blocks (LCL pallet)", "Quoted per order"],
          ["25 kg coco peat bales", "Per bale dimensions", "Quoted per order"],
          ["Coco peat discs", "Per carton size", "Quoted per order"],
          ["Coir fibre bales", "—", "Per bale weight and count"],
        ],
      },
      {
        type: "p",
        text: "These are the figures for standard sizes and a standard pallet pattern. Every quotation includes a loading plan with the exact count for the order.",
      },
      { type: "h2", id: "palletized-or-loose", text: "Palletized or loose-loaded?" },
      {
        type: "p",
        text: "Loose loading fits more product because there is no pallet taking up space: 5,120 blocks against 4,800. The trade-off is at the destination. Loose blocks are unloaded by hand, which takes labour and time at the warehouse, while pallets come off with a forklift in under an hour.",
      },
      {
        type: "p",
        text: "Buyers with a forklift and a tight unloading window usually choose pallets. Buyers moving the product straight into a mixing line, or with cheap labour at the receiving end, often choose loose. Both are standard, and the choice is yours.",
      },
      { type: "h2", id: "what-changes-the-count", text: "What changes the count" },
      {
        type: "ul",
        items: [
          "Destination weight limits. A 40 ft high-cube is rated for a far heavier payload than most roads allow. Many countries cap the gross weight of a loaded container on the road, and the shipping line or trucker will apply that cap, so the shipment is often weight-limited before it is space-limited. The loading plan is built around the destination's limit.",
          "Pallet configuration. Pallet size, stacking height and whether a pallet can be double-stacked all change how many units fit.",
          "Product dimensions. Custom block or slab sizes, and bales and cartons whose size is set per order, change the pattern entirely.",
          "Moisture. Compressed products are shipped at low moisture, under 20 %, partly so that weight stays predictable.",
        ],
      },
      { type: "h2", id: "trial-orders", text: "Trial orders and LCL" },
      {
        type: "p",
        text: "You do not need to commit to a container to test the material. Single pallets ship as less-than-container-load (LCL) consignments. Trial pallets are available for grow bags, and chip blocks ship as 420-block LCL pallets. The cost per unit is higher than a full container, but it lets you run the product on your own crop before scaling up.",
      },
      { type: "h2", id: "what-to-send", text: "What to send for an accurate loading plan" },
      {
        type: "ol",
        items: [
          "The product and size, or your own specification.",
          "The destination port and, if known, the inland delivery point. Road limits differ by country.",
          "Whether you can unload loose cargo, or need pallets.",
          "Monthly or annual volume, so the plan can be repeated.",
        ],
      },
      {
        type: "callout",
        title: "Terms",
        text: "SK Ceylon quotes FOB Colombo, or CIF and DAP to your port or warehouse, with a lead time of 3 to 5 weeks from order confirmation. The loading plan comes with the quotation.",
      },
    ],
    faqs: [
      {
        question: "How many 5 kg coco peat blocks fit in a 40 ft container?",
        answer:
          "4,800 blocks on 20 pallets of 240, or 5,120 blocks loose-loaded without pallets, subject to the weight limit at the destination.",
      },
      {
        question: "How many grow bags fit in a 40 ft container?",
        answer:
          "9,000 slabs of the standard 100 × 18 × 14 cm bag, on 20 pallets of 450 slabs each. Trial pallets are available for crop trials.",
      },
      {
        question: "Can I order less than a container?",
        answer:
          "Yes. Single pallets ship as LCL consignments for trials and smaller orders. Chip blocks, for example, ship as 420-block LCL pallets.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "5kg-coco-chip-blocks"],
  },

  {
    slug: "grow-bag-blend-ratio-by-crop",
    title: "Choosing a grow bag blend ratio by crop",
    metaTitle: "Grow Bag Peat-to-Chip Ratio by Crop",
    description:
      "How the peat-to-chip ratio in a coco grow bag changes water holding and air porosity, and which ratio suits tomato, cucumber, strawberry, roses and other crops.",
    category: "Grow bags",
    published: "2026-10-09",
    summary:
      "A grow bag's blend sets the balance between water it holds and air it keeps around the roots. The right ratio depends on the crop, the irrigation strategy and the climate.",
    takeaways: [
      "More peat holds more water; more chips hold more air and drain faster.",
      "60:40 peat to chips is the standard grow bag mix and suits tomato, cucumber, pepper, eggplant and cut flowers.",
      "Strawberry, leafy crops and cooler climates lean towards 80:20; crops needing strong root oxygenation and warm climates lean towards 50:50.",
      "Match the ratio to how often you can irrigate, not only to the crop.",
    ],
    blocks: [
      { type: "h2", id: "what-the-ratio-does", text: "What the ratio does" },
      {
        type: "p",
        text: "Coir peat is the fine fraction of the husk. It holds water well, with a high water-holding capacity, and rewets easily after drying. Husk chips are the coarse fraction, cut to 6 to 7 mm for grow bags. They create large pores that drain freely and stay filled with air. Blending the two sets the air-to-water balance of the slab.",
      },
      {
        type: "p",
        text: "A peat-heavy blend buffers the crop against missed irrigations and suits cooler, duller conditions where water demand is low. A chip-heavy blend needs more frequent irrigation but keeps roots oxygenated in warm conditions and under high-frequency drip, where a wetter slab would suffocate them.",
      },
      {
        type: "table",
        caption: "The ratios most often requested",
        head: ["Peat : chips", "Character", "Typically used for"],
        rows: [
          ["100 : 0", "Highest water-holding capacity", "Soilless mixes, seed starting, container growing"],
          ["80 : 20", "High moisture retention with moderate aeration", "Strawberry, leafy crops, cooler climates"],
          ["70 : 30", "Balanced water retention and aeration", "The common horticultural blend for greenhouse vegetables"],
          ["60 : 40", "Free draining with good water-holding; the standard grow bag mix", "Tomato, cucumber, pepper, eggplant, cut flowers"],
          ["50 : 50", "Improved drainage and air porosity", "Crops needing strong root oxygenation; warm climates and high-frequency irrigation"],
        ],
      },
      { type: "h2", id: "by-crop", text: "Starting points by crop" },
      {
        type: "ul",
        items: [
          "Tomato, cucumber, pepper and eggplant: 60:40 to 70:30. High-wire vegetables on drip want free drainage with enough reserve to carry the plant between irrigations.",
          "Strawberry on gutters or tabletops: 50:50 to 60:40 in warm regions and under frequent fertigation; 80:20 where the climate is cooler and irrigation less frequent.",
          "Roses and gerbera: 50:50 to 60:40. Cut-flower crops run for several years on one slab, so the structure has to resist compaction over time, which favours chips.",
          "Melon and other heavy-fruiting vines: 60:40 to 70:30. High water demand at fruit set argues for more peat.",
          "Leafy crops and herbs: 80:20. Short cycles and steady moisture matter more than aeration.",
        ],
      },
      {
        type: "p",
        text: "These are starting points. Growers with experience on a given slab often fine-tune the ratio against their own irrigation regime, and SK Ceylon presses any ratio to order.",
      },
      { type: "h2", id: "irrigation-and-climate", text: "Irrigation and climate come first" },
      {
        type: "p",
        text: "Two growers with the same crop can need different blends. A grower in a hot climate running drip pulses every twenty minutes needs air in the slab more than water, so a 50:50 blend keeps roots healthy. A grower in a cool, cloudy region irrigating a few times a day needs the slab to hold water between pulses, so 70:30 or 80:20 is safer. Tell your supplier the irrigation frequency and the climate, not just the crop.",
      },
      { type: "h2", id: "beyond-the-ratio", text: "Beyond the ratio" },
      {
        type: "ul",
        items: [
          "Buffering. For fruiting crops on drip, ask for buffered substrate so the slab does not hold back calcium in the first weeks.",
          "Hole pattern. Planting holes and drain cuts are made at the factory; match the hole count and spacing to your planting density and drip layout.",
          "Slab size. The standard bag expands to 100 × 18 × 14 cm, about 25 litres. Other sizes are produced against order.",
        ],
      },
      {
        type: "callout",
        title: "Ask for a recommendation",
        text: "Tell SK Ceylon the crop, the irrigation strategy and the climate, and we will recommend a ratio. Trial pallets are available so you can run a blend on your own crop before committing to a container.",
      },
    ],
    faqs: [
      {
        question: "What is the standard grow bag blend?",
        answer:
          "60 % dust-free coir peat to 40 % husk chips of 6 to 7 mm. It is free draining with good water holding and suits tomato, cucumber, pepper, eggplant and cut flowers.",
      },
      {
        question: "Which blend is best for strawberries?",
        answer:
          "Usually 50:50 to 60:40 in warm regions with frequent fertigation, and 80:20 in cooler climates where irrigation is less frequent. The irrigation regime matters as much as the crop.",
      },
      {
        question: "Can I order a ratio that is not listed?",
        answer:
          "Yes. Slabs can be pressed in any peat-to-chip ratio. The listed ratios are the ones most often requested.",
      },
    ],
    products: ["grow-bags", "5kg-coco-chip-blocks", "5kg-coco-peat-blocks"],
  },

  {
    slug: "how-to-hydrate-coco-peat-blocks",
    title: "How to hydrate and use a 5 kg coco peat block",
    metaTitle: "How to Hydrate a 5 kg Coco Peat Block",
    description:
      "Step-by-step guide to expanding a compressed 5 kg coco peat block, how much water it needs, what volume to expect, and how to prepare it for planting.",
    category: "Using the product",
    published: "2026-10-09",
    summary:
      "A compressed block is a dry, dense brick until it meets water. Hydrating it properly takes a few minutes and decides how the substrate behaves for the rest of the crop.",
    takeaways: [
      "A 5 kg block expands to at least 12 litres per kilogram, so 60 litres or more of loose substrate.",
      "Add water in stages rather than all at once; roughly 3 to 4 litres per kilogram is typical.",
      "Break the block up as it swells and let excess water drain before mixing or planting.",
      "Store unused blocks dry, off the floor and out of the sun; they keep for a long time compressed.",
    ],
    blocks: [
      { type: "h2", id: "what-you-need", text: "What you need" },
      {
        type: "ul",
        items: [
          "A container or clean floor area with drainage. A 5 kg block becomes 60 litres or more, so allow space.",
          "Clean water. Use the same water you will irrigate with, so the substrate starts at the pH and EC the crop will see.",
          "A fork or rake to break up the block, and a wheelbarrow or mixer if you are blending.",
        ],
      },
      { type: "h2", id: "steps", text: "Step by step" },
      {
        type: "ol",
        items: [
          "Place the block in the container or on the floor. If the block was shrink-wrapped, remove the wrap.",
          "Add water gradually. A 5 kg block typically takes around 15 to 20 litres, roughly 3 to 4 litres per kilogram. Pour a third, wait a few minutes for it to soak in, then add more.",
          "Let the block swell. Compressed coir takes up water from the outside in; the core takes longest. Give it 15 to 30 minutes.",
          "Break it up. Use a fork to pull the swollen layers apart, working from the edges to the core, until no dry lumps remain. Add a little more water if the core is still dry.",
          "Let excess water drain. The expanded substrate should be moist throughout, not waterlogged.",
          "Mix or plant. Blend with chips, perlite or other ingredients if your recipe calls for it, or fill pots and trays directly.",
        ],
      },
      { type: "h2", id: "how-much-you-get", text: "How much substrate you get" },
      {
        type: "p",
        text: "SK Ceylon's 5 kg blocks expand to a minimum of 12 litres per kilogram, so 60 litres or more per block, with higher-purity grades reaching 15 to 18 litres per kilogram. For planning, count 60 litres per block and treat anything above that as a bonus. A 4,800-block container is therefore at least 288,000 litres of growing medium.",
      },
      { type: "h2", id: "before-planting", text: "Before planting" },
      {
        type: "p",
        text: "If you ordered washed low-EC material, the substrate is ready to use. If the crop is salt-sensitive or you want to check the batch, test the EC of the first drainage; it should sit close to the EC of the water you added. If you ordered washed but not buffered material and are growing a fruiting crop on drip, run a pre-plant drench with calcium nitrate solution and drain it, which does what buffering does at the mill.",
      },
      {
        type: "p",
        text: "Unwashed material needs rinsing until the drainage EC falls to your target before any crop goes in. This takes a lot of water, which is why most growers order washed material in the first place.",
      },
      { type: "h2", id: "storage", text: "Storing blocks" },
      {
        type: "ul",
        items: [
          "Keep compressed blocks dry. Damp blocks start to swell and can grow mould.",
          "Store on pallets or shelving, off a bare floor, and under cover out of direct sun.",
          "Once expanded, use the substrate within a few days or keep it covered and moist; it is a natural material and will dry out or start to break down if left open.",
        ],
      },
      {
        type: "callout",
        title: "Blocks to your specification",
        text: "SK Ceylon's 5 kg blocks are 30 × 30 × 15 cm, compressed 5 : 1, in low-EC washed and high-EC grades. Blocks ship unwrapped on pallets as standard, with shrink wrap or a printed sleeve on request.",
      },
    ],
    faqs: [
      {
        question: "How much water does a 5 kg coco peat block need?",
        answer:
          "Typically around 15 to 20 litres, roughly 3 to 4 litres per kilogram, added in stages. Stop when the block has fully expanded and no dry core remains.",
      },
      {
        question: "How much substrate does one block make?",
        answer:
          "At least 60 litres, based on a minimum expansion of 12 litres per kilogram. Higher-purity grades reach 15 to 18 litres per kilogram.",
      },
      {
        question: "Can I hydrate a block with saline water?",
        answer:
          "It is better not to. The substrate takes on the EC of the water used to expand it, so use the water you will irrigate with, or better quality.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "25kg-coco-peat-bales", "coco-peat-discs"],
  },
  {
    slug: "coco-peat-vs-peat-moss",
    title: "Coco peat vs peat moss: which growing medium should you buy?",
    metaTitle: "Coco Peat vs Peat Moss Compared",
    description:
      "How coco peat and sphagnum peat moss compare on pH, wetting, nutrient holding, structure, shipping and sustainability, and when each one is the better buy.",
    category: "Choosing a grade",
    published: "2026-10-09",
    summary:
      "Peat moss was the default substrate for a century. Coco peat now replaces it in most professional mixes. The two behave differently enough that switching needs a few recipe changes.",
    takeaways: [
      "Coco peat is naturally pH 5.5 to 6.5 and needs no lime; peat moss is pH 3.5 to 4.5 and must be limed before use.",
      "Coco peat rewets easily after drying out, where dry peat moss repels water and needs a wetting agent.",
      "Coco peat holds potassium and sodium on its exchange sites, so feed recipes need more calcium and less potassium in the first weeks, or a buffered grade.",
      "Coco peat ships compressed 5:1 and is a by-product of coconut harvesting, which is why peat-restricted markets are moving to it.",
    ],
    blocks: [
      { type: "h2", id: "what-each-one-is", text: "What each one is" },
      {
        type: "p",
        text: "Sphagnum peat moss is partially decomposed moss harvested from drained bogs, mainly in Canada, the Baltic states and Ireland. The bogs took thousands of years to form and recover very slowly once cut. Coco peat, also called coir pith, is the spongy material left after fibre is extracted from coconut husks. Coconuts are harvested every year, so the supply renews with the crop.",
      },
      {
        type: "p",
        text: "Both are used for the same job: a lightweight, water-holding base for potting mixes, propagation and container growing. The differences are in chemistry and handling rather than in what they are for.",
      },
      { type: "h2", id: "side-by-side", text: "Side by side" },
      {
        type: "table",
        caption: "Typical properties of horticultural grades",
        head: ["Property", "Coco peat", "Sphagnum peat moss"],
        rows: [
          ["Natural pH", "5.5 – 6.5", "3.5 – 4.5"],
          ["Lime needed before use", "No", "Yes, usually 3 – 6 kg per m³"],
          ["Rewetting after drying out", "Easy; absorbs water readily", "Difficult; dry peat repels water"],
          ["Water-holding capacity", "High", "Very high"],
          ["Air porosity", "Good, and stable over the crop", "Good when fresh; falls as it decomposes"],
          ["Cation exchange capacity", "High, loaded with K and Na", "High, loaded with H"],
          ["Soluble salts (EC)", "Varies by grade; washed is < 0.5 mS/cm", "Very low"],
          ["Breakdown during use", "Slow; high lignin content", "Faster; shrinks and compacts"],
          ["Shipping form", "Compressed 5:1 in blocks, bales or slabs", "Loose compressed bales, about 2:1"],
          ["Source", "Annual coconut harvest by-product", "Drained peat bog, slow to regenerate"],
        ],
      },
      { type: "h2", id: "ph-and-lime", text: "pH and lime" },
      {
        type: "p",
        text: "Peat moss is strongly acidic and is always limed before it goes into a mix, which adds a step, a cost and a source of batch variation. Coco peat arrives inside the range most crops want and needs no adjustment. The pH of coco peat does drift with the irrigation water over a long crop, so it is still worth checking the drain solution on a schedule, but there is no start-up correction.",
      },
      { type: "h2", id: "wetting-and-structure", text: "Wetting and structure" },
      {
        type: "p",
        text: "The practical difference growers notice first is rewetting. A peat moss mix that dries out becomes hydrophobic: water runs down the gap between the root ball and the pot wall and out of the bottom. Coco peat takes water back up readily, which makes it more forgiving under drip irrigation and in retail where pots sit unwatered.",
      },
      {
        type: "p",
        text: "Coco peat also keeps its structure for longer. Peat moss continues to decompose in the pot, losing air space and compacting over a long crop. Coco peat is high in lignin and breaks down slowly, so air porosity in month six is close to what it was at planting. For long-cycle crops such as tomato, cucumber and soft fruit, this is the main reason the industry moved to coco slabs.",
      },
      { type: "h2", id: "nutrition", text: "Nutrition and the first weeks" },
      {
        type: "p",
        text: "This is where switching needs care. Coco peat holds potassium and sodium on its exchange sites. In the first weeks of a crop it releases potassium and takes up calcium and magnesium from the feed, so a recipe written for peat moss will under-supply calcium on coco. Growers either order buffered coco peat, which has been pre-treated with calcium nitrate, or raise calcium and lower potassium in the starter feed.",
      },
      {
        type: "p",
        text: "Coco peat also carries more soluble salt than peat moss unless it is washed. For containers and propagation, specify washed low-EC material, under 0.5 mS/cm at 1:5 v/v. For salt-tolerant landscape use, unwashed material is fine and cheaper.",
      },
      { type: "h2", id: "cost-and-shipping", text: "Cost and shipping" },
      {
        type: "p",
        text: "Coco peat ships at a 5:1 compression ratio, so a 40 ft high-cube container of 5 kg blocks expands to roughly 300 cubic metres of substrate. Peat moss bales are compressed about 2:1. Per cubic metre of finished mix delivered, coco peat is usually cheaper to freight even over a longer sea route, though the comparison depends on the destination and the moisture content shipped.",
      },
      { type: "h2", id: "sustainability", text: "Sustainability and regulation" },
      {
        type: "p",
        text: "Peat bogs store large amounts of carbon, and harvesting releases it. Several European markets, the United Kingdom among them, are phasing out horticultural peat in retail and professional use, and many garden-centre chains and certification schemes already require peat-free mixes. Coco peat is the main replacement because it is the by-product of an existing crop and performs most like peat. Its own footprint is mostly sea freight and the fresh water used for washing, which is why the washing is done at the mill in Sri Lanka rather than at the destination.",
      },
      { type: "h2", id: "which-to-choose", text: "Which to choose" },
      {
        type: "ul",
        items: [
          "Long-cycle fruiting crops on drip, such as tomato, cucumber, pepper and strawberry: coco grow bags, buffered.",
          "Nursery and potting mixes, propagation plugs: washed low-EC coco peat blocks or discs, usually blended with chips or perlite for extra air.",
          "Mixes that must be peat-free for a certification scheme or retail customer: coco peat, with the EC and buffering specified on the order.",
          "Acid-loving crops such as blueberry and azalea: peat moss still has an edge because of its low pH, or coco peat with sulphur added to the feed.",
          "Existing peat recipes that cannot be reformulated: stay on peat, or blend coco in at 30 to 50 % as a first step.",
        ],
      },
      {
        type: "callout",
        title: "What SK Ceylon supplies",
        text: "Washed low-EC and buffered coco peat as 5 kg blocks, 25 kg bales, discs and grow bags, with chip blocks for adding air to a mix. Every product ships against a written EC, pH and moisture specification, with an independent lab report on request.",
      },
    ],
    faqs: [
      {
        question: "Is coco peat better than peat moss?",
        answer:
          "For most container and greenhouse crops, yes: it needs no lime, rewets easily and keeps its structure longer. Peat moss is still preferred for acid-loving crops and in recipes that were developed around it.",
      },
      {
        question: "Can I replace peat moss with coco peat one for one?",
        answer:
          "Volume for volume, yes, but drop the lime and adjust the feed: more calcium and less potassium in the first weeks, or order buffered coco peat. Washed low-EC material is essential for containers.",
      },
      {
        question: "Does coco peat hold as much water as peat moss?",
        answer:
          "Slightly less at saturation, but it releases water to the plant more readily and rewets after drying out, so in practice irrigation is easier to manage.",
      },
      {
        question: "Is coco peat sustainable?",
        answer:
          "It is a by-product of the annual coconut harvest, so supply renews each year, whereas peat bogs take millennia to form. The main footprint is washing water and sea freight.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "5kg-coco-chip-blocks"],
  },

  {
    slug: "how-to-import-coco-peat-from-sri-lanka",
    title: "How to import coco peat from Sri Lanka: documents, Incoterms and lead times",
    metaTitle: "Importing Coco Peat from Sri Lanka: A Buyer's Guide",
    description:
      "The steps, documents and shipping terms involved in importing coco peat and coir from Sri Lanka: samples, specification, FOB vs CIF, export permits, phytosanitary certificates and lead time.",
    category: "Shipping",
    published: "2026-10-09",
    summary:
      "A first container from Sri Lanka is a straightforward process if the specification is agreed before production starts and the paperwork is prepared against the rules at your end. Here is the sequence from enquiry to delivery.",
    takeaways: [
      "Agree the written specification (EC, pH, moisture, size, packing) before confirming; it is what the lab report and the goods are checked against.",
      "FOB Colombo is the usual term; CIF or DAP shifts freight and insurance to the exporter for buyers who prefer one price to the door.",
      "Every shipment carries a Coconut Development Authority export permit and a phytosanitary certificate; fumigation is added where the destination requires it.",
      "Allow 3 to 5 weeks from order confirmation to dispatch, plus the sailing time to your port.",
    ],
    blocks: [
      { type: "h2", id: "why-sri-lanka", text: "Why Sri Lanka" },
      {
        type: "p",
        text: "Sri Lanka and southern India supply most of the world's coco peat. Sri Lankan material comes from the coconut triangle north of Colombo, and the island's coir industry is older than the horticultural use of pith, so the milling, washing and compression infrastructure is mature. Exports are regulated by the Coconut Development Authority (CDA), which licenses exporters and issues a quality certificate for each consignment.",
      },
      { type: "h2", id: "step-by-step", text: "The process, step by step" },
      {
        type: "ol",
        items: [
          "Enquiry. Send the product, the grade (washed, unwashed or buffered), the quantity in containers or pallets, the destination port and your target delivery date. If you have a specification sheet from a current supplier, send that too.",
          "Quotation and specification. The quotation comes with a written specification, a packing specification and a loading plan for the container. Check every figure against what your crop needs, especially the EC limit and its test method.",
          "Sample and lab report. Ask for a sample of the material and an independent lab report for EC, pH and moisture. Test the sample with your own method before confirming, since methods differ.",
          "Order confirmation and payment terms. Confirm the specification, quantity, Incoterm and delivery window in writing. Payment terms are agreed at this stage; an advance with the balance against shipping documents is common for a first order, and letters of credit are accepted for larger volumes. Confirm the exact terms on your quotation.",
          "Production and quality checks. Material is sourced from mills that meet the specification, tested, compressed and packed. Allow 3 to 5 weeks from confirmation to dispatch for standard products.",
          "Export documentation. The exporter obtains the CDA export permit and quality certificate, the phytosanitary certificate from the plant quarantine service, and arranges fumigation if your import rules require it.",
          "Loading and shipping. The container is loaded to the agreed plan, photographed, sealed and delivered to the Port of Colombo. Under FOB, your forwarder's line takes over from here; under CIF or DAP, the exporter books the freight.",
          "Documents and customs clearance. You receive the commercial invoice, packing list, bill of lading, certificate of origin, CDA certificate and phytosanitary certificate, and clear the goods with your broker.",
        ],
      },
      { type: "h2", id: "incoterms", text: "FOB, CIF or DAP" },
      {
        type: "table",
        caption: "What each term covers",
        head: ["Term", "Exporter pays", "You pay", "Choose it when"],
        rows: [
          ["FOB Colombo", "Everything up to and including loading at Colombo port", "Sea freight, insurance, destination charges, customs, inland delivery", "You have a forwarder or a freight contract and want control of the sailing"],
          ["CIF your port", "As FOB plus sea freight and marine insurance to your port", "Destination charges, customs, inland delivery", "You want one price to the port without arranging freight"],
          ["DAP your warehouse", "As CIF plus destination handling and inland transport to your door", "Import duty and clearance", "You want a delivered price and no freight administration"],
        ],
      },
      {
        type: "p",
        text: "Most repeat buyers use FOB because their freight rates are better than a single exporter can obtain. First-time buyers often start on CIF and move to FOB once they have a forwarder in place. Either way, the product price is the same; only the freight and risk allocation change.",
      },
      { type: "h2", id: "documents", text: "Documents that travel with the shipment" },
      {
        type: "ul",
        items: [
          "Commercial invoice and packing list, matching the specification and the loading plan.",
          "Bill of lading from the shipping line, or a sea waybill if you prefer telex release.",
          "Certificate of origin, needed for preferential duty under trade agreements your country has with Sri Lanka.",
          "CDA export permit and quality certificate, confirming the consignment was inspected and cleared for export as a coconut product.",
          "Phytosanitary certificate, issued for every shipment because coco peat and coir are plant products. Most countries require it at import.",
          "Fumigation certificate, where your destination requires treatment. Some markets accept heat treatment or a declaration instead; tell the exporter what your plant health authority asks for.",
          "Independent lab report, if requested, so the EC, pH and moisture of the batch can be filed with the shipment.",
        ],
      },
      { type: "h2", id: "import-rules", text: "Import rules at your end" },
      {
        type: "p",
        text: "Requirements differ by country, and the exporter prepares documents against the rules you give them. Before ordering, check with your plant health authority or customs broker whether an import permit is needed, whether fumigation or another treatment is mandatory, and which tariff code applies. Coco peat is normally classified as a vegetable product under HS heading 1404 or, when sold as a growing medium, under 2703 or 3824 depending on the country, and the duty rate follows from that.",
      },
      { type: "h2", id: "lead-time", text: "Lead time" },
      {
        type: "p",
        text: "Standard products dispatch 3 to 5 weeks after order confirmation. Custom sizes, buffered grades and printed grow bag film take longer and are confirmed with the quotation. Add the sailing time from Colombo: roughly 2 to 3 weeks to the Middle East and India, 3 to 4 weeks to East Asia, and 4 to 6 weeks to Europe, subject to the line and transhipment. Order at least two months ahead of the season you need the material for, and more during the peak demand from January to April.",
      },
      { type: "h2", id: "what-to-check-on-arrival", text: "What to check on arrival" },
      {
        type: "ul",
        items: [
          "Seal number against the bill of lading before opening.",
          "Unit count against the packing list and loading plan.",
          "Moisture and compression on a sample of blocks or slabs, and the condition of wrapping and pallets.",
          "EC and pH of a hydrated sample, using the method stated on the specification, against the lab report.",
        ],
      },
      {
        type: "callout",
        title: "SK Ceylon's terms",
        text: "We quote FOB Colombo, or CIF and DAP to your port or warehouse, in 40 ft high-cube containers or LCL pallets for trials. CDA permit and phytosanitary certificate come with every shipment, with fumigation where you need it, and a lead time of 3 to 5 weeks from order confirmation.",
      },
    ],
    faqs: [
      {
        question: "Do I need an import permit for coco peat?",
        answer:
          "Some countries require one because coco peat is a plant product; others only require a phytosanitary certificate at the border. Check with your plant health authority or customs broker before you order, and tell the exporter what they ask for.",
      },
      {
        question: "What is the minimum order for importing coco peat?",
        answer:
          "A single pallet shipped as LCL is enough for a trial. Container orders are priced per 40 ft high-cube, and the minimum for each product is stated with the quotation.",
      },
      {
        question: "How long does it take to import coco peat from Sri Lanka?",
        answer:
          "Allow 3 to 5 weeks for production and dispatch, then 2 to 6 weeks of sailing depending on your port. Two to three months from order to delivery is a safe planning figure for a first container.",
      },
      {
        question: "Should I buy FOB or CIF?",
        answer:
          "FOB if you have a freight forwarder and want to control the sailing and rate; CIF or DAP if you want a single price to the port or your warehouse. The product price does not change between them.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "25kg-coco-peat-bales"],
  },

  {
    slug: "coco-peat-price-what-drives-it",
    title: "What drives the price of coco peat, and how to compare quotations",
    metaTitle: "Coco Peat Price: What Drives It and How to Compare",
    description:
      "Why coco peat prices differ between suppliers and seasons: grade, washing, buffering, compression, packing, freight and moisture, and how to compare quotes on a like-for-like basis.",
    category: "Buying",
    published: "2026-10-09",
    summary:
      "Two quotations for ‘5 kg coco peat blocks’ can differ by half and both be fair. The difference is almost always in the specification, the packing and what the price includes. This guide explains what moves the number.",
    takeaways: [
      "Grade is the biggest factor: unwashed, washed low-EC and buffered material are three different products at three different prices.",
      "Compare on delivered cost per expanded cubic metre, not price per block or per ton, because moisture and expansion differ between suppliers.",
      "Packing, pallets, printed film and retail labelling can add more to the landed cost than the material itself.",
      "Prices move with the season: demand peaks before the northern spring and supply tightens in the Sri Lankan monsoon months.",
    ],
    blocks: [
      { type: "h2", id: "grade", text: "Grade: unwashed, washed or buffered" },
      {
        type: "p",
        text: "Unwashed coco peat is the base material, compressed as it comes from the mill. Washing it to a low-EC specification takes fresh water, time and drying capacity, and a share of the material is lost in the process, so washed material costs more. Buffering adds a calcium nitrate soak and a second rinse, with the chemical and the extra handling on top. A buffered grade can cost noticeably more than an unwashed one for the same block, and a quotation that does not state the grade and the EC limit cannot be compared with one that does.",
      },
      { type: "h2", id: "moisture-and-expansion", text: "Moisture and expansion" },
      {
        type: "p",
        text: "A price per ton is a price for water as much as for pith unless the moisture is fixed. Material shipped at 25 % moisture carries a quarter of its weight as water; material at 15 % carries far less. Always compare quotes at the same stated maximum moisture, or ask for the price on a dry-weight basis.",
      },
      {
        type: "p",
        text: "Expansion matters for the same reason. A block that expands to 60 litres gives you more substrate than one that expands to 50, and the difference comes from the fibre and pith ratio, the particle size and the compression. The fair comparison is the delivered cost per cubic metre of usable substrate after hydration, which is what your mixing line or your grow bags actually consume.",
      },
      { type: "h2", id: "particle-size-and-fibre", text: "Particle size and fibre content" },
      {
        type: "p",
        text: "Sieved grades with a controlled particle size, or with fibre removed for propagation plugs, cost more than the mill's standard output. Chip blocks, where the husk is cut rather than milled, are a different product again. If your application tolerates a wider particle range, say so; it is the cheapest specification to meet.",
      },
      { type: "h2", id: "packing", text: "Packing and presentation" },
      {
        type: "ul",
        items: [
          "Loose-loaded blocks are the cheapest to ship and the most expensive to unload. Pallets add cost at origin and save it at the destination.",
          "Individually shrink-wrapped blocks with a printed label cost more than bulk-wrapped pallets of unprinted blocks, and are only worth it for retail.",
          "Printed grow bag film, custom hole patterns and drip-hole placement add tooling and set-up cost that is spread over the order, so the per-slab premium falls with volume.",
          "Custom block and bale dimensions change the loading pattern and often reduce the count per container, which raises the freight share per unit.",
        ],
      },
      { type: "h2", id: "freight", text: "Freight and Incoterms" },
      {
        type: "p",
        text: "Sea freight from Colombo varies by route, by season and by the state of the container market, and it can be a large share of the landed cost for a low-value, high-volume product. A FOB price excludes it; a CIF or DAP price includes it. When you compare a FOB quote with a CIF quote, add your own freight, insurance and destination charges to the FOB figure first. Container utilisation matters too: a product that loads 5,120 units loose against 4,800 on pallets spreads the same freight over more units.",
      },
      { type: "h2", id: "season", text: "Season and supply" },
      {
        type: "p",
        text: "Demand for coco peat peaks from January to April as growers in the northern hemisphere prepare for spring, and prices and lead times rise with it. On the supply side, the south-west monsoon from May to September slows drying at the mills in Sri Lanka, which tightens the availability of low-moisture washed material. Buyers who can confirm volume for the year and take delivery in the quieter months generally secure better pricing than those buying spot in the peak.",
      },
      { type: "h2", id: "quality-assurance", text: "Testing and documentation" },
      {
        type: "p",
        text: "An independent lab report, product samples before confirmation and a written specification add a small cost to the exporter and remove most of the risk for the buyer. A quotation that includes them is rarely the cheapest on paper, but a container of the wrong EC costs far more than the testing would have.",
      },
      { type: "h2", id: "how-to-compare", text: "How to compare quotations" },
      {
        type: "ol",
        items: [
          "Put every quote on the same Incoterm. Add freight, insurance and destination charges to FOB prices.",
          "Check the grade, the EC limit and its test method, and the maximum moisture are the same. If not, ask each supplier to requote to one specification.",
          "Convert to cost per expanded cubic metre using each supplier's stated expansion, not a nominal figure.",
          "Add the cost of unloading: labour for loose cargo, or the pallet surcharge.",
          "Note what documentation and testing is included, and the lead time.",
        ],
      },
      {
        type: "callout",
        title: "Ask for a like-for-like quotation",
        text: "Send us the specification you are currently buying to, or the one you need, with the quantity and destination port, and we will quote the same material on the same terms so the comparison is direct.",
      },
    ],
    faqs: [
      {
        question: "How much does coco peat cost per ton?",
        answer:
          "It depends on the grade, moisture, packing and Incoterm, and it moves with the season and freight market, so a single figure is not meaningful. Request a quotation with your specification and destination port for a current price.",
      },
      {
        question: "Why is washed coco peat more expensive than unwashed?",
        answer:
          "Washing uses fresh water, drying capacity and time, and loses some material in the process. Buffering adds a calcium nitrate treatment on top. Each step is a real cost at the mill.",
      },
      {
        question: "Is it cheaper to buy coco peat loose or on pallets?",
        answer:
          "Loose is cheaper per block at origin and fits more in the container, but costs labour to unload. Pallets cost more at origin and come off with a forklift. The right choice depends on your warehouse.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "25kg-coco-peat-bales", "grow-bags"],
  },

  {
    slug: "coir-fibre-grades-explained",
    title: "Coir fibre grades explained: bristle, mattress and mixed fibre",
    metaTitle: "Coir Fibre Grades: Bristle, Mattress and Mixed",
    description:
      "The difference between brown and white coir, bristle, mattress and mixed fibre grades, what each is used for, and the specifications to agree when buying coir fibre bales.",
    category: "Choosing a grade",
    published: "2026-10-09",
    summary:
      "Coir fibre is sold by grade, and the grade decides what a manufacturer can make from it. This guide covers the grades produced in Sri Lanka, their uses and the figures to fix on an order.",
    takeaways: [
      "Brown coir comes from mature husks and is the fibre used for mattresses, upholstery, brushes, ropes and erosion control; white coir from green husks goes into finer yarn and mats.",
      "Bristle fibre is the long, stiff fraction; mattress fibre is the short, springy fraction; mixed fibre is the two together as they leave the mill.",
      "Length, colour, moisture, impurity or pith content and bale weight are the five figures to agree before ordering.",
      "Bales are compressed to the buyer's weight, with strapping and wrapping chosen for the destination.",
    ],
    blocks: [
      { type: "h2", id: "brown-and-white", text: "Brown coir and white coir" },
      {
        type: "p",
        text: "Coir is the fibre from the husk that surrounds the coconut shell. Husks from mature, brown coconuts give brown coir: thick, strong fibre with a high lignin content, which is what most industrial buyers want. Husks from green coconuts, harvested before they ripen and soaked for months in water, give white coir: finer, paler and more flexible, used for spinning fine yarn and weaving mats. Sri Lanka's export trade is mainly in brown fibre, and that is what this guide covers.",
      },
      { type: "h2", id: "grades", text: "The three grades" },
      {
        type: "table",
        caption: "Brown coir grades and their uses",
        head: ["Grade", "What it is", "Typical uses"],
        rows: [
          ["Bristle fibre", "The longest, stiffest fibres, combed out and sold in bundles or bales", "Brushes and brooms, ropes and twine, doormats, upholstery stuffing"],
          ["Mattress fibre", "The shorter, curly fibre left after the bristle is combed out", "Mattresses and bedding, rubberised coir sheets for seats and upholstery, erosion-control blankets, pots and liners"],
          ["Mixed fibre", "Bristle and mattress fibre together, as decorticated, with no combing", "Erosion control, geotextiles, mulch mats, filter media, applications that tolerate a range of lengths"],
        ],
      },
      {
        type: "p",
        text: "Mattress fibre is the largest volume grade in the export trade, and the one most often compressed into bales. Bristle fibre is sold in smaller quantities to specialist buyers. Mixed fibre is the cheapest and suits any process that cuts or needles the fibre anyway.",
      },
      { type: "h2", id: "how-it-is-made", text: "How the fibre is made" },
      {
        type: "p",
        text: "Husks are either retted, meaning soaked in water for weeks so that the pith softens and separates, or mechanically decorticated, where a machine beats the dry husk apart. Decortication is faster and now the usual route for brown fibre; retting gives a softer, cleaner fibre and is still used for the finer grades. After separation the fibre is cleaned of pith and dust, dried, combed into bristle and mattress fractions if the order calls for it, and compressed into bales.",
      },
      { type: "h2", id: "specifications", text: "What to specify" },
      {
        type: "ul",
        items: [
          "Grade: bristle, mattress or mixed, and whether the fibre should be combed or decorticated.",
          "Fibre length: the range you can process, since each grade spans a range and the mill can sort to it.",
          "Colour: golden brown to dark brown, confirmed against a sample. Colour reflects the husk maturity and the processing, and matters most for visible products such as mats.",
          "Moisture: a maximum at dispatch, with the test method stated. Fibre shipped too wet can heat and discolour in the container.",
          "Impurity and pith content: a maximum percentage of pith, dust and short fibre, measured on an agreed basis. This is the figure that most affects a mattress or rubberising line.",
          "Bale weight and dimensions: the net weight with a tolerance, and the size that suits your handling and the container loading.",
          "Strapping and wrapping: plastic or metal straps, and whether bales are wrapped, depending on the voyage and the destination's import rules.",
        ],
      },
      { type: "h2", id: "packing-and-shipping", text: "Packing and shipping" },
      {
        type: "p",
        text: "Fibre is compressed into bales because loose fibre is almost all air. The bale weight sets how much fits in a container and how it is handled at your end, so it is agreed per order rather than fixed. Every shipment carries a Coconut Development Authority export permit and a phytosanitary certificate, with fumigation where the destination requires it. Terms are FOB Colombo, or CIF and DAP on request, and the bale count and net weight per container are stated in the quotation.",
      },
      {
        type: "callout",
        title: "What SK Ceylon supplies",
        text: "Mattress, mixed and other brown coir grades by availability, compressed to your bale weight, with length range, colour, moisture and impurity limits agreed before order confirmation. Tell us the product you make and we will propose the grade.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between bristle and mattress coir fibre?",
        answer:
          "Bristle fibre is the long, stiff fraction combed out of the husk fibre, used for brushes, ropes and mats. Mattress fibre is the shorter, springy fraction that remains, used for bedding, rubberised coir and erosion control.",
      },
      {
        question: "Which coir fibre grade is used for mattresses?",
        answer:
          "Mattress fibre, usually rubberised or needle-punched into sheets. Buyers specify a maximum pith and impurity content because it affects the bonding and the finished sheet.",
      },
      {
        question: "What is the difference between brown and white coir?",
        answer:
          "Brown coir comes from mature coconuts and is strong and coarse; white coir comes from green coconuts retted in water and is finer and paler. Sri Lankan exports are mainly brown fibre.",
      },
      {
        question: "How is coir fibre shipped?",
        answer:
          "In compressed, strapped bales at a net weight agreed per order, loaded to a plan stated in the quotation, with a phytosanitary certificate and CDA export permit for every shipment.",
      },
    ],
    products: ["coir-fibre-bales", "5kg-coco-chip-blocks", "5kg-coco-peat-blocks"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

/** Guides that mention a product, for cross-links on its page. */
export function guidesForProduct(slug: string): Guide[] {
  return GUIDES.filter((guide) => guide.products.includes(slug));
}

/** Rough reading time from the body text, in whole minutes. */
export function readingMinutes(guide: Guide): number {
  const text = guide.blocks
    .map((block) => {
      switch (block.type) {
        case "p":
        case "h2":
          return block.text;
        case "ul":
        case "ol":
          return block.items.join(" ");
        case "table":
          return block.rows.flat().join(" ");
        case "callout":
          return `${block.title} ${block.text}`;
      }
    })
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
