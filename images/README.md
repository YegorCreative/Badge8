# images/

This directory holds all static visual assets for the Badge 8 website.

---

## Replacing placeholders with real images

Each section has an SVG placeholder in use today. Drop in the real file at the path below
and remove the corresponding `url('../images/*-placeholder.svg')` layer from `css/styles.css`.

| Section        | Replace placeholder with… | CSS selector to update          |
|----------------|----------------------------|---------------------------------|
| Hero           | `hero.jpg`                 | `.hero-atmo-base` background    |
| Work — Epicor  | `work-epicor.jpg`          | `.prod-bg--epicor` background   |
| Work — Infor   | `work-infor.jpg`           | `.prod-bg--infor` background    |
| Work — Workday | `work-workday.jpg`         | `.prod-bg--workday` background  |
| Work — ServiceNow | `work-servicenow.jpg`   | `.prod-bg--servicenow` background |

### Image spec

**Hero** (`hero.jpg`)
- Minimum: 2560 × 1440 px (16:9)
- Aesthetic: vast dark space, warm amber practicals from lower-left, cool blue-steel from upper-right
- ARRI Alexa / anamorphic grain. No stock photography. No flat lighting.

**Work panels** (`work-*.jpg`)
- Minimum: 2400 × 1080 px (21:9 cinematic crop)
- Exposure: very dark — the gradient/vignette overlay sits on top
- No staged smiling, no stock clichés, no illustration

| File                | Scene tone                                   |
|---------------------|----------------------------------------------|
| `work-epicor.jpg`   | Amber-warm — manufacturing floors, foundries |
| `work-infor.jpg`    | Deep indigo — server halls, control rooms    |
| `work-workday.jpg`  | Midnight gold — executive towers, finance    |
| `work-servicenow.jpg` | Cool steel — operations centre, glass+steel |

---

## Other assets (not yet added)

| File                | Purpose                                              |
|---------------------|------------------------------------------------------|
| `logo-infinity.svg` | ∞ mark alone — copper foil on dark, obsidian on light |
| `favicon.ico`       | ∞ mark, 32×32                                        |
| `favicon.svg`       | SVG favicon                                          |
| `og-image.jpg`      | Open Graph card — 1200×630 px, dark with wordmark    |

---

## Colour reference

Warm amber `#d97c3f` / `#a54a0e` · Steel blue `#3a4870` / `#2d4460` · Copper `#b8622a` · Obsidian `#070707`  
No teal-and-orange. No illustration. No AI-artifact imagery. Human subjects in motion only.


## Planned assets

### Hero
- `hero-bg.jpg` — Full-screen cinematic still for the hero atmospheric background.  
  Spec: warm amber practicals from bottom-left, cool blue-steel from upper-right,  
  dark overall exposure. ARRI Alexa / 35mm anamorphic aesthetic. Min 2560×1440px.

### Production thumbnails (work section)
- `epicor.jpg` — Manufacturing intelligence. Industrial floors, supply chain, amber light.
- `infor.jpg` — Industry cloud. Server rooms, control rooms, deep indigo.
- `workday.jpg` — Human capital at scale. Executive towers, finance, midnight gold.
- `servicenow.jpg` — IT operations. Digital operations center, cool steel-blue.

  Spec: all production images 2400×1080px minimum (21:9 cinematic crop). Dark exposure.  
  No stock photography. No staged smiling. No flat lighting.

### Logo / brand marks
- `logo-infinity.svg` — The ∞ mark. Copper foil stroke on dark, obsidian on light.
- `favicon.ico` / `favicon.svg` — The ∞ mark alone, minimal.
- `og-image.jpg` — Open Graph card image, 1200×630px, dark with the wordmark.

## Notes
- All imagery should match the cinematic grade: warm amber + cool steel, never teal-and-orange.
- Human subjects mid-action only. Subjects: manufacturing, warehouses, hospitals,  
  design studios, conference rooms, editing suites, hangars.
- No illustration, no AI-artifact imagery, no stock clichés.
