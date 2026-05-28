import { pricing } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Section, SectionHeader } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <Section id="pricing" variant="section">
      <SectionHeader
        eyebrow="Обучение"
        title="Выбери свой тариф"
        subtitle="Доступ к урокам сразу после оплаты"
      />
      <div className="grid gap-8 md:grid-cols-3 md:items-stretch">
        {pricing.plans.map((plan, i) => (
          <FadeIn
            key={plan.id}
            delay={i * 0.08}
            className={cn(plan.featured && "md:order-2 md:-mt-4 md:mb-4")}
          >
            <div
              className={cn(
                "flex h-full flex-col rounded-[2.5rem] p-8 transition-all duration-300",
                plan.featured
                  ? "bg-white border-2 border-warm shadow-2xl md:scale-[1.05] z-10"
                  : "bg-white/50 border border-border hover:bg-white hover:shadow-xl",
              )}
            >
              {plan.featured && (
                <Badge className="mb-6 self-start bg-warm text-black border-none px-4 py-1.5 font-bold uppercase tracking-wider text-[10px]">
                  Популярный
                </Badge>
              )}
              <div className="mb-8">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-light">
                  {plan.name}
                </h3>
                <p className="mt-4 font-display text-4xl font-extrabold text-primary">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-muted-light font-medium">Доступ к урокам на 3 месяца</p>
              </div>
              <ul className="flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-medium text-primary">
                    <span className="text-warm-dark">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <TelegramCtaButton
                  startParam={`landing_pricing_${plan.id}`}
                  className={cn(
                    "w-full !py-4 !text-sm !font-bold !rounded-2xl transition-all",
                    plan.featured
                      ? "!bg-black !text-white hover:!bg-primary"
                      : "!bg-white !text-black border border-black/10 hover:!bg-black hover:!text-white"
                  )}
                >
                  Выбрать
                </TelegramCtaButton>
              </div>
            </div>
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
