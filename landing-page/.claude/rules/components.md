---
paths:
  - src/components/**/*.tsx
---

# Component Development Rules

## Layout & Overflow
- Never use `overflow-hidden` on containers that have absolutely-positioned dropdown children (dropdowns will be clipped). Use `overflow-hidden` only on inner content rows.
- Always add `min-w-0` on flex children that contain text to prevent flex blowout.
- For text truncation, use `truncate` (or `overflow-hidden text-ellipsis whitespace-nowrap`) on the text element, not the container.

## Icons & Images
- Use `@iconify/react` with TDesign icons: `<Icon icon="tdesign:icon-name" />`. Browse at https://icones.js.org/collection/tdesign.
- Static SVGs (logo, decorations) go in `public/images/` and use Next.js `<Image>`.

## Design Tokens
- Use CSS custom properties from `globals.css` — never hardcode colors.
- Glass morphism pattern: `bg-[var(--dark-60)] backdrop-blur-[12px] rounded-[16px]`.
- Key colors: `--orange: #FF6D2E`, `--yellow: #FFB362`, `--medium-grey: #A6A7A9`.

## Figma-to-Code Workflow (MANDATORY)

### Before writing any code:
1. Call `get_design_context` on the Figma node to extract exact specs (spacing, font sizes, colors, border radius, dimensions).
2. If the node has images, call `get_screenshot` to visually identify each image layer. Download the correct asset — Figma nodes can have multiple overlapping image layers.
3. Read any existing component that will be reused or modified — understand its props, internal classes, and CSS techniques before editing.
4. For icons, verify the icon name exists at https://icones.js.org/collection/tdesign BEFORE using it. Never guess icon names.

### While implementing:
5. Use the extracted Figma values exactly — never estimate padding, font size, border radius, or dimensions.
6. When editing existing code, use narrow `old_string` boundaries in the Edit tool to avoid accidentally deleting adjacent code blocks.

### After implementing:
7. Take a Chrome DevTools screenshot of the implementation and compare with `get_screenshot` from Figma. Check both mobile (390px) and desktop (1440px) viewports.
8. Fix discrepancies before considering the section done.

## Testing
- Every new component must have a Storybook story file (`ComponentName.stories.tsx`) covering all visual states.
- Stories should use play functions from `storybook/test` to simulate user interactions.
- Visual regression tests must be added in `tests/visual/` for components with interactive states.
- Run `npm run test:visual:update` after intentional visual changes to update baseline screenshots.

## Fonts
- Headings (H1): `font-[family-name:var(--font-graphik)]` (Graphik Semibold)
- Body/UI text: default `font-sans` (Inter Tight)

## Known Gotchas (Tailwind v4 & Next.js)

### Tailwind v4 Specificity
- Utility classes have equal specificity. A component's internal `inline-flex` will override an externally passed `hidden` class. Use `!important` modifier (`!hidden`) when overriding base component classes.
- Arbitrary properties like `sm:[background-image:none]` may not work reliably. Prefer custom CSS classes in `globals.css` with proper media queries.

### CSS Layout Traps
- `opacity` and `transform` on parent elements create new stacking contexts — dropdowns/modals inside them need `z-index` on the animated wrapper, or use `focus-within:z-20`.
- Horizontal scroll containers: padding on the parent doesn't apply to the overflow area. Put padding inside the scrollable container, or use a pseudo-element / last-child margin.
- Fixed-position elements (e.g., mobile bottom bar) obscure page content. Always add compensating bottom padding/spacer on the page body or last section.

### Next.js Image Caching
- When replacing an image file in `public/images/`, Next.js image optimization may serve the cached old version. Fix: delete the entire `.next/` directory and restart the dev server (`rm -rf .next && npm run dev`).
- Always verify images render correctly after replacement — don't trust that a file swap will take effect immediately.

### Dashed Borders
- The project uses `background-image` with `repeating-linear-gradient` for dashed borders (`.divider-dashed`), NOT `border-bottom`. To hide these borders responsively, use the `.divider-dashed-mobile` CSS class or create a new CSS class with a media query — Tailwind border utilities won't work.

## Navbar
- Navbar is `fixed top-0 z-50`. Pages without a full-screen hero need `pt-[96px]` spacer.
- Props: `variant` (`"dark"` | `"light"`), `showQuoteButton` (default `false`).
- Nav links point to actual routes: `/services/residential-moving`, `/rates`, `/about`, `/contact`.
- Hover style: rounded pill background (`rounded-[10px] hover:bg-white/10`).

## Animations (Framer Motion)
- All scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`.
- Hero titles use word-by-word reveal — title must be a **plain string** (not JSX) for word splitting to work.
- Dark card sections (WhyUs, OurValues, WhatsIncluded): staggered item fade-up + clip-path photo reveal.
- Use consistent timing: items stagger at 100ms, photos delay 0.3s with 0.8s duration clip-path.

## AddressInput
- Supports `variant` prop: `"dark"` (default, for glass/dark backgrounds) and `"light"` (for light grey backgrounds like the Contact form).
- Light variant: dark text, grey placeholders, border-based hover instead of background hover.

## Page Architecture
- Service pages reuse homepage components (Reviews, ShortVideos, Footer) directly with their internal data.
- Service-specific sections (ServiceHero, WhatsIncluded, WeMoveItAll) accept data via props — title, items array, images.
- When creating a new service page, copy `services/residential-moving/page.tsx` and swap the props data.
- All pages wrap content in `QuoteModalProvider` for the mobile quote modal.
- Contact page has its own `ContactSection` (left info + right quote form) and `ContactForm` component.
