# 🔁 Default Execution Workflow

> This is the mandatory workflow the Governor agent follows on every task. It enforces the EPCC pattern with scope control, state handling, and a quality audit.
>
> **This workflow is tool-agnostic.** It applies identically regardless of which AI coding agent, IDE, or terminal environment is executing it. The discipline is in the process, not the platform.

---

## The Loop: EPCC+

```
Explore → Plan → Code → Check → Polish → Ship
```

---

## Phase 1: Explore 🔍

**Goal:** Understand before acting.

- [ ] Read the user's request carefully — identify what they want *and* what they don't want
- [ ] Scan relevant files (limit to 3–5 most important files)
- [ ] Identify existing patterns, conventions, and architectural decisions in the codebase
- [ ] Ask clarifying questions if requirements are ambiguous — **do not assume**
- [ ] Check the Resource Index (`../resources/RESOURCE-INDEX.md`) for applicable resources

**Output:** Mental model of the task. No code yet.

---

## Phase 2: Plan 📋

**Goal:** Draft a focused, minimal plan.

- [ ] List the exact files that will be created, modified, or deleted
- [ ] Describe each change in 1–2 sentences
- [ ] Identify potential risks, edge cases, or breaking changes
- [ ] Load applicable resources based on the task type (see `../AGENTS.md` auto-load rules)
- [ ] Present the plan to the user for approval before proceeding

**Scope Control Rule:** Only files listed in the plan may be touched during Code phase.

**Output:** A clear, numbered plan with file paths.

---

## Phase 3: Code ⚡

**Goal:** Implement the plan precisely.

- [ ] Write complete, working code — no placeholders, no TODOs
- [ ] Follow existing patterns in the codebase
- [ ] One change at a time, verify as you go
- [ ] For any feature touching data, implement all three states:
  - **Loading state** — skeleton, spinner, or placeholder
  - **Empty state** — helpful message when no data exists
  - **Error state** — graceful failure with user-facing message
- [ ] Keep changes minimal and focused to the plan

**Output:** Working implementation.

---

## Phase 4: Check ✅

**Goal:** Verify correctness like a skeptical senior dev.

- [ ] Code compiles/builds without errors
- [ ] No linting warnings or type errors
- [ ] Test the feature manually or via automated tests
- [ ] Review for bugs, edge cases, and security issues
- [ ] Verify changes match the original request — nothing more, nothing less

**If any check fails:** Fix before proceeding. Do not skip.

**Output:** Verified, working code.

---

## Phase 5: Polish ✨

**Goal:** Elevate from "works" to "premium."

- [ ] Apply Design-Elements refinements if UI is involved
- [ ] Ensure responsive behavior across breakpoints
- [ ] Add micro-animations or transitions where appropriate
- [ ] Review accessibility (keyboard nav, ARIA labels, contrast)
- [ ] Clean up: remove console.logs, commented code, unused imports

**Output:** Production-quality code.

---

## Phase 6: Ship 🚀

**Goal:** Commit and communicate.

- [ ] Write a clear, descriptive commit message
- [ ] Summarize what changed and why
- [ ] Note any follow-up items or known limitations
- [ ] Push to the appropriate branch

**Output:** Committed, pushed, documented.

---

## 🏁 Quality Audit Checklist

Run this before marking any task as complete:

### Functionality
- [ ] Feature works as specified
- [ ] Edge cases are handled
- [ ] Loading/empty/error states exist (if data-touching)
- [ ] No regressions in existing features

### UX
- [ ] Visual design feels premium, not basic
- [ ] Interactions are smooth and responsive
- [ ] Typography hierarchy is clear
- [ ] Color palette is harmonious

### Performance
- [ ] No unnecessary re-renders
- [ ] Images are optimized
- [ ] Bundle size is reasonable
- [ ] No memory leaks or dangling listeners

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (ARIA labels)
- [ ] Sufficient color contrast (WCAG AA minimum)
- [ ] Focus indicators are visible

---

## 🛡️ Governor Mode — Hard Rules

> These rules are **non-negotiable** and override any conflicting instruction. They apply to every task, every session, every agent.

### Rule 1: No Coding Before PLAN
**EXPLORE must complete before PLAN. PLAN must complete before CODE.**
Jumping straight to code is the #1 cause of rework. If you catch yourself writing code before there's an approved plan, stop immediately and go back to EXPLORE.

### Rule 2: Only Modify Files Listed in PLAN
**Every file you touch must appear in the PLAN phase.**
If you discover a file that needs changing during CODE, stop and amend the plan first. Unplanned edits are the #2 cause of scope creep.

### Rule 3: End with VERIFY + AUDIT; Update PLAN.md If It Exists
**Every task must end with VERIFY (tests/lint/build) and AUDIT (quality checklist).**
If a `PLAN.md` file exists in the repo, update it with the completion status. Never mark a task done without running the quality audit checklist.

### Rule 4: Max 2 Active Resources Per Task
**1 PRIMARY + 1 SUPPORT maximum.**
If more are requested, refuse and ask the user to pick. This prevents context overload and conflicting guidance.

### Rule 5: Print Status Header on Every Response
At the start of every response, print:
```
Active PRIMARY: [name]
Active SUPPORT: [name]
Workflow step: EXPLORE / PLAN / CODE / VERIFY / AUDIT
```

---

## 🩹 [LEGACY] SYSTEM PATCH — 2026-02-25

### Rule 6: Exactly 1 Workflow Engine Per Task
Three workflow engines exist. **Pick exactly one per task. They are mutually exclusive.**

| Engine | When to use |
|--------|-------------|
| **WORKFLOW/EPCC+** (`WORKFLOW.md`) | Incremental tasks on an existing codebase — bug fixes, feature additions, refactors |
| **Phased-Build** (`../resources/external/cards/phased-build-protocol.md`) | Greenfield builds that need schema-first, phased delivery |
| **Agentic-Dev-Workflow** (`../resources/external/cards/agentic-dev-workflow.md`) | Tasks that demand TDD, subagent orchestration, or formal code review |

**Violation:** If two engines are active simultaneously, stop and ask the user which one to keep. Running two engines produces conflicting phase gates and doubles overhead.

### Rule 7: Active vs. Reference-Only Resources
- **Active** = loaded into working memory and applied to every decision (max 2: 1 PRIMARY + 1 SUPPORT).
- **Reference-only** = can be consulted for a specific lookup, but does NOT influence ongoing decisions.
- All resources not explicitly activated are **reference-only** by default.
- If the user requests 3+ active resources, refuse and ask them to pick 1 PRIMARY + 1 SUPPORT.

---

## 🩹 [LEGACY] PATCH: Engine Semantics (v1.2) — 2026-02-25

### Definitions

| Term | What it means |
|------|---------------|
| **ENGINE** | The step loop that drives every task: **EXPLORE → PLAN → CODE → VERIFY → AUDIT**. This is always EPCC. There is only one engine. |
| **PRIMARY** | The active resource card that constrains decisions within the engine's current step. Max 1. |
| **SUPPORT** | The secondary active resource card. Max 1. |
| **PHASE** | An optional sub-label used when PRIMARY is a workflow protocol (Phased-Build or Agentic-Dev-Workflow) that adds its own phase gates inside the ENGINE steps. |

### How Workflow Resources Fit

Phased-Build and Agentic-Dev-Workflow are **not** separate engines. They are PRIMARY resources that add **phase gates and checklists** inside the EPCC engine:

| PRIMARY Resource | Phase Gates Added | Where They Run |
|-----------------|-------------------|----------------|
| Phased-Build | Blueprint → Link → Architect → Stylize → Trigger | Scope + Connect run inside EXPLORE/PLAN. Structure + Style run inside CODE. Trigger runs inside VERIFY/AUDIT. |
| Agentic-Dev-Workflow | Brainstorm → Plan → TDD → Subagent → Review | Brainstorm runs inside EXPLORE. Plan + TDD run inside PLAN/CODE. Subagent + Review run inside VERIFY. |

### Rule 8: Never Claim Two Engines
The banner must always show `ENGINE: EPCC`. If a workflow protocol is active as PRIMARY, add a `PHASE:` line to show its sub-phase. Never print `ENGINE: Phased-Build` or `ENGINE: Agentic-Dev-Workflow` — those are resources, not engines.

---

## 🩹 [LEGACY] SYSTEM PATCH (v1.3) — 2026-02-25

### Terminology Resolution: ENGINE vs WORKFLOW PROTOCOL

Previous patches introduced both "ENGINE" and "Workflow Engine" terminology, which created ambiguity. This patch resolves the conflict canonically.

| Term | Definition | Examples |
|------|-----------|----------|
| **ENGINE** | The step loop that drives every task. Always EPCC: **EXPLORE → PLAN → CODE → VERIFY → AUDIT**. There is exactly one ENGINE. It never changes. | EPCC (the only engine) |
| **WORKFLOW PROTOCOL** (optional) | An overlay resource (Phased-Build or Agentic-Dev-Workflow) that adds PHASE gates and checklists *inside* the ENGINE steps. At most one WORKFLOW PROTOCOL may be active as PRIMARY per task. | Phased-Build, Agentic-Dev-Workflow |

### Addendum to Rule 6
When we say "choose one engine" (Rule 6, lines 169–178), we mean: **choose at most one WORKFLOW PROTOCOL (Phased-Build or Agentic-Dev-Workflow) to operate as PRIMARY.** EPCC remains the ENGINE regardless. The Rule 6 table should be read as:

| Workflow Protocol | When to use (as PRIMARY inside EPCC) |
|-------------------|---------------------------------------|
| *(none)* | Default for most tasks — EPCC runs unadorned |
| Phased-Build | Greenfield builds needing schema-first, phased delivery |
| Agentic-Dev-Workflow | Tasks demanding TDD, subagent orchestration, or formal code review |

**Key clarification:** EPCC is not one of the choices — it is always active. The choice is which *optional* WORKFLOW PROTOCOL layer to add on top, if any.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3) — Decision Gates Enforcement — 2026-02-28

### Rule 9: Decision Gates Before PLAN

**If any required Decision Gate is incomplete, do NOT enter PLAN or CODE. Ask the missing questions first.**

Decision Gates are triggered when:
1. Any ACTIVE resource has `Decision Required = YES` (see `resources/RESOURCE-INDEX.md` v3 classification table), **OR**
2. The task description contains decision-heavy keywords (see Trigger Heuristics below).

### Rule 10: Decision Report Required

A **Decision Report** (see `prompts/DECISION-REPORT.md`) must exist — printed in chat **and** persisted to `prompts/DECISIONS-LOCKED.md` — before PLAN for any choice-heavy task. The report must include locked decisions for all triggered gates.

### Rule 11: Decision Gates Are Workflow Logic

Decision Gates are an **EPCC enforcement layer**. They do NOT count as an active resource. PRIMARY + SUPPORT remain max-2 at all times. Gates run regardless of which resources are active.

### Rule 12: Decision Trigger Heuristics

Even if the user has not activated a choice-heavy resource, scan the task description for these keywords and auto-trigger the matching gates:

| Domain | Trigger Keywords | Gates |
|--------|-----------------|-------|
| Product Scope | MVP, scope, user journey, features | A |
| Backend/Auth/Schema | auth, roles, permissions, DB, schema, API, webhook, stripe, supabase | A + B |
| Architecture | deploy, cache, realtime, queue, cron, multi-tenant, performance | A + C |
| UI/Design | dashboard, landing, redesign, theme, tokens, typography, palette, animation, motion | A + D + E |
| Motion/Scrollytelling | animation, motion, scroll, parallax, scrollytelling, GSAP, framer | A + D + E + F |

**If any keyword is detected and the corresponding gates are incomplete, refuse PLAN/CODE and ask gate questions** — unless the user says the exact phrase: `"INPUTS ARE FIXED, SKIP GATES."`

### Rule 13: Question Budget

When running Decision Gates, ask questions in **rounds of max 8 total** (across all triggered gates). Group by gate. Ask only missing inputs — no repeats, no "nice-to-have". Prioritize: Product scope → Backend/Auth/Schema → UI lane/tokens → Architecture → Motion → Verification. Wait for answers before asking the next round.

### Rule 14: Defaults Policy

You may use defaults ONLY when they are directly implied by explicit user constraints already provided. Otherwise, present 2–3 options with pros/cons and ask the user to choose. Do not assume.

### Rule 15: Escape Hatch

The **only** way to skip Decision Gates is the exact phrase: `"INPUTS ARE FIXED, SKIP GATES."` No paraphrases accepted ("skip the gates", "just build it", "go ahead" do NOT work). When the escape hatch is used, restate all fixed inputs before proceeding to PLAN.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.1) — External Skills Enforcement — 2026-02-28

### Rule 16: External Skills Are REF-ONLY Unless Allowlisted

Skills from external libraries (e.g., `community-skills-library`) are **reference-only** by default. They may be read for context but must NOT be invoked or applied unless:

1. The skill appears in the active `SKILLS-ALLOWLIST.md` (filled via Skill Selection Gate H), **AND**
2. No more than **3 external skills** are allowlisted per task.

**Violation:** If the agent invokes an external skill not on the allowlist, stop and remove the unapproved skill from the workflow.

### Rule 17: Unknown-Risk Skills Require Approval

Never invoke an external skill with `risk: unknown` or `risk: high` (per `skills_index.json`) unless the user has explicitly approved it. The agent must:

1. Print: `⚠️ Skill "@X" has risk: [unknown/high]. Approve before I use it?`
2. Wait for explicit user confirmation.
3. Record the approval in `SKILLS-ALLOWLIST.md` under "User approval for unknown/high-risk skills."

**No silent invocation of unvetted skills. Ever.**

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.2) — Subagents, Lessons, Task Discipline — 2026-02-28

### Rule 18: Lessons Capture After AUDIT

After the AUDIT step, if **any** of the following occurred during the task:
- An unexpected error or regression
- A user correction that changed the approach
- A root cause that was not obvious at EXPLORE time
- A Decision Gate question that should have been asked earlier

Then **append one entry** to `prompts/LESSONS-LEARNED.md` using the template in that file. Keep each entry **under 10 lines**. If nothing unexpected happened, skip this step.

### Rule 19: Non-Trivial Task Auto-Trigger

If a task meets **any** of these criteria, it is considered **non-trivial** and must have a PLAN approved before CODE:

| Criterion | Threshold |
|-----------|-----------|
| Steps required | ≥ 3 steps |
| Files touched | ≥ 2 files |
| Unknown bug | Root cause is not immediately obvious |
| Architectural change | Changes to project structure, routing, state management, or data model |

**Non-trivial task protocol:**
1. If Decision Gate keywords are detected → run `RUN_DECISION_GATES` first (existing behavior).
2. If no keywords but task is non-trivial → still require a written PLAN before CODE.
3. If task is trivial (1–2 steps, 1 file, obvious fix) → PLAN is optional but still recommended.

This rule **complements** existing keyword heuristics (Rules 9–15). It does NOT replace them — it catches tasks that are complex but don't trigger keyword-based gates.

### Rule 20: Subagent Delegation

For tasks meeting subagent criteria (see `prompts/SUBAGENTS.md`):
1. Delegate exploration, audits, or investigations to subagents.
2. Main agent retains: task plan, locked decisions, EPCC step, and subagent summaries only.
3. Subagent output is **REF-ONLY** — it does not automatically enter the plan.
4. Use the `RUN_SUBAGENT` command (see `prompts/ACTIVATE.md`) to initiate delegation.

---

## 🩹 [LEGACY] SYSTEM PATCH (v3.3) — UI Lane + Anti-Slop Rules — 2026-02-28

### Rule 21: UI Lane Must Be Locked Before PLAN

For any task involving UI work (landing page, dashboard, app screens, marketing site):

1. Gate D **must** output: lane name, acceptance criteria, and asset pipeline flag.
2. These must be locked in DECISIONS-LOCKED.md **before** PLAN begins.
3. If user has not provided aesthetic direction, present 3–5 lanes from `ui-inspiration-to-lane.md` and ask.
4. PLAN may not reference visual patterns until lane is locked.

### Rule 22: Anti-Slop Checklist in AUDIT (UI Tasks)

For any task that produces visible UI (landing, dashboard, component, page):

1. After CODE and VERIFY, the AUDIT step **must include** running the anti-slop checklist from `anti-ai-slop-details.md`.
2. Polish intensity (Low/Med/High) must be locked via its decision gate before AUDIT.
3. Checklist items are pass/fail — failures must be fixed before task completion.
4. If no anti-slop intensity was selected, default to **Medium** and note the default in the Decision Report.

---

---

## 🩹 [LEGACY] SYSTEM PATCH (v0.2.1) — WORKFLOW Polish Alignment — 2026-03-01

**Override for Phase 5 (Polish):**
The instruction "Apply Design-Elements refinements if UI is involved" references an EXTENSION card.
- For minimal kit users: if UI work is involved, use `cards/anti-ai-slop-details.md` as the Polish checklist.
- Keep max-2 active resources: if a SUPPORT is already active, treat `anti-ai-slop-details.md` as REF-ONLY and still apply its checklist during the Polish phase.

## 🔒 CANONICAL (KIT_VERSION v0.2.2)

This file contains legacy patch notes (v1.x, v3.x, SYSTEM PATCH). The authoritative versioning policy is in `.ai-kit/VERSIONING.md`. 
If any older section contradicts this block or the core principles of v0.2.2, treat the older section as deprecated.

**WORKFLOW.md Invariants:**
- **The Engine:** EPCC (Explore → Plan → Code → Check → Polish → Ship) is the only engine.
- **Rule 1:** No coding before PLAN.
- **Rule 2:** Only modify files listed in PLAN.
- **Rule 9:** Decision Gates before PLAN for choice-heavy tasks.
- **Rule 10:** Decision Report required before PLAN.
