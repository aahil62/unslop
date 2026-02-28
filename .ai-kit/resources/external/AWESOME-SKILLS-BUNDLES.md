# 📦 Awesome Skills — Curated Bundles for Web / SaaS

> **Version:** v3.1 — 2026-02-28
> **Source:** `<your-repo>/community-skills-library` (private reference only)
> **Important:** Bundles are recommendations, NOT activations. You still need to allowlist max 3 skills per task via `SKILLS-ALLOWLIST.md`.

---

## How Bundles Work

1. **Bundles are curated lists** — they recommend skills organized by role or goal.
2. **You already have all skills** — if the library is installed, every skill is available. Bundles just help you find the right ones.
3. **Pick 3–5 skills from a bundle**, not the whole list. Our governor limits to **max 3 per task**.
4. **Combine bundles** for broader coverage (e.g., `Essentials` + `Full-Stack Developer` for a SaaS build).

---

## 🚀 Essentials

**Good for:** Every project. Install-and-forget starter skills for planning, linting, git, debugging, and continuous improvement.

**Starter skills:**
- `@concise-planning` — Always start with a plan
- `@lint-and-validate` — Keep code clean automatically
- `@git-pushing` — Safe git workflows
- `@kaizen` — Continuous improvement mindset
- `@systematic-debugging` — Structured debugging

**NOT for:** Domain-specific work (security, DevOps, design). Pair with a domain bundle.

---

## 🌐 Web Wizard

**Good for:** Building modern, high-performance web apps. Frontend-heavy with React/Next.js focus.

**Starter skills:**
- `@frontend-design` — UI guidelines and aesthetics
- `@react-best-practices` — React & Next.js performance optimization
- `@react-patterns` — Modern React patterns and principles
- `@nextjs-best-practices` — Next.js App Router patterns
- `@tailwind-patterns` — Tailwind CSS v4 styling
- `@form-cro` — Form conversion optimization
- `@seo-audit` — Search engine optimization

**NOT for:** Backend-heavy work, security audits, or infrastructure. Pair with `Full-Stack Developer` for backend coverage.

---

## 🖌️ Web Designer

**Good for:** Pixel-perfect, visually stunning web experiences. Design systems, 3D, scroll animations.

**Starter skills:**
- `@design-search` — Premium design systems and tokens
- `@frontend-design` — Base layer aesthetics
- `@3d-web-experience` — Three.js & React Three Fiber
- `@canvas-design` — Static visuals and posters
- `@mobile-design` — Mobile-first design principles
- `@scroll-experience` — Immersive scroll-driven experiences

**NOT for:** Backend logic, API design, or testing. This is purely visual/UX.

---

## ⚡ Full-Stack Developer

**Good for:** End-to-end web application development. Backend APIs, database design, payments, and frontend.

**Starter skills:**
- `@senior-fullstack` — Complete fullstack development guide
- `@frontend-developer` — React 19+ and Next.js 15+ expertise
- `@backend-dev-guidelines` — Node.js/Express/TypeScript patterns
- `@api-patterns` — REST vs GraphQL vs tRPC selection
- `@database-design` — Schema design and ORM selection
- `@stripe-integration` — Payments and subscriptions

**NOT for:** Security hardening, DevOps/deployment, or design polish. Pair with `Security Developer` or `Web Designer`.

---

## 🐞 QA & Testing

**Good for:** Breaking things before users do. TDD, E2E testing, browser automation, code review.

**Starter skills:**
- `@test-driven-development` — Red, Green, Refactor
- `@systematic-debugging` — Debug like Sherlock Holmes
- `@browser-automation` — End-to-end testing with Playwright
- `@e2e-testing-patterns` — Reliable E2E test suites
- `@ab-test-setup` — Validated experiments
- `@code-review-checklist` — Catch bugs in PRs
- `@test-fixing` — Fix failing tests systematically

**NOT for:** Writing production features or designing UIs. This is quality assurance only.

---

## 🌧️ DevOps & Cloud

**Good for:** Infrastructure, containers, serverless, deployment, and CI/CD.

**Starter skills:**
- `@docker-expert` — Containers and multi-stage builds
- `@aws-serverless` — Serverless on AWS (Lambda, DynamoDB)
- `@kubernetes-architect` — K8s architecture and GitOps
- `@terraform-specialist` — Infrastructure as Code
- `@environment-setup-guide` — Team standardization
- `@deployment-procedures` — Safe rollout strategies
- `@bash-linux` — Terminal wizardry

**NOT for:** Application logic, UI design, or testing. Pair with `Full-Stack Developer` for app + infra.

---

## 🔐 Security Developer

**Good for:** Building secure applications. Secure auth, API hardening, frontend security, compliance.

**Starter skills:**
- `@api-security-best-practices` — Secure API design patterns
- `@auth-implementation-patterns` — JWT, OAuth2, session management
- `@backend-security-coder` — Secure backend coding practices
- `@frontend-security-coder` — XSS prevention and client-side security
- `@cc-skill-security-review` — Security checklist for features
- `@pci-compliance` — Payment card security standards

**NOT for:** Offensive security or pentesting. Use the `Security Engineer` bundle for that (contains `@ethical-hacking-methodology`, `@burp-suite-testing`, etc.).

---

## Bundle Combo Suggestions

| Goal | Bundles | Pick Skills From |
|------|---------|-----------------|
| Ship a SaaS MVP | `Essentials` + `Full-Stack Developer` + `QA & Testing` | 3 skills max per task |
| Harden production | `Security Developer` + `DevOps & Cloud` | 3 skills max per task |
| Premium landing page | `Essentials` + `Web Designer` | 3 skills max per task |
| Full-stack + polish | `Full-Stack Developer` + `Web Wizard` | 3 skills max per task |

---

## Related Files

| File | Purpose |
|------|---------|
| `AWESOME-SKILLS.md` | What the external library is, safety policy, install paths |
| `AWESOME-SKILLS-WORKFLOWS.md` | Step-by-step playbooks mapped to EPCC |
| `../prompts/SKILLS-ALLOWLIST.md` | Per-task allowlist template |
