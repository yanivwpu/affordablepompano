type AdSensePlaceholderProps = {
  label?: "Advertisement" | "Sponsored";
  size?: "leaderboard" | "rectangle" | "banner";
  className?: string;
};

const sizeConfig = {
  leaderboard: {
    minHeight: "min-h-[100px] sm:min-h-[120px]",
    hint: "728 × 90 leaderboard",
  },
  rectangle: {
    minHeight: "min-h-[280px] sm:min-h-[300px]",
    hint: "300 × 250 medium rectangle",
  },
  banner: {
    minHeight: "min-h-[90px] sm:min-h-[100px]",
    hint: "320 × 100 large mobile banner",
  },
} as const;

export default function AdSensePlaceholder({
  label = "Advertisement",
  size = "rectangle",
  className = "",
}: AdSensePlaceholderProps) {
  const config = sizeConfig[size];

  return (
    <aside
      className={`overflow-hidden rounded-sm border border-sand-dark/45 bg-sand/40 ${className}`}
      aria-label={`${label} placeholder`}
    >
      <div className="flex items-center justify-center border-b border-sand-dark/25 bg-cream/60 px-4 py-2.5">
        <span className="text-[10px] font-medium tracking-[0.18em] text-navy/45">
          [ {label} ]
        </span>
      </div>
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-b from-cream/90 to-sand/30 px-6 py-8 ${config.minHeight}`}
      >
        <div className="flex max-w-md flex-col items-center gap-3 text-center">
          <div className="h-px w-12 bg-sand-dark/40" aria-hidden="true" />
          <p className="text-xs font-medium text-navy/40">
            Google AdSense placement
          </p>
          <p className="text-[10px] text-navy/30">{config.hint}</p>
          <div className="h-px w-12 bg-sand-dark/40" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}
