# 📖 User Guide — AI-Kit Governor System

> **Version:** v3.3 — 2026-02-28
> **Audience:** You — the person using this kit to build things with AI coding agents.

---

## What This Kit Is (30-Second Summary)

Your `.ai-kit/` folder is a **governance layer** for any AI coding agent. It forces the agent to:

1. **Ask before guessing** — no silent assumptions on design, auth, architecture, or scope
2. **Work in phases** — EXPLORE → PLAN → CODE → VERIFY → AUDIT (the EPCC engine)
3. **Stay focused** — max 2 active resources at a time (1 PRIMARY + 1 SUPPORT)
4. **Lock decisions** — choices are persisted so they survive across sessions
5. **Polish output** — mandatory quality checklists before shipping

It works with **any** AI coding agent — Claude Code, Cursor, Gemini, Copilot, etc.

---

## What You Should Pay Attention To

### 🟢 Files You'll Actually Use

| File | When | What You Do |
|------|------|-------------|
| `START.md` | Beginning of any task | Pick a template (A–J) or type `START_MENU` |
| `ACTIVATE.md` | Need a specific command | Scan the command list, paste the exact phrase |
| `DECISION-GATES.md` | Agent asks you questions | Answer the gate questions (max 8 per round) |
| `DECISIONS-LOCKED.md` | After gates finish | Review locked decisions — this persists across sessions |
| `LESSONS-LEARNED.md` | After something breaks | Read the entries relevant to your project |

### 🟡 Files Worth Knowing About (but rarely touched)

| File | Purpose |
|------|---------|
| `AGENTS.md` | The agent's "brain" — rules, identity, standards. You rarely edit this. |
| `WORKFLOW.md` | The EPCC engine rules (22 hard rules). The agent follows these automatically. |
| `RESOURCE-INDEX.md` | Master catalog of all resources. Check here to find what's available. |
| `TASK-TEMPLATES.md` | 6 pre-built task checklists. Use `OPEN_TASK_TEMPLATES` to browse. |
| `SUBAGENTS.md` | How the agent delegates sub-tasks. Useful for complex multi-file work. |

### 🔴 Files You Can Safely Ignore

| File | Why |
|------|-----|
| `README.md` | Kit setup docs — only relevant when copying to a new project |
| `USAGE-LOG.md` | Activation tracker — mostly for audit purposes |
| `SKILLS-ALLOWLIST.md` | Template filled by the agent, not you |
| `DECISION-REPORT.md` | Template the agent fills — you just review the output |
| `resources/external/sources/*` | Your source snapshots — the cards summarize these |

---

## The 5 Things to Remember

### 1. Start with a Template

Don't invent your own start sequence. Use `START_MENU` to see all 10 templates:

| Template | Best For |
|----------|----------|
| **A** Universal Boot | New project or onboarding |
| **B** Backend-Heavy SaaS | Greenfield backend build |
| **C** Dashboard Feature | Admin panels, analytics |
| **D** Landing Page | Premium animated landing |
| **E** UI Polish | Refining existing UI |
| **F** Reliability Pass | Error handling, resilience |
| **G** Debug | Persistent, multi-file bugs |
| **H** Ship-Ready QA | Final polish before deploy |
| **I** Landing (Illustrated BG) | Landing page needing custom background |
| **J** Landing Copy + Deliverables | Multi-page site needing scope + copy first |

### 2. The Agent Will Ask You Questions — Answer Them

When Decision Gates trigger, the agent will ask up to 8 questions per round. These aren't optional — they prevent the agent from guessing.

**Your options:**
- **Answer normally** — the agent locks your choices and moves on
- **Say `"INPUTS ARE FIXED, SKIP GATES."`** (exact phrase) — skips remaining gates
- **Provide references** — "make it look like [URL]" lets Gate D extract the lane for you

### 3. Max 2 Active Resources

The agent can only hold 2 resources in active memory:
- **1 PRIMARY** — drives the main decisions
- **1 SUPPORT** — adds specialized capabilities

Everything else is **REF-ONLY** (can be consulted but doesn't influence decisions).

If you try to activate 3+, the agent will refuse and ask you to pick 2.

### 4. Decisions Persist

Once gates are resolved, decisions are locked to `DECISIONS-LOCKED.md`. This means:
- Next session, the agent can reload your choices without re-asking
- Changing a locked decision requires re-running the relevant gate
- The escape hatch (`"INPUTS ARE FIXED, SKIP GATES."`) works per-task

### 5. Everything Is Append-Only

The kit grows by adding patches, never by rewriting. This means:
- You might see "deprecated" sections still in files — that's intentional
- The latest patch always wins
- Version labels (v1.0 → v3.3) track what changed when

---

## Common Workflows

### "I want to build a landing page"

1. Type: `START_MENU` → pick **D** (Landing Page)
2. Agent activates Landing-Page-System + Design Tokens
3. Agent asks Gate D questions (UI lane, dark/light, color temp, references)
4. Agent asks Gate E questions (spacing, fonts, radius, colors)
5. Agent asks Gate F questions (motion level, library, patterns)
6. You answer → agent locks decisions → proceeds to PLAN

### "I want to fix a bug"

1. Type: `START_MENU` → pick **G** (Debug)
2. Agent activates Structured Debugger + Error-Handling-Patterns
3. No Decision Gates (debugging is procedural, not choice-heavy)
4. Agent goes straight to EXPLORE → diagnoses → fixes → verifies

### "I want to use external skills"

1. Type: `PICK_BUNDLE` → agent suggests a bundle based on your task
2. Type: `PICK_SKILLS` → agent recommends max 3 skills with risk levels
3. Approve the selection → agent locks to `SKILLS-ALLOWLIST.md`
4. Only allowlisted skills can be invoked during the task

### "I want to polish my UI"

1. Type: `START_MENU` → pick **E** (UI Polish)
2. Agent activates Design Tokens + Design-Elements
3. If tokens aren't locked yet → Gate D + E questions
4. During AUDIT → agent runs anti-slop checklist automatically (Rule 22)

---

## Glossary

| Term | Meaning |
|------|---------|
| **EPCC** | Explore → Plan → Code → Check (+ Verify + Audit). The engine. Always running. |
| **ENGINE** | EPCC. There's only one. Always EPCC. |
| **WORKFLOW PROTOCOL** | Optional overlay (Phased-Build or Agentic-Dev-Workflow) that adds phases inside EPCC |
| **PRIMARY** | The main active resource (max 1) |
| **SUPPORT** | The secondary active resource (max 1) |
| **REF-ONLY** | Can be consulted but doesn't drive decisions |
| **Decision Gate** | A set of questions the agent must ask before PLAN |
| **Decision Report** | Summary of all locked decisions — printed before PLAN |
| **DECISIONS-LOCKED.md** | Persistent file storing locked decisions across sessions |
| **Gate A–H** | Specific decision gates: A=Product, B=Backend, C=Arch, D=UI, E=Tokens, F=Motion, G=Verify, H=Skills |
| **Escape Hatch** | Exact phrase `"INPUTS ARE FIXED, SKIP GATES."` to bypass gates |
| **Resource Card** | A modular file describing one resource's rules, outputs, and decision gates |
| **Banner** | Status block printed at start of every agent response |

---

## Quick Command Reference

| Command | What It Does |
|---------|-------------|
| `START_MENU` | Show all 10 start templates |
| `START_RECOMMEND` | Agent recommends best template for your task |
| `SHOW_ACTIVE_RESOURCES` | Print current PRIMARY, SUPPORT, step, scope |
| `SHOW_DECISION_STATE` | Print which gates are done vs pending |
| `RUN_DECISION_GATES` | Force-run all applicable gates |
| `GENERATE_DECISION_REPORT` | Print full decision report |
| `LOCK_DECISIONS` | Write locked decisions to DECISIONS-LOCKED.md |
| `RUN_SUBAGENT <type>` | Delegate work (explore/audit/polish/custom) |
| `APPEND_LESSON` | Log a lesson after something unexpected |
| `OPEN_TASK_TEMPLATES` | Browse the 6 task template types |
| `PICK_BUNDLE` | Suggest a bundle from external skills |
| `PICK_SKILLS` | Recommend max 3 external skills |
| `SHOW_SKILLS_ALLOWLIST` | Print current skills allowlist |
| `APPLY_SKILLS_ALLOWLIST` | Lock the skills allowlist |
| `RECOMMEND_RESOURCES_FOR_TASK` | Suggest PRIMARY + SUPPORT for your task |
| `APPLY_DELIVERABLES_SPEC` | Run deliverables spec gate |
| `GENERATE_PAGE_COPY` | Run content architecture gate |
| `SPEC_COMPONENT_LOGIC` | Run component logic gate |
| `RUN_INSPIRATION_TO_LANE` | Force Gate D with lane selection |
| `RUN_ANTI_SLOP_POLISH` | Force anti-slop polish gate |
| `EXTRACT_REFERENCE_STYLE` | Extract styles from a reference |
