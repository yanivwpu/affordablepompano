# Affordable Pompano — Brand Guidelines (Evolution Draft)

> **Status:** Presentation package — not yet applied to the live website. Choose a direction before implementation.

## Brand essence

Modern coastal · Trustworthy · Local · Premium but approachable · Tourism-bureau quality (not corporate real estate)

## Core palette (unchanged)

| Token | Hex | Usage |
|-------|-----|--------|
| Navy | `#1B3A4B` | Primary text, wordmark, dark backgrounds |
| Teal | `#2A8B8B` | Links, accents, coastal trust |
| Teal Light | `#3BAFAF` | Hover states, highlights |
| Coral | `#E07A5F` | CTAs, warmth, featured badges |
| Coral Light | `#F4845F` | CTA hover |
| Sunset | `#F4A261` | Secondary accent, gradients in photography overlays |
| Cream | `#FFFCF7` | Light surfaces, logo on dark |
| Sand | `#EDE4D6` | Borders, subtle fills |
| Sand Dark | `#D9CCBA` | Dividers |
| Background | `#FAF7F2` | Page background |
| Warm White | `#FDF9F3` | Section alternates |

## Typography (unchanged)

| Role | Font | Weights | Usage |
|------|------|---------|--------|
| Display | **Playfair Display** | 400, 500, 600, 700 | Logo wordmark, H1–H2, hero headlines |
| Body | **DM Sans** | 400, 500, 600, 700 | UI, body copy, taglines, navigation |

**Logo wordmark:** Playfair Display Medium (500), tracking `-0.02em`  
**Location line:** DM Sans Italic, 11–12px, ~65% navy opacity

## Spacing & clear space

- Minimum clear space around logo: **height of the “P” in Pompano** on all sides
- Minimum horizontal logo width in digital: **160px**
- Minimum stacked logo width: **120px**
- Icon mark minimum: **16px** (favicon); test at 16, 24, 32 before approval

## Logo usage

### Light backgrounds
- Wordmark: Navy `#1B3A4B`
- Location: Navy at 65% opacity
- Icon: Navy + Teal (Direction-specific accent)

### Dark backgrounds
- Wordmark: Cream `#FFFCF7`
- Location: Cream at 75% opacity
- Icon: Cream + Teal Light / Coral accent

### Do not
- Stretch, rotate, or add effects (drop shadow, glow)
- Place on busy photography without a scrim
- Change typefaces in the wordmark

## Three directions

See `brand/direction-a-pier-horizon/`, `direction-b-beacon-coast/`, and `direction-c-palm-tide/` for full asset sets.

| Direction | Icon idea | Personality |
|-----------|-----------|-------------|
| **A — Pier Horizon** | Pier + wave | Classic Pompano pier; editorial tourism guide |
| **B — Beacon Coast** | Lighthouse + sun arc | Trust, guidance, “find your way here” |
| **C — Shell & Tide** | Seashell + tide curl | Warm Florida welcome; lifestyle-forward |

## Favicon & social

- **Favicon:** Icon mark only — never full wordmark below 180px
- **Apple Touch Icon (180×180):** Icon on Cream or Navy square with 10% padding
- **PWA (512×512):** Icon centered with safe padding; optional subtle Sand ring
- **Social avatars:** Use **stacked logo** or **icon on Cream circle**; keep critical content inside **central 80%** for circular crop (Google, Instagram, LinkedIn, YouTube)

## File inventory (per direction)

```
logo-horizontal.svg      Primary lockup (transparent)
logo-stacked.svg         Social / square lockup (transparent)
logo-horizontal-dark.svg For navy backgrounds
logo-stacked-dark.svg
icons/                   5 icon mark concepts
favicons/                SVG sources for 16, 32, 48, 180, 512
social-avatar.svg        Circle-safe avatar master
```

Export PNG/WebP from SVG masters for production (`favicon.ico`, `apple-touch-icon.png`, etc.) after direction approval.
