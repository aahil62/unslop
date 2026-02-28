# 🎯 Activation Phrases

> Type any of these exact phrases to force the agent to load and apply the corresponding resource during your current task.
>
> **These phrases are tool-agnostic.** They work identically in any AI coding environment—terminal, IDE, chat, or API. The agent reads the phrase, loads the resource, and applies the patterns.

---

## PRIMARY Resources

### Session-Rules
```
Load Session Rules and enforce them for this session.
```
**Effect:** Establishes coding standards, verification loop, quick commands, and behavioral guardrails.

---

### Scaffold-Builder (Scaffold Framework)
```
Use the Scaffold framework from Scaffold-Builder to structure this build.
```
**Effect:** Activates Context → Location → End Goal → Approach → Restrictions prompting pattern for full app builds.

---

### Dev-Workflow (EPCC Workflow)
```
Apply Dev-Workflow EPCC workflow for this task.
```
**Effect:** Activates Explore → Plan → Code → Commit workflow with context engineering, multi-agent delegation, and advanced debugging.

---

### Project-Template
```
Generate a Project-Template context file for this codebase.
```
**Effect:** Creates a structured project brain file with overview, tech stack, file structure, conventions, and current task context.

---

## SUPPORT Resources

### Dashboard-Architecture
```
Use Dashboard-Architecture patterns for this layout.
```
**Effect:** Applies production-grade dashboard layout systems, component hierarchies, data visualization patterns, and responsive grid architectures.

---

### Design-Elements
```
Apply Design-Elements polish to this component.
```
**Effect:** Activates the 15+ tactical design refinement prompts for heroes, CTAs, cards, typography, transitions, animations, and depth.

---

### Prompt-Masterclass (TCREI)
```
Use TCREI from Prompt-Masterclass to structure this prompt.
```
**Effect:** Applies Task → Context → References → Evaluate → Iterate framework for crafting high-quality prompts.

---

### Skills-Creator
```
Create a new skill using Skills-Creator standards.
```
**Effect:** Generates a complete agent skill directory with instruction files, metadata, scripts, examples, and validation loops.

---

## EMERGENCY Resources

### Error-Handling-Patterns
```
Apply Error-Handling-Patterns for resilient error management.
```
**Effect:** Loads cross-language error handling patterns: custom exceptions, Result types, retry with backoff, circuit breakers, error aggregation, graceful degradation.

---

## INSPIRATION Resources

### Landing-Page-System
```
Build this as a Premium-Website with scrollytelling animation.
```
**Effect:** Activates the Awwwards-level scrollytelling system with modern frameworks, motion libraries, canvas-based image sequence rendering, and cinematic product reveal animations.

---

## 🔥 Combo Activations

### Dashboard Build (3 resources)
```
Activate dashboard build: Dashboard-Architecture + Design-Elements + Session-Rules.
```

### Premium Landing Page (3 resources)
```
Activate landing page build: Landing-Page-System + Design-Elements + Scaffold-Builder.
```

### Debug Mode (3 resources)
```
Activate debug mode: Error-Handling-Patterns + Dev-Workflow + Session-Rules.
```

### Ship Mode (3 resources)
```
Activate ship mode: Design-Elements + Session-Rules + Dev-Workflow.
```

---

## 🌐 External Resource Activations

### Phased Build Protocol (PRIMARY — Workflow)
```
Activate Phased-Build protocol for this project build.
```
**Effect:** Activates the 5-phase deterministic build protocol (Blueprint → Link → Architect → Stylize → Trigger) with three-layer architecture.

---

### Design System Framework (PRIMARY — UI System)
```
Activate Design System Framework for this design.
```
**Effect:** Activates the 5-dimension design intelligence framework (Pattern, Style, Color, Typography, Animation) for comprehensive UI generation.

---

### Agentic-Dev-Workflow (SUPPORT — Workflow)
```
Activate Agentic-Dev-Workflow workflow for this development task.
```
**Effect:** Enables brainstorm → plan → TDD → subagent-driven development → code review loop with bite-sized task tracking.

---

### Design Search Toolkit (SUPPORT — UI System)
```
Run Design Search Toolkit search for this design.
```
**Effect:** Runs BM25 + regex search across 67 styles, 96 palettes, 57 font pairings to generate data-driven design recommendations.

---

### Design Tokens (SUPPORT — UI System)
```
Apply Design Tokens tokens to this project.
```
**Effect:** Establishes design tokens (spacing, colors, radius, typography) with documented rationale for session-persistent consistency.

---

### Structured Debugger (EMERGENCY — Debugging)
```
Activate Structured Debugger mode for this error.
```
**Effect:** Launches structured 6-step debugging: predictions → code inspection → scratchpad → reasoning → explanation → corrected code.

---

### Glassmorphism Reference (INSPIRATION)
```
Reference Glassmorphism Reference patterns for this UI.
```
**Effect:** Loads glassmorphism, card scanner, gradient overlay, and Framer Motion animation patterns as implementation reference.

---

## 🎛️ Governor Mode Commands

### Show Active Resources
```
SHOW_ACTIVE_RESOURCES
```
**Effect:** Prints the currently active PRIMARY + SUPPORT resources and the current workflow step (EXPLORE / PLAN / CODE / VERIFY / AUDIT).

---

### Recommend Resources for Task
```
RECOMMEND_RESOURCES_FOR_TASK
```
**Effect:** Analyzes the current task context and suggests 1 PRIMARY + 1 SUPPORT resource based on task type and domain.

---

## 🩹 SYSTEM PATCH — 2026-02-25

### Mandatory: Active Resources Banner
Every response MUST begin with this exact block before any other content:

```
┌─────────────────────────────────────┐
│ PRIMARY:  [resource name or "—"]    │
│ SUPPORT:  [resource name or "—"]    │
│ ENGINE:   [EPCC / Phased-Build / Agentic-Dev-Workflow] │
│ STEP:     [EXPLORE / PLAN / CODE / VERIFY / AUDIT] │
│ SCOPE:    [comma-separated file list or "—"] │
└─────────────────────────────────────┘
```

- **PRIMARY / SUPPORT:** The 2 active resources (or "—" if none).
- **ENGINE:** Which workflow engine is driving this task.
- **STEP:** Current phase within that engine.
- **SCOPE:** Files listed in PLAN that may be modified. Empty until PLAN is approved.

### Overload Refusal Protocol
If the user activates 3 or more resources in a single request:
1. **Do not comply.** Do not load any of them.
2. Print: `⚠️ Resource overload — max 2 active (1 PRIMARY + 1 SUPPORT). Please pick 2 from your list.`
3. Show a table of what they requested with Domain and Authority to help them choose.
4. Wait for their selection before proceeding.

### Design Resource Artifact Requirements
When a design resource is activated (Design System Framework, Design Search Toolkit, Design Tokens, Design-Elements, Dashboard-Architecture), it **must produce concrete artifacts** before coding begins:

| Required Artifact | Format | Example |
|-------------------|--------|---------|
| **Design Tokens** | CSS custom properties or JSON | `--color-primary: hsl(220, 90%, 56%);` |
| **Theme Config** | Object or file | `{ radius: '8px', spacing: [4,8,16,24,32] }` |
| **Component Variants** | Markdown table or code | Button: primary, secondary, ghost, destructive |
| **Motion Rules** | Duration + easing specs | `transition: 200ms ease-out; enter: fadeIn 300ms` |

If a design resource is activated but no artifacts are produced before entering CODE phase, the agent must stop and generate them first.

---

## 🩹 SYSTEM PATCH (v1.1) — 2026-02-25

### Combo Activation Deprecation
The "🔥 Combo Activations" section above (Dashboard Build, Premium Landing Page, Debug Mode, Ship Mode) is **deprecated**. Those combos list 3 resources, which violates Rule 4 (max 2 active).

**New behavior:** If the user types a combo activation phrase, the agent must:
1. List the 3 resources from the combo with their Domain and Authority.
2. Ask the user to select exactly **1 PRIMARY + 1 SUPPORT** from the list.
3. Treat the third resource as **reference-only**.
4. Do not proceed until the user confirms their 2 picks.

### Reference-Only Default
Any resource not explicitly activated by the user is **reference-only** by default. This includes:
- Resources mentioned in the `../AGENTS.md` auto-load table
- Resources suggested by RECOMMEND_RESOURCES_FOR_TASK
- Resources listed in combo activations

A resource becomes **active** only when the user types its activation phrase or explicitly confirms it.

### Enhanced SHOW_ACTIVE_RESOURCES Banner
When the user types `SHOW_ACTIVE_RESOURCES`, print this exact format:
```
┌─────────────────────────────────────┐
│ PRIMARY:  [name] (Domain)           │
│ SUPPORT:  [name] (Domain)           │
│ ENGINE:   [EPCC / Phased-Build / Agentic-Dev-Workflow] │
│ STEP:     [EXPLORE / PLAN / CODE / VERIFY / AUDIT] │
│ SCOPE:    [file list or "—"]        │
│ REF-ONLY: [other loaded names]      │
└─────────────────────────────────────┘
```

---

## 🩹 PATCH: Engine Semantics (v1.2) — 2026-02-25

### Canonical Banner Format
This supersedes all prior banner definitions. Every response must begin with:

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

### PHASE Line Rules
- **PHASE** is only populated when PRIMARY is a workflow protocol:
  - Phased-Build → `PHASE: Scope / Connect / Structure / Style / Ship`
  - Agentic-Dev-Workflow → `PHASE: Brainstorm / Plan / TDD / Subagent / Review`
- If PRIMARY is not a workflow protocol, print `PHASE: —`.
- **ENGINE is always EPCC.** Never print `ENGINE: Phased-Build` or `ENGINE: Agentic-Dev-Workflow`.

---

## 🩹 SYSTEM PATCH (v1.3) — 2026-02-25

### Combo Activation Deprecation (Full)
All entries in the "🔥 Combo Activations" section (lines 97–118) and the v1.1 interactive-fallback behavior are **fully deprecated**. They listed 3 active resources, which violated the max-2 rule. Do NOT activate any combo that names 3+ active resources, even interactively.

**Canonical rule:** Combos may *suggest* 3 resources, but only 2 can be ACTIVE (1 PRIMARY + 1 SUPPORT). The third must be REF-ONLY.

### CANONICAL COMBOS (v1.3)

Each combo activates **exactly 2** resources. The third is loaded as REF-ONLY.

#### a) Dashboard Feature
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Dashboard-Architecture | Dashboard |
| **SUPPORT** | Design Tokens | UI-System |
| REF-ONLY | Design-Elements | UI-Polish |

#### b) Landing Page
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Landing-Page-System | Landing |
| **SUPPORT** | Design Tokens | UI-System |
| REF-ONLY | Glassmorphism-Reference | Inspiration |

#### c) UI Polish Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Design Tokens | UI-System |
| **SUPPORT** | Design-Elements | UI-Polish |
| REF-ONLY | Design-Search-Toolkit | Reference |

#### d) Reliability Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Error-Handling-Patterns | Reliability |
| **SUPPORT** | Dev-Workflow | Workflow |
| REF-ONLY | Session-Rules | Reference |

#### e) Debugging
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Structured Debugger | Debugging |
| **SUPPORT** | Error-Handling-Patterns | Reliability |
| REF-ONLY | Dev-Workflow | Reference |

#### f) Ship Readiness
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Dev-Workflow | Workflow |
| **SUPPORT** | Design-Elements | UI-Polish |
| REF-ONLY | Dashboard-Architecture OR Landing-Page-System (depending on project type) |

### Enhanced SHOW_ACTIVE_RESOURCES (v1.3)
When the user types `SHOW_ACTIVE_RESOURCES`, print this exact format:
```
┌──────────────────────────────────────────┐
│ PRIMARY:  [name] (Domain)                │
│ SUPPORT:  [name] (Domain)                │
│ ENGINE:   EPCC                           │
│ STEP:     [EXPLORE / PLAN / CODE / VERIFY / AUDIT] │
│ PHASE:    [sub-phase or "—"]             │
│ SCOPE:    [file list or "—"]             │
│ REF-ONLY: [list of ref-only names or "—"]│
└──────────────────────────────────────────┘
```
All seven lines are mandatory. Do not omit PHASE or REF-ONLY.

### Refusal Rule (v1.3)
If the user requests 3+ ACTIVE resources in a single activation:
1. **Refuse immediately.** Do not load any of them.
2. Print: `⚠️ Resource overload — max 2 ACTIVE (1 PRIMARY + 1 SUPPORT). Please choose 1 PRIMARY + 1 SUPPORT, and the rest will be REF-ONLY.`
3. Show a table listing each requested resource with its Domain and suggested Role.
4. Wait for the user's selection before proceeding.
5. After selection, activate exactly 2 and mark the rest REF-ONLY.

---

## 🩹 SYSTEM PATCH (v1.4) — 2026-02-25

### Governor Mode: Start Menu Commands

#### START_MENU
```
START_MENU
```
**Effect:** Opens `.ai-kit/prompts/START.md` and presents the 8 templates (A–H) for the user to select. The agent reads `AGENTS.md` + `RESOURCE-INDEX.md`, activates the template's 2 resources, prints `SHOW_ACTIVE_RESOURCES`, and begins EXPLORE.

---

#### START_RECOMMEND
```
START_RECOMMEND
```
**Effect:** Analyzes the current task context and recommends one template ID (A–H) from `.ai-kit/prompts/START.md`. Prints the template name, PRIMARY, SUPPORT, and a one-sentence rationale. Waits for user confirmation before activating.

---

## 🩹 SYSTEM PATCH (v3) — Decision Gates Commands — 2026-02-28

### Decision Gates Are Workflow Logic

Decision Gates are an EPCC enforcement layer. They do **not** count as an active resource. PRIMARY + SUPPORT remain max-2.

---

### RUN_DECISION_GATES
```
RUN_DECISION_GATES
```
**Effect:** Scans the current task for decision-heavy keywords (see `prompts/DECISION-GATES.md` Trigger Heuristics). Identifies which gates (A–G) are triggered. Asks Round 1 questions (max 8, grouped by gate, highest-impact first). After answers, asks additional rounds if needed. Produces a Decision Report when all gates are resolved.

---

### SHOW_DECISION_STATE
```
SHOW_DECISION_STATE
```
**Effect:** Prints the current state of all Decision Gates for the active task:
```
┌─────────────────────────────────────────┐
│ Gate A (Product Scope):    ✅ / ⬜ / N/A │
│ Gate B (Backend/Auth):     ✅ / ⬜ / N/A │
│ Gate C (Architecture):     ✅ / ⬜ / N/A │
│ Gate D (UI Genre/Lane):    ✅ / ⬜ / N/A │
│ Gate E (Design System):    ✅ / ⬜ / N/A │
│ Gate F (Motion):           ✅ / ⬜ / N/A │
│ Gate G (Verification):     ✅ / ⬜ / N/A │
│                                         │
│ Locked decisions: X / Y total           │
│ Can proceed to PLAN: YES / NO           │
└─────────────────────────────────────────┘
```

---

### GENERATE_DECISION_REPORT
```
GENERATE_DECISION_REPORT
```
**Effect:** Generates a full Decision Report (using template from `prompts/DECISION-REPORT.md`) with all locked decisions, options considered, and verification plan. Prints the report in chat. If gates are still pending, prints which ones are incomplete and asks the remaining questions first.

---

### LOCK_DECISIONS
```
LOCK_DECISIONS
```
**Effect:** Summarizes all locked decisions from completed gates. Writes them to **`.ai-kit/prompts/DECISIONS-LOCKED.md`** for cross-session persistence. Prints confirmation with the locked values. Locked decisions include: product type, scope, schema/auth model (if relevant), chosen UI lane, tokens (spacing, typography, colors), motion level, and verification commands.

---

### Refusal Behavior (v3)

If the user asks to build, code, or implement on a decision-heavy task (detected via keywords or active resource classification) **without** completed Decision Gates:

1. **Do not comply.** Do not enter PLAN or CODE.
2. Print: `⚠️ Decision Gates Required — I need to resolve [list of pending gates] before I can plan. Here are my questions:`
3. Ask Round 1 gate questions (max 8, grouped by gate).
4. Wait for answers before proceeding.

**Escape hatch:** Only the exact phrase `"INPUTS ARE FIXED, SKIP GATES."` bypasses this. Paraphrases are rejected.

---

## 🩹 SYSTEM PATCH (v3.1) — External Skills Commands — 2026-02-28

### External Skills Are Workflow Logic

External skills commands are an EPCC enforcement layer. They do **not** count as an active resource. PRIMARY + SUPPORT remain max-2. External skills do not consume resource slots.

---

### PICK_BUNDLE
```
PICK_BUNDLE
```
**Effect:** Analyzes the current task description and recommends **1 bundle** from `resources/external/AWESOME-SKILLS-BUNDLES.md` based on task domain. Prints: bundle name, what it's good for, and its starter skills list. Waits for user confirmation before proceeding to skill selection. Respects question budget — this counts as 1 question if part of a Decision Gate round.

---

### PICK_SKILLS
```
PICK_SKILLS
```
**Effect:** From the active or suggested bundle, recommends **max 3 skills** with `risk: safe` from `skills_index.json`. For each skill, prints: name, description (1 line), risk level, and why it matches the current task. If a recommended skill has `risk: unknown`, it is flagged with `⚠️` and requires explicit user approval. Waits for user confirmation before filling `SKILLS-ALLOWLIST.md`.

---

### SHOW_SKILLS_ALLOWLIST
```
SHOW_SKILLS_ALLOWLIST
```
**Effect:** Prints the current state of `prompts/SKILLS-ALLOWLIST.md`:
```
┌──────────────────────────────────────────────┐
│ EXTERNAL SKILLS ALLOWLIST                     │
│                                               │
│ Task:     [task summary]                      │
│ Bundle:   [bundle name or "—"]                │
│                                               │
│ Allowed Skills:                               │
│  1. @skill-name (safe) — reason              │
│  2. @skill-name (safe) — reason              │
│  3. @skill-name (unknown ⚠️) — reason        │
│                                               │
│ Status:   UNLOCKED / LOCKED                   │
│ Risk:     ALL SAFE / HAS UNKNOWN ⚠️          │
└──────────────────────────────────────────────┘
```

---

### APPLY_SKILLS_ALLOWLIST
```
APPLY_SKILLS_ALLOWLIST
```
**Effect:** Locks the current `SKILLS-ALLOWLIST.md` selection. Writes the allowed skills to `.ai-kit/prompts/DECISIONS-LOCKED.md` under an "External Skills Allowlist" section. After locking:
- Only the listed skills may be invoked for this task.
- Adding a new skill requires re-running `PICK_SKILLS` and `APPLY_SKILLS_ALLOWLIST`.
- Prints confirmation with the locked skill names and risk levels.

### Refusal Behavior (v3.1)

If the agent attempts to invoke an external skill that is NOT in the locked allowlist:
1. **Do not invoke.** Stop immediately.
2. Print: `⚠️ Skill "@X" is not in the allowlist. Run PICK_SKILLS to add it, then APPLY_SKILLS_ALLOWLIST to lock.`
3. Wait for user direction.

---

## 🩹 SYSTEM PATCH (v3.2) — Subagents, Lessons, Templates — 2026-02-28

### Subagents, Lessons, and Templates Are Workflow Logic

These commands are EPCC enforcement tools. They do **not** count as active resources. PRIMARY + SUPPORT remain max-2.

---

### RUN_SUBAGENT
```
RUN_SUBAGENT <task-type>
```
**Effect:** Opens `prompts/SUBAGENTS.md` and presents the delegate prompt format. Asks the user to specify:
1. **Task type:** one of `explore`, `audit`, `polish`, or custom
2. **Scope:** which files/directories the subagent should read
3. **Expected output:** what the subagent should return

Then generates a formatted subagent task prompt using the standard template from `SUBAGENTS.md`. The subagent runs autonomously and returns a structured summary. Main agent integrates findings into the current EPCC step.

**Valid task-types:**
| Type | Maps To | Example |
|------|---------|---------|
| `explore` | Repo scan, codebase mapping | `RUN_SUBAGENT explore` |
| `audit` | Security/reliability/a11y review | `RUN_SUBAGENT audit` |
| `polish` | UI polish checklist | `RUN_SUBAGENT polish` |
| *(custom)* | Any specific investigation | `RUN_SUBAGENT "find all API endpoints"` |

---

### APPEND_LESSON
```
APPEND_LESSON
```
**Effect:** Prompts the agent to fill one entry in `prompts/LESSONS-LEARNED.md` using the template. The agent asks (max 3 questions):
1. What was the unexpected issue?
2. What was the root cause?
3. What guardrail should be added?

Then appends a formatted entry (under 10 lines) to `LESSONS-LEARNED.md`. Prints confirmation with the entry content.

---

### OPEN_TASK_TEMPLATES
```
OPEN_TASK_TEMPLATES
```
**Effect:** Reads `prompts/TASK-TEMPLATES.md` and presents the 6 available templates:
```
┌─────────────────────────────────────────────┐
│ TASK TEMPLATES                               │
│                                              │
│  1. Feature Build (EPCC)                     │
│  2. Bug Fix (Debug Protocol)                 │
│  3. Refactor (Small Diffs + Verify)          │
│  4. UI Polish Pass                           │
│  5. Reliability Pass                         │
│  6. Release / Ship Checklist                 │
│                                              │
│ Type a number to load the template,          │
│ or describe your task and I'll suggest one.  │
└─────────────────────────────────────────────┘
```
After the user selects a template, the agent copies it and fills in the task-specific details.

---

## 🩹 SYSTEM PATCH (v3.3) — Prompt Macro Commands — 2026-02-28

### Prompt Macros Are Workflow Logic

These commands activate card-specific decision gates and produce structured outputs. They do **not** count as active resources. If a card is activated as SUPPORT via a command, max-2 resource rules still apply.

---

### APPLY_DELIVERABLES_SPEC
```
APPLY_DELIVERABLES_SPEC
```
**Effect:** Activates `cards/deliverables-specs.md` decision gate. Asks scope depth (MVP/Standard/Full). Produces sitemap, 3 user journeys, component inventory, perf budgets, SEO structure. Outputs become PLAN constraints. Written to DECISIONS-LOCKED.md.
**Prerequisite:** None. Can run at EXPLORE.
**Resource slot:** Activates as SUPPORT if slot open; REF-ONLY if slot full (outputs still required).

---

### GENERATE_PAGE_COPY
```
GENERATE_PAGE_COPY
```
**Effect:** Activates `cards/content-architecture.md` decision gate. Asks voice (Professional/Casual/Bold/Minimal), goal, audience, compliance. Produces per-page hero copy, feature blocks, testimonials, FAQ, footer, H1/H2 tags. Written to DECISIONS-LOCKED.md.
**Prerequisite:** Sitemap (from deliverables-spec or user-provided).
**Resource slot:** Activates as SUPPORT if slot open; REF-ONLY if full.

---

### SPEC_COMPONENT_LOGIC
```
SPEC_COMPONENT_LOGIC
```
**Effect:** Activates `cards/component-logic-spec.md` decision gate. Asks interaction complexity (Simple/Standard/Advanced), data freshness, update strategy, pagination mode. Produces state machine (text), data flow, error/loading/empty specs, edge cases, React structure. Written to DECISIONS-LOCKED.md.
**Prerequisite:** Component identified (from deliverables-spec inventory or user request).
**Resource slot:** REF-ONLY (does not occupy a slot — produces specs, not runtime guidance).

---

### RUN_INSPIRATION_TO_LANE
```
RUN_INSPIRATION_TO_LANE
```
**Effect:** Forces Gate D + `cards/ui-inspiration-to-lane.md`. Asks for references or presents 5 lanes (Minimal/Glass/Soft/Data-Dense/Editorial). Produces lane lock, acceptance criteria, do/don't list, asset pipeline flag. Written to DECISIONS-LOCKED.md.
**Prerequisite:** None. Must run before PLAN on UI tasks.
**Resource slot:** Activates as PRIMARY for UI-lane selection tasks. If PRIMARY slot is occupied, asks user to swap.
**Refuses:** If lane is already locked in DECISIONS-LOCKED.md (must unlock first to re-run).

---

### RUN_ANTI_SLOP_POLISH
```
RUN_ANTI_SLOP_POLISH
```
**Effect:** Forces `cards/anti-ai-slop-details.md` decision gate. Asks polish intensity (Low/Med/High), icon system, motion intensity, accessibility target. Produces the full polish checklist (15–20 items), numbers sheet, and anti-pattern list. Written to DECISIONS-LOCKED.md.
**Prerequisite:** Lane + tokens must be locked (Gate D + E/F done).
**Resource slot:** Activates as SUPPORT if slot open; REF-ONLY if full. Checklist still mandatory in AUDIT.
**Refuses:** If lane is not locked: `⚠️ Cannot run anti-slop polish — lock UI lane first via RUN_INSPIRATION_TO_LANE.`

---

### EXTRACT_REFERENCE_STYLE
```
EXTRACT_REFERENCE_STYLE
```
**Effect:** Forces `cards/reference-style-extraction.md` decision gate. Asks fidelity (Exact/Close/Inspired) and component scope (Buttons/Cards+Inputs/Full Surface). Produces style spec, hover behavior, token map, and component recipes. Written to DECISIONS-LOCKED.md.
**Prerequisite:** Reference source (URL, screenshot, or description) must be provided.
**Resource slot:** REF-ONLY (does not occupy a slot — produces specs).
**Refuses:** If no reference provided: `⚠️ Cannot extract styles — provide a reference URL, screenshot, or description first.`
