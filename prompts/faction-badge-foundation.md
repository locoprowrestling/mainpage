# Prompt: Faction Badge — The Foundation
**Asset**: `webimages/ui/faction-badge-foundation.png`
**Dimensions**: 1024×1024 (display at ~80×80px, circular crop)
**Section**: Faction card — The Foundation

---

## ImageGen Prompt

```
A circular comic-book badge or emblem representing an institutional, contract-driven
professional wrestling faction called The Foundation — formerly The Pillars, now
restructured under a single authority.

DESIGN:
- Circular badge format, centered composition, strong silhouette that reads at small sizes
- Central image: a rolled document or contract tied with a thin ribbon, viewed at a
  slight angle — formal, cold, official
- Heavy black variable-width contour lines, hard cel-shading, two to three flat tonal
  bands on the scroll — no smooth shading
- The badge border is a thick black circle with a thin inner ring in flat gold (#cfac00)
- Two small flanking architectural column capitals (pillar tops) framing the scroll at
  the bottom left and right — minimal, iconic, not ornate
- Color palette: deep purple (#3d175d) as background fill inside the badge,
  flat gold (#cfac00) for the scroll, ribbon, and border ring, near-black (#150d20)
  for deep shadows, off-white for the scroll's face

NO TEXT inside the badge.
Transparent background outside the badge circle.

Inked wrestling comic art, variable heavy black linework, hard cel-shading bands, sparse
ink hatch and stipple texture, high contrast, screen-printed poster look. Cold and
institutional, not villainous — this faction believes they are the legitimate authority.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft shadows, glow, airbrushing,
smooth vector art, skull, flames, aggressive imagery, fist, person's face,
pastel, blue, pink, orange, text, letters, watermark, square border, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/faction-badge-foundation.png`
- Rendered as PNG with transparent background
- Display inside The Foundation faction card, above the `.card-label`
- Crop to circle in CSS: `border-radius: 50%` at `width: 72px; height: 72px`
- Gold badge border should complement the card's `border-color: rgba(207,172,0,0.38)`
