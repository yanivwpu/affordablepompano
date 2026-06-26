import ContactForm from "@/components/ContactForm";
import ImagePageHero from "@/components/ImagePageHero";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";

export const metadata = metadataForPage("contact");

export default function ContactPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Questions about homes, local spots, or partnering with us? Send a message — we're real people who love Pompano Beach."
        image={images.palmBeach}
        imageAlt={images.palmBeachAlt}
        primaryCta={{ label: "Send a Message", href: "#contact-form" }}
        secondaryCta={{ label: "Advertise With Us", href: "/advertise" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div id="contact-form" className="order-1 scroll-mt-28 lg:order-2">
              <div className="rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8">
                <h2 className="font-display text-2xl font-medium text-navy">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-navy/70">
                  We typically respond within 1–2 business days.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl font-medium text-navy">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                Whether you&apos;re house hunting, planning a visit, or want to
                feature your business — use the form and we&apos;ll reply with a
                friendly, local perspective.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-sm border border-sand-dark/60 bg-cream p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    Advertising
                  </p>
                  <p className="font-display mt-2 text-xl text-navy">
                    Partner With Us
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    Interested in sponsorships, featured listings, or newsletter
                    ads? Select Advertising in the contact form and send us a
                    message.
                  </p>
                </div>

                <div className="rounded-sm border border-sand-dark/60 bg-cream p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-navy/70">
                    Pompano Beach, Florida 33062
                    <br />
                    Broward County · Atlantic Coast
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-center text-2xl font-medium text-navy">
              Find Us in Pompano Beach
            </h2>
            <div
              className="mt-5 flex min-h-[320px] flex-col items-center justify-center rounded-sm border-2 border-dashed border-teal/30 bg-sand/50 px-6 py-12"
              aria-label="Map placeholder"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal">
                Map Embed
              </p>
              <p className="mt-3 max-w-md text-center text-sm text-navy/50">
                Google Maps or Mapbox embed goes here — centered on Pompano
                Beach Pier &amp; Atlantic Boulevard.
              </p>
              <div className="relative mt-8 aspect-[16/7] w-full max-w-3xl overflow-hidden rounded-sm border border-sand-dark/50">
                <Image
                  src={images.pompanoPier}
                  alt="Pompano Beach pier and coastline map preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/20">
                  <span className="rounded-sm bg-cream/90 px-4 py-2 text-sm font-medium text-navy">
                    Pompano Beach, FL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
