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
    <Section id="problems" variant="base" className="overflow-hidden">
      <SectionHeader 
        title={problems.title} 
        centered 
        className="mb-24"
      />
      
      <div className="relative">
        {/* Soft Background Accents */}
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-neon-pink/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-premium-gold/5 blur-3xl" />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <li 
                className={`group relative flex flex-col gap-6 rounded-4xl border border-border bg-white p-10 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 ${
                  i % 2 === 1 ? 'lg:mt-12' : ''
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-section text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {icons[item.icon] ?? "•"}
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted/80">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Handcrafted Detail */}
                <div className="absolute bottom-6 right-8 text-[10px] font-black uppercase tracking-widest text-border opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Problem {i + 1}
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </Section>
  );
}
