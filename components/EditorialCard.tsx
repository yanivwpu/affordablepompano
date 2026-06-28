import Image from "next/image";
import Link from "next/link";
import { getUsableUrl } from "@/lib/directory/listingLinks";

type EditorialCardProps = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href?: string;
  meta?: string[];
  priceRange?: string;
  featured?: boolean;
  badge?: string;
  comingSoon?: boolean;
  actionLabel?: string;
  actionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
};

export default function EditorialCard({
  title,
  excerpt,
  category,
  image,
  imageAlt,
  href = "#",
  meta = [],
  priceRange,
  featured = false,
  badge,
  comingSoon = true,
  actionLabel,
  actionHref,
  secondaryActionLabel = "Learn More",
  secondaryActionHref,
}: EditorialCardProps) {
  const actionLink = getUsableUrl(actionHref);
  const secondaryLink = getUsableUrl(secondaryActionHref);
  const hasAction = Boolean(actionLabel && actionLink);
  const hasSecondary = Boolean(secondaryActionLabel && secondaryLink);

  const imageBlock = (
    <div
      className={`relative overflow-hidden ${
        featured ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={
          featured
            ? "(max-width: 1024px) 100vw, 66vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        <span className="rounded-sm bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal backdrop-blur-sm">
          {category}
        </span>
        {badge && (
          <span className="rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
            {badge}
          </span>
        )}
      </div>
      {priceRange && (
        <span className="absolute bottom-4 right-4 rounded-sm bg-navy/80 px-2.5 py-1 text-xs font-bold tracking-wide text-cream backdrop-blur-sm">
          {priceRange}
        </span>
      )}
    </div>
  );

  const contentBlock = (
    <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
      {meta.length > 0 && (
        <p className="mb-3 flex flex-wrap gap-x-1 text-[11px] font-medium uppercase tracking-wider text-navy/45">
          {meta.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className="mx-1 text-sand-dark">·</span>}
              {item}
            </span>
          ))}
        </p>
      )}
      <h3
        className={`font-display font-medium leading-snug text-navy transition-colors group-hover:text-teal ${
          featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 flex-1 leading-relaxed text-navy/70 ${
          featured ? "text-base sm:text-lg" : "text-sm"
        }`}
      >
        {excerpt}
      </p>
      {comingSoon && !hasAction && (
        <p className="mt-3 text-xs italic text-navy/50">Full review coming soon</p>
      )}
      {hasAction ? (
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <a
            href={actionLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-coral px-4 py-3.5 text-sm font-bold tracking-wide text-cream shadow-md transition-all hover:bg-coral-light hover:shadow-lg"
          >
            {actionLabel}
            <span aria-hidden="true" className="text-cream/80">
              &rarr;
            </span>
          </a>
          {hasSecondary && (
            <a
              href={secondaryLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex flex-1 items-center justify-center rounded-sm border-2 border-teal/25 bg-white/60 px-4 py-3.5 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
            >
              {secondaryActionLabel}
            </a>
          )}
        </div>
      ) : (
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-3 group-hover:text-coral-light">
          Read More
          <span aria-hidden="true">&rarr;</span>
        </span>
      )}
    </div>
  );

  return (
    <article
      className={`group card-hover florida-border-top overflow-hidden rounded-sm border border-sand-dark/60 bg-cream shadow-sm ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {hasAction ? (
        <div className="flex h-full flex-col">
          {imageBlock}
          {contentBlock}
        </div>
      ) : (
        <Link href={href} className="flex h-full flex-col">
          {imageBlock}
          {contentBlock}
        </Link>
      )}
    </article>
  );
}
