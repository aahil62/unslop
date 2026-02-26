# Resource Index

> **Last updated:** 2026-02-26
> This is the single source of truth for all resources in this kit. Each resource is a card with rules, outputs, and an activation phrase.
>
> **This index is tool-agnostic.** It works identically in any AI coding environment.

---

## Resources

| # | Resource | Domain | Authority | Best For |
|---|----------|--------|-----------|----------|
| 1 | UI-System-Specs | UI-System | `PRIMARY` | Design specs, spacing, colors, typography |
| 2 | UI-Polish-Checklist | UI-Polish | `PRIMARY` | Component-level visual refinement |
| 3 | Landing-Patterns | Landing | `PRIMARY` | Landing pages, product showcases |
| 4 | Dashboard-IA | Dashboard | `PRIMARY` | Dashboards, admin panels, analytics |
| 5 | Reliability-Patterns | Reliability | `PRIMARY` | Error handling, resilience, fault tolerance |
| 6 | Debugging-Protocol | Debugging | `PRIMARY` | Structured debugging, root-cause analysis |

All resource cards live in `resources/cards/`.

---

## Domain Ownership

Each domain has at most ONE primary authority. The table above is canonical.

| Domain | PRIMARY Resource | What It Controls |
|--------|------------------|------------------|
| UI-System | UI-System-Specs | Spacing, colors, radius, typography, component specs |
| UI-Polish | UI-Polish-Checklist | Component refinement, animations, visual depth |
| Landing | Landing-Patterns | Page structure, scroll animation, conversion |
| Dashboard | Dashboard-IA | Layout grids, KPI cards, data visualization |
| Reliability | Reliability-Patterns | Error handling, retry, circuit breakers |
| Debugging | Debugging-Protocol | Bug investigation, root-cause analysis |

---

## Activation Rules

### Max 2 Active Resources Per Task
- **1 PRIMARY + 1 SUPPORT maximum.**
- All other resources are **REF-ONLY** (may be consulted for a specific lookup but do not influence ongoing decisions).
- If the user requests 3+ active resources, refuse and ask them to pick 1 PRIMARY + 1 SUPPORT.

### One PRIMARY Per Domain
If two resources share a domain and both claim PRIMARY, ask the user which one to keep.

### Active vs Reference-Only
- **Active** = loaded into working memory and applied to every decision.
- **Reference-only** = can be consulted for a specific lookup, but does NOT influence ongoing decisions.
- All resources not explicitly activated are **reference-only** by default.

---

## Recommended Combos (2 Active)

Each scenario activates exactly 2 resources (1 PRIMARY + 1 SUPPORT). A third may be consulted as REF-ONLY.

### Dashboard Feature
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Dashboard-IA | Dashboard |
| **SUPPORT** | UI-System-Specs | UI-System |
| REF-ONLY | UI-Polish-Checklist | UI-Polish |

### Landing Page
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Landing-Patterns | Landing |
| **SUPPORT** | UI-System-Specs | UI-System |
| REF-ONLY | UI-Polish-Checklist | UI-Polish |

### UI Polish Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | UI-System-Specs | UI-System |
| **SUPPORT** | UI-Polish-Checklist | UI-Polish |

### Reliability Pass
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Reliability-Patterns | Reliability |
| **SUPPORT** | Debugging-Protocol | Debugging |

### Debug Session
| Role | Resource | Domain |
|------|----------|--------|
| **PRIMARY** | Debugging-Protocol | Debugging |
| **SUPPORT** | Reliability-Patterns | Reliability |

---

## Quality Gates

Resource quality is measured by pass/fail gates, not subjective claims.

### Gate 1: Accessibility
- WCAG AA contrast on all text (4.5:1 body, 3:1 large)
- All interactive elements keyboard-reachable
- `aria-label` or visible label on every control
- `prefers-reduced-motion` respected

### Gate 2: Responsiveness
- Renders correctly at 375px, 768px, 1024px, 1440px
- No horizontal scroll at any breakpoint
- Touch targets >= 44x44px on mobile

### Gate 3: States
- Every data-touching component has: loading, empty, error, success states
- Error states show actionable user-facing messages

### Gate 4: Performance
- No layout shifts (CLS < 0.1)
- Largest Contentful Paint < 2.5s
- Images lazy-loaded below the fold

### Gate 5: Lint / Type / Test
- Zero lint errors
- Zero type errors (if using typed language)
- Build completes without warnings

### Gates by Domain
| Domain | Required Gates |
|--------|---------------|
| UI-System | 1 + 2 + 3 + 4 |
| UI-Polish | 1 + 2 + 3 + 4 |
| Dashboard | 1 + 2 + 3 + 4 + 5 |
| Landing | 1 + 2 + 4 |
| Reliability | 5 |
| Debugging | 5 |

---

## Bring Your Own Resources

This kit ships with 6 example resources. You are encouraged to add your own:

1. Create a card in `resources/cards/your-resource-name.md` using the same format as existing cards.
2. Add an entry to this index table.
3. Add an activation phrase to `prompts/ACTIVATE.md`.
4. Register external resources in `resources/external/EXTERNAL-RESOURCE-REGISTRY.md`.

See the [External Resource Registry](external/EXTERNAL-RESOURCE-REGISTRY.md) for tracking resources from outside this kit.
