# Prompt: Timeline Panel — JT Staten Wins the Gauntlet (March 7, 2026)
**Asset**: `webimages/ui/timeline-2026-gauntlet.jpg`
**Dimensions**: 1792×1024 (display cropped to ~800×300 inside timeline item)
**Section**: Timeline entry — March 7, 2026

---

## Input Images Required

- **`battle/webimages/TAS-JT-Staten.png`** — sole identity reference for JT Staten.
  Preserve his exact face, hair, skin tone, build, proportions, and confident expression.
  Do not invent, alter, or generalize his appearance.
- **`www/webimages/ui/timeline-1917-championship.jpg`** — sole reference for the City of
  Lights Championship belt design. Preserve the purple strap, angular center plate, City
  of Lights lettering and tower motif, green LOCO PRO side medallions, and gem accents.

---

## ImageGen Prompt

```
INPUT IMAGE REQUIRED: Use `battle/webimages/TAS-JT-Staten.png` as the identity reference
for JT Staten. Preserve his exact face, hair, skin tone, build, and proportions.

Redraw JT Staten in high-impact inked wrestling comic art: variable heavy black linework,
angular anatomy, two or three hard-edged cel-shading bands, sparse ink hatch and stipple
texture. No smooth shading, no gradients, no painterly blending.

IDENTITY (from reference image):
- Stocky, powerful build with broad shoulders and a low center of gravity
- Short dark hair, close-cropped
- Strong jaw, prominent brow, slight cold smirk — composed and in control, not shouting
- Black watch on left wrist, small earring

SCENE:
- JT Staten stands alone in the center of a professional wrestling ring, facing the viewer
  directly — straight-on, full front, looking into the camera
- His arms are uncrossed from his usual pose — one arm raised, holding the City of Lights
  Championship belt above his head, belt facing outward toward the viewer
- He wears: white rolled-sleeve dress shirt, dark charcoal vest, dark dress pants,
  black lace-up boots — his standard street clothes, not wrestling gear
- Expression: cold satisfaction. He is not celebrating — he is stating a fact.
- The ring has white ropes, dark corner posts, worn canvas
- Background: a small intimate venue — low ceiling, folding chairs, near-black shadow —
  suggested as simple flat angular shapes, not detailed
- A single flat gold spotlight shape falls from above, a clean hard-edged triangle or
  oval on the ring canvas around him
- The rest of the venue is near-black shadow

ILLUSTRATION RULES:
- Deep purple (#3d175d) and near-black (#150d20) for background and shadows
- Flat gold (#cfac00) for the spotlight shape, championship belt, and edge highlights
- Off-white for the shirt, hard angular shadow bands on the shirt and vest
- Spotlight is a flat solid gold shape — no soft glow, no radial gradient, no rim lighting
- Wide cinematic composition: JT occupies the center third, dark negative space on both sides
- Strong horizontal emphasis to fit the timeline panel format

CHAMPIONSHIP BELT (City of Lights Championship — preserve exactly):
- Wide purple leather strap with gold stud detailing along both edges
- Large angular center plate with stepped shield-like silhouette, gold border
- Black interior field on the center plate with gold decorative inner border
- "CITY OF LIGHTS" in large gold letters across the center of the plate
- "★ CHAMPIONSHIP ★" in smaller gold letters below
- Central motif on the plate: a tall vertical tower or obelisk with flanking street lamps
  and mountains in the background, rendered in gold on black
- Small green circular gem at the very base of the center plate
- Small pink or white gem accents embedded along the plate border
- Two circular side plates, each with a green medallion bearing "LOCO PRO" in gold lettering
  and a starburst/radiating lines border on the green field
- Keep belt front-facing, fully visible, correctly proportioned

No text beyond what appears on the belt itself. No other logos. No other figures in the ring.
```

## Negative Prompt

```
photorealistic, digital painting, gradients, soft glow, radial light, painterly blending,
smooth vector art, invented face, generic wrestler, altered identity, back-of-head view,
profile view, silhouette only, face hidden, face in shadow, crowd cheering,
colorful arena LED lighting, modern large stadium, multiple figures in ring, referee,
chibi proportions, mascot style, uniform thin outlines, text, watermark, logos,
pastel, blue, orange, low quality, blurry
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `www/webimages/ui/timeline-2026-gauntlet.jpg`
- **Identity reference**: `battle/webimages/TAS-JT-Staten.png`
- Displayed inside the March 7, 2026 timeline item, inside `.timeline__body`
- Apply `object-fit: cover` at roughly `width: 100%; aspect-ratio: 8/3`
- JT Staten is the only person authorized to hold the championship belt in any asset
- If his face is not recognizable from the reference, regenerate — identity must be preserved
- "Cold satisfaction" is the key expression note — he won and he knew he would
