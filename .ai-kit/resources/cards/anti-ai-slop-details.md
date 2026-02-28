# 🔍 Anti-AI-Slop Detail Checklist

> **Domain:** UI-Polish
> **Type:** CHOICE-HEAVY
> **Authority:** SUPPORT
> **Activation:** `RUN_ANTI_SLOP_POLISH`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A calibrated polish checklist that eliminates the "AI-generated" look from UI output. Covers typography micro-details, spacing discipline, motion timings, shadow consistency, icon systems, and blur sequences. Produces concrete numbers and anti-patterns, not vibes.

## When to Use

- After Gate E/F (tokens + motion) are locked
- Any landing page, dashboard, or marketing UI task
- During AUDIT phase as final polish pass
- When output "feels generic" but you can't pinpoint why

## Outputs

| Artifact | Description |
|----------|-------------|
| **Polish Checklist** | 15–20 items grouped by category, each with pass/fail criteria |
| **Numbers Sheet** | Concrete values: motion durations, spacing multiples, shadow specs |
| **Anti-Pattern List** | 8–12 common AI-slop patterns with "instead, do X" alternatives |

## Conflicts / Overlaps

- Requires lane selection from `ui-inspiration-to-lane.md` FIRST — polish calibration depends on lane.
- Complements `Design-Elements` resource — that card provides tokens, this card verifies their application.
- Does NOT override locked tokens — it checks compliance with them.

## Rules

1. Never apply polish before tokens are locked — you'll polish the wrong thing.
2. Motion durations must be in ranges, not single values (e.g., "150–250ms for micro, 300–500ms for macro").
3. Spacing must follow a scale (4px base: 4/8/12/16/24/32/48/64) — no arbitrary values.
4. Shadows must specify blur, spread, and offset — not just "shadow-md."
5. Icons must come from one system per project — no mixing Phosphor + Lucide + Heroicons.
6. Font weights: use max 3 per project (e.g., 400/500/700). More = slop.
7. Line-height (leading): body at 1.5–1.7, headings at 1.1–1.3. Never 1.0 or 2.0+.
8. Letter-spacing (tracking): headings -0.02em to -0.04em, body 0 to 0.01em.
9. Border-radius: pick one scale (0/2/4/8/12/9999) — no mixing rounded-sm with rounded-3xl randomly.
10. Blur-to-reveal: if used, progressive (blur-8 → blur-4 → blur-0 over 400–600ms).

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Locked UI lane (from Gate D / `ui-inspiration-to-lane.md`)
- Locked tokens (from Gate E / design system)
- Project type (landing, dashboard, app)

### Option Lanes

| Lane | Polish Intensity | Target | Effort |
|------|-----------------|--------|--------|
| **A) Low** | Essential fixes only — spacing scale, font weight consistency, shadow cleanup | Internal tools, MVPs, prototypes | ~30 min |
| **B) Medium** | Low + motion timing audit, icon consistency, border-radius discipline, leading/tracking | Production SaaS, standard launches | ~1–2 hr |
| **C) High** | Medium + blur-to-reveal sequences, micro-interactions, scroll-driven effects, pixel-level audit | Premium landings, brand-critical pages, portfolio pieces | ~3–5 hr |

### Sub-Decisions (after intensity)

| Decision | Options | Default |
|----------|---------|---------|
| **Icon System** | Phosphor / Lucide / Heroicons / Radix Icons / Custom | Ask user |
| **Motion Intensity** | Subtle (150–250ms ease-out) / Standard (200–400ms spring) / Cinematic (400–800ms custom curves) | Match lane |
| **Accessibility** | WCAG AA / WCAG AAA / Relaxed (decorative only) | WCAG AA |

### Outputs After Selection
- Locked intensity (A/B/C)
- Icon system choice
- Motion intensity level
- Accessibility target
- Full polish checklist (15–20 items)
- Numbers sheet
- Written to DECISIONS-LOCKED.md under "Anti-Slop Polish"
