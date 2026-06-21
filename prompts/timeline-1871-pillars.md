# Prompt: Timeline Panel — The Pillars of the Community Arrive (August 9, 1871)
**Asset**: `webimages/ui/timeline-1871-pillars.jpg`
**Dimensions**: 1792×1024 (display cropped to ~800×300 inside timeline item)
**Section**: Timeline entry — August 9, 1871

---

## ImageGen Prompt

```
A dramatic wide comic-book panel illustration: a small group of wealthy, formally dressed
men arriving in a frontier Colorado town in 1871 — stepping off a stagecoach or standing
on a wooden platform beside a newly arrived carriage.

SCENE:
- Three to four men in Victorian-era formal attire: top hats, long coats, waistcoats,
  watch chains — wealthy establishment figures, not laborers
- One man holds a rolled document or leather-bound portfolio tucked under his arm
- They stand in front of or beside a stagecoach or private carriage, looking out at
  the town with calm ownership — surveying, not arriving humbly
- Background: a suggestion of a frontier Main Street, flat building facades, dirt road —
  drawn as stark angular shapes, not detailed architecture
- Sky: deep purple-black, flat, pressing down on the scene
- The figures cast hard flat shadows on the ground

ILLUSTRATION RULES:
- Inked wrestling comic art: variable heavy black linework, angular anatomy and hard
  angular silhouettes for the figures, hard cel-shading bands
- Flat gold highlights on hat brims, watch chains, and the rolled document
- Deep purple sky and shadows, near-black for coats and the carriage body, flat warm-gold
  for skin highlights and document
- The composition should feel like a slow, deliberate arrival — cold confidence, not drama
- Figures occupy the right half of the panel; the frontier street and carriage are left
- No text. No logos. No anachronistic elements.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft shadows, glow, painterly blending,
smooth vector art, action poses, running, combat, smiling expressions, casual clothing,
soldiers, military uniforms, Native American figures, horses (unless part of carriage team),
modern elements, text, watermark, logos, pastel, blue dominant, low quality, blurry
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/timeline-1871-pillars.jpg`
- Displayed inside the August 9, 1871 timeline item, inside the `.timeline__body`
- Crop focus: right half of the image (the figures); the left can show the arriving
  carriage or frontier street
- Apply `object-fit: cover` at roughly `width: 100%; aspect-ratio: 8/3`
- Pair with the July 3 panel — these two should feel like they belong to the same
  comic chapter even though the moods differ (determined settlers vs. cold arrivals)
