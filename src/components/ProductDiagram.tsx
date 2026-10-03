import type { ProductDiagramKind } from "@/content/products";

type ProductDiagramProps = {
  kind: ProductDiagramKind;
  className?: string;
};

/**
 * Technical line drawings shown beside the product photo. Decorative: the
 * figures repeat data from the adjacent spec table.
 */
export function ProductDiagram({ kind, className = "" }: ProductDiagramProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      className={`h-auto w-full ${className}`}
      aria-hidden="true"
      fill="none"
    >
      {kind === "block" && <BlockDrawing />}
      {kind === "chips" && <ChipsDrawing />}
      {kind === "chipblock" && <ChipBlockDrawing />}
      {kind === "growbag" && <GrowBagDrawing />}
      {kind === "bale" && <BaleDrawing />}
    </svg>
  );
}

const ink = "stroke-ink";
const dim = "stroke-gold-deep";
const dimText = "fill-gold-deep font-mono text-[10px]";
const noteText = "fill-ink-faint font-mono text-[9px]";

/** Small dimension line with end ticks. */
function DimLine({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  const vertical = x1 === x2;
  const t = 3;
  return (
    <g className={dim} strokeWidth="1">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {vertical ? (
        <>
          <line x1={x1 - t} y1={y1} x2={x1 + t} y2={y1} />
          <line x1={x2 - t} y1={y2} x2={x2 + t} y2={y2} />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - t} x2={x1} y2={y1 + t} />
          <line x1={x2} y1={y2 - t} x2={x2} y2={y2 + t} />
        </>
      )}
    </g>
  );
}

function BlockDrawing() {
  return (
    <g strokeWidth="1.25">
      <g className={ink}>
        <path d="M60 118 h90 v-45 h-90 Z" />
        <path d="M60 73 l29 -29 h90 l-29 29 Z" />
        <path d="M150 118 l29 -29 v-45 l-29 29 Z" />
        {/* compressed layers */}
        <g strokeWidth="0.5" opacity="0.45">
          <line x1="60" y1="84" x2="150" y2="84" />
          <line x1="60" y1="95" x2="150" y2="95" />
          <line x1="60" y1="106" x2="150" y2="106" />
        </g>
      </g>
      <DimLine x1={60} y1={132} x2={150} y2={132} />
      <text x="105" y="147" textAnchor="middle" className={dimText}>
        30 cm
      </text>
      <DimLine x1={192} y1={44} x2={192} y2={89} />
      <text x="199" y="70" className={dimText}>
        15
      </text>
      <text x="172" y="114" className={dimText}>
        30
      </text>
      <text x="120" y="26" textAnchor="middle" className={noteText}>
        5 kg block, compressed 5 : 1
      </text>
    </g>
  );
}

function ChipsDrawing() {
  return (
    <g strokeWidth="1.25">
      <g className={ink}>
        {/* screen-graded chips */}
        <path d="M52 66 L74 58 L86 74 L70 88 L50 82 Z" />
        <path d="M104 48 L124 44 L134 60 L118 72 L100 64 Z" />
        <path d="M148 70 L172 62 L186 78 L168 94 L146 86 Z" />
        <path d="M84 96 L104 90 L114 104 L98 116 L80 110 Z" />
        <path d="M126 84 L140 80 L148 92 L136 102 L122 96 Z" />
        {/* fiber texture on two chips */}
        <g strokeWidth="0.5" opacity="0.45">
          <line x1="58" y1="68" x2="78" y2="78" />
          <line x1="152" y1="74" x2="176" y2="84" />
          <line x1="108" y1="52" x2="126" y2="62" />
        </g>
      </g>
      {/* grading scale */}
      <DimLine x1={60} y1={138} x2={180} y2={138} />
      <g className={dim} strokeWidth="1">
        <line x1="100" y1="135" x2="100" y2="141" />
        <line x1="140" y1="135" x2="140" y2="141" />
      </g>
      <text x="120" y="154" textAnchor="middle" className={dimText}>
        graded 1 – 3 cm
      </text>
      <text x="120" y="30" textAnchor="middle" className={noteText}>
        screen-graded fraction
      </text>
    </g>
  );
}

function ChipBlockDrawing() {
  return (
    <g strokeWidth="1.25">
      <g className={ink}>
        {/* compressed block */}
        <path d="M28 108 h52 v-34 h-52 Z" />
        <path d="M28 74 l14 -11 h52 l-14 11 Z" />
        <path d="M80 108 l14 -11 v-34 l-14 11 Z" />
        {/* chip texture on the front face */}
        <g strokeWidth="0.5" opacity="0.45">
          <path d="M34 82 l8 -3 l5 6 l-7 5 Z M52 80 l9 -2 l4 7 l-8 4 Z M38 96 l9 -3 l5 6 l-8 5 Z M58 94 l8 -2 l5 6 l-7 5 Z" />
        </g>
        {/* hydration arrow */}
        <path d="M106 86 h22 M122 80 l6 6 l-6 6" />
        {/* loosened chips */}
        <path d="M146 78 L162 72 L171 84 L159 94 L144 90 Z" />
        <path d="M176 62 L191 59 L198 71 L186 80 L173 74 Z" />
        <path d="M184 92 L201 86 L211 98 L198 109 L182 104 Z" />
        <path d="M152 104 L166 100 L173 110 L162 118 L149 114 Z" />
      </g>
      <text x="61" y="130" textAnchor="middle" className={dimText}>
        5 kg block
      </text>
      <text x="178" y="136" textAnchor="middle" className={dimText}>
        husk chips
      </text>
      <text x="120" y="30" textAnchor="middle" className={noteText}>
        loosens after hydration
      </text>
    </g>
  );
}

function GrowBagDrawing() {
  return (
    <g strokeWidth="1.25">
      <g className={ink}>
        {/* bag side elevation 100 × 12 */}
        <rect x="24" y="84" width="192" height="34" rx="4" />
        {/* planting holes */}
        <ellipse cx="60" cy="84" rx="14" ry="4.5" />
        <ellipse cx="120" cy="84" rx="14" ry="4.5" />
        <ellipse cx="180" cy="84" rx="14" ry="4.5" />
        {/* seedlings */}
        <path d="M60 82 C57 72 52 68 48 66 M60 82 C63 70 68 66 73 64 M60 82 L60 70" />
        <path d="M120 82 C117 72 112 68 108 66 M120 82 C123 70 128 66 133 64 M120 82 L120 70" />
        <path d="M180 82 C177 72 172 68 168 66 M180 82 C183 70 188 66 193 64 M180 82 L180 70" />
        {/* drain slits */}
        <g strokeWidth="1">
          <line x1="44" y1="118" x2="52" y2="118" />
          <line x1="116" y1="118" x2="124" y2="118" />
          <line x1="188" y1="118" x2="196" y2="118" />
        </g>
      </g>
      <DimLine x1={24} y1={134} x2={216} y2={134} />
      <text x="120" y="149" textAnchor="middle" className={dimText}>
        100 cm
      </text>
      <DimLine x1={224} y1={84} x2={224} y2={118} />
      <text x="238" y="104" textAnchor="end" className={dimText}>
        14
      </text>
      <text x="24" y="44" className={noteText}>
        holes cut to buyer spec
      </text>
    </g>
  );
}

function BaleDrawing() {
  return (
    <g strokeWidth="1.25">
      <g className={ink}>
        <rect x="48" y="48" width="144" height="76" rx="6" />
        {/* straps */}
        <line x1="88" y1="48" x2="88" y2="124" />
        <line x1="152" y1="48" x2="152" y2="124" />
        {/* fiber strands */}
        <g strokeWidth="0.5" opacity="0.5">
          <path d="M56 62 C72 58 100 66 116 60 C136 54 160 64 184 58" />
          <path d="M56 78 C76 74 96 82 120 76 C144 70 164 80 184 74" />
          <path d="M56 94 C72 90 100 98 116 92 C136 86 160 96 184 90" />
          <path d="M56 110 C76 106 96 114 120 108 C144 102 164 112 184 106" />
        </g>
      </g>
      <DimLine x1={48} y1={140} x2={192} y2={140} />
      <text x="120" y="155" textAnchor="middle" className={dimText}>
        ≈ 100 – 120 kg
      </text>
      <text x="120" y="36" textAnchor="middle" className={noteText}>
        machine-compressed, strapped
      </text>
    </g>
  );
}
