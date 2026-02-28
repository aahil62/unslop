# 🃏 Resource Card: Design System Framework

> **Domain:** UI System
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A multi-dimensional design intelligence framework covering patterns, visual style, color theory, typography, and animation — enabling systematic generation of cohesive, modern UIs through structured decision-making.

## Authority Level
`PRIMARY`

## When to use it
- When designing the overall visual identity of a new website or app
- When you need a structured approach to choosing styles, palettes, fonts, and animations
- When generating comprehensive design specifications that go beyond generic defaults

## Outputs
- Complete design system specifications (style + color palette + typography + animations)
- Design prompts with implementation-ready CSS properties
- Pattern recommendations matched to industry and product type
- Animation and interaction guidelines with functional justification

## Activation phrase
```
Activate Design System Framework for this design.
```

## Conflicts / Overlaps
- **Overlaps with** Design Search Toolkit (the data-driven search version) — this is the *conceptual framework*, the toolkit is the *automated search tool*. Use the framework for manual design decisions, the toolkit for data-driven queries.
- **Overlaps with** Design-Elements — this covers *full-page* design systems; Design-Elements covers *component-level* polish. Combine freely as PRIMARY + SUPPORT.
- **Do not combine with** Design Tokens as PRIMARY — pick one design system methodology.

## Extracted Rules

### 1. Address All Design Dimensions
Every design must address: layout patterns, visual style, color palette, typography, and motion. Skipping a dimension produces incomplete, inconsistent results.

### 2. Style Drives Downstream Choices
Choose the visual style first (e.g., glassmorphism, soft UI, minimalist, brutalist) — it constrains color, typography, and animation choices downstream.

### 3. Curated Color Palettes Only
Never use raw named CSS colors. Use HSL-tuned palettes with primary, secondary, accent, background, and text values that pass contrast checks.

### 4. Typography Requires Pairing
Never use a single font. Pair a display/heading font with a body font. Both must be web-accessible for production use.

### 5. Purposeful Animation
Every animation needs a functional justification (feedback, attention, hierarchy, delight). No motion for motion's sake.

### 6. Match Pattern to Product Type
SaaS uses dashboard-centric layouts; e-commerce uses product grids + cart flows; portfolios use case-study storytelling. Match the layout pattern to the product.

### 7. Dark Mode From Day One
Design for both light and dark modes from the start using CSS custom properties. Test contrast in both modes before shipping.

---

## 🚦 Decision Gate (v3) — 2026-02-28

### Required Inputs
- Style lane (aesthetic direction)
- Color palette (curated HSL, not raw CSS colors)
- Typography pair (display + body, web-accessible)
- Animation level + justified purpose for each animation
- Industry/product type (for pattern matching)

### Option Lanes

| Lane | Style | Best For |
|------|-------|----------|
| **Glassmorphism** | Frosted glass, blur, transparency, layered depth | Modern SaaS, fintech, AI products |
| **Aurora UI** | Gradient meshes, vibrant backgrounds, glowing effects | Creative tools, AI, premium landing pages |
| **Soft UI / Neumorphism** | Subtle inner/outer shadows, pastel palette, tactile feel | Consumer apps, mobile-first designs |
| **Minimalist Clean** | Whitespace-heavy, monochrome + 1 accent, sharp type | Portfolios, editorial, developer tools |
| **Bold / Brutalist** | High contrast, oversized type, raw grid, no decoration | Statements, agencies, creative studios |

### Selection Criteria
- **Industry:** SaaS → Glassmorphism or Minimalist; AI → Aurora; Consumer → Soft UI
- **Brand energy:** Calm → Minimalist; Vibrant → Aurora or Bold; Elegant → Glassmorphism
- **Complexity:** Data-dense → Minimalist; Visual impact → Aurora or Glassmorphism

### Outputs After Selection
- Locked style lane name
- Curated color palette (5+ HSL tokens)
- Typography pair (heading + body)
- Animation rules (purpose-justified, duration + easing)
- Dark/light mode token sets
- Anti-patterns for chosen lane
- Acceptance criteria (3–5 checks)
