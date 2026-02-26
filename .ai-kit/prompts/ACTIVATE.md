# Activation Phrases

> Type any of these exact phrases to load and apply the corresponding resource during your current task.
>
> **This file is tool-agnostic.** Works identically in any AI coding environment.

---

## PRIMARY Resources

### UI-System-Specs (UI-System)
```
Apply UI System Specs to this project.
```
**Effect:** Establishes design specs (spacing, colors, radius, typography) with documented rationale and component specs.

---

### UI-Polish-Checklist (UI-Polish)
```
Apply UI Polish Checklist to this component.
```
**Effect:** Activates component-level refinement: visual hierarchy, micro-animations, depth, CTA polish, and state completeness checks.

---

### Landing-Patterns (Landing)
```
Use Landing Patterns for this page build.
```
**Effect:** Activates section-ordered landing page methodology with hero patterns, scroll animations, social proof placement, and conversion optimization.

---

### Dashboard-IA (Dashboard)
```
Use Dashboard IA for this layout.
```
**Effect:** Activates dashboard information architecture: KPI cards, layout grids, chart placement, filter systems, and responsive behavior.

---

### Reliability-Patterns (Reliability)
```
Apply Reliability Patterns for this feature.
```
**Effect:** Loads error handling patterns: custom exceptions, Result types, retry with backoff, circuit breakers, graceful degradation.

---

### Debugging-Protocol (Debugging)
```
Activate Debugging Protocol for this error.
```
**Effect:** Launches structured debugging: predictions, code inspection, scratchpad reasoning, elimination, root-cause analysis, verified fix.

---

## Canonical Combos (2 Active)

Each combo activates exactly 2 resources. A third may be consulted as REF-ONLY.

### a) Dashboard Feature
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Dashboard-IA | Dashboard |
| **SUPPORT** | UI-System-Specs | UI-System |
| REF-ONLY | UI-Polish-Checklist | UI-Polish |

### b) Landing Page
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Landing-Patterns | Landing |
| **SUPPORT** | UI-System-Specs | UI-System |
| REF-ONLY | UI-Polish-Checklist | UI-Polish |

### c) UI Polish Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | UI-System-Specs | UI-System |
| **SUPPORT** | UI-Polish-Checklist | UI-Polish |

### d) Reliability Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Reliability-Patterns | Reliability |
| **SUPPORT** | Debugging-Protocol | Debugging |

### e) Debug Session
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Debugging-Protocol | Debugging |
| **SUPPORT** | Reliability-Patterns | Reliability |

---

## Governor Mode Commands

### Show Active Resources
```
SHOW_ACTIVE_RESOURCES
```
**Effect:** Prints the canonical banner showing all active resources and current workflow state.

### Canonical Banner Format
Every response must begin with this exact block:

```
┌──────────────────────────────────────────┐
│ PRIMARY:  [name] (Domain)                │
│ SUPPORT:  [name] (Domain)                │
│ ENGINE:   EPCC                           │
│ STEP:     [EXPLORE / PLAN / CODE / VERIFY / AUDIT] │
│ PHASE:    [sub-phase or "—"]             │
│ SCOPE:    [file list or "—"]             │
│ REF-ONLY: [other consulted names or "—"] │
└──────────────────────────────────────────┘
```

All seven lines are mandatory. Field definitions:
- **PRIMARY / SUPPORT:** The 2 active resources (or "—" if none).
- **ENGINE:** Always EPCC. Never changes.
- **STEP:** Current phase within EPCC.
- **PHASE:** Only populated when PRIMARY is a workflow protocol that adds sub-phases. Otherwise "—".
- **SCOPE:** Files listed in PLAN that may be modified. Empty until PLAN is approved.
- **REF-ONLY:** Names of resources loaded as reference-only.

---

### Recommend Resources
```
START_RECOMMEND
```
**Effect:** Analyzes the current task context and recommends one template from START.md with rationale. Waits for user confirmation before activating.

---

## Overload Refusal Protocol

If the user activates 3 or more resources in a single request:
1. **Do not comply.** Do not load any of them.
2. Print: `⚠️ Resource overload — max 2 ACTIVE (1 PRIMARY + 1 SUPPORT). Please choose 1 PRIMARY + 1 SUPPORT, and the rest will be REF-ONLY.`
3. Show a table of requested resources with Domain and suggested Role.
4. Wait for the user's selection before proceeding.
5. After selection, activate exactly 2 and mark the rest REF-ONLY.

---

## Design Resource Artifact Requirements

When a design resource is activated (UI-System-Specs, UI-Polish-Checklist, Dashboard-IA, Landing-Patterns), it must produce concrete artifacts before coding begins:

| Required Artifact | Format | Example |
|-------------------|--------|---------|
| **Design Specs** | CSS custom properties or JSON | `--color-primary: hsl(220, 90%, 56%);` |
| **Theme Config** | Object or file | `{ radius: '8px', spacing: [4,8,16,24,32] }` |
| **Component Variants** | Markdown table or code | Button: primary, secondary, ghost, destructive |
| **Motion Rules** | Duration + easing specs | `transition: 200ms ease-out; enter: fadeIn 300ms` |

If a design resource is activated but no artifacts are produced before entering CODE phase, the agent must stop and generate them first.
