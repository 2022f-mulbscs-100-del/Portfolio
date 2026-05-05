export const DESIGN_TOKENS = {
  colors: {
    primary: "#D3E97A",
    secondary: "#C7C7C7",
    accent: "#5C8DFF",

    background: {
      page: "#0A0A0A",
      surface: "#171717",
      elevated: "#1A1A1A",
      glass: "rgba(255, 255, 255, 0.04)",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#C7C7C7",
      muted: "#A1A1A1",
      inverse: "#111111",
    },

    border: {
      default: "#484848",
      soft: "rgba(255, 255, 255, 0.12)",
      strong: "rgba(255, 255, 255, 0.22)",
      divider: "rgba(255, 255, 255, 0.08)",
    },

    status: {
      success: "#22C55E",
      warning: "#F59E0B",
      error: "#EF4444",
      info: "#60A5FA",
    },
  },

  typography: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      xxl: "32px",
      hero: "72px",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
  },

  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    xl: "28px",
    pill: "999px",
  },

  shadow: {
    sm: "0 8px 20px rgba(0, 0, 0, 0.18)",
    md: "0 16px 40px rgba(0, 0, 0, 0.28)",
    lg: "0 28px 70px rgba(0, 0, 0, 0.45)",
    glassInset: "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
  },

  transition: {
    fast: "150ms ease",
    base: "250ms ease",
    slow: "400ms ease",
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
