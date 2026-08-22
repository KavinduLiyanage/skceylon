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
    title: "Source",
    short:
      "CDA-registered mills with washing capability, inside the Kurunegala–Puttalam coconut triangle.",
    body: [
      "Every kilogram we ship starts at a mill we have chosen deliberately. We buy only from CDA-registered mills inside the Kurunegala–Puttalam coconut triangle — the belt where Sri Lanka's coconut production, and its best pith, is concentrated.",
      "Registration is the floor, not the bar. A mill must also have on-site fresh-water washing capability, because washed low-EC material cannot be produced by blending or hoping — it has to be washed at source, before compression.",
    ],
  },
  {
    number: "02",
    title: "Test",
    short:
      "An independent Colombo laboratory verifies EC, pH and moisture before shipment.",
    body: [
      "Before any container is confirmed, a sample from the actual production lot goes to an independent laboratory in Colombo. The lab verifies electrical conductivity (1:1.5 method), pH and moisture content against the agreed specification.",
      "The report is shared with every quotation — you see the numbers for your material before you commit, not a generic brochure figure. If a lot misses spec, it does not ship under our name.",
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
    short: "Container loading personally supervised at the mill.",
    body: [
      "Loading is where good material gets ruined quietly — wet floors, torn wrapping, short counts. So we do not delegate it. Container loading is personally supervised at the mill: container condition checked before stuffing, count and wrapping verified, photos taken as it happens.",
      "You receive the loading photos with your shipping documents. What left the mill is what arrives at your port.",
    ],
  },
];

/** What accompanies every quotation — the proof, before the order. */
export const QUOTATION_INCLUDES = [
  {
    title: "Independent lab report",
    detail: "EC, pH and moisture for the offered lot, tested in Colombo.",
  },
  {
    title: "Mill photos",
    detail: "The material and the facility it comes from, photographed current.",
  },
  {
    title: "Packing specification",
    detail: "Unit packing, palletization and container loading plan.",
  },
] as const;
