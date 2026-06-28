import ViatorExperienceCard from "@/components/ViatorExperienceCard";
import {
  VIATOR_AFFILIATE_DISCLOSURE,
  viatorExperiences,
} from "@/lib/viator";

export default function FeaturedExperiencesSection() {
  return (
    <section
      id="featured-experiences"
      className="scroll-mt-28 border-b border-sand-dark/30 bg-warm-white py-16 sm:py-24"
      aria-labelledby="featured-experiences-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-sand-dark/40 pb-6 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Book With Confidence
          </p>
          <h2
            id="featured-experiences-heading"
            className="font-display mt-3 text-2xl font-medium text-navy sm:text-3xl"
          >
            Featured Experiences Near Pompano Beach
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-navy/70 sm:mx-0 sm:text-base">
            Discover fishing charters, boat tours, snorkeling adventures, water
            sports, and other popular South Florida experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {viatorExperiences.map((experience, index) => (
            <ViatorExperienceCard
              key={experience.id}
              {...experience}
              priority={index === 0}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-navy/50">
          {VIATOR_AFFILIATE_DISCLOSURE}
        </p>
      </div>
    </section>
  );
}
