import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm transition-all hover:border-zinc-200/80 hover:shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <StarRating rating={review.rating} />
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 italic">
          “{review.review}”
        </p>
      </div>
      
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-100">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 uppercase border border-zinc-200/50">
          {review.name.trim().charAt(0)}
        </div>
        <p className="text-sm font-semibold tracking-tight text-zinc-900">
          {review.name}
        </p>
      </div>
    </Card>
  );
}