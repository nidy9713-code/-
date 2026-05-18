import { cn } from "@/lib/cn";

export function CtaHint({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={cn("mt-3 text-sm text-muted-light sm:text-left", className)}>
      {children}
    </p>
  );
}
