import {
  TelegramPlatform,
  platform,
} from "../telegram/functions/telegram-platform";
import { useMainButtonTelegram } from "./useMainButtonTelegram";

export const useMainButton =
  platform instanceof TelegramPlatform
    ? useMainButtonTelegram
    : useMainButtonTelegram;
