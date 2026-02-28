# 🃏 Resource Card: Structured Debugger

> **Domain:** Debugging
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A systematic debugging methodology that forces structured root-cause analysis through hypothesis generation, code inspection, elimination reasoning, and comprehensive fix documentation.

## Authority Level
`EMERGENCY`

## When to use it
- When a bug persists after 2+ failed fix attempts and you need a fresh, structured approach
- When the error is complex and spans multiple interacting files or systems
- When you need to produce a detailed debugging report with root-cause analysis

## Outputs
- Multiple hypotheses for the error cause, ranked by likelihood
- Investigation log documenting every step taken
- Identified root cause with supporting evidence
- Step-by-step reasoning narrative
- Corrected code with before/after comparison

## Activation phrase
```
Activate Structured Debugger mode for this error.
```

## Conflicts / Overlaps
- **Complements** Error-Handling-Patterns — Structured Debugger is for *finding* bugs; Error-Handling-Patterns is for *preventing* them. Use Debugger first to fix, then Error-Handling to harden.
- **Overlaps with** Dev-Workflow debugging sections — Structured Debugger is more rigorous and thorough; Dev-Workflow debugging is lighter. Use Structured Debugger for stubborn, multi-file bugs.

## Extracted Rules

### 1. Hypothesize Before Investigating
Generate multiple plausible causes *before* inspecting code. This prevents tunnel vision and confirmation bias during investigation.

### 2. Investigation Log Is Mandatory
Document every investigative step in a structured log. This creates an audit trail and prevents circular debugging.

### 3. Systematic Elimination
Verify or disprove each hypothesis through code inspection and logical reasoning. Document why each was retained or discarded.

### 4. Contextual Debugging
Relate the error to the specific user task and application state. Don't debug in isolation — understand what the user was doing when the failure occurred.

### 5. Before/After Code Required
Every fix must include the original problematic code AND the corrected replacement. No ambiguous "change this line" instructions.

### 6. Thorough Documentation
Produce comprehensive fix documentation covering the root cause, the fix applied, and any related areas that should be inspected. Thoroughness prevents repeat debugging sessions.
