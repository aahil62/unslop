# 🃏 Resource Card: Phased Build Protocol

> **Domain:** Workflow
> **Source:** `<your-source-type>` — `<your-source-reference>` *(add your own source snapshot in `../sources/`)*

---

## What it is
A structured 5-phase build protocol for taking a project from requirements to deployment. Each phase has explicit entry/exit criteria, ensuring nothing is skipped and every integration is verified before moving forward.

## Authority Level
`PRIMARY`

## When to use it
- When starting a greenfield project that needs end-to-end structure
- When the project involves backend integrations (databases, auth, APIs) and benefits from a data-first approach
- When you want deterministic phase progression with verification gates between steps

## Outputs
- Data schemas and entity-relationship definitions
- Integration verification reports
- Three-layer architecture (Data → Logic → Presentation)
- Deployment-ready builds with smoke tests

## Activation phrase
```
Activate Phased Build protocol for this project.
```

## Conflicts / Overlaps
- **Overlaps with** Dev-Workflow (EPCC) — Phased Build is a *project-level* system covering the full lifecycle; EPCC is a *task-level* dev loop for incremental work. Use Phased Build for greenfield builds, EPCC for feature iteration.
- **Do not combine with** Scaffold-Builder as PRIMARY — pick one project framework.

## Extracted Rules

### 1. Data Model Before Code
Define every entity, field, and relationship before writing components. Verify all external connections (APIs, auth, storage) are working before building UI on top of them.

### 2. Three-Layer Architecture
Every build follows: **Data layer** (schemas, APIs, storage) → **Logic layer** (business rules, state management) → **Presentation layer** (UI/UX). Never skip a layer or build them out of order.

### 3. Phase Gates Are Mandatory
Do not advance to the next phase until the current phase passes its verification checklist. Each phase has explicit exit criteria that must be met.

### 4. Resilient Integration Points
Every external integration must include retry logic, fallback values, and user-facing error states. No silent failures allowed.

### 5. Style After Structure
UI polish happens only after the architecture is stable. Premature styling causes rework when the underlying structure changes.

### 6. Deployment Is a Phase, Not a Push
The final phase includes build verification, environment configuration, domain setup, and post-deploy smoke tests. "Push to main" is not shipping.

---

## 🚦 Decision Gate (v3) — 2026-02-28

### Required Inputs
- Data model (entities, fields, relationships)
- Auth model (email/pwd, OAuth, magic link)
- External integrations (database, payments, third-party APIs)
- Deployment target (static hosting, VPS, Edge)
- Authorization approach (RLS, role-based, API keys)

### Option Lanes

| Lane | Description | Best For |
|------|-------------|----------|
| **Full-Stack BaaS** | Managed auth + database + realtime + edge functions | Rapid SaaS MVP with real-time needs |
| **API-First Monolith** | Custom API (Express/Fastify) + Postgres + JWT auth | Complex business logic, custom auth flows |
| **Serverless + BaaS** | Serverless Functions + managed database | Lightweight backends, JAMstack sites |
| **Edge-Native** | Edge workers + distributed KV/DB + zero-trust auth | Low-latency global apps, performance-critical |

### Selection Criteria
- **Data complexity:** High → API-First Monolith or Full-Stack BaaS
- **Real-time needs:** Yes → Full-Stack BaaS
- **Global latency:** Critical → Edge-Native
- **Speed to ship:** Priority → Full-Stack BaaS or Serverless + BaaS

### Outputs After Selection
- Locked data model (entity list + fields + relationships)
- Locked auth model + authorization approach
- Architecture diagram or description
- Integration checklist
- Deployment target confirmed
