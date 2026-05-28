import { program } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

const icons = ["🌬️", "🎵", "🗣️", "❤️", "🎼", "🎤"];

export function ProgramSection() {
  return (
    <Section id="program" variant="section" className="bg-white">
      <SectionHeader
        eyebrow="Программа"
        title="Путь к твоему голосу"
        subtitle="6 шагов от первого вдоха до уверенного выступления"
        centered
      />
      
      <div className="mt-24 relative">
        {/* Decorative path line for desktop */}
        <div className="absolute top-1/2 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {program.modules.map((mod, i) => (
            <FadeIn key={mod.title} delay={i * 0.1}>
              <div className={`group relative flex flex-col items-center text-center ${
                i % 2 === 1 ? 'lg:pt-16' : 'lg:pb-16'
              }`}>
                {/* Module Number - Handcrafted feel */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-neon-purple/20 bg-white font-display text-xs font-black text-neon-purple shadow-soft transition-colors duration-300 group-hover:border-neon-pink group-hover:text-neon-pink">
                  0{mod.number}
                </div>

                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-section shadow-soft transition-all duration-500 group-hover:shadow-premium group-hover:-translate-y-2">
                  <span className="text-4xl transition-transform duration-500 group-hover:scale-110">
                    {icons[i] || "✨"}
                  </span>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-neon-pink/0 blur-xl transition-all duration-500 group-hover:bg-neon-pink/10" />
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="font-display text-base font-black leading-tight text-primary px-2">
                    {mod.title}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-light">
                    Step {i + 1}
                  </p>
                </div>

                {/* Vertical connector for mobile/tablet */}
                {i < program.modules.length - 1 && (
                  <div className="mt-8 h-8 w-px bg-border lg:hidden" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Handcrafted footer note */}
      <div className="mt-24 flex justify-center">
        <div className="inline-flex items-center gap-4 rounded-2xl border border-dashed border-border p-6 text-sm font-medium text-muted">
          <span className="text-2xl">🎓</span>
          <p>Каждый модуль включает практические упражнения и обратную связь</p>
        </div>
      </div>
    </Section>
  );
}
