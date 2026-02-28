# 🧰 Community Skills Library — External Skill Toolbox

> **Version:** v3.1 — 2026-02-28
> **Type:** External Library Reference (NOT part of core `.ai-kit` kit)
> **Source:** `<your-repo>/community-skills-library` (private reference only — do NOT embed URLs in public kit files)
> **Skills count:** 950+ agentic skills across 9 categories

---

## What This Is

**Community Skills Library** is an external, community-maintained library of 950+ agentic skills for AI coding agents (Claude Code, Gemini CLI, Cursor, Copilot, etc.). Each skill is a small markdown file (SKILL.md) that teaches the agent a specific capability — from `@brainstorming` to `@stripe-integration` to `@vulnerability-scanner`.

**This file is a reference adapter.** It tells our governor system how to interact with the external library safely. The library itself is installed separately and is NOT cloned or copied into this repo.

---

## Core Rule

> **External skills are REF-ONLY unless explicitly allowlisted for the current task via `SKILLS-ALLOWLIST.md`.**

This means:
- ✅ You may **read** any skill's SKILL.md for reference
- ✅ You may **suggest** skills from the library
- ❌ You may NOT **invoke** or **apply** a skill's patterns unless it appears in the active `SKILLS-ALLOWLIST.md`
- ❌ You may NOT invoke more than **3 external skills per task**

---

## Installation Paths

The external library is installed independently of this `.ai-kit` kit. Supported paths:

| Scope | Path | When to Use |
|-------|------|-------------|
| **Global (Agent)** | `~/.gemini/community/skills/` | Default. Skills available across all projects. |
| **Workspace** | `.agent/skills/` or `.gemini/skills/` | Project-specific. Skills scoped to this repo. |

### Install (one-time)
```bash
npx community-skills-library
# Default: ~/.gemini/community/skills/
# Custom: npx community-skills-library --path .agent/skills/
```

### Update
```bash
npx community-skills-library  # Re-run in same path to update
```

### Verify
```bash
test -d ~/.gemini/community/skills && echo "Skills installed"
```

---

## Invocation Pattern

Skills are invoked via the **`@skill-name`** pattern. This is tool-agnostic:

```
"Use @brainstorming to plan the MVP scope."
"Run @lint-and-validate on this file."
"Apply @react-patterns to refactor this component."
```

| Tool | Invocation Style |
|------|-----------------|
| Claude Code | `>> /skill-name help me...` |
| Gemini CLI | `Use @skill-name to...` |
| Cursor | `@skill-name (in Chat)` |
| Community | `(Agent Mode) Use @skill-name...` |

---

## Safety Policy

Every skill in the library has a **risk** and **source** classification from `skills_index.json`:

| Risk Level | Meaning | Policy |
|------------|---------|--------|
| `safe` | Vetted, no side effects | ✅ May be allowlisted freely |
| `unknown` | Community-contributed, not fully vetted | ⚠️ **Ask user before using** |
| `high` | Potentially destructive (security tools, infra changes) | 🛑 **Require explicit user approval per invocation** |

| Source | Meaning |
|--------|---------|
| `personal` | Author-created, higher trust |
| `community` | Community-contributed, standard vetting |
| `<license>` | Third-party with specific license |

### Default: SAFE-only

Unless the user explicitly approves, the agent must:
1. Only suggest skills with `risk: safe`
2. If a skill has `risk: unknown` or is unlisted, print: `⚠️ Skill "@X" has unknown risk. Approve before I use it?`
3. Never silently invoke a high-risk skill

---

## Integration With Our Governor System

| Governor Principle | How External Skills Comply |
|-------------------|---------------------------|
| **EPCC Engine** | Skills map to EPCC steps (see `AWESOME-SKILLS-WORKFLOWS.md`) |
| **Max 2 active resources** | External skills are NOT resources. They don't count toward PRIMARY/SUPPORT. |
| **Decision Gates** | Skill Selection Gate (Gate H) triggers when external skills are requested |
| **Explicit banner** | Allowlisted skills appear in banner under `EXT-SKILLS:` |
| **No saturation** | Max 3 external skills per task, enforced by `SKILLS-ALLOWLIST.md` |

---

## Key Concepts

### Bundles
Role-based starter packs that recommend 5–12 skills per role. **Bundles are recommendations, not activations.** See `AWESOME-SKILLS-BUNDLES.md`.

### Workflows
Multi-skill playbooks for concrete goals (e.g., Ship SaaS MVP, Security Audit). Each step maps to EPCC. See `AWESOME-SKILLS-WORKFLOWS.md`.

### Risk Metadata
Every skill has `risk` and `source` fields in `skills_index.json`. Our governor uses these to enforce the safety policy above.

---

## Related Files

| File | Purpose |
|------|---------|
| `AWESOME-SKILLS-BUNDLES.md` | Curated bundle summaries for web/SaaS roles |
| `AWESOME-SKILLS-WORKFLOWS.md` | EPCC-mapped workflow playbooks |
| `../prompts/SKILLS-ALLOWLIST.md` | Per-task template filled via Skill Selection Gate |
| `../prompts/DECISION-GATES.md` | Gate H: Skill Selection Gate |
