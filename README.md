# AI Dev Workflow Kit

> **KIT_VERSION:** v2.0.1 (See `.ai-kit/CANONICAL.md`)
> A drop-in agent workflow system for any AI-powered coding environment.
> Enforces structured development, scope control, and quality gates on every task.

## Canonical Snapshot

- **Version authority:** `.ai-kit/CANONICAL.md` (`KIT_VERSION v2.0.1`)
- **Template catalog:** canonical list in `.ai-kit/CANONICAL.md`
- **Decision gates:** canonical range `A–H` in `.ai-kit/CANONICAL.md`
- **Legacy note:** `v1.x/v3.x` patch labels are historical context, not current version identifiers
- **Quick current view:** `.ai-kit/CURRENT-VIEW.md`

---

## What It Is

AI Dev Workflow Kit is a portable folder (`.ai-kit/`) you drop into any project to give your AI coding agent:

- **EPCC Engine** — a mandatory workflow loop: Explore → Plan → Code → Verify → Audit
- **Resource Cards** — reusable knowledge cards that constrain agent behavior per task
- **Decision Gates** — force the agent to ask questions, propose options, and lock decisions before coding on choice-heavy tasks
- **Max-2 Rule** — at most 2 active resources (1 PRIMARY + 1 SUPPORT) to prevent context overload
- **Status Banner** — every response starts with a structured header showing active resources and current step
- **Start Menu** — pre-built templates that boot the agent with the right resources for common tasks

It works with any AI coding tool. No vendor lock-in.
Rules are instruction-level constraints; enforcement depends on agent compliance, but the kit is designed to make drift visible and hard to justify.

---

## Core Principles

| Principle | What It Means |
|-----------|---------------|
| **EPCC Engine** | Every task follows Explore → Plan → Code → Verify → Audit. No skipping steps. |
| **Max 2 Active** | 1 PRIMARY + 1 SUPPORT resource per task. Others are reference-only. |
| **Plan First** | No code before an approved plan. No unplanned file edits. |
| **No Guessing** | On choice-heavy tasks (UI style, auth model, schema), the agent asks — it does not assume. |
| **Banner Always** | Every response starts with a status header showing resources, engine, step, and scope. |
| **Verify Everything** | Tasks end with verification (lint/build/test) and a quality audit checklist. |

---

## Quickstart

### 1. Install

```bash
# Clone this repo, then install into your project:
./scripts/install.sh /path/to/your/project

# Or manually:
cp -R .ai-kit/ /path/to/your/project/.ai-kit/
```

### 2. Pick a Template

Open `.ai-kit/prompts/START.md` and choose a template. Templates activate exactly 2 resources (1 PRIMARY + 1 SUPPORT) and boot EPCC in EXPLORE.

**Available templates (A–L):**

| ID | Name | PRIMARY | SUPPORT | Best For |
|----|------|---------|---------|----------|
| A | Universal Boot | `<your-project-template>` | `<your-workflow>` | Scaffolding a new project |
| B | Backend-Heavy SaaS | `<your-build-protocol>` | `<your-error-handling>` | Greenfield backend w/ schema |
| C | Dashboard Feature | `<your-dashboard-card>` | `<your-ui-tokens>` | Dashboard / admin panel |
| D | Landing Page | `<your-landing-card>` | `<your-ui-tokens>` | Animated marketing page |
| E | UI Polish | `<your-ui-tokens>` | `<your-ui-polish>` | Refining existing UI |
| F | Reliability Pass | `<your-error-handling>` | `<your-workflow>` | Hardening error handling |
| G | Debug | `<your-debugger>` | `<your-error-handling>` | Persistent/multi-file bugs |
| H | Ship-Ready QA | `<your-workflow>` | `<your-ui-polish>` | Final pass before shipping |
| I | Landing (Illustrated BG) | UI Inspiration → Lane | Landing BG Asset Pipeline | Custom-BG landing pages |
| J | Landing Copy + Deliverables | Deliverables Spec | Content Architecture | Multi-page marketing sites |
| K | Cinematic Landing | Cinematic Landing Lane | Content Architecture | Preset-driven cinematic sites |
| L | Cofounder Mode | (task-appropriate card) | Technical Cofounder Contract | Vague ideas → V1 builds |

> Templates A–H are legacy/extension-oriented and may reference cards you provide separately.
> Templates I–L reference shipped cards in this repository.

### 3. Paste and Go

Copy the template prompt block, paste it into your AI agent, and start building. The agent will:
1. Read `AGENTS.md` + `RESOURCE-INDEX.md`
2. Activate the 2 specified resources
3. Print `SHOW_ACTIVE_RESOURCES`
4. Begin EXPLORE

---

## How Resources Work

### Resource Cards
Each resource is a markdown card in `.ai-kit/resources/cards/` that defines:
- What it is and when to use it
- Concrete outputs it should produce
- An activation phrase
- Extracted rules (5–10 per card)

Cards are constraints + output expectations (kept short), not long reference documents.

The kit ships with **9 cards**:

| Card | Domain | Type | Purpose |
|------|--------|------|---------|
| `anti-ai-slop-details.md` | UI-Polish | Choice-heavy | Polish intensity, icon system, anti-pattern checklist |
| `cinematic-landing-lane.md` | Landing/Motion | Choice-heavy | Preset-driven cinematic landing pages (4 presets) |
| `component-logic-spec.md` | UI+Logic | Procedural | State machines, data flow, edge case specs |
| `content-architecture.md` | Content | Choice-heavy | Copy, headlines, FAQ, content structure |
| `deliverables-specs.md` | Product/Arch | Choice-heavy | Sitemap, user journeys, perf budgets |
| `landing-bg-asset-pipeline.md` | Landing | Choice-heavy | Custom background asset generation |
| `reference-style-extraction.md` | UI-System | Choice-heavy | Extract styles from reference sites |
| `technical-cofounder-contract.md` | Product/Collaboration | Procedural | Cofounder communication overlay |
| `ui-inspiration-to-lane.md` | UI-Genre | Choice-heavy | Inspiration → locked UI lane |

### Resource Index
`resources/RESOURCE-INDEX.md` is the master index. It lists all resources, their domains, authority levels, and classification.

### External Resources
`resources/external/` contains 7 **example** external resource cards + a community skills library reference. These are examples to learn from and optionally use — the kit works without them.

---

## Decision Gates

For choice-heavy tasks (UI style, auth model, schema, architecture), the agent runs Decision Gates before planning:

1. **Gates trigger automatically** based on task keywords
2. **Agent asks questions** in rounds of max 8, grouped by gate
3. **You answer** — agent presents 2–3 options with pros/cons
4. **Decisions lock** to `DECISIONS-LOCKED.md` and persist across sessions
5. **Escape hatch** — say the exact phrase `"INPUTS ARE FIXED, SKIP GATES."` to bypass

See `.ai-kit/prompts/DECISION-GATES.md` for full gate definitions (A–H).

---

## Cofounder Mode

Template L activates a **communication overlay** that makes the agent behave like a technical cofounder:
- Treats you as the product owner — checks in at every decision point
- Explains technical choices in plain language
- Pushes back on overcomplication
- Separates must-have from nice-to-have
- Breaks builds into staged deliverables

Activate with: `COFOUNDER_MODE` or use Template L from START.md.

---

## Bring Your Own Resources

The shipped cards are starting points. Add your own:

1. Create a card in `resources/cards/your-resource.md` with the standard format
2. Add it to `resources/RESOURCE-INDEX.md`
3. Add an activation phrase to `prompts/ACTIVATE.md`
4. Register external resources in `resources/external/EXTERNAL-RESOURCE-REGISTRY.md`

---

## Repository Structure

```
.
├── .ai-kit/                   ← The portable kit (copy this into your project)
│   ├── AGENTS.md              ← Agent brain (identity, rules, commands)
│   ├── README.md              ← Kit guide
│   ├── prompts/               ← Workflow, activation, start menu, decision gates
│   └── resources/             ← Resource index, cards, reference docs, external
├── scripts/                   ← Install scripts (install.sh, install.ps1)
├── examples/                  ← Minimal usage example
├── README.md                  ← This file
├── LICENSE                    ← MIT
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
└── ROADMAP.md
```

---

## What It Is NOT

- **Not a framework.** It does not generate code scaffolding. It structures how the agent *thinks* about your task.
- **Not an AI model.** It works with any AI coding tool — it provides the workflow, not the intelligence.
- **Not opinionated about your stack.** It works with React, Vue, Python, Go, Rust, or anything else.
- **Not a replacement for tests.** It enforces that tests are run, but it does not write your test suite.

---

## License

MIT License. See [LICENSE](LICENSE).
