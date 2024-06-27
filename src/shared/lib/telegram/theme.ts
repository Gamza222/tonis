import { colord } from "colord";
import { platform } from "./functions/telegram-platform";

const secondaryBgColor = "var(--tg-theme-secondary-bg-color)";
const buttonColor = "var(--tg-theme-button-color)";
const buttonTextColor = "var(--tg-theme-button-text-color)";
const bgColor = "var(--tg-theme-bg-color)";
const textColor = "var(--tg-theme-text-color)";
const hintColor = "var(--tg-theme-hint-color)";
const linkColor = "var(--tg-theme-link-color)";

const platformTheme = platform?.getTheme();

// --tg-theme-button-color: #007aff
// --tg-theme-header-bg-color: #1c1c1c;
// --tg-theme-subtitle-text-color: #ffffff;
// --tg-theme-text-color: #ffffff;
// --tg-theme-button-text-color: #ffffff;
// --tg-theme-section-header-text-color: #e5e5e5;
// --tg-color-scheme: dark;
// --tg-theme-bg-color: #282828;
// --tg-theme-accent-text-color: #007aff;
// --tg-theme-hint-color: #ffffff;
// --tg-theme-link-color: #007aff;
// --tg-theme-section-bg-color: #282828;
// --tg-theme-destructive-text-color: #ff453a;
// --tg-theme-secondary-bg-color: #1c1c1c;

export const theme = {
  bgColor,
  textColor,
  hintColor,
  hintColorComputed: platformTheme?.hintColor,
  linkColor,
  buttonColor,
  buttonTextColor,
  secondaryBgColor,

  buttonColorComputed: platformTheme?.buttonColor,
  buttonColorLighter: colord(
    platformTheme?.buttonColor ? platformTheme?.buttonColor : ""
  )
    .lighten(0.4)
    .toHex(),
  buttonTextColorComputed: platformTheme?.buttonTextColor,

  success: "#2ecb47",
  successLight: colord("#2ecb47").alpha(0.4).toHex(),
  danger: "#fc2025",
  orange: "#FF9F0A",
  dangerLight: colord("#fc2025").alpha(0.4).toHex(),
  divider: "rgba(0, 0, 0, .05)",

  icons: {
    pink: "#c72ab9",
    violet: "#5454d6",
    blue: "#0e77f1",
    turquoise: "#16a6c3",
    sea: "#1abe8a",
    green: "#1edb59",
  },

  borderRadius: 12,
  boxShadow: "0 12px 24px 0 rgba(0, 0, 0, .05)",

  zIndex: {
    confirmAlert: 1000,
    bottomSheetForeground: 1000,
    bottomSheetBackground: 999,
    mainButton: 999,
  },
};
