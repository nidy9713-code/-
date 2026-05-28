import { format } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

const formatIcons = ["⏱", "📱", "💬", "🌿"];

export function FormatSection() {
  return (
    <Section id="format" variant="section" className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-neon-pink/5 blur-3xl" />
      
      <SectionHeader 
        eyebrow="Формат"
        title={format.title} 
        centered
        className="mb-24"
      />
      
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {format.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div className="group relative flex flex-col items-center text-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-soft transition-all duration-500 group-hover:shadow-premium group-hover:-translate-y-2">
                <span className="text-3xl transition-transform duration-500 group-hover:scale-110">
                  {formatIcons[i]}
                </span>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-xl font-black leading-tight text-primary">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted/80">
                  {item.description}
                </p>
              </div>

              {/* Handcrafted detail */}
              <div className="mt-6 h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-neon-pink" />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
