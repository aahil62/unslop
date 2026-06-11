# Client Report Rules

How to write `unslop/CLIENT-REPORT.html` — the client-facing deliverable produced
at the end of `/unslop:retheme`. The reader is the site's **owner or a paying
client**, not a developer: assume they will never open a markdown file, don't
know what Tailwind is, and care about outcomes, not checklist IDs.

## Format

A single self-contained HTML file (inline CSS, screenshots embedded as relative
paths to `unslop/screenshots/`), printable to PDF from the browser. Style it
simply and neutrally — readable type, generous whitespace. Do **not** style it
in the lane; the report is about the site, not an example of it.

## Structure (in order)

1. **Headline result.** "Design score: 27 → 100" as the biggest element on the
   page, with one sentence of what the score measures (an evidence-based
   checklist of design quality, accessibility, and consistency).
2. **Before / after.** The first audit's 1440px screenshot next to the final
   one (plus dark mode if the lane has it). Captioned, no jargon.
3. **What was wrong.** The original audit's top findings, translated:
   "text too faint to read comfortably (fails accessibility standards)" — not
   "C3 contrast 2.9:1 < 4.5:1". 3–6 bullets, each tied to a visible outcome.
4. **What changed.** One short paragraph per pass theme: colors & identity,
   typography, layout, polish & motion. Name the design direction (the lane's
   name and identity sentence) — clients like knowing their site has one.
5. **Verified results.** The acceptance checks that now pass, in plain terms:
   accessibility contrast (name WCAG AA — clients recognize it), works at
   phone/tablet/desktop widths, no broken layout, light + dark mode.
6. **Footer.** Date, tool ("audited and re-themed with Unslop"), and a pointer
   to the technical reports (`DESIGN-AUDIT.md`, `RETHEME-REPORT.md`) for
   developers who want the evidence trail.

## Language rules

- No checklist IDs, class names, hex codes, or file paths in body text.
- Every claim must trace to evidence that exists in the audit/retheme reports —
  the translation changes the words, never the facts. No inflating the delta.
- Concrete over fluffy: "headings now use a consistent 7-step size scale", not
  "typography was elevated".
- If an acceptance check was not met, it appears here too, honestly, under
  "Known limitations". The client report is a translation of the truth, not a
  sales brochure.
