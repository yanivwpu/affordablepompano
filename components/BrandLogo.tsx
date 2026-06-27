import Link from "next/link";

type BrandLogoProps = {
  variant?: "horizontal" | "stacked";
  theme?: "light" | "dark";
  href?: string;
  className?: string;
  wordmarkClassName?: string;
  taglineClassName?: string;
  priority?: boolean;
};

/** Wave + sun mark — unchanged from Direction A (02-wave-sun) */
function WaveSunMark({
  theme,
  className,
}: {
  theme: "light" | "dark";
  className?: string;
}) {
  const wave = theme === "light" ? "#2A8B8B" : "#3BAFAF";

  return (
    <svg
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`block h-9 w-12 shrink-0 sm:h-10 sm:w-[3.25rem] ${className ?? ""}`}
    >
      <g transform="translate(0, 4)">
        <path
          d="M4 32 Q16 24 28 32 T52 32"
          stroke={wave}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M4 38 Q16 30 28 38 T52 38"
          stroke={wave}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <circle cx="44" cy="14" r="6" fill="#F4A261" opacity="0.9" />
      </g>
    </svg>
  );
}

function HorizontalLogo({
  theme,
  className,
  wordmarkClassName,
  taglineClassName,
}: {
  theme: "light" | "dark";
  className?: string;
  wordmarkClassName?: string;
  taglineClassName?: string;
}) {
  const wordmark =
    theme === "light"
      ? "font-display text-xl font-medium tracking-tight text-navy transition-colors group-hover:text-teal sm:text-2xl"
      : "font-display text-xl font-medium tracking-tight text-cream transition-colors group-hover:text-coral-light sm:text-2xl";

  const tagline =
    theme === "light"
      ? "mt-0.5 block text-[11px] italic tracking-wide text-foreground/55 sm:text-xs"
      : "mt-0.5 block text-[11px] italic tracking-wide text-cream/70 sm:text-xs";

  return (
    <div
      className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className ?? ""}`}
    >
      <WaveSunMark theme={theme} />
      <div className="min-w-0 leading-none">
        <span className={`block ${wordmark} ${wordmarkClassName ?? ""}`}>
          Affordable Pompano
        </span>
        <span className={`${tagline} ${taglineClassName ?? ""}`}>
          Pompano Beach, Florida
        </span>
      </div>
    </div>
  );
}

function StackedLogo({
  theme,
  className,
}: {
  theme: "light" | "dark";
  className?: string;
}) {
  const wordmark = theme === "light" ? "#1B3A4B" : "#FFFCF7";
  const tagline = theme === "light" ? "#1B3A4B" : "#FFFCF7";
  const taglineOpacity = theme === "light" ? 0.65 : 0.75;
  const wave = theme === "light" ? "#2A8B8B" : "#3BAFAF";

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Affordable Pompano - Pompano Beach, Florida"
      className={`block h-56 w-56 ${className ?? ""}`}
    >
      <title>Affordable Pompano</title>
      <g transform="translate(160, 40)">
        <path
          d="M12 68 Q40 58 68 68"
          stroke={wave}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M12 76 Q40 66 68 76"
          stroke={wave}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />
        <circle cx="58" cy="18" r="10" fill="#F4A261" opacity="0.9" />
      </g>
      <text
        x="200"
        y="168"
        textAnchor="middle"
        fill={wordmark}
        fontSize="32"
        fontWeight="500"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Affordable
      </text>
      <text
        x="200"
        y="208"
        textAnchor="middle"
        fill={wordmark}
        fontSize="32"
        fontWeight="500"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Pompano
      </text>
      <text
        x="200"
        y="238"
        textAnchor="middle"
        fill={tagline}
        fillOpacity={taglineOpacity}
        fontSize="13"
        fontStyle="italic"
        style={{ fontFamily: "var(--font-dm-sans), Arial, sans-serif" }}
      >
        Pompano Beach, Florida
      </text>
    </svg>
  );
}

export default function BrandLogo({
  variant = "horizontal",
  theme = "light",
  href = "/",
  className = "",
  wordmarkClassName,
  taglineClassName,
}: BrandLogoProps) {
  const logo =
    variant === "horizontal" ? (
      <HorizontalLogo
        theme={theme}
        className={className}
        wordmarkClassName={wordmarkClassName}
        taglineClassName={taglineClassName}
      />
    ) : (
      <StackedLogo theme={theme} className={className} />
    );

  if (!href) {
    return logo;
  }

  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center"
      aria-label="Affordable Pompano - Pompano Beach, Florida"
    >
      {logo}
    </Link>
  );
}
