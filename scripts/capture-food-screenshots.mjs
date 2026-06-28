import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = path.join(process.cwd(), "screenshots");

async function capture() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();

  const desktop = await browser.newPage();
  await desktop.setViewportSize({ width: 1440, height: 900 });
  await desktop.goto(`${baseUrl}/food`, { waitUntil: "networkidle" });
  await desktop.screenshot({
    path: path.join(outDir, "food-page-desktop.png"),
    fullPage: true,
  });

  const mobile = await browser.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.goto(`${baseUrl}/food`, { waitUntil: "networkidle" });
  await mobile.screenshot({
    path: path.join(outDir, "food-page-mobile.png"),
    fullPage: true,
  });

  await browser.close();
  console.log(`Saved screenshots to ${outDir}`);
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
