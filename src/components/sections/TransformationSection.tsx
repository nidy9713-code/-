import { transformation } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import Image from "next/image";

export function TransformationSection() {
  return (
    <Section variant="sage">
      <SectionHeader
        eyebrow="Результат"
        title={transformation.title}
        subtitle="Первые изменения — уже на старте"
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <ul className="space-y-4">
          {transformation.items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <li className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/40 px-6 py-4 shadow-sm backdrop-blur-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-dark text-xs font-bold text-white">
                  ✓
                </span>
                <span className="font-medium text-primary text-lg">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.2} className="relative">
          <div className="flex gap-4 justify-center">
            <div className="relative aspect-[3/4] w-40 overflow-hidden rounded-2xl shadow-lg border-4 border-white">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <ImagePlaceholder label="ДО" aspect="portrait" className="h-full w-full grayscale" />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">ДО</span>
            </div>
            <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-2xl shadow-xl border-4 border-white -mt-4">
              <ImagePlaceholder label="ПОСЛЕ" aspect="portrait" className="h-full w-full" />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-warm text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-20">ПОСЛЕ</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-primary">Смотри, как меняются наши ученицы</p>
            <button className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-warm text-black shadow-lg mx-auto hover:scale-110 transition-transform">
              ▶
            </button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
