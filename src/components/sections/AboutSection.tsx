import { about } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about" variant="base" className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-neon-purple/5 blur-[100px]" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-neon-pink/5 blur-[100px]" />

      <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
        {/* Mentor Card */}
        <FadeIn className="relative">
          <div className="relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl shadow-premium">
            <Image
              src={about.teacher.image}
              alt={about.teacher.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Handcrafted frame effect */}
          <div className="absolute -bottom-6 -left-6 -z-0 h-full w-full rounded-4xl border-2 border-neon-purple/10" />
          <div className="absolute -top-10 -right-10 z-20 hidden lg:block">
            <div className="rounded-2xl bg-white p-6 shadow-premium border border-border">
              <p className="font-display text-2xl font-black text-primary">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Лет опыта</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-8">
            <span className="section-eyebrow">Твой наставник</span>
            <h2 className="font-display text-5xl font-black leading-[1.1] text-primary lg:text-6xl">
              {about.teacher.name.split(' ')[0]} <br />
              <span className="text-neon-purple">{about.teacher.name.split(' ')[1]}</span>
            </h2>
            
            <p className="text-xl leading-relaxed text-muted">
              {about.teacher.bio}
            </p>

            <ul className="space-y-5">
              {about.teacher.achievements.map((a) => (
                <li key={a} className="flex items-start gap-4 text-lg font-medium text-primary/80">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 text-neon-purple text-xs">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button variant="secondary" className="!h-14 !rounded-2xl !px-10 !text-base !font-bold !shadow-soft hover:!shadow-premium !bg-premium-dark !text-white">
                Подробнее о наставнике
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Psychologist Block - Redesigned as a Premium Highlight */}
      <FadeIn delay={0.3}>
        <div className="mt-40 relative overflow-hidden rounded-4xl bg-section-alt p-10 md:p-20 border border-border">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-neon-pink/10 to-transparent opacity-50" />
          
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/50 px-4 py-2 text-xs font-black uppercase tracking-widest text-neon-purple backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse" />
                Бонус: Мини-курс в подарок
              </div>
              
              <h3 className="font-display text-4xl font-black leading-tight text-primary">
                Психологическая <br />
                <span className="text-neon-purple">поддержка</span>
              </h3>
              
              <div className="relative">
                <span className="absolute -left-8 -top-4 text-6xl text-neon-purple/10 font-serif">“</span>
                <p className="text-xl font-medium text-primary italic leading-relaxed">
                  Знакомо ли вам чувство, когда перед выходом на сцену трясутся руки, перехватывает дыхание, а внутри всё сжимается от страха ошибиться?
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted">
                {about.psychologist.bio} С этими состояниями можно и нужно работать.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="h-px flex-1 bg-border" />
                <div className="text-right">
                  <p className="font-display text-xl font-black text-primary">{about.psychologist.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">{about.psychologist.role}</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-premium">
                <Image
                  src={about.psychologist.image}
                  alt={about.psychologist.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-section-alt/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
