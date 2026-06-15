import Link from "next/link";

type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
};

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  linkHref,
  linkLabel,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className="mb-10 flex scroll-mt-24 flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl font-medium text-navy sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
          {description}
        </p>
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="shrink-0 text-sm font-semibold text-coral transition-colors hover:text-coral-light"
        >
          {linkLabel} &rarr;
        </Link>
      )}
    </div>
  );
}
