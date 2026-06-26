/**
 * Export brand assets to PNG/WebP/ICO for favicons and downloads.
 * Run: npm run export-brand
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoDir = path.join(root, "public", "logo");
const downloadsDir = path.join(logoDir, "downloads");
const publicDir = path.join(root, "public");

const CREAM = "#FFFCF7";
const NAVY = "#1B3A4B";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readSvg(file) {
  return fs.readFileSync(file, "utf8").replace(/[\u0000-\u001F\u007F]/g, "");
}

function stripSvgWrapper(svg) {
  return svg
    .replace(/<\?xml[^>]*>\s*/i, "")
    .replace(/^[\s\S]*?<svg[^>]*>/i, "")
    .replace(/<\/svg>\s*$/i, "");
}

function parseViewBox(svg) {
  const match = svg.match(/viewBox="([^"]+)"/);
  if (!match) return null;
  const [minX, minY, width, height] = match[1].split(/\s+/).map(Number);
  return { minX, minY, width, height };
}

function svgWithBackground(svg, background) {
  const viewBox = parseViewBox(svg);
  if (!viewBox) return svg;
  const { width, height } = viewBox;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
  <rect width="100%" height="100%" fill="${background}"/>
  ${stripSvgWrapper(svg)}
</svg>`;
}

async function exportRaster(svgPath, outPath, width, { background, webp = false } = {}) {
  let svg = readSvg(svgPath);
  if (background) svg = svgWithBackground(svg, background);

  const viewBox = parseViewBox(svg);
  const height = viewBox
    ? Math.round(width * (viewBox.height / viewBox.width))
    : width;

  const pngBuffer = await sharp(Buffer.from(svg), { density: 300 })
    .resize(width, height, { fit: "contain", background: background ?? { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(pngBuffer).toFile(outPath);

  if (webp) {
    await sharp(pngBuffer).webp({ quality: 92 }).toFile(outPath.replace(/\.png$/, ".webp"));
  }

  return pngBuffer;
}

async function main() {
  ensureDir(downloadsDir);
  ensureDir(path.join(downloadsDir, "transparent"));
  ensureDir(path.join(downloadsDir, "with-background"));

  const assets = [
    { name: "logo-horizontal", file: "logo-horizontal.svg", width: 1040 },
    { name: "logo-horizontal-dark", file: "logo-horizontal-dark.svg", width: 1040 },
    { name: "logo-stacked", file: "logo-stacked.svg", width: 800 },
    { name: "logo-stacked-dark", file: "logo-stacked-dark.svg", width: 800 },
    { name: "icon-wave-sun", file: "icon-wave-sun.svg", width: 512 },
  ];

  for (const asset of assets) {
    const svgPath = path.join(logoDir, asset.file);

    await exportRaster(
      svgPath,
      path.join(downloadsDir, "transparent", `${asset.name}.png`),
      asset.width,
      { webp: asset.name.startsWith("logo-") },
    );

    await exportRaster(
      svgPath,
      path.join(downloadsDir, "with-background", `${asset.name}-cream-bg.png`),
      asset.width,
      { background: CREAM },
    );

    if (asset.name.startsWith("logo-horizontal")) {
      await exportRaster(
        svgPath,
        path.join(downloadsDir, "with-background", `${asset.name}-navy-bg.png`),
        asset.width,
        { background: NAVY },
      );
    }
  }

  for (const file of fs.readdirSync(logoDir)) {
    if (file.endsWith(".svg")) {
      fs.copyFileSync(
        path.join(logoDir, file),
        path.join(downloadsDir, "transparent", file),
      );
    }
  }

  const faviconMaster = path.join(logoDir, "favicon-master.svg");
  const faviconSizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-512.png", size: 512 },
  ];

  const icoBuffers = [];

  for (const { name, size } of faviconSizes) {
    const buffer = await exportRaster(
      faviconMaster,
      path.join(publicDir, name),
      size,
      { background: CREAM },
    );
    await exportRaster(
      faviconMaster,
      path.join(downloadsDir, "with-background", name),
      size,
      { background: CREAM },
    );

    if (size <= 32) {
      icoBuffers.push(buffer);
    }
  }

  fs.writeFileSync(path.join(publicDir, "favicon.ico"), await toIco(icoBuffers));

  await exportRaster(
    path.join(logoDir, "icon-wave-sun.svg"),
    path.join(downloadsDir, "transparent", "icon-wave-sun-512.png"),
    512,
  );

  console.log("Brand assets exported to public/ and public/logo/downloads/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
