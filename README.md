# Звезда караоке — Демо v0.1

Лендинг онлайн-курса вокала. **Демо для согласования** с заказчиком: UI, все 12 секций, CTA в Telegram, форма без сохранения на сервер.

## Стек

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Запуск локально

```bash
npm install
cp .env.example .env.local
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Переменные окружения

| Переменная | Описание |
|------------|----------|
| `NEXT_PUBLIC_TELEGRAM_BOT_URL` | Ссылка на Telegram-бот (по умолчанию `https://t.me/your_bot`) |
| `NEXT_PUBLIC_SITE_URL` | URL сайта для metadata |

## Деплой демо для заказчика (Vercel)

Проект в git. Дальше — **~5 минут**:

### Способ A: Vercel CLI

```powershell
cd "c:\Users\nidy9\Школа вокала"
npx vercel login
npx vercel --prod
```

В [vercel.com](https://vercel.com) → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_TELEGRAM_BOT_URL` = `https://t.me/your_bot`
- `NEXT_PUBLIC_SITE_URL` = URL сайта после деплоя

### Способ B: GitHub + Vercel

```powershell
git remote add origin https://github.com/ВАШ_ЛОГИН/zvezda-karaoke.git
git push -u origin main
```

→ [vercel.com/new](https://vercel.com/new) → Import → Deploy.

Подробнее: [DEPLOY-DEMO.md](DEPLOY-DEMO.md) · Чеклист заказчику: [СОГЛАСОВАНИЕ-ДЕМО.md](СОГЛАСОВАНИЕ-ДЕМО.md)

## Чеклист согласования с заказчиком

1. Стиль (бежево-зелёная пастель)
2. Структура и порядок блоков
3. Тексты и тарифы
4. Заметность CTA
5. Telegram-блок и оффер
6. Мобильная версия
7. Материалы для замены placeholder-фото

## После согласования (MVP)

- `POST /api/lead`, валидация формы
- Docker, полный SEO
- Интеграции GetCourse / аналитика
