# Prompt: Timeline Panel — The Rising Head West (July 3, 1871)
**Asset**: `webimages/ui/timeline-1871-rising.jpg`
**Dimensions**: 1792×1024 (display cropped to ~800×300 inside timeline item)
**Section**: Timeline entry — July 3, 1871

---

## ImageGen Prompt

```
A dramatic wide comic-book panel illustration: a group of settlers and working families
heading west across an open Colorado plain in the summer of 1871.

SCENE:
- Two or three covered wagons rolling left to right across a flat horizon
- A small group of walking figures alongside the wagons: men, women, children — silhouettes
  and simplified shapes, not individual portraits
- Vast open sky above — deep purple-black at the top shading to a flat warm gold band
  near the horizon (represented as two or three hard-edged flat bands, not a gradient)
- The land is flat with sparse low scrub and a faint trail rut in the earth
- The mood is determined and forward-moving — not triumphant, not desperate
- Late afternoon light: flat gold shapes falling across the wagon canvas and figures

ILLUSTRATION RULES:
- Inked wrestling comic art: variable heavy black linework, angular silhouettes,
  hard cel-shading bands, sparse ink hatch and stipple on canvas, wood, and clothing
- Flat color fields only — no gradients, no atmospheric haze, no soft blending
- Deep purple sky, flat gold horizon band, near-black land, off-white wagon canvas
- The composition should read as a wide cinematic panel: strong horizontal emphasis,
  figures in the lower third, sky dominant
- No text. No logos. No modern elements.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft sky, atmospheric haze, glow,
painterly blending, smooth vector art, portrait-style faces, cavalry, soldiers,
conflict or violence, Native American figures, battle scene, modern elements,
text, watermark, logos, pastel, blue dominant, low quality, blurry
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/timeline-1871-rising.jpg`
- Displayed inside the July 3, 1871 timeline item, inside the `.timeline__body`
- Crop focus: left two-thirds of the image (wagons and figures); the right third can be
  open sky if the composition requires it
- Apply `object-fit: cover` at roughly `width: 100%; aspect-ratio: 8/3`
- Dark overlay not required — image should be self-contained as a panel
