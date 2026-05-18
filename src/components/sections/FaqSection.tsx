import { faq } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { Section, SectionHeader } from "@/components/layout/Section";

export function FaqSection() {
  return (
    <Section id="faq" variant="section">
      <SectionHeader title={faq.title} />
      <FadeIn className="mx-auto max-w-3xl">
        <Accordion items={faq.items} />
      </FadeIn>
    </Section>
  );
}
