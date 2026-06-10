# Anti-Slop Checklist

The evidence-based checklist for detecting (and fixing) the "AI-generated" look in
React + Tailwind sites. Every item is verifiable by inspection, grep, or a script —
no vibes. Used by `/audit` to score and by `/retheme` as the exit bar.

**Scoring:** each applicable item is PASS / FAIL. Score = passes ÷ applicable × 100.
Items marked ⚙ have a deterministic check in `scripts/`.

---

## 1. Typography

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| T1 | More than 3 font weights in use | grep `font-(thin\|extralight\|light\|medium\|semibold\|bold\|extrabold\|black)` + computed styles | Reduce to a locked set, e.g. 400/500/700 |
| T2 | Single default font for everything, no pairing intent | Check loaded fonts vs. lane's type slots | Apply the lane's heading/body/mono pairing |
| T3 | Body line-height outside 1.5–1.7, headings outside 1.1–1.3 | Inspect `leading-*` and computed `line-height` | `leading-relaxed` body, `leading-tight` headings |
| T4 | Headings without negative tracking | Look for missing `tracking-tight`/`tracking-tighter` on display text | Headings −0.02em to −0.04em; body 0 to 0.01em |
| T5 | No type scale (arbitrary sizes, tiny jumps between levels) | List all `text-*` sizes; should form a clear ratio scale | Lock a scale (e.g. 14/16/18/24/32/48/64) and map every element to a step |

## 2. Spacing

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| S1 | ⚙ Arbitrary spacing values (`p-[13px]`, `mt-[27px]`) | grep `\[\d+px\]` in className | Snap to the 4px scale: 4/8/12/16/24/32/48/64/96 |
| S2 | Uniform section rhythm (every section `py-16`, identical gaps) | Compare vertical padding across sections | Vary rhythm intentionally: hero breathes more, dense sections less |
| S3 | Cramped touch targets | Interactive elements < 44×44px at 375px width | Min 44px touch targets on mobile |

## 3. Color

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| C1 | ⚙ Default-palette tells: `indigo-600`/`blue-600` primary buttons, `purple-…to-blue` gradients, `gray-50` alternating sections | grep for stock Tailwind color classes on key elements | Replace with the lane's named palette (exact hex via CSS variables) |
| C2 | More than one accent color competing for attention | Count distinct saturated hues on one screen | One restrained accent; everything else neutral |
| C3 | ⚙ Contrast failures: body text below WCAG AA (4.5:1), large text below 3:1 | `contrast-check.mjs` on rendered page | Adjust ink/background tokens until AA passes |
| C4 | Pure `#000` on pure `#fff` | Inspect background/text tokens | Use near-black ink on warm/cool tinted background per lane |
| C5 | Color-only meaning (status conveyed by hue alone) | Check error/success states for icon or label | Pair color with icon and text |

## 4. Surfaces (radius, shadow, border)

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| R1 | ⚙ Uniform `rounded-lg` on every container | grep radius classes; one value everywhere = no intent | Lock a radius scale with roles (e.g. controls 8px, cards 16px, media 24px) — or sharp everywhere if the lane says so |
| R2 | `shadow-md` everywhere / shadows with no coherent light source | Compare shadow values across components | Define 2–3 elevation levels with explicit blur/spread/offset |
| R3 | Border + shadow + ring stacked on one element | Inspect card/button classes | Pick one depth cue per element |

## 5. Icons & imagery

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| I1 | Mixed icon systems (Lucide + Heroicons + emoji) | Check imports and rendered icons | One icon system per project, one stroke weight |
| I2 | Emoji as UI icons | Visual scan | Replace with the icon system |
| I3 | Placeholder or irrelevant stock imagery | Visual scan of hero/section images | Images matching the lane's image mood, or none |

## 6. Motion

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| M1 | Everything fades up on scroll with identical timing | Scroll-through; count identical entrance animations | Motion budget: animate the few things that matter; micro 150–250ms, macro 300–500ms |
| M2 | ⚙ `transition-all` | grep `transition-all` | Transition specific properties only |
| M3 | No `prefers-reduced-motion` handling | grep `motion-reduce\|prefers-reduced-motion` | Provide fade-only or no-motion fallback |
| M4 | Hover states missing or default-only on interactive elements | Tab/hover through page | Intentional hover + visible `focus-visible` states styled to the lane |

## 7. States & robustness

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| X1 | Data-touching UI without loading/empty/error states | Read components that fetch or accept input | Real states with user-facing copy — never a blank region |
| X2 | ⚙ Horizontal scroll at 375px | screenshot/scrollWidth check at 375px | Fix overflowing elements |
| X3 | Forms without labels or with placeholder-as-label | Inspect form markup | Visible labels tied to controls |

## 8. Layout tells (the big one)

| # | Look for | Verify | Fix |
|---|----------|--------|-----|
| L1 | The classic AI hero: centered headline → subtext → two buttons → 3-col icon-card grid | Visual scan of hero + first section | At least one intentional asymmetry or signature moment (see lane's signature element) |
| L2 | Every section is `max-w-7xl mx-auto px-4` with identical internal structure | Compare section wrappers | Vary container widths and internal composition |
| L3 | Card grids where every card is identical weight | Visual scan | Establish hierarchy: one card pops, or vary spans |
| L4 | No texture or depth at all (flat default gradients on flat surfaces) | Visual scan | Apply the lane's signature texture (noise overlay, grain, tinted layers) |

---

## Audit output format

`DESIGN-AUDIT.md` must contain:

1. **Score** — overall and per category (passes/applicable).
2. **Evidence per failure** — file:line or screenshot reference, never "feels generic".
3. **Top 5 fixes by impact** — ordered, each mapped to checklist IDs.
4. **Screenshots** — 375/768/1024/1440 captured by `scripts/screenshot.mjs`.
