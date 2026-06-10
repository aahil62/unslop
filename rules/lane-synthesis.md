# Lane Synthesis Rules

How to turn interview answers into a **custom design lane** — a complete, coherent
aesthetic direction unique to this site. The four files in `examples/lanes/` are
worked examples that show what a finished lane looks like. **They are calibration,
not a menu**: never copy one verbatim. A synthesized lane must differ from every
example (and from previous syntheses) in at least identity, palette, and type pairing.

A lane is locked into `LANE.md` in the user's project and must be explicitly
approved by the user before any retheme begins.

---

## Inputs (from the interview)

- Brand name + one-line purpose
- Audience: one real person described
- 3 mood words
- 2–3 reference sites + *what specifically* they like about each
- Light / dark / both
- Color temperature (warm / cool / neutral / tinted)
- Existing brand assets (locked colors/fonts?) — these override derivation
- Motion appetite (calm / standard / cinematic)
- Content density (airy / balanced / dense)

## Synthesis steps

### 1. Identity sentence

Formula: **"A [concrete place/object A] meets [concrete place/object B]."**
Both halves must be physical, specific, and embody the mood words.
Good: "a genome sequencing lab inside a Tokyo nightclub", "a private members'
club meets a watchmaker's atelier". Banned: "modern", "clean", "professional",
"sleek" — those are outcomes, not identities. Every later decision is tested
against this sentence.

### 2. Palette (exactly 4 roles)

| Role | What it is |
|------|------------|
| **Surface** | Dominant background family |
| **Ink** | Text color (near-black or near-white, tinted toward the surface hue — never pure #000/#fff) |
| **Accent** | The ONE saturated color, used only for interaction and emphasis |
| **Field** | Secondary surface for cards/sections (a tint or shade of Surface) |

Derivation rules:
- Hue family comes from temperature + industry + mood words; the accent sits
  ≥ 40 hue-degrees from the surface family or is its complement.
- Exact hex values, defined as CSS variables. Never stock Tailwind `indigo-600`.
- Ink-on-Surface and Ink-on-Field must pass WCAG AA (verify with `contrast-check.mjs`).
- One accent. If the user's brand has two, one is demoted to decorative-only.

### 3. Typography (3 slots, max 3 weights total)

| Slot | Role | Rules |
|------|------|-------|
| **Heading** | Sans, tight tracking (−0.02 to −0.04em) | Carries the identity's *structure* half |
| **Drama** (optional) | Serif italic or display, used 1–3 times per page at large scale | Carries the identity's *emotion* half; omit for utilitarian lanes |
| **Mono** | Data, labels, eyebrows, status text | Small but high-leverage premium signal |

Pairing rules: heading and drama must contrast in construction (geometric sans ×
humanist serif, grotesque × didone). Use Google Fonts. Inter-everywhere is allowed
only if the lane deliberately chooses neutrality — and then drama/mono must work harder.
Lock a type scale: e.g. 14/16/18/24/32/48/72 with body at 16–18.

### 4. Space, radius, depth

- Spacing base 4px; pick the rhythm from density: airy = generous section padding
  with tight intra-component spacing; dense = the reverse. Write the actual scale.
- Radius expresses personality — pick ONE system and state roles:
  sharp (0–2px, brutalist/editorial), soft (8–16px, product/SaaS),
  organic (24–48px, boutique/wellness), pill (controls only).
- Depth: choose ONE primary cue — borders / shadows / layered tints — and define
  2–3 explicit elevation levels if shadows.

### 5. Texture (the signature surface)

Flat default gradients are the #1 slop tell. Pick one:
- SVG `feTurbulence` noise overlay at 0.03–0.06 opacity
- Grain/paper texture on Surface
- Tinted glass layers (backdrop-blur with 1px hairline borders)
- Deliberate flatness with hairline rules and high type contrast (editorial)

### 6. Motion budget

| Appetite | Durations | Behavior |
|----------|-----------|----------|
| Calm | 150–250ms ease-out micro only | No scroll-triggered entrances |
| Standard | micro 150–250ms, macro 300–500ms | Staggered reveals (0.08 text / 0.15 cards) on key sections only |
| Cinematic | up to 600–800ms custom curves | Scroll-linked sequences allowed; requires GSAP; hero gets a choreographed entrance |

Always: `prefers-reduced-motion` stance stated (disable / fade-only / keep-subtle).
Never `transition-all`.

### 7. Signature moment

Exactly one distinctive, memorable element that no template ships — derived from
the brand's actual subject matter. Examples of the *kind* of thing: a hero headline
that mixes sans and giant serif italic; a live monospace ticker of real domain data;
an interactive diagram of the product's process. This is the uniqueness lever:
two lanes with similar palettes must still differ here.

### 8. Do / Don't list (5 + 5)

Ten implementable rules specific to this lane, in CSS/design terms.
"Do: 80%+ whitespace above the fold" — not "do: feel premium".

### 9. Acceptance checks (3–5)

Concrete checks verifiable by looking at a screenshot or running a script.
These become the retheme exit criteria, e.g. "① noise overlay visible on Surface
② drama serif appears exactly twice ③ accent appears only on interactive elements
④ AA contrast passes ⑤ no horizontal scroll at 375px."

---

## Output: `LANE.md` format

```markdown
# Lane: <name — two words, evocative>

**Identity:** A <…> meets <…>.
**Mood words:** <from interview>

## Palette
| Role | Hex | Notes |
…CSS variables block…

## Typography
…slots, weights, scale, Google Fonts links…

## Space, radius, depth
…actual scales and elevation levels…

## Texture
…the one signature surface treatment…

## Motion
…budget, durations, easing, stagger, reduced-motion stance…

## Signature moment
…one paragraph…

## Do / Don't
…5 + 5…

## Acceptance checks
…3–5 numbered…
```

Plus a **tokens block**: `:root` CSS variables and the matching Tailwind config
mapping (`theme.extend.colors` etc.) ready to paste.
