# 🚀 Start Menu

> **Pick a template, paste it, start building.** Each template boots EPCC in EXPLORE with exactly 2 active resources (1 PRIMARY + 1 SUPPORT). No plan, no code — just context loading and exploration.
>
> **This file is tool-agnostic.** Works identically in any AI coding environment.

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

## 🩹 SYSTEM PATCH (v3.3) — New Start Templates — 2026-02-28

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
