# Contributing

Thank you for your interest in contributing to Unslop.

## How to contribute

### Reporting issues
- Open an issue describing the problem or suggestion.
- For a bad audit/retheme result, include the site's stack, the relevant
  `unslop/DESIGN-AUDIT.md` or `unslop/LANE.md`, and a screenshot.

### The best contributions

1. **New worked lane examples** (`examples/lanes/`) — a complete, coherent lane
   that's meaningfully different from the existing four. Follow the format in
   `rules/lane-synthesis.md` (identity sentence, 4-role palette, 3 type slots,
   texture, motion budget, signature moment, do/don't, acceptance checks).
2. **Checklist items** (`rules/anti-slop-checklist.md`) — a new slop tell, with
   how to *verify* it and how to *fix* it. Every item must be evidence-checkable,
   not a vibe.
3. **Detector coverage** (`scripts/`) — make `slop-scan.mjs` / `contrast-check.mjs`
   catch a real tell deterministically. Add the matching checklist ID.

### Changing the skills
If you want to change `audit`, `interview`, or `retheme` behavior:
1. Open an issue first to discuss it.
2. Keep the hard invariants: audit never edits source; retheme never starts
   without an approved `unslop/LANE.md` and a clean, building tree; interview
   asks one question at a time and never silently picks an aesthetic.

## Guidelines

- **Evidence over vibes.** Any design claim a skill makes must be verifiable by
  inspection, a script, or a screenshot.
- **Stay in scope (v1).** React + Tailwind only. Don't add other-stack paths
  without discussion.
- **Lanes are synthesized, not menued.** Don't turn `examples/lanes/` into a
  fixed preset picker — they are calibration.
- **Verify your change.** Run the scripts against a real React + Tailwind site
  before submitting.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
