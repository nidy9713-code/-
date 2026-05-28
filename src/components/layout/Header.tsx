"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/10" 
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-black tracking-tighter text-white">
            {site.name.split(' ')[0]} <span className="text-neon-pink">{site.name.split(' ')[1]}</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-neon-pink transition-colors">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-black uppercase tracking-widest text-white/70 transition-all hover:text-neon-pink hover:tracking-[0.2em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <TelegramCtaButton
            startParam="landing_header"
            className="!h-12 !px-8 !text-[10px] !font-black !uppercase !tracking-widest !bg-white !text-black !rounded-xl hover:!bg-neon-pink hover:!text-white transition-all hover:!shadow-[0_0_20px_rgba(255,0,255,0.4)]"
          >
            Бесплатный урок
          </TelegramCtaButton>
        </div>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <div className="relative w-6 h-5">
            <span className={cn(
              "absolute left-0 block w-full h-0.5 bg-white transition-all duration-300",
              open ? "top-2 rotate-45" : "top-0"
            )} />
            <span className={cn(
              "absolute left-0 top-2 block w-full h-0.5 bg-white transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100"
            )} />
            <span className={cn(
              "absolute left-0 block w-full h-0.5 bg-white transition-all duration-300",
              open ? "top-2 -rotate-45" : "top-4"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6" aria-label="Мобильная навигация">
          {navigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-3xl font-black text-white hover:text-neon-pink transition-all",
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={cn(
            "mt-10 w-full max-w-xs transition-all duration-500 delay-300",
            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <TelegramCtaButton
              startParam="landing_mobile_menu"
              className="w-full !h-16 !bg-neon-pink !text-white !font-black !uppercase !tracking-widest !rounded-2xl"
            >
              Бесплатный урок
            </TelegramCtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
