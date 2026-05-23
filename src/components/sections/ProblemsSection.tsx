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
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.04}>
            <li className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-light/50 text-2xl shadow-inner"
                aria-hidden
              >
                {icons[item.icon] ?? "•"}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold leading-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
