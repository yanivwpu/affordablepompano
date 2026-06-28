import Image from "next/image";
import Link from "next/link";

type EditorialGuideCardProps = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
};

export default function EditorialGuideCard({
  title,
  excerpt,
  category,
  image,
  imageAlt,
  href,
}: EditorialGuideCardProps) {
  return (
    <article className="group border-b border-sand-dark/35 pb-8 last:border-b-0 last:pb-0 sm:pb-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
        <Link
          href={href}
          className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-sm sm:aspect-auto sm:h-44 sm:w-[38%] lg:h-48 lg:w-[34%]"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 34vw"
            className="object-cover object-center brightness-105 saturate-[1.06] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-navy/10" />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">
            {category}
          </p>
          <h3 className="font-display mt-2 text-xl font-medium leading-snug text-navy transition-colors group-hover:text-teal sm:text-2xl lg:text-[1.65rem]">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy/68 sm:text-base">
            {excerpt}
          </p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-3 group-hover:text-coral-light"
          >
            Read Guide
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
