"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-lg font-bold text-white">
            {site.name}
          </span>
          <span className="text-xs text-white/50">{site.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-warm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <TelegramCtaButton
            startParam="landing_header"
            className="!px-4 !py-2 !text-sm !bg-warm !text-black hover:!bg-warm-dark"
          >
            Бесплатный урок
          </TelegramCtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/5 bg-black lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильная навигация">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 pt-2">
            <TelegramCtaButton
              startParam="landing_mobile_menu"
              className="w-full !bg-warm !text-black"
            >
              Бесплатный урок
            </TelegramCtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
