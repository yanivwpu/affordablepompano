import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { siteTagline } from "@/lib/navigation";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";

export const metadata = metadataForPage("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Affordable Pompano"
        description="A sunny local magazine blending Old Florida warmth with modern, helpful advice — great value in paradise."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-base leading-relaxed text-navy/70 sm:text-lg">
              {siteTagline}. We believe Pompano Beach deserves a guide
              that&apos;s welcoming, honest, and focused on real value — not
              hype or high-end fluff.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              Whether you&apos;re visiting for a weekend, hunting for a great
              lunch spot, or searching for an affordable place to live, we&apos;re
              here to help you make the most of sunny South Florida.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-sand-dark/60">
            <Image
              src={images.palmBeach}
              alt={images.palmBeachAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover brightness-110 saturate-[1.05]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
