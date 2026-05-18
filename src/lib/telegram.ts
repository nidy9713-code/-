const DEFAULT_BOT_URL = "https://t.me/your_bot";

export function getTelegramBotUrl(startParam?: string): string {
  const base =
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL?.trim() || DEFAULT_BOT_URL;
  if (!startParam) return base;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}start=${encodeURIComponent(startParam)}`;
}
