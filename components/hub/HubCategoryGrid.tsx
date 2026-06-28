import Image from "next/image";
import Link from "next/link";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import type { DirectoryCategory, DirectoryType } from "@/lib/directory";
import { getHubCategoryHref, resolveHubCategoryImages } from "@/lib/hubCategoryImages";

type HubCategoryGridProps = {
  categories: DirectoryCategory[];
  type: DirectoryType;
  title?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
};

export default function HubCategoryGrid({
  categories,
  type,
  title = "Browse by Category",
  description = "Jump to the type of experience or service you need.",
  eyebrow = "Explore",
  id = "browse-categories",
}: HubCategoryGridProps) {
  const categoryImages = resolveHubCategoryImages(categories, type);

  return (
    <HubSectionShell id={id} variant="categories">
      <HubSectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {categories.map((cat) => {
          const image = categoryImages.get(cat.id)!;
          const href = getHubCategoryHref(type, cat.id, cat.hubAnchor);

          return (
            <Link
              key={cat.id}
              href={href}
              className="group relative overflow-hidden rounded-sm border border-sand-dark/45 bg-warm-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/45 hover:shadow-[0_12px_40px_-12px_rgba(27,58,75,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center brightness-105 saturate-[1.08] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/10 transition-opacity duration-300 group-hover:from-navy/95 group-hover:via-navy/45" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <h3 className="font-display text-base font-medium leading-tight text-cream sm:text-lg">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-cream/80 sm:text-xs">
                    {cat.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-sunset opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </HubSectionShell>
  );
}
