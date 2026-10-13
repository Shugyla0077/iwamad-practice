# Week 5 — Handoff notes (SIS 2 starter design)

## Routes (from the prototype)
- `/` — Posts feed (Home page with post cards list)
- `/posts/:id` — Single post detail page (Read more view)
- `*` — 404 Not Found page

## Components -> React files
- PostCard -> `src/components/ui/Card.tsx` (and `src/components/ProfileCard.tsx`)
- Button -> `src/components/ui/Button.tsx`
- Tag -> `src/components/ui/Tag.tsx` (and `src/components/SkillBadge.tsx`)

## Button variants -> prop
- `variant = "primary" | "secondary"` (defaults to "primary")

## PostCard layout
- direction: column (vertical flex)
- gap: 16px (var(--space-4))
- padding: 24px (var(--space-6))
- radius: 16px (var(--radius-lg))

## Breakpoint change
- phone (< 640px): 1 column layout, stacked header (flex-direction: column)
- desktop (>= 640px): multi-column layout, horizontal header (flex-direction: row)

## Tokens (all ten)
1. `color/primary`: `#1d4ed8`
2. `color/primary-hover`: `#1e40af`
3. `color/secondary`: `#f1f5f9`
4. `color/secondary-text`: `#0f172a`
5. `color/text`: `#0f172a`
6. `color/text-muted`: `#64748b` (original `#94a3b8` failed 4.5:1 contrast, fixed to `#64748b`)
7. `color/surface`: `#ffffff`
8. `color/border`: `#e2e8f0`
9. `space/4`: `16px`
10. `radius/lg`: `16px`