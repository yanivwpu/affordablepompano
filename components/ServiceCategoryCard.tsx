import Image from "next/image";
import Link from "next/link";
import { REALTOR_EMAIL } from "@/lib/images";

type ServiceCategoryCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: readonly string[];
};

export default function ServiceCategoryCard({
  id,
  title,
  description,
  image,
  imageAlt,
  highlights,
}: ServiceCategoryCardProps) {
  return (
    <article
      id={id}
      className="group card-hover scroll-mt-28 flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover brightness-110 saturate-[1.05] transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
        <h2 className="font-display absolute bottom-4 left-4 text-2xl font-medium text-cream">
          {title}
        </h2>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-navy/70">{description}</p>
        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-navy/65"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-2 pt-6">
          <Link
            href="#idx-search"
            className="inline-flex w-full items-center justify-center rounded-sm bg-teal px-4 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal-light"
          >
            Search Listings
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="#alerts"
              className="inline-flex items-center justify-center rounded-sm border border-teal/30 bg-teal/5 px-3 py-2.5 text-xs font-semibold text-teal transition-colors hover:bg-teal hover:text-cream"
            >
              Get Alerts
            </Link>
            <Link
              href="#showing"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-3 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-coral-light"
            >
              Schedule Showing
            </Link>
          </div>
          <a
            href={`mailto:${REALTOR_EMAIL}?subject=${encodeURIComponent(title)}`}
            className="inline-flex w-full items-center justify-center rounded-sm border border-coral/30 px-4 py-2.5 text-sm font-semibold text-coral transition-colors hover:bg-coral hover:text-cream"
          >
            Contact Realtor
          </a>
        </div>
      </div>
    </article>
  );
}
