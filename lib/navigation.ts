export const siteTagline =
  "Pompano Beach, Florida • Smart Homes • Great Local Food • Real Value Living";

export const navLinks = [
  { href: "/homes", label: "Homes" },
  { href: "/food", label: "Food & Eats" },
  { href: "/excursions", label: "Excursions" },
  { href: "/businesses", label: "Businesses" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/advertise", label: "Advertise With Us" },
] as const;

export const CONTENT_PLACEHOLDER =
  "Full reviews and details coming soon — we're adding local picks every week.";

export const ADVERTISE_EMAIL = "hello@affordablepompano.com";
