# AI Dev Workflow Kit — Versioning Policy

## Core Principle
Starting with **KIT_VERSION: v0.2.2**, this repository uses a single, authoritative Semantic Version (SemVer) at the repository level.

## Handling Legacy Patch Labels
Throughout the core governance files, you will see historical patch labels (e.g., `v1.2`, `v3.5`, `SYSTEM PATCH`).
- These are **legacy markers** denoting when specific rules were added historically.
- They are **NOT** authoritative versions for current compatibility.
- Agents and users should treat them as historical context only.

## The Canonical Rule
To prevent AI agents from getting confused by older, overridden instructions in long files, we use **CANONICAL** override blocks.

**Rule:** Within any file, the last block labeled `CANONICAL (KIT_VERSION <version>)` completely overrides any older, contradictory text above it.

### Guidance for Human Users
If you want to know the absolute current rules of the system (e.g., maximum active resources, workflow steps), look for the `CANONICAL` block, usually located at the top or bottom of:
- `AGENTS.md`
- `WORKFLOW.md`
- `DECISION-GATES.md`
- `START.md`
- `ACTIVATE.md`
- `RESOURCE-INDEX.md`

### Guidance for AI Agents
1. **Obey Canonical Blocks First:** If you see a `CANONICAL (KIT_VERSION ...)` block, its rules are overriding invariants. 
2. **Handle Contradictions:** If an older section of a file (e.g., a "v1.3 patch" note) contradicts the `CANONICAL` block (e.g., regarding how many resources can be active), you **MUST** follow the `CANONICAL` block. Treat the older section as deprecated.
3. **Report Drift:** If you notice severe contradictions between a canonical block and legacy text, silently follow the canonical block, but you may briefly note the drift to the user if it affects your current task.
