# 📋 Decision Report Template (v3) — 2026-02-28

> **Instructions:** Copy this template, fill in all sections, and print in chat before entering PLAN. After printing, also write locked decisions to `.ai-kit/prompts/DECISIONS-LOCKED.md`.
>
> Fields marked `(locked)` cannot be changed during CODE without re-running the relevant gate.

---

## Task Summary
<!-- 5 bullets max -->
- •
- •
- •
- •
- •

---

## Active Resources

| Role | Resource | Domain |
|------|----------|--------|
| PRIMARY | | |
| SUPPORT | | |
| REF-ONLY | | |

**Domains touched:** <!-- comma-separated -->

---

## Gates Executed

| Gate | Name | Status | Output Summary |
|------|------|--------|----------------|
| A | Product Scope | ⬜/✅ | |
| B | Backend/Auth/Schema | ⬜/✅/N/A | |
| C | Architecture | ⬜/✅/N/A | |
| D | UI Genre + Aesthetic Lane | ⬜/✅/N/A | |
| E | Design System | ⬜/✅/N/A | |
| F | Interaction/Motion | ⬜/✅/N/A | |
| G | Verification | ⬜/✅ | |

---

## Options Considered

### Option 1: <!-- name -->
- **Pros:**
- **Cons:**

### Option 2: <!-- name -->
- **Pros:**
- **Cons:**

### Option 3 (optional): <!-- name -->
- **Pros:**
- **Cons:**

**Selected:** <!-- option name + one-sentence rationale -->

---

## Assumptions

<!-- Must be EMPTY or contain ONLY explicitly user-provided constraints. -->
<!-- If you are tempted to write an assumption, you missed a question. Go back and ask. -->

(none)

---

## Locked Decisions

> These decisions are **final** for this task. Changing any locked decision requires re-running the relevant gate.

| Decision | Value | Gate |
|----------|-------|------|
| Product type | | A |
| Scope | | A |
| Auth model | | B |
| Schema / entities | | B |
| Deployment target | | C |
| Architecture pattern | | C |
| UI lane name | | D |
| Color temperature | | D |
| Dark/Light mode | | D |
| Spacing scale | | E |
| Typography (font pair + sizes) | | E |
| Core color tokens | | E |
| Border radius | | E |
| Motion level (low/med/high) | | F |
| Reduced-motion policy | | F |
| Motion library | | F |
| Anti-patterns to avoid | | D |
| Lane acceptance criteria | | D |

<!-- Delete rows for gates that were not triggered (N/A) -->

---

## Plan Preview

| # | File Path | Action (create/modify/delete) | Description |
|---|-----------|-------------------------------|-------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Verification Commands

```bash
# Required commands (fill in from Gate G output)
```

**Manual QA:**
- [ ] <!-- specific checks -->

**Breakpoints tested:**
- [ ] 375px (mobile)
- [ ] 768px (tablet)
- [ ] 1024px (small desktop)
- [ ] 1440px (desktop)

---

## Persistence

> After this report is finalized, copy the **Locked Decisions** table and **Verification Commands** to:
> `.ai-kit/prompts/DECISIONS-LOCKED.md`
>
> This file persists across sessions so the agent can reload decisions without re-running gates.

---

## 🩹 SYSTEM PATCH (v3.1) — External Skills Allowlist — 2026-02-28

### External Skills Allowlist

> **Include this section only when Gate H (Skill Selection Gate) was triggered.**
> Max 3 skills. SAFE-only by default. If any skill has `risk: unknown`, user approval must be recorded.

#### Template

```
## External Skills Allowlist

Bundle: [bundle name or "none"]

| # | Skill | Risk | Why Selected |
|---|-------|------|-------------|
| 1 | @skill-name | safe | [1-sentence alignment with locked decisions] |
| 2 | @skill-name | safe | |
| 3 | @skill-name | safe / unknown ⚠️ | |

Risk check: ALL SAFE / HAS UNKNOWN ⚠️ (user approved: [yes/no])
Status: LOCKED via APPLY_SKILLS_ALLOWLIST
```

#### Rules
- If Gate H was not triggered, omit this section entirely.
- If a skill has `risk: unknown`, the "Why Selected" column must note user approval.
- The allowlist in the Decision Report must match `prompts/SKILLS-ALLOWLIST.md` exactly.
- Skills not in this list may NOT be invoked during the task.
