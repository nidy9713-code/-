"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  const reduced = useReducedMotion();

  if (!hover || reduced) {
    return (
      <motion.div
        className={cn(
          "rounded-2xl border border-border/90 bg-card p-5 shadow-soft md:p-6",
          className,
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border/90 bg-card p-5 shadow-soft transition-shadow md:p-6",
        className,
      )}
      whileHover={{ scale: 1.01, boxShadow: "0 12px 40px rgba(92, 122, 94, 0.14)" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
