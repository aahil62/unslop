# AI Dev Workflow Kit — CANONICAL Manifest

## Version

- **KIT_VERSION:** `v2.0.1`

## Workflow (Authoritative)

- **EPCC:** `Explore → Plan → Code → Verify → Audit`
- **Note:** `Polish` and `Ship` are not EPCC phases. They are tasks that may run inside Verify/Audit when relevant.

## Decision Gates (Authoritative)

- **Gate range:** `A–H`
- **Question budget:** max 8 questions per round
- **Defaults policy:** defaults are allowed only when directly implied by explicit user constraints
- **Escape hatch:** exact phrase only: `"INPUTS ARE FIXED, SKIP GATES."`

## Shipped Cards (from filesystem)

- `anti-ai-slop-details.md`
- `cinematic-landing-lane.md`
- `component-logic-spec.md`
- `content-architecture.md`
- `deliverables-specs.md`
- `landing-bg-asset-pipeline.md`
- `reference-style-extraction.md`
- `technical-cofounder-contract.md`
- `ui-inspiration-to-lane.md`

## Shipped Templates

### Default (minimal-kit usable)

- `I) Landing (Illustrated BG Lane)`
- `J) Landing Copy + Deliverables`
- `K) Cinematic Landing`
- `L) Cofounder Mode (Idea → V1 Build)`

### Legacy / Extensions (not default path)

- `A) Universal Boot (Scaffolding)`
- `B) Backend-Heavy SaaS`
- `C) Dashboard Feature`
- `D) Landing Page`
- `E) UI Polish`
- `F) Reliability Pass`
- `G) Debug`
- `H) Ship-Ready QA`

## Canonical Commands (from ACTIVATE.md)

- `SHOW_ACTIVE_RESOURCES`
- `RUN_DECISION_GATES`
- `SHOW_DECISION_STATE`
- `GENERATE_DECISION_REPORT`
- `LOCK_DECISIONS`
- `COFOUNDER_MODE`

## SSOT Rule

If any file conflicts with this manifest, `.ai-kit/CANONICAL.md` wins.
