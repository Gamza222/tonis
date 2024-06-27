import {
  TelegramPlatform,
  platform,
} from "../telegram/functions/telegram-platform";
import { useBackButtonTelegram } from "./useBackButtonTelegram";

export const useBackButton =
  platform instanceof TelegramPlatform
    ? useBackButtonTelegram
    : useBackButtonTelegram;
