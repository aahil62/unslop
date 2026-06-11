---
name: retheme
description: Systematically apply an approved design lane (LANE.md) to a React + Tailwind site — tokens first, then section-by-section, with build + screenshot verification after every pass. Use when the user says "retheme", "apply the lane", "make it match the design", or after /unslop:interview produced an approved LANE.md.
---

# Retheme

Apply the approved lane to the codebase, pass by pass, with evidence at every step.
This is the only unslop skill that edits source.

## Preconditions (hard)

1. `unslop/LANE.md` exists and was user-approved. If missing, stop and
   run `/unslop:interview` first.
2. Clean git state: ask the user to commit or stash, or create a branch
   (`unslop/retheme`) before touching anything.
3. `npm run build` passes **before** you start. If it doesn't, fix nothing
   design-related — report the build error and stop.
4. Read in full: `unslop/LANE.md`,
   `${CLAUDE_PLUGIN_ROOT}/rules/anti-slop-checklist.md`, and
   `unslop/DESIGN-AUDIT.md` if present (its Top 5 fixes get priority).

## Passes (in order — never skip ahead)

**Pass 1 — Tokens.** Install the lane's `:root` CSS variables and Tailwind config
mapping. Replace stock color classes (`indigo-600`, `gray-50`, …) with token-based
ones. Load the lane's Google Fonts. No layout changes yet.

**Pass 2 — Typography & spacing.** Apply the type scale, weights, tracking and
leading per the lane. Snap arbitrary spacing to the scale; set the section rhythm.

**Pass 3 — Sections, one at a time.** Nav → hero → each content section → footer.
Apply the lane's surfaces (radius system, depth cue, texture), fix the layout
tells from the checklist (L1–L4), and build the lane's **signature moment** where
it belongs. One section per edit batch.

**Pass 4 — States & motion.** Hover and `focus-visible` styled to the lane;
loading/empty/error states on data-touching UI; motion per the lane's budget with
the stated `prefers-reduced-motion` stance; kill `transition-all`.

**Pass 5 — Exit audit.** Re-run the full audit procedure (screenshots, slop-scan,
contrast-check, checklist walk) and verify every acceptance check in LANE.md.

## Verification after EVERY pass (non-negotiable)

```bash
npm run build   # must pass clean
node "${CLAUDE_PLUGIN_ROOT}/scripts/screenshot.mjs" <url> ./unslop/screenshots/pass-N
```

Read the new screenshots and confirm the pass did what it claimed at 375 and
1440px before starting the next pass. If a pass broke something, fix it inside
that pass. **Never claim a pass is done without a passing build and fresh
screenshots you have actually looked at.**

## Finish

- Final score from Pass 5 vs. the original audit score, stated plainly.
- Before/after: first audit screenshots vs. final ones, linked in a short
  `unslop/RETHEME-REPORT.md`.
- Any acceptance check that could not be met: say so explicitly — no silent skips.
- Suggest a commit with a summary of the passes.

## Scope rules

- Change only what the lane and checklist require. No feature additions, no
  refactors, no dependency swaps beyond fonts/motion lib the lane demands.
- Copy/content stays unless it's placeholder lorem — flag content problems,
  don't rewrite the user's words.
