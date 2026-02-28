# 📋 External Skills Allowlist (Per-Task Template)

> **Version:** v3.1 — 2026-02-28
> **Instructions:** The agent fills this template via the **Skill Selection Gate (Gate H)** in `DECISION-GATES.md`. Once filled, it is locked into `DECISIONS-LOCKED.md` via the `APPLY_SKILLS_ALLOWLIST` command.
>
> **Rule:** No external skill may be invoked unless it appears in this allowlist. Max 3 skills per task. SAFE-only by default.

---

## Task

<!-- One-sentence description of the current task -->

---

## Selected Bundle (Optional)

<!-- Bundle name from AWESOME-SKILLS-BUNDLES.md, or "none" -->

**Bundle:** 
**Rationale:** <!-- Why this bundle fits the task (1 sentence) -->

---

## Allowed Skills (Max 3)

| # | Skill Name | Risk Level | Source | Why Selected |
|---|------------|------------|--------|-------------|
| 1 | `@` | safe / unknown | | <!-- 1 sentence linking to Decision Report --> |
| 2 | `@` | safe / unknown | | |
| 3 | `@` | safe / unknown | | |

---

## Risk Level Check

- [ ] All selected skills have `risk: safe` in `skills_index.json`
- [ ] If any skill has `risk: unknown`: user has explicitly approved it (paste approval below)
- [ ] If any skill has `risk: high`: user has explicitly approved it per-invocation

**User approval for unknown/high-risk skills (if applicable):**
<!-- Paste the user's exact approval message here -->

---

## Decision Report Alignment

<!-- How do these skills align with the locked decisions from the Decision Report? -->

| Decision | Value | Skill That Supports It |
|----------|-------|----------------------|
| | | `@` |
| | | `@` |
| | | `@` |

---

## Lock Status

- [ ] **UNLOCKED** — Skills selected but not yet applied
- [ ] **LOCKED** — Skills locked via `APPLY_SKILLS_ALLOWLIST` and written to `DECISIONS-LOCKED.md`

**Locked by:** <!-- agent or user -->
**Locked at:** <!-- timestamp -->
