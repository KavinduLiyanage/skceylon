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
        text: "Washing must happen at source. Material cannot be made reliably low-EC by blending after the fact, which is why SK Ceylon washes with fresh water before compression.",
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
        text: "SK Ceylon quotes FOB Colombo, CFR or CIF to your port, with a lead time of 3 to 5 weeks from order confirmation. The loading plan comes with the quotation.",
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
      "The steps, documents and shipping terms involved in importing coco peat and coir from Sri Lanka: samples, specification, FOB, CFR and CIF, export permits, phytosanitary certificates and lead time.",
    category: "Shipping",
    published: "2026-10-09",
    summary:
      "A first container from Sri Lanka is a straightforward process if the specification is agreed before production starts and the paperwork is prepared against the rules at your end. Here is the sequence from enquiry to delivery.",
    takeaways: [
      "Agree the written specification (EC, pH, moisture, size, packing) before confirming; it is what the lab report and the goods are checked against.",
      "FOB Colombo, CFR and CIF are all quoted. FOB leaves freight to your forwarder; CFR and CIF shift freight, and with CIF insurance, to the exporter for one price to the port.",
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
          "Production and quality checks. Raw pith is washed, screened, dried, compressed and packed at the exporter's facility and tested against the specification. Allow 3 to 5 weeks from confirmation to dispatch for standard products.",
          "Export documentation. The exporter obtains the CDA export permit and quality certificate, the phytosanitary certificate from the plant quarantine service, and arranges fumigation if your import rules require it.",
          "Loading and shipping. The container is loaded to the agreed plan, photographed, sealed and delivered to the Port of Colombo. Under FOB, your forwarder's line takes over from here; under CFR or CIF, the exporter books the freight.",
          "Documents and customs clearance. You receive the commercial invoice, packing list, bill of lading, certificate of origin, CDA certificate and phytosanitary certificate, and clear the goods with your broker.",
        ],
      },
      { type: "h2", id: "incoterms", text: "FOB, CFR or CIF" },
      {
        type: "table",
        caption: "What each term covers",
        head: ["Term", "Exporter pays", "You pay", "Choose it when"],
        rows: [
          ["FOB Colombo", "Everything up to and including loading at Colombo port", "Sea freight, insurance, destination charges, customs, inland delivery", "You have a forwarder or a freight contract and want control of the sailing"],
          ["CFR your port", "As FOB plus sea freight to your port", "Marine insurance, destination charges, customs, inland delivery", "You want one price to the port but prefer to insure the cargo yourself"],
          ["CIF your port", "As FOB plus sea freight and marine insurance to your port", "Destination charges, customs, inland delivery", "You want one price to the port without arranging freight or insurance"],
        ],
      },
      {
        type: "p",
        text: "Buyers with their own freight contracts often prefer FOB because their rates can beat what a single exporter obtains. Buyers without a forwarder in place usually take CFR or CIF for one price to the port. Either way, the product price is the same; only the freight and risk allocation change.",
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
        text: "We quote FOB Colombo, CFR or CIF to your port, in 40 ft high-cube containers or LCL pallets for trials. CDA permit and phytosanitary certificate come with every shipment, with fumigation where you need it, and a lead time of 3 to 5 weeks from order confirmation.",
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
        question: "Should I buy FOB, CFR or CIF?",
        answer:
          "FOB if you have a freight forwarder and want to control the sailing and rate; CFR or CIF if you want a single price to the port, without or with marine insurance included. The product price does not change between them.",
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
        text: "Sea freight from Colombo varies by route, by season and by the state of the container market, and it can be a large share of the landed cost for a low-value, high-volume product. A FOB price excludes it; a CFR or CIF price includes it. When you compare a FOB quote with a CIF quote, add your own freight, insurance and destination charges to the FOB figure first. Container utilisation matters too: a product that loads 5,120 units loose against 4,800 on pallets spreads the same freight over more units.",
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
        text: "Fibre is compressed into bales because loose fibre is almost all air. The bale weight sets how much fits in a container and how it is handled at your end, so it is agreed per order rather than fixed. Every shipment carries a Coconut Development Authority export permit and a phytosanitary certificate, with fumigation where the destination requires it. Terms are FOB Colombo, CFR or CIF to your port, and the bale count and net weight per container are stated in the quotation.",
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
  {
    slug: "how-to-choose-a-coco-peat-exporter-in-sri-lanka",
    title: "How to choose a coco peat exporter in Sri Lanka",
    metaTitle: "Choosing a Coco Peat Exporter in Sri Lanka",
    description:
      "How to vet coco peat exporters in Sri Lanka: manufacturer or trader, registrations to check, lab reports, samples, factory audits and the warning signs.",
    category: "Buying",
    published: "2026-10-31",
    summary:
      "Sri Lanka has hundreds of companies offering coco peat for export, from mills with their own compression lines to one-person trading desks. The product can look identical in a photograph. This is how to tell them apart before money changes hands.",
    takeaways: [
      "Ask whether the company compresses and packs the material itself or buys finished blocks from a mill; both can be fine, but you need to know whose quality system you are relying on.",
      "Check the registrations: business registration, Export Development Board registration, and the Coconut Development Authority status needed for coconut products.",
      "Judge a supplier on a recent independent lab report and a physical sample tested with your own method, not on a brochure specification.",
      "Confirm payment terms, specification and loading plan in one written document before the advance is paid.",
    ],
    blocks: [
      { type: "h2", id: "manufacturer-or-trader", text: "Manufacturer, processor or trader" },
      {
        type: "p",
        text: "The coco peat supply chain in Sri Lanka has three layers. Mills in the coconut triangle around Kurunegala, Puttalam and Gampaha extract fibre from husk and produce raw pith. Processors wash, screen, dry and compress that pith into blocks, bales, discs and grow bags, and many also run their own mills. Traders buy finished product from processors and sell it under their own name. A trader with good processor relationships and a strict inspection routine can be a reliable supplier, but you should know which layer you are dealing with, because it tells you who controls washing, EC testing and packing.",
      },
      {
        type: "p",
        text: "Ask directly: where is the material compressed, who owns that facility, and can you visit it or see it on a video call? Evasive answers to those three questions are the most common early warning sign.",
      },
      { type: "h2", id: "registrations", text: "Registrations to check" },
      {
        type: "ul",
        items: [
          "Business registration or company incorporation in Sri Lanka. A (Pvt) Ltd company is registered with the Department of the Registrar of Companies and the registration number can be checked.",
          "Export Development Board (EDB) registration, which every Sri Lankan exporter needs and which the EDB lists in its exporter directory.",
          "Coconut Development Authority (CDA) status. Coconut products are regulated by the CDA, and the exporter arranges the CDA documentation for each consignment. Ask to see a CDA document from a recent shipment.",
          "A tax identification number on the quotation and pro forma invoice, matching the company name on the bank account you are asked to pay.",
        ],
      },
      { type: "h2", id: "evidence-of-quality", text: "Evidence of quality, not claims of it" },
      {
        type: "p",
        text: "Every supplier website in this industry promises low EC and consistent quality. Ask for evidence that can be checked. The most useful items are an independent laboratory report for a recent batch, naming the lab, the method and the sample; a physical sample of 1 to 5 kg that you can test with your own method; photographs of a recent container being loaded, with the seal number visible; and the written specification the supplier will be held to. A supplier who tests only in-house, or who cannot say which extraction method the EC figure refers to, is a higher risk than one who sends a dated lab report without being asked.",
      },
      {
        type: "callout",
        title: "A quick consistency test",
        text: "Ask for the EC and pH of three different recent batches rather than one. A real quality system has the figures to hand and they vary a little. A single perfect figure repeated for every batch is a sign that the number comes from the brochure, not the lab.",
      },
      { type: "h2", id: "audit", text: "Seeing the facility" },
      {
        type: "p",
        text: "A site visit is the surest check and is worth the cost before a multi-container contract. If you cannot travel, a live video walk-through of the washing beds, drying yard, screening line, press and packing area takes an hour and is hard to fake. Look for covered drying and storage, since rain-wet pith raises moisture and encourages mould; a washing system with water testing, since washing without measuring is guesswork; and a press that produces blocks of uniform dimensions and weight, since variation there shows up as variation in expansion and loading counts later.",
      },
      { type: "h2", id: "terms", text: "Commercial terms to agree in writing" },
      {
        type: "table",
        caption: "What a complete pro forma should contain",
        head: ["Item", "Why it matters"],
        rows: [
          ["Full specification with test methods", "The lab report and arrival inspection are checked against it; a limit without a method cannot be enforced"],
          ["Packing specification and loading plan", "Unit count, pallet or loose loading, wrapping and strapping decide what arrives in usable condition"],
          ["Incoterm and named port", "FOB Colombo, CFR or CIF change who pays freight and carries risk, and by how much the quote differs"],
          ["Payment terms and bank details", "An advance with balance against documents is normal; the account name must match the company"],
          ["Lead time and shipment window", "Protects you against slippage in peak season, usually January to April"],
          ["Documents to be supplied", "Invoice, packing list, bill of lading, certificate of origin, CDA documents, phytosanitary certificate, fumigation certificate if required"],
        ],
      },
      { type: "h2", id: "warning-signs", text: "Warning signs" },
      {
        type: "ul",
        items: [
          "A price far below the market without a difference in grade, moisture or packing to explain it. Unwashed, wet, or under-weight blocks are the usual reason.",
          "Pressure to pay the full amount in advance, or a bank account in a personal name or in a different country.",
          "No fixed address, no facility photographs of their own, and product images that appear on other suppliers’ websites.",
          "An EC figure quoted without a method, a pH quoted as a single number, or a moisture figure quoted without saying when it was measured.",
          "Unwillingness to provide a small trial order or LCL pallet before a full container.",
        ],
      },
      {
        type: "callout",
        title: "How SK Ceylon answers these questions",
        text: "We are a registered Sri Lankan (Pvt) Ltd company, quote with a written specification stating the test method for every figure, supply independent lab reports and samples on request, and photograph every loading. Facility video calls are welcome before a first order.",
      },
    ],
    faqs: [
      {
        question: "How do I verify a coco peat exporter in Sri Lanka is genuine?",
        answer:
          "Check the company registration number, look for the company in the Export Development Board exporter directory, ask for a Coconut Development Authority document from a recent shipment, and make sure the bank account name matches the company name on the pro forma invoice.",
      },
      {
        question: "Is it better to buy from a manufacturer or a trading company?",
        answer:
          "A manufacturer controls washing, testing and packing directly, which makes quality easier to trace. A trader can still be reliable if it inspects each batch and names its processors, but you should know which one you are dealing with.",
      },
      {
        question: "What documents should a Sri Lankan coco peat supplier provide?",
        answer:
          "Commercial invoice, packing list, bill of lading, certificate of origin, Coconut Development Authority documentation and a phytosanitary certificate for every shipment, plus a fumigation certificate where your country requires it and a lab report if you ask for one.",
      },
      {
        question: "Should I visit the factory before ordering?",
        answer:
          "Before a multi-container contract, yes if you can. For a first container, a live video walk-through of the washing, drying, screening, pressing and packing areas is a practical substitute.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "25kg-coco-peat-bales"],
  },

  {
    slug: "coco-peat-hs-code-and-customs-classification",
    title: "Coco peat HS code: how it is classified and why it matters for duty",
    metaTitle: "Coco Peat HS Code and Customs Classification",
    description:
      "Which HS code applies to coco peat and coir fibre, why 1404.90 is the usual heading, where 5305 and 2703 come from, and how the code affects duty and checks.",
    category: "Shipping",
    published: "2026-10-31",
    summary:
      "Buyers often ask for the HS code before anything else, because it decides the duty rate, whether a certificate of origin is worth having and which plant health checks apply. Coco peat sits in a heading most people have never heard of, and not every customs service agrees.",
    takeaways: [
      "Coco peat and coir pith are normally classified under HS heading 1404 (vegetable products not elsewhere specified), subheading 1404.90. Sri Lanka Customs has a national line for coconut coir pith under 1404.90.",
      "Coir fibre is a textile fibre and is classified under heading 5305. Some older rulings also placed coco peat there as fibre waste.",
      "The first six digits of the code are international; the digits after them are national, so the full code differs from country to country.",
      "Your customs broker gives the binding answer for your country. The exporter declares the Sri Lankan code on the export side and shows it on the documents.",
    ],
    blocks: [
      { type: "h2", id: "the-usual-heading", text: "The usual heading: 1404.90" },
      {
        type: "p",
        text: "The Harmonized System has no heading that names coco peat. The pith left after fibre is extracted from coconut husk is treated as a vegetable product not specified elsewhere, which puts it in Chapter 14 under heading 1404, subheading 1404.90. Sri Lanka Customs breaks that subheading down further and carries a national line for coconut coir pith, compressed or not, so Sri Lankan export declarations and the Sri Lankan Customs statistics for coco peat use a 1404.90 code. US Customs rulings on coco peat blocks from Sri Lanka and India have reached the same heading.",
      },
      {
        type: "p",
        text: "Whether the material is compressed into blocks, pressed into grow bags or discs, washed or unwashed, does not change the heading, because none of those steps turns the pith into a different product. A grow bag with printed film is still a block of pith in a bag.",
      },
      { type: "h2", id: "other-headings", text: "Where 5305, 2703 and 3824 come from" },
      {
        type: "table",
        caption: "Headings that appear in connection with coco peat",
        head: ["Heading", "What it covers", "When it is used"],
        rows: [
          ["1404.90", "Vegetable products not elsewhere specified", "The normal classification for coco peat and coir pith in Sri Lanka and most importing countries"],
          ["5305.00", "Coconut (coir) and other vegetable textile fibres, raw or processed but not spun, including tow and waste", "Coir fibre bales. Some older customs rulings also put coco peat here as fibre waste"],
          ["2703.00", "Peat, including peat litter, whether or not agglomerated", "Sphagnum peat moss. Occasionally applied to coco peat sold as a peat substitute, but coco peat is not peat"],
          ["3824 / 3101", "Prepared growing media or fertilisers", "Blended, fertilised or otherwise formulated substrates. Plain washed or buffered pith is not usually treated as a preparation"],
        ],
      },
      {
        type: "p",
        text: "If your broker proposes a heading other than 1404.90, ask for the reasoning and, for a long-term supply arrangement, consider requesting a binding tariff ruling from your customs authority. A ruling fixes the classification for several years and removes the risk of a reassessment later.",
      },
      { type: "h2", id: "national-digits", text: "Six international digits, then national ones" },
      {
        type: "p",
        text: "The World Customs Organization fixes the first six digits. Each country adds its own: Sri Lanka uses an eight-digit code with national subdivisions, the EU uses an eight-digit Combined Nomenclature code with further TARIC digits for measures, the US uses a ten-digit HTS code and India uses an eight-digit ITC-HS code. So 1404.90 is the shared part, and the exporter’s full Sri Lankan code will not match your import code beyond those six digits. That is normal and is not an error on the documents.",
      },
      { type: "h2", id: "why-it-matters", text: "Why the code matters to a buyer" },
      {
        type: "ul",
        items: [
          "Duty rate. Products of heading 1404 attract low or zero duty in many markets, but the rate is set by your tariff schedule and should be confirmed by your broker.",
          "Preferential origin. If your country has a trade agreement or preference scheme with Sri Lanka, a certificate of origin from Sri Lanka can reduce the duty further. The exporter obtains it from the chamber or the Department of Commerce; tell them which form your customs accepts.",
          "Plant health controls. Border plant health checks are triggered by the nature of the goods and the declared code, so a code that signals a plant product also tells the border agency to expect a phytosanitary certificate.",
          "Statistics and contracts. Your purchasing system, insurance policy and letter of credit will all carry the code, so agree it before the first shipment and keep it consistent.",
        ],
      },
      { type: "h2", id: "on-the-documents", text: "What appears on the shipping documents" },
      {
        type: "p",
        text: "The commercial invoice and packing list carry the HS code the exporter declares to Sri Lanka Customs, the description of the goods, the net and gross weights and the unit count. The bill of lading carries the description and weights. The certificate of origin carries the code and description and must match the invoice. If you need a particular wording for your import declaration, for example ‘coconut coir pith, compressed, unused growing medium’, give it to the exporter before the documents are drawn up.",
      },
      {
        type: "callout",
        title: "SK Ceylon’s practice",
        text: "We declare coco peat products under the Sri Lankan 1404.90 national line for coconut coir pith and coir fibre bales under 5305.00, show the code and your preferred description on the invoice, and obtain a certificate of origin in the form your customs requires. Check the import-side classification and duty with your broker; we will match the documents to it.",
      },
    ],
    faqs: [
      {
        question: "What is the HS code for coco peat?",
        answer:
          "Coco peat and coir pith are normally classified under subheading 1404.90, vegetable products not elsewhere specified. Sri Lanka Customs has a national line within 1404.90 for coconut coir pith, compressed or not. Your own country adds its national digits, so confirm the full code with your broker.",
      },
      {
        question: "What is the HS code for coir fibre?",
        answer:
          "Coir fibre is a vegetable textile fibre and falls under heading 5305.00, which covers coconut, abaca, ramie and similar fibres, raw or processed but not spun, including tow and waste.",
      },
      {
        question: "Is coco peat classified as peat under 2703?",
        answer:
          "Not normally. Heading 2703 covers peat from bogs. Coco peat is coconut husk pith, a vegetable product, and is classified under 1404.90. A few customs services have taken a different view, so check locally.",
      },
      {
        question: "Does the HS code affect the import duty on coco peat?",
        answer:
          "Yes. The duty rate is set per code in your national tariff. Heading 1404 goods are often low or zero duty, and a Sri Lankan certificate of origin may reduce the rate further under a preference scheme or trade agreement.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "coir-fibre-bales", "grow-bags"],
  },

  {
    slug: "coco-peat-specification-for-hydroponics",
    title: "Coco peat specification for hydroponics and soilless growing",
    metaTitle: "Coco Peat Specification for Hydroponics",
    description:
      "What a hydroponic grower should specify in coco peat: EC and pH with test methods, sodium and potassium, particle size, blend ratio, buffering and moisture.",
    category: "Specifications",
    published: "2026-10-31",
    summary:
      "In soilless growing the substrate is the whole root zone, so there is no soil to buffer a poor batch. The specification you send to the exporter is the only control you have over what arrives. This is what it should contain and why.",
    takeaways: [
      "Specify EC and pH with the extraction method and ratio, for example EC below 0.5 mS/cm in a 1:5 v/v water extract to EN 13038, pH 5.5 to 6.5 to EN 13037.",
      "For fruiting crops on drip irrigation, specify buffered material and ask for sodium and potassium in the extract, not just EC.",
      "Set a particle size range and a peat to chip ratio that match your irrigation frequency, because air and water holding follow from them.",
      "Add moisture at dispatch, foreign matter, expansion and packing to the sheet, and ask for an independent lab report on each batch.",
    ],
    blocks: [
      { type: "h2", id: "why-the-spec-matters-more", text: "Why the specification matters more in soilless systems" },
      {
        type: "p",
        text: "In a field or a soil-based pot, a slightly salty or unbuffered amendment is diluted by the soil. In a grow bag, a slab or a container of pure coco peat, every property of the material acts directly on the root. Salts that arrive in the pith go straight into the root zone solution, cation exchange sites loaded with sodium and potassium pull calcium and magnesium out of the first weeks of feed, and a particle size that holds too much water drowns roots that have nowhere else to go. The remedy is a complete specification, with methods, agreed before production.",
      },
      { type: "h2", id: "chemical", text: "Chemical properties" },
      {
        type: "table",
        caption: "Chemical specification for hydroponic use",
        head: ["Property", "Typical specification", "Method to state", "Notes"],
        rows: [
          ["EC", "< 0.5 mS/cm washed; buffered material similar after treatment", "1:5 v/v water extract, EN 13038, or 1:1.5 v/v", "A 1:1.5 extract gives a higher number than 1:5 for the same material; never compare across methods"],
          ["pH", "5.5 – 6.5", "Water suspension, EN 13037", "Coco peat is naturally in range and does not need lime"],
          ["Sodium (Na)", "Low, with a limit agreed per crop", "Same extract as EC, reported in mg/L or mmol/L", "The figure that EC alone can hide; important for salt-sensitive crops"],
          ["Potassium (K)", "Reported; reduced in buffered grades", "Same extract as EC", "Unbuffered pith releases K and binds Ca and Mg in the first weeks"],
          ["Chloride (Cl)", "Low, with a limit agreed per crop", "Same extract as EC", "Comes with sodium from coastal husk; washing removes most of it"],
          ["Buffering", "Buffered with calcium nitrate for fruiting crops on drip; washed unbuffered acceptable for short-cycle crops", "State the treatment", "See the guide to washed, unwashed and buffered grades"],
        ],
      },
      {
        type: "p",
        text: "EN 13038 and EN 13037 are the European methods for conductivity and pH in growing media and are widely used by independent laboratories. Many Dutch and other European growers work to the 1:1.5 volume extract instead, and some laboratories report both. Which method you choose matters less than stating it, because the same block can read 0.4 mS/cm by one method and 1.0 by another.",
      },
      { type: "h2", id: "physical", text: "Physical properties" },
      {
        type: "table",
        caption: "Physical specification for hydroponic use",
        head: ["Property", "What to specify", "Why"],
        rows: [
          ["Particle size", "A screen size, e.g. under 12 mm for fine peat, and the share of fines below 1 mm if your system is sensitive to it", "Fines hold water and reduce air; coarse material drains and dries faster"],
          ["Peat to chip ratio", "e.g. 70:30 or 50:50 for grow bags and slabs; 100 % peat for propagation", "Chips add air-filled porosity and drainage for crops irrigated many times a day"],
          ["Fibre content", "A maximum share of long fibre, or a statement that fibre is screened out", "Fibre improves structure in small amounts and causes uneven wetting in large amounts"],
          ["Air and water holding", "Ask for the supplier’s measured air-filled porosity and water holding capacity for the blend, if available", "These follow from particle size and ratio and are the figures your irrigation schedule depends on"],
          ["Expansion", "Minimum litres per kilogram, e.g. 12 L/kg, and the dry bulk density", "Decides how much substrate a block, bag or bale actually gives you"],
          ["Moisture at dispatch", "A maximum, e.g. below 20 %, measured at packing", "Wet material weighs more, costs more to ship and can mould in transit"],
          ["Foreign matter", "Free of stones, sand, plastic and weed seed; state a limit for sand if your source area is coastal", "Sand raises bulk density and wears pumps and emitters"],
        ],
      },
      { type: "h2", id: "by-system", text: "Starting points by system" },
      {
        type: "ul",
        items: [
          "Drip-irrigated fruiting crops in grow bags or slabs (tomato, cucumber, pepper, strawberry): buffered low-EC pith, 70:30 to 50:50 peat to chips depending on climate and irrigation frequency, screened to remove long fibre.",
          "Propagation plugs, discs and seedling trays: 100 % fine washed pith, often buffered, under 6 to 8 mm, with a tight EC limit because young roots are the most salt-sensitive.",
          "Container nursery and potting mixes: washed low-EC pith as a component with bark, perlite or compost; the mix supplier sets the final properties, so the pith specification can be a little wider.",
          "Flood and drain or ebb and flow benches: a coarser blend with more chips so that the medium drains between floods.",
        ],
      },
      { type: "h2", id: "sampling-and-testing", text: "Sampling and testing each batch" },
      {
        type: "p",
        text: "A specification is only as good as the test that checks it. Ask the exporter for a batch sample and an independent lab report for every production run, with the sampling point stated. On arrival, hydrate a sample of blocks or bags from different pallets with the water you will use in production, let it stand, and test EC and pH with the method on the specification. Record the result against the lab report and the container number. Over a season this gives you a record of the supplier’s consistency that is worth more than any single certificate.",
      },
      {
        type: "callout",
        title: "What SK Ceylon can produce to",
        text: "Washed low-EC pith at EC below 0.5 mS/cm in a 1:5 v/v extract, pH 5.5 to 6.5, moisture below 20 % at dispatch, screened to the size you need and blended with chips at any ratio from 100:0 to 50:50. Buffering with calcium nitrate is available for fruiting crops. Send us your current specification sheet and we will confirm each line or tell you where we differ.",
      },
    ],
    faqs: [
      {
        question: "What EC should coco peat have for hydroponics?",
        answer:
          "Washed low-EC material is specified at under 0.5 mS/cm in a 1:5 v/v water extract. Always state the extraction ratio and method, because a 1:1.5 extract gives a higher figure for the same material.",
      },
      {
        question: "Do I need buffered coco peat for hydroponics?",
        answer:
          "For fruiting crops on drip irrigation, buffered material is the safer choice because it prevents the pith from binding calcium and magnesium during the first weeks. Short-cycle crops and nursery mixes often use washed unbuffered pith.",
      },
      {
        question: "What peat to chip ratio is best for hydroponic grow bags?",
        answer:
          "Starting points are 70:30 for cooler climates or less frequent irrigation and 50:50 for hot climates or many irrigations a day. The right ratio depends on your irrigation frequency and crop, and can be adjusted after a trial.",
      },
      {
        question: "Which test standards apply to coco peat for growing media?",
        answer:
          "EN 13037 for pH, EN 13038 for electrical conductivity and EN 13040 for sample preparation and moisture are the European growing media methods used by many independent laboratories. The 1:1.5 volume extract is also widely used in the Netherlands.",
      },
    ],
    products: ["grow-bags", "5kg-coco-peat-blocks", "coco-peat-discs"],
  },

  {
    slug: "coco-peat-import-requirements-by-market",
    title: "Coco peat import requirements: what the EU, UK, Asia and the Gulf ask for",
    metaTitle: "Coco Peat Import Requirements by Market",
    description:
      "Plant health and customs requirements for importing coco peat into the EU, UK, Korea, Japan, the Gulf, India, Australia and New Zealand, and what to tell the exporter.",
    category: "Shipping",
    published: "2026-10-31",
    summary:
      "Coco peat is a plant product, so it crosses borders under plant health rules as well as customs rules. The requirements range from a phytosanitary certificate and nothing more to an import permit and seed viability testing. Here is what buyers in the main markets usually need, and what to confirm locally.",
    takeaways: [
      "Almost every market wants a phytosanitary certificate from Sri Lanka’s National Plant Quarantine Service with the consignment; the exporter obtains it for each shipment.",
      "The EU and UK treat unused coconut pith as a low-risk growing medium; soil and used growing media are the restricted materials, so the declaration that the pith is new and unused matters.",
      "Some markets require an import permit before shipment, and some may order treatment on arrival if inspection finds pests or viable seed.",
      "Rules change. Confirm with your plant health authority or broker before each new contract, and give the exporter the exact wording your border agency wants on the certificate.",
    ],
    blocks: [
      { type: "h2", id: "why-plant-health-rules-apply", text: "Why plant health rules apply to coco peat" },
      {
        type: "p",
        text: "Coco peat is milled coconut husk, and growing media of plant origin can in principle carry soil, weed seed, insects or plant pathogens. National plant protection organisations therefore regulate it under the same framework as other plant products, which is why a phytosanitary certificate travels with every shipment. In practice washed, dried and compressed pith from a controlled process is a low-risk material, and most markets reflect that with light requirements. The exceptions are countries with strict biosecurity regimes, which ask for permits, declarations or testing in addition to the certificate.",
      },
      { type: "h2", id: "by-market", text: "Requirements by market" },
      {
        type: "table",
        caption: "What buyers usually need; confirm locally before each contract",
        head: ["Market", "Usual requirement", "Notes"],
        rows: [
          ["European Union", "Phytosanitary certificate; standard customs entry", "EU plant health law restricts soil and used growing media. Growing medium composed entirely of unused peat or coconut fibre is a recognised low-risk category, and the certificate should state that the material is new and has not been used for cultivation. Check with the national plant protection organisation at the port of entry, for example the NVWA in the Netherlands"],
          ["United Kingdom", "Phytosanitary certificate; standard customs entry", "UK rules mirror the EU framework for growing media since 2021. Guidance notes that material made entirely of unused peat is outside the soil prohibition; confirm the current position for coir with APHA or Defra"],
          ["Norway", "Generally no phytosanitary certificate for pure coconut fibre products", "Norwegian guidance allows pure coconut fibre growing media from outside Europe without a certificate; blends may differ. Confirm with Mattilsynet"],
          ["South Korea", "Phytosanitary certificate; import inspection on arrival", "Plant products are inspected by the Animal and Plant Quarantine Agency; treatment can be ordered if pests are found. Confirm whether your product needs any additional declaration"],
          ["Japan", "Phytosanitary certificate; import inspection on arrival", "Plant quarantine inspection by MAFF at the port; confirm current requirements for coir pith with your broker"],
          ["UAE and Saudi Arabia", "Phytosanitary certificate; certificate of origin; standard customs entry", "Some Gulf importers are asked for a fumigation certificate; confirm with the Ministry of Climate Change and Environment (UAE) or the Ministry of Environment, Water and Agriculture (Saudi Arabia)"],
          ["India", "Phytosanitary certificate; import permit may be required for plant products", "India is also a producer, so duty and permit rules reflect that; check with the Plant Quarantine Organisation of India and your broker"],
          ["Australia", "Import permit and inspection; treatment often required", "One of the strictest regimes; check the BICON database for current conditions for coir peat before ordering"],
          ["New Zealand", "Import permit and viable seed testing", "New Zealand’s import health standard for coco peat requires a permit and testing for viable seed; allow time for this before the first shipment"],
        ],
      },
      {
        type: "p",
        text: "This table is an orientation, not legal advice. Plant health requirements are revised regularly and can differ for blends, for material packed with fertiliser, and for retail packs. Before a new contract, ask your plant health authority or customs broker to confirm the import conditions for ‘coconut coir pith, compressed, unused growing medium’ and send the answer to the exporter.",
      },
      { type: "h2", id: "the-certificate", text: "The phytosanitary certificate" },
      {
        type: "p",
        text: "In Sri Lanka the phytosanitary certificate is issued by the National Plant Quarantine Service after inspection of the consignment. It names the exporter, the importer, the product, the quantity, the means of conveyance and the port of entry, and it can carry an additional declaration in wording the importing country specifies. If your border agency wants a particular statement, for instance that the growing medium is new and unused or that it was treated in a specified way, send that wording to the exporter before inspection. Certificates cannot be amended easily after issue, and a certificate that does not say what your authority wants is the most common cause of a held container.",
      },
      { type: "h2", id: "treatment", text: "Fumigation and other treatments" },
      {
        type: "p",
        text: "Where a market requires treatment, methyl bromide or phosphine fumigation before loading is the usual method, carried out by a licensed fumigator who issues a certificate. Some authorities accept heat treatment or a systems approach instead. Treatment adds cost and a few days to the schedule and is not needed for most destinations, so it is worth confirming whether your country really requires it rather than ordering it by default. Buyers of buffered or certified organic material should also check that the treatment is compatible with their certification.",
      },
      { type: "h2", id: "customs-side", text: "The customs side" },
      {
        type: "ul",
        items: [
          "Classification. Coco peat is normally entered under HS 1404.90; the national digits and the duty rate follow your tariff. See the guide to the coco peat HS code.",
          "Certificate of origin. Useful where your country gives Sri Lanka preferential duty, and sometimes required by Gulf customs regardless of duty.",
          "Import permits and licences. Where required, they are issued to the importer, not the exporter, and should be in hand before the container is loaded.",
          "Labelling. Retail packs may need the importer’s name, country of origin, weight and expanded volume in the local language. Tell the exporter before film is printed.",
        ],
      },
      {
        type: "callout",
        title: "How SK Ceylon handles this",
        text: "Every shipment carries a phytosanitary certificate and Coconut Development Authority documentation, with fumigation and any additional declaration wording added when your authority requires it. Send us your import conditions and we prepare the documents against them.",
      },
    ],
    faqs: [
      {
        question: "Do I need a phytosanitary certificate to import coco peat?",
        answer:
          "In almost every market, yes. The exporter obtains it from Sri Lanka’s National Plant Quarantine Service for each shipment. Norway is a notable exception for pure coconut fibre products, and a few other countries ask for more, such as an import permit.",
      },
      {
        question: "Does coco peat need an import permit in the EU?",
        answer:
          "Unused coconut pith is not a prohibited material under EU plant health law, which targets soil and used growing media, and a phytosanitary certificate normally suffices. Confirm the current position with the plant protection organisation at your port of entry.",
      },
      {
        question: "Is fumigation required for coco peat?",
        answer:
          "Only where the importing country requires it. Many markets do not, so check with your plant health authority rather than ordering it by default, since it adds cost and time.",
      },
      {
        question: "Which countries are strictest about importing coco peat?",
        answer:
          "Australia and New Zealand require import permits, inspection and, for New Zealand, testing for viable seed. Allow extra time and confirm conditions before ordering for those markets.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "25kg-coco-peat-bales"],
  },

  {
    slug: "coco-peat-trial-order-samples-and-moq",
    title: "Running a coco peat trial: samples, minimum orders and what to measure",
    metaTitle: "Coco Peat Samples, Trial Orders and MOQ",
    description:
      "How to trial coco peat from a new exporter before a full container: what a sample shows, LCL pallet quantities, minimum orders and what to measure during the trial.",
    category: "Buying",
    published: "2026-10-31",
    summary:
      "A sample tells you whether a supplier can make the material. A pallet grown through a crop cycle tells you whether they can make it consistently and whether it suits your system. This guide sets out what to ask for at each stage and how to judge the result.",
    takeaways: [
      "Ask for a sample of 1 to 5 kg of the exact grade and blend you intend to buy, and test it with your own method before anything else.",
      "A trial pallet shipped as LCL is the realistic minimum for a crop trial; a 40 ft container is the normal commercial unit.",
      "Measure the trial: EC and pH on arrival, expansion, wetting time, drainage behaviour and crop performance against your current substrate.",
      "Agree in advance what the trial has to show for the first container order to follow, so both sides know what success looks like.",
    ],
    blocks: [
      { type: "h2", id: "samples", text: "Stage one: the sample" },
      {
        type: "p",
        text: "A sample is a small quantity of the actual product, usually 1 to 5 kg, sent by courier. Ask for the exact grade, blend and screen size you intend to buy, taken from current production rather than a sample stock, and for the lab report that goes with that batch. Courier cost for a small sample is modest and many exporters will send one without charge against a serious enquiry; a 5 kg block is heavier and the buyer is sometimes asked to cover the courier.",
      },
      {
        type: "p",
        text: "Test the sample with your own method. Hydrate a measured weight, record the expanded volume and the time it takes to wet, then measure EC and pH in the extract your laboratory or your meter uses. Compare the figures with the exporter’s report and note the method difference if there is one. Look at the material: fines, fibre, chips, any sand at the bottom of the container, any smell of fermentation. A sample cannot tell you how consistent production is or how the material behaves over a crop cycle, but it rules out suppliers whose product does not match their specification at all.",
      },
      { type: "h2", id: "trial-quantities", text: "Stage two: a trial quantity" },
      {
        type: "table",
        caption: "Trial and commercial quantities",
        head: ["Quantity", "How it ships", "Suits"],
        rows: [
          ["1 – 5 kg", "Courier", "Laboratory and bench testing of the grade"],
          ["1 – 3 pallets", "LCL (less than container load) sea freight, shared container", "A crop trial in part of a greenhouse or a nursery block over one cycle"],
          ["A 20 ft container", "FCL, where the line offers 20 ft for this cargo", "A larger trial or a small grower’s season; less economical per block than 40 ft"],
          ["A 40 ft high-cube container", "FCL", "The normal commercial unit and the basis of most quotations"],
        ],
      },
      {
        type: "p",
        text: "LCL freight is priced per cubic metre and the fixed charges at origin and destination are significant, so a pallet of coco peat costs much more per block than the same block in a full container. Treat the trial price as the cost of information, not as the price you will pay later. Ask the exporter to quote the trial and the first container at the same time, so you can see both figures.",
      },
      { type: "h2", id: "what-to-measure", text: "What to measure during the trial" },
      {
        type: "ul",
        items: [
          "On arrival: unit count and weight, block dimensions, condition of wrapping and pallets, moisture of a sample, and EC and pH of a hydrated sample from at least three units.",
          "At hydration: litres obtained per kilogram, time to full wetting, and whether any dry cores remain in blocks hydrated to your normal routine.",
          "In the system: drainage and run-off EC over the first two weeks, which shows whether salts are leaching and whether the material was properly washed or buffered.",
          "Crop performance: root development, uniformity and yield or quality against your current substrate in the same house, with the same feed and irrigation. Keep the comparison fair; a trial in a different house with a different schedule proves nothing.",
          "Handling: how the format fits your filling, planting and disposal routine, and whether the packing survived transport and storage.",
        ],
      },
      { type: "h2", id: "agreeing-the-outcome", text: "Agreeing the outcome in advance" },
      {
        type: "p",
        text: "Before the trial ships, write down what it has to show for the first container to follow: the EC and pH limits, the minimum expansion, the acceptable run-off EC profile, and the crop comparison you will make. Share it with the exporter. This turns the trial from a vague impression into a decision, and it gives the exporter a clear target. If the trial falls short on one point, the specification can often be adjusted, for example a different peat to chip ratio or a buffered grade, and a second trial pallet is cheaper than a wrong container.",
      },
      { type: "h2", id: "moq", text: "Minimum order quantities" },
      {
        type: "p",
        text: "Most Sri Lankan exporters quote per 40 ft high-cube container and state a minimum per product, because the press, washing and packing lines are set up per run. Some products carry a higher minimum than others: printed grow bag film, custom block sizes and buffered material need a production run of their own, while standard 5 kg blocks can be combined with other products in a mixed container. Ask for the minimum per product and whether mixed containers are possible before you plan the trial, so that the first commercial order is realistic.",
      },
      {
        type: "callout",
        title: "Trials with SK Ceylon",
        text: "We send samples of the exact grade and blend you intend to buy, with the batch lab report, and ship trial pallets by LCL. Standard products can be combined in a mixed 40 ft container; minimums for custom sizes, printed film and buffered grades are stated with the quotation.",
      },
    ],
    faqs: [
      {
        question: "Can I get a sample of coco peat before ordering?",
        answer:
          "Yes. Ask for 1 to 5 kg of the exact grade and blend you intend to buy, taken from current production, together with the batch lab report. Test it with your own method before going further.",
      },
      {
        question: "What is the minimum order for coco peat from Sri Lanka?",
        answer:
          "A trial pallet shipped as LCL is the practical minimum. Commercial orders are quoted per 40 ft high-cube container, with a minimum per product stated in the quotation. Standard products can often be mixed in one container.",
      },
      {
        question: "How much does a trial pallet of coco peat cost to ship?",
        answer:
          "LCL freight is priced per cubic metre with fixed origin and destination charges, so a pallet costs far more per block than a full container. Ask for the trial and the first container to be quoted together so you can see both.",
      },
      {
        question: "How long should a coco peat trial run?",
        answer:
          "One full crop cycle in the same house and on the same schedule as your current substrate, with EC, pH, expansion and run-off measured from arrival, is the minimum for a fair comparison.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "grow-bags", "5kg-coco-chip-blocks"],
  },

  {
    slug: "coco-peat-storage-and-shelf-life",
    title: "How to store coco peat: shelf life, moisture, mould and stacking",
    metaTitle: "Coco Peat Storage and Shelf Life",
    description:
      "How long compressed coco peat keeps, how to store blocks, bales, discs and grow bags, what causes mould and odour, and how to check older stock before use.",
    category: "Using the product",
    published: "2026-10-31",
    summary:
      "Dry, compressed coco peat does not expire in any useful sense; stock that has been kept dry for years hydrates and performs as it did when it was pressed. What shortens its life is water. This guide covers how to keep it out, and what to do with stock that has been wet.",
    takeaways: [
      "Compressed coco peat keeps for years if it stays dry, under cover and off the floor; there is no fixed expiry date.",
      "Moisture is the only real enemy: wet blocks swell, lose compression, grow surface mould and can ferment and smell.",
      "Store on pallets, away from walls, in a dry shed or warehouse; outdoors only under a waterproof, breathable cover for short periods.",
      "Rotate stock by batch, keep the lab report with each batch, and re-test EC and pH on stock older than a season before using it in a sensitive crop.",
    ],
    blocks: [
      { type: "h2", id: "does-it-expire", text: "Does coco peat expire?" },
      {
        type: "p",
        text: "Coco peat is lignocellulosic material that has already been through its most active decomposition in the husk pile and the washing beds. Once dried to below about 20 % moisture and compressed, biological activity is very low, and the material does not degrade in the way compost or bark does. Blocks stored dry for several years hydrate normally, with the same EC, pH and expansion as fresh stock. There is therefore no manufacturer’s expiry date; what you are managing is moisture, not time.",
      },
      { type: "h2", id: "what-goes-wrong", text: "What goes wrong when it gets wet" },
      {
        type: "ul",
        items: [
          "Swelling and loss of compression. A block that takes on water begins to expand in its wrapping, splits the film and no longer stacks or counts as a compressed unit. Grow bags swell inside the film and may burst at the seams.",
          "Surface mould. White or grey mould on the face of a damp block is a saprophytic growth on the surface and is cosmetic; it brushes off once the block is hydrated and usually does no harm to crops. It is a sign that storage is too damp, not that the block is spoiled.",
          "Fermentation and odour. Material that stays wet and warm for weeks can ferment anaerobically, which produces a sour smell and can lower pH and raise EC. Such stock should be hydrated, flushed and tested before any horticultural use, and is better directed to soil amendment.",
          "Weight gain. Wet stock weighs more, so batches sold by weight are short on dry matter, and pallets can exceed rack or vehicle limits.",
        ],
      },
      { type: "h2", id: "how-to-store", text: "How to store it" },
      {
        type: "table",
        caption: "Storage conditions by product",
        head: ["Product", "Store", "Avoid"],
        rows: [
          ["5 kg blocks, palletized and shrink-wrapped", "On the pallet, under cover, on a dry floor, stacked to the height the pallet was built for", "Standing water, direct rain, stacking loose blocks higher than about 1.5 m without a pallet"],
          ["25 kg bales", "Under cover on pallets or dunnage; keep strapping intact", "Cutting straps before use; outdoor storage without a cover"],
          ["Grow bags and slabs", "Flat, in cartons or on pallets, out of sunlight to protect the film", "Sunlight on unprinted film for long periods, which weakens it before the crop; stacking so high that bottom bags deform"],
          ["Discs and plugs", "In the original cartons, dry and sealed", "Humidity, which makes discs swell and lose shape before use"],
          ["Loose or opened material", "In sealed bags or covered bins, used within the season", "Open piles outdoors, which take up rain and weed seed"],
        ],
      },
      {
        type: "p",
        text: "A dry, roofed warehouse or shed with a concrete floor is ideal. Keep pallets off the floor and a little away from the walls so that condensation and splash cannot reach them. If stock has to wait outside, put it on pallets on hard standing, cover it with a waterproof tarpaulin that is open at the base so air can move underneath, and bring it inside as soon as possible. Containers left standing in the sun develop condensation inside; unload them promptly rather than using them as storage.",
      },
      { type: "h2", id: "in-transit", text: "Moisture in transit" },
      {
        type: "p",
        text: "Sea containers travel through temperature swings that cause condensation, which is why exporters dry material to below about 20 % moisture before compression and wrap pallets tightly. On arrival, check the top layer of the first pallets you open for damp or mould; if the container has been through heavy rain at the port and the roof has leaked, the damage is usually visible on the top tier only. Photograph anything you find, note the seal and container number, and tell the exporter and your insurer promptly.",
      },
      { type: "h2", id: "stock-rotation", text: "Stock rotation and re-testing" },
      {
        type: "p",
        text: "Keep the batch number and the lab report with each delivery, and use the oldest stock first. Before using stock that has been stored for more than a season in a sensitive crop such as propagation or a fruiting crop on drip, hydrate a sample from a few blocks and check EC, pH and expansion against the original report. If the figures match, the stock is fine. If EC has risen or the material smells sour, it has been wet at some point, and should be flushed or used for a less sensitive purpose.",
      },
      {
        type: "callout",
        title: "How SK Ceylon ships for storage",
        text: "Material is dried to below 20 % moisture at dispatch, palletized, strapped and shrink-wrapped, and loaded into inspected containers with the batch lab report filed with the shipment. Stored dry, it will keep until you need it.",
      },
    ],
    faqs: [
      {
        question: "How long does compressed coco peat last?",
        answer:
          "Indefinitely for practical purposes, as long as it stays dry. Blocks stored under cover for several years hydrate and perform as they did when pressed. Moisture, not age, is what spoils stock.",
      },
      {
        question: "Is mould on a coco peat block a problem?",
        answer:
          "White or grey surface mould on a damp block is cosmetic and brushes off once the block is hydrated. It shows that the storage area is too damp. Material that smells sour or fermented should be flushed and tested before horticultural use.",
      },
      {
        question: "Can coco peat blocks be stored outside?",
        answer:
          "Only for short periods, on pallets on hard standing under a waterproof cover that lets air move underneath. Long-term storage should be under a roof on a dry floor.",
      },
      {
        question: "Should I re-test old coco peat stock before using it?",
        answer:
          "For stock older than a season going into a sensitive crop, yes. Hydrate a sample from a few blocks and check EC, pH and expansion against the original lab report. If they match, the stock is fine to use.",
      },
    ],
    products: ["5kg-coco-peat-blocks", "25kg-coco-peat-bales", "grow-bags", "coco-peat-discs"],
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
