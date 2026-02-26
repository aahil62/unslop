# Resource Card: Landing Patterns

> **Domain:** Landing
> **Authority:** PRIMARY

---

## What It Is
A structural methodology for building high-converting, visually premium landing pages. Covers section ordering, hero patterns, scroll-driven animations, social proof placement, and CTA strategy — organized by product type.

## When to Use
- Building a new landing page or product showcase from scratch
- Redesigning an existing landing page for better conversion
- Adding scroll-linked animations or parallax effects
- Need a systematic approach to section ordering and content hierarchy

## Outputs
- **Section blueprint** — Ordered list of sections with purpose, content requirements, and layout
- **Hero specification** — Layout type, headline formula, visual treatment, CTA placement
- **Animation plan** — Scroll triggers, entrance animations, parallax depths
- **Conversion audit** — CTA count, placement, contrast, and accessibility check

## Activation Phrase
```
Use Landing Patterns for this page build.
```

## Conflicts / Overlaps
- **Overlaps with** Dashboard-IA on layout systems — Landing is *conversion-focused* single-page; Dashboard is *data-dense* multi-view. Do not combine as co-PRIMARY.
- **Pairs well with** UI-System-Specs as SUPPORT for design consistency.

## Extracted Rules

### 1. Hero Decides Everything
The hero section has <3 seconds to communicate value proposition. Lead with the benefit, not the feature. One primary CTA, no distractions.

### 2. Section Ordering Follows Psychology
Standard high-converting order: Hero → Social Proof → Features/Benefits → How It Works → Testimonials → Pricing → Final CTA. Deviate only with data to justify.

### 3. One CTA Per Viewport
Each scroll-viewport should have at most one primary CTA visible. Multiple competing CTAs reduce conversion. Secondary actions use text links, not buttons.

### 4. Scroll Animations Must Be Subtle
Entrance animations: max 20px translate, 600ms duration, ease-out. Parallax: max 30px depth difference. Performance: use `transform` and `opacity` only, never `top`/`left`.

### 5. Social Proof Near Decisions
Place testimonials, logos, or stats immediately before or after CTAs. Social proof reduces friction at decision points.

### 6. Mobile-First Section Design
Every section must work at 375px before scaling up. No horizontal overflow. Touch targets >= 44x44px. Stack side-by-side layouts vertically on mobile.

### 7. Performance Budget
Largest Contentful Paint < 2.5s. No layout shifts. Lazy-load everything below the fold. Inline critical CSS for above-the-fold content.
