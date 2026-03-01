# 🚀 Start Menu

> **Pick a template, paste it, start building.** Each template boots EPCC in EXPLORE with exactly 2 active resources (1 PRIMARY + 1 SUPPORT). No plan, no code — just context loading and exploration.
>
> **This file is tool-agnostic.** Works identically in any AI coding environment.
>
> **Authoritative:** `.ai-kit/CANONICAL.md`
> **LEGACY POLICY:** Older patch blocks remain for history, but `.ai-kit/CANONICAL.md` and the latest CANONICAL blocks override them.

---

## How to Use

1. Copy the prompt block from the template that matches your task.
2. Paste it into the agent chat.
3. The agent will read `AGENTS.md` + `RESOURCE-INDEX.md`, activate the 2 resources, print `SHOW_ACTIVE_RESOURCES`, and begin EXPLORE.

---

## A) Universal Boot (Scaffolding)

> **Use when:** Starting a brand-new project or onboarding the agent to an existing codebase.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Project-Template (Scaffolding)
  SUPPORT: Dev-Workflow (Workflow)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## B) Backend-Heavy SaaS

> **Use when:** Building a greenfield SaaS backend with schema-first, phased delivery.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Phased Build Protocol (Workflow)
  SUPPORT: Error-Handling-Patterns (Reliability)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## C) Dashboard Feature

> **Use when:** Building a dashboard, admin panel, or analytics view.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Dashboard-Architecture (Dashboard)
  SUPPORT: Design Tokens (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## D) Landing Page

> **Use when:** Building a premium, animated landing page or product showcase.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Landing-Page-System (Landing)
  SUPPORT: Design Tokens (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## E) UI Polish

> **Use when:** Refining existing UI to premium quality — tokens, components, animations.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Design Tokens (UI-System)
  SUPPORT: Design-Elements (UI-Polish)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## F) Reliability Pass

> **Use when:** Hardening error handling, adding resilience patterns, improving robustness.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Error-Handling-Patterns (Reliability)
  SUPPORT: Dev-Workflow (Workflow)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## G) Debug

> **Use when:** Hunting a persistent or multi-file bug that resists quick fixes.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Structured Debugger (Debugging)
  SUPPORT: Error-Handling-Patterns (Reliability)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## H) Ship-Ready QA

> **Use when:** Final quality pass before shipping — lint, polish, commit.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Dev-Workflow (Workflow)
  SUPPORT: Design-Elements (UI-Polish)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## Quick Reference

| ID | Name | PRIMARY | SUPPORT |
|----|------|---------|---------|
| A | Universal Boot | Project-Template | Dev-Workflow |
| B | Backend-Heavy SaaS | Phased Build Protocol | Error-Handling-Patterns |
| C | Dashboard Feature | Dashboard-Architecture | Design Tokens |
| D | Landing Page | Landing-Page-System | Design Tokens |
| E | UI Polish | Design Tokens | Design-Elements |
| F | Reliability Pass | Error-Handling-Patterns | Dev-Workflow |
| G | Debug | Structured Debugger | Error-Handling-Patterns |
| H | Ship-Ready QA | Dev-Workflow | Design-Elements |

> **Rule:** Max 2 ACTIVE resources per task (1 PRIMARY + 1 SUPPORT). All other resources are REF-ONLY. Do not invent custom starts — pick the closest template.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.1.

## 🩹 [LEGACY] SYSTEM PATCH (v3.3) — New Start Templates — 2026-02-28

## I) Landing (Illustrated BG Lane)

> **Use when:** Building a landing page that requires a custom illustrated or photographic background. Lane must be confirmed as BG-requiring during Gate D.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: UI Inspiration → Lane (cards/ui-inspiration-to-lane.md)
  SUPPORT: Landing BG Asset Pipeline (cards/landing-bg-asset-pipeline.md)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Run Gate D first — if lane chosen does NOT require BG,
REFUSE this template and switch to Template D instead.
```

**Guard:** If Gate D produces asset pipeline flag = NO, this template is invalid. Fall back to Template D (Landing Page) and print: `⚠️ Template I refused — selected lane does not require BG asset pipeline. Using Template D instead.`

---

## J) Landing Copy + Deliverables

> **Use when:** Building a multi-page landing or marketing site where scope and copy must be defined before design.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Deliverables Spec (cards/deliverables-specs.md)
  SUPPORT: Content Architecture (cards/content-architecture.md)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Run APPLY_DELIVERABLES_SPEC to lock scope,
then GENERATE_PAGE_COPY for content. Do not plan or code yet.
```

---

### Quick Reference Update (v3.3)

| ID | Name | PRIMARY | SUPPORT |
|----|------|---------|---------|
| I | Landing (Illustrated BG) | UI Inspiration → Lane | Landing BG Asset Pipeline |
| J | Landing Copy + Deliverables | Deliverables Spec | Content Architecture |

> **Rule:** Templates I and J follow the same max-2 ACTIVE resource rule. Template I has a guard that refuses activation if the lane doesn't require BG assets.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.1.

## 🩹 [LEGACY] SYSTEM PATCH (v3.5) — Cinematic Landing Template — 2026-03-01

## K) Cinematic Landing

> **Use when:** Building a preset-driven, high-fidelity cinematic landing page with GSAP scroll animations and opinionated component architecture. **Must be explicitly selected — never auto-detected.**

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Cinematic Landing Lane (cards/cinematic-landing-lane.md)
  SUPPORT: Content Architecture (cards/content-architecture.md)
  — OR —
  SUPPORT: Design Tokens (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Run decision gates (preset A–D, stack, motion level,
reduced-motion, acceptance criteria). Produce Decision Report.
LOCK_DECISIONS. Then proceed to PLAN.
```

**Guard:** This template is never auto-selected from keywords. The user must explicitly choose Template K or say `"Activate cinematic-landing-lane as PRIMARY."`. If the user just says "landing page" without mentioning cinematic, use Template D instead.

---

### Quick Reference Update (v3.5)

| ID | Name | PRIMARY | SUPPORT |
|----|------|---------|---------|
| K | Cinematic Landing | Cinematic Landing Lane | Content Architecture (or Design Tokens) |

> **Rule:** Template K follows the same max-2 ACTIVE resource rule. Only one landing lane may be PRIMARY at a time — activating K makes Templates D and I REF-ONLY.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.1.

## 🩹 [LEGACY] SYSTEM PATCH (v0.1.2) — Cofounder Mode Template — 2026-03-01

## L) Cofounder Mode (Idea → V1 Build)

> **Use when:** The user has a vague idea, wants a thinking partner, or needs plain-language explanations and decision check-ins throughout a full product build.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: (choose based on task)
    — Deliverables Spec (cards/deliverables-specs.md) for product builds
    — UI Inspiration → Lane (cards/ui-inspiration-to-lane.md) for design-first builds
    — Cinematic Landing Lane (cards/cinematic-landing-lane.md) for cinematic landings
    — Or any other shipped card matching the task domain
  SUPPORT: Technical Cofounder Contract (cards/technical-cofounder-contract.md)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Challenge assumptions, define V1 scope,
then RUN_DECISION_GATES. Do not plan or code yet.
```

**Behavior:** The cofounder contract overlay makes the agent:
- Treat the user as product owner — check in at every decision point
- Explain technical choices in plain language
- Push back on overcomplication
- Break the build into staged deliverables

---

### Quick Reference Update (v0.1.2)

| ID | Name | PRIMARY | SUPPORT |
|----|------|---------|---------|
| L | Cofounder Mode | (task-appropriate card) | Technical Cofounder Contract |

> **Rule:** Template L follows the same max-2 ACTIVE resource rule. PRIMARY is chosen based on task domain. The cofounder contract is always SUPPORT.

---

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.1.

## 🩹 [LEGACY] SYSTEM PATCH (v0.2.1) — START Templates Alignment — 2026-03-01

**Override for Templates A–H:**
Templates A–H are LEGACY/EXTENSION examples and may reference non-shipped cards (e.g., `Project-Template`, `Dashboard-Architecture`, `Design Tokens`).
- If you have these external cards, Templates A–H function as written.
- If you do NOT have them, DO NOT use Templates A–H.
- For minimal kit users: use the shipped-template list in `.ai-kit/CANONICAL.md`.
- Otherwise, pick exactly 1 PRIMARY + 1 SUPPORT from `.ai-kit/resources/RESOURCE-INDEX.md` (see the "Which 2 to Activate" table) and proceed with the EPCC engine.

---

## 🩹 SYSTEM PATCH (v0.2.2) — Minimal Kit Pointer — 2026-03-01
For minimal-kit users, the canonical path is:
- Open `.ai-kit/resources/RESOURCE-INDEX.md` and use **"Which 2 to Activate"** (Canonical) to choose exactly 1 PRIMARY + 1 SUPPORT.
- Then follow EPCC: EXPLORE → RUN_DECISION_GATES (if triggered) → Decision Report → LOCK_DECISIONS → PLAN → CODE → VERIFY → AUDIT.

## 🔒 CANONICAL (KIT_VERSION v2.0.1)

This file contains legacy patch notes (v1.x, v3.x, SYSTEM PATCH). The authoritative versioning policy is in `.ai-kit/VERSIONING.md` and `.ai-kit/CANONICAL.md`. 
If any older section contradicts this block or the core principles of v2.0.1, treat the older section as deprecated.

**START.md Invariants:**
- **Entry Point:** Always use templates from this file to start tasks.
- **Exactly 2:** Every template boots with exactly 1 PRIMARY + 1 SUPPORT.
- **No Planning:** START templates exist to load context and begin EXPLORE. Do not plan or code yet.
