export type Checkpoint = {
  number: string;
  title: string;
  /** Short version for the home page summary. */
  short: string;
  /** Expanded paragraphs for the /quality page. */
  body: string[];
};

export const CHECKPOINTS: Checkpoint[] = [
  {
    number: "01",
    title: "Produce",
    short:
      "Washed, screened, dried and compressed at our own mill in the Kurunegala–Puttalam coconut triangle.",
    body: [
      "Every kilogram we ship is made by us. Raw pith comes from the Kurunegala–Puttalam coconut triangle — the belt where Sri Lanka's coconut production, and its best husk, is concentrated — and is washed, screened, dried and compressed at our own mill.",
      "Owning the process matters because washed low-EC material cannot be produced by blending or hoping — it has to be washed with fresh water before compression, and the water has to be measured. We control that step ourselves rather than relying on a supplier's word for it.",
    ],
  },
  {
    number: "02",
    title: "Test",
    short:
      "Material is checked against the agreed EC, pH and moisture specification, with an independent lab report on request.",
    body: [
      "Every order is produced against an agreed specification for electrical conductivity (1:5 v/v method), pH and moisture content. Those are the three figures that decide whether coco peat performs in your greenhouse.",
      "On request, we send a sample of the material and have it tested by an independent laboratory in Colombo, so you can see the numbers before you commit. If a lot misses spec, it does not ship under our name.",
    ],
  },
  {
    number: "03",
    title: "Certify",
    short:
      "CDA export permit and quality certificate, phytosanitary certificate, fumigation where required.",
    body: [
      "Every shipment carries the Coconut Development Authority export permit and quality certificate, and a phytosanitary certificate issued for the destination country.",
      "Where the destination requires fumigation, it is carried out and certified before loading. Documentation is prepared against your import requirements — tell us the destination and we handle the paper.",
    ],
  },
  {
    number: "04",
    title: "Load",
    short: "Container loading personally supervised at our mill.",
    body: [
      "Loading is where good material gets ruined quietly — wet floors, torn wrapping, short counts. So we do not delegate it. Container loading is personally supervised at our mill: container condition checked before stuffing, count and wrapping verified, photos taken as it happens.",
      "You receive the loading photos with your shipping documents. What left our mill is what arrives at your port.",
    ],
  },
];

/** What a buyer can ask for before placing an order. */
export const QUOTATION_INCLUDES = [
  {
    title: "Product samples",
    detail: "A sample of the material, sent on request so you can test it yourself.",
  },
  {
    title: "Independent lab report",
    detail: "EC, pH and moisture tested in Colombo, on request.",
  },
  {
    title: "Packing specification",
    detail: "Unit packing, palletization and loading plan, with the quotation.",
  },
] as const;
