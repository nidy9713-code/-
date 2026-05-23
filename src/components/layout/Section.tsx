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
    <section id={id} className={cn("py-20 md:py-32", variants[variant], className)}>
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
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {eyebrow && (
        <span className={cn("section-eyebrow mb-4 block", centered && "mx-auto")}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={cn("section-title-accent mt-4", centered && "mx-auto")} aria-hidden />
      {subtitle && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
