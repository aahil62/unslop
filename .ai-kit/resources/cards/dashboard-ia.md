# Resource Card: Dashboard IA

> **Domain:** Dashboard
> **Authority:** PRIMARY

---

## What It Is
An information-architecture methodology for building data-dense dashboards, admin panels, and analytics views. Covers layout grid systems, component hierarchies, KPI card patterns, data visualization placement, filtering, and responsive behavior for complex UIs.

## When to Use
- Building a dashboard, admin panel, or analytics view
- Designing data-dense layouts with charts, tables, and KPI cards
- Implementing real-time data feeds, filtering, or drill-down views
- Restructuring an existing dashboard for clarity and scannability

## Outputs
- **Layout grid spec** — Column system, sidebar width, content area proportions, breakpoint behavior
- **Component hierarchy** — KPI cards → charts → tables → detail panels, with priority ordering
- **Data flow diagram** — Filter inputs → data transformation → visual output mapping
- **Responsive strategy** — How the layout adapts at 768px, 1024px, 1440px breakpoints

## Activation Phrase
```
Use Dashboard IA for this layout.
```

## Conflicts / Overlaps
- **Overlaps with** Landing-Patterns on layout systems — Dashboard is *data-dense multi-view*; Landing is *conversion-focused single-page*. Do not combine as co-PRIMARY.
- **Pairs well with** UI-System-Specs as SUPPORT for consistent design specs.

## Extracted Rules

### 1. KPIs Above the Fold
The most important metrics must be visible without scrolling. Use a row of KPI cards at the top: value, label, trend indicator, sparkline. Maximum 6 KPIs before scrolling.

### 2. Hierarchy: Summary → Detail
Layout follows a top-down hierarchy: KPI summary → primary charts → secondary data → detail tables. Users scan top-down; put answers before exploration.

### 3. Sidebar Navigation Is Collapsible
Dashboard sidebar should collapse to icon-only at narrow widths. Default expanded on desktop (>= 1024px), collapsed on tablet, hidden on mobile with hamburger.

### 4. Filters Persist and Reflect
Active filters must be visible at all times (chips, breadcrumbs, or filter bar). Changing a filter updates all dependent components. URL state reflects filter selections.

### 5. Tables Are Not Walls of Text
Data tables need: sortable columns, row hover highlighting, pagination or virtual scroll, column alignment (numbers right, text left), and empty-state messages.

### 6. Charts Need Context
Every chart needs: title, axis labels, legend (if multi-series), and a summary sentence or KPI above it. A chart without context is just a shape.

### 7. Loading States Are Layout-Stable
Use skeleton screens that match the final layout dimensions exactly. No layout shifts when data loads. Show shimmer animation to indicate progress.

### 8. Responsive Does Not Mean Remove
At narrow widths, stack components vertically rather than hiding them. If a component must be hidden, provide a clear affordance to access it (tab, accordion, modal).
