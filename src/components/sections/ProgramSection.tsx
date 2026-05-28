import { program } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ProgramSection() {
  const icons = ["🌬️", "🎵", "🗣️", "❤️", "🎼", "🎤"];
  return (
    <Section id="program" variant="section">
      <SectionHeader
        eyebrow="Обучение"
        title="Что внутри курса"
        subtitle="Пошаговая программа от дыхания до выступления"
      />
      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {program.modules.map((mod, i) => (
          <FadeIn key={mod.title} delay={i * 0.05}>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft text-3xl mb-4">
                {icons[i] || "✨"}
              </div>
              <h3 className="font-display text-sm font-bold text-primary leading-tight">
                {mod.title}
              </h3>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-light font-bold">
                модуль {mod.number}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
