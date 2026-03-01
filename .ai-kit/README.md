# .ai-kit — Portable Agent Governance Kit

> **KIT_VERSION:** v2.0.1 (See `CANONICAL.md`)
> **Copy this single folder into any new project to bring the full Governor Mode system.**
> **This kit is versioned; canonical version overrides legacy patch blocks.**

## Canonical Snapshot

- **Version authority:** `CANONICAL.md` (`KIT_VERSION v2.0.1`)
- **Template set:** canonical list in `CANONICAL.md`
- **Decision gates:** canonical range `A–H` in `CANONICAL.md`
- **Legacy note:** patch labels (`v1.x/v3.x`) are historical markers only
- **Quick current view:** `CURRENT-VIEW.md`

---

## Read This First

| # | File | Why |
|---|------|-----|
| 1 | `AGENTS.md` | Agent identity, rules, coding standards — the brain |
| 2 | `prompts/START.md` | Pick a template → activate 2 resources → begin EXPLORE |
| 3 | `prompts/WORKFLOW.md` | The EPCC engine (22 hard rules) — how every task runs |

---

## When to Use What

| Need | Go To |
|------|-------|
| Start a new task | `prompts/START.md` — pick a template (A–L) |
| Decision-heavy task (UI, auth, schema) | `prompts/DECISION-GATES.md` — Gates A–H ask the right questions |
| Quick commands | `prompts/ACTIVATE.md` — commands for speed |
| Find the right resource | `resources/RESOURCE-INDEX.md` + `resources/cards/` |
| Persist decisions across sessions | `prompts/DECISIONS-LOCKED.md` — auto-filled by `LOCK_DECISIONS` |
| Post-task learning | `prompts/LESSONS-LEARNED.md` |

---

## Quickstart (4 Steps)

1. **Pick a START template** — `START_MENU` shows all 12 options (A–L)
2. **Run Decision Gates** — `RUN_DECISION_GATES` asks only missing questions (max 8/round)
3. **Generate Decision Report** — `GENERATE_DECISION_REPORT` prints locked choices
4. **Lock and build** — `LOCK_DECISIONS` → then PLAN → CODE → VERIFY → AUDIT

---

## How Decision Gates Work

The agent **will not guess** on choice-heavy decisions (UI style, auth model, schema, architecture). Instead:

1. **Gates trigger automatically** based on task keywords (e.g., "landing page" triggers Gates A+D+E+F+G)
2. **Agent asks questions** in rounds of max 8, grouped by gate
3. **You answer** — agent presents 2–3 options with pros/cons for each choice
4. **Decisions lock** to `DECISIONS-LOCKED.md` and persist across sessions
5. **Escape hatch** — say the exact phrase `"INPUTS ARE FIXED, SKIP GATES."` to bypass

See `prompts/DECISION-GATES.md` for full gate definitions (A–H).

---

## Bring Your Own Resources

This kit ships with **9 cards** and **template slots**. To add your own:

1. **Add resource descriptions** to `resources/RESOURCE-INDEX.md` following the template format
2. **Create resource cards** in `resources/cards/` (see existing cards for structure)
3. **Add external sources** to `resources/external/sources/` and register in `EXTERNAL-RESOURCE-REGISTRY.md`

> **Note:** Resource cards are modular summaries — each one describes what a resource does, when to use it, and its decision gates. The kit's governance layer (EPCC, max-2, decision gates) works with any resources you add.

---

## What's Inside

```
.ai-kit/
├── AGENTS.md                              ← Agent brain (identity, rules, commands)
├── README.md                              ← This file
├── prompts/
│   ├── ACTIVATE.md                        ← Activation phrases + commands
│   ├── DECISION-GATES.md                  ← Gates A–H + trigger heuristics
│   ├── DECISION-REPORT.md                 ← Template for decision output
│   ├── DECISIONS-LOCKED.md                ← Persistent locked decisions (per-task)
│   ├── LESSONS-LEARNED.md                 ← Post-task lesson log
│   ├── SKILLS-ALLOWLIST.md                ← Per-task external skill allowlist
│   ├── START.md                           ← 12 start templates (A–L)
│   ├── SUBAGENTS.md                       ← Subagent delegation guide
│   ├── SYSTEM-STATUS-REPORT.md            ← Audit report
│   ├── TASK-TEMPLATES.md                  ← 6 reusable EPCC task templates
│   ├── USAGE-LOG.md                       ← Task activation tracker
│   ├── USER-GUIDE.md                      ← User-facing guide + command reference
│   └── WORKFLOW.md                        ← EPCC engine + 22 hard rules
├── resources/
│   ├── RESOURCE-INDEX.md                  ← Master index for all resources
│   ├── cards/                             ← 9 shipped resource cards
│   │   ├── anti-ai-slop-details.md
│   │   ├── cinematic-landing-lane.md
│   │   ├── component-logic-spec.md
│   │   ├── content-architecture.md
│   │   ├── deliverables-specs.md
│   │   ├── landing-bg-asset-pipeline.md
│   │   ├── reference-style-extraction.md
│   │   ├── technical-cofounder-contract.md
│   │   └── ui-inspiration-to-lane.md
│   ├── reference/                         ← Reference source docs
│   │   └── cinematic-landing-lane-source.md
│   └── external/                          ← External resources (examples)
│       ├── AWESOME-SKILLS.md              ← Community skills library reference
│       ├── AWESOME-SKILLS-BUNDLES.md      ← Role-based bundles
│       ├── AWESOME-SKILLS-WORKFLOWS.md    ← EPCC-mapped playbooks
│       ├── EXTERNAL-RESOURCE-REGISTRY.md  ← External resources registry (template)
│       ├── cards/                         ← 7 external example cards
│       └── sources/                       ← Your source snapshots
```

---

## Setup in a New Project

```bash
cp -R .ai-kit/ /path/to/new-project/.ai-kit/
```

Then create a thin pointer at the new project root:

```bash
echo '# See .ai-kit/AGENTS.md for all agent rules and resources.' > /path/to/new-project/AGENTS.md
```

## What You Still Need Separately

Your own **resource files** (guides, prompts, methodologies) that you want the agent to reference. Add them to `resources/RESOURCE-INDEX.md` and create cards in `resources/cards/`. The kit's governance layer works with any resources you provide.
