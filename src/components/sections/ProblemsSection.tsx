import { problems } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

const icons: Record<string, string> = {
  users: "👥",
  music: "🎵",
  mic: "🎤",
  list: "📋",
  stage: "🎭",
};

export function ProblemsSection() {
  return (
    <Section id="problems" variant="section">
      <SectionHeader title={problems.title} centered />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problems.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.04}>
            <li className="flex gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-soft transition-shadow hover:shadow-card">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-light text-lg"
                aria-hidden
              >
                {icons[item.icon] ?? "•"}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm text-muted-light">{item.description}</p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
