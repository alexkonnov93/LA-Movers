/**
 * Design Tokens — extracted from Figma
 * Source: VKgZpcAXopP59C4aSlgdC4/Website
 */

// ─── Colors ──────────────────────────────────────────────
export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  orange: "#FF6D2E",
  yellow: "#FFB362",
  mediumGrey: "#A6A7A9",
  transparency: {
    white50: "rgba(255, 255, 255, 0.5)",
    white10: "rgba(255, 255, 255, 0.1)",
    dark60: "rgba(35, 35, 35, 0.6)",
    black60: "rgba(0, 0, 0, 0.6)",
    black50: "rgba(0, 0, 0, 0.5)",
    black20: "rgba(0, 0, 0, 0.2)",
  },
} as const;

// ─── Typography ──────────────────────────────────────────
export const typography = {
  h1: {
    fontFamily: "var(--font-graphik)",
    fallback: "var(--font-inter-tight), system-ui, sans-serif",
    fontWeight: 600,
    fontSize: "80px",
    lineHeight: 1,
    letterSpacing: "-3px",
  },
  subtitle1: {
    fontFamily: "Inter Tight",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: 1.4,
    letterSpacing: "0px",
  },
  body: {
    fontFamily: "Inter Tight",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.4,
    letterSpacing: "0px",
  },
  navLink: {
    fontFamily: "Inter Tight",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 1.4,
  },
  button: {
    fontFamily: "Inter Tight",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: 1.4,
  },
  buttonLarge: {
    fontFamily: "Inter Tight",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: 1.4,
  },
  formLabel: {
    fontFamily: "Inter Tight",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.4,
  },
  formPlaceholder: {
    fontFamily: "Inter Tight",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: 1.4,
    color: "rgba(255, 255, 255, 0.5)",
  },
} as const;

// ─── Effects ─────────────────────────────────────────────
export const effects = {
  blur: {
    type: "BACKGROUND_BLUR",
    radius: "24px",
    css: "backdrop-blur-[12px]",
  },
  heroGradient:
    "linear-gradient(241.32deg, rgba(191, 191, 191, 0) 16.09%, rgba(0, 0, 0, 0.5) 73.66%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)",
  orangeGradient:
    "linear-gradient(180deg, #FF6D2E 27.78%, #502900 119.75%)",
} as const;

// ─── Spacing / Layout ────────────────────────────────────
export const layout = {
  maxWidth: "1200px",
  pagePadding: "120px",
  navBorderRadius: "16px",
  cardBorderRadius: "16px",
  pillBorderRadius: "100px",
  buttonBorderRadius: "12px",
} as const;

// ─── Breakpoints ─────────────────────────────────────────
export const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
} as const;
