import { Star } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  const normalized = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`Рейтинг ${normalized} из 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < normalized ? "fill-accent text-accent" : "text-neutral-300",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
