import { about } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about" variant="base">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Mentor Card */}
        <FadeIn>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={about.teacher.image}
                alt={about.teacher.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-warm/20 blur-2xl" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Твой наставник по вокалу — {about.teacher.name.split(' ')[1]}
            </h2>
            <ul className="mt-8 space-y-4">
              {about.teacher.achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-lg text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-dark/20 text-warm-dark">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button variant="secondary" className="!px-8 !py-4">
                Узнать больше о {about.teacher.name.split(' ')[1]}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Psychologist Card */}
      <div className="mt-32 rounded-[3rem] bg-section p-8 md:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-6 bg-warm-dark text-white">Бонус: Мини-курс в подарок!</Badge>
            <h3 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Помощь психолога для раскрытия голоса
            </h3>
            <p className="mt-6 text-xl font-medium text-primary italic leading-relaxed">
              «Знакомо ли вам чувство, когда перед выходом на сцену трясутся руки, перехватывает дыхание, а внутри всё сжимается от страха ошибиться?»
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              {about.psychologist.bio} С этими состояниями можно и нужно работать.
            </p>
            <div className="mt-8">
              <p className="font-display text-xl font-bold text-primary">{about.psychologist.name}</p>
              <p className="text-sm text-warm-dark font-medium">{about.psychologist.role}</p>
            </div>
            <ul className="mt-6 space-y-3">
              {about.psychologist.achievements.map((a) => (
                <li key={a} className="flex items-center gap-3 font-medium text-primary">
                  <span className="text-warm-dark">★</span> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={about.psychologist.image}
                alt={about.psychologist.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
