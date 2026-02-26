# Minimal Example

This example shows how to use the AI Dev Workflow Kit with any project.

## Setup

1. Install the kit into your project:

```bash
# From the ai-dev-workflow-kit repo root:
./scripts/install.sh /path/to/your/project
```

2. Open `.ai-kit/prompts/START.md` in your project and pick a template.

3. Paste the template into your AI coding agent.

## What Happens Next

The agent will:
1. Read `.ai-kit/AGENTS.md` and `.ai-kit/resources/RESOURCE-INDEX.md`
2. Activate the 2 resources specified in the template (1 PRIMARY + 1 SUPPORT)
3. Print `SHOW_ACTIVE_RESOURCES` showing the status banner
4. Begin **EXPLORE** — scanning your codebase and understanding the task

From there, the EPCC workflow takes over:
- **Explore** — understand the codebase and requirements
- **Plan** — draft a file-by-file plan (no code yet)
- **Code** — implement the plan precisely
- **Verify** — run lint, build, tests
- **Audit** — quality checklist and final polish

## Example: Building a Dashboard

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Dashboard-IA (Dashboard)
  SUPPORT: UI-System-Specs (UI-System)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

## Example: Debugging a Bug

```
Read .ai-kit/AGENTS.md and .ai-kit/resources/RESOURCE-INDEX.md.
Use EPCC workflow from .ai-kit/prompts/WORKFLOW.md.

Activate:
  PRIMARY: Debugging-Protocol (Debugging)
  SUPPORT: Reliability-Patterns (Reliability)

SHOW_ACTIVE_RESOURCES
Begin EXPLORE. Do not plan or code yet.
```

## Customization

You can add your own resources:
1. Create a card in `.ai-kit/resources/cards/your-resource.md`
2. Add it to `.ai-kit/resources/RESOURCE-INDEX.md`
3. Add an activation phrase to `.ai-kit/prompts/ACTIVATE.md`

See the main README for full documentation.
