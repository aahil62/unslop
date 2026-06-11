# Changelog

All notable changes to this project will be documented in this file.

## [v0.1.0 — design-rescue] - 2026-06-11
### Changed (full pivot)
- Project pivoted from a generic AI-dev methodology kit to **Design Rescue**: a
  Claude Code plugin (Codex-compatible) that audits, interviews, and re-themes
  vibe-coded React + Tailwind sites. Versioning restarts at plugin v0.1.0.
- Pre-pivot kit (`.ai-kit/`, EPCC engine, decision gates, canonical machinery,
  freelance playbook drafts) archived on the `legacy-v2` branch and removed from main.
### Added
- Three plugin skills: `audit`, `interview` (custom lane synthesis), `retheme`
  (pass-by-pass with build + screenshot verification).
- `rules/anti-slop-checklist.md` (evidence-based scoring rubric) and
  `rules/lane-synthesis.md` (rules-driven creativity), harvested and rewritten
  from the legacy cards.
- Four worked lane examples (Organic Tech, Midnight Luxe, Brutalist Signal,
  Vapor Clinic) as synthesizer calibration.
- Deterministic check scripts: `screenshot.mjs` (4 breakpoints + overflow),
  `contrast-check.mjs` (WCAG AA, oklch-safe, gradient-aware), `slop-scan.mjs`
  (static slop tells with file:line evidence) — verified against a deliberately
  generic Next.js fixture.
- Plugin + marketplace manifests; `AGENTS.md` Codex adapter.

## [v2.0.1] - 2026-03-02
### Fixed
- Added `.ai-kit/CANONICAL.md` as single source of truth (SSOT) for version, EPCC phases, gate range, templates, cards, and canonical commands.
- Standardized EPCC to `Explore → Plan → Code → Verify → Audit` in canonical workflow definitions.
- Standardized decision gate range to `A–H` in command and guide references.
- Standardized lane acceptance criteria to `3–5` checks in gate and lane docs.
- Updated install scripts and contributor guidance to point to `CANONICAL.md`.
- Added canonical drift tooling: `scripts/check-canonical.sh` and `.github/workflows/canonical-check.yml`.
- Marked system status report as generated snapshot with canonical source pointer.
- Added `.ai-kit/CURRENT-VIEW.md` for a concise non-legacy operational summary.
- Added optional enforcement profile and helper check: `.ai-kit/prompts/ENFORCEMENT-PROFILE.md` and `scripts/check-governor-state.sh`.

### Release Highlights (Drift Fixed)
- `CANONICAL.md` + `CURRENT-VIEW.md` now provide authoritative and concise guidance.
- Default template path is explicitly `I–L` (with `A–H` retained as legacy/extensions).
- Checker coverage shipped via `scripts/check-canonical.sh` (and CI workflow) to catch drift early.

## [v2.0.0] - 2026-03-01
### Added & Changed
- Versioning unified to universal v2.0.0.
- Decision Gates + persistence enforced for choice-heavy tasks.
- Max-2 governor + banner protocol actively enforced.
- Minimal-kit linkage fixes applied so START templates work out-of-the-box.
- Cinematic lane + cofounder mode shipped.

## [v0.2.2] - 2026-03-01
### Fixed
- Docs: clarified minimal-kit pointer in START.md.

## [v0.2.1] - 2026-03-01
### Fixed
- Linkage: START legacy templates and Polish step no longer require extensions.

## [v0.2.0] - 2026-03-01

### Changed
- Unified all repository versioning to a single semantic version (`KIT_VERSION v0.2.0`).
- Appended CANONICAL override blocks to all core governor files to assert v0.2.0 authority.
- Standardized old system patch headers with a `[LEGACY]` marker to preserve history while preventing instruction clash.
- Added a `.ai-kit/VERSIONING.md` policy document.
- Updated root `README.md` and `.ai-kit/README.md` to display the active canonical version.

## [0.1.0] - 2026-02-26

### Added
- EPCC workflow engine (Explore → Plan → Code → Verify → Audit)
- 6 clean-room resource cards: UI-System-Specs, UI-Polish-Checklist, Landing-Patterns, Dashboard-IA, Reliability-Patterns, Debugging-Protocol
- Resource Index with domain ownership and max-2 rules
- Activation phrases with canonical banner format
- Start Menu with 8 templates (A–H)
- Governor Mode hard rules (plan-first, scope control, verify)
- External Resource Registry template
- Install scripts (bash + PowerShell)
- Minimal usage example
- MIT License
- Contributing guidelines, Code of Conduct, Security Policy
