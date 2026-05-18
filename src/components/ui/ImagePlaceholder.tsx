import { cn } from "@/lib/cn";

export function ImagePlaceholder({
  label,
  className,
  aspect = "square",
}: {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait";
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }[aspect];

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl border-2 border-dashed border-sage/60 bg-gradient-to-br from-section to-sage-light/40",
        aspectClass,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center text-sm font-medium text-muted">{label}</span>
    </div>
  );
}
