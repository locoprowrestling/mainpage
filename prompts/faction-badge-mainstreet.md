# Prompt: Faction Badge — Main Street, Longmont
**Asset**: `webimages/ui/faction-badge-mainstreet.png`
**Dimensions**: 1024×1024 (display at ~80×80px, circular crop)
**Section**: Faction card — Main Street, Longmont (Ground Zero)

---

## ImageGen Prompt

```
A circular comic-book badge or emblem representing Main Street, Longmont, Colorado —
the geographic and historical ground zero of a long-running civic conflict.

DESIGN:
- Circular badge format, centered composition, strong silhouette that reads at small sizes
- Central image: a minimal iconic storefront facade — two or three flat brick building
  fronts viewed straight-on, with a wide street-level window and an awning, suggesting
  a historic Colorado commercial block ca. 1900
- The buildings are rendered as flat graphic shapes: near-black silhouette, one or two
  flat tonal bands for brick texture suggested by sparse hatch lines only
- A flat gold street lamp or signpost rises in front of or beside the building, simple
  and iconic
- The badge border is a thick black circle with a thin inner ring in deep purple (#3d175d)
- Color palette: near-black (#150d20) for the building silhouette, flat gold (#cfac00)
  for the street lamp and border accent, deep purple (#3d175d) for the sky fill inside
  the badge, off-white for window light shapes

NO TEXT inside the badge.
Transparent background outside the badge circle.

Inked wrestling comic art, variable heavy black linework, flat cel-shaded shapes, sparse
ink hatch for brick texture only, high contrast, screen-printed poster look. The badge
should feel historic and grounded — this is a real place, not a faction.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft shadows, glow, airbrushing,
smooth vector art, modern storefronts, neon signs, cars, suburban strip mall,
person, figure, fist, scroll, pastel, blue, pink, orange, text, letters,
watermark, square border, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/faction-badge-mainstreet.png`
- Rendered as PNG with transparent background
- Display inside the Main Street faction card (Ground Zero), above the `.card-label`
- Crop to circle in CSS: `border-radius: 50%` at `width: 72px; height: 72px`
- Purple badge border should complement the card's `border-color: rgba(90,36,136,0.82)`
