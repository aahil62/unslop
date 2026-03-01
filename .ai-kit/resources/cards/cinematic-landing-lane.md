# Cinematic Landing Lane

## What It Is

An opinionated, preset-driven landing page builder that produces high-fidelity "cinematic" single-page sites with GSAP scroll animations, interactive feature cards, and a full design-token system. Ships four aesthetic presets (A–D), a fixed component architecture (Navbar → Hero → Features → Philosophy → Protocol → Pricing → Footer), and strict motion/interaction rules.

## When to Use

- User explicitly requests a **cinematic** or **preset-driven** landing page.
- User says: `"Use the cinematic landing lane"` or activates Template K.
- **Never auto-selected** — must be chosen by the user or via Template K.

## Outputs

- Complete single-page landing site (React + Tailwind + GSAP)
- Design tokens derived from selected preset (palette, typography, image mood)
- Seven fully animated component sections (A–G in source)
- Noise overlay, magnetic buttons, GSAP ScrollTrigger stacking cards

## Activation Phrase

`"Activate cinematic-landing-lane as PRIMARY."`

## Conflicts

- **Only one landing lane may be PRIMARY at a time.** If `cinematic-landing-lane` is PRIMARY, the standard `Landing-Page-System` and `UI Inspiration → Lane` become REF-ONLY (and vice versa).
- Compatible as REF-ONLY alongside any other landing PRIMARY when the user wants to reference its presets or component patterns.
- Respects max-2 active resources (1 PRIMARY + 1 SUPPORT).

---

## 🚦 Decision Gate (v3.5)

Before PLAN or CODE, the following inputs **must** be resolved:

| # | Required Input | How |
|---|------|-----|
| 1 | **Preset selection (A–D)** | Present all four presets (Organic Tech, Midnight Luxe, Brutalist Signal, Vapor Clinic) with palette + identity summaries from source. User picks one. |
| 2 | **Stack confirmation** | Confirm: React 19 + Tailwind v3.4 + GSAP 3 + Lucide React. User may override. |
| 3 | **Motion level** | High is source default. User may downgrade to Med or Low. |
| 4 | **`prefers-reduced-motion` stance** | Options: disable all / fade-only fallback / keep subtle. |
| 5 | **Acceptance criteria (3–5 checks)** | Derived from selected preset. Example: ① noise overlay visible ② hero line pattern matches preset ③ feature cards interactive ④ stacking cards pin on scroll ⑤ footer status indicator pulses. |

All locked answers are written to `DECISIONS-LOCKED.md`. Agent **must not** proceed to PLAN/CODE until the Decision Report exists.

---

## Source Map

Canonical source: [`cinematic-landing-lane-source.md`](../reference/cinematic-landing-lane-source.md)

| Source Section | Status |
|----------------|--------|
| Role | Reference-only in source |
| Agent Flow — MUST FOLLOW | Enforced via gates/outputs (adapted to EPCC; original 4-question flow replaced by Decision Gate above) |
| Aesthetic Presets (A–D) | Enforced via gates/outputs (preset selection is a required gate input) |
| Fixed Design System (Visual Texture, Micro-Interactions, Animation Lifecycle) | Enforced via gates/outputs (acceptance criteria must cover these) |
| Component Architecture (Navbar, Hero, Features, Philosophy, Protocol, Pricing, Footer) | Enforced via gates/outputs (all seven sections required in output) |
| Technical Requirements (Stack, Fonts, Images, File Structure, Responsive) | Enforced via gates/outputs (stack confirmation gate) |
| Build Sequence | Reference-only in source (EPCC workflow governs execution order) |
