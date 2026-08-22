import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onInk?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-mono text-sm font-medium tracking-wide transition-all";

export function CtaLink({
  href,
  children,
  variant = "primary",
  onInk = false,
  className = "",
}: CtaLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-green text-paper shadow-sm shadow-green/30 hover:-translate-y-0.5 hover:bg-green-deep hover:shadow-md hover:shadow-green/25"
      : variant === "secondary"
        ? onInk
          ? "border border-paper/40 text-paper hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          : "border border-ink/25 bg-paper/60 text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-paper"
        : onInk
          ? "text-gold underline-offset-4 hover:underline"
          : "text-green-deep underline-offset-4 hover:underline";

  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const classes = `${base} ${styles} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
