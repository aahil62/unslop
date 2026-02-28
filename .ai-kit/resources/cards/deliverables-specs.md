# 📐 Deliverables Spec

> **Domain:** Product / Architecture
> **Type:** CHOICE-HEAVY
> **Authority:** SUPPORT
> **Activation:** `APPLY_DELIVERABLES_SPEC`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A structured product spec that defines the complete deliverables surface for a web project before any code is written. Forces scope clarity and prevents scope creep by locking down pages, user flows, performance targets, and SEO structure upfront.

## When to Use

- Starting any multi-page website or web app
- Product scope is unclear or evolving
- User hasn't specified sitemap, journey flows, or performance expectations
- Task requires more than a single component or page

## Outputs

| Artifact | Description |
|----------|-------------|
| **Sitemap** | Flat list of all routes with page type (static/dynamic) |
| **User Journeys (3)** | Visit → Engage → Convert flow, with entry/exit points |
| **Component Inventory** | Unique components needed per page (no duplicates) |
| **Performance Budgets** | LCP, CLS, FID/INP targets per page type |
| **SEO Structure** | H1/H2 hierarchy, meta desc template, OG tags per page |
| **API Needs** | Endpoints required (if dynamic); auth model if needed |

## Conflicts / Overlaps

- Overlaps with `content-architecture.md` on page structure — use **this** card for structure, content-architecture for **copy**.
- Overlaps with `component-logic-spec.md` — use **this** for inventory, component-logic for **state/behavior**.
- If both PRIMARY and another SUPPORT are active, this becomes **REF-ONLY** but its key outputs must still appear in the Decision Report.

## Rules

1. Never skip sitemap — even a 1-page landing needs a route definition.
2. User journeys must have measurable conversion points (CTA, signup, purchase).
3. Component inventory must deduplicate — no listing "Button" 15 times.
4. Performance budgets must be explicit numbers, not "fast" or "good."
5. SEO structure must define unique H1 per page — no duplicate H1s across routes.
6. API needs must specify auth model (session/JWT/none) if any route is dynamic.
7. If project is static-only, mark API needs as "N/A — static site" explicitly.
8. Lock all outputs into DECISIONS-LOCKED.md before PLAN.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Project description (from user)
- Target audience (if known)
- Existing constraints (tech stack, timeline, budget)

### Option Lanes

| Lane | Scope Depth | Dynamic/Static | SEO Priority | Perf Strictness |
|------|-------------|----------------|--------------|-----------------|
| **A) MVP Lite** | Small (1–3 pages) | Static | Low | Relaxed (LCP < 4s) |
| **B) Standard Product** | Medium (4–8 pages) | Mixed | Medium | Standard (LCP < 2.5s) |
| **C) Full Platform** | Large (9+ pages) | Dynamic | High | Strict (LCP < 1.5s, CLS < 0.05) |

### Selection Criteria
- **A** if proof-of-concept, personal project, or time-boxed MVP
- **B** if standard SaaS landing + app, typical startup
- **C** if marketplace, content platform, or SEO-critical product

### Outputs After Selection
- Locked lane (A/B/C) with rationale
- Filled sitemap, journeys, component inventory, perf budgets, SEO structure
- Written to DECISIONS-LOCKED.md under "Deliverables Spec"
