type AdSensePlaceholderProps = {
  label?: "Advertisement" | "Sponsored";
  size?: "banner" | "rectangle" | "leaderboard";
  className?: string;
};

const sizeClasses = {
  banner: "min-h-[90px]",
  rectangle: "min-h-[250px]",
  leaderboard: "min-h-[90px] sm:min-h-[120px]",
};

export default function AdSensePlaceholder({
  label = "Advertisement",
  size = "rectangle",
  className = "",
}: AdSensePlaceholderProps) {
  return (
    <aside
      className={`rounded-sm border border-sand-dark/50 bg-sand/60 ${className}`}
      aria-label={`${label} placeholder`}
    >
      <p className="border-b border-sand-dark/30 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
        {label}
      </p>
      <div
        className={`flex items-center justify-center bg-cream/80 px-4 py-6 ${sizeClasses[size]}`}
      >
        <p className="text-center text-xs text-navy/35">
          Google AdSense placement zone
          <span className="mt-1 block text-[10px] text-navy/25">
            Replace with ad unit embed code
          </span>
        </p>
      </div>
    </aside>
  );
}
