"use client";

import {
  inferPortraitListing,
  isPortraitAspectRatio,
  resolveListingImagePresentation,
} from "@/lib/directory/listingImage";
import type { DirectoryListing } from "@/lib/directory";
import Image from "next/image";
import { useState } from "react";

type ListingCardImageProps = {
  listing: DirectoryListing;
  priority?: boolean;
  sizes: string;
  /** Extra classes on the image element (brightness, transitions) */
  imageClassName?: string;
  hoverZoom?: boolean;
  /** Gradient overlay strength */
  overlay?: "featured" | "standard" | "horizontal" | "none";
};

const OVERLAY_CLASS: Record<NonNullable<ListingCardImageProps["overlay"]>, string> = {
  featured: "bg-gradient-to-t from-navy/55 via-navy/5 to-transparent",
  standard: "bg-gradient-to-t from-navy/55 via-navy/10 to-transparent",
  horizontal:
    "bg-gradient-to-t from-navy/50 via-navy/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-navy/10",
  none: "",
};

export default function ListingCardImage({
  listing,
  priority = false,
  sizes,
  imageClassName = "",
  hoverZoom = true,
  overlay = "featured",
}: ListingCardImageProps) {
  const initial = resolveListingImagePresentation(listing);
  const [presentation, setPresentation] = useState<"portrait" | "landscape">(initial);

  const isPortrait = presentation === "portrait";

  function handleLoad(img: HTMLImageElement) {
    if (listing.imagePresentation && listing.imagePresentation !== "auto") return;

    const detectedPortrait =
      isPortraitAspectRatio(img.naturalWidth, img.naturalHeight) ||
      inferPortraitListing(listing);

    setPresentation(detectedPortrait ? "portrait" : "landscape");
  }

  const fitClass = isPortrait
    ? "object-contain object-[center_20%]"
    : "object-cover object-center";

  const zoomClass =
    hoverZoom && !isPortrait
      ? "transition-transform duration-700 group-hover:scale-[1.03]"
      : "";

  return (
    <>
      {isPortrait && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-sand/70 via-cream to-sand/50"
          aria-hidden="true"
        />
      )}
      <Image
        src={listing.image}
        alt={listing.imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        onLoadingComplete={handleLoad}
        className={`${fitClass} ${zoomClass} ${imageClassName}`.trim()}
      />
      {overlay !== "none" && (
        <div
          className={`absolute inset-0 pointer-events-none ${
            isPortrait
              ? "bg-gradient-to-t from-navy/35 via-transparent to-transparent"
              : OVERLAY_CLASS[overlay]
          }`}
          aria-hidden="true"
        />
      )}
    </>
  );
}
