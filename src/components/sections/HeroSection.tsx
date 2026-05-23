"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/layout/Container";
import { CtaHint } from "@/components/ui/CtaHint";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-base via-[#f2f7f0] to-sage-light/40 pb-20 pt-12 md:pb-32 md:pt-20">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-warm/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-eyebrow mb-6">{hero.eyebrow}</p>
            <p className="mb-3 text-sm font-medium tracking-wider uppercase text-sage-darker/80">
              Онлайн-курс «Звезда караоке»
            </p>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-7">
              <TelegramCtaButton startParam="landing_hero">
                {hero.cta}
              </TelegramCtaButton>
              <CtaHint>{hero.ctaHint}</CtaHint>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.05}>
                  <li className="inline-flex items-baseline gap-1.5 rounded-full border border-sage/40 bg-card/90 px-3.5 py-2 text-sm shadow-soft backdrop-blur-sm">
                    <span className="font-display font-bold text-sage-darker">
                      {stat.value}
                    </span>
                    <span className="text-muted-light">{stat.label}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </motion.div>
          <FadeIn delay={0.12}>
            <ImagePlaceholder
              label="Фото певца / ученика"
              aspect="portrait"
              className="mx-auto w-full max-w-sm shadow-card ring-1 ring-border/60 lg:max-w-md"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
