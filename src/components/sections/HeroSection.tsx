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
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-[#050505] text-white lg:min-h-screen">
      {/* Background Image with Premium Blending */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-singer-right.png"
          alt="Научись петь уверенно"
          fill
          className="object-cover object-right opacity-90"
          priority
        />
        
        {/* Dynamic Neon Glows */}
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-pink/20 blur-[120px]" aria-hidden />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-neon-purple/10 blur-[100px]" aria-hidden />
        
        {/* Overlays for Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:via-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-neon-pink backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-pink"></span>
              </span>
              {hero.eyebrow}
            </span>
            
            <h1 className="font-display text-5xl font-black leading-[1.05] sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              Научись петь <br />
              <span className="premium-gradient-text italic">уверенно</span><br />
              <span className="text-3xl font-light tracking-normal opacity-80 sm:text-5xl lg:text-6xl">
                и с удовольствием!
              </span>
            </h1>
            
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl lg:text-2xl">
              {hero.subtitle}
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <TelegramCtaButton
                startParam="landing_hero"
                className="!h-16 !rounded-2xl !bg-gradient-to-r !from-neon-pink !to-neon-purple !px-12 !text-lg !font-black !uppercase !tracking-widest !text-white !shadow-[0_0_40px_rgba(255,0,255,0.4)] transition-all hover:!scale-105 hover:!shadow-[0_0_60px_rgba(255,0,255,0.6)]"
              >
                {hero.cta}
              </TelegramCtaButton>
              
              <div className="flex flex-col">
                <p className="text-sm font-bold text-white/40 uppercase tracking-tighter">Бонус при старте</p>
                <p className="text-base font-medium text-white/80">{hero.ctaHint}</p>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 sm:flex sm:flex-wrap sm:gap-16">
              {hero.stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-4xl font-black text-white lg:text-5xl">
                      {stat.value}
                    </span>
                    <span className="max-w-[100px] text-[10px] font-bold uppercase tracking-[0.2em] leading-tight text-white/30">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Handcrafted Decorative Element */}
      <div className="absolute bottom-10 right-10 hidden rotate-12 lg:block">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-premium-gold opacity-50">
            Premium Vocal Course 2024
          </p>
        </div>
      </div>
    </section>
  );
}
