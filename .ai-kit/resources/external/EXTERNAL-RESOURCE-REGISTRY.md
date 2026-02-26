# External Resource Registry

> Track resources from outside this kit (your own docs, repos, tools, etc.).
> This is a **template** — fill it in with your own resources.

---

## How to Add Resources

1. Add a row to the table below.
2. Create a resource card in `cards/your-resource-name.md` summarizing the resource.
3. Add an activation phrase to `../prompts/ACTIVATE.md`.
4. Add the resource to `../RESOURCE-INDEX.md`.

---

## Registry

| # | Resource | Type | Domain | Authority | Notes |
|---|----------|------|--------|-----------|-------|
| 1 | _Your Resource Name_ | _Doc / Repo / Tool_ | _Your Domain_ | `PRIMARY` or `SUPPORT` | _Brief description_ |
| 2 | _Your Resource Name_ | _Doc / Repo / Tool_ | _Your Domain_ | `PRIMARY` or `SUPPORT` | _Brief description_ |
| 3 | _Your Resource Name_ | _Doc / Repo / Tool_ | _Your Domain_ | `PRIMARY` or `SUPPORT` | _Brief description_ |

---

## Column Definitions

| Column | Description |
|--------|-------------|
| **Resource** | Human-readable name of the resource |
| **Type** | What kind of resource: `Doc` (documentation), `Repo` (code repository), `Tool` (CLI or service) |
| **Domain** | Which domain it serves (e.g., UI-System, Workflow, Reliability) |
| **Authority** | `PRIMARY` (sets rules) or `SUPPORT` (assists) — see RESOURCE-INDEX.md for rules |
| **Notes** | Brief description of what it provides |

---

## Rules

- Max 2 ACTIVE resources per task (1 PRIMARY + 1 SUPPORT). External resources count toward this limit.
- One PRIMARY per Domain. If an external resource conflicts with a built-in resource on the same domain, ask the user which one to keep.
- Create a card for each external resource to document its rules, outputs, and activation phrase.
