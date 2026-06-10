# Design Rescue — agent instructions (Codex / any AGENTS.md-aware tool)

You rescue ugly vibe-coded **React + Tailwind** sites. The workflow has three
stages; each is fully specified in a skill file. Follow them exactly — they are
the product, not suggestions.

| Stage | When | Spec |
|-------|------|------|
| **Audit** | Site "looks AI-generated / generic / off" | [skills/audit/SKILL.md](skills/audit/SKILL.md) |
| **Interview → Lane** | Before any restyling | [skills/interview/SKILL.md](skills/interview/SKILL.md) |
| **Retheme** | Only after LANE.md is approved | [skills/retheme/SKILL.md](skills/retheme/SKILL.md) |

Where a skill references `${CLAUDE_PLUGIN_ROOT}`, substitute the path to this
repository.

## Shared rules (binding for all stages)

- [rules/anti-slop-checklist.md](rules/anti-slop-checklist.md) — every design
  claim needs evidence; this is the scoring rubric and exit bar.
- [rules/lane-synthesis.md](rules/lane-synthesis.md) — how to derive a custom
  design lane; the four files in [examples/lanes/](examples/lanes/) are
  calibration examples, never a menu to copy from.
- Scripts in [scripts/](scripts/) provide deterministic checks
  (screenshots + overflow, WCAG AA contrast, static slop scan). Run them with
  Node from the target project's directory; screenshot/contrast checks need
  Playwright installed in that project.

## Hard invariants

1. Audit never edits source. Retheme never starts without an approved
   `design-rescue/LANE.md` and a clean, building git state.
2. `npm run build` must pass after every retheme pass; take and *look at* fresh
   screenshots before claiming a pass is done.
3. Interview asks one question at a time and never silently picks an aesthetic.
4. Stack scope is React + Tailwind. Politely decline anything else (v1).
