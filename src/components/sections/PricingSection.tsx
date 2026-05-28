import { pricing } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Section, SectionHeader } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <Section id="pricing" variant="base" className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-neon-pink/5 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-neon-purple/5 blur-[100px]" />

      <SectionHeader
        eyebrow="Тарифы"
        title="Начни петь сегодня"
        subtitle="Выбери подходящий формат обучения и начни свой путь к уверенному вокалу"
        centered
        className="mb-24"
      />
      
      <div className="grid gap-10 md:grid-cols-3 md:items-stretch">
        {pricing.plans.map((plan, i) => (
          <FadeIn
            key={plan.id}
            delay={i * 0.1}
            className={cn(plan.featured && "md:order-2 md:-mt-8 md:mb-8")}
          >
            <div
              className={cn(
                "group relative flex h-full flex-col rounded-4xl p-10 transition-all duration-500",
                plan.featured
                  ? "bg-premium-dark text-white shadow-premium md:scale-[1.08] z-10"
                  : "bg-white border border-border hover:shadow-premium hover:-translate-y-2",
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-neon-pink text-white border-none px-6 py-2 font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={cn(
                  "font-display text-xs font-black uppercase tracking-[0.3em]",
                  plan.featured ? "text-neon-pink" : "text-neon-purple"
                )}>
                  {plan.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <p className="font-display text-5xl font-black tracking-tighter">
                    {plan.price}
                  </p>
                </div>
                <p className={cn(
                  "mt-3 text-sm font-medium",
                  plan.featured ? "text-white/40" : "text-muted-light"
                )}>
                  Доступ ко всем материалам на 3 месяца
                </p>
              </div>

              <ul className="flex-1 space-y-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-4 text-sm font-bold leading-snug">
                    <span className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]",
                      plan.featured ? "bg-white/10 text-neon-pink" : "bg-neon-purple/10 text-neon-purple"
                    )}>
                      ✓
                    </span>
                    <span className={plan.featured ? "text-white/80" : "text-primary/80"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <TelegramCtaButton
                  startParam={`landing_pricing_${plan.id}`}
                  className={cn(
                    "w-full !h-16 !text-sm !font-black !uppercase !tracking-[0.2em] !rounded-2xl transition-all duration-300",
                    plan.featured
                      ? "!bg-gradient-to-r !from-neon-pink !to-neon-purple !text-white !shadow-[0_0_30px_rgba(255,0,255,0.3)] hover:!scale-105 hover:!shadow-[0_0_50px_rgba(255,0,255,0.5)]"
                      : "!bg-primary !text-white hover:!bg-black hover:!shadow-premium"
                  )}
                >
                  Выбрать тариф
                </TelegramCtaButton>
              </div>
              
              {/* Subtle handcrafted detail */}
              <div className={cn(
                "mt-6 text-center text-[10px] font-bold uppercase tracking-widest opacity-30",
                plan.featured ? "text-white" : "text-primary"
              )}>
                Secure Payment • Instant Access
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mini-Course CTA - Redesigned as a Premium Banner */}
      <FadeIn delay={0.4} className="mt-32">
        <div className="relative overflow-hidden rounded-4xl bg-section-alt p-8 md:p-16 border border-border">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-neon-purple/10 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:text-left md:justify-between">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-white/50 text-neon-purple border-none px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                Special Offer
              </Badge>
              <h3 className="font-display text-3xl font-black text-primary md:text-4xl">
                {pricing.miniCourse.title}
              </h3>
              <p className="text-lg font-medium text-muted leading-relaxed">
                {pricing.miniCourse.description}
              </p>
            </div>
            
            <div className="mt-10 md:mt-0">
              <TelegramCtaButton 
                startParam="landing_mini_course" 
                className="!h-16 !rounded-2xl !bg-white !text-primary !px-10 !font-black !uppercase !tracking-widest !shadow-soft hover:!shadow-premium hover:!scale-105 transition-all border border-border"
              >
                {pricing.miniCourse.cta}
              </TelegramCtaButton>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
