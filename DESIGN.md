# PrintTrack Design Brief

**Aesthetic**: Professional, precision-focused, industrial. Printing business demands order and clarity. Minimal decoration, maximum data hierarchy. Cool slate primary with warm orange accent for urgency and action.

**Typography**: Space Grotesk (display, geometric authority) + Inter (body, pixel-perfect mobile legibility) + JetBrains Mono (tables, order IDs, data).

**Tone**: Structured, task-driven, no playfulness. Workflows before aesthetics.

## Color Palette

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|-----------|----------|---------|
| Primary | 0.35 0.08 260 | 0.72 0.1 260 | Deep slate; authority, primary CTAs |
| Accent | 0.62 0.18 60 | 0.68 0.2 60 | Warm orange; FAB, urgent status, active states |
| Destructive | 0.55 0.22 25 | 0.62 0.2 25 | Red; delete, cancel, errors |
| Foreground | 0.2 0 0 | 0.93 0 0 | Text contrast, AA+ |
| Background | 0.98 0 0 | 0.12 0 0 | Canvas; near-white light, deep charcoal dark |
| Card | 1.0 0 0 | 0.16 0.02 260 | White light / slate dark; data containers |
| Muted | 0.93 0 0 | 0.22 0.02 260 | Secondary text, disabled states |
| Border | 0.92 0.01 260 | 0.24 0.02 260 | Subtle edge definition |
| Input | 0.95 0.01 260 | 0.24 0.02 260 | Form fields, search bar |
| Chart-1 to 5 | Warm orange, burnt sienna, slate, blue, chartreuse | Inverted contrast | Revenue, pending, status variance |

## Structural Zones

| Zone | Light Surface | Dark Surface | Detail |
|------|---------------|--------------|--------|
| Header | `bg-card` + `border-b` (border color) | `bg-card` + `border-b` | Elevation via `shadow-header`; title + status |
| Bottom Nav | `bg-card` + `border-t` (border color) | `bg-card` + `border-t` | Fixed bottom; tab indicators use accent |
| Content Area | `bg-background` | `bg-background` | Scrollable; alternates card/muted for rhythm |
| Card (data) | `bg-card` + `shadow-card` | `bg-card` + `shadow-card` | 8px border-radius; soft elevation |
| FAB | `bg-accent` with `shadow-elevated` | `bg-accent` with `shadow-elevated` | 24px radius; always `text-accent-foreground` |
| Muted Section | `bg-muted/40` | `bg-muted/20` | Statistics background, grouped data |

## Shape Language

- Card border-radius: **8px** (modern, approachable, not aggressive)
- Button radius: **6px** (crisper, secondary actions)
- FAB radius: **24px** (full roundness, primary affordance)
- Input radius: **6px** (form consistency)

## Typography Scale

- **H1**: Display font, 28px, bold (page title)
- **H2**: Display font, 24px, semibold (section header)
- **H3**: Display font, 20px, semibold (card title)
- **Body**: Inter, 14px, regular (default copy)
- **Small**: Body font, 12px, regular (secondary text, timestamps)
- **Mono**: JetBrains Mono, 12px, regular (order IDs, SKUs, data tables)

## Spacing & Rhythm

- **Gap**: 12px standard between cards and sections
- **Padding**: 16px inside cards; 12px for compact card headers
- **Density**: Mobile-first; max-width 480px primary. Cards stack vertically with 2-column grids on tablet (md:).

## Component Patterns

- **Status Badges**: `rounded-sm` (4px), no border, colored background (accent for "Pending", success for "Ready", muted for "Delivered")
- **CTA Buttons**: `bg-accent` + `text-accent-foreground` + `rounded-md` (6px), `shadow-none` at rest, `hover:shadow-elevated`
- **FAB**: Fixed bottom-right (16px from edges), `+` icon, `bg-accent`, `shadow-elevated`, triggers order creation modal
- **Input Fields**: `bg-input` border `border-border`, `rounded-sm` (4px), `focus:ring-2 ring-accent`
- **Tab Navigation**: Bottom bar, indicator line underline accent color, `hover:bg-muted/50`

## Motion

- **Tab Transitions**: `animate-tab-slide` (300ms ease-out) on content switch
- **Modal Entry**: `animate-fade-in` (200ms ease-in) on overlay + `animate-tab-slide` on modal body
- **Hover State**: `transition-smooth` (300ms) for all interactive elements
- **No Bounce**: Cubic-bezier(0.4, 0, 0.2, 1) — smooth professional, no playful curves

## Constraints

- Mobile-first; min-width 320px, primary layout 480px viewport
- Dark mode intentional (tuned colors, not inverted)
- Light mode for accessibility and office use
- No blur, no glassmorphism, no gradients
- No icons beyond Lucide icons (18–24px)
- Max 3 colors per card (primary + secondary + accent)
- Disable animations in `prefers-reduced-motion`

## Signature Detail

**Warm accent contrast**: FAB and urgent status indicators use warm orange (60° hue) against cool slate primary. This warm-cool tension signals actionability without aggressive saturation. The accent is sparingly used — only FAB, urgent states, and tab indicators — creating visual hierarchy through restraint.

## Differentiation

PrintTrack stands out by treating mobile data layout as precision engineering, not content browsing. Cards are compact data containers, not hero images. The floating action button is the only colorful element, making order creation the primary user flow. Typography is geometric (Space Grotesk) for authority; body is utility (Inter) for mobile efficiency. Light and dark modes are tuned, not toggled — each mode has intentional color depth and contrast. This is an order management tool, not a lifestyle app.

