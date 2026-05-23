import { pricing } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Section, SectionHeader } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <Section id="pricing" variant="section">
      <SectionHeader
        eyebrow="Тарифы"
        title={pricing.title}
        subtitle={pricing.subtitle}
      />
      <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
        {pricing.plans.map((plan, i) => (
          <FadeIn
            key={plan.id}
            delay={i * 0.08}
            className={cn(plan.featured && "md:order-2 md:-mt-4 md:mb-4")}
          >
            <Card
              className={cn(
                "flex h-full flex-col transition-all duration-300",
                plan.featured
                  ? "border-2 border-sage bg-gradient-to-b from-sage-light/50 to-card shadow-xl md:scale-[1.05] z-10"
                  : "hover:shadow-lg",
              )}
            >
              {plan.featured && plan.badge && (
                <Badge className="mb-4 self-start bg-sage-dark text-white border-none px-3 py-1 shadow-sm">
                  {plan.badge}
                </Badge>
              )}
              <h3 className="font-display text-xl font-bold text-primary">{plan.name}</h3>
              <p className="mt-2 font-display text-3xl font-bold text-sage-darker">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <span className="text-sage-dark">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TelegramCtaButton
                  startParam={`landing_pricing_${plan.id}`}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  Узнать в Telegram
                </TelegramCtaButton>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10">
        <div className="rounded-2xl border border-warm/50 bg-gradient-to-r from-section to-warm/20 p-6 text-center md:p-8">
          <h3 className="font-display text-xl font-semibold text-primary">
            {pricing.miniCourse.title}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted">{pricing.miniCourse.description}</p>
          <div className="mt-6">
            <TelegramCtaButton startParam="landing_mini_course" variant="warm">
              {pricing.miniCourse.cta}
            </TelegramCtaButton>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
