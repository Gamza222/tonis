import { useMount } from "../useMount/useMount";

const WebApp = window.Telegram.WebApp;

export const useBackButtonTelegram = (fn: () => void) => {
  useMount(() => {
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(fn);

    return () => {
      WebApp.BackButton.offClick(fn);
      WebApp.BackButton.hide();
    };
  });
};
