# Lane: Midnight Luxe

> Worked example. Shows the *shape* of a complete lane — synthesize new ones, don't copy.

**Identity:** A private members' club meets a high-end watchmaker's atelier.
**Mood words:** dark, editorial, expensive
**Fits:** agencies, luxury services, high-ticket consulting, premium brands

## Palette

| Role | Hex | Notes |
|------|-----|-------|
| Surface | `#0D0D12` (Obsidian) | Blue-black, not gray-900 |
| Ink | `#FAF8F5` (Ivory) | Warm off-white — never pure #fff on dark |
| Accent | `#C9A84C` (Champagne) | Restrained gold; metal, not neon |
| Field | `#2A2A35` (Slate) | Raised card surface |

*Why it coheres:* dark leather, brass, ivory paper — a physical room rendered as
tokens. Gold is the only saturation, so it reads as a metal detail, not a highlight pen.

```css
:root {
  --surface: #0D0D12; --ink: #FAF8F5; --accent: #C9A84C; --field: #2A2A35;
}
```

## Typography

| Slot | Font | Weights |
|------|------|---------|
| Heading | Inter (tracking −0.02em) | 400, 600 |
| Drama | Playfair Display *Italic* — display sizes only | 500 |
| Mono | JetBrains Mono — numerals, specs, footer status | 400 |

Scale: 14/16/18/24/32/48/64. *Why:* the deliberately neutral sans lets the didone
italic carry all the romance; mono numerals feel like watch-spec engraving.

## Space, radius, depth

- Spacing: generous and even — 96–128px sections; luxury is unhurried.
- Radius: soft-large — `rounded-[2rem]` cards, pill buttons.
- Depth: 1px hairline borders (`#FAF8F5` at 10% opacity) as the primary cue;
  shadows almost invisible on obsidian, so don't rely on them.

## Texture

Tinted glass: section panels in `--field` at 60% with `backdrop-blur-xl` and
hairline borders. Optional architectural-shadow photography at low opacity
behind dark sections.

## Motion

Standard-to-calm: micro 200ms; macro 400ms `power2.inOut`; navbar morphs from
transparent to blurred-glass on scroll. Reduced-motion: disable entrances entirely.

## Signature moment

The floating-island navbar: a fixed, centered pill that is transparent over the
hero and morphs to blurred glass with champagne text after scroll — the
"entering the club" transition.

## Do / Don't

**Do:** hairline borders over shadows · gold only on CTA, hover and key numerals ·
huge ivory display lines on obsidian · marble/architecture photography ·
mono for every number.
**Don't:** pure #fff text · gradients on buttons · more than one gold element
per viewport · gray-800/gray-900 Tailwind defaults · bright imagery.

## Acceptance checks

1. Background is `#0D0D12` (not a Tailwind gray) everywhere
2. Accent appears at most once per viewport-height of content
3. All hairline borders at 8–12% ivory opacity
4. Navbar morph fires exactly at hero exit
5. AA contrast passes for Ivory-on-Obsidian and Ivory-on-Slate
