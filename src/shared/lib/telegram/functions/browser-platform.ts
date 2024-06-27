import {
  Platform,
  PlatformSchemaType,
  PlatformTheme,
} from "./telegram-platform.js";

const cssVariables = {
  "--tg-theme-hint-color": "#999999",
  "--tg-theme-secondary-bg-color": "#181818",
  "--tg-theme-text-color": "#fff",
  "--tg-theme-section-bg-color": "#ffffff",
  "--tg-theme-header-bg-color": "#efeff3",
  "--tg-theme-accent-text-color": "#2481cc",
  "--tg-color-scheme": "light",
  "--tg-viewport-height": "100vh",
  "--tg-theme-destructive-text-color": "#ff3b30",
  "--tg-theme-button-color": "#2481cc",
  "--tg-theme-bg-color": "#000000",
  "--tg-theme-subtitle-text-color": "#999999",
  "--tg-theme-button-text-color": "#fff",
  "--tg-theme-section-header-text-color": "#6d6d71",
  "--tg-theme-link-color": "#2481cc",
  "--tg-viewport-stable-height": "100vh",
};

export class BrowserPlatform implements Platform {
  getInitData(): string {
    throw new Error("Method not implemented.");
  }
  getStartParam(): string | undefined {
    throw new Error("Method not implemented.");
  }
  mainButtonInfo?: {
    text: string;
    onClick: () => void;
    condition?: () => boolean;
  };
  backButtonInfo?: {
    onClick: () => void;
  };

  getTheme(): PlatformTheme {
    return {
      buttonColor: cssVariables["--tg-theme-button-color"],
      hintColor: cssVariables["--tg-theme-hint-color"],
      buttonTextColor: cssVariables["--tg-theme-button-text-color"],
    };
  }

  getClientData(): PlatformSchemaType {
    return {};
  }

  showMainButton(text: string, onClick: () => void, condition?: () => boolean) {
    this.mainButtonInfo = {
      text,
      onClick,
      condition,
    };
  }

  hideMainButton() {
    this.mainButtonInfo = undefined;
  }

  get isMainButtonVisible() {
    return this.mainButtonInfo !== undefined;
  }

  showBackButton(onClick: () => void) {
    this.backButtonInfo = {
      onClick,
    };
  }

  hideBackButton() {
    this.backButtonInfo = undefined;
  }

  get isBackButtonVisible() {
    return this.backButtonInfo !== undefined;
  }

  initialize() {
    for (const variable in cssVariables) {
      document.documentElement.style.setProperty(
        variable,
        // @ts-ignore
        cssVariables[variable]
      );
    }
  }

  openInternalLink(link: string) {
    window.location.href = link;
  }

  openExternalLink(link: string) {
    window.open(link, "_blank");
  }
}
