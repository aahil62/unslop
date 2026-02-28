# 📋 External Resource Registry

> **Last updated:** 2026-02-28
> Registry of external resources. Append-only — do not rewrite.
> Add your own external resources following the table format below.

---

| # | Resource | Source | Domain | Authority | Best For | Conflicts | Card |
|---|----------|--------|--------|-----------|----------|-----------|------|
| 1 | `<your-external-resource>` | `<source-type>` | `<domain>` | `PRIMARY` | `<best-for description>` | `<conflicts>` | [Card](cards/<your-card>.md) |
| 2 | `<your-external-resource>` | `<source-type>` | `<domain>` | `SUPPORT` | `<best-for description>` | `<conflicts>` | [Card](cards/<your-card>.md) |

> **Note:** This kit ships with example cards in `cards/`. Replace or extend them with your own.
> Each resource should have a matching source snapshot in `sources/` and a card in `cards/`.

---

### Source Types

| Source Type | Description |
|-------------|-------------|
| `GitHub` | GitHub repository README or prompt |
| `Docs` | Documentation, guide, or exported content |
| `Custom` | Your own custom resource |

### How to Add an External Resource

1. **Export** the source content as `.md` into `sources/<type>/`
2. **Create a card** in `cards/` using the card template (see existing cards)
3. **Add a row** to the table above with the resource details
4. **Register** the resource in `RESOURCE-INDEX.md` under External Resources

---

### 🩹 PATCH (v1.2) — 2026-02-25

**UI-System authority:** When two UI-System candidates exist and both claim PRIMARY, the agent must ask the user which one remains PRIMARY. **Only one PRIMARY per Domain is allowed at any time.** The demoted resource becomes SUPPORT or REF-ONLY at the user's choice.

---

### 🩹 SYSTEM PATCH (v1.3) — 2026-02-25

**Conflict Rule:** If another UI-System candidate is activated as PRIMARY, the agent must ask the user which one remains PRIMARY. **Only one PRIMARY per Domain is allowed at any time.** The demoted resource becomes SUPPORT or REF-ONLY at the user's choice.
