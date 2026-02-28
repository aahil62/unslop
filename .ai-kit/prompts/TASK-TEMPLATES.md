# 📋 Task Templates

> **Version:** v3.2 — 2026-02-28
> **Purpose:** 6 reusable task templates users can copy into issues, prompts, or `tasks/todo.md`. Each template follows EPCC and integrates with Decision Gates where needed.
> **Usage:** Copy a template, fill in the blanks, and hand it to the agent.

---

## 1. Feature Build (EPCC)

```markdown
# Task: [Feature Name]

## EXPLORE
- [ ] Read user request — identify wants and constraints
- [ ] Scan relevant files (3–5 max)
- [ ] Run Decision Gates if keywords trigger (see DECISION-GATES.md)

## PLAN
- [ ] List files to create / modify / delete
- [ ] Describe each change (1–2 sentences)
- [ ] Identify risks and edge cases
- [ ] Present plan to user for approval

## CODE
- [ ] Implement plan — no placeholders, no TODOs
- [ ] Handle loading, empty, and error states
- [ ] Follow existing codebase patterns

## VERIFY
- [ ] Lint: `npm run lint` (zero errors)
- [ ] Build: `npm run build` (zero warnings)
- [ ] Manual QA at localhost
- [ ] Edge cases tested

## AUDIT
- [ ] Matches original request — nothing more, nothing less
- [ ] Accessibility: keyboard nav, contrast, ARIA labels
- [ ] Performance: no layout shifts, images lazy-loaded
- [ ] Lesson entry if unexpected issues occurred
```

---

## 2. Bug Fix (Debug Protocol)

```markdown
# Task: Fix [Bug Description]

## REPRODUCE
- [ ] Confirm the bug exists locally
- [ ] Identify exact steps to reproduce
- [ ] Note expected vs actual behavior

## DIAGNOSE
- [ ] Read error logs / stack trace
- [ ] Identify root cause (not symptoms)
- [ ] Narrow to specific file(s) and line(s)

## FIX
- [ ] Implement minimal fix at root cause
- [ ] No temporary workarounds — fix properly
- [ ] Only touch necessary files

## VERIFY
- [ ] Bug no longer reproduces
- [ ] No regressions in related features
- [ ] Lint + build pass
- [ ] Write test to prevent recurrence (if test framework exists)

## AUDIT
- [ ] Fix is minimal and focused
- [ ] Lesson entry with root cause and prevention rule
```

---

## 3. Refactor (Small Diffs + Verify)

```markdown
# Task: Refactor [Component / Module]

## EXPLORE
- [ ] Identify code smell or improvement target
- [ ] Map all callers / dependents of the code being refactored
- [ ] Ensure no behavior change is intended

## PLAN
- [ ] List exact files to touch
- [ ] Describe each change — must be behavior-preserving
- [ ] Identify highest-risk changes

## CODE
- [ ] Small diffs — one logical change per commit
- [ ] Run tests after each change
- [ ] If any test fails, stop and fix before continuing

## VERIFY
- [ ] All existing tests pass
- [ ] No new warnings or errors
- [ ] Behavior is identical pre/post refactor
- [ ] Diff is minimal and reviewable

## AUDIT
- [ ] Code is cleaner / more maintainable
- [ ] No unintended side effects
```

---

## 4. UI Polish Pass

```markdown
# Task: Polish [Page / Component]

## EXPLORE
- [ ] Load locked design tokens from DECISIONS-LOCKED.md
- [ ] Identify visual gaps vs design spec
- [ ] List components needing attention

## PLAN
- [ ] Rank components by visual impact
- [ ] List specific changes (spacing, colors, radius, typography, animation)
- [ ] Confirm changes match locked UI lane

## CODE
- [ ] Apply token-based fixes (no magic numbers)
- [ ] Add micro-animations where appropriate
- [ ] Ensure responsive at 375px, 768px, 1024px, 1440px

## VERIFY
- [ ] Visual match to locked lane description
- [ ] Accessibility: contrast, keyboard nav, ARIA
- [ ] No layout shifts or performance regressions
- [ ] Reduced-motion respected

## AUDIT
- [ ] Premium feel — not basic
- [ ] Typography hierarchy is clear
- [ ] Color palette is harmonious
```

---

## 5. Reliability Pass

```markdown
# Task: Reliability Review for [Feature / Module]

## EXPLORE
- [ ] Identify error-prone paths (API calls, DB queries, auth flows)
- [ ] Check existing error handling patterns
- [ ] Review logging and monitoring

## PLAN
- [ ] List each error path and its current handling
- [ ] Propose improvements: retry, circuit breaker, graceful degradation
- [ ] Prioritize by user impact

## CODE
- [ ] Add proper error handling for each path
- [ ] Ensure all data-touching components have loading/empty/error states
- [ ] Add structured logging for failures
- [ ] Add retry with backoff where appropriate

## VERIFY
- [ ] Simulate failures — does the app degrade gracefully?
- [ ] Error messages are user-facing and actionable
- [ ] No unhandled promise rejections or uncaught exceptions
- [ ] Build + lint pass

## AUDIT
- [ ] No failure mode crashes the app
- [ ] Users see helpful messages, not stack traces
- [ ] Lesson entry if new failure modes discovered
```

---

## 6. Release / Ship Checklist

```markdown
# Task: Ship [Feature / Version]

## PRE-FLIGHT
- [ ] All planned features are complete and verified
- [ ] Decision Report exists and all decisions are locked
- [ ] No TODOs, no placeholders, no commented-out code
- [ ] LESSONS-LEARNED.md reviewed for relevant entries

## BUILD
- [ ] `npm run lint` — zero errors
- [ ] `npm run build` — zero warnings
- [ ] `npm run preview` — manual QA passes
- [ ] Tests pass (if test framework exists)

## REVIEW
- [ ] Diff is reviewable — small, focused commits
- [ ] No unintended files in the changeset
- [ ] Accessibility checklist passes
- [ ] Performance: LCP < 2.5s, CLS < 0.1

## SHIP
- [ ] Commit with clear, descriptive message
- [ ] Push to appropriate branch
- [ ] Summarize what changed and why
- [ ] Note any follow-up items or known limitations

## POST-SHIP
- [ ] Verify deployment is live and functional
- [ ] Monitor for errors in first 30 minutes
- [ ] Append lesson entry if anything unexpected happened
```

---

## Related Files

| File | Purpose |
|------|---------|
| `WORKFLOW.md` | EPCC engine these templates follow |
| `DECISION-GATES.md` | Gates triggered during EXPLORE/PLAN |
| `LESSONS-LEARNED.md` | Post-task learning capture |
| `SUBAGENTS.md` | Delegation guide for EXPLORE/VERIFY steps |
