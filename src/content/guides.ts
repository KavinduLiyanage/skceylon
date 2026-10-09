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
