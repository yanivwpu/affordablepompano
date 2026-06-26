import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Logo Downloads | Affordable Pompano",
  robots: { index: false, follow: false },
};

type DownloadFile = {
  label: string;
  path: string;
};

const transparentSvg: DownloadFile[] = [
  { label: "Horizontal logo (SVG)", path: "/logo/downloads/transparent/logo-horizontal.svg" },
  { label: "Horizontal logo — dark text variant (SVG)", path: "/logo/downloads/transparent/logo-horizontal-dark.svg" },
  { label: "Stacked logo (SVG)", path: "/logo/downloads/transparent/logo-stacked.svg" },
  { label: "Stacked logo — dark variant (SVG)", path: "/logo/downloads/transparent/logo-stacked-dark.svg" },
  { label: "Icon — wave + sun (SVG)", path: "/logo/downloads/transparent/icon-wave-sun.svg" },
];

const transparentRaster: DownloadFile[] = [
  { label: "Horizontal logo (PNG)", path: "/logo/downloads/transparent/logo-horizontal.png" },
  { label: "Horizontal logo (WebP)", path: "/logo/downloads/transparent/logo-horizontal.webp" },
  { label: "Stacked logo (PNG)", path: "/logo/downloads/transparent/logo-stacked.png" },
  { label: "Stacked logo (WebP)", path: "/logo/downloads/transparent/logo-stacked.webp" },
  { label: "Icon — wave + sun (PNG, 512px)", path: "/logo/downloads/transparent/icon-wave-sun-512.png" },
];

const withBackground: DownloadFile[] = [
  { label: "Horizontal — cream background (PNG)", path: "/logo/downloads/with-background/logo-horizontal-cream-bg.png" },
  { label: "Horizontal — navy background (PNG)", path: "/logo/downloads/with-background/logo-horizontal-navy-bg.png" },
  { label: "Stacked — cream background (PNG)", path: "/logo/downloads/with-background/logo-stacked-cream-bg.png" },
  { label: "Favicon 16×16", path: "/favicon-16x16.png" },
  { label: "Favicon 32×32", path: "/favicon-32x32.png" },
  { label: "Apple touch icon 180×180", path: "/apple-touch-icon.png" },
  { label: "PWA icon 512×512", path: "/icon-512.png" },
  { label: "Favicon ICO", path: "/favicon.ico" },
];

function DownloadSection({
  title,
  description,
  files,
  origin,
}: {
  title: string;
  description: string;
  files: DownloadFile[];
  origin: string;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-medium text-navy">{title}</h2>
      <p className="mt-1 text-sm text-foreground/65">{description}</p>
      <ul className="mt-4 divide-y divide-sand-dark/40 rounded-lg border border-sand-dark/50 bg-cream">
        {files.map((file) => {
          const href = `${origin}${file.path}`;
          return (
            <li key={file.path} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-navy">{file.label}</span>
              <Link
                href={href}
                download
                className="text-sm text-teal underline hover:text-teal-light"
              >
                Download
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default async function LogoDownloadsPage() {
  const headerList = await headers();
  const host = headerList.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-medium text-navy">Logo downloads</h1>
      <p className="mt-3 text-foreground/70">
        Wave + sun mark — Affordable Pompano brand assets. SVG files have transparent backgrounds.
        PNG cream/navy versions include a solid background for print and social use.
      </p>

      <div className="mt-8 rounded-lg border border-sand-dark/50 bg-sand/40 p-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/logo-horizontal.svg"
          alt="Affordable Pompano logo preview"
          className="mx-auto max-h-16 w-auto"
        />
      </div>

      <DownloadSection
        title="Transparent (no background)"
        description="Best for websites, presentations, and overlays. SVG is the master format."
        files={[...transparentSvg, ...transparentRaster]}
        origin={origin}
      />

      <DownloadSection
        title="With background & favicons"
        description="PNG files with cream or navy backgrounds, plus site favicon sizes."
        files={withBackground}
        origin={origin}
      />
    </main>
  );
}
