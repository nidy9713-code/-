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
        subtitle={`${program.modules.length} шага от первого вдоха до уверенного выступления`}
        centered
        className="mb-12 md:mb-16"
      />
      
      <div className="mt-20 relative">
        {/* Decorative path line for desktop */}
        <div className="absolute top-1/2 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {program.modules.map((mod, i) => (
            <FadeIn key={mod.title} delay={i * 0.1}>
              <div className="group relative flex flex-col items-center text-center">
                {/* Module Number - Handcrafted feel */}
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-neon-purple/20 bg-white font-display text-[10px] font-black text-neon-purple shadow-soft transition-colors duration-300 group-hover:border-neon-pink group-hover:text-neon-pink">
                  0{mod.number}
                </div>

                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-section shadow-soft transition-all duration-500 group-hover:shadow-premium group-hover:-translate-y-1">
                  <span className="text-3xl transition-transform duration-500 group-hover:scale-110">
                    {icons[i] || "✨"}
                  </span>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-neon-pink/0 blur-xl transition-all duration-500 group-hover:bg-neon-pink/10" />
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="font-display text-sm font-black leading-tight text-primary px-2">
                    {mod.title}
                  </h3>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-light">
                    Step {i + 1}
                  </p>
                </div>

                {/* Vertical connector for mobile/tablet */}
                {i < program.modules.length - 1 && (
                  <div className="mt-6 h-6 w-px bg-border lg:hidden" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Handcrafted footer note */}
      <div className="mt-16 flex justify-center">
        <div className="inline-flex items-center gap-4 rounded-2xl border border-dashed border-border px-6 py-4 text-sm font-medium text-muted">
          <span className="text-xl">🎓</span>
          <p>Практика и обратная связь в каждом модуле</p>
        </div>
      </div>
    </Section>
  );
}
