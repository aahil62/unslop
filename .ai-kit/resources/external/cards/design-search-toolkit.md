# 🃏 Resource Card: Design Search Toolkit

> **Domain:** UI System
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A data-driven design intelligence toolkit that provides searchable databases of visual styles, color palettes, font pairings, and UX rules — generating complete design systems through automated queries matched to product type and industry.

## Authority Level
`SUPPORT`

## When to use it
- When you need data-driven style, color, or typography recommendations for a specific product type or industry
- When generating a full design system automatically via search queries
- When running pre-delivery UX anti-pattern scans or accessibility checks

## Outputs
- Complete design system (pattern + style + colors + typography + effects)
- Domain-specific search results (product, style, chart, ux, typography, color, landing)
- Stack-specific implementation guidelines (React, Next.js, Vue, Svelte, etc.)
- Pre-delivery quality checklists

## Activation phrase
```
Run Design Search Toolkit for this project.
```

## Conflicts / Overlaps
- **Overlaps with** Design System Framework — the toolkit is the *searchable database*; the framework is the *conceptual model*. Use the toolkit for automated queries, the framework for manual design thinking.
- **Complements** Design-Elements as a SUPPORT resource for component-level polish after system-level decisions.

## Extracted Rules

### 1. Start with a Full Design System Query
Run a comprehensive multi-domain search first when starting a new project. Don't cherry-pick individual design dimensions in isolation.

### 2. No Emoji Icons in Production UI
Use proper SVG icon libraries (Heroicons, Lucide, or similar). Emojis are for documentation, not interface elements.

### 3. Cursor Pointer on All Interactive Elements
Every clickable element must have `cursor: pointer`. Missing cursors signal broken affordance.

### 4. Stable Hover States
Use color/opacity transitions on hover, not scale transforms that shift layout. Smooth transitions: 150–300ms.

### 5. Light Mode Needs Real Contrast
Use adequate opacity for glass-style cards in light mode. Never use light grays for body text. Minimum text color should pass WCAG AA.

### 6. Floating Navbar Pattern
Add proper spacing for floating navbars. Account for fixed navbar height in content padding to prevent overlap.

### 7. Test Both Modes Before Delivery
Run a complete pre-delivery checklist (Visual Quality → Interaction → Light/Dark Mode → Layout → Accessibility) before marking UI work complete.

---

## 🚦 Decision Gate (v3) — 2026-02-28

### Required Inputs
- Product type / industry (for search query targeting)
- Style preference (from available style catalog)
- Color temperature preference (warm, cool, neutral)
- Target framework (React, Next.js, Vue, Svelte, etc.)

### Option Lanes

| Lane | Approach | Best For |
|------|----------|----------|
| **Full Design System Search** | Multi-domain parallel search across all categories | New projects needing complete design direction |
| **Targeted Style Query** | Single-domain search (style, color, typography, etc.) | Existing projects needing specific design choices |
| **UX Audit** | Anti-pattern scan + accessibility check | Pre-delivery quality pass |

### Selection Criteria
- **Greenfield project:** → Full Design System Search
- **Specific gap:** (e.g., "need a better palette") → Targeted Style Query
- **Pre-ship:** → UX Audit

### Outputs After Selection
- Search results with matched styles/palettes/fonts
- Recommended palette with hex/HSL values
- Font pairing recommendation
- Stack-specific implementation guidance
- Pre-delivery checklist (filled)
