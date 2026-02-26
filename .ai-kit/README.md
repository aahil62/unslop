# .ai-kit — AI Dev Workflow Kit

> **Version:** 1.0
> **Copy this folder into any project to bring the full EPCC workflow system.**

## What's Inside

```
.ai-kit/
├── AGENTS.md                          ← Agent brain (identity, rules, commands)
├── prompts/
│   ├── ACTIVATE.md                    ← Activation phrases + banner rules
│   ├── WORKFLOW.md                    ← EPCC engine + hard rules
│   ├── START.md                       ← Start menu templates (A–H)
│   └── USAGE-LOG.md                   ← Task activation tracker
├── resources/
│   ├── RESOURCE-INDEX.md              ← Master resource index
│   ├── cards/                         ← 6 resource cards
│   └── external/
│       └── EXTERNAL-RESOURCE-REGISTRY.md ← Template for tracking your own external resources
└── README.md                          ← This file
```

## Setup in a New Project

Use the install script from the repo root:

```bash
./scripts/install.sh /path/to/your/project
```

Or manually:

```bash
cp -R .ai-kit/ /path/to/your/project/.ai-kit/
```

Then create a pointer at the project root:

```bash
echo '# See .ai-kit/AGENTS.md for all agent rules and resources.' > /path/to/your/project/AGENTS.md
```

## Quick Start

1. Open `prompts/START.md` and pick a template (A–H).
2. Paste the template into your AI coding agent.
3. The agent reads `AGENTS.md` + `RESOURCE-INDEX.md`, activates 2 resources, and begins EXPLORE.

## Adding Your Own Resources

1. Create a card in `resources/cards/your-resource-name.md`.
2. Add it to `resources/RESOURCE-INDEX.md`.
3. Add an activation phrase to `prompts/ACTIVATE.md`.
4. Register external resources in `resources/external/EXTERNAL-RESOURCE-REGISTRY.md`.

## Paths

All internal links use **relative paths** from within `.ai-kit/`. No absolute paths.
