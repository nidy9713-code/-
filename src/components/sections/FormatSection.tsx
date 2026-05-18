import { format } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

const formatIcons = ["⏱", "📱", "💬", "🌿"];

export function FormatSection() {
  return (
    <Section id="format" variant="base">
      <SectionHeader title={format.title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {format.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light text-2xl">
                {formatIcons[i]}
              </div>
              <h3 className="font-display font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
