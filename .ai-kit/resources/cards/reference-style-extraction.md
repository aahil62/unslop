# 🧲 Reference Style Extraction

> **Domain:** UI-System / Components
> **Type:** CHOICE-HEAVY
> **Authority:** SUPPORT
> **Activation:** `EXTRACT_REFERENCE_STYLE`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A reverse-engineering process that takes a visual reference (site, screenshot, Figma link) and extracts its button/card/input styles into reusable design tokens and component recipes. Turns "make it look like that" into implementable CSS.

## When to Use

- User provides a reference site/screenshot and says "match this style"
- Building a component library from an existing design reference
- Need to extract specific patterns (gradients, inset shadows, hover states)
- Pairing with `ui-inspiration-to-lane.md` after lane selection

## Outputs

| Artifact | Description |
|----------|-------------|
| **Style Spec** | Per component: border, background (solid/gradient), shadow (drop/inset), radius, padding |
| **Hover Behavior** | Transition property, duration, easing, state change (scale, color shift, glow) |
| **Token Map** | CSS custom properties or Tailwind theme extension values |
| **Component Recipe** | Ready-to-paste component code with token-based styling |

## Conflicts / Overlaps

- Requires lane selection FIRST — extraction must align with locked lane.
- Overlaps with `Interface Design System` on tokens — this card EXTRACTS from reference, IDS DEFINES from scratch.
- Does NOT replace full design system — produces component-level specs only.

## Rules

1. Never extract without a reference — no imagining styles.
2. Extract what IS there, not what you think should be there.
3. All values must be concrete (e.g., `border: 1px solid rgba(255,255,255,0.12)`) — no "subtle border."
4. Gradients must include angle, stops, and colors with alpha values.
5. Inset shadows: specify inset direction, blur, spread, color. Common anti-pattern: forgetting the inset keyword.
6. Hover transitions: always specify `transition-property` (not `all`), duration, and easing function.
7. Token names must follow project conventions — check DECISIONS-LOCKED for existing naming scheme.
8. Component recipes must work standalone — no implicit dependencies on unextracted tokens.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Reference source (URL, screenshot, or description)
- Component scope (what to extract for)

### Option Lanes

| Lane | Fidelity | Scope |
|------|----------|-------|
| **A) Exact** | Pixel-match the reference | Specific components only (buttons, cards) |
| **B) Close** | Capture the essence, adapt to project tokens | Component set (buttons + cards + inputs) |
| **C) Inspired** | Use as starting point, diverge freely | Full design language derived from reference |

### Component Scope Decision

| Scope | Components Covered |
|-------|--------------------|
| **Buttons Only** | Primary, secondary, ghost, icon buttons |
| **Cards + Inputs** | Cards, inputs, selects, textareas, toggle |
| **Full Surface** | Buttons + Cards + Inputs + Nav + Modal + Toast |

### Outputs After Selection
- Locked fidelity (A/B/C)
- Locked component scope
- Style spec per component
- Token map
- Component recipes
- Written to DECISIONS-LOCKED.md under "Reference Style Extraction"
