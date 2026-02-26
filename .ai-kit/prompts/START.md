# Start Menu

> **Pick a template, paste it, start building.** Each template boots EPCC in EXPLORE with exactly 2 active resources (1 PRIMARY + 1 SUPPORT). No plan, no code — just context loading and exploration.
>
> **This file is tool-agnostic.** Works identically in any AI coding environment.

---

## How to Use

1. Copy the prompt block from the template that matches your task.
2. Paste it into the agent chat.
3. The agent will read `AGENTS.md` + `RESOURCE-INDEX.md`, activate the 2 resources, print `SHOW_ACTIVE_RESOURCES`, and begin EXPLORE.

---

## A) Dashboard Feature

> **Use when:** Building a dashboard, admin panel, or analytics view.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Dashboard-IA (Dashboard)
  SUPPORT: UI-System-Specs (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## B) Landing Page

> **Use when:** Building a premium, animated landing page or product showcase.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Landing-Patterns (Landing)
  SUPPORT: UI-System-Specs (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## C) UI Polish

> **Use when:** Refining existing UI to premium quality — specs, components, animations.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: UI-System-Specs (UI-System)
  SUPPORT: UI-Polish-Checklist (UI-Polish)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## D) Reliability Pass

> **Use when:** Hardening error handling, adding resilience patterns, improving robustness.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Reliability-Patterns (Reliability)
  SUPPORT: Debugging-Protocol (Debugging)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## E) Debug

> **Use when:** Hunting a persistent or multi-file bug that resists quick fixes.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Debugging-Protocol (Debugging)
  SUPPORT: Reliability-Patterns (Reliability)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## F) Dashboard + Polish

> **Use when:** Building a new dashboard AND want refined UI quality from the start.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Dashboard-IA (Dashboard)
  SUPPORT: UI-Polish-Checklist (UI-Polish)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## G) Landing + Polish

> **Use when:** Building a landing page with extra attention to component-level refinement.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Landing-Patterns (Landing)
  SUPPORT: UI-Polish-Checklist (UI-Polish)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## H) Reliability + Debug

> **Use when:** Comprehensive reliability audit — find bugs AND harden the codebase.

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Reliability-Patterns (Reliability)
  SUPPORT: Debugging-Protocol (Debugging)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

---

## Quick Reference

| ID | Name | PRIMARY | SUPPORT |
|----|------|---------|---------|
| A | Dashboard Feature | Dashboard-IA | UI-System-Specs |
| B | Landing Page | Landing-Patterns | UI-System-Specs |
| C | UI Polish | UI-System-Specs | UI-Polish-Checklist |
| D | Reliability Pass | Reliability-Patterns | Debugging-Protocol |
| E | Debug | Debugging-Protocol | Reliability-Patterns |
| F | Dashboard + Polish | Dashboard-IA | UI-Polish-Checklist |
| G | Landing + Polish | Landing-Patterns | UI-Polish-Checklist |
| H | Reliability + Debug | Reliability-Patterns | Debugging-Protocol |

> **Rule:** Max 2 ACTIVE resources per task (1 PRIMARY + 1 SUPPORT). All other resources are REF-ONLY. Do not invent custom starts — pick the closest template.
