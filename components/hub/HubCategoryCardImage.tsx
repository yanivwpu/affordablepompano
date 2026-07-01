"use client";

import Image from "next/image";
import { useState } from "react";

const BUSINESS_CATEGORY_FALLBACK = "/images/businesses/categories/fallback.jpg";

type HubCategoryCardImageProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export default function HubCategoryCardImage({
  src,
  alt,
  fallbackSrc = BUSINESS_CATEGORY_FALLBACK,
}: HubCategoryCardImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover object-center brightness-105 saturate-[1.08] transition-transform duration-700 group-hover:scale-110"
      onError={() => {
        if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
    />
  );
}
