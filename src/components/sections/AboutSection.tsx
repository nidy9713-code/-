import { about } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section, SectionHeader } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="about" variant="base">
      <SectionHeader title="О школе и преподавателе" subtitle="Команда, которой можно доверять" />
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <Card hover={false} className="h-full">
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-dark">Школа</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-primary">
              {about.school.name}
            </h3>
            <p className="mt-3 text-muted leading-relaxed">{about.school.description}</p>
            <ul className="mt-6 space-y-2">
              {about.school.achievements.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-primary">
                  <span className="text-sage-dark">✓</span> {a}
                </li>
              ))}
            </ul>
            <ImagePlaceholder label="Логотип школы" className="mt-6 w-full max-h-40" aspect="video" />
          </Card>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card hover={false} className="h-full">
            <ImagePlaceholder label="Фото: Переверзева Софья" aspect="portrait" className="mb-6" />
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Преподаватель
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-primary">
              {about.teacher.name}
            </h3>
            <p className="text-sm font-medium text-warm-dark">{about.teacher.role}</p>
            <p className="mt-3 text-muted leading-relaxed">{about.teacher.bio}</p>
            <ul className="mt-6 space-y-2">
              {about.teacher.achievements.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-primary">
                  <span className="text-sage-dark">✓</span> {a}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
