---
name: audit
description: Score an existing React + Tailwind site against the anti-slop checklist and produce DESIGN-AUDIT.md with evidence. Use when the user says their site "looks AI-generated", "looks generic", "feels off", asks "why is my site ugly", or wants a design audit/score before improving it. Read-only — never edits source.
---

# Design Audit

Audit the current project's visual design and produce a scored, evidence-backed
`DESIGN-AUDIT.md`. This skill is **strictly read-only on source code** — it writes
only the audit report and screenshots.

## Preconditions

1. Confirm the project is React + Tailwind (look for `tailwind.config.*` or the
   Tailwind v4 CSS import, plus React in package.json). If it isn't, stop and say:
   v1 of unslop supports React + Tailwind only.
2. The site must be viewable. Find the dev command (`npm run dev` or equivalent)
   and the port. Start it in the background if not already running.

## Procedure

1. **Capture.** Run the bundled screenshot script against the running site:
   ```bash
   node "${CLAUDE_PLUGIN_ROOT}/scripts/screenshot.mjs" <url> ./unslop/screenshots
   ```
   It captures 375 / 768 / 1024 / 1440 px full-page shots and reports horizontal
   overflow per viewport. If Playwright is missing, it prints install instructions —
   follow them, then re-run.

2. **Deterministic checks.**
   ```bash
   node "${CLAUDE_PLUGIN_ROOT}/scripts/slop-scan.mjs" .
   node "${CLAUDE_PLUGIN_ROOT}/scripts/contrast-check.mjs" <url>
   ```
   `slop-scan` greps the source for slop tells (stock palette, transition-all,
   arbitrary px values, uniform radius, weight sprawl) with file:line evidence.
   `contrast-check` reports WCAG AA failures on the rendered page.

3. **Visual evaluation.** Read all four screenshots. Walk
   `${CLAUDE_PLUGIN_ROOT}/rules/anti-slop-checklist.md` item by item — every item
   is PASS / FAIL / N-A with evidence (file:line from the scans, or a screenshot
   observation named precisely, e.g. "1440px: hero is centered headline + two
   buttons + 3-col icon grid → L1 FAIL"). Read key source files to confirm
   suspected failures; do not guess.

4. **Report.** Write `unslop/DESIGN-AUDIT.md`:
   - **Overall score** (passes ÷ applicable × 100) and per-category scores.
   - **Failures with evidence**, grouped by category, referencing checklist IDs.
   - **Top 5 fixes by visual impact**, ordered, each mapped to checklist IDs.
   - Paths to the screenshots.

5. **Tell the user** their score, the 2–3 most damning findings in plain language,
   and the next step: run `/unslop:interview` to define a design lane, then
   `/unslop:retheme` to fix it.

## Rules

- Never modify source files, configs, or styles. Audit only.
- Every failure needs evidence a stranger could verify. "Feels generic" is banned.
- If the dev server can't start, report the build error and stop — that's a
  prerequisite bug, not a design finding.
