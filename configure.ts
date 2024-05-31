require("dotenv").config();
import { Markup, Telegraf } from "telegraf";

const token = process.env.BOT_TOKEN;
// const token = "5000501175:AAG4vdEnAIgX_KpPaBw-zlIelpU2FjZEvW8";
const bot = new Telegraf(token || ""); // { telegram: { testEnv: true } }

bot.command("inlinekb", (ctx) =>
  ctx.reply(
    "Launch mini app from inline keyboard!",
    Markup.inlineKeyboard([
      Markup.button.webApp("Launch", ""),
      //   Markup.button.webApp("Launch", "http://localhost:3002/"),
    ])
  )
);
bot.start((ctx) =>
  ctx.reply(
    "Launch mini app from inline keyboard!",
    Markup.inlineKeyboard([
      Markup.button.webApp("Launch", "https://gamza222.github.io/tonis/"),
    ])
  )
);

bot.launch();
