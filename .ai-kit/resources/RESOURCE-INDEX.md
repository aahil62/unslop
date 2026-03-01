# 📚 Resource Index

> **Last updated:** 2026-02-28
> Auto-generated template. Add your own resources below using the structure provided.
>
> **This index is tool-agnostic.** It works identically whether loaded by Claude Code, Cursor, Codex, OpenCode, Windsurf, or any other AI coding agent. The principles are universal; only the execution environment changes.

---

## How to Add Resources

Each resource entry follows this structure:

```markdown
## N. <Resource Name>

- **What it is:** <one-sentence description>
- **When to use it:** <2–3 bullet points>
- **What it produces:** <outputs>
- **Activation phrase:** `"<exact activation phrase>"`
- **Conflicts / overlaps:** <relationship to other resources>
- **Authority level:** `PRIMARY` | `SUPPORT` | `EMERGENCY` | `INSPIRATION`
```

## Shipped Resource Cards

> These cards ship with the minimal kit in `resources/cards/`. Each one is a self-contained constraint + output spec.

### 1. UI Inspiration → Lane

- **What it is:** Maps reference sites or aesthetic preferences to a locked UI lane with acceptance criteria.
- **When to use it:** Any UI task where the visual direction is not yet decided.
- **What it produces:** Lane lock, acceptance criteria, do/don't list, asset pipeline flag.
- **Activation phrase:** `"Run UI Inspiration → Lane to lock the visual direction."`
- **Conflicts / overlaps:** If this is PRIMARY for lane selection, cinematic-landing-lane becomes REF-ONLY (and vice versa).
- **Authority level:** `PRIMARY`
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/ui-inspiration-to-lane.md`

---

### 2. Content Architecture

- **What it is:** Generates page copy, headlines, FAQ, and content structure from voice, goal, and audience inputs.
- **When to use it:** Landing pages, marketing sites, or any page with significant text content.
- **What it produces:** Per-page hero copy, feature blocks, testimonials, FAQ, footer, H1/H2 tags.
- **Activation phrase:** `"Activate Content Architecture as SUPPORT."` or `GENERATE_PAGE_COPY`
- **Conflicts / overlaps:** Compatible with any landing/UI PRIMARY.
- **Authority level:** `SUPPORT`
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/content-architecture.md`

---

### 3. Deliverables Spec

- **What it is:** Defines scope, sitemap, user journeys, component inventory, and performance budgets.
- **When to use it:** Multi-page product builds, SaaS, or anything needing scope definition before design.
- **What it produces:** Sitemap, 3 user journeys, component inventory, perf budgets, SEO structure.
- **Activation phrase:** `"Activate Deliverables Spec as PRIMARY."` or `APPLY_DELIVERABLES_SPEC`
- **Conflicts / overlaps:** Compatible with any SUPPORT resource.
- **Authority level:** `SUPPORT` (or PRIMARY for scope-first tasks)
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/deliverables-specs.md`

---

### 4. Anti-AI-Slop Details

- **What it is:** Polish intensity controller — generates a checklist of 15–20 anti-pattern items for UI quality.
- **When to use it:** After lane + tokens are locked, before final polish pass.
- **What it produces:** Polish checklist, numbers sheet, anti-pattern list.
- **Activation phrase:** `"Run Anti-AI-Slop polish."` or `RUN_ANTI_SLOP_POLISH`
- **Conflicts / overlaps:** Requires lane to be locked first. Compatible with any PRIMARY.
- **Authority level:** `SUPPORT`
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/anti-ai-slop-details.md`

---

### 5. Component Logic Spec

- **What it is:** Generates state machines, data flow specs, and edge case lists for complex UI components.
- **When to use it:** Filters, search, tables, wizards, forms — any component with non-trivial state.
- **What it produces:** State machine (text), data flow, error/loading/empty specs, edge cases, React structure.
- **Activation phrase:** `"Spec this component's logic."` or `SPEC_COMPONENT_LOGIC`
- **Conflicts / overlaps:** Does not occupy a resource slot (produces specs only).
- **Authority level:** `REF-ONLY`
- **Type:** `PROCEDURAL` — Decision Required: YES (light)
- **Card file:** `cards/component-logic-spec.md`

---

### 6. Landing BG Asset Pipeline

- **What it is:** Custom background asset generation for landing pages (illustrated, photographic, or composite).
- **When to use it:** When the locked lane requires a custom BG (asset pipeline flag = YES from Gate D).
- **What it produces:** Background asset specifications and generation workflow.
- **Activation phrase:** `"Activate Landing BG Asset Pipeline as SUPPORT."`
- **Conflicts / overlaps:** Conditional — refuses activation if lane's asset pipeline flag is NO.
- **Authority level:** `SUPPORT` (conditional)
- **Type:** `CHOICE-HEAVY` — Decision Required: YES (conditional)
- **Card file:** `cards/landing-bg-asset-pipeline.md`

---

### 7. Reference Style Extraction

- **What it is:** Extracts design tokens, hover behaviors, and component recipes from reference sites or screenshots.
- **When to use it:** When matching or being inspired by an existing site's visual style.
- **What it produces:** Style spec, hover behavior, token map, component recipes.
- **Activation phrase:** `"Extract styles from this reference."` or `EXTRACT_REFERENCE_STYLE`
- **Conflicts / overlaps:** Does not occupy a resource slot (produces specs only).
- **Authority level:** `REF-ONLY`
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/reference-style-extraction.md`

---

### 8. Cinematic Landing Lane

- **What it is:** Preset-driven cinematic landing page builder with 4 aesthetic presets (A–D), GSAP animations, and opinionated component architecture.
- **When to use it:** User explicitly requests a cinematic or preset-driven landing page.
- **What it produces:** Complete single-page landing site (React + Tailwind + GSAP), 7 animated component sections.
- **Activation phrase:** `"Activate cinematic-landing-lane as PRIMARY."`
- **Conflicts / overlaps:** Only one landing lane may be PRIMARY at a time. Never auto-selected.
- **Authority level:** `PRIMARY`
- **Type:** `CHOICE-HEAVY` — Decision Required: YES
- **Card file:** `cards/cinematic-landing-lane.md`

---

### 9. Technical Cofounder Contract

- **What it is:** Communication overlay — makes the agent behave like a technical cofounder with check-ins, plain language, and staged delivery.
- **When to use it:** Vague ideas, early discovery, full product builds, non-technical users.
- **What it produces:** Clarified scope, decision checkpoints, plain-language rationale, "what I need from you" list.
- **Activation phrase:** `"Activate technical-cofounder-contract as SUPPORT."` or `COFOUNDER_MODE`
- **Conflicts / overlaps:** Does not override decision gates; complements them. Always SUPPORT, never PRIMARY.
- **Authority level:** `SUPPORT`
- **Type:** `PROCEDURAL` — Decision Required: NO
- **Card file:** `cards/technical-cofounder-contract.md`

---

## Quick Reference Table

| # | Resource | Domain | Type | Authority | Decision Required |
|---|----------|--------|------|-----------|-------------------|
| 1 | UI Inspiration → Lane | UI-Genre | Choice-heavy | PRIMARY | YES |
| 2 | Content Architecture | Content | Choice-heavy | SUPPORT | YES |
| 3 | Deliverables Spec | Product/Arch | Choice-heavy | SUPPORT | YES |
| 4 | Anti-AI-Slop Details | UI-Polish | Choice-heavy | SUPPORT | YES |
| 5 | Component Logic Spec | UI+Logic | Procedural | REF-ONLY | YES (light) |
| 6 | Landing BG Asset Pipeline | Landing | Choice-heavy | SUPPORT | YES (conditional) |
| 7 | Reference Style Extraction | UI-System | Choice-heavy | REF-ONLY | YES |
| 8 | Cinematic Landing Lane | Landing/Motion | Choice-heavy | PRIMARY | YES |
| 9 | Technical Cofounder Contract | Product/Collaboration | Procedural | SUPPORT | NO |

---

## 🎯 Which 2 to Activate

Each scenario activates **exactly 2** resources (1 PRIMARY + 1 SUPPORT). Others are REF-ONLY.

> Scenarios using shipped cards:

| Scenario | PRIMARY | SUPPORT | REF-ONLY |
|----------|---------|---------|----------|
| Landing page (visual direction TBD) | UI Inspiration → Lane | Content Architecture | Anti-AI-Slop Details |
| Cinematic landing page | Cinematic Landing Lane | Content Architecture | — |
| Landing with custom BG | UI Inspiration → Lane | Landing BG Asset Pipeline | Content Architecture |
| Product build (scope-first) | Deliverables Spec | Technical Cofounder Contract | Component Logic Spec |
| Vague idea → V1 | Deliverables Spec | Technical Cofounder Contract | — |
| UI polish pass | Anti-AI-Slop Details | Reference Style Extraction | — |

> For dashboard, debugging, reliability, and other domains: add your own resource cards or use the external example cards in `resources/external/cards/`.

---

## 🌐 External Resources (Modular)

> Full registry: [EXTERNAL-RESOURCE-REGISTRY.md](external/EXTERNAL-RESOURCE-REGISTRY.md)
> *(Portable kit — all paths relative to `.ai-kit/resources/`)*

### Your External Resources

| Resource | Domain | Authority | Card |
|----------|--------|-----------|------|
| `<your-external-resource-1>` | `<domain>` | `PRIMARY` | [Card](external/cards/<your-card>.md) |
| `<your-external-resource-2>` | `<domain>` | `SUPPORT` | [Card](external/cards/<your-card>.md) |

> **Note:** This kit ships with example external cards in `external/cards/`. Replace them with your own or add new ones.

---

## 🩹 [LEGACY] SYSTEM PATCH — 2026-02-25

### Quality Gates (Replaces Numeric Claims)

Resource quality is measured by **pass/fail gates**, not palette counts or price ranges. Every deliverable produced by these resources must clear the applicable gates below.

#### Gate 1: Accessibility (a11y)
- [ ] WCAG AA contrast on all text (4.5:1 body, 3:1 large)
- [ ] All interactive elements keyboard-reachable
- [ ] `aria-label` or visible label on every control
- [ ] `prefers-reduced-motion` respected for animations
- [ ] No information conveyed by color alone

#### Gate 2: Responsiveness
- [ ] Renders correctly at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Typography scales proportionally (clamp or fluid)

#### Gate 3: States
- [ ] Every data-touching component has: loading, empty, error, success states
- [ ] Error states show actionable user-facing messages
- [ ] Loading states use skeletons or spinners (not blank screens)

#### Gate 4: Performance
- [ ] No layout shifts (CLS < 0.1)
- [ ] Largest Contentful Paint < 2.5s
- [ ] No unnecessary re-renders (React: memo/useMemo where needed)
- [ ] Images lazy-loaded below the fold

#### Gate 5: Lint / Type / Test
- [ ] Zero lint errors (ESLint or equivalent)
- [ ] Zero TypeScript errors (strict mode)
- [ ] Build completes without warnings
- [ ] Critical paths covered by tests (if test framework present)

### How Gates Apply to Resources

| Resource Domain | Required Gates |
|-----------------|---------------|
| UI System | Gate 1 + Gate 2 + Gate 3 + Gate 4 |
| Workflow | Gate 5 |
| Debugging | Gate 5 |
| Dashboard | Gate 1 + Gate 2 + Gate 3 + Gate 4 + Gate 5 |
| Landing | Gate 1 + Gate 2 + Gate 4 |
| Inspiration | No gates (reference-only) |

---

## 🩹 [LEGACY] SYSTEM PATCH (v1.1) — 2026-02-25

### Domain Tags for Resources

| # | Resource | Domain | Default Authority | Notes |
|---|----------|--------|-------------------|-------|
| 1 | `<your-workflow-resource>` | Workflow | `SUPPORT` | Session guardrails; pairs with any PRIMARY |
| 2 | `<your-prompting-resource>` | Prompting | `PRIMARY` | Structured prompt framework |
| 3 | `<your-methodology-resource>` | Workflow | `PRIMARY` | EPCC methodology + advanced techniques |
| … | *Add your own* | — | — | — |

### Domain Enforcement Rules

1. **One PRIMARY per Domain per task.** If two resources share a Domain and both claim PRIMARY, ask the user which one to keep before proceeding.
2. **Max 2 active resources total** (1 PRIMARY + 1 SUPPORT). All other resources are **reference-only** — they may be consulted for a specific lookup but do NOT influence ongoing decisions.
3. **Conflict resolution:** If the user's request implies multiple PRIMARYs, print the conflicting resources with their Domains and ask the user to choose.

---

## 🩹 [LEGACY] PATCH (v1.2) — 2026-02-25

### UI Domain Ownership

**UI-System PRIMARY = Design Tokens.** Token-level authority (spacing, colors, radius, typography, component specs). When activated, its tokens override other UI suggestions unless explicitly marked compatible.

**UI-Polish PRIMARY = Design-Elements.** Component-level refinement authority (hero polish, CTA depth, animation, section transitions). Operates downstream of tokens — it polishes what UI-System defines.

**Design Search Toolkit** remains `SUPPORT` / reference-only. It provides data-driven search across styles, palettes, and fonts but does not set authoritative tokens.

---

## 🩹 [LEGACY] SYSTEM PATCH (v1.3) — 2026-02-25

### Which 2 to Activate (Canonical v1.3)

Each scenario activates **exactly 2** resources (1 PRIMARY + 1 SUPPORT). A third is loaded as REF-ONLY.

#### Dashboard Feature
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Dashboard-Architecture | Dashboard |
| **SUPPORT** | Design Tokens | UI-System |
| REF-ONLY | Design-Elements | UI-Polish |

#### Landing Page
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Landing-Page-System | Landing |
| **SUPPORT** | Design Tokens | UI-System |
| REF-ONLY | Glassmorphism-Reference | Inspiration |

#### UI Polish Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Design Tokens | UI-System |
| **SUPPORT** | Design-Elements | UI-Polish |
| REF-ONLY | Design-Search-Toolkit | Reference |

#### Reliability Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Error-Handling-Patterns | Reliability |
| **SUPPORT** | `<your-methodology-resource>` | Workflow |
| REF-ONLY | `<your-workflow-resource>` | Reference |

#### Debugging
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Structured Debugger | Debugging |
| **SUPPORT** | Error-Handling-Patterns | Reliability |
| REF-ONLY | `<your-methodology-resource>` | Reference |

#### Ship Readiness
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | `<your-methodology-resource>` | Workflow |
| **SUPPORT** | Design-Elements | UI-Polish |
| REF-ONLY | Dashboard-Architecture OR Landing-Page-System (depending on project type) |

### Domain Authority (Canonical v1.3)
- **UI-System PRIMARY = Design Tokens.** Token-level authority (spacing, colors, radius, typography, component specs).
- **UI-Polish PRIMARY = Design-Elements.** Component-level refinement authority (hero polish, CTA depth, animation, section transitions).
- **Design-Search-Toolkit = SUPPORT / REFERENCE only.** Data-driven style search; never PRIMARY.

### External Resources Table Confirmation
Entry #5 (Design Tokens) in the External Resources table must be read as:
- **Domain:** UI-System
- **Authority:** `PRIMARY`

This is consistent with PATCH (v1.2) and confirmed here for canonical clarity.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3) — 2026-02-28

### Resource Classification Table

> Every resource is classified as **PROCEDURAL** (fixed process, no subjective lanes) or **CHOICE-HEAVY** (multiple aesthetic/schema/architecture lanes the agent could guess wrong on).
> If `Decision Required = YES`, the agent **must** run the matching Decision Gates (see `prompts/DECISION-GATES.md`) **before** PLAN or CODE.

#### Your Resources (Template)

| # | Resource | Type | Domain(s) | Decision Required | Required Inputs |
|---|----------|------|-----------|-------------------|-----------------| 
| 1 | `<your-resource>` | `PROCEDURAL` | `<domain>` | NO | — |
| 2 | `<your-resource>` | `CHOICE-HEAVY` | `<domain>` | YES | `<required inputs>` |
| … | *Add your own* | — | — | — | — |

#### External Resources (Cards)

| # | Resource | Type | Domain(s) | Decision Required | Required Inputs |
|---|----------|------|-----------|-------------------|-----------------| 
| E1 | Phased Build Protocol | `CHOICE-HEAVY` | Backend/Schema, Architecture | YES | Data model, auth model, external integrations, deployment target |
| E2 | Design System Framework | `CHOICE-HEAVY` | UI-Genre/Aesthetic, UI-System | YES | Style lane, color palette, typography pair, animation level, industry type |
| E3 | Agentic-Dev-Workflow | `PROCEDURAL` | Workflow | NO | — |
| E4 | Design Search Toolkit | `CHOICE-HEAVY` | UI-System, UI-Genre/Aesthetic | YES | Product type, style preference, color temperature, target framework |
| E5 | Design Tokens | `CHOICE-HEAVY` | UI-System | YES | Design personality, color temperature, spacing base, core color tokens |
| E6 | Structured Debugger Prompt | `PROCEDURAL` | Debugging | NO | — |
| E7 | Glassmorphism Reference | `CHOICE-HEAVY` | Inspiration, UI-Genre/Aesthetic | YES | Animation pattern choice, component subset, glassmorphism level |

### Decision Gate Mapping

| Domain | Gates Triggered | Choice-Heavy Resources |
|--------|-----------------|----------------------|
| Product | A | — (all tasks) |
| Backend/Schema | A + B | Phased Build Protocol |
| Architecture | A + C | Phased Build Protocol |
| Dashboard | A + D + E | Dashboard-Architecture |
| Landing | A + D + E + F | Landing-Page-System |
| UI-Genre/Aesthetic | D | Design System Framework, Design-Elements, Glassmorphism Reference |
| UI-System | D + E | Design Tokens, Design Search Toolkit |
| UI-Polish | D + E | Design-Elements |
| Workflow | — | — (procedural) |
| Prompting | — | — (procedural) |
| Debugging | — | — (procedural) |
| Reliability | — | — (procedural) |
| Inspiration | — | — (reference-only) |

### Question Budget Rule (v3)

When running Decision Gates, ask questions in **rounds of max 8**. Group by gate, ask only missing inputs, prioritize: Product scope → Backend/Auth/Schema → UI lane/tokens → Architecture → Motion → Verification. If more info is needed after Round 1, wait for answers before asking Round 2.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.1) — External Skills Library — 2026-02-28

### External Skills Library Entry

| # | Resource | Type | Domain(s) | Decision Required | Required Inputs |
|---|----------|------|-----------|-------------------|-----------------| 
| EXT | Community Skills Library | `REFERENCE` | External Skills | YES (Gate H) | Bundle selection, skill allowlist (max 3), risk check |

**Key facts:**
- **Not a resource.** External skills do NOT count toward PRIMARY / SUPPORT slots. They are a separate layer governed by Gate H and `SKILLS-ALLOWLIST.md`.
- **950+ skills** organized into bundles (role-based) and workflows (goal-based). See `resources/external/AWESOME-SKILLS.md`.
- **Risk metadata:** Every skill has `risk: safe | unknown | high` and `source` in `skills_index.json`. SAFE-only by default.
- **Max 3 per task.** Enforced by `SKILLS-ALLOWLIST.md`.
- **REF-ONLY unless allowlisted.** Skills may be read for reference but not invoked unless they appear in the locked allowlist.

### External Skills in Decision Gate Mapping (v3.1)

The following row is appended to the Decision Gate Mapping table:

| Domain | Gates Triggered | Choice-Heavy Resources |
|--------|-----------------|----------------------|
| External Skills | H | Community Skills Library (allowlist required) |

### External Resources Table Update (v3.1)

The following entry is added to the External Resources table (§ 🌐 External Resources):

| Resource | Domain | Authority | Reference |
|----------|--------|-----------|-----------| 
| Community Skills Library | External Skills | `REFERENCE` | [AWESOME-SKILLS.md](external/AWESOME-SKILLS.md) |

This resource is **never PRIMARY or SUPPORT**. It is always reference-only, with invocation governed by Gate H and `SKILLS-ALLOWLIST.md`.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.3) — New Resource Cards — 2026-02-28

### Resource Classification Table (v3.3 Additions)

| # | Resource | Type | Domain | Authority | Decision Required | Required Inputs | Card File |
|---|----------|------|--------|-----------|-------------------|-----------------|----| 
| v3.3-1 | Deliverables Spec | `CHOICE-HEAVY` | Product/Arch | SUPPORT | YES | Scope depth, dynamic/static, SEO, perf | `cards/deliverables-specs.md` |
| v3.3-2 | Content Architecture | `CHOICE-HEAVY` | Content | SUPPORT | YES | Voice, goal, audience, compliance | `cards/content-architecture.md` |
| v3.3-3 | Component Logic Spec | `PROCEDURAL` | UI+Logic | SUPPORT | YES (light) | Complexity, data freshness, update strategy | `cards/component-logic-spec.md` |
| v3.3-4 | UI Inspiration → Lane | `CHOICE-HEAVY` | UI-Genre | PRIMARY | YES | References or lane selection, asset flag | `cards/ui-inspiration-to-lane.md` |
| v3.3-5 | Anti-AI-Slop Details | `CHOICE-HEAVY` | UI-Polish | SUPPORT | YES | Intensity, icon set, motion, a11y | `cards/anti-ai-slop-details.md` |
| v3.3-6 | Reference Style Extraction | `CHOICE-HEAVY` | UI-System | SUPPORT | YES | Reference, fidelity, component scope | `cards/reference-style-extraction.md` |
| v3.3-7 | Landing BG Asset Pipeline | `CHOICE-HEAVY` | Landing | SUPPORT/OPT | YES (conditional) | Lane flag=YES, BG type, constraints | `cards/landing-bg-asset-pipeline.md` |

### Key Rules for v3.3 Cards

- **v3.3-4 (UI Inspiration → Lane)** is the only v3.3 card that can be PRIMARY. All others are SUPPORT or REF-ONLY.
- **v3.3-7 (Landing BG Asset Pipeline)** is conditional — it REFUSES activation if the locked lane's asset pipeline flag is NO.
- **v3.3-3 (Component Logic Spec)** and **v3.3-6 (Reference Style Extraction)** produce specs but don't occupy resource slots when used via their prompt macro commands.
- All CHOICE-HEAVY cards have embedded decision gates (see each card's 🚦 section). These gates are part of Gates D/E/F depending on domain.
- **Max-2 active resources** still applies. If a card can't be SUPPORT, it becomes REF-ONLY but its key outputs still appear in the Decision Report.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.5) — Cinematic Landing Lane — 2026-03-01

### Resource Classification Table (v3.5 Addition)

| # | Resource | Type | Domain(s) | Authority | Decision Required | Required Inputs | Card File |
|---|----------|------|-----------|-----------|-------------------|-----------------|-----------|
| v3.5-1 | Cinematic Landing Lane | `CHOICE-HEAVY` | Landing / UI-System / Motion | PRIMARY | YES | Preset A–D, stack confirmation, motion level, reduced-motion stance, acceptance criteria (3–5) | `cards/cinematic-landing-lane.md` |

### Source Reference File (v3.5)

| File | Location | Purpose |
|------|----------|---------|
| Cinematic Landing Lane Source | `resources/reference/cinematic-landing-lane-source.md` | Canonical source text for cinematic presets, component architecture, and design system rules. Referenced by the adapter card — never modified. |

### Decision Gate Mapping (v3.5 Addition)

| Domain | Gates Triggered | Choice-Heavy Resources |
|--------|-----------------|----------------------|
| Cinematic Landing | D (cinematic preset flow) + F + G | Cinematic Landing Lane |

### Key Rules for v3.5

- **Never auto-selected.** The cinematic landing lane must be explicitly activated by the user (via Template K or activation phrase).
- **Conflicts with other landing PRIMARYs.** Only one landing lane may be PRIMARY at a time. If cinematic-landing-lane is PRIMARY, Landing-Page-System and UI Inspiration → Lane become REF-ONLY.
- **Max-2 active resources** still applies. Recommended pairing: PRIMARY cinematic-landing-lane + SUPPORT content-architecture or ui-system-tokens.

---

## 🩹 [LEGACY] SYSTEM PATCH (v0.1.2) — Technical Cofounder Contract — 2026-03-01

### Resource Classification Table (v0.1.2 Addition)

| # | Resource | Type | Domain(s) | Authority | Decision Required | Required Inputs | Card File |
|---|----------|------|-----------|-----------|-------------------|-----------------|-----------|
| v0.1.2-1 | Technical Cofounder Contract | `PROCEDURAL` | Product / Collaboration | SUPPORT | NO | — | `cards/technical-cofounder-contract.md` |

### Key Rules for v0.1.2

- **Behavior overlay, not a workflow.** Does not add new Decision Gates or replace EPCC.
- **Always SUPPORT.** Never PRIMARY. Compatible with any PRIMARY resource.
- **Modifies communication tone** within existing gates: plain language, decision check-ins, assumption challenging, staged delivery.
- **Max-2 active resources** still applies. Recommended pairing: any task-appropriate PRIMARY + SUPPORT technical-cofounder-contract.

---

## 🔒 CANONICAL (KIT_VERSION v0.2.2)

This file contains legacy patch notes (v1.x, v3.x, SYSTEM PATCH). The authoritative versioning policy is in `../VERSIONING.md`. 
If any older section contradicts this block or the core principles of v0.2.2, treat the older section as deprecated.

**RESOURCE-INDEX.md Invariants:**
- **Max-2 Active:** Exactly 1 PRIMARY + 1 SUPPORT. All others are REF-ONLY.
- **Decision Required:** Choice-Heavy resources mandate Decision Gates before PLAN.
- **Procedural:** Procedural resources do not require gates, but still follow EPCC.
