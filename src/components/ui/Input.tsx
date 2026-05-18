import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="block space-y-1.5" htmlFor={inputId}>
      <span className="text-sm font-medium text-primary">{label}</span>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-border bg-white px-4 py-3 text-primary outline-none transition-colors placeholder:text-muted-light focus:border-sage-dark focus:ring-2 focus:ring-sage/40",
          className,
        )}
        {...props}
      />
    </label>
  );
}
