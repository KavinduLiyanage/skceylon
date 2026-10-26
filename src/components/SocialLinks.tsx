import { SOCIAL_LINKS } from "@/content/site";

type SocialLinksProps = {
  /** Renders on dark (ink) backgrounds when true. */
  onInk?: boolean;
  className?: string;
};

const ICONS: Record<(typeof SOCIAL_LINKS)[number]["id"], string> = {
  facebook:
    "M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z",
  linkedin:
    "M6.9 9.3H3.7V20h3.2V9.3ZM5.3 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.4c0-3.2-1.7-4.4-4-4.4-1.8 0-2.6 1-3 1.7V9.3H10V20h3.2v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.8 1.6 1.8 2.9V20h3.3v-6.6Z",
};

/**
 * The company social profiles as tappable chips, matching the WhatsApp
 * chips. Each opens the profile in a new tab.
 */
export function SocialLinks({
  onInk = false,
  className = "",
}: SocialLinksProps) {
  const chip = onInk
    ? "border-paper/25 text-paper hover:border-gold hover:text-gold"
    : "border-rule-strong bg-paper text-ink hover:border-green hover:text-green-deep";
  const icon = onInk ? "text-gold" : "text-green";

  return (
    <ul
      aria-label="Social media"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {SOCIAL_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`SK Ceylon on ${link.label}`}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-colors ${chip}`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className={`h-4 w-4 shrink-0 ${icon}`}
              fill="currentColor"
            >
              <path d={ICONS[link.id]} />
            </svg>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
