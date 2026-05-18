import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "base" | "section" | "sage";
};

const variants = {
  base: "bg-base",
  section: "bg-section",
  sage: "bg-gradient-to-b from-sage-light/50 to-base",
};

export function Section({
  id,
  children,
  className,
  variant = "base",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-14 md:py-20", variants[variant], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-8 md:mb-12", centered && "text-center")}>
      {eyebrow && (
        <span className={cn("section-eyebrow mb-3 block", centered && "mx-auto")}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      <div className={cn("section-title-accent", centered && "mx-auto")} aria-hidden />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
