# Unslop

> The rescue tool for sites you already built. Audit → interview → re-theme an
> existing **React + Tailwind** site into a custom identity — verified at every
> step, without breaking your build.

Most design skills *generate* new UI or *lint* one dimension of it. Unslop does
neither: it takes a site you've **already shipped** and runs it through a single
stateful pipeline — measure what's wrong, decide what "good" means for *your*
brand, then apply it with a hard build-and-screenshot check after every change.
The output of each stage feeds the next, and nothing claims "done" without
evidence. It's a Claude Code plugin (Codex-compatible) with three stages:

1. **`/unslop:audit`** — scores your site against an evidence-based
   anti-slop checklist: screenshots at 4 breakpoints, WCAG contrast checks, and a
   static scan for the classic tells (default indigo buttons, purple-to-blue
   gradients, `transition-all`, font-weight sprawl…). Output: `DESIGN-AUDIT.md`
   with a score and file:line evidence. Read-only — it never touches your code.
2. **`/unslop:interview`** — asks about your brand, audience, and taste
   one question at a time, then **synthesizes a custom design lane**: identity,
   palette, type pairing, texture, motion budget, and one signature moment.
   Rules-driven creativity — no preset menu, no two sites alike. You approve the
   lane before anything changes.
3. **`/unslop:retheme`** — applies the approved lane systematically:
   tokens → typography → section by section → states & motion. After every pass
   the build must succeed and fresh screenshots are taken. Ends with a re-audit
   and a before/after report.

## Install

**Claude Code:**

```
/plugin marketplace add aahil62/unslop
/plugin install unslop@unslop
```

**Codex / other AGENTS.md-aware tools:** clone this repo and point your agent at
[AGENTS.md](AGENTS.md) — same workflow, same rules.

The audit and retheme stages use Playwright for screenshots and contrast checks.
In the project being rescued:

```
npm i -D playwright && npx playwright install chromium
```

(If the chromium download is blocked, the scripts fall back to your installed Chrome.)

## Use

From your site's repo:

```
/unslop:audit        # how bad is it, with evidence
/unslop:interview    # define what *good* looks like for this brand
/unslop:retheme      # make it so, verified pass by pass
```

## What's inside

```
skills/            audit · interview · retheme (the three workflows)
rules/             anti-slop-checklist.md (scoring rubric) · lane-synthesis.md (creativity rules)
examples/lanes/    4 worked design lanes — calibration for the synthesizer, not a menu
scripts/           screenshot.mjs · contrast-check.mjs · slop-scan.mjs (deterministic checks)
AGENTS.md          Codex adapter
```

## Scope (v1, deliberately narrow)

- **React + Tailwind only** — what v0, Lovable, Bolt, Claude, and Cursor actually
  produce. Other stacks are politely declined.
- Rescues existing sites; it doesn't scaffold new ones.
- No MCP server, no framework, no methodology — three skills and a rubric.

Freelancers: a before/after retheme with an audit score delta is a sellable
deliverable. Quote the outcome, not hours.

## License

MIT — see [LICENSE](LICENSE). Pre-pivot methodology kit lives on the
[`legacy-v2`](../../tree/legacy-v2) branch.
