import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = path.join(process.cwd(), "screenshots");
const pages = [
  { slug: "food", name: "food" },
  { slug: "homes", name: "homes" },
  { slug: "excursions", name: "excursions" },
  { slug: "businesses", name: "businesses" },
];

async function capture() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();

  for (const page of pages) {
    const desktop = await browser.newPage();
    await desktop.setViewportSize({ width: 1440, height: 900 });
    await desktop.goto(`${baseUrl}/${page.slug}`, { waitUntil: "load", timeout: 60000 });
    await desktop.waitForTimeout(1500);
    await desktop.screenshot({
      path: path.join(outDir, `${page.name}-desktop.png`),
      fullPage: true,
    });
    await desktop.close();

    const mobile = await browser.newPage();
    await mobile.setViewportSize({ width: 390, height: 844 });
    await mobile.goto(`${baseUrl}/${page.slug}`, { waitUntil: "load", timeout: 60000 });
    await mobile.waitForTimeout(1500);
    await mobile.screenshot({
      path: path.join(outDir, `${page.name}-mobile.png`),
      fullPage: true,
    });
    await mobile.close();

    console.log(`Captured ${page.name} (desktop + mobile)`);
  }

  await browser.close();
  console.log(`Saved screenshots to ${outDir}`);
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
