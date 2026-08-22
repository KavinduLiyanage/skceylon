type SectionHeadingProps = {
  /** Mono index like "01" — optional. */
  index?: string;
  eyebrow: string;
  title: string;
  onInk?: boolean;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  onInk = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`font-mono text-[0.6875rem] tracking-[0.18em] uppercase ${
          onInk ? "text-gold" : "text-green-deep"
        }`}
      >
        {index && <span>{index} — </span>}
        {eyebrow}
      </p>
      <Tag
        className={`mt-3 font-display text-3xl leading-tight font-medium text-balance sm:text-4xl ${
          onInk ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </Tag>
    </div>
  );
}
