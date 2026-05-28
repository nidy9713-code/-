import { transformation } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

export function TransformationSection() {
  return (
    <Section id="results" variant="base" className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -left-20 top-1/2 h-96 w-96 rounded-full bg-neon-pink/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-premium-gold/5 blur-[120px]" />

      <SectionHeader
        eyebrow="Результаты"
        title={transformation.title}
        subtitle="Твоя трансформация начнется с первого занятия"
        centered
        className="mb-24"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {transformation.items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.1}>
              <div className="group relative flex items-center gap-6 rounded-3xl border border-border bg-white p-8 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-section text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  ✨
                </div>
                <p className="font-display text-xl font-black leading-tight text-primary/90 group-hover:text-primary transition-colors">
                  {item}
                </p>
                
                {/* Handcrafted detail */}
                <div className="absolute right-6 top-6 text-[8px] font-black uppercase tracking-widest text-border opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Result {i + 1}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Handcrafted Bottom Note */}
        <div className="mt-20 flex justify-center">
          <div className="relative rounded-4xl bg-premium-dark px-10 py-12 text-center text-white shadow-premium max-w-2xl overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-neon-pink/20 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <p className="font-display text-2xl font-black italic">
                «Голос — это не дар, а навык, который мы раскроем вместе»
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Авторская методика Софьи Переверзевой
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
