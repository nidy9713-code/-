"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/layout/Container";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import Image from "next/image";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-black text-white lg:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-singer.png"
          alt="Научись петь уверенно"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent lg:via-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-sage-light backdrop-blur-sm">
              {hero.eyebrow}
            </p>
            
            <h1 className="text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">Научись петь</span>
              <span className="bg-gradient-to-r from-warm to-sage-light bg-clip-text text-transparent">
                уверенно
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium italic opacity-90 mt-2">
                и с удовольствием!
              </span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-10">
              <TelegramCtaButton
                startParam="landing_hero"
                className="!bg-gradient-to-r !from-[#fcd34d] !to-[#f59e0b] !text-black !shadow-[0_0_40px_rgba(252,211,77,0.4)] hover:!scale-105 transition-transform !px-10 !py-5 !text-lg !font-bold"
              >
                {hero.cta}
              </TelegramCtaButton>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white/60">
                <span className="text-xl">🎁</span> {hero.ctaHint}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12">
              {hero.stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.05}>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
