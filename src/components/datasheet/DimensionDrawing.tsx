type DimensionDrawingProps = {
  length: number;
  width: number;
  height: number;
  unit: string;
  caption: string;
};

const W = 360;
const H = 160;
const PAD_L = 16;
const PAD_R = 64;
const PAD_T = 36;
const PAD_B = 40;
const DEPTH = 0.45; // cabinet projection: depth drawn at this fraction

/**
 * A proportional cabinet-projection box with the three outer dimensions
 * called out, so a 100 × 18 × 14 slab and a 30 × 30 × 12 block each read
 * at a glance.
 */
export function DimensionDrawing({
  length,
  width,
  height,
  unit,
  caption,
}: DimensionDrawingProps) {
  const depthX = width * DEPTH * Math.SQRT1_2;
  const depthY = width * DEPTH * Math.SQRT1_2;
  const scale = Math.min(
    (W - PAD_L - PAD_R) / (length + depthX),
    (H - PAD_T - PAD_B) / (height + depthY),
  );

  const l = length * scale;
  const h = height * scale;
  const dx = depthX * scale;
  const dy = depthY * scale;

  // Front-face origin (bottom-left), centred in the drawing area.
  const x0 = PAD_L + (W - PAD_L - PAD_R - l - dx) / 2;
  const y0 = H - PAD_B - (H - PAD_T - PAD_B - h - dy) / 2;

  const front = `M${x0},${y0} h${l} v${-h} h${-l} Z`;
  const top = `M${x0},${y0 - h} l${dx},${-dy} h${l} l${-dx},${dy} Z`;
  const side = `M${x0 + l},${y0} l${dx},${-dy} v${-h} l${-dx},${dy} Z`;

  const dimLine = "stroke-gold-deep";
  const dimText = "fill-gold-deep font-mono text-[11px] tracking-[0.06em]";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`${caption}: ${length} by ${width} by ${height} ${unit}`}
      className="h-auto w-full"
    >
      <g fill="none" strokeWidth="1.25" strokeLinejoin="round">
        <path d={top} className="fill-parchment stroke-ink" />
        <path d={side} className="fill-rule/60 stroke-ink" />
        <path d={front} className="fill-paper stroke-ink" />
      </g>

      {/* length */}
      <g className={dimLine} strokeWidth="1">
        <line x1={x0} y1={y0 + 14} x2={x0 + l} y2={y0 + 14} />
        <line x1={x0} y1={y0 + 10} x2={x0} y2={y0 + 18} />
        <line x1={x0 + l} y1={y0 + 10} x2={x0 + l} y2={y0 + 18} />
      </g>
      <text x={x0 + l / 2} y={y0 + 30} textAnchor="middle" className={dimText}>
        {length} {unit}
      </text>

      {/* height */}
      <g className={dimLine} strokeWidth="1">
        <line x1={x0 + l + dx + 22} y1={y0 - dy} x2={x0 + l + dx + 22} y2={y0 - dy - h} />
        <line x1={x0 + l + dx + 18} y1={y0 - dy} x2={x0 + l + dx + 26} y2={y0 - dy} />
        <line x1={x0 + l + dx + 18} y1={y0 - dy - h} x2={x0 + l + dx + 26} y2={y0 - dy - h} />
      </g>
      <text
        x={x0 + l + dx + 30}
        y={y0 - dy - h / 2 + 4}
        className={dimText}
      >
        {height}
      </text>

      {/* width (depth), along the bottom-right edge */}
      <g className={dimLine} strokeWidth="1">
        <line x1={x0 + l + 6} y1={y0 + 6} x2={x0 + l + dx + 6} y2={y0 - dy + 6} />
        <line x1={x0 + l + 3} y1={y0 + 9} x2={x0 + l + 9} y2={y0 + 3} />
        <line x1={x0 + l + dx + 3} y1={y0 - dy + 9} x2={x0 + l + dx + 9} y2={y0 - dy + 3} />
      </g>
      <text
        x={x0 + l + dx / 2 + 14}
        y={y0 - dy / 2 + 14}
        className={dimText}
      >
        {width}
      </text>

      <text
        x={PAD_L}
        y={16}
        className="fill-ink-soft font-mono text-[10px] tracking-[0.14em] uppercase"
      >
        {caption} · L × W × H in {unit}
      </text>
    </svg>
  );
}
