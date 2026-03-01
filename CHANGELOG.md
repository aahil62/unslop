# Changelog

All notable changes to this project will be documented in this file.

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
