# .ai-kit — Portable Agent Governance Kit

> **Version:** 3.5 — 2026-02-28
> **Copy this single folder into any new project to bring the full Governor Mode system.**
> **This kit is append-only versioned; latest patch blocks override older text.**

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
| Start a new task | `prompts/START.md` — pick a template (A–J) |
| Decision-heavy task (UI, auth, schema) | `prompts/DECISION-GATES.md` — Gates A–H ask the right questions |
| Quick commands | `prompts/ACTIVATE.md` — 21 commands for speed |
| Find the right resource | `resources/RESOURCE-INDEX.md` + `resources/cards/` |
| Persist decisions across sessions | `prompts/DECISIONS-LOCKED.md` — auto-filled by `LOCK_DECISIONS` |
| Use external skills | `resources/external/AWESOME-SKILLS.md` → `PICK_BUNDLE` → `PICK_SKILLS` |
| Post-task learning | `prompts/LESSONS-LEARNED.md` |

---

## Quickstart (4 Steps)

1. **Pick a START template** — `START_MENU` shows all 10 options (A–J)
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

This kit ships with **example cards** and **template slots**. To add your own:

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
│   ├── ACTIVATE.md                        ← Activation phrases + 21 commands
│   ├── DECISION-GATES.md                  ← Gates A–H + trigger heuristics
│   ├── DECISION-REPORT.md                 ← Template for decision output
│   ├── DECISIONS-LOCKED.md                ← Persistent locked decisions (per-task)
│   ├── LESSONS-LEARNED.md                 ← Post-task lesson log
│   ├── SKILLS-ALLOWLIST.md                ← Per-task external skill allowlist
│   ├── START.md                           ← 10 start templates (A–J)
│   ├── SUBAGENTS.md                       ← Subagent delegation guide
│   ├── SYSTEM-STATUS-REPORT.md            ← Audit report (v3.3 resync)
│   ├── TASK-TEMPLATES.md                  ← 6 reusable EPCC task templates
│   ├── USAGE-LOG.md                       ← Task activation tracker
│   ├── USER-GUIDE.md                      ← User-facing guide + command reference
│   └── WORKFLOW.md                        ← EPCC engine + 22 hard rules
├── resources/
│   ├── RESOURCE-INDEX.md                  ← Master index for all resources
│   ├── cards/                             ← 7 modular resource cards (v3.3)
│   │   ├── anti-ai-slop-details.md
│   │   ├── component-logic-spec.md
│   │   ├── content-architecture.md
│   │   ├── deliverables-specs.md
│   │   ├── landing-bg-asset-pipeline.md
│   │   ├── reference-style-extraction.md
│   │   └── ui-inspiration-to-lane.md
│   └── external/
│       ├── AWESOME-SKILLS.md              ← External skills library reference
│       ├── AWESOME-SKILLS-BUNDLES.md      ← 7 role-based bundles
│       ├── AWESOME-SKILLS-WORKFLOWS.md    ← 3 EPCC-mapped playbooks
│       ├── EXTERNAL-RESOURCE-REGISTRY.md  ← External resources registry (template)
│       ├── cards/                         ← 7 external resource cards (examples)
│       │   ├── phased-build-protocol.md
│       │   ├── glassmorphism-reference.md
│       │   ├── design-tokens.md
│       │   ├── agentic-dev-workflow.md
│       │   ├── design-system-framework.md
│       │   ├── design-search-toolkit.md
│       │   └── structured-debugger.md
│       └── sources/                       ← Your source snapshots (add your own)
│           └── README.md
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
