const WebApp = window.Telegram.WebApp;

export const isRunningWithinTelegram = () => {
  return WebApp.platform !== "unknown";
};
