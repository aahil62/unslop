# 🚦 Decision Gates (v3) — 2026-02-28

> **Purpose:** Force the agent to ask questions, propose options, and lock decisions before PLAN or CODE on any choice-heavy task.
>
> **This file is tool-agnostic.** It works identically in any AI coding environment.

---

## A. Hard Rules

### Rule 1: Gates Are Mandatory When Triggered
If `Decision Required = YES` for any active resource **or** any detected domain (see Trigger Heuristics below), you **must** run the required gates and produce a Decision Report before entering PLAN.

### Rule 2: Ask Only Missing Questions
Before asking, check what the user has already provided. Never re-ask answered questions. Never ask "nice-to-have" questions — only required inputs.

### Rule 3: Provide 2–3 Options With Pros/Cons
When pathways exist (style lanes, auth models, schema patterns, architecture choices), present 2–3 concrete options with tradeoffs. Do not pick one silently.

### Rule 4: No Guessing
You **must not** pick aesthetics, auth model, schema structure, tech stack, or architecture without either:
1. User selection from presented options, **OR**
2. Sufficient explicit user constraints already provided.

**Defaults policy:** You may use defaults ONLY when they are directly implied by explicit user constraints already provided. Otherwise, present options and ask.

### Rule 5: Escape Hatch
If the user says the **exact phrase**: `"INPUTS ARE FIXED, SKIP GATES."` — you may skip remaining gates and proceed directly to PLAN. You must still restate the fixed inputs before proceeding. **No paraphrases accepted** — "skip the gates", "just build it", "go ahead" do NOT trigger the escape hatch.

### Rule 6: Gates Are Workflow Logic, Not Resources
Decision Gates are an EPCC enforcement layer. They do **not** count as an active resource. PRIMARY + SUPPORT remain max-2. Gates run regardless of which resources are active.

### Rule 7: Question Budget
Ask questions in **rounds of max 8 total** (across all triggered gates). Group by gate. Prioritize: Product scope → Backend/Auth/Schema → UI lane/tokens → Architecture → Motion → Verification. Wait for answers before asking the next round.

---

## B. Decision Gates

---

### Gate A: Product Scope Gate

**Trigger:** Any task beyond a trivial UI tweak (e.g., "fix button color" does NOT trigger; "build a dashboard feature" DOES trigger).

**Questions to ask (only missing):**
1. What is the product type? (SaaS, e-commerce, portfolio, internal tool, marketing site, etc.)
2. What is the scope of this task? (MVP, single feature, full page, multi-page flow)
3. Who is the target user?
4. What are the 3–5 core features / requirements?
5. Are there any explicit constraints? (deadline, budget, existing codebase, specific tech)

**Outputs:**
- Product type (locked)
- Scope statement (1–2 sentences)
- Feature list (numbered)
- Constraints list

---

### Gate B: Backend / Auth / Schema Gate

**Trigger:** Task involves any data persistence, authentication, authorization, API integration, or external service.

**Trigger keywords:** auth, roles, permissions, DB, schema, API, webhook, stripe, supabase, database, users, login, signup, payments

**Questions to ask (only missing):**
1. What is the auth model? — Options:
   - **a) Email/password** (simple, Supabase Auth or similar) — Pros: fast setup. Cons: no social login.
   - **b) OAuth/social** (Google, GitHub, etc.) — Pros: frictionless signup. Cons: provider dependency.
   - **c) Magic link / passwordless** — Pros: no password management. Cons: email deliverability.
2. What data entities are needed? (users, projects, items, etc.)
3. What are the key relationships? (one-to-many, many-to-many)
4. What external integrations are required? (Stripe, Supabase, third-party APIs)
5. What is the authorization model? (role-based, row-level security, API keys)

**Outputs:**
- Auth model (locked)
- Entity list with fields
- Relationship diagram or description
- Integration list
- Authorization approach (locked)

---

### Gate C: Architecture Gate

**Trigger:** Multi-module builds, non-trivial project structure, or deployment/infrastructure decisions.

**Trigger keywords:** deploy, cache, realtime, queue, cron, multi-tenant, performance, microservice, monorepo, serverless

**Questions to ask (only missing):**
1. What is the deployment target? — Options:
   - **a) Vercel/Netlify** (static + serverless) — Pros: zero-config, free tier. Cons: cold starts.
   - **b) VPS/Docker** (full control) — Pros: flexibility. Cons: ops burden.
   - **c) Edge/Workers** (Cloudflare, Deno Deploy) — Pros: global latency. Cons: runtime constraints.
2. What is the architecture pattern? (monolith, API + SPA, SSR, static site)
3. Are there real-time requirements? (WebSockets, SSE, polling)
4. What is the caching strategy? (CDN, in-memory, database-level)
5. Any performance constraints? (target load time, concurrent users)

**Outputs:**
- Deployment target (locked)
- Architecture diagram or description
- Real-time approach (locked, if applicable)
- Performance targets

---

### Gate D: UI Genre + Aesthetic Lane Gate

**Trigger:** Any task involving UI creation or significant UI modification.

**Trigger keywords:** dashboard, landing, redesign, theme, tokens, typography, palette, animation, motion, UI, website, page, layout, design

**Questions to ask (only missing):**
1. What is the UI genre? — Options (present 2–3 most relevant):
   - **Glassmorphism Dark** — frosted glass, blur, transparency, dark backgrounds
   - **Soft UI / Neumorphism** — subtle shadows, light pastel, tactile feel
   - **Aurora UI** — gradient meshes, northern-lights backgrounds, vibrant accents
   - **Minimalist Clean** — whitespace-heavy, sharp typography, monochrome + 1 accent
   - **Bold / Brutalist** — high contrast, large type, raw edges
   - **Sophisticated / Trust** — muted tones, serif accents, financial/enterprise feel
2. Dark mode, light mode, or both?
3. What is the color temperature preference? (warm, cool, neutral, tinted)
4. Any reference sites or screenshots for visual direction?

**Mandatory outputs (all required before proceeding):**
- **Chosen UI lane name** (e.g., "Glassmorphism Dark", "Aurora Minimal")
- **Tokens:** spacing scale, typography scale (font pair + sizes), core color tokens (`--foreground`, `--secondary`, `--muted`, `--faint`, `--accent`)
- **Motion level:** low / med / high + `prefers-reduced-motion` stance
- **Anti-patterns to avoid** for this lane (e.g., "no flat borders in glassmorphism", "no neon in Soft UI")
- **Acceptance criteria** for "matches lane" — 3–5 concrete checks used in VERIFY

---

### Gate E: Design System Gate

**Trigger:** Any UI task where tokens, typography, or spacing decisions have not been locked.

**Questions to ask (only missing):**
1. What is the spacing base? (4px or 8px) — derive scale from it
2. What is the font pairing? — Options (present 2–3):
   - **a) Inter + Inter** — neutral, versatile, SaaS default
   - **b) Outfit + Inter** — modern headings, clean body
   - **c) Playfair Display + Source Sans 3** — editorial, sophisticated
3. What is the border radius style? (sharp: 0–2px, soft: 6–8px, rounded: 12–16px, pill: 999px)
4. Core color tokens — present 2–3 palette options with hex/HSL values

**Outputs:**
- Spacing scale (locked)
- Typography scale with sizes (locked)
- Border radius token (locked)
- Core color token map: `--foreground`, `--secondary`, `--muted`, `--faint`, `--accent` (locked)

---

### Gate F: Interaction / Motion Gate

**Trigger:** Task involves animations, transitions, scroll effects, or scrollytelling.

**Trigger keywords:** animation, motion, scroll, parallax, transition, hover, framer, GSAP, scrollytelling

**Questions to ask (only missing):**
1. What is the motion level? — Options:
   - **a) Low** — fade-in on load, subtle hover color changes. ~150ms transitions.
   - **b) Medium** — staggered list reveals, slide-in sections, smooth page transitions. ~200–300ms.
   - **c) High** — scroll-linked animations, image sequences, parallax layers, cinematic reveals. ~300–600ms.
2. `prefers-reduced-motion` behavior? (disable all motion / reduce to fade only / keep subtle)
3. What motion library? (CSS only, Framer Motion, GSAP, Lenis + ScrollTrigger)
4. Any specific animation patterns needed? (card scanner, parallax hero, staggered grid, etc.)

**Outputs:**
- Motion level (locked)
- Reduced-motion policy (locked)
- Motion library (locked)
- Specific animation patterns list

---

### Gate G: Verification Gate

**Trigger:** Always. Every task must define how it will be verified.

**Questions to ask (only if not obvious from task):**
1. What are the verification commands? (lint, build, test, preview)
2. Are there manual QA steps required? (check specific pages, test specific flows)
3. What breakpoints must be tested? (375px, 768px, 1024px, 1440px)

**Outputs:**
- Verification command list
- Manual QA checklist
- Breakpoint test list

---

## C. Decision Trigger Heuristics

> Even if the user has NOT activated a choice-heavy resource, the agent must scan the task description for domain keywords and auto-trigger the matching gates.

| Domain | Trigger Keywords | Gates |
|--------|-----------------|-------|
| Product Scope | MVP, scope, user journey, features | A |
| Backend/Auth/Schema | auth, roles, permissions, DB, schema, API, webhook, stripe, supabase | A + B |
| Architecture | deploy, cache, realtime, queue, cron, multi-tenant, performance | A + C |
| UI/Design | dashboard, landing, redesign, theme, tokens, typography, palette, animation, motion | A + D + E |
| Motion/Scrollytelling | animation, motion, scroll, parallax, scrollytelling, GSAP, framer | A + D + E + F |

**Rule:** If any keyword is detected and the corresponding gates are incomplete, **refuse PLAN/CODE** and ask gate questions — unless the user says the exact phrase: `"INPUTS ARE FIXED, SKIP GATES."`

---

## D. Verification Simulations

> These simulations demonstrate the full Decision Gate flow for two common task types.

---

### Simulation 1: Backend-Heavy SaaS Dashboard Feature

**User says:** _"Build a user analytics dashboard with real-time data, role-based access, and Supabase integration."_

#### Banner
```
┌──────────────────────────────────────────┐
│ PRIMARY:  Dashboard-Architecture (Dashboard) │
│ SUPPORT:  Design Tokens (UI-System) │
│ ENGINE:   EPCC                           │
│ STEP:     EXPLORE                        │
│ PHASE:    —                              │
│ SCOPE:    —                              │
│ REF-ONLY: Phased Build Protocol, Error-Handling-Patterns │
└──────────────────────────────────────────┘
```

#### Gates Triggered
Keywords detected: `dashboard`, `real-time`, `role-based`, `supabase`
→ Gates: **A** (Product Scope) + **B** (Backend/Auth/Schema) + **C** (Architecture) + **D** (UI Genre) + **E** (Design System) + **G** (Verification)

#### Agent Refuses to PLAN
```
⚠️ Decision Gates Required — Cannot proceed to PLAN yet.

I've detected decision-heavy domains in your task (Dashboard, Backend/Schema, Architecture, UI). 
I need to resolve the following gates before planning:

Gates pending: A (Product Scope), B (Backend/Auth), C (Architecture), D (UI Genre), E (Design System), G (Verification)

Here are my questions — Round 1 (8 max):
```

#### Round 1 Questions (grouped by gate, max 8)
**Gate A — Product Scope:**
1. Target user — internal team, or external customers viewing their own analytics?
2. Core features beyond "user analytics" — which metrics/KPIs specifically? (e.g., DAU, retention, revenue, funnel conversion)

**Gate B — Backend/Auth/Schema:**
3. Auth model — which do you prefer?
   - **a) Email/password** (Supabase Auth) — fast, simple
   - **b) OAuth/social** (Google, GitHub via Supabase) — frictionless
   - **c) Magic link** — passwordless, modern
4. Role model — what roles? (e.g., admin, viewer, editor)
5. Key data entities beyond users? (events, sessions, page views, custom events?)

**Gate D — UI Genre:**
6. UI lane preference?
   - **a) Glassmorphism Dark** — frosted panels, dark background, data pops
   - **b) Minimalist Clean** — whitespace-heavy, sharp typography, light background
   - **c) Sophisticated / Trust** — muted enterprise tones, serif accents
7. Dark mode, light mode, or both?

**Gate C — Architecture:**
8. Real-time approach — WebSockets (Supabase Realtime), SSE, or polling?

#### User Answers (example)
> 1. Internal team only. 2. DAU, retention curves, funnel conversion, revenue by plan. 3. (a) Email/password. 4. Admin + Viewer. 5. Users, sessions, events, subscriptions. 6. (a) Glassmorphism Dark. 7. Dark only. 8. Supabase Realtime (WebSockets).

#### Round 2 Questions (remaining gates)
**Gate E — Design System:**
1. Spacing base — 4px or 8px?
2. Font pairing preference?
   - **a) Inter + Inter** — neutral SaaS default
   - **b) Outfit + Inter** — modern headings
   - **c) JetBrains Mono + Inter** — data-dense, technical feel
3. Border radius — sharp (2px), soft (8px), or rounded (12px)?

**Gate G — Verification:**
4. Verification commands — `npm run lint` + `npm run build` + manual QA at `localhost:5173`?

#### User Answers (example)
> 1. 8px. 2. (c) JetBrains Mono + Inter. 3. Soft (8px). 4. Yes, add `npm run preview` too.

#### Decision Report (filled)

```
┌─────────────────────────────────────────────────────┐
│                  DECISION REPORT                     │
├─────────────────────────────────────────────────────┤
│ Task Summary:                                        │
│  • Internal user analytics dashboard                 │
│  • Supabase backend with real-time data              │
│  • Role-based access (Admin + Viewer)                │
│  • KPIs: DAU, retention, funnels, revenue by plan    │
│  • Dark-only Glassmorphism UI                        │
│                                                      │
│ Active Resources:                                    │
│  PRIMARY: Dashboard-Architecture (Dashboard)         │
│  SUPPORT: Design Tokens (UI-System)        │
│  Domains: Dashboard, Backend/Schema, Architecture,   │
│           UI-Genre/Aesthetic, UI-System              │
│                                                      │
│ Gates Executed:                                       │
│  ✅ A — Product: Internal analytics, 4 KPIs          │
│  ✅ B — Auth: email/password, Admin+Viewer, RLS      │
│  ✅ C — Arch: Supabase Realtime, Vercel deploy       │
│  ✅ D — UI: Glassmorphism Dark, dark-only            │
│  ✅ E — Tokens: 8px base, JetBrains Mono + Inter,   │
│         8px radius, HSL dark palette                  │
│  ⬜ F — Motion: not triggered (no scrollytelling)    │
│  ✅ G — Verify: lint + build + preview + manual QA   │
│                                                      │
│ Options Considered:                                   │
│  UI Lane: Glassmorphism Dark ✅ vs Minimalist Clean   │
│   vs Sophisticated/Trust                              │
│  Auth: email/pwd ✅ vs OAuth vs magic link            │
│  Fonts: JetBrains+Inter ✅ vs Inter+Inter vs Outfit  │
│                                                      │
│ Locked Decisions:                                     │
│  • Product: Internal analytics dashboard              │
│  • Auth: email/password (Supabase Auth)               │
│  • Roles: Admin, Viewer (Supabase RLS)                │
│  • Schema: users, sessions, events, subscriptions     │
│  • UI Lane: Glassmorphism Dark                        │
│  • Spacing: 8px base → [8,16,24,32,48,64]            │
│  • Typography: JetBrains Mono (headings/data) +       │
│    Inter (body), scale: 12/14/16/20/24/32             │
│  • Colors: --foreground: hsl(0,0%,95%)                │
│    --secondary: hsl(220,15%,65%)                      │
│    --muted: hsl(220,10%,40%)                          │
│    --faint: hsl(220,10%,18%)                          │
│    --accent: hsl(200,90%,55%)                         │
│  • Radius: 8px                                        │
│  • Motion: med (staggered card reveals, fade-in)      │
│  • Anti-patterns: no flat borders, no light bgs,      │
│    no drop-shadows without blur, no serif fonts        │
│  • Acceptance: ① blur(12px)+ on glass panels          │
│    ② --faint bg visible behind panels ③ data text     │
│    in mono ④ accent on interactive elements only       │
│    ⑤ all panels have 1px hsla border                  │
│                                                      │
│ Assumptions: (none — all user-provided)               │
│                                                      │
│ Plan Preview:                                         │
│  • src/components/Dashboard/                          │
│  • src/lib/supabase.ts                                │
│  • src/styles/tokens.css                              │
│  • src/hooks/useRealtimeData.ts                       │
│  • supabase/migrations/001_analytics.sql              │
│                                                      │
│ Verification:                                         │
│  npm run lint → npm run build → npm run preview       │
│  Manual QA: check at 1440px, test Admin vs Viewer     │
└─────────────────────────────────────────────────────┘
```

→ Locked decisions also written to `.ai-kit/prompts/DECISIONS-LOCKED.md`.

**Now** the agent may proceed to PLAN.

---

### Simulation 2: Premium Landing Page

**User says:** _"Create a premium landing page for my AI writing tool with scroll animations."_

#### Banner
```
┌──────────────────────────────────────────┐
│ PRIMARY:  Landing-Page-System (Landing)     │
│ SUPPORT:  Design Tokens (UI-System) │
│ ENGINE:   EPCC                           │
│ STEP:     EXPLORE                        │
│ PHASE:    —                              │
│ SCOPE:    —                              │
│ REF-ONLY: Design-Elements, Glassmorphism Reference │
└──────────────────────────────────────────┘
```

#### Gates Triggered
Keywords detected: `landing`, `scroll animations`, `premium`
→ Gates: **A** (Product Scope) + **D** (UI Genre) + **E** (Design System) + **F** (Motion) + **G** (Verification)

#### Agent Refuses to PLAN
```
⚠️ Decision Gates Required — Cannot proceed to PLAN yet.

I've detected decision-heavy domains in your task (Landing, UI/Design, Motion).
I need to resolve the following gates before planning:

Gates pending: A (Product Scope), D (UI Genre), E (Design System), F (Motion), G (Verification)

Here are my questions — Round 1 (8 max):
```

#### Round 1 Questions (max 8)
**Gate A — Product Scope:**
1. Target audience — developers, marketers, general consumers?
2. Core landing page sections — which do you want? (hero, features, pricing, testimonials, CTA, footer)
3. Is this a single page or multi-page site?

**Gate D — UI Genre:**
4. UI lane preference?
   - **a) Aurora UI** — gradient meshes, vibrant, AI-tech feel
   - **b) Glassmorphism Dark** — frosted panels, depth, modern
   - **c) Minimalist Clean** — whitespace, sharp type, single accent
5. Dark mode, light mode, or both?

**Gate F — Motion:**
6. Motion level?
   - **a) Medium** — staggered reveals, smooth transitions, parallax hero
   - **b) High** — scroll-linked image sequences, cinematic product reveals, parallax layers
7. Motion library preference?
   - **a) Framer Motion** (React) — declarative, easy, good perf
   - **b) GSAP + ScrollTrigger** — cinematic, precise, scroll-linked
   - **c) CSS only** — lightweight, no dependencies

**Gate E — Design System:**
8. Color temperature — warm, cool, or neutral?

#### User Answers (example)
> 1. Developers + technical writers. 2. Hero, features (4), social proof, pricing (3 tiers), CTA, footer. 3. Single page. 4. (a) Aurora UI. 5. Dark only. 6. (b) High. 7. (b) GSAP + ScrollTrigger. 8. Cool.

#### Round 2 Questions (remaining)
**Gate E — Design System (continued):**
1. Font pairing?
   - **a) Outfit + Inter** — modern, geometric headings
   - **b) Space Grotesk + Inter** — techy, rounded
   - **c) Clash Display + Satoshi** — premium, distinctive
2. Spacing base — 4px or 8px?

**Gate G — Verification:**
3. Verification — `npm run lint` + `npm run build` + manual scroll-through at 375px/1440px?

#### User Answers (example)
> 1. (c) Clash Display + Satoshi. 2. 8px. 3. Yes, add 768px tablet check too.

#### Escape Hatch Test

**User says:** _"Just skip the gates and build it"_
```
⚠️ Cannot skip gates. The exact phrase required is: "INPUTS ARE FIXED, SKIP GATES."
Paraphrases are not accepted. Please answer the remaining questions or use the exact escape phrase.
```

**User says:** _"INPUTS ARE FIXED, SKIP GATES."_
```
✅ Gates skipped per user directive. Restating fixed inputs:
• Product: AI writing tool landing page, single page, developer audience
• Sections: hero, 4 features, social proof, 3-tier pricing, CTA, footer
• UI Lane: Aurora UI, dark only, cool temperature
• Fonts: Clash Display + Satoshi, 8px spacing base
• Motion: High, GSAP + ScrollTrigger, prefers-reduced-motion: fade-only fallback
• Verify: lint + build + manual QA at 375/768/1440px

Proceeding to PLAN.
```

#### Decision Report (filled)

```
┌─────────────────────────────────────────────────────┐
│                  DECISION REPORT                     │
├─────────────────────────────────────────────────────┤
│ Task Summary:                                        │
│  • Premium landing page for AI writing tool          │
│  • Single-page with 7 sections                       │
│  • Aurora UI dark aesthetic with cool tones           │
│  • High-motion scroll animations (GSAP+ScrollTrigger)│
│  • Target: developers + technical writers             │
│                                                      │
│ Active Resources:                                    │
│  PRIMARY: Landing-Page-System (Landing)                 │
│  SUPPORT: Design Tokens (UI-System)        │
│  Domains: Landing, UI-Genre/Aesthetic, UI-System     │
│                                                      │
│ Gates Executed:                                       │
│  ✅ A — Product: AI writing tool, single page, devs  │
│  ⬜ B — Backend: not triggered                       │
│  ⬜ C — Architecture: not triggered                  │
│  ✅ D — UI: Aurora UI, dark, cool temperature        │
│  ✅ E — Tokens: 8px, Clash Display + Satoshi,        │
│         cool aurora palette                           │
│  ✅ F — Motion: high, GSAP+ScrollTrigger,            │
│         reduced-motion: fade-only                     │
│  ✅ G — Verify: lint + build + 375/768/1440          │
│                                                      │
│ Options Considered:                                   │
│  UI: Aurora UI ✅ vs Glassmorphism Dark vs Minimalist │
│  Motion: High ✅ vs Medium                            │
│  Library: GSAP ✅ vs Framer Motion vs CSS-only        │
│  Fonts: Clash+Satoshi ✅ vs Outfit+Inter vs           │
│   Space Grotesk+Inter                                 │
│                                                      │
│ Locked Decisions:                                     │
│  • Product: AI writing tool landing page              │
│  • UI Lane: Aurora UI                                 │
│  • Spacing: 8px base → [8,16,24,32,48,64,96]         │
│  • Typography: Clash Display (headings) +             │
│    Satoshi (body), scale: 14/16/18/24/32/48/64        │
│  • Colors: --foreground: hsl(210,20%,95%)             │
│    --secondary: hsl(260,30%,70%)                      │
│    --muted: hsl(230,15%,45%)                          │
│    --faint: hsl(230,20%,12%)                          │
│    --accent: hsl(280,80%,65%)                         │
│  • Radius: 12px                                       │
│  • Motion: high, GSAP + ScrollTrigger                 │
│  • Reduced-motion: fade-only fallback                 │
│  • Anti-patterns: no flat backgrounds (must have      │
│    gradient mesh), no sharp corners on cards,          │
│    no monochrome palette, no static hero               │
│  • Acceptance: ① gradient mesh visible on ≥2 sections │
│    ② scroll-triggered reveals on all below-fold        │
│    sections ③ aurora glow effect on hero/CTA           │
│    ④ smooth 60fps scroll on 1440px ⑤ reduced-motion   │
│    shows fade-only with no layout shift                │
│                                                      │
│ Assumptions: (none — all user-provided)               │
│                                                      │
│ Plan Preview:                                         │
│  • src/components/Hero/                               │
│  • src/components/Features/                           │
│  • src/components/Pricing/                            │
│  • src/styles/tokens.css                              │
│  • src/lib/scroll-animations.ts                       │
│  • public/images/ (product shots)                     │
│                                                      │
│ Verification:                                         │
│  npm run lint → npm run build                         │
│  Manual QA: scroll-through at 375px, 768px, 1440px   │
└─────────────────────────────────────────────────────┘
```

→ Locked decisions also written to `.ai-kit/prompts/DECISIONS-LOCKED.md`.

**Now** the agent may proceed to PLAN.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.0.

## 🩹 [LEGACY] SYSTEM PATCH (v3.1) — Skill Selection Gate — 2026-02-28

### Gate H: Skill Selection Gate

**Trigger:** Any of the following:
1. User explicitly requests external skills (e.g., "use skills from awesome-skills", "pick a bundle", `PICK_BUNDLE`, `PICK_SKILLS`)
2. Task matches domains where external skills add high value: **security**, **devops**, **observability**, **testing**, **deployment**
3. User's task description contains skill-related keywords: `skill`, `bundle`, `@skill-name`, `awesome-skills`, `external skill`

**Questions to ask (only missing):**
1. Do you want to use external skills from the Community Skills Library library for this task? (yes/no)
2. *(If yes)* Which domain is most relevant? — Options:
   - **a) Full-Stack / SaaS** → suggest `Full-Stack Developer` bundle
   - **b) Frontend / Design** → suggest `Web Wizard` or `Web Designer` bundle
   - **c) Security** → suggest `Security Developer` bundle
   - **d) DevOps / Infra** → suggest `DevOps & Cloud` bundle
   - **e) Testing / QA** → suggest `QA & Testing` bundle
   - **f) General** → suggest `Essentials` bundle
3. *(After bundle selected)* Which 1–3 skills from this bundle do you want to allowlist? — Present the bundle's starter skills with risk levels. Default to `risk: safe` skills only.

**Outputs:**
- Filled `SKILLS-ALLOWLIST.md` with:
  - Task name
  - Selected bundle
  - 1–3 allowed skills with risk levels
  - Risk check (all safe / has unknown)
  - Decision Report alignment
- Allowlist status: UNLOCKED (pending `APPLY_SKILLS_ALLOWLIST`)

**Rule:** No external skill may be invoked until Gate H is complete and the allowlist is locked.

---

### Updated Trigger Heuristics (v3.1)

The following row is added to the Decision Trigger Heuristics table:

| Domain | Trigger Keywords | Gates |
|--------|-----------------|-------|
| External Skills | skill, bundle, @skill-name, awesome-skills, external skill, pick skills | H |
| Security + Skills | security audit, pentest, vulnerability, hardening + any H trigger | A + B + H |
| DevOps + Skills | deploy, CI/CD, container, serverless + any H trigger | A + C + H |

**Rule:** Gate H is independent of Gates A–G. It may trigger alone (when user just wants skills) or alongside other gates (when the task is also choice-heavy). Gate H does NOT block PLAN by itself — it only blocks external skill invocation.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.0.

## 🩹 [LEGACY] SYSTEM PATCH (v3.2) — Non-Trivial Task Heuristic — 2026-02-28

### Complexity-Based Plan Trigger

The following row is added to the Decision Trigger Heuristics:

| Domain | Trigger Criteria | Action |
|--------|-----------------|--------|
| Non-Trivial Task | ≥ 3 steps, OR ≥ 2 files, OR unknown bug, OR architectural change | Mandate PLAN before CODE (even if no decision gate keywords are detected) |

**Clarification:** This does NOT trigger Decision Gates. It only mandates that PLAN approval happens before CODE. If keyword-based gates (A–H) are also triggered, they run additionally.

This catches tasks that are complex but don't match existing keyword heuristics — for example, a multi-file refactor that doesn't touch auth, UI, or architecture keywords.

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.0.

## 🩹 [LEGACY] SYSTEM PATCH (v3.3) — Gate Extensions for UI, Content, and Specs — 2026-02-28

### Gate D Extension: Inspiration Selection (v3.3)

When Gate D (UI Genre + Aesthetic Lane) triggers and the UI lane is **not** already locked in DECISIONS-LOCKED.md:

1. Ask: "Do you have 2–3 reference sites/apps for the look you want?"
   - If yes → extract best-match lane from references via `ui-inspiration-to-lane.md`
   - If no → present 3–5 lanes from `ui-inspiration-to-lane.md` (A–E) and ask user to choose
2. Output must include:
   - Chosen lane name + rationale
   - Acceptance criteria (5–8 items)
   - **Asset pipeline flag:** YES / NO / MAYBE
3. Lock lane to DECISIONS-LOCKED.md under "UI Lane"

### Asset Pipeline Toggle (v3.3)

After Gate D lane lock, evaluate the asset pipeline flag:

| Flag | Action |
|------|--------|
| **YES** | Require `landing-bg-asset-pipeline.md` activation as SUPPORT (or REF-ONLY if SUPPORT slot is full) |
| **NO** | Explicitly **block** `landing-bg-asset-pipeline.md` activation. Print refusal if attempted. |
| **MAYBE** | Ask user: "Your lane may benefit from a custom background. Want to activate the BG asset pipeline?" |

### Anti-Slop Polish Mandatory Output (v3.3)

If the current task includes **landing page or dashboard UI work** (detected by keywords: landing, dashboard, hero, UI, page, polish):

After Gate E/F lock tokens and motion level:
1. Trigger `anti-ai-slop-details.md` decision gate
2. Ask: which polish intensity? (Low / Medium / High)
3. Lock intensity + icon system + motion level + accessibility target
4. **AUDIT phase must include** checking against the anti-slop checklist — this is not optional for UI tasks

### Deliverables Spec Option (v3.3)

For product builds (detected by: SaaS, app, product, platform, marketplace):

1. Offer `deliverables-specs.md` as SUPPORT — but respect max-2 rule:
   - If SUPPORT slot is open → activate as SUPPORT
   - If SUPPORT slot is occupied → mark as REF-ONLY but still require its key outputs (sitemap, journeys, perf budgets) in the Decision Report
2. Decision Gate: ask scope depth (A/B/C) from the card's lane options
3. All deliverables spec outputs written to DECISIONS-LOCKED.md

### v3.3 Trigger Heuristics Additions

| Domain | Trigger Keywords | Gates / Actions |
|--------|-----------------|-----------------|
| UI Lane Selection | inspiration, vibe, aesthetic, premium, look, feel, style, "make it look like" | D (extended) |
| Landing + BG | landing, hero, background, illustrated, custom BG | D (extended) + asset pipeline toggle |
| UI Polish | landing, dashboard, page, UI, polish, anti-slop, detail, microdetail | E/F + anti-slop checklist |
| Product Spec | SaaS, app, product, platform, marketplace, sitemap, journeys | Deliverables spec option |
| Content | copy, headline, CTA, testimonial, FAQ, content, tagline | Content architecture gate |
| Component Logic | filter, search, table, wizard, form, state, pagination | Component logic spec gate |
| Style Extraction | "match this", reference, "look like", extract style, button style | Reference style extraction gate |

---

> **LEGACY NOTE:** Historical patch label. Current canonical version is KIT_VERSION v2.0.0.

## 🩹 [LEGACY] SYSTEM PATCH (v3.5) — Cinematic Landing Lane — 2026-03-01

### Gate D Extension: Cinematic Landing Lane Option (v3.5)

When Gate D (UI Genre + Aesthetic Lane) triggers and the user explicitly selects the **Cinematic Landing Lane** (via Template K or activation phrase), the standard lane selection (Glassmorphism Dark / Soft UI / Aurora UI / etc.) is **replaced** by the cinematic preset selection:

1. **Preset Selection (A–D)** — Present all four presets from `cards/cinematic-landing-lane.md` source:
   - **A) Organic Tech** — Clinical boutique; moss/clay/cream palette; Plus Jakarta Sans + Cormorant Garamond
   - **B) Midnight Luxe** — Dark editorial; obsidian/champagne/ivory palette; Inter + Playfair Display
   - **C) Brutalist Signal** — Raw precision; paper/signal-red palette; Space Grotesk + DM Serif Display
   - **D) Vapor Clinic** — Neon biotech; deep void/plasma palette; Sora + Instrument Serif
   User must pick exactly one.

2. **Stack Confirmation** — Default: React 19 + Tailwind v3.4.17 + GSAP 3 + Lucide React. User may override.

3. **Motion Level** — Default: High (source mandates cinematic scroll animations). User may downgrade to Med or Low.

4. **`prefers-reduced-motion` stance** — Options: disable all motion / fade-only fallback / keep subtle.

5. **Acceptance Criteria (3–5 checks)** — Derived from selected preset + fixed design system. Must include at minimum:
   - Noise overlay at 0.05 opacity
   - Hero typography matches preset's line pattern
   - All seven component sections (A–G) present and functional
   - GSAP ScrollTrigger stacking cards pin correctly
   - Magnetic button hover effect active

**Outputs (written to DECISIONS-LOCKED.md):**
- Selected preset (letter + name)
- Confirmed stack
- Motion level + reduced-motion policy
- Acceptance criteria list (3–5 items)

**Rule:** The agent **must not** proceed to PLAN or CODE until the Decision Report exists containing these outputs. This follows the existing v3 rule — no new behavior, just a new lane option within Gate D.

### v3.5 Trigger Heuristics Addition

| Domain | Trigger Keywords | Gates / Actions |
|--------|-----------------|-----------------|
| Cinematic Landing | cinematic, cinematic landing, preset A–D, "cinematic landing lane" | D (cinematic preset flow) + F (motion) + G (verification) |

**Rule:** The cinematic landing lane is **never auto-detected** from keywords alone. The user must explicitly request it or use Template K. The trigger keywords above only apply AFTER the user has activated the lane.

---

## 🔒 CANONICAL (KIT_VERSION v2.0.0)

This file contains legacy patch notes (v1.x, v3.x, SYSTEM PATCH). The authoritative versioning policy is in `.ai-kit/VERSIONING.md`. 
If any older section contradicts this block or the core principles of v2.0.0, treat the older section as deprecated.

**DECISION-GATES.md Invariants:**
- **Mandatory:** If triggered by keywords or resource type, gates must be answered before PLAN.
- **Reporting:** A Decision Report must be produced and locked to `DECISIONS-LOCKED.md`.
- **Logic Not Resources:** Gates enforce EPCC. They do not consume the 2 ACTIVE resource slots.
