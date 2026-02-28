# 🎨 UI Inspiration → Lane Selection

> **Domain:** UI-Genre / Aesthetic
> **Type:** CHOICE-HEAVY
> **Authority:** PRIMARY (for UI-lane selection tasks)
> **Activation:** `RUN_INSPIRATION_TO_LANE`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A structured process that converts vague aesthetic preferences ("I want it to look premium") into a locked UI lane with concrete acceptance criteria, tokens, and a do/don't list. This is the bridge between inspiration and implementation.

## When to Use

- Starting any UI-heavy build where aesthetic direction is not locked
- User says "make it look like X" or "premium feel" without specifics
- Gate D (UI Genre) has not yet been resolved
- Pairing with `anti-ai-slop-details.md` for polish after lane lock

## Outputs

| Artifact | Description |
|----------|-------------|
| **Inspiration Refs (2–3)** | Named reference sites/apps with specific elements to emulate |
| **Lane Selection** | Locked lane name from the options below |
| **"Why It Works" Analysis** | 3–5 bullet points analyzing what makes the chosen refs effective |
| **Do / Don't List** | 5 do's, 5 don'ts — concrete, measurable, implementable |
| **Lane Acceptance Criteria** | Checklist of 5–8 items that must be true for the UI to pass lane review |
| **Asset Pipeline Flag** | YES/NO — does this lane require `landing-bg-asset-pipeline.md`? |

## Conflicts / Overlaps

- Directly feeds into Gate D (UI Genre) and Gate E (Design System).
- Must run BEFORE design token selection — lane dictates token ranges.
- Overlaps with `Interface Design System` resource on tokens — **this** card picks the lane, **IDS** defines the token values.

## Rules

1. Never guess the lane. Always present options and ask.
2. Inspiration refs must be real, named sites/apps — not generic descriptions.
3. "Why it works" must cite specific design principles (whitespace, typography ratio, color restraint).
4. Do/don't list must be implementable CSS/design decisions, not vibes ("do: use 80%+ whitespace ratio").
5. Acceptance criteria must be verifiable by visual inspection or measurement.
6. If user provides references, extract lane from them — don't override with your preferences.
7. If lane requires custom/illustrated backgrounds → set asset pipeline flag to YES.
8. If lane is minimal/data-dense → set asset pipeline flag to NO and REFUSE landing-bg-asset-pipeline activation.
9. Lane lock is persistent — changing lane mid-task requires re-running Gate D.
10. Write lane + acceptance criteria to DECISIONS-LOCKED.md.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Project type (landing page, dashboard, app, docs site)
- User references or mood words (if any)
- Target audience

### Option Lanes

| Lane | Aesthetic | Signature Elements | Best For |
|------|-----------|-------------------|----------|
| **A) Linear / Vercel Minimal** | Clean, monochrome, obsessive whitespace | System font, 1 accent color, no gradients, sharp corners or subtle radius | Dev tools, API products, B2B SaaS |
| **B) Glass / Aurora** | Luminous, layered, depth-rich | Frosted glass panels, aurora gradient BGs, backdrop-blur, glow accents | Consumer apps, AI/ML products, creative tools |
| **C) Soft Airy** | Light, breathable, rounded | Pastel palette, generous padding, soft shadows, rounded-xl corners | Wellness, education, family, lifestyle |
| **D) Data-Dense Utilitarian** | Information-first, compact, functional | Small type, tight grid, minimal decoration, monospace accents | Dashboards, analytics, financial tools |
| **E) Bold Editorial** | High-contrast, type-forward, magazine-like | Oversized headlines, dramatic whitespace, editorial grid, B&W + 1 accent | Media, agencies, portfolios, editorial brands |

### Selection Criteria
- If user provides refs → extract best-match lane and confirm
- If user provides mood words → map to 2–3 candidate lanes and ask
- If no input → present all 5 with 1-sentence examples and ask
- If project is a dashboard → default suggestion is D, confirm before locking

### Asset Pipeline Check
After lane selection:
- If lane == B (Glass/Aurora) AND project has full-bleed hero → flag asset pipeline as **maybe needed**
- If lane == any with custom illustrations or photographic BGs → flag as **YES**
- Otherwise → flag as **NO** and block `landing-bg-asset-pipeline.md` activation

### Outputs After Selection
- Locked lane (A/B/C/D/E) with rationale
- Inspiration refs (2–3 named sites)
- Do/don't list (10 items)
- Acceptance criteria (5–8 items)
- Asset pipeline flag (YES/NO/MAYBE)
- Written to DECISIONS-LOCKED.md under "UI Lane"
