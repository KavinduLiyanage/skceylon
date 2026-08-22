/**
 * Illustrated hero scene: coconut palms over terraced crop rows in the
 * coconut triangle, drawn flat and editorial. Stands in for photography
 * until real plantation/mill imagery is available.
 */
export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 440"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Stylized illustration of coconut palms over terraced crop rows"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf4e6" />
          <stop offset="100%" stopColor="#f0e2c6" />
        </linearGradient>
        <linearGradient id="hs-field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7a58" />
          <stop offset="100%" stopColor="#35593f" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="560" height="440" fill="url(#hs-sky)" />

      {/* sun */}
      <circle cx="408" cy="104" r="86" fill="#e0a43c" opacity="0.14" />
      <circle cx="408" cy="104" r="52" fill="#e2b25c" />

      {/* distant hills */}
      <path
        d="M0 236 C 90 214 170 222 250 230 C 340 239 420 226 560 234 L560 260 L0 260 Z"
        fill="#a9bd92"
      />
      <path
        d="M0 252 C 110 236 210 246 320 250 C 420 254 480 246 560 250 L560 280 L0 280 Z"
        fill="#7fa571"
      />

      {/* greenhouse ridge on the horizon */}
      <g stroke="#fcfaf5" strokeWidth="2" opacity="0.65" fill="none">
        <path d="M36 250 L58 234 L80 250 M80 250 L102 234 L124 250 M124 250 L146 234 L168 250" />
        <path d="M36 250 L36 258 M80 250 L80 258 M124 250 L124 258 M168 250 L168 258" />
        <path d="M32 258 L172 258" />
      </g>

      {/* field with crop rows */}
      <path d="M0 258 L560 258 L560 440 L0 440 Z" fill="url(#hs-field)" />
      <g stroke="#8fb397" strokeWidth="2" fill="none" opacity="0.55">
        <path d="M-10 276 Q 280 262 570 278" />
        <path d="M-10 296 Q 280 278 570 298" />
        <path d="M-10 320 Q 280 298 570 323" />
        <path d="M-10 350 Q 280 324 570 354" />
        <path d="M-10 386 Q 280 356 570 391" />
        <path d="M-10 428 Q 280 394 570 433" />
      </g>

      {/* foreground soil band */}
      <path
        d="M0 404 C 140 392 300 398 560 410 L560 440 L0 440 Z"
        fill="#3a2c1e"
      />

      {/* palm — main */}
      <g transform="translate(430 178)" fill="#2f4a38">
        {/* trunk */}
        <path d="M-2 0 C 6 60 2 130 16 224 L 34 224 C 18 130 16 60 10 0 Z" />
        {/* fronds */}
        <path d="M4 2 C -30 -16 -64 -22 -92 -12 C -62 -2 -30 2 4 2 Z" />
        <path d="M4 0 C -24 -30 -50 -48 -80 -54 C -54 -30 -26 -12 4 0 Z" />
        <path d="M4 -2 C -6 -38 -18 -64 -40 -78 C -22 -48 -8 -20 4 -2 Z" />
        <path d="M6 -2 C 10 -40 22 -66 44 -80 C 26 -48 12 -20 6 -2 Z" />
        <path d="M6 0 C 32 -30 60 -46 90 -48 C 62 -26 32 -10 6 0 Z" />
        <path d="M6 2 C 38 -12 70 -14 98 -2 C 68 6 36 6 6 2 Z" />
        <path d="M8 4 C 36 12 60 26 76 50 C 52 32 26 16 8 4 Z" />
        <path d="M2 4 C -26 12 -50 28 -64 52 C -42 32 -18 16 2 4 Z" />
        {/* coconuts */}
        <circle cx="-2" cy="10" r="6" fill="#5b4632" />
        <circle cx="10" cy="14" r="6" fill="#6b533c" />
        <circle cx="4" cy="20" r="6" fill="#4a3826" />
      </g>

      {/* palm — smaller, behind */}
      <g transform="translate(508 210) scale(-0.72 0.72)" fill="#24382b">
        <path d="M-2 0 C 6 60 2 130 16 224 L 34 224 C 18 130 16 60 10 0 Z" />
        <path d="M4 2 C -30 -16 -64 -22 -92 -12 C -62 -2 -30 2 4 2 Z" />
        <path d="M4 0 C -24 -30 -50 -48 -80 -54 C -54 -30 -26 -12 4 0 Z" />
        <path d="M4 -2 C -6 -38 -18 -64 -40 -78 C -22 -48 -8 -20 4 -2 Z" />
        <path d="M6 -2 C 10 -40 22 -66 44 -80 C 26 -48 12 -20 6 -2 Z" />
        <path d="M6 0 C 32 -30 60 -46 90 -48 C 62 -26 32 -10 6 0 Z" />
        <path d="M6 2 C 38 -12 70 -14 98 -2 C 68 6 36 6 6 2 Z" />
      </g>
    </svg>
  );
}
