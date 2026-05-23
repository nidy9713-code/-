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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {program.modules.map((mod, i) => (
          <FadeIn key={mod.title} delay={i * 0.06}>
            <Card className="flex h-full flex-col gap-5 p-7 transition-all hover:shadow-md">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage font-display text-xl font-bold text-white shadow-lg shadow-sage/20"
                aria-hidden
              >
                {mod.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl font-bold leading-tight text-primary">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {mod.description}
                </p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
