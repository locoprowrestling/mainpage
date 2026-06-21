# Prompt: Timeline Panel — City of Lights Championship Minted (1917)
**Asset**: `webimages/ui/timeline-1917-championship.jpg`
**Dimensions**: 1792×1024 (display cropped to ~800×300 inside timeline item)
**Section**: Timeline entry — 1917

---

## ImageGen Prompt

```
A dramatic wide comic-book panel illustration: a professional wrestling championship belt
being presented or displayed for the first time in 1917 Longmont, Colorado.

SCENE:
- The championship belt is the primary subject, centered and large — ornate rectangular
  gold center plate with side plates, classic early-20th-century wrestling belt aesthetic
- The belt rests on a dark draped table or is held horizontally in gloved hands from
  below frame — only the hands visible at the bottom, no figures or faces shown
- Flat gold engraving details on the center plate: stars, borders, a suggestion of
  lettering too small to read clearly
- Background: deep purple-black, simple and theatrical — a single flat gold spotlight
  shape falls across the belt from above
- The belt should feel historic and newly-minted: slightly raw metal, not polished
  modern championship design

ILLUSTRATION RULES:
- Inked wrestling comic art: variable heavy black linework, hard cel-shading on the belt
  plates — two to three flat tonal bands on the gold metalwork
- Flat gold (#cfac00) as the dominant color for the belt, near-black (#150d20) for the
  background and deep shadows, off-white for the belt's leather strap
- The spotlight is a simple flat gold triangle shape from the top center — no soft glow,
  no radial gradient
- Sparse ink hatch on the leather strap only
- Wide cinematic composition: belt fills the center third, dark flanking negative space
- No text. No logos visible. No faces or full figures.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft glow, radial light, painterly blending,
smooth vector art, modern wrestling belt design, spinning plates, digital display,
person's face or full body, crowd, ring, arena, text on belt, watermark, logos,
pastel, blue, orange, low quality, blurry
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/timeline-1917-championship.jpg`
- Displayed inside the 1917 timeline item, inside the `.timeline__body`
- This is the establishment of the championship that JT Staten holds in 2026 — the
  visual continuity matters; keep the belt design classic and non-modern
- Apply `object-fit: cover` at roughly `width: 100%; aspect-ratio: 8/3`
- The gold-heavy palette should contrast with the 1871 panels (which are more purple/dark)
