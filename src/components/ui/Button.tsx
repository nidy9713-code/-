import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "cta-glow bg-sage-darker text-white hover:bg-sage-dark ring-1 ring-sage-dark/20",
  secondary:
    "border-2 border-sage-dark/80 text-sage-darker bg-card hover:border-sage-dark hover:bg-sage-light/50",
  warm: "bg-warm-dark text-primary hover:bg-warm shadow-soft ring-1 ring-warm-dark/30",
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-sm font-semibold tracking-wide transition-all duration-200 md:text-base",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-sm font-semibold tracking-wide transition-all duration-200 md:text-base",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
