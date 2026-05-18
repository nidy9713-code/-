import { transformation } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

export function TransformationSection() {
  return (
    <Section variant="sage">
      <SectionHeader
        eyebrow="Результат"
        title={transformation.title}
        subtitle="Первые изменения — уже на старте"
      />
      <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {transformation.items.map((item, i) => (
          <FadeIn key={item} delay={i * 0.05}>
            <li className="flex items-center gap-3 rounded-2xl border border-white/60 bg-card/90 px-4 py-3.5 shadow-soft">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-dark text-sm font-bold text-white">
                ✓
              </span>
              <span className="font-medium text-primary">{item}</span>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
