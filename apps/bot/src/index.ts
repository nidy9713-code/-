import { Telegraf, Markup } from 'telegraf';
import * as dotenv from 'dotenv';
import { supabase } from './services/supabase.service';

dotenv.config();

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(process.env.BOT_TOKEN);

// Главное меню
const mainKeyboard = Markup.keyboard([
  ['🎓 Моё обучение', '🎁 Пробный урок'],
  ['💰 Тарифы', '🙋‍♀️ Задать вопрос'],
]).resize();

// Команда /start
bot.start(async (ctx) => {
  const { id, first_name, last_name, username } = ctx.from;

  // Сохраняем пользователя в базу
  const { error } = await supabase
    .from('profiles')
    .upsert({
      tg_id: id,
      first_name,
      last_name,
      username,
    }, { onConflict: 'tg_id' });

  if (error) console.error('Error saving profile:', error);

  await ctx.reply(
    `Привет, ${first_name}! 👋\n\nДобро пожаловать в онлайн-курс вокала «Звезда караоке».\n\nЯ помогу тебе раскрыть твой настоящий голос, убрать зажимы и начать петь уверенно.\n\n🎁 Для начала я подготовила для тебя бесплатный пробный урок!`,
    mainKeyboard
  );
});

// Обработка кнопок
bot.hears('🎁 Пробный урок', async (ctx) => {
  await ctx.reply('Отлично! Твой пробный урок уже готов. 🎤');
  await ctx.reply('В этом уроке мы разберем базовое дыхание и сделаем первое упражнение на расслабление.\n\n📺 Смотри видео: [Ссылка на видео]');
});

bot.hears('🎓 Моё обучение', async (ctx) => {
  await ctx.reply(
    'Здесь будет твой прогресс по курсу.\n\n' +
    'Курс состоит из 4 модулей (24 урока).\n\n' +
    'Ты можешь начать с нашего бесплатного мини-курса из 5 уроков, чтобы познакомиться с методикой!'
  );
});

bot.hears('💰 Тарифы', async (ctx) => {
  await ctx.reply(
    'Выбери подходящий формат обучения:\n\n' +
    '1. Базовый — 8 600 ₽\n' +
    '2. Стандарт — 12 800 ₽ (с обратной связью)\n' +
    '3. Премиум — 19 500 ₽ (индивидуально)',
    Markup.inlineKeyboard([
      [Markup.button.url('Подробнее на сайте', 'https://zvezda-karaoke.vercel.app')],
    ])
  );
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
