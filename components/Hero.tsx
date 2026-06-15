import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { siteTagline } from "@/lib/navigation";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden sm:min-h-[92vh]">
      <Image
        src={images.hero}
        alt={images.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-110 saturate-[1.08]"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <div className="coastal-rule mb-6 max-w-xs text-cream/80">
            <span aria-hidden="true">&#9670;</span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/90 sm:text-xs">
            Affordable Pompano
          </p>

          <h1 className="font-display mt-4 text-4xl font-medium leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-[3.4rem]">
            Discover Affordable Pompano Beach
          </h1>

          <p className="mt-5 max-w-2xl border-l-[3px] border-coral/80 pl-4 text-base font-medium leading-relaxed text-cream sm:pl-5 sm:text-lg">
            {siteTagline}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
            Great value in paradise — your trusted local guide to sunny homes,
            fresh food, and fun on the Florida coast.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/homes"
              className="inline-flex items-center justify-center rounded-sm bg-teal px-7 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-md transition-all hover:bg-teal-light hover:shadow-lg"
            >
              Browse Homes
            </Link>
            <Link
              href="/food"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-7 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-md transition-all hover:bg-coral-light hover:shadow-lg"
            >
              Find Great Eats
            </Link>
            <Link
              href="/excursions"
              className="inline-flex items-center justify-center rounded-sm border-2 border-cream/45 bg-cream/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream backdrop-blur-sm transition-all hover:border-cream/70 hover:bg-cream/20"
            >
              Things To Do
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
