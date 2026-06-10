# Lane: Organic Tech

> Worked example. Shows the *shape* of a complete lane — synthesize new ones, don't copy.

**Identity:** A biological research lab meets an avant-garde luxury magazine.
**Mood words:** calm, clinical, premium
**Fits:** wellness, longevity, boutique health services, premium consumer science

## Palette

| Role | Hex | Notes |
|------|-----|-------|
| Surface | `#F2F0E9` (Cream) | Warm paper, not white — instantly non-default |
| Ink | `#1A1A1A` (Charcoal) | Near-black, slightly warm |
| Accent | `#CC5833` (Clay) | Earthy orange-red; complement of the moss family |
| Field | `#2E4036` (Moss) | Deep green used for dark sections and cards |

*Why it coheres:* every color exists in a forest-and-lab world — moss, clay,
cream paper, charcoal. The accent is warm against cool greens, so CTAs read
instantly without neon.

```css
:root {
  --surface: #F2F0E9; --ink: #1A1A1A; --accent: #CC5833; --field: #2E4036;
}
```

## Typography

| Slot | Font | Weights |
|------|------|---------|
| Heading | Plus Jakarta Sans (tracking −0.03em) | 500, 700 |
| Drama | Cormorant Garamond *Italic* — massive, 1–2 uses per page | 400 |
| Mono | IBM Plex Mono — data, eyebrows, lab-style labels | 400 |

Scale: 14/16/18/24/32/48/72. *Why:* geometric sans = the lab; oversized serif
italic = the magazine. The mono slot sells the "research" half with tiny details.

## Space, radius, depth

- Spacing: airy. Sections 96–128px vertical; components stay tight (16/24).
- Radius: organic — `rounded-[2rem]` cards, `rounded-full` controls. No sharp corners.
- Depth: layered tints (moss-on-cream), soft single shadow on floating elements only.

## Texture

SVG `feTurbulence` noise overlay at 0.05 opacity over everything — kills flat
digital gradients, reads as paper grain on cream.

## Motion

Standard: micro 200ms ease-out; macro 400–500ms `power3.out`; stagger 0.08 text /
0.15 cards. Scroll reveals only on section entry. Reduced-motion: fade-only.

## Signature moment

Hero line pattern — "[Concept noun] is the" in bold sans, then "[Power word]."
in massive serif italic at 3–5× the size. One typographic moment carries the
whole identity.

## Do / Don't

**Do:** warm paper background everywhere · serif italic only at display sizes ·
mono labels uppercase with 0.1em tracking · deep moss sections to pace the page ·
real organic photography (forest, glassware, texture).
**Don't:** pure white backgrounds · serif for body text · more than one accent ·
stock "team smiling" photos · sharp corners.

## Acceptance checks

1. Noise overlay visible on Surface at 100% zoom
2. Drama serif appears at display size only, ≤ 2 instances per page
3. Accent used exclusively on interactive/emphasis elements
4. AA contrast passes for Ink-on-Surface and Cream-on-Field
5. No horizontal scroll at 375px
