# LoCo Pro Wrestling — Main Page
## Graphics Style Guide

---

## Overview

All graphics for the main LoCo Pro landing page carry the same illustration DNA as the
Last Stand event art — bold comic-book ink, hard cel shading, flat color fields, no
gradients — but adapted to the mainpage's deep-purple brand palette instead of
Last Stand's forest-green palette. The page tells Longmont's story across 150 years.
Graphics should feel like panels from a prestige historical wrestling comic.

---

## Color Palette

### Primary Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#3d175d` | Deep purple — primary fill, backgrounds |
| `--paper-deep` | `#2f0b56` | Darker purple — depth, shadows |
| `--plum` | `#150d20` | Near-black — darkest fills, outlines |
| `--gold` | `#cfac00` | Prestige gold — titles, accents, championship elements |
| `--green` | `#008642` | LoCo Pro green — The Rising accent, borders |
| `--ink` | `#f5f5f5` | Near-white — body text, light fills |

### Background Atmospherics

| Use | Color |
|---|---|
| Hero background fill | `#150d20` (near-black plum) |
| Deep shadow shapes | `#2f0b56` (dark purple) |
| Spotlight / accent shapes | `#cfac00` (solid gold) |
| Green accent shapes | `#008642` |
| Card fills | `#3d175d` to `#2f0b56` |

### Forbidden Colors

Do NOT use:
- Pastels or desaturated mid-tones
- Blue or pink as dominant colors
- Bright orange (reserved for warnings, not brand)
- Forest green as the primary background color (that is Last Stand's palette — this page is purple)
- Gradients of any kind inside generated artwork

---

## Illustration Style

### Core Aesthetic

High-impact inked wrestling comic art. Bold variable black linework, angular anatomy,
hard cel shading, saturated color fields, controlled print texture. Screen-printed
poster look, not digital painting.

### Mandatory Rendering Rules

- Heavy, variable-width black contour lines: thick around silhouettes and major overlaps,
  thinner around details
- Flat base color plus two or three hard-edged cel-shading bands. No smooth tonal transitions
- Faces built from sharp graphic planes: strong brow, cheekbone, jaw, neck shadows
- Selective short hatch marks and ink scratches on skin, hair, clothing — controlled not noisy
- Small hard warm highlights only
- Strong readability at thumbnail size
- No gradients, airbrushing, painterly blending, soft shadows, photographic skin,
  glossy 3D rendering, or smooth vector art

### Era-Specific Notes

Graphics span 1871 to 2026. Historical entries (1871, 1881, 1917) should feel like
period engravings reimagined as wrestling comics — Victorian silhouettes, dramatic skies,
flat tonal bands. Modern entries (2025, 2026) should feel like live event art.

### Character Rules

- Never invent a wrestler's face from prose alone
- When a specific real person is depicted, a reference image must be supplied
- Use silhouette, back-of-head, or costumed-body framing when no reference is available
- JT Staten is the only person authorized to be shown holding a championship belt

---

## Typography (reference only — not embedded in generated images)

| Role | Font |
|---|---|
| Display / event titles | Baskerville (serif) |
| Labels and eyebrows | Avenir Next Condensed / Franklin Gothic |

Do not embed typography in generated images unless the prompt explicitly calls for it
(e.g., the Town Ledger seal).

---

## ImageGen Settings

```
model: gpt-image-1
quality: high
```

Sizes by asset type:
- Wide / hero: `1792x1024`
- Square / badges / seals: `1024x1024`
- Tall / portrait: `1024x1792`
- Timeline panels: `1792x1024` (crop to ~800×400 in CSS)

### Universal Positive Keywords

Include in every prompt:

```
inked wrestling comic art, variable heavy black linework, angular anatomy,
hard cel-shading bands, sparse ink hatch and stipple texture,
deep purple gold green and near-black palette, high contrast,
screen-printed poster look, Longmont Colorado, dramatic, historic
```

### Universal Negative Keywords

Add to every prompt where supported:

```
photorealistic, digital painting, painterly rendering, gradients, airbrush, soft shadows,
glossy 3D rendering, smooth vector mascot art, uniform thin outlines, chibi proportions,
blurry, watermark, text errors, stock photo, corporate clipart, pastel colors, blue tones,
forest green background, bright orange, AI artifact faces, low quality, pixelated
```

---

## Output Directory

All generated images save to **`www/webimages/ui/`**.

## Asset Manifest

| File | Dimensions | Format | Prompt file |
|---|---|---|---|
| `webimages/ui/hero-background.jpg` | 1792×1024 | JPG | `hero-background.md` |
| `webimages/ui/faction-badge-rising.png` | 1024×1024 | PNG | `faction-badge-rising.md` |
| `webimages/ui/faction-badge-foundation.png` | 1024×1024 | PNG | `faction-badge-foundation.md` |
| `webimages/ui/faction-badge-mainstreet.png` | 1024×1024 | PNG | `faction-badge-mainstreet.md` |
| `webimages/ui/ledger-seal.png` | 1024×1024 | PNG | `ledger-seal.md` |
| `webimages/ui/timeline-1871-rising.jpg` | 1792×1024 | JPG | `timeline-1871-rising.md` |
| `webimages/ui/timeline-1871-pillars.jpg` | 1792×1024 | JPG | `timeline-1871-pillars.md` |
| `webimages/ui/timeline-1917-championship.jpg` | 1792×1024 | JPG | `timeline-1917-championship.md` |
| `webimages/ui/timeline-2026-gauntlet.jpg` | 1792×1024 | JPG | `timeline-2026-gauntlet.md` |
