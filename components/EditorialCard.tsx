import Image from "next/image";
import Link from "next/link";

type EditorialCardProps = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href?: string;
  meta?: string[];
  featured?: boolean;
  badge?: string;
  comingSoon?: boolean;
  actionLabel?: string;
  actionHref?: string;
};

export default function EditorialCard({
  title,
  excerpt,
  category,
  image,
  imageAlt,
  href = "#",
  meta = [],
  featured = false,
  badge,
  comingSoon = true,
  actionLabel,
  actionHref,
}: EditorialCardProps) {
  const hasAction = Boolean(actionLabel && actionHref);

  const body = (
    <>
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
          className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
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
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-7" : "p-5"}`}>
        {meta.length > 0 && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-navy/45">
            {meta.join(" · ")}
          </p>
        )}
        <h3
          className={`font-display font-medium leading-snug text-navy transition-colors group-hover:text-teal ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
          {excerpt}
        </p>
        {comingSoon && !hasAction && (
          <p className="mt-3 text-xs italic text-navy/50">
            Full review coming soon
          </p>
        )}
        {hasAction ? (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href={actionHref}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex flex-1 items-center justify-center rounded-sm bg-coral px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-coral-light"
            >
              {actionLabel}
            </a>
            <span className="inline-flex flex-1 items-center justify-center rounded-sm border border-teal/30 px-4 py-2.5 text-sm font-semibold text-teal">
              Learn More
            </span>
          </div>
        ) : (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-3 group-hover:text-coral-light">
            Preview
            <span aria-hidden="true">&rarr;</span>
          </span>
        )}
      </div>
    </>
  );

  return (
    <article
      className={`group card-hover overflow-hidden rounded-sm border border-sand-dark/60 bg-cream ${
        featured ? "lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      {hasAction ? (
        <div className="flex h-full flex-col">{body}</div>
      ) : (
        <Link href={href} className="flex h-full flex-col">
          {body}
        </Link>
      )}
    </article>
  );
}
