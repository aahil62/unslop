---
name: interview
description: Interview the user about taste, brand, and audience, then synthesize a custom design lane (LANE.md + tokens) for their React + Tailwind site. Use when the user wants a design direction, says "make it look premium/professional/not AI-generated", or after /unslop:audit before any re-theming. No code changes — output is the approved LANE.md.
---

# Design Interview → Lane Synthesis

Turn the user's taste into a locked, custom design lane. No two runs should
produce the same lane. **No code is modified** — the deliverable is an approved
`unslop/LANE.md` plus a ready-to-paste tokens block.

Read first, in full:
- `${CLAUDE_PLUGIN_ROOT}/rules/lane-synthesis.md` — the synthesis rules (binding)
- All four files in `${CLAUDE_PLUGIN_ROOT}/examples/lanes/` — calibration for what
  "complete and coherent" means. **Never copy one**; the synthesized lane must
  differ from every example in at least identity, palette, and type pairing.

## The interview

Ask **one question at a time** (use AskUserQuestion with options where natural).
Skip anything already answered by the conversation, the audit report
(`unslop/DESIGN-AUDIT.md`, if present), or visible brand assets in the repo.
Required inputs:

1. Brand name + one-line purpose (free text)
2. The visitor: describe one real person who should love this site
3. Three mood words (offer contrasting example trios, e.g. "calm/clinical/premium"
   vs "loud/raw/confident" vs "neon/futuristic/precise" — plus free text)
4. 2–3 reference sites they admire, and *what specifically* about each
5. Light, dark, or both
6. Color temperature: warm / cool / neutral — or locked brand colors (hex) if they exist
7. Motion appetite: calm / standard / cinematic
8. Content density: airy / balanced / dense

## Synthesis

Apply `rules/lane-synthesis.md` steps 1–9 in order. Sharp edges to respect:

- Identity sentence uses two concrete physical places/objects. "Modern and clean" is banned.
- Exactly 4 palette roles with exact hex; one accent; AA contrast between Ink and
  both surfaces (verify arithmetic, don't eyeball).
- 3 type slots, max 3 weights total, real Google Fonts, stated scale.
- One signature texture; one signature moment derived from the brand's actual
  subject matter (not copied from an example lane).
- Do/Don't list (5+5) in implementable CSS terms.
- 3–5 acceptance checks verifiable from a screenshot or script.

## Approval gate

Present the lane as a short pitch: identity sentence, palette swatches (hex + role),
type pairing, the signature moment — then ask the user to approve, tweak, or
re-roll (a meaningfully different lane from the same answers). Iterate until
approved. **Only after explicit approval**, write:

- `unslop/LANE.md` — using the output format in `rules/lane-synthesis.md`
- The tokens block inside it: `:root` CSS variables + matching Tailwind config
  mapping, ready to paste

Then point the user to `/unslop:retheme`.
