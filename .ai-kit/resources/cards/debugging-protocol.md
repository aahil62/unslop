# Resource Card: Debugging Protocol

> **Domain:** Debugging
> **Authority:** PRIMARY

---

## What It Is
A structured debugging methodology that replaces ad-hoc "try things until it works" with a systematic process: predictions, code inspection, scratchpad reasoning, elimination, root-cause identification, and verified fix with before/after comparison.

## When to Use
- A bug persists after 2+ failed fix attempts
- The error involves multiple interacting files or modules
- Need to produce a debugging report for team review
- Want to avoid tunnel vision and circular debugging

## Outputs
- **Prediction list** — 5 educated guesses for the root cause, generated *before* inspecting code
- **Scratchpad** — Step-by-step investigation log with evidence for/against each prediction
- **Root cause analysis** — Identified problematic code with explanation of why it fails
- **Fix with comparison** — Before/after code snippets with clear rationale for the change

## Activation Phrase
```
Activate Debugging Protocol for this error.
```

## Conflicts / Overlaps
- **Complements** Reliability-Patterns — Debugging finds bugs; Reliability prevents them. Use Debugging first to fix, then Reliability to harden.
- **No domain conflicts** — can pair with any other resource as SUPPORT.

## Extracted Rules

### 1. Predict Before Inspecting
Generate 5 predictions for the root cause *before* reading any code. This prevents confirmation bias and forces you to consider multiple failure modes.

### 2. Scratchpad Is Mandatory
Document every investigative step in a scratchpad. What you checked, what you found, what it means. This creates an audit trail and prevents circular debugging.

### 3. Process of Elimination
Verify or disprove each prediction with evidence. Document the rationale for retaining or discarding each hypothesis. Never skip a prediction because "it probably isn't that."

### 4. Read the Error, Not Your Assumptions
Read the actual stack trace, error message, and input data. Most debugging failures come from reading what you *expect* to see instead of what is *actually* there.

### 5. Isolate Before Fixing
Reproduce the bug in isolation. If you can't reproduce it, you can't verify the fix. Create a minimal test case if the full system is too complex.

### 6. Before/After Is Required
Every fix must include the original problematic code AND the corrected replacement, side by side. No "change this line" without showing what it was.

### 7. Verify the Fix, Not Just the Symptom
After applying the fix, verify that: (a) the original error is gone, (b) no new errors were introduced, (c) related functionality still works. Run the full test suite if one exists.

### 8. Document the Learning
After fixing, add a brief note: what the bug was, why it happened, and how to prevent it in the future. This turns debugging into knowledge.
