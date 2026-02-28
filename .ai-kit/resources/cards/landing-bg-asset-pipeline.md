# 🖼️ Landing Background Asset Pipeline

> **Domain:** Landing
> **Type:** CHOICE-HEAVY
> **Authority:** SUPPORT / OPTIONAL
> **Activation:** Via Template I or manual — see below
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A controlled pipeline for generating and iterating on custom background images for landing pages. Turns an inspiration image or mood into a hero background through prompt → generate → critique → iterate loops (max 3 iterations).

## When to Use

**ONLY** when the locked UI lane requires a custom/illustrated background:
- Lane B (Glass/Aurora) with full-bleed hero
- Any lane where asset pipeline flag is set to YES in DECISIONS-LOCKED.md

## When to REFUSE

**Block activation** if:
- UI lane is A (Minimal), C (Soft Airy), D (Data-Dense), or E (Editorial) — these lanes rarely need custom BGs
- Asset pipeline flag in DECISIONS-LOCKED.md is NO
- Lane has not been locked yet (run Gate D first)

If activation is attempted when it should be refused:
```
⚠️ Landing BG Asset Pipeline refused. 
Locked lane: [lane name] — does not require custom backgrounds.
Use solid colors, gradients, or subtle patterns instead.
```

## Outputs

| Artifact | Description |
|----------|-------------|
| **BG Spec** | Mood, color palette, composition constraints, subject/no-subject |
| **Generation Prompt** | Ready-to-paste image generation prompt |
| **Constraints** | Specific zones to keep clear (e.g., "central area for text overlay") |
| **Iteration Log** | Up to 3 iterations with critique per round |
| **Final BG** | Selected background with usage CSS (position, overlay, blend mode) |

## Conflicts / Overlaps

- Requires `ui-inspiration-to-lane.md` to have completed and set asset pipeline flag to YES.
- Occupies the SUPPORT slot — if another SUPPORT is active, requires slot swap.
- Does NOT produce UI components — only the background layer.

## Rules

1. Never generate a background without a written spec first.
2. Constraints must specify: clear zones, color temperature match with text, and blend mode.
3. Max 3 iterations. If not satisfactory after 3, simplify to gradient/solid.
4. "Central sky clear" is the default constraint for text-overlay heroes unless specified otherwise.
5. Background must not compete with foreground content — test with actual headline overlaid.
6. CSS must specify: `background-size`, `background-position`, overlay opacity, and fallback color.
7. Always provide a no-image fallback (e.g., `background: linear-gradient(...)`) for slow connections.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Locked UI lane (must have asset pipeline flag = YES)
- Landing page purpose (hero, full-page, section BG)
- Content that will overlay the background

### Option Lanes

| Lane | BG Type | Composition | Iteration Budget |
|------|---------|-------------|------------------|
| **A) Abstract / Gradient Mesh** | Soft, ambient, no subject | Fill entire viewport, stay out of text zone | 1–2 iterations |
| **B) Illustrated Scene** | Custom illustration with depth | Layered (BG/midground/foreground), parallax-ready | 2–3 iterations |
| **C) Photographic / Cinematic** | Photo-realistic hero image | Single focal plane, dark overlay for text readability | 2–3 iterations |

### Outputs After Selection
- Locked BG type (A/B/C)
- BG spec template filled
- Generation prompt
- Clear zone constraints
- Written to DECISIONS-LOCKED.md under "Asset Pipeline"
