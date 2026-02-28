# 🃏 Resource Card: Agentic Dev Workflow

> **Domain:** Workflow
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A skill-based development workflow that enforces structured collaboration between the user and agent: requirements discovery, detailed planning, test-driven implementation, delegated sub-tasks, and systematic code review.

## Authority Level
`SUPPORT`

## When to use it
- When you want the agent to follow a structured discover → plan → implement → review cycle
- When implementing test-driven development (Red-Green-Refactor) on a feature
- When you need multi-agent/subagent orchestration for parallelized development

## Outputs
- Design documents from structured discovery sessions
- Implementation plans broken into small, verifiable tasks
- Code review reports with severity-categorized issues
- Isolated development branches for parallel work

## Activation phrase
```
Activate Agentic Dev Workflow for this development task.
```

## Conflicts / Overlaps
- **Overlaps with** Dev-Workflow (EPCC) and Phased Build — Agentic Dev Workflow is a *skill-triggered* workflow; EPCC and Phased Build are *protocol-driven* workflows. Do not run two workflow systems simultaneously as PRIMARY.
- **Complements** any UI/design resource as SUPPORT for the development process layer.

## Extracted Rules

### 1. Discover Before Building
Never jump into code. Explore requirements through conversation, present the spec in reviewable chunks, and get explicit sign-off before planning.

### 2. Plans Must Be Unambiguous
Implementation plans should be detailed enough that someone with no project context could follow them. Include exact file paths, complete code snippets, and verification steps for every task.

### 3. Test-Driven Development Is Required
Write the failing test first, confirm it fails, write the minimal code to make it pass, then refactor. Code written without a preceding test gets deleted.

### 4. Subagent Isolation
Each engineering task gets a fresh execution context with a two-stage review: first check spec compliance, then check code quality.

### 5. Review Between Tasks
After each task, review the work against the plan. Critical issues block progress. Acknowledge what went well before highlighting problems.

### 6. Evidence Over Assertions
Verify before declaring success. Run the tests, check the output, confirm the behavior. "It should work" is not evidence.
