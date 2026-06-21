# Prompt: Hero Background
**Asset**: `webimages/ui/hero-background.jpg`
**Dimensions**: 1792×1024
**Section**: Hero section full-bleed background

---

## ImageGen Prompt

```
A dramatic comic-book illustration of a historic Main Street in a small Colorado city
at night, viewed from street level looking down the center of the block.

STREET DETAILS:
- Two- and three-story late 19th-century commercial brick buildings line both sides
- Awnings, wide storefront windows, and ornate brick cornices visible
- A broad flat street with old painted lane markings
- Period gas lamps and early electric streetlights casting flat gold light pools on the pavement
- A dark purple night sky above, clear and vast, pressing down on the rooflines
- Subtle suggestion of a crowd or gathering energy — empty streets with traces of recent
  occupation: a discarded program, a rope line, folding chairs stacked against a wall

ATMOSPHERE:
- The scene should feel charged and unresolved, like something just ended or is about to begin
- Deep shadows between buildings, flat gold street-lamp shapes, hard purple-black sky
- No people visible — the street is empty but not abandoned

ILLUSTRATION RULES:
- Inked wrestling comic art, variable heavy black linework, angular architecture,
  hard cel-shading bands, sparse ink hatch on brick surfaces
- Deep purple, near-black, flat gold, and muted green color fields only
- Flat solid shadow shapes — no gradient sky, no soft fog, no glow effects
- Screen-printed poster look
- Composition must be wide and relatively low-contrast in the center — the left two-thirds
  of the image will be overlaid with dark-gradient text panels, so keep the street
  receding toward the right and keep the sky and upper buildings dark enough for white text

No people. No text. No logos. No wrestling ring visible.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, airbrushing, soft shadows, glow, fog,
painterly rendering, smooth vector art, pastel colors, blue tones, forest green background,
people, wrestlers, wrestling ring, text, watermark, logos, modern storefronts, neon signs,
cars, suburban strip mall, low quality, blurry, stock photo
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/hero-background.jpg`
- Used as `background-image` on the `.hero` section or its container
- Apply a CSS overlay on top: `linear-gradient(90deg, rgba(21,13,32,0.92) 0%, rgba(47,11,86,0.6) 55%, rgba(21,13,32,0.3) 100%)`
- The text panels (hero story + ledger) sit on the left; the right side of the image can
  be more visible
- Regenerate if the sky gradient is visible — must be flat solid shapes only
