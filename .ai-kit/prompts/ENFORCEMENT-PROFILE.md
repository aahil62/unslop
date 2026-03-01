# Enforcement Profile (Opt-in)

This is an optional operational profile for teams who want stricter guardrails.

## Purpose

Reduce avoidable workflow bypasses by adding lightweight preflight checks before PLAN/CODE.

## Scope

- This profile does not replace EPCC or Decision Gates.
- It adds checks that make missing state visible earlier.

## Recommended Preflight

1. Run `scripts/check-canonical.sh` at session start.
2. If task is decision-heavy, require:
   - Decision report exists (`.ai-kit/prompts/DECISION-REPORT.md` used for output)
   - Locked decisions updated (`.ai-kit/prompts/DECISIONS-LOCKED.md`)
3. Before CODE on non-trivial tasks, ensure a written plan exists in chat or task doc.

## Optional Runtime Hook (Local)

Run:

```bash
scripts/check-governor-state.sh
```

Behavior:
- Fails when canonical drift is detected.
- Warns if locked-decision fields are still blank.
- Reminds operator to run gates/report/lock before PLAN on choice-heavy tasks.

## Adoption Guidance

- Use this profile in CI for repositories with multiple contributors.
- Keep it opt-in for solo prototyping, where speed may outweigh strictness.
