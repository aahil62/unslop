# ⚙️ Component Logic Spec

> **Domain:** UI + Logic
> **Type:** PROCEDURAL (with choices)
> **Authority:** SUPPORT
> **Activation:** `SPEC_COMPONENT_LOGIC`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A structured spec for interactive components with non-trivial state, data, or user interactions. Produces a state machine, data flow diagram, error/loading/empty states, and edge case inventory before coding.

## When to Use

- Building forms, data tables, search/filter UIs, multi-step wizards
- Component has ≥ 3 states (not just render + empty)
- Data comes from an API or real-time source
- Component requires optimistic updates, pagination, or debounce logic

## Outputs

| Artifact | Description |
|----------|-------------|
| **State Machine (text)** | States → transitions → side effects (text-based, not diagram) |
| **Data Flow** | Source → transform → render chain |
| **Error / Loading / Empty** | Explicit UI for each non-happy-path state |
| **Edge Cases** | List of 5–10 edge cases with expected behavior |
| **React Structure** | Component tree, hooks needed, prop types |

## Conflicts / Overlaps

- Overlaps with `deliverables-specs.md` on component inventory — **deliverables-specs** lists components, **this** card specifies their behavior.
- Does NOT handle visual styling — that's design resources.
- State machine is text-based, not a visual diagram.

## Rules

1. Every interactive component must define at least: idle, loading, success, error, empty.
2. State transitions must be explicit — no implicit state jumps.
3. Optimistic updates must define rollback behavior on failure.
4. Pagination must specify: page size, cursor vs offset, loading indicator behavior.
5. Debounce values must be explicit (e.g., 300ms for search) not "debounced."
6. Error states must show user-facing message + retry option.
7. Empty states must have a CTA or next-step guidance — never blank.
8. Edge cases must include: rapid clicking, network timeout, stale data, concurrent edits.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Component name and purpose
- Data source (API endpoint, database, local state)
- User interaction type (CRUD, read-only, filter/search, wizard)

### Option Lanes

| Lane | Complexity | Data Freshness | Update Strategy | Pagination |
|------|-----------|----------------|-----------------|------------|
| **A) Simple** | 2–3 states | Static or cached | Strict (wait for server) | None |
| **B) Standard** | 4–5 states | Polling or refetch-on-focus | Optimistic with rollback | Offset-based |
| **C) Advanced** | 6+ states | Real-time (WebSocket/SSE) | Optimistic + conflict resolution | Cursor-based + infinite scroll |

### Selection Criteria
- **A** if component is a display card, simple form, or static list
- **B** if component is a data table, search filter, or standard CRUD form
- **C** if component is a collaborative editor, live dashboard, or real-time feed

### Outputs After Selection
- Locked complexity lane (A/B/C)
- State machine (text)
- Data flow description
- Error/loading/empty specs
- Edge case list
- Written to DECISIONS-LOCKED.md under "Component Logic"
