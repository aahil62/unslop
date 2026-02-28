# 🃏 Resource Card: Glassmorphism Reference

> **Domain:** Inspiration
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A reference implementation showcasing glassmorphic UI patterns, animated card effects, gradient overlays, and premium component patterns — providing concrete code examples for building visually rich, modern web interfaces.

## Authority Level
`INSPIRATION`

## When to use it
- When you need visual reference for premium glassmorphic UI components
- When implementing animated effects, card visualizations, or immersive hero sections
- When building auth flows with polished dashboards

## Outputs
- Component patterns: Hero, Navbar, Interactive Cards, Pricing, Testimonials, Footer
- Animation patterns: page transitions, CSS gradient animations, scroll effects
- Premium styling techniques: glassmorphism, gradient overlays, smooth scroll
- Auth integration patterns: login/signup with personalized dashboard

## Activation phrase
```
Reference Glassmorphism patterns for this UI.
```

## Conflicts / Overlaps
- **Complements** Design-Elements and Design System Framework — this resource provides *concrete implementations*; the others provide *design principles*. Use as INSPIRATION alongside any UI System PRIMARY.
- **No conflicts** — this is a reference, not a methodology.

## Extracted Rules

### 1. Glassmorphism Requires Layering
Use `backdrop-filter: blur()` + semi-transparent backgrounds + subtle borders. Never use blur without a visible background layer behind it.

### 2. Animated Card Patterns
Animated visual effects with gradient masks can add dramatic depth to interactive cards. Combine with data-driven animations for engaging experiences.

### 3. Gradient Overlays for Depth
Use radial and linear gradients as overlays on hero sections. Multiple gradients layer to create rich, dimensional backgrounds.

### 4. Smooth Page Transitions
Use animation libraries or CSS for smooth enter/exit transitions. Stagger child elements for list and grid reveal effects.

### 5. Premium Footer Pattern
Grid layout with brand column, navigation columns, social links, and a gradient divider. Include copyright and optional newsletter signup.

---

## 🚦 Decision Gate (v3) — 2026-02-28

### Required Inputs
- Which animation patterns to use (card effects, parallax hero, staggered grid, page transitions)
- Component subset needed (hero, navbar, pricing, testimonials, footer, or all)
- Glassmorphism intensity (subtle, medium, heavy)
- Motion library preference (JS animation library, CSS-only, or hybrid)

### Option Lanes

| Lane | Effect Level | Best For |
|------|-------------|----------|
| **Reference Only** | Browse patterns, adapt to your own design system | When using another resource as PRIMARY for design |
| **Component Lift** | Extract specific components (e.g., card effect, hero) and adapt | Adding premium effects to existing UI |
| **Full Pattern Port** | Adopt the complete glassmorphism + animation system | New landing pages or showcases from scratch |

### Selection Criteria
- **Existing design system:** → Reference Only or Component Lift
- **New project, no design system yet:** → Full Pattern Port
- **Single feature addition:** → Component Lift

### Outputs After Selection
- Selected animation patterns list
- Component extraction targets
- Glassmorphism token values (blur, opacity, border)
- Motion specs (duration, easing, trigger points)
- Anti-patterns: no glassmorphism without visible background layer, no blur without fallback
