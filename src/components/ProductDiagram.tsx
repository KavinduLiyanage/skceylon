import Image from "next/image";
import type { ProductDiagramKind } from "@/content/products";

type ProductDiagramProps = {
  kind: ProductDiagramKind;
  className?: string;
};

/**
 * Dimension figures shown beside the product photo. The block uses a branded
 * infographic photo; the rest are technical line drawings. Decorative: the
 * figures repeat data from the adjacent spec table.
 */
export function ProductDiagram({ kind, className = "" }: ProductDiagramProps) {
  if (kind === "block") {
    return (
      <Image
        src="/images/product-blocks-4.avif"
        alt="5 kg coco peat block dimensions: 30 × 30 × 12 cm at 5:1 compression"
        width={1200}
        height={800}
        className={`h-auto w-full rounded-lg ${className}`}
      />
    );
  }
  return (
    <svg
      viewBox="0 0 240 170"
      className={`h-auto w-full ${className}`}
      aria-hidden="true"
      fill="none"
    >
      {kind === "chips" && <ChipsDrawing />}
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
        12
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
