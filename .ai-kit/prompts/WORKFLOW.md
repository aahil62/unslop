# Default Execution Workflow

> This is the mandatory workflow the agent follows on every task. It enforces the EPCC pattern with scope control, state handling, and a quality audit.
>
> **This workflow is tool-agnostic.** It applies identically in any AI coding environment.

---

## The Loop: EPCC

```
Explore → Plan → Code → Verify → Audit
```

**ENGINE is always EPCC.** There is exactly one engine. It never changes.

---

## Step 1: Explore

**Goal:** Understand before acting.

- [ ] Read the user's request — identify what they want *and* what they don't want
- [ ] Scan relevant files (limit to 3–5 most important)
- [ ] Identify existing patterns, conventions, and architectural decisions
- [ ] Ask clarifying questions if requirements are ambiguous — **do not assume**
- [ ] Check the Resource Index (`resources/RESOURCE-INDEX.md`) for applicable resources

**Output:** Mental model of the task. No code yet.

---

## Step 2: Plan

**Goal:** Draft a focused, minimal plan.

- [ ] List the exact files that will be created, modified, or deleted
- [ ] Describe each change in 1–2 sentences
- [ ] Identify potential risks, edge cases, or breaking changes
- [ ] Present the plan to the user for approval before proceeding

**Scope Control Rule:** Only files listed in the plan may be touched during Code step.

**Output:** A clear, numbered plan with file paths.

---

## Step 3: Code

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

## Step 4: Verify

**Goal:** Verify correctness like a skeptical senior dev.

- [ ] Code compiles/builds without errors
- [ ] No linting warnings or type errors
- [ ] Test the feature manually or via automated tests
- [ ] Review for bugs, edge cases, and security issues
- [ ] Verify changes match the original request — nothing more, nothing less

**Verification commands:** Use `package.json` scripts if present (lint, build, test). Otherwise, choose typical commands for the project's language and framework.

**If any check fails:** Fix before proceeding. Do not skip.

**Output:** Verified, working code.

---

## Step 5: Audit

**Goal:** Elevate from "works" to "production-quality."

- [ ] Apply design resource refinements if UI is involved
- [ ] Ensure responsive behavior across breakpoints
- [ ] Review accessibility (keyboard nav, ARIA labels, contrast)
- [ ] Clean up: remove console.logs, commented code, unused imports
- [ ] Run the Quality Audit Checklist (below)
- [ ] Summarize what changed and why

**Output:** Production-quality, documented code.

---

## Quality Audit Checklist

Run this before marking any task as complete:

### Functionality
- [ ] Feature works as specified
- [ ] Edge cases are handled
- [ ] Loading/empty/error states exist (if data-touching)
- [ ] No regressions in existing features

### UX (if applicable)
- [ ] Visual design feels premium, not basic
- [ ] Interactions are smooth and responsive
- [ ] Typography hierarchy is clear

### Performance
- [ ] No unnecessary re-renders
- [ ] Images are optimized
- [ ] Bundle size is reasonable

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (ARIA labels)
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Focus indicators are visible

---

## Hard Rules (Governor Mode)

These rules are **non-negotiable** and override any conflicting instruction.

### Rule 1: No Coding Before PLAN
EXPLORE must complete before PLAN. PLAN must complete before CODE. If you catch yourself writing code before there's an approved plan, stop and go back to EXPLORE.

### Rule 2: Only Modify Files Listed in PLAN
Every file you touch must appear in the PLAN step. If you discover a file that needs changing during CODE, stop and amend the plan first.

### Rule 3: End with VERIFY + AUDIT
Every task must end with VERIFY (tests/lint/build) and AUDIT (quality checklist). Never mark a task done without running the quality audit.

### Rule 4: Max 2 Active Resources Per Task
1 PRIMARY + 1 SUPPORT maximum. If more are requested, refuse and ask the user to pick. This prevents context overload and conflicting guidance.

### Rule 5: Print Status Banner on Every Response
At the start of every response, print the canonical banner (see `prompts/ACTIVATE.md` for format).

### Rule 6: ENGINE Is Always EPCC
There is exactly one engine: EPCC. Workflow protocols (if you add them as resources) are PRIMARY resources that add PHASE gates inside the engine steps — they are not separate engines.

### Rule 7: Active vs Reference-Only Resources
- **Active** = loaded and applied to every decision (max 2).
- **Reference-only** = can be consulted for a specific lookup, but does NOT influence ongoing decisions.
- All resources not explicitly activated are reference-only by default.
