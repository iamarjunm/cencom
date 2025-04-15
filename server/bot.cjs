const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf('7094725314:AAHF_GF-hisXhDbrpYEre9DW0gOYXp9ZJA4');

bot.start((ctx) => ctx.reply('Welcome!'));

bot.on('text', (ctx) => {
  // Capture the chat ID dynamically
  const chatId = ctx.chat.id;

  // Respond with the chat ID to the user
  ctx.reply(`Your chat ID is: ${chatId}`);

  // Reply with the user's message (you can modify this logic to be more dynamic)
  ctx.reply(`You said: ${ctx.message.text}`);
});

bot.launch();
console.log('Bot is running...');
