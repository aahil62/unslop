# AI Dev Workflow Kit

> A drop-in agent workflow system for any AI-powered coding environment.
> Enforces structured development, scope control, and quality gates on every task.

---

## What It Is

AI Dev Workflow Kit is a portable folder (`.ai-kit/`) you drop into any project to give your AI coding agent:

- **EPCC Engine** — a mandatory workflow loop: Explore → Plan → Code → Verify → Audit
- **Resource Cards** — reusable knowledge cards that constrain agent behavior per task
- **Max-2 Rule** — at most 2 active resources (1 PRIMARY + 1 SUPPORT) to prevent context overloada
- **Status Banner** — every response starts with a structured header showing active resources and current step
- **Start Menu** — 8 pre-built templates that boot the agent with the right resources for common tasks

It works with any AI coding tool. No vendor lock-in.

---

## Core Principles

| Principle | What It Means |
|-----------|---------------|
| **EPCC Engine** | Every task follows Explore → Plan → Code → Verify → Audit. No skipping steps. |
| **Max 2 Active** | 1 PRIMARY + 1 SUPPORT resource per task. Others are reference-only. |
| **Plan First** | No code before an approved plan. No unplanned file edits. |
| **Banner Always** | Every response starts with a status header showing resources, engine, step, and scope. |
| **Verify Everything** | Tasks end with verification (lint/build/test) and a quality audit checklist. VERIFY uses your repo's existing scripts (package.json / make / task runner). If scripts don't exist, run the standard commands for your stack or add minimal scripts. |

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

Open `.ai-kit/prompts/START.md` and choose a template:

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

Note: Templates F–H still activate only 2 resources. The '+' in the name describes the intended outcome, not additional active resources.

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

The kit ships with 6 cards:

| Card | Domain | Purpose |
|------|--------|---------|
| `ui-system-specs.md` | UI-System | Design specs, spacing, colors, typography |
| `ui-polish-checklist.md` | UI-Polish | Component-level refinement |
| `landing-patterns.md` | Landing | Landing page structure and conversion |
| `dashboard-ia.md` | Dashboard | Dashboard layout and information architecture |
| `reliability-patterns.md` | Reliability | Error handling and resilience |
| `debugging-protocol.md` | Debugging | Structured debugging methodology |

### Resource Index
`resources/RESOURCE-INDEX.md` is the master index. It lists all resources, their domains, authority levels, and recommended combos.

### External Resources
`resources/external/EXTERNAL-RESOURCE-REGISTRY.md` is a template for tracking your own external resources (docs, repos, tools). Fill it in with your team's knowledge.

---

## Start Menu

The start menu (`.ai-kit/prompts/START.md`) has 8 templates. Each one:
1. Reads `AGENTS.md` + `RESOURCE-INDEX.md`
2. Uses the EPCC workflow
3. Activates exactly 2 resources (1 PRIMARY + 1 SUPPORT)
4. Starts in EXPLORE (no planning or coding until exploration is done)

---

## Example Workflows

### Dashboard Build
1. Paste **Template A** (Dashboard Feature) into your agent
2. Agent activates Dashboard-IA (PRIMARY) + UI-System-Specs (SUPPORT)
3. EXPLORE: Agent scans your codebase, identifies existing patterns
4. PLAN: Agent drafts a file-by-file plan for the dashboard
5. CODE: Agent implements the plan, following Dashboard-IA rules
6. VERIFY: Agent runs lint/build/test
7. AUDIT: Agent checks quality gates (a11y, responsiveness, states, performance)

### Debug Session
1. Paste **Template E** (Debug) into your agent
2. Agent activates Debugging-Protocol (PRIMARY) + Reliability-Patterns (SUPPORT)
3. EXPLORE: Agent reads error messages, scans relevant files
4. PLAN: Agent generates 5 predictions, drafts investigation plan
5. CODE: Agent creates a minimal repro, applies the fix
6. VERIFY: Agent confirms fix and checks for regressions
7. AUDIT: Agent documents the learning and hardens error handling

---

## What It Is NOT

- **Not a framework.** It does not generate code scaffolding. It structures how the agent *thinks* about your task.
- **Not an AI model.** It works with any AI coding tool — it provides the workflow, not the intelligence.
- **Not opinionated about your stack.** It works with React, Vue, Python, Go, Rust, or anything else.
- **Not a replacement for tests.** It enforces that tests are run, but it does not write your test suite.

---

## Bring Your Own Resources

The 6 included cards are examples. You are encouraged to add your own:

1. Create a card in `resources/cards/your-resource.md` with the standard format
2. Add it to `resources/RESOURCE-INDEX.md`
3. Add an activation phrase to `prompts/ACTIVATE.md`
4. Add external resources to `resources/external/EXTERNAL-RESOURCE-REGISTRY.md`

---

## Repository Structure

```
.
├── .ai-kit/                   ← The portable kit (copy this into your project)
│   ├── AGENTS.md              ← Agent brain
│   ├── README.md              ← Kit guide
│   ├── prompts/               ← Workflow, activation, start menu
│   └── resources/             ← Resource index, cards, external registry
├── scripts/                   ← Install scripts
├── examples/                  ← Minimal usage example
├── AGENTS.md                  ← Root pointer to .ai-kit/
├── README.md                  ← This file
├── LICENSE                    ← MIT
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
└── ROADMAP.md
```

---

## License

MIT License. See [LICENSE](LICENSE).
