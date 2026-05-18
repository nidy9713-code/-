import { finalCta } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaHint } from "@/components/ui/CtaHint";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Container } from "@/components/layout/Container";

export function FinalCtaSection() {
  return (
    <section className="bg-section py-14 md:py-20">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-sage/30 bg-gradient-to-br from-sage-light/80 via-card to-warm/15 px-6 py-10 text-center shadow-card md:px-12 md:py-14">
            <p className="section-eyebrow mb-4">Следующий шаг</p>
            <h2 className="text-balance mx-auto max-w-2xl font-display text-2xl font-bold leading-snug text-primary md:text-3xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">{finalCta.subtitle}</p>
            <div className="mt-8 flex flex-col items-center">
              <TelegramCtaButton startParam="landing_final">
                {finalCta.cta}
              </TelegramCtaButton>
              <CtaHint className="!text-center">Без оплаты · только Telegram</CtaHint>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
