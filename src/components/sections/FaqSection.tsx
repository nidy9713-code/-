import { faq } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { Section, SectionHeader } from "@/components/layout/Section";

export function FaqSection() {
  return (
    <Section id="faq" variant="base" className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-premium-gold/5 blur-[120px]" />
      
      <SectionHeader 
        eyebrow="FAQ"
        title={faq.title} 
        centered
        className="mb-24"
      />
      
      <FadeIn className="mx-auto max-w-4xl">
        <div className="rounded-4xl border border-border bg-white p-6 md:p-12 shadow-soft">
          <Accordion items={faq.items} />
        </div>
        
        {/* Handcrafted Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm font-bold text-muted">
            Остались вопросы? <br className="sm:hidden" />
            <span className="text-neon-pink">Напиши нам в Telegram</span>
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
