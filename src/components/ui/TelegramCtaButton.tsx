import type { ReactNode } from "react";
import { getTelegramBotUrl } from "@/lib/telegram";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/cn";

type TelegramCtaButtonProps = {
  children: ReactNode;
  startParam?: string;
  variant?: "primary" | "secondary" | "warm";
  className?: string;
};

export function TelegramCtaButton({
  children,
  startParam,
  variant = "primary",
  className,
}: TelegramCtaButtonProps) {
  return (
    <ButtonLink
      href={getTelegramBotUrl(startParam)}
      external
      variant={variant}
      className={cn("w-full sm:w-auto", className)}
    >
      <span>{children}</span>
      <span aria-hidden className="text-lg leading-none opacity-90">
        →
      </span>
    </ButtonLink>
  );
}
