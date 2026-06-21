# Prompt: Town Ledger Seal
**Asset**: `webimages/ui/ledger-seal.png`
**Dimensions**: 1024×1024 (display at ~68×68px, circular)
**Section**: Hero ledger sidebar — replaces the CSS `.seal` text badge

---

## ImageGen Prompt

```
A circular official wax seal or stamp badge rendered in inked comic-book illustration style.

DESIGN:
- Circular format, centered, strong silhouette readable at very small sizes
- The seal has two concentric rings: a thick outer border ring and a thinner inner ring,
  both black with flat gold fill between them
- Inside the inner ring: the words TOWN LEDGER in two lines, all-caps, in a tight
  condensed serif or engraved-style letterform — the only text in the image
- Below the text, a small decorative element: a simple flat star or a tiny scales-of-justice
  icon, no larger than 12% of the total badge diameter
- The interior fill behind the text is deep purple (#3d175d)
- The text is flat gold (#cfac00) with a thin black stroke
- The outer ring has small evenly-spaced notches or a simple rope-border pattern around
  its edge — period official seal aesthetic, not ornate
- Color palette: deep purple interior, flat gold rings and text, near-black outlines
  and notch marks

Inked comic art rendering: heavy black linework on all outlines, flat color fills,
hard-edged shapes, no smooth gradients, no soft glow, no embossing or 3D effects.
Screen-printed stamp look.

Transparent background outside the outermost circle.
```

## Negative Prompt

```
photorealistic, embossed, 3D, glossy, metallic sheen, gradients, soft shadows, glow,
digital painting, wax texture, smooth vector, chibi, decorative flourishes, eagle,
coat of arms, multiple seals, blue, pink, orange, green, forest green, stock seal art,
watermark, low quality, blurry
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/ledger-seal.png`
- Rendered as PNG with transparent background
- Replaces the CSS `.seal` div in the hero ledger sidebar
- Display at `width: 68px; height: 68px` — the current `.seal` is `4.25rem` (~68px)
- Use `<img src="webimages/ui/ledger-seal.png" alt="" aria-hidden="true">` inside a
  container that matches the current `.seal` dimensions
- If text inside the generated seal is malformed, regenerate — legibility at 68px is required
