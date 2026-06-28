"use client";

import Image from "next/image";
import { useState } from "react";
import { getUsableUrl } from "@/lib/directory/listingLinks";

export type FoodSpotCardProps = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  meta?: string[];
  priceRange?: string;
  featured?: boolean;
  badge?: string;
  whyLocalsLove: string;
  bestDishes: readonly string[];
  actionLabel?: string;
  actionHref?: string;
  reviewsHref?: string;
};

export default function FoodSpotCard({
  title,
  excerpt,
  category,
  image,
  imageAlt,
  meta = [],
  priceRange,
  featured = false,
  badge,
  whyLocalsLove,
  bestDishes,
  actionLabel = "Book a Table",
  actionHref,
  reviewsHref,
}: FoodSpotCardProps) {
  const [showWhy, setShowWhy] = useState(false);
  const [showDishes, setShowDishes] = useState(false);
  const bookingHref = getUsableUrl(actionHref);
  const reviewsLink = getUsableUrl(reviewsHref);

  return (
    <article
      className={`group card-hover florida-border-top flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream shadow-sm ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
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

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        {meta.length > 0 && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-navy/45">
            {meta.join(" · ")}
          </p>
        )}

        <h3
          className={`font-display font-medium leading-snug text-navy ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 leading-relaxed text-navy/70 ${
            featured ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {excerpt}
        </p>

        <p className="mt-3 text-xs font-medium text-teal">
          Must-try:{" "}
          <span className="font-normal text-navy/65">
            {bestDishes.slice(0, 3).join(" · ")}
          </span>
        </p>

        {showWhy && (
          <div className="mt-3 rounded-sm border border-teal/20 bg-teal/5 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-teal">
              Why locals love it
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
              {whyLocalsLove}
            </p>
          </div>
        )}

        {showDishes && (
          <div className="mt-3 rounded-sm border border-coral/20 bg-coral/5 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-coral">
              Best dishes to try
            </p>
            <ul className="mt-2 space-y-1.5">
              {bestDishes.map((dish) => (
                <li
                  key={dish}
                  className="flex items-start gap-2 text-sm text-navy/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-coral" />
                  {dish}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-1 flex-col justify-end gap-3">
          {bookingHref && (
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-coral px-4 py-3.5 text-sm font-bold tracking-wide text-cream shadow-md transition-all hover:bg-coral-light hover:shadow-lg"
            >
              {actionLabel}
              <span aria-hidden="true" className="text-cream/80">
                &rarr;
              </span>
            </a>
          )}

          <div
            className={`grid grid-cols-1 gap-2 ${
              reviewsLink ? "sm:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {reviewsLink && (
              <a
                href={reviewsLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-sm border border-teal/30 bg-teal/5 px-3 py-2.5 text-center text-xs font-semibold text-teal transition-colors hover:bg-teal hover:text-cream"
              >
                See Reviews &amp; Prices
              </a>
            )}
            <button
              type="button"
              onClick={() => setShowWhy((v) => !v)}
              aria-expanded={showWhy}
              className={`inline-flex items-center justify-center rounded-sm border px-3 py-2.5 text-center text-xs font-semibold transition-colors ${
                showWhy
                  ? "border-teal bg-teal text-cream"
                  : "border-sand-dark/50 bg-cream text-navy/70 hover:border-teal hover:text-teal"
              }`}
            >
              Why Locals Love It
            </button>
            <button
              type="button"
              onClick={() => setShowDishes((v) => !v)}
              aria-expanded={showDishes}
              className={`inline-flex items-center justify-center rounded-sm border px-3 py-2.5 text-center text-xs font-semibold transition-colors ${
                showDishes
                  ? "border-coral bg-coral text-cream"
                  : "border-sand-dark/50 bg-cream text-navy/70 hover:border-coral hover:text-coral"
              }`}
            >
              Best Dishes to Try
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
