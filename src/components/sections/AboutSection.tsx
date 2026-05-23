import { about } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/layout/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about" variant="base">
      <SectionHeader
        title="Твои наставники"
        subtitle="Профессиональная поддержка на каждом этапе"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Mentor Card */}
        <FadeIn>
          <Card hover={false} className="h-full overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={about.teacher.image}
                alt={about.teacher.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sage-dark">
                Наставник
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary">
                {about.teacher.name}
              </h3>
              <p className="text-sm font-medium text-warm-dark">
                {about.teacher.role}
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                {about.teacher.bio}
              </p>
              <ul className="mt-6 space-y-2">
                {about.teacher.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 text-sm text-primary"
                  >
                    <span className="text-sage-dark">✓</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </FadeIn>

        {/* Psychologist Card */}
        <FadeIn delay={0.1}>
          <Card hover={false} className="h-full overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full bg-sage-light/20 flex items-center justify-center">
              {/* Placeholder for psychologist if image not yet provided */}
              <div className="text-center p-6">
                <span className="text-4xl">🧠</span>
                <p className="mt-2 text-sm text-muted">Фото психолога</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sage-dark">
                Психолог
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary">
                {about.psychologist.name}
              </h3>
              <p className="text-sm font-medium text-warm-dark">
                {about.psychologist.role}
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                {about.psychologist.bio}
              </p>
              <ul className="mt-6 space-y-2">
                {about.psychologist.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 text-sm text-primary"
                  >
                    <span className="text-sage-dark">✓</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
