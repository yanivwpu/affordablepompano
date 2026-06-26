import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import NewsletterSignup from "@/components/NewsletterSignup";
import { footerLinks, siteTagline } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="florida-border-top bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-12">
          <div className="max-w-sm">
            <BrandLogo variant="horizontal" href="/" className="!h-12 !w-[17.5rem] sm:!h-[3.25rem] sm:!w-[19rem]" />
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">
              {siteTagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy/70 transition-colors hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="max-w-xs lg:justify-self-end">
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        <div className="coastal-rule mx-auto mt-10 max-w-xs text-foreground/30">
          <span aria-hidden="true">&#9670;</span>
        </div>
        <p className="mt-6 text-center text-xs text-foreground/45">
          &copy; {new Date().getFullYear()} affordablepompano.com. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
