import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "base" | "section" | "alt";
};

const variants = {
  base: "bg-base",
  section: "bg-section",
  alt: "bg-section-alt",
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
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-16 md:mb-24", centered && "text-center", className)}>
      {eyebrow && (
        <span className={cn("section-eyebrow mb-6 block", centered && "mx-auto")}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-4xl font-black leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
