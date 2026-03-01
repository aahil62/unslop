# 📊 System Status Report — AI-Kit Governor Resync Audit

> Generated snapshot; may be outdated. Canonical truth lives in `.ai-kit/CANONICAL.md`.
> Do not use this file to resolve conflicts. Use `.ai-kit/CANONICAL.md` and `.ai-kit/CURRENT-VIEW.md`.

> **Audit date:** 2026-02-28
> **Scope:** Full read of all 45 files in `.ai-kit/`
> **Method:** Rebuilt understanding solely from repo files — no memory carryover
> **Versions audited:** v1.0 → v1.1 → v1.2 → v1.3 → v1.4 → v3 → v3.1 → v3.2 → v3.3

---

## 1. Overall Verdict

> [!IMPORTANT]
> **SYSTEM IS COHERENT.** The governance layer (EPCC engine, max-2 active resources, Decision Gates, question budget, escape hatch, no-guessing policy) is consistent across all files. No structural contradictions found. Minor drift items exist and are documented below.

---

## 2. File Map

### Tree (45 items)

```
.ai-kit/
├── AGENTS.md                          ← Agent brain (identity, rules, v1.1→v3.2 patches)
├── README.md                          ← Kit overview + setup (v2.0 — STALE tree)
├── prompts/
│   ├── ACTIVATE.md                    ← Activation phrases + commands (v1.0→v3.3)
│   ├── DECISION-GATES.md             ← Gates A–H + trigger heuristics (v3→v3.3)
│   ├── DECISION-REPORT.md            ← Template for locked decisions (v3+v3.1)
│   ├── LESSONS-LEARNED.md            ← Post-task lesson log (v3.2, empty)
│   ├── SKILLS-ALLOWLIST.md           ← Per-task external skill template (v3.1, empty)
│   ├── START.md                       ← Start templates A–J (v1.4+v3.3)
│   ├── SUBAGENTS.md                  ← Delegation guide (v3.2)
│   ├── TASK-TEMPLATES.md             ← 6 reusable EPCC templates (v3.2)
│   ├── USAGE-LOG.md                  ← Task activation tracker (1 entry)
│   └── WORKFLOW.md                    ← EPCC engine + Rules 1–22 (v1.0→v3.3)
├── resources/
│   ├── RESOURCE-INDEX.md             ← Master index + classification (v1.0→v3.3)
│   ├── cards/                         ← v3.3 resource cards (7 files)
│   │   ├── anti-ai-slop-details.md
│   │   ├── component-logic-spec.md
│   │   ├── content-architecture.md
│   │   ├── deliverables-specs.md
│   │   ├── landing-bg-asset-pipeline.md
│   │   ├── reference-style-extraction.md
│   │   └── ui-inspiration-to-lane.md
│   └── external/
│       ├── AWESOME-SKILLS.md         ← External library reference (v3.1)
│       ├── AWESOME-SKILLS-BUNDLES.md ← Curated bundles (v3.1)
│       ├── AWESOME-SKILLS-WORKFLOWS.md ← EPCC-mapped playbooks (v3.1)
│       ├── EXTERNAL-RESOURCE-REGISTRY.md ← 7 external resources (v1.0→v1.3)
│       ├── cards/                     ← 7 external resource cards
│       │   ├── phased-build-protocol.md
│       │   ├── glassmorphism-reference.md
│       │   ├── design-tokens.md
│       │   ├── agentic-dev-workflow.md
│       │   ├── design-system-framework.md
│       │   ├── design-search-toolkit.md
│       │   └── structured-debugger.md
│       └── sources/                   ← Your source snapshots (add your own)
│           └── README.md
```

### File Purpose Summary

| File | Lines | Purpose | Last Patch |
|------|-------|---------|------------|
| `AGENTS.md` | 210 | Agent identity, rules, auto-load corrections, max-2 enforcement | v3.2 |
| `README.md` | 44 | Kit setup instructions + tree diagram | v2.0 ⚠️ |
| `ACTIVATE.md` | 663 | Activation phrases, banner format, commands (26 total) | v3.3 |
| `DECISION-GATES.md` | 668 | Gates A–H, trigger heuristics, 2 simulations | v3.3 |
| `DECISION-REPORT.md` | 166 | Template + external skills section | v3.1 |
| `LESSONS-LEARNED.md` | 45 | Lesson template + categories (no entries yet) | v3.2 |
| `SKILLS-ALLOWLIST.md` | 65 | Per-task allowlist template (unfilled) | v3.1 |
| `START.md` | 228 | 10 start templates (A–J) | v3.3 |
| `SUBAGENTS.md` | 172 | Delegation guide + 3 examples | v3.2 |
| `TASK-TEMPLATES.md` | 225 | 6 task templates (Feature/Bug/Refactor/Polish/Reliability/Ship) | v3.2 |
| `USAGE-LOG.md` | 10 | Activation log (1 entry) | v1.0 |
| `WORKFLOW.md` | 365 | EPCC engine + 22 hard rules | v3.3 |
| `RESOURCE-INDEX.md` | 478 | Master index: 10 core + 7 external + 7 v3.3 cards | v3.3 |
| `EXTERNAL-RESOURCE-REGISTRY.md` | 31 | 7 external resources table | v1.3 |
| `AWESOME-SKILLS.md` | 135 | External skills library reference | v3.1 |
| `AWESOME-SKILLS-BUNDLES.md` | 150 | 7 role-based bundles | v3.1 |
| `AWESOME-SKILLS-WORKFLOWS.md` | 81 | 3 EPCC-mapped playbooks | v3.1 |
| sources/README.md | varied | Template for adding your own source snapshots | v3.5 |

---

## 3. Invariant Checks

These are the non-negotiable rules that must hold true across ALL files:

| # | Invariant | Status | Evidence |
|---|-----------|--------|----------|
| 1 | EPCC is the ONLY engine | ✅ PASS | `WORKFLOW.md` Rule 8, `AGENTS.md` v1.3, `ACTIVATE.md` v1.2 all confirm ENGINE=EPCC always |
| 2 | Max 2 ACTIVE resources (1 PRIMARY + 1 SUPPORT) | ✅ PASS | Enforced in `AGENTS.md` Rules v1.3+v3, `WORKFLOW.md` Rule 4, `ACTIVATE.md` v1.3, `START.md` all 10 templates, `RESOURCE-INDEX.md` v1.3 |
| 3 | Decision Gates are workflow logic, not resources | ✅ PASS | `WORKFLOW.md` Rule 11, `DECISION-GATES.md` Rule 6, `ACTIVATE.md` v3 |
| 4 | Escape hatch = exact phrase only | ✅ PASS | Consistent in `WORKFLOW.md` Rule 15, `DECISION-GATES.md` Rule 5, simulation 2 |
| 5 | Question budget = max 8/round | ✅ PASS | `WORKFLOW.md` Rule 13, `DECISION-GATES.md` Rule 7, `RESOURCE-INDEX.md` v3, `AGENTS.md` v3 |
| 6 | Banner mandatory on every response | ✅ PASS | `WORKFLOW.md` Rule 5, `ACTIVATE.md` v1.2 canonical format |
| 7 | No coding before PLAN | ✅ PASS | `WORKFLOW.md` Rule 1 |
| 8 | Defaults policy: only from explicit constraints | ✅ PASS | `WORKFLOW.md` Rule 14, `DECISION-GATES.md` Rule 4 |
| 9 | External skills REF-ONLY unless allowlisted | ✅ PASS | `WORKFLOW.md` Rule 16, `AWESOME-SKILLS.md`, `ACTIVATE.md` v3.1 |
| 10 | Max 3 external skills per task | ✅ PASS | `WORKFLOW.md` Rule 16, `SKILLS-ALLOWLIST.md`, `AWESOME-SKILLS.md` |

---

## 4. Discrepancies Found

### 4A. Drift Items (cosmetic, no governance impact)

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| D1 | `README.md` | Tree diagram is stale (v2.0): missing `DECISION-GATES.md`, `DECISION-REPORT.md`, `SKILLS-ALLOWLIST.md`, `START.md`, `SUBAGENTS.md`, `TASK-TEMPLATES.md`, `LESSONS-LEARNED.md`, `resources/cards/`, `AWESOME-SKILLS*.md` | Low | Append updated tree in v3.4 patch |
| D2 | `README.md` | Version says "2.0" but system is at v3.3 | Low | Update version header |
| D3 | `USAGE-LOG.md` | Only 1 entry from initial setup; no subsequent activations logged | Low | Not a bug — just unused. No fix needed. |
| D4 | `RESOURCE-INDEX.md` line 3 | "Last updated: 2026-02-25" — should reflect v3.3 date | Low | Update date |

### 4B. Terminology Drift (resolved by patches, original text preserved)

| # | File | Issue | Status |
|---|------|-------|--------|
| T1 | `ACTIVATE.md` line 206 | Banner template shows `ENGINE: [EPCC / Phased-Build / Agentic-Dev-Workflow]` | ⚠️ Superseded by v1.2 canonical banner (line 281) which says `ENGINE: EPCC` always. Original text preserved per append-only policy. |
| T2 | `WORKFLOW.md` lines 170–178 | Rule 6 says "Three workflow engines exist" | ⚠️ Superseded by v1.3 addendum (line 224) which clarifies these are WORKFLOW PROTOCOLS, not engines. Original text preserved. |
| T3 | `RESOURCE-INDEX.md` lines 152–163 | Original Quick Reference has no Domain column and different Authority assignments | Superseded by v1.1 Domain Tags table (line 266). Original preserved. |
| T4 | `RESOURCE-INDEX.md` lines 167–188 | "Quick Picker: Which 3?" suggests 3 active resources | Explicitly deprecated by v1.3 patch (line 301). |
| T5 | `ACTIVATE.md` lines 97–118 | Combo Activations list 3 resources each | Explicitly deprecated by v1.1 (line 240) and v1.3 (line 300). |

> [!NOTE]
> All T1–T5 items are handled correctly by later patches. The original text remains per append-only policy. An agent following the file top-to-bottom will see the patch override. **No governance risk.**

### 4C. Missing File

| # | File | Issue | Impact |
|---|------|-------|--------|
| M1 | `prompts/DECISIONS-LOCKED.md` | Referenced in `DECISION-REPORT.md`, `WORKFLOW.md` Rules 10/21, `ACTIVATE.md` commands, `AGENTS.md` v3. **Never created.** | Medium — Not a bug since it's created per-task when gates are first run. But the file path is referenced so often that a blank template should exist for discoverability. |

### 4D. Authority Inconsistency (Design Tokens)

| File | Says |
|------|------|
| `EXTERNAL-RESOURCE-REGISTRY.md` line 14 | Authority: `SUPPORT` |
| `EXTERNAL-RESOURCE-REGISTRY.md` lines 22, 28 | Patches v1.2+v1.3 override to `PRIMARY` |
| `design-tokens.md` card line 14 | Authority: `SUPPORT` |
| `design-tokens.md` card line 54 | Patch v1.2 overrides to `PRIMARY` for UI-System |
| `RESOURCE-INDEX.md` lines 207, 291, 351–353 | Consistently says `PRIMARY` (UI-System) in patched sections |

> [!NOTE]
> The original text says SUPPORT; the patches override to PRIMARY. Both patches and the latest classification table agree on PRIMARY. The append-only policy means the original text stays in place. **An agent reading the full file will get the correct answer from the patches.** No governance risk, but slightly confusing on first read.

---

## 5. Cross-Reference Matrix

Verifying that every file referenced by another file actually exists:

| Referenced Path | Referenced By | Exists? |
|----------------|---------------|---------|
| `resources/RESOURCE-INDEX.md` | `AGENTS.md` line 21 | ✅ |
| `prompts/ACTIVATE.md` | `AGENTS.md` line 22 | ✅ |
| `prompts/WORKFLOW.md` | `AGENTS.md` line 23 | ✅ |
| `prompts/START.md` | `AGENTS.md` line 145 | ✅ |
| `prompts/DECISION-GATES.md` | `AGENTS.md` line 157 | ✅ |
| `prompts/DECISIONS-LOCKED.md` | `AGENTS.md` line 160 | ❌ (M1) |
| `prompts/SUBAGENTS.md` | `AGENTS.md` line 187 | ✅ |
| `prompts/LESSONS-LEARNED.md` | `AGENTS.md` line 197 | ✅ |
| `prompts/TASK-TEMPLATES.md` | `AGENTS.md` line 201 | ✅ |
| `prompts/DECISION-REPORT.md` | `WORKFLOW.md` line 249 | ✅ |
| `prompts/SKILLS-ALLOWLIST.md` | `WORKFLOW.md` line 289 | ✅ |
| `resources/external/AWESOME-SKILLS.md` | `RESOURCE-INDEX.md` line 451 | ✅ |
| `resources/external/AWESOME-SKILLS-BUNDLES.md` | `AWESOME-SKILLS.md` | ✅ |
| `resources/external/AWESOME-SKILLS-WORKFLOWS.md` | `AWESOME-SKILLS.md` | ✅ |
| All 7 external card paths | `EXTERNAL-RESOURCE-REGISTRY.md`, `RESOURCE-INDEX.md` | ✅ |
| All 7 v3.3 card paths | `RESOURCE-INDEX.md` v3.3 | ✅ |
| All source template paths | External card headers | ✅ |

---

## 6. Simulation Results

### Simulation A: "Build a landing page"

1. Keywords detected: `landing` → Gates A + D + E + F + G triggered
2. `START.md` Template D matches → PRIMARY: Landing-Page-System, SUPPORT: Design Tokens
3. Rule 21 (v3.3) requires lane lock before PLAN → Gate D runs first
4. Anti-slop checklist mandatory in AUDIT (Rule 22)
5. **Result: Governance holds.** All rules fire correctly in sequence.

### Simulation B: "Fix a button bug"

1. Trivial task (1 file, 1–2 steps) → No Decision Gates triggered (Rule 12 keywords absent)
2. Rule 19 non-trivial check: < 3 steps, < 2 files, obvious fix → PLAN optional
3. No resource activation required
4. **Result: Governance holds.** Trivial path works cleanly.

### Simulation C: "Build a SaaS MVP with Supabase and external skills"

1. Keywords: `SaaS`, `supabase` → Gates A + B + C + G triggered
2. Keywords: `external skills` → Gate H triggered
3. Template B (Backend-Heavy SaaS) → PRIMARY: Phased-Build, SUPPORT: Error-Handling-Patterns
4. PHASE line activates in banner (Phased-Build adds Scope→Connect→Structure→Style→Ship phases inside EPCC)
5. Max 3 external skills enforced by SKILLS-ALLOWLIST.md
6. **Result: Governance holds.** All gates + external skills enforcement fire correctly.

---

## 7. Recommended Patches (Optional)

> [!TIP]
> These are cosmetic fixes only. The governance layer works correctly without them.

| # | Patch | File | Type | Priority |
|---|-------|------|------|----------|
| P1 | Create blank `DECISIONS-LOCKED.md` template | `prompts/DECISIONS-LOCKED.md` | NEW | Medium |
| P2 | Append updated tree to `README.md` | `README.md` | APPEND | Low |
| P3 | Update "Last updated" date in `RESOURCE-INDEX.md` | `RESOURCE-INDEX.md` | APPEND | Low |

If you want these patches applied, say so and I'll label them `🩹 SYSTEM PATCH (v3.4)`.

---

## 8. Version History Summary

| Version | Date | Scope |
|---------|------|-------|
| v1.0 | 2026-02-24 | Initial kit: AGENTS.md, WORKFLOW.md, ACTIVATE.md, RESOURCE-INDEX.md, 10 core resources, 7 external cards |
| v1.1 | 2026-02-25 | Domain tags, combo deprecation, banner standardization, overload refusal |
| v1.2 | 2026-02-25 | Engine semantics (EPCC-only), Design Tokens → PRIMARY, canonical banner |
| v1.3 | 2026-02-25 | Terminology resolution, max-2 enforcement, canonical combos, full deprecations |
| v1.4 | 2026-02-25 | Start Menu (Templates A–H), START_MENU / START_RECOMMEND commands |
| v3 | 2026-02-28 | Decision Gates A–G, trigger heuristics, question budget, escape hatch, no-guessing policy, DECISIONS-LOCKED persistence |
| v3.1 | 2026-02-28 | External skills integration (Gate H, SKILLS-ALLOWLIST, AWESOME-SKILLS reference, bundles, workflows) |
| v3.2 | 2026-02-28 | Subagent delegation, lessons capture, task templates, non-trivial task heuristic |
| v3.3 | 2026-02-28 | 7 new resource cards (UI/content/spec), Gate D/E/F extensions, anti-slop rules, Start Templates I–J, prompt macro commands |
