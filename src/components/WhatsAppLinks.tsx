import { COMPANY } from "@/content/site";

type WhatsAppLinksProps = {
  /** Renders on dark (ink) backgrounds when true. */
  onInk?: boolean;
  className?: string;
};

/** wa.me expects the number as digits only, with country code. */
const chatUrl = (number: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}`;

/**
 * The company WhatsApp numbers as tappable chips. Each opens a chat with
 * that number, in the app on phones and WhatsApp Web on desktop.
 */
export function WhatsAppLinks({
  onInk = false,
  className = "",
}: WhatsAppLinksProps) {
  const chip = onInk
    ? "border-paper/25 text-paper hover:border-gold hover:text-gold"
    : "border-rule-strong bg-paper text-ink hover:border-green hover:text-green-deep";
  const icon = onInk ? "text-gold" : "text-green";

  return (
    <ul
      aria-label="WhatsApp numbers"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {COMPANY.whatsapp.map((number) => (
        <li key={number}>
          <a
            href={chatUrl(number)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp with ${number}`}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-colors ${chip}`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className={`h-4 w-4 shrink-0 ${icon}`}
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.300s1 2.700 1.200 2.900c.1.200 2 3.200 5 4.400 2.500 1 3 .800 3.500.700.600 0 1.700-.700 2-1.400.200-.700.200-1.200.100-1.400l-.500-.300-1.800-.900c-.200-.100-.400-.100-.600.100l-.800 1c-.100.200-.300.200-.500.100a6.700 6.700 0 0 1-3.300-2.900c-.200-.400.200-.400.600-1.200.100-.200 0-.300 0-.500l-.800-2c-.200-.500-.400-.400-.600-.400Z" />
            </svg>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}
