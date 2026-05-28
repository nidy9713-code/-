import { finalCta } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { TelegramCtaButton } from "@/components/ui/TelegramCtaButton";
import { Container } from "@/components/layout/Container";

export function FinalCtaSection() {
  return (
    <section className="bg-base py-20 md:py-32 overflow-hidden">
      <Container>
        <FadeIn>
          <div className="group relative overflow-hidden rounded-4xl bg-premium-dark px-8 py-16 text-center text-white shadow-premium md:px-16 md:py-24">
            {/* Background Glows */}
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-neon-pink/20 blur-[100px] transition-all duration-700 group-hover:scale-110" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-neon-purple/20 blur-[100px] transition-all duration-700 group-hover:scale-110" />
            
            <div className="relative z-10 space-y-8">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-neon-pink">
                Следующий шаг
              </span>
              
              <h2 className="text-balance mx-auto max-w-3xl font-display text-4xl font-black leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl">
                {finalCta.title}
              </h2>
              
              <p className="mx-auto max-w-xl text-lg font-medium text-white/40 leading-relaxed">
                {finalCta.subtitle}
              </p>
              
              <div className="pt-8 flex flex-col items-center gap-6">
                <TelegramCtaButton 
                  startParam="landing_final"
                  className="!h-16 !px-12 !text-lg !font-black !uppercase !tracking-widest !bg-white !text-black !rounded-2xl hover:!bg-neon-pink hover:!text-white transition-all hover:!shadow-[0_0_40px_rgba(255,0,255,0.4)]"
                >
                  {finalCta.cta}
                </TelegramCtaButton>
                
                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
                  Без оплаты · только Telegram
                </p>
              </div>
            </div>
            
            {/* Handcrafted detail */}
            <div className="absolute bottom-10 right-10 hidden rotate-12 lg:block">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-white/20">
                  Start Your Journey
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
