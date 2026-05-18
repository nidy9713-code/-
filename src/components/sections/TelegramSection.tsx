import { telegramBlock } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { LeadForm } from "@/components/forms/LeadForm";
import { Card } from "@/components/ui/Card";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Section, SectionHeader } from "@/components/layout/Section";

export function TelegramSection() {
  return (
    <Section id="telegram" variant="sage">
      <SectionHeader title={telegramBlock.title} subtitle={telegramBlock.subtitle} />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <Card hover={false} className="border-sage/40 bg-card">
            <ul className="space-y-4">
              {telegramBlock.points.map((point) => (
                <li key={point} className="flex gap-3 text-primary">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-xs text-white">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TelegramCtaButton startParam="landing_telegram" className="w-full sm:w-auto">
                {telegramBlock.cta}
              </TelegramCtaButton>
            </div>
          </Card>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card hover={false}>
            <h3 className="font-display text-xl font-semibold text-primary">
              {telegramBlock.formTitle}
            </h3>
            <div className="mt-6">
              <LeadForm />
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
