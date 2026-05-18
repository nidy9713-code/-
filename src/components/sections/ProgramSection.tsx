import { program } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ProgramSection() {
  return (
    <Section id="program" variant="section">
      <SectionHeader
        eyebrow="Программа"
        title={program.title}
        subtitle={program.subtitle}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {program.modules.map((mod, i) => (
          <FadeIn key={mod.title} delay={i * 0.06}>
            <Card className="flex h-full gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage font-display text-lg font-bold text-white"
                aria-hidden
              >
                {mod.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold leading-snug text-primary">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{mod.description}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
