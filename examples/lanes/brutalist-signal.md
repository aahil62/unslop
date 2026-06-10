# Lane: Brutalist Signal

> Worked example. Shows the *shape* of a complete lane — synthesize new ones, don't copy.

**Identity:** A control room for the future — no decoration, pure information density.
**Mood words:** bold, confident, raw
**Fits:** creators, events, studios, statements, manifesto-driven products

## Palette

| Role | Hex | Notes |
|------|-----|-------|
| Surface | `#F5F3EE` (Off-white) | Warm paper, not #fff |
| Ink | `#111111` (Black) | Almost-pure black — this lane wants harshness |
| Accent | `#E63B2E` (Signal Red) | Alarm-level red; used like a rubber stamp |
| Field | `#E8E4DD` (Paper) | Slightly darker panel tone |

*Why it coheres:* newsprint + warning signage. Two neutrals and one alarm color —
restraint is the whole aesthetic.

```css
:root {
  --surface: #F5F3EE; --ink: #111111; --accent: #E63B2E; --field: #E8E4DD;
}
```

## Typography

| Slot | Font | Weights |
|------|------|---------|
| Heading | Space Grotesk (tracking −0.03em), set HUGE | 500, 700 |
| Drama | DM Serif Display *Italic* — one ironic counterpoint per page | 400 |
| Mono | Space Mono — labels, indexes, timestamps | 400, 700 |

Scale: 14/16/20/32/48/72/120. *Why:* the scale jumps are violent on purpose;
oversized grotesque IS the decoration. The serif appears once, like a handwritten
note on a blueprint.

## Space, radius, depth

- Spacing: dense and gridded — visible structure, tight 4/8/16 rhythm inside
  blocks, hard 2px rules between sections.
- Radius: **0px everywhere.** Sharpness is the personality.
- Depth: none. Flat planes separated by 2px black rules and Field panels.
  Hard offset shadow (4px 4px 0 #111) allowed on interactive elements only.

## Texture

Deliberate flatness: 2px black borders, exposed grid lines, index numbers
(01 / 02 / 03) in mono. The "texture" is visible structure.

## Motion

Calm: 100–150ms linear/steps. No scroll entrances, no fades — elements snap.
Hover = instant color inversion (black ↔ paper). Reduced-motion: already compliant.

## Signature moment

Marquee headline strip or a stamped red index system — one element that behaves
like signage (e.g. a red "REGISTER →" block that inverts on hover), echoing the
control-room identity.

## Do / Don't

**Do:** 2px solid black borders · headlines ≥ 96px on desktop · mono uppercase
labels with index numbers · color inversion on hover · visible grid.
**Don't:** rounded corners · soft shadows · gradients · more than 3 type sizes
per viewport · decorative imagery (diagrams and type instead).

## Acceptance checks

1. Zero border-radius anywhere (grep `rounded` → only `rounded-none`)
2. Red appears only as stamp/CTA/index — never as background wash
3. Hero headline ≥ 96px at 1440px width
4. All hover states are instant inversions, no fades > 150ms
5. AA contrast passes (trivial here) and no horizontal scroll at 375px
