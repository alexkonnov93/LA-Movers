# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (flat config, v9)
```

If the dev server crashes with a Turbopack panic, delete `.next/` and restart.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion

**Fonts:**
- **Graphik Semibold** — local font (`src/fonts/Graphik-Semibold.ttf`), used for H1 headings via `font-[family-name:var(--font-graphik)]`
- **Inter Tight** — Google Font (400/500/600/700), used for all body/UI text via `font-sans`

**Icons:** TDesign icons via `@iconify/react` (`<Icon icon="tdesign:icon-name" />`). Browse at https://icones.js.org/collection/tdesign. Logo and UI icons are SVGs in `public/images/`.

**Styling:** Tailwind v4 with `@theme inline` in `globals.css`. No `tailwind.config` file — theme is configured via CSS custom properties in `:root` and `@theme inline` block. Use `var(--token-name)` for transparency/gradient tokens that can't be mapped to Tailwind utilities.

## Design Tokens

All tokens are extracted from Figma and defined in two places:
- **CSS variables** in `src/app/globals.css` — used in Tailwind classes and inline styles
- **TypeScript constants** in `src/lib/design-tokens.ts` — reference for exact Figma values

Key colors: `--orange: #FF6D2E`, `--yellow: #FFB362`, `--medium-grey: #A6A7A9`
Key transparencies: `--dark-60` (navbar glass), `--black-60` (form glass), `--white-50` (borders), `--white-10` (dividers)

## Figma Source

Design file: `VKgZpcAXopP59C4aSlgdC4` — "Website"
Copy/content docs are in `/Users/user/Desktop/a3rr/Movers_Web/copy/*.md` (outside the Next.js project).

## Conventions

- Components use `"use client"` only when they need interactivity (state, event handlers)
- Glass morphism pattern: `bg-[var(--dark-60)] backdrop-blur-[12px] rounded-[16px]`
- Images from Figma are downloaded as SVGs to `public/images/`; use Next.js `<Image>` component
- `@/*` path alias maps to `./src/*`
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Max content width: `max-w-[1200px]`; page horizontal padding: `px-6 lg:px-[120px]`

## Navbar

The `Navbar` component is **fixed** (`fixed top-0 z-50`). Pages that don't use a full-screen hero must add `pt-[96px]` to compensate for the navbar height.

**Props:**
- `variant`: `"dark"` (default) — white text, glass bg. `"light"` — orange CTA, dark phone icon, for white-bg pages.
- `showQuoteButton`: `boolean` (default `false`) — shows "Get a Free Quote" button linking to `/contact`. Currently only enabled on the About page.

**Nav links:** Services → `/services/residential-moving`, Rates → `/rates`, Company → `/about`, Contact → `/contact`

## Animations (Framer Motion)

All sections use `whileInView` scroll-triggered animations with `viewport={{ once: true }}`.

**Hero sections** (on page load):
- Background image: slow zoom-out `scale: 1.1 → 1` over 1.8s
- Title: word-by-word reveal with blur-to-sharp + slide-up (pass title as plain string, not JSX, for word splitting)
- Subtitle: fade-up at 1.0s delay
- Tag pill / Google badge: fade-up with staggered delays

**Dark card sections** (WhyUs, OurValues, WhatsIncluded):
- Heading: fade-up on scroll
- Icon items: staggered fade-up (100ms apart)
- Right-side photo: `clip-path: inset()` reveal animation

**Other sections:**
- PhotoBanner: clip-path reveal + scale
- LaLocations: clip-path reveal, glass card slides up, location tags pop in
- Reviews: heading fade-up, review cards staggered
- WeMoveItAll: heading fade-up, cards staggered with scale

## Pages

| Route | Hero Component | Navbar variant |
|-------|---------------|----------------|
| `/` | `Hero` | dark |
| `/services/*` | `ServiceHero` | dark |
| `/rates` | `PageHero` | dark |
| `/about` | `AboutHero` | light + showQuoteButton |
| `/contact` | (no hero, just Navbar) | light |
