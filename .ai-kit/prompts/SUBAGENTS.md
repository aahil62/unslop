# 🤖 Subagent Delegation Guide

> **Version:** v3.2 — 2026-02-28
> **Purpose:** Define when and how the main agent delegates work to subagents, keeping the primary context window clean and focused.
> **Rule:** Subagent delegation is an EPCC technique. It does NOT count as an active resource and does NOT bypass Decision Gates.

---

## When to Delegate

Delegate to a subagent when:

| Situation | Why Delegate |
|-----------|-------------|
| **Large codebase exploration** | Reading 10+ files pollutes main context |
| **Security / reliability audit** | Systematic scan produces dense output best summarized |
| **Long investigation / debugging** | Root cause hunts generate noise before signal |
| **Documentation synthesis** | Aggregating info from many sources into one doc |
| **Parallel analysis** | Two independent research tracks can run concurrently |
| **Repetitive verification** | Lint/test/build across multiple packages or files |

Do NOT delegate when:
- The task is trivial (1–2 files, obvious fix)
- The subagent would need the full decision context (locked decisions, UI tokens, etc.)
- The user needs to interact during the work (subagents run autonomously)

---

## Delegate Prompt Format

Every subagent task must follow this standard format:

```
## Subagent Task: [Short Title]

**Goal:** [One sentence — what the subagent must accomplish]

**Scope:**
- Files to read: [list]
- Files to modify: [list or "none — read-only"]
- Boundaries: [what NOT to touch]

**Expected Output:**
- [Artifact 1: e.g., "summary.md with findings"]
- [Artifact 2: e.g., "list of issues with severity"]

**Stop Conditions:**
- Stop after [N] files / [N] minutes / [condition]
- Do NOT proceed to fix — only report findings
- Return structured summary, not raw dumps

**Context Provided:**
- [Key decisions from DECISIONS-LOCKED.md, if relevant]
- [Specific patterns to look for]
```

---

## Rules

1. **Main agent stays minimal.** The main context window should contain: task plan, locked decisions, current EPCC step, and subagent summaries. NOT raw exploration data.
2. **Subagent returns structured summary + evidence.** No raw file dumps. Summary must include: findings count, severity, affected files, recommended actions.
3. **One task per subagent.** Do not bundle unrelated work into a single subagent.
4. **Subagent does NOT make decisions.** It reports options. The main agent (or user) decides.
5. **Subagent output is REF-ONLY.** It does not automatically become part of the plan. The main agent must review and integrate.

---

## Example Subagent Tasks

### Example 1: Repo Exploration

```
## Subagent Task: Codebase Structure Scan

**Goal:** Map the project structure, identify key patterns, 
and summarize the tech stack.

**Scope:**
- Files to read: package.json, tsconfig.json, src/ (top 2 levels), 
  any config files
- Files to modify: none — read-only
- Boundaries: Do not read node_modules, .git, or dist/

**Expected Output:**
- Tech stack summary (framework, language, build tool, test framework)
- File tree (top 2 levels with annotations)
- Key patterns observed (routing, state management, API layer)
- Potential concerns or inconsistencies

**Stop Conditions:**
- Stop after scanning top 2 directory levels
- Do NOT attempt fixes or refactors
- Return structured markdown summary
```

### Example 2: Security / Reliability Audit

```
## Subagent Task: Security Surface Scan

**Goal:** Identify potential security vulnerabilities in the 
auth and API layers.

**Scope:**
- Files to read: src/auth/*, src/api/*, src/middleware/*, 
  any .env.example
- Files to modify: none — read-only
- Boundaries: Do not read frontend components or styling

**Expected Output:**
- Findings table: | # | File | Issue | Severity | Recommendation |
- Summary: total issues, critical count, high count
- Top 3 priority fixes with code snippets

**Stop Conditions:**
- Stop after scanning auth + API directories
- Do NOT apply fixes — report only
- Flag any hardcoded secrets or exposed keys immediately
```

### Example 3: UI Polish Checklist

```
## Subagent Task: UI Polish Audit

**Goal:** Review all visible UI components against the locked 
design tokens and identify polish gaps.

**Scope:**
- Files to read: src/components/*, src/styles/*, 
  DECISIONS-LOCKED.md (for tokens)
- Files to modify: none — read-only
- Boundaries: Do not read backend or API files

**Expected Output:**
- Checklist: | Component | Token Compliance | a11y | States | Polish Gap |
- Summary: components audited, pass/fail counts
- Top 5 components needing immediate attention

**Stop Conditions:**
- Stop after auditing all components in src/components/
- Do NOT apply fixes — report findings only
- Compare against locked tokens from DECISIONS-LOCKED.md

**Context Provided:**
- UI Lane: [from DECISIONS-LOCKED.md]
- Core tokens: [spacing, colors, radius, typography]
```

---

## Integration with EPCC

| EPCC Step | Subagent Use |
|-----------|-------------|
| **EXPLORE** | Repo scan, codebase mapping, pattern identification |
| **PLAN** | Rarely — main agent should plan. Subagent may research specific unknowns. |
| **CODE** | Parallel implementation of independent modules (advanced) |
| **VERIFY** | Audit scans, lint/test across packages, accessibility checks |
| **AUDIT** | Security audit, performance profiling, design token compliance |

---

## Related Files

| File | Purpose |
|------|---------|
| `WORKFLOW.md` | EPCC engine definition |
| `ACTIVATE.md` | `RUN_SUBAGENT` command |
| `LESSONS-LEARNED.md` | Capture learnings after corrections |
