# 🃏 Resource Card: Design Tokens

> **Domain:** UI System
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A token-level design system methodology that enforces consistent UI decisions across sessions — providing a structured approach to spacing scales, color variables, typography, and component patterns with documented rationale.

## Authority Level
`SUPPORT`

## When to use it
- When establishing a project's foundational design tokens (spacing, colors, radius, typography)
- When you need session-persistent UI consistency and want design decisions documented with rationale
- When defining reusable component patterns (buttons, cards, inputs) with exact specs

## Outputs
- Design system documents with token definitions
- Component pattern specs (height, padding, radius, font, background)
- Decision log with rationale and dates
- Direction-driven design (choosing a personality that constrains all downstream choices)

## Activation phrase
```
Apply Design Tokens system to this project.
```

## Conflicts / Overlaps
- **Overlaps with** Design System Framework — Design Tokens is *token-level* (spacing, colors, radius); the Framework is *system-level* (patterns, styles, animations). Use Design Tokens for the micro foundation, the Framework for the macro vision.
- **Do not combine with** Design System Framework as PRIMARY in the same domain — pick one as the design authority.

## Extracted Rules

### 1. Direction First
Choose an overall design direction before picking any tokens. The direction constrains all downstream color, spacing, and typography choices.

### 2. Color Temperature
Every design has a color temperature: warm, cool, neutral, or tinted. This must be chosen early as it constrains all downstream color choices.

### 3. Consistent Spacing Scale
Pick a base unit (4px or 8px) and derive all spacing from it. The scale must be explicit: e.g., [4, 8, 12, 16, 24, 32, 64].

### 4. Core Color Variables
Define a consistent set of semantic color tokens: `--foreground`, `--secondary`, `--muted`, `--faint`, `--accent`. Every component references these, never raw values.

### 5. Document Every Decision
Keep a structured decisions table with columns: Decision, Rationale, Date. This prevents drift and unanswered "why did we pick this?" questions.

---

## 🩹 [LEGACY] PATCH: UI-System PRIMARY (v1.2) — 2026-02-25

**Authority Level Override:** `PRIMARY` for Domain: **UI-System**

When Design Tokens is activated as UI-System PRIMARY:
- Its tokens (spacing, colors, radius, typography) and component specs are the **authoritative source** for all UI decisions in the task.
- Other UI resources (Design System Framework, Design Search Toolkit, Design-Elements) may be activated as SUPPORT or consulted as reference-only, but their suggestions must be **compatible with** the tokens defined here.
- If another UI resource's recommendation conflicts with a Design Token, the Design Token wins unless the user explicitly overrides.

---

## 🚦 Decision Gate (v3) — 2026-02-28

### Required Inputs
- Design direction choice
- Color temperature (warm, cool, neutral, tinted)
- Spacing base (4px or 8px)
- Core color tokens (foreground, secondary, muted, faint, accent)
- Font pairing

### Option Lanes

| Lane | Direction | Color Temp | Best For |
|------|-----------|------------|----------|
| **Compact & Dense** | Tight spacing, monospace fonts, high info density | Cool/Neutral | Dashboards, dev tools, data-heavy UIs |
| **Warm & Approachable** | Generous spacing, rounded corners, soft colors | Warm | Consumer apps, onboarding flows |
| **Refined & Trustworthy** | Serif accents, muted tones, restrained palette | Neutral | Finance, legal, enterprise |
| **Bold & Clear** | Large type, high contrast, minimal decoration | Cool | Marketing, portfolios, statements |
| **Functional & Utilitarian** | System-like, dense, functional over decorative | Neutral | Internal tools, admin panels |

### Selection Criteria
- **Product type:** Consumer → Warm; Enterprise → Refined; Data → Compact
- **Information density:** High → Compact or Functional; Low → Warm or Bold
- **Brand tone:** Playful → Warm; Professional → Refined; Technical → Compact

### Outputs After Selection
- Locked design direction
- Locked color temperature
- Spacing scale (derived from base)
- Core color tokens with HSL values
- Font pair with web-safe URLs
- Border radius token
- Anti-patterns for chosen direction
- Acceptance criteria (3–5 checks)
