import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-section-alt py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-sage-darker">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.tagline}</p>
            <p className="mt-3 inline-block rounded-full bg-warm/40 px-3 py-1 text-xs font-medium text-primary">
              {site.demoBadge}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="font-semibold text-primary">Контакты</p>
            <a
              href={site.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-dark hover:underline"
            >
              Telegram
            </a>
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-dark hover:underline"
            >
              WhatsApp
            </a>
            <a href={site.contacts.phoneHref} className="text-sage-dark hover:underline">
              {site.contacts.phone}
            </a>
          </div>

          <div className="text-sm">
            <Link href="/privacy" className="text-muted hover:text-sage-dark hover:underline">
              Политика конфиденциальности
            </Link>
            <p className="mt-4 text-xs text-muted-light">
              © {new Date().getFullYear()} {site.name}. Все права защищены.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
