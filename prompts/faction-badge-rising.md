# Prompt: Faction Badge — The Rising
**Asset**: `webimages/ui/faction-badge-rising.png`
**Dimensions**: 1024×1024 (display at ~80×80px, circular crop)
**Section**: Faction card — The Rising

---

## ImageGen Prompt

```
A circular comic-book badge or emblem representing a grassroots working-class wrestling
faction called The Rising.

DESIGN:
- Circular badge format, centered composition, strong silhouette that reads at small sizes
- Central image: a single clenched fist raised upward, strong and resolute, not aggressive
- The fist is inked with heavy black variable-width contour lines, hard cel-shading,
  two to three flat tonal bands — no smooth shading
- Surround the fist with a simple burst of flat radiating lines (like a rising sun motif)
  in dark gold
- The badge border is a thick black circle with a thin inner ring in LoCo Pro green (#008642)
- Color palette: LoCo Pro green (#008642) as the primary fill, near-black background inside
  the badge, flat gold (#cfac00) for the radiating burst and border ring, white or off-white
  for the fist highlight

NO TEXT inside the badge. The card already carries the faction name.
Transparent background outside the badge circle.

Inked wrestling comic art, variable heavy black linework, hard cel-shading bands, sparse
ink hatch and stipple texture, high contrast, screen-printed poster look.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft shadows, glow, airbrushing,
smooth vector art, chibi, cute, pastel, blue, pink, orange, text, letters,
multiple fists, person's full body, watermark, square border, drop shadow, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/faction-badge-rising.png`
- Rendered as PNG with transparent background
- Display inside the The Rising faction card, above the `.card-label`
- Crop to circle in CSS: `border-radius: 50%` at `width: 72px; height: 72px`
- Green badge border should complement the card's `border-color: rgba(0,134,66,0.42)`
