import { BrowserPlatform } from "./browser-platform";
import { cssVarToValue } from "./css-var-to-value";
import { isRunningWithinTelegram } from "./is-running-within-telegram";

const buttonColor = "var(--tg-theme-button-color)";
const buttonTextColor = "var(--tg-theme-button-text-color)";
const hintColor = "var(--tg-theme-hint-color)";

export type PlatformTheme = {
  buttonColor: string;
  hintColor: string;
  buttonTextColor: string;
};

export interface Platform {
  initialize(): void;
  getInitData(): string;
  openExternalLink(link: string): void;
  openInternalLink(link: string): void;
  getTheme(): PlatformTheme;
  getClientData(): PlatformSchemaType;
  getStartParam(): string | undefined;
}

export type PlatformSchemaType = {
  platform?: string;
  colorScheme?: "light" | "dark";
  tgVersion?: string;
};

const cssVariables = {
  "--padding-bottom": "40px",
};
const WebApp = window.Telegram.WebApp;

export class TelegramPlatform implements Platform {
  getInitData(): string {
    return WebApp.initData;
  }

  getTheme(): PlatformTheme {
    return {
      buttonColor: cssVarToValue(buttonColor),
      hintColor: cssVarToValue(hintColor),
      buttonTextColor: cssVarToValue(buttonTextColor),
    };
  }

  getStartParam(): string | undefined {
    return WebApp.initDataUnsafe.start_param;
  }

  initialize() {
    WebApp.ready();
    WebApp.setHeaderColor("secondary_bg_color");
    if (WebApp.platform === "ios") {
      for (const variable in cssVariables) {
        document.documentElement.style.setProperty(
          variable,
          // @ts-ignore
          cssVariables[variable]
        );
      }
    }
    WebApp.expand();
  }

  isOutdated(): boolean {
    return !WebApp.isVersionAtLeast("6.1");
  }

  isCloudStorageAvailable(): boolean {
    return WebApp.isVersionAtLeast("6.9");
  }

  openInternalLink(link: string) {
    WebApp.openTelegramLink(link);
  }

  isIos() {
    return WebApp.platform === "ios";
  }

  isAndroid() {
    return WebApp.platform === "android";
  }

  getClientData(): PlatformSchemaType {
    return {
      platform: WebApp.platform,
      colorScheme: WebApp.colorScheme,
      tgVersion: WebApp.version,
    };
  }

  isTelegramDesktop() {
    return WebApp.platform === "tdesktop";
  }

  openExternalLink(link: string) {
    WebApp.openLink(link);
  }
}

const createPlatform = (): Platform | null => {
  return isRunningWithinTelegram()
    ? new TelegramPlatform()
    : new BrowserPlatform();
};

export const platform = createPlatform();
