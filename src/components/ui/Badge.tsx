import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-sage-dark px-3 py-1 text-xs font-semibold text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
