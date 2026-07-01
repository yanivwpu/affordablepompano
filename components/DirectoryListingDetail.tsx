import DirectoryListingCard from "@/components/DirectoryListingCard";
import DirectoryListingSchema from "@/components/DirectoryListingSchema";
import ListingActionButtons from "@/components/ListingActionButtons";
import ListingCardImage from "@/components/ListingCardImage";
import { getRelatedListings, type DirectoryListing } from "@/lib/directory";
import { getEmailAddress, getUsableUrl } from "@/lib/directory/listingLinks";
import { resolveListingImagePresentation } from "@/lib/directory/listingImage";
import { SPONSORSHIP_INQUIRY_EMAIL } from "@/lib/advertise";
import Link from "next/link";

type DirectoryListingDetailProps = {
  listing: DirectoryListing;
  sectionLabel: string;
  sectionPath: string;
  claimPackageId: string;
};

export default function DirectoryListingDetail({
  listing,
  sectionLabel,
  sectionPath,
  claimPackageId,
}: DirectoryListingDetailProps) {
  const related = getRelatedListings(listing);
  const paragraphs = listing.fullDescription.split("\n\n").filter(Boolean);
  const portraitHero = resolveListingImagePresentation(listing) === "portrait";

  return (
    <>
      <DirectoryListingSchema
        listing={listing}
        sectionLabel={sectionLabel}
        sectionPath={sectionPath}
      />

      <article className="bg-background">
        <div className="border-b border-sand-dark/40 bg-cream py-4">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-4xl px-4 text-sm text-navy/60 sm:px-6"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-teal">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={sectionPath} className="hover:text-teal">
                  {sectionLabel}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-navy">{listing.name}</li>
            </ol>
          </nav>
        </div>

        <header
          className={`relative overflow-hidden ${
            portraitHero
              ? "min-h-[42vh] bg-gradient-to-b from-sand/80 via-cream to-navy sm:min-h-[48vh]"
              : "min-h-[40vh] sm:min-h-[45vh]"
          }`}
        >
          <ListingCardImage
            listing={listing}
            priority
            sizes="100vw"
            imageClassName="brightness-110 saturate-[1.06]"
            hoverZoom={false}
            overlay="none"
          />
          <div
            className={`absolute inset-0 ${
              portraitHero
                ? "bg-gradient-to-t from-navy/90 via-navy/35 to-transparent"
                : "bg-gradient-to-t from-navy/85 via-navy/40 to-navy/20"
            }`}
          />
          <div
            className={`relative z-10 mx-auto flex max-w-4xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 ${
              portraitHero ? "min-h-[42vh] sm:min-h-[48vh]" : "min-h-[40vh] sm:min-h-[45vh]"
            }`}
          >
            <div className="flex flex-wrap gap-2">
              <span className="rounded-sm bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal">
                {listing.category}
              </span>
              {listing.plan === "featured" && (
                <span className="rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                  Featured Listing
                </span>
              )}
              {listing.isDemo && (
                <span className="rounded-sm bg-navy/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                  Sample Listing
                </span>
              )}
            </div>
            <h1 className="font-display mt-3 text-3xl font-medium leading-tight text-cream sm:text-4xl md:text-5xl">
              {listing.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {listing.shortDescription}
            </p>
          </div>
        </header>

        {listing.isDemo && (
          <div className="border-b border-sand-dark/40 bg-sand py-3 text-center">
            <p className="text-xs text-navy/60">
              Sample directory listing —{" "}
              <Link
                href={`/advertise?package=${claimPackageId}#contact`}
                className="font-semibold text-teal hover:text-teal-light"
              >
                claim this placement
              </Link>
            </p>
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-navy/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-sm border border-sand-dark/60 bg-cream p-6">
                <h2 className="font-display text-lg font-medium text-navy">
                  Contact &amp; Visit
                </h2>
                <dl className="mt-4 space-y-3 text-sm text-navy/70">
                  {listing.address && (
                    <div>
                      <dt className="font-semibold text-navy">Address</dt>
                      <dd className="mt-1">{listing.address}</dd>
                    </div>
                  )}
                  {listing.serviceArea && !listing.address && (
                    <div>
                      <dt className="font-semibold text-navy">Service area</dt>
                      <dd className="mt-1">{listing.serviceArea}</dd>
                    </div>
                  )}
                  {listing.phone && (
                    <div>
                      <dt className="font-semibold text-navy">Phone</dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${listing.phone.replace(/\D/g, "")}`}
                          className="text-teal hover:text-teal-light"
                        >
                          {listing.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {getEmailAddress(listing.email) && (
                    <div>
                      <dt className="font-semibold text-navy">Email</dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${getEmailAddress(listing.email)}`}
                          className="text-teal hover:text-teal-light"
                        >
                          {getEmailAddress(listing.email)}
                        </a>
                      </dd>
                    </div>
                  )}
                  {listing.hours && (
                    <div>
                      <dt className="font-semibold text-navy">Hours</dt>
                      <dd className="mt-1">{listing.hours}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex flex-col gap-2.5">
                  <ListingActionButtons listing={listing} />

                  {listing.type !== "business" &&
                    getUsableUrl(listing.secondaryCtaUrl) &&
                    listing.secondaryCtaLabel && (
                    <a
                      href={listing.secondaryCtaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-sm border-2 border-teal/25 bg-white/60 px-4 py-3.5 text-sm font-semibold text-teal hover:border-teal hover:bg-teal hover:text-cream"
                    >
                      {listing.secondaryCtaLabel}
                    </a>
                  )}
                </div>

                {listing.socialLinks && listing.socialLinks.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-teal">
                    {listing.socialLinks.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal-light"
                        >
                          {link.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="rounded-sm border border-teal/20 bg-teal/5 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  List your business
                </p>
                <p className="mt-2 text-sm text-navy/65">
                  Get a dedicated page and directory placement on Affordable
                  Pompano.
                </p>
                <Link
                  href={`/advertise?package=${claimPackageId}#contact`}
                  className="mt-4 inline-flex items-center justify-center rounded-sm bg-teal px-4 py-2.5 text-sm font-semibold text-cream hover:bg-teal-light"
                >
                  Advertise With Us
                </Link>
                <a
                  href={`mailto:${SPONSORSHIP_INQUIRY_EMAIL}`}
                  className="mt-2 block text-xs text-navy/50 hover:text-teal"
                >
                  {SPONSORSHIP_INQUIRY_EMAIL}
                </a>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <section className="mt-16 border-t border-sand-dark/40 pt-12">
              <h2 className="font-display text-2xl font-medium text-navy">
                Related Listings
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <DirectoryListingCard key={item.id} listing={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
