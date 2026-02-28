# ✍️ Content Architecture

> **Domain:** Content
> **Type:** CHOICE-HEAVY
> **Authority:** SUPPORT
> **Activation:** `GENERATE_PAGE_COPY`
> **Version:** v3.3 — 2026-02-28

---

## What It Is

A structured content framework that produces all page copy — headlines, subheads, CTAs, feature blocks, testimonials, FAQs, and footer content — before any UI is coded. Ensures copy drives design, not the reverse.

## When to Use

- Building landing pages, marketing sites, or product pages
- User hasn't provided copy and expects the agent to draft it
- Task involves SEO-sensitive pages where H1/H2 hierarchy matters
- Pairing with `deliverables-specs.md` to fill pages with real content

## Outputs

| Artifact | Description |
|----------|-------------|
| **Hero Copy** | Per-page: headline (H1), subhead, primary CTA, secondary CTA |
| **Features Blocks** | 3–6 features with icon suggestion, title, description (2 sentences max) |
| **Testimonials** | 2–3 structured: quote, author, role, company (or placeholder format) |
| **FAQ** | 4–6 Q&A pairs, structured for SEO (schema.org ready) |
| **Footer Copy** | Tagline, legal links, social links, newsletter CTA |
| **H1/H2 Tags** | Complete heading hierarchy per page for SEO |

## Conflicts / Overlaps

- Overlaps with `deliverables-specs.md` on page structure — **deliverables-specs** defines pages, **this** card fills them with copy.
- Does NOT handle UI layout or component styling — that's `ui-inspiration-to-lane.md` and design resources.
- Voice/tone must be locked before writing — conflicts with any assumed tone.

## Rules

1. Never write copy without a locked voice/tone decision.
2. Headlines must be under 10 words. Subheads under 20 words.
3. CTAs must be action verbs ("Get started", "See pricing") not labels ("Learn more").
4. Features blocks: max 6. Each description ≤ 2 sentences.
5. FAQ answers must be self-contained — no "see above" references.
6. All copy must pass a readability check (aim for Grade 8 reading level).
7. H1 is unique per page. H2s support the H1 topic, not independent topics.
8. If compliance constraints exist (legal, medical, financial), flag them before writing.
9. Testimonials: if no real quotes provided, output a template with clear `[PLACEHOLDER]` markers.

---

## 🚦 Decision Gate (v3.3)

### Required Inputs
- Product/service description
- Target audience persona
- Existing copy or brand guidelines (if any)

### Option Lanes

| Lane | Voice | Goal | Tone Example |
|------|-------|------|-------------|
| **A) Professional** | Authoritative, clear, trust-building | Conversion (B2B, enterprise) | "Enterprise-grade security for modern teams." |
| **B) Casual** | Friendly, approachable, human | Awareness + conversion (B2C, startups) | "Finally, a tool that doesn't suck." |
| **C) Bold** | Provocative, high-energy, opinionated | Disruption (challenger brands) | "Your current stack is broken. We fixed it." |
| **D) Minimal** | Ultra-concise, Stripe-like, let-product-speak | Premium aesthetic (dev tools, design tools) | "Payments infrastructure. For the internet." |

### Selection Criteria
- **A** if B2B, enterprise, regulated industry
- **B** if B2C, prosumer, startup with personality
- **C** if challenger brand, crowded market, needs differentiation
- **D** if developer-facing, design-forward, premium positioning

### Compliance Check
- If industry is finance/health/legal → ask: "Any compliance constraints on copy?"
- If yes → voice must be A (Professional) and copy must include required disclaimers.

### Outputs After Selection
- Locked voice (A/B/C/D) with rationale
- Audience persona (1 sentence)
- Compliance flag (yes/no + constraints)
- Written to DECISIONS-LOCKED.md under "Content Architecture"
