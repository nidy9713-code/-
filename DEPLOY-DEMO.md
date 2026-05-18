# Деплой демо v0.1 для заказчика

## Быстрый деплой на Vercel

### 1. Репозиторий на GitHub (рекомендуется)

```bash
git init
git add .
git commit -m "Demo v0.1: лендинг Звезда караоке"
# Создайте репозиторий на github.com, затем:
git remote add origin https://github.com/ВАШ_АККАУНТ/zvezda-karaoke.git
git push -u origin main
```

### 2. Vercel

1. [vercel.com/new](https://vercel.com/new) → Import Git Repository
2. **Environment Variables:**
   - `NEXT_PUBLIC_TELEGRAM_BOT_URL` = `https://t.me/your_bot` (или реальный бот)
   - `NEXT_PUBLIC_SITE_URL` = URL после деплоя (например `https://zvezda-karaoke.vercel.app`)
3. Deploy

### 3. Или через CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

При запросе переменных окружения укажите `NEXT_PUBLIC_TELEGRAM_BOT_URL`.

---

## Что отправить заказчику

- Ссылку на сайт (production URL из Vercel)
- Пометку: **Демо v0.1** — форма не сохраняет заявки
- Чеклист согласования (см. README.md)

---

## После согласования

Деплой MVP на VPS клиента — см. план проекта (Docker + PostgreSQL).
