# Resource Card: UI Polish Checklist

> **Domain:** UI-Polish
> **Authority:** PRIMARY

---

## What It Is
A tactical, component-level refinement checklist for elevating UI from "functional" to "premium." Covers hero sections, CTAs, cards, navigation, typography hierarchy, micro-animations, section transitions, and visual depth.

## When to Use
- Feature is functional but lacks visual impact or depth
- Doing a final design pass before shipping
- UI feels "flat" or generic and needs professional polish
- Refining individual components (buttons, cards, forms) to premium quality

## Outputs
- **Polish audit report** — Component-by-component list of refinements applied
- **Animation spec** — Duration, easing, and trigger for each micro-animation
- **Visual hierarchy map** — Heading sizes, weight, color, and spacing relationships
- **Before/after comparison** — Documented improvements for team review

## Activation Phrase
```
Apply UI Polish Checklist to this component.
```

## Conflicts / Overlaps
- **Downstream of** UI-System-Specs — Polish refines components that Specs defines. Use Specs for the foundation, Polish for the finish.
- **Complements** Dashboard-IA and Landing-Patterns as SUPPORT for the refinement layer.

## Extracted Rules

### 1. Hierarchy Before Decoration
Establish clear visual hierarchy (size, weight, color, spacing) before adding animations or effects. Decoration without hierarchy is noise.

### 2. Depth Through Layering
Use subtle shadows, background tints, and border colors to create depth. Flat designs use layered backgrounds, not just flat colors.

### 3. Micro-Animations Serve Function
Every animation needs a purpose: feedback (button press), attention (notification), hierarchy (stagger reveal), or delight (success state). No gratuitous motion.

### 4. Consistent Transition Timing
Standardize on 2-3 transition durations: fast (150ms) for hovers, medium (250ms) for reveals, slow (400ms) for page transitions. Same easing function throughout.

### 5. CTA Must Pop
Primary call-to-action needs maximum contrast, generous padding, and clear hierarchy above secondary actions. Test: can you find the CTA in under 2 seconds?

### 6. Whitespace Is Not Wasted Space
Generous padding and margins signal premium quality. Crowded layouts feel cheap. When in doubt, add more space.

### 7. States Are Not Optional
Every interactive element needs: default, hover, active, focus, disabled, and loading states. Missing states = unfinished work.

### 8. Typography Weight Contrast
Use at most 3 font weights per page. Ensure heading/body weight contrast is at least 200 (e.g., 700/400). Thin weights need large sizes.
