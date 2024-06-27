import { useHotkeys } from "react-hotkeys-hook";
import { useMount } from "../useMount/useMount";
import { useEffect } from "react";

const WebApp = window.Telegram.WebApp;

export type UseMainButtonType = (
  text: string | (() => string),
  onClick: () => void,
  condition?: () => boolean
) => void;
// Track visible state to avoid flickering
let isVisible = false;

const hide = () => {
  if (WebApp.platform !== "ios" && WebApp.platform !== "android") {
    WebApp.MainButton.hide();
    isVisible = false;
    return;
  }

  // Avoid flickering of the Telegram main button
  isVisible = false;
  setTimeout(() => {
    if (isVisible) {
      return;
    }
    WebApp.MainButton.hide();
    isVisible = false;
  }, 100);
};

export const useMainButtonTelegram: UseMainButtonType = (
  text,
  onClick,
  condition
) => {
  const hideMainButton = () => {
    hide();
    WebApp.MainButton.offClick(onClick);
    WebApp.MainButton.hideProgress();
  };

  useMount(() => {
    if (condition !== undefined && !condition()) {
      hideMainButton();
      return;
    }

    isVisible = true;
    WebApp.MainButton.show();
    WebApp.MainButton.setText(typeof text === "string" ? text : text());

    return () => {
      hideMainButton();
    };
  });

  useEffect(() => {
    WebApp.MainButton.onClick(onClick);
  }, [onClick]);

  useHotkeys("enter", () => {
    if (condition !== undefined) {
      if (!condition()) {
        return;
      }
    }

    onClick();
  });
};
