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

### Example Resource Entries

Below are **example** entries showing the format. Replace or extend these with your own resources.

---

## 1. `<your-workflow-resource>`

- **What it is:** A foundational operating rulebook that defines how the agent should behave—covering coding style, verification loops, scope control, and success criteria.
- **When to use it:**
  - At the start of every new project to establish guardrails
  - When enforcing coding standards
  - When defining quick commands
- **What it produces:** A behavioral contract, verification checklists, quick command definitions
- **Activation phrase:** `"Load <your-workflow-resource> and enforce them for this session."`
- **Conflicts / overlaps:** Overlaps with methodology resources on project setup; this file is the *rule set*, methodology is the *guide*. Use both together.
- **Authority level:** `PRIMARY`

---

## 2. `<your-ui-resource>`

- **What it is:** A tactical prompt library of 15+ design refinement prompts covering hero sections, CTAs, navigation, cards, typography, animations, pricing, testimonials, and section transitions.
- **When to use it:**
  - When polishing any UI component to premium quality
  - When a feature is functional but lacks visual impact
  - When doing final design passes on landing pages or interactive elements
- **What it produces:** Refined UI components with depth, animation, hierarchy, and premium feel
- **Activation phrase:** `"Apply <your-ui-resource> polish to this component."`
- **Conflicts / overlaps:** Overlaps with landing page resources on visual quality; this is *component-level* polish, landing resources are *full-page* systems.
- **Authority level:** `SUPPORT`

---

## 3. `<your-methodology-resource>`

- **What it is:** A comprehensive agentic coding guide covering the EPCC workflow (Explore → Plan → Code → Commit), context engineering, multi-agent delegation, and parallel development strategies.
- **When to use it:**
  - When optimizing agentic coding workflow
  - When setting up project brain files, custom commands, or hooks
  - When doing advanced work: multi-agent delegation, parallel branches, external tool integrations
- **What it produces:** Project brain configurations, custom commands, workflow patterns
- **Activation phrase:** `"Apply <your-methodology-resource> EPCC workflow for this task."`
- **Conflicts / overlaps:** Overlaps with workflow resources on behavioral rules; methodology provides the *how*, rules provide the *what*.
- **Authority level:** `PRIMARY`

---

> **Add more resources below following the same format. Number them sequentially.**

---

## Quick Reference Table

| # | Resource | Authority | Best For |
|---|----------|-----------|----------|
| 1 | `<your-workflow-resource>` | `PRIMARY` | Session rules, coding standards, verification |
| 2 | `<your-ui-resource>` | `SUPPORT` | Component-level visual polish |
| 3 | `<your-methodology-resource>` | `PRIMARY` | Agentic workflow, EPCC, advanced techniques |
| … | *Add your own* | — | — |

---

## 🎯 Which 2 to Activate

Each scenario activates **exactly 2** resources (1 PRIMARY + 1 SUPPORT). A third is loaded as REF-ONLY.

> **Add your own scenario tables here following this format:**

| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | `<your-primary-resource>` | `<domain>` |
| **SUPPORT** | `<your-support-resource>` | `<domain>` |
| REF-ONLY | `<your-reference-resource>` | `<domain>` |

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

## 🩹 SYSTEM PATCH — 2026-02-25

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

## 🩹 SYSTEM PATCH (v1.1) — 2026-02-25

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

## 🩹 PATCH (v1.2) — 2026-02-25

### UI Domain Ownership

**UI-System PRIMARY = Design Tokens.** Token-level authority (spacing, colors, radius, typography, component specs). When activated, its tokens override other UI suggestions unless explicitly marked compatible.

**UI-Polish PRIMARY = Design-Elements.** Component-level refinement authority (hero polish, CTA depth, animation, section transitions). Operates downstream of tokens — it polishes what UI-System defines.

**Design Search Toolkit** remains `SUPPORT` / reference-only. It provides data-driven search across styles, palettes, and fonts but does not set authoritative tokens.

---

## 🩹 SYSTEM PATCH (v1.3) — 2026-02-25

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

## 🩹 SYSTEM PATCH (v3) — 2026-02-28

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

## 🩹 SYSTEM PATCH (v3.1) — External Skills Library — 2026-02-28

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

## 🩹 SYSTEM PATCH (v3.3) — New Resource Cards — 2026-02-28

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
