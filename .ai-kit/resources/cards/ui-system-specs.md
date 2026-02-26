# Resource Card: UI System Specs

> **Domain:** UI-System
> **Authority:** PRIMARY

---

## What It Is
A design-spec-first methodology for establishing consistent UI foundations. Defines spacing scales, color variables, typography pairings, border radii, and component specs — all documented with rationale so decisions persist across sessions.

## When to Use
- Starting a new project and need a design foundation before building components
- Existing UI feels inconsistent — spacing, colors, or typography vary across pages
- Onboarding a new team member who needs to understand design decisions

## Outputs
- **Design specs file** — CSS custom properties or JSON spec set (spacing, color, radius, typography)
- **Theme configuration** — Light/dark mode variables with contrast-checked values
- **Component spec sheet** — Button, card, input specs with exact padding, radius, font, height
- **Decision log** — Table of design decisions with rationale and date

## Activation Phrase
```
Apply UI System Specs to this project.
```

## Conflicts / Overlaps
- **Overlaps with** UI-Polish-Checklist — Specs defines the *foundation*; Polish refines *components* built on it. Use Specs first, then Polish.
- **Do not combine as co-PRIMARY with** another UI-System resource — one spec authority per task.

## Extracted Rules

### 1. Specs Before Components
Define all design specs (spacing, color, radius, typography) before writing any component code. Components reference specs, never raw values.

### 2. Spacing Scale Is Sacred
Pick a base unit (4px or 8px) and derive all spacing: `[4, 8, 12, 16, 24, 32, 48, 64]`. No arbitrary pixel values.

### 3. Five Core Color Variables
Define at minimum: `--foreground`, `--secondary`, `--muted`, `--faint`, `--accent`. Every element references these, never hex literals.

### 4. Typography Requires Pairing
Always pair a heading font with a body font. Define sizes using a modular scale (1.25 or 1.333 ratio). Include line-height for each size.

### 5. Document Every Decision
Maintain a decisions table: Decision | Rationale | Date. This prevents future drift and enables async collaboration.

### 6. Dark Mode From Day One
Design both light and dark palettes using CSS custom properties from the start. Check WCAG AA contrast in both modes before shipping.

### 7. Component Specs Are Contracts
Each component variant (button sizes, card types, input states) gets an explicit spec: height, padding, font-size, border-radius. No implicit defaults.
