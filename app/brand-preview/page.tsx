import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Brand Preview (Internal)",
  robots: { index: false, follow: false },
};

const base = "/brand";

type Asset = { label: string; path: string; w?: number; h?: number };

const directions = [
  {
    id: "a",
    name: "Direction A — Pier Horizon",
    folder: "direction-a-pier-horizon",
  },
  {
    id: "b",
    name: "Direction B — Beacon Coast",
    folder: "direction-b-beacon-coast",
  },
  {
    id: "c",
    name: "Direction C — Shell & Tide",
    folder: "direction-c-palm-tide",
  },
] as const;

function iconPaths(folder: string): Asset[] {
  const prefix = `${base}/${folder}/icons`;
  if (folder.includes("pier")) {
    return [
      { label: "Pier + wave", path: `${prefix}/01-pier-wave-primary.svg`, w: 64, h: 64 },
      { label: "Wave + sun", path: `${prefix}/02-wave-sun.svg`, w: 64, h: 64 },
      { label: "Pier only", path: `${prefix}/03-pier-only.svg`, w: 64, h: 64 },
      { label: "AP monogram", path: `${prefix}/04-ap-monogram.svg`, w: 64, h: 64 },
      { label: "Pier + sun", path: `${prefix}/05-pier-sun.svg`, w: 64, h: 64 },
    ];
  }
  if (folder.includes("beacon")) {
    return [
      { label: "Lighthouse", path: `${prefix}/01-lighthouse-primary.svg`, w: 64, h: 64 },
      { label: "Light beam", path: `${prefix}/02-lighthouse-beam.svg`, w: 64, h: 64 },
      { label: "Sun arc + wave", path: `${prefix}/03-sun-arc-wave.svg`, w: 64, h: 64 },
      { label: "AP beacon", path: `${prefix}/04-ap-beacon.svg`, w: 64, h: 64 },
      { label: "Pier minimal", path: `${prefix}/05-pier-minimal-dark.svg`, w: 64, h: 64 },
    ];
  }
  return [
    { label: "Seashell", path: `${prefix}/01-shell-primary.svg`, w: 64, h: 64 },
    { label: "Shell + wave", path: `${prefix}/02-shell-wave.svg`, w: 64, h: 64 },
    { label: "Shell + sun", path: `${prefix}/03-shell-sun.svg`, w: 64, h: 64 },
    { label: "AP circle", path: `${prefix}/04-ap-circle.svg`, w: 64, h: 64 },
    { label: "Tide curl", path: `${prefix}/05-tide-curl.svg`, w: 64, h: 64 },
  ];
}

function AssetCard({ asset, origin }: { asset: Asset; origin: string }) {
  const href = `${origin}${asset.path}`;
  const w = asset.w ?? 120;
  const h = asset.h ?? 120;

  return (
    <div className="rounded-lg border border-[#D9CCBA] bg-[#FFFCF7] p-4">
      <div
        className="mb-3 flex min-h-[80px] items-center justify-center rounded-md bg-[#FAF7F2] p-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset.path} alt={asset.label} width={w} height={h} className="max-h-32 w-auto" />
      </div>
      <p className="mb-1 text-sm font-medium text-[#1B3A4B]">{asset.label}</p>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-xs text-[#2A8B8B] underline"
      >
        {href}
      </Link>
    </div>
  );
}

export default async function BrandPreviewPage() {
  const headerList = await headers();
  const host = headerList.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-3xl font-medium text-[#1B3A4B]">
          Affordable Pompano — Brand Preview
        </h1>
        <p className="mt-2 text-[#1B3A4B]/70">
          Internal review only. Click any link to open the SVG in a new tab. Not linked from the
          live site navigation.
        </p>

        {directions.map((dir) => {
          const mainAssets = [
            { label: "Horizontal logo", path: `${base}/${dir.folder}/logo-horizontal.svg`, w: 480, h: 66 },
            { label: "Horizontal (dark bg preview)", path: `${base}/${dir.folder}/logo-horizontal-dark.svg`, w: 480, h: 66 },
            { label: "Stacked logo", path: `${base}/${dir.folder}/logo-stacked.svg`, w: 180, h: 180 },
            { label: "Social avatar", path: `${base}/${dir.folder}/social-avatar.svg`, w: 120, h: 120 },
            { label: "Favicon 512", path: `${base}/${dir.folder}/favicons/favicon-512.svg`, w: 96, h: 96 },
            { label: "Apple touch 180", path: `${base}/${dir.folder}/favicons/apple-touch-icon-180.svg`, w: 90, h: 90 },
            { label: "Favicon 48", path: `${base}/${dir.folder}/favicons/favicon-48.svg`, w: 48, h: 48 },
            { label: "Favicon 32", path: `${base}/${dir.folder}/favicons/favicon-32.svg`, w: 32, h: 32 },
            { label: "Favicon 16", path: `${base}/${dir.folder}/favicons/favicon-16.svg`, w: 16, h: 16 },
          ];

          return (
            <section key={dir.id} className="mt-12">
              <h2 className="font-serif text-2xl text-[#1B3A4B]">{dir.name}</h2>
              <p className="mb-6 text-sm text-[#1B3A4B]/60">{dir.folder}</p>

              <h3 className="mb-3 text-lg font-medium text-[#1B3A4B]">Logos &amp; favicons</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mainAssets.map((asset) => (
                  <AssetCard key={asset.path} asset={asset} origin={origin} />
                ))}
              </div>

              <h3 className="mb-3 mt-8 text-lg font-medium text-[#1B3A4B]">Icon mark concepts</h3>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {iconPaths(dir.folder).map((asset) => (
                  <AssetCard key={asset.path} asset={asset} origin={origin} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
