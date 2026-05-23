import { reviews } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ReviewsSection() {
  return (
    <Section id="reviews" variant="base">
      <SectionHeader title={reviews.title} />
      <div className="grid gap-6 sm:grid-cols-2">
        {reviews.items.map((review, i) => (
          <FadeIn key={review.name} delay={i * 0.06}>
            <article className="h-full">
              <Card hover={false} className="h-full p-8 transition-all hover:shadow-md">
                <div className="flex gap-1 text-amber-400" aria-label={`Оценка ${review.rating} из 5`}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <blockquote className="mt-5 text-lg italic leading-relaxed text-muted">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sage-light flex items-center justify-center font-bold text-sage-darker">
                    {review.name[0]}
                  </div>
                  <span className="font-display font-bold text-primary">{review.name}</span>
                </footer>
              </Card>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
