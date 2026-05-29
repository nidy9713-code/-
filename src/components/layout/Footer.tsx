import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-premium-dark py-20 text-white">
      <Container>
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="space-y-6">
            <Link href="/" className="group flex flex-col">
              <span className="font-display text-3xl font-black tracking-tighter text-white">
                {site.name.split(' ')[0]} <span className="text-neon-pink">{site.name.split(' ')[1]}</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                {site.tagline}
              </span>
            </Link>
            
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Твой путь к уверенному вокалу начинается здесь. Профессиональное обучение в удобном формате.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Навигация</p>
              <nav className="flex flex-col gap-4">
                <Link href="#program" className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors">Программа</Link>
                <Link href="#pricing" className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors">Тарифы</Link>
                <Link href="#reviews" className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors">Отзывы</Link>
                <Link href="#faq" className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors">FAQ</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Контакты</p>
              <div className="flex flex-col gap-4">
                <a
                  href={site.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={site.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors"
                >
                  WhatsApp
                </a>
                <a href={site.contacts.phoneHref} className="text-sm font-bold text-white/60 hover:text-neon-pink transition-colors">
                  {site.contacts.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white/40 transition-colors">
            Политика конфиденциальности
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/10">
            © {new Date().getFullYear()} {site.name}. Handcrafted with Love.
          </p>
        </div>
      </Container>
    </footer>
  );
}
