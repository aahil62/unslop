# Lane: Vapor Clinic

> Worked example. Shows the *shape* of a complete lane — synthesize new ones, don't copy.

**Identity:** A genome sequencing lab inside a Tokyo nightclub.
**Mood words:** neon, futuristic, precise
**Fits:** AI/SaaS, dev tools, biotech, crypto, technical products with swagger

## Palette

| Role | Hex | Notes |
|------|-----|-------|
| Surface | `#0A0A14` (Deep Void) | Violet-black |
| Ink | `#F0EFF4` (Ghost) | Cool off-white |
| Accent | `#7B61FF` (Plasma) | Electric violet — glow, not paint |
| Field | `#18181B` (Graphite) | Card/terminal surface |

*Why it coheres:* one light source (plasma) in a dark room. The accent works as
*emitted light* — used for glows, beams and active states, never large fills.

```css
:root {
  --surface: #0A0A14; --ink: #F0EFF4; --accent: #7B61FF; --field: #18181B;
}
```

## Typography

| Slot | Font | Weights |
|------|------|---------|
| Heading | Sora (tracking −0.02em) | 400, 700 |
| Drama | Instrument Serif *Italic* — the human voice inside the machine | 400 |
| Mono | Fira Code — terminal feeds, metrics, statuses | 400 |

Scale: 14/16/18/24/32/48/72. *Why:* rounded-geometric sans reads lab-grade;
the serif italic is the unexpected nightclub flourish; mono is load-bearing here —
this lane can run whole UI fragments in it.

## Space, radius, depth

- Spacing: balanced — 80–112px sections, 24px card padding.
- Radius: soft-large (`rounded-[1.5rem]`–`[2rem]` cards, pill controls).
- Depth: glow as elevation — active elements get `box-shadow: 0 0 24px
  rgb(123 97 255 / 0.25)`; resting elements get hairline ghost borders (8% opacity).

## Texture

Noise overlay at 0.04 opacity + one aurora gradient *only* in the hero
(plasma → transparent, blurred 120px, as if light spills from offstage).
Everything below the fold stays matte.

## Motion

Cinematic: hero gets a choreographed entrance (600ms `power3.out`, stagger 0.08);
scroll-linked section reveals; a typewriter mono feed somewhere. Micro stays
150–250ms. Reduced-motion: fade-only fallback, typewriter renders complete.

## Signature moment

The "telemetry" element: a live monospace feed (typed character-by-character with
a pulsing plasma cursor) showing domain-real messages — deploys, sequences,
transactions. Software-as-theater, derived from the product's actual data.

## Do / Don't

**Do:** glow only on interactive/active elements · mono for all numbers and
statuses · one aurora moment per page · pulsing status dot in footer ·
dark imagery (bioluminescence, microscopy, neon reflections).
**Don't:** purple-to-blue gradient buttons (the #1 AI tell) · glow on static
text · more than one neon hue · light sections mixed in · `gray-900` instead of Void.

## Acceptance checks

1. Exactly one aurora/gradient region per page (hero)
2. Glow shadows only on interactive or active elements
3. Typewriter/telemetry element present and using real domain copy
4. AA contrast passes for Ghost-on-Void and Ghost-on-Graphite
5. No horizontal scroll at 375px; reduced-motion shows complete static feed
