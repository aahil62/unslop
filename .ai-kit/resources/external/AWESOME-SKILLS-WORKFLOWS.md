# 🔄 Awesome Skills — EPCC-Mapped Workflow Playbooks

> **Version:** v3.1 — 2026-02-28
> **Source:** `<your-repo>/community-skills-library` (private reference only)
> **Rule:** Max 3 external skills per task. Each step below suggests 1–3 skills — pick only what you need and allowlist them.

---

## What Workflows Are

- **Bundles** tell you which skills are relevant for a role.
- **Workflows** tell you how to use those skills **in sequence** to complete a concrete goal.
- If bundles are your toolbox, workflows are your **execution playbook**.

Each workflow step below is mapped to an **EPCC engine label** so it integrates cleanly with our governor system.

---

## Workflow 1: Ship a SaaS MVP

**Goal:** Build and ship a minimal but production-minded SaaS product.
**Related bundles:** `Essentials`, `Full-Stack Developer`, `QA & Testing`, `DevOps & Cloud`

| # | Step | EPCC Label | Suggested Skills (pick 1–3) | Output Artifacts |
|---|------|------------|----------------------------|-----------------|
| 1 | **Plan the scope** | `EXPLORE` | `@brainstorming`, `@concise-planning`, `@writing-plans` | MVP scope doc, acceptance criteria, milestone list |
| 2 | **Build backend and API** | `PLAN → CODE` | `@backend-dev-guidelines`, `@api-patterns`, `@database-design` | API routes, schema migrations, auth baseline |
| 3 | **Build frontend** | `CODE` | `@frontend-developer`, `@react-patterns`, `@frontend-design` | Core user flow, onboarding, dashboard shell |
| 4 | **Test and validate** | `VERIFY` | `@test-driven-development`, `@browser-automation`, `@e2e-testing-patterns` | Unit tests, E2E test suite, coverage report |
| 5 | **Ship safely** | `VERIFY → AUDIT` | `@deployment-procedures`, `@observability-engineer` | Deploy checklist, rollback plan, monitoring dashboard |

### How to Run This Workflow

1. **Before starting:** Run Decision Gates (A + B + C + G minimum) to lock product scope, auth model, and deployment target.
2. **At each step:** Allowlist max 3 skills via `SKILLS-ALLOWLIST.md`. Invoke only allowlisted skills.
3. **Between steps:** Verify the output artifact exists before moving to the next step.
4. **On completion:** Run the Quality Audit Checklist from `WORKFLOW.md` Phase 6.

---

## Workflow 2: Security Audit for a Web App

**Goal:** Run a focused security review from scope definition to remediation validation.
**Related bundles:** `Security Engineer`, `Security Developer`, `Observability & Monitoring`

| # | Step | EPCC Label | Suggested Skills (pick 1–3) | Output Artifacts |
|---|------|------------|----------------------------|-----------------|
| 1 | **Define scope and threat model** | `EXPLORE` | `@ethical-hacking-methodology`, `@threat-modeling-expert`, `@attack-tree-construction` | Asset inventory, trust boundary map, attack tree |
| 2 | **Review auth and access control** | `PLAN → CODE` | `@broken-authentication`, `@auth-implementation-patterns`, `@idor-testing` | Auth findings report, IDOR test results |
| 3 | **Assess API and input security** | `CODE → VERIFY` | `@api-security-best-practices`, `@api-fuzzing-bug-bounty`, `@top-web-vulnerabilities` | API vuln report, injection test results |
| 4 | **Harden and verify** | `VERIFY → AUDIT` | `@security-auditor`, `@sast-configuration`, `@verification-before-completion` | Remediation evidence, SAST config, sign-off |

### Safety Note

> ⚠️ Many security skills have `risk: unknown` in `skills_index.json`. Before using skills like `@ethical-hacking-methodology` or `@burp-suite-testing`, the agent **must** ask for user approval per the safety policy in `AWESOME-SKILLS.md`.

---

## Workflow 3: Build an AI Agent System

**Goal:** Design and ship an AI agent with tool use, evaluation, and observability.
**Related bundles:** `Agent Architect`, `LLM Application Developer` *(not fully detailed in this kit — bundle exists in external repo)*

| # | Step | EPCC Label | Suggested Skills (pick 1–3) | Output Artifacts |
|---|------|------------|----------------------------|-----------------|
| 1 | **Define agent scope** | `EXPLORE` | `@brainstorming`, `@concise-planning` | Agent persona doc, tool inventory |
| 2 | **Build agent core** | `PLAN → CODE` | `@rag-engineer`, `@prompt-engineer`, `@langgraph` | Agent implementation, tool definitions |
| 3 | **Evaluate and iterate** | `VERIFY` | `@agent-evaluation`, `@test-driven-development` | Eval results, test suite |
| 4 | **Deploy with observability** | `VERIFY → AUDIT` | `@observability-engineer`, `@deployment-procedures` | Deploy pipeline, monitoring config |

---

## Related Files

| File | Purpose |
|------|---------|
| `AWESOME-SKILLS.md` | Safety policy, install paths, invocation patterns |
| `AWESOME-SKILLS-BUNDLES.md` | Role-based bundle recommendations |
| `../prompts/SKILLS-ALLOWLIST.md` | Per-task allowlist template |
| `../prompts/WORKFLOW.md` | EPCC engine definition |
