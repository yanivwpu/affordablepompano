import Image from "next/image";
import Link from "next/link";

type ContentCardProps = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href?: string;
  comingSoon?: boolean;
};

export default function ContentCard({
  title,
  excerpt,
  category,
  image,
  imageAlt,
  href = "#",
  comingSoon = false,
}: ContentCardProps) {
  return (
    <article className="group card-hover flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream">
      <Link href={href} className="flex h-full flex-col">
        <div className="guide-card-image relative aspect-video w-full shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-medium leading-snug text-navy transition-colors group-hover:text-teal sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/70">
            {excerpt}
          </p>
          {comingSoon && (
            <p className="mt-2 text-xs italic text-navy/50">
              Full guide coming soon
            </p>
          )}
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-3 group-hover:text-coral-light">
            {comingSoon ? "Preview" : "Read Guide"}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
