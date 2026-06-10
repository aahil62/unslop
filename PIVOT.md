# PIVOT — from governance kit to assets + business

> Status: in progress · Started 2026-06-05

## Why we're pivoting

Audience: **vibe coders starting from scratch** who want to build elite,
monetizable websites and freelance with them.

The old `.ai-kit/` was ~90% methodology and **0% sellable output** — 42k words
telling an agent how to think, but not a single line of forkable code. Beginners
sell *output*, not a process doc. This pivot inverts the ratio: a **thin agent
layer** wrapped around **real, forkable assets** plus a **freelance playbook**
that turns a finished site into a paid invoice.

## Decisions locked (2026-06-05)

| Decision | Choice |
|----------|--------|
| Direction | Assets + business (not methodology-pure) |
| Stack | Next.js (App Router) + Tailwind + shadcn/ui, deploy on Vercel |
| First template | Premium single-page landing with swappable theme presets |

## New structure

```
.
├── templates/          ← THE PRODUCT: deployable starter repos (real code)
│   └── flagship/       ← premium landing, swappable theme presets
├── agent/              ← thin enforcement: AGENTS.md + 3 skills
│   └── AGENTS.md
├── playbook/           ← THE BUSINESS: intake → scope → price → deploy → handoff
│   └── intake-questionnaire.md
├── PIVOT.md            ← this file (the source of truth for the migration)
└── README.md          ← 10-minute onboarding (rewrite in Phase 0)
```

The old `.ai-kit/` stays untouched until Phase 0 so nothing is lost mid-pivot.

## Migration map — nothing good is thrown away

| Old asset | New home | Why it's better |
|-----------|----------|-----------------|
| Decision Gates A–G (questions) | `playbook/intake-questionnaire.md` + `agent` decision-intake skill | The gates are already a client interview. Dual-use. |
| `cinematic-landing-lane` presets (Organic Tech, Midnight Luxe, Brutalist Signal, Vapor Clinic) | Real theme files in `templates/flagship` | The gem. Forkable code, not a spec. |
| `ui-inspiration-to-lane` lanes | Real Tailwind/CSS token presets users swap | Pick a vibe → site transforms. Sellable. |
| Quality gates (a11y/responsive/states/perf) + anti-slop checklist | `agent` audit skill + baked into template CI | Enforced by code, not by hoping the agent complies. |
| Technical Cofounder Contract | `agent/AGENTS.md` tone + playbook "talking to clients" | Same warmth, two audiences. |
| content-architecture / deliverables-specs | `playbook` scope + copy docs + content slots in template | |
| EPCC engine, max-2 rule, banner, START A–H, activation phrases, CANONICAL/VERSIONING/drift machinery, "950+ skills" | **Cut** | The 70% that costs reader attention and produces nothing sellable. |

## Phases

- [ ] **Phase 0 — Hygiene**: collapse to one version, delete `[LEGACY] PATCH`
  blocks, retire `CANONICAL.md`/`VERSIONING.md`/`CURRENT-VIEW.md` + `check-canonical.sh`,
  rewrite root `README.md` to a 10-minute onboarding.
- [ ] **Phase 1 — Flagship template**: `npx create-next-app` in `templates/flagship`,
  build the premium landing (Hero → Features → Social proof → Pricing → CTA),
  wire 2–3 theme presets, verify `npm run build` + Lighthouse, deploy to Vercel.
- [ ] **Phase 2 — Agent layer**: finalize `agent/AGENTS.md` + 3 skills
  (explore-first, decision-intake, anti-slop+a11y audit) wired to the template.
- [ ] **Phase 3 — Playbook**: intake (done) → scoping → pricing tiers →
  deploy guide → client handoff checklist.
- [ ] **Phase 4 — Spin-off guide** + second template (small-business multi-page).

## Status log

- 2026-06-05: Direction + stack + first template decided. Wrote `PIVOT.md`,
  `agent/AGENTS.md` (draft), `playbook/intake-questionnaire.md` (draft).
- **Next:** scaffold Next.js app in `templates/flagship` (best run from a session
  rooted in this repo so the build can be verified).
