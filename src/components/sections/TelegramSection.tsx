import { telegramBlock } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { LeadForm } from "@/components/forms/LeadForm";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Section, SectionHeader } from "@/components/layout/Section";

export function TelegramSection() {
  return (
    <Section id="telegram" variant="alt" className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-neon-pink/5 blur-[120px]" />
      
      <SectionHeader 
        eyebrow="Telegram"
        title={telegramBlock.title} 
        subtitle={telegramBlock.subtitle} 
        centered
        className="mb-24"
      />
      
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <div className="relative h-full rounded-4xl bg-white p-10 shadow-soft transition-all duration-500 hover:shadow-premium">
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-section text-3xl">
              🚀
            </div>
            
            <ul className="space-y-6">
              {telegramBlock.points.map((point) => (
                <li key={point} className="flex gap-4 text-lg font-bold text-primary/80">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-pink/20 text-neon-pink text-[10px]">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <TelegramCtaButton 
                startParam="landing_telegram" 
                className="w-full !h-16 !rounded-2xl !bg-premium-dark !text-white !font-black !uppercase !tracking-widest hover:!bg-black hover:!shadow-premium transition-all"
              >
                {telegramBlock.cta}
              </TelegramCtaButton>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative h-full rounded-4xl bg-white p-10 shadow-soft transition-all duration-500 hover:shadow-premium">
            <div className="mb-8 space-y-2">
              <h3 className="font-display text-2xl font-black text-primary">
                {telegramBlock.formTitle}
              </h3>
              <p className="text-sm font-medium text-muted">
                Оставь заявку, и мы свяжемся с тобой в течение 15 минут
              </p>
            </div>
            
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
