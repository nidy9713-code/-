import { reviews } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ReviewsSection() {
  return (
    <Section id="reviews" variant="base">
      <SectionHeader title={reviews.title} />
      <div className="grid gap-5 sm:grid-cols-2">
        {reviews.items.map((review, i) => (
          <FadeIn key={review.name} delay={i * 0.06}>
            <article>
              <Card hover={false}>
                <p className="text-amber-500" aria-label={`Оценка ${review.rating} из 5`}>
                  {"★".repeat(review.rating)}
                </p>
                <blockquote className="mt-3 text-muted leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-4 font-semibold text-primary">{review.name}</footer>
              </Card>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
