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

## Figma-to-Implementation Verification
- After implementing any Figma section, take a Playwright screenshot of the running page and fetch the Figma screenshot (`get_screenshot`). Compare them side-by-side and fix discrepancies before considering the work done.

## Testing
- Every new component must have a Storybook story file (`ComponentName.stories.tsx`) covering all visual states.
- Stories should use play functions from `storybook/test` to simulate user interactions.
- Visual regression tests must be added in `tests/visual/` for components with interactive states.
- Run `npm run test:visual:update` after intentional visual changes to update baseline screenshots.

## Fonts
- Headings (H1): `font-[family-name:var(--font-graphik)]` (Graphik Semibold)
- Body/UI text: default `font-sans` (Inter Tight)
