import HubCategoryCardImage from "@/components/hub/HubCategoryCardImage";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import type { DirectoryCategory, DirectoryType } from "@/lib/directory";
import { getHubCategoryHref, resolveHubCategoryImages } from "@/lib/hubCategoryImages";
import Link from "next/link";
import type { ReactNode } from "react";

type HubCategoryGridProps = {
  categories: DirectoryCategory[];
  type: DirectoryType;
  title?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  /** When set, only these category IDs are clickable; others show Coming soon */
  populatedCategoryIds?: ReadonlySet<string>;
};

function CategoryCardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-sand-dark/45 bg-warm-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CategoryCardContent({
  cat,
  image,
  isPopulated,
}: {
  cat: DirectoryCategory;
  image: { src: string; alt: string };
  isPopulated: boolean;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
      <HubCategoryCardImage src={image.src} alt={image.alt} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/10 transition-opacity duration-300 group-hover:from-navy/95 group-hover:via-navy/45" />
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-medium leading-tight text-cream sm:text-lg">
            {cat.title}
          </h3>
          {!isPopulated && (
            <span className="rounded-sm bg-cream/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cream/90 backdrop-blur-sm">
              Coming soon
            </span>
          )}
        </div>
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-cream/80 sm:text-xs">
          {cat.description}
        </p>
        {isPopulated ? (
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-sunset opacity-0 transition-all duration-300 group-hover:opacity-100">
            View listings
            <span aria-hidden="true">&rarr;</span>
          </span>
        ) : (
          <p className="mt-2 text-[10px] font-medium text-cream/55">
            Listings opening in this category soon.
          </p>
        )}
      </div>
    </div>
  );
}

export default function HubCategoryGrid({
  categories,
  type,
  title = "Browse by Category",
  description = "Jump to the type of experience or service you need.",
  eyebrow = "Explore",
  id = "browse-categories",
  populatedCategoryIds,
}: HubCategoryGridProps) {
  const categoryImages = resolveHubCategoryImages(categories, type);
  const usePopulatedMode = populatedCategoryIds !== undefined;

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
          const isPopulated = usePopulatedMode
            ? populatedCategoryIds.has(cat.id)
            : true;
          const href = getHubCategoryHref(type, cat.id, cat.hubAnchor, {
            populatedOnly: usePopulatedMode,
            hasListings: isPopulated,
          });

          if (href) {
            return (
              <Link
                key={cat.id}
                href={href}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(27,58,75,0.35)]"
              >
                <CategoryCardShell className="transition-colors hover:border-teal/45">
                  <CategoryCardContent
                    cat={cat}
                    image={image}
                    isPopulated={isPopulated}
                  />
                </CategoryCardShell>
              </Link>
            );
          }

          return (
            <CategoryCardShell
              key={cat.id}
              className="opacity-95"
              aria-disabled="true"
            >
              <CategoryCardContent cat={cat} image={image} isPopulated={false} />
            </CategoryCardShell>
          );
        })}
      </div>
    </HubSectionShell>
  );
}
