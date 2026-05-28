import { reviews } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ReviewsSection() {
  return (
    <Section id="reviews" variant="base" className="bg-section">
      <SectionHeader 
        title={reviews.title} 
        eyebrow="Отзывы"
        subtitle="Истории тех, кто уже начал петь уверенно"
        centered
        className="mb-24"
      />
      
      <div className="grid gap-8 sm:grid-cols-2">
        {reviews.items.map((review, i) => (
          <FadeIn key={review.name} delay={i * 0.1}>
            <article className={`relative h-full ${i % 2 === 1 ? 'sm:mt-12' : ''}`}>
              <div className="group relative h-full rounded-4xl bg-white p-10 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 border border-border">
                {/* Premium Quote Icon */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-premium-dark text-2xl text-white shadow-premium">
                  “
                </div>

                <div className="flex gap-1 text-premium-gold mb-6" aria-label={`Оценка ${review.rating} из 5`}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>

                <blockquote className="text-xl font-medium italic leading-relaxed text-primary/80">
                  {review.text}
                </blockquote>

                <footer className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-section-alt flex items-center justify-center font-display text-xl font-black text-neon-purple">
                    {review.name[0]}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-transparent" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-black text-primary">{review.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-light">Ученик курса</p>
                  </div>
                </footer>
                
                {/* Handcrafted background detail */}
                <div className="absolute bottom-6 right-8 text-[8px] font-black uppercase tracking-[0.3em] text-border opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Verified Review
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
      
      {/* Handcrafted decorative element */}
      <div className="mt-32 flex justify-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-neon-purple/20" />
          <div className="absolute inset-4 rounded-full bg-neon-pink/10 flex items-center justify-center text-2xl">
            ✨
          </div>
        </div>
      </div>
    </Section>
  );
}
