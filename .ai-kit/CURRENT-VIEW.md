# AI Dev Workflow Kit — Current View

Use this file for the shortest accurate view of the system.

## Source of Truth

- Canonical manifest: `.ai-kit/CANONICAL.md`
- Version policy: `.ai-kit/VERSIONING.md`

## Current Invariants

- Engine: `EPCC = Explore → Plan → Code → Verify → Audit`
- Max active resources: `1 PRIMARY + 1 SUPPORT`
- Decision gates: `A–H`
- Gate bypass phrase (exact): `"INPUTS ARE FIXED, SKIP GATES."`
- Question budget: max 8 per round

## Default Start Path

- **Default (minimal-kit usable):** `I, J, K, L`
- **Legacy / extensions (not default):** `A, B, C, D, E, F, G, H`
- Canonical definitions live in `.ai-kit/CANONICAL.md`.

## Canonical Commands

- `SHOW_ACTIVE_RESOURCES`
- `RUN_DECISION_GATES`
- `SHOW_DECISION_STATE`
- `GENERATE_DECISION_REPORT`
- `LOCK_DECISIONS`
- `COFOUNDER_MODE`

## Operational Note

Rules are instruction-level constraints; enforcement depends on agent compliance.
Use `scripts/check-canonical.sh` to detect manifest/doc drift in this repo.
