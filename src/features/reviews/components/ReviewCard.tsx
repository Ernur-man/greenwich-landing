import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <StarRating rating={review.rating} />
      <p className="flex-1 text-sm leading-relaxed text-neutral-700">{review.review}</p>
      <p className="text-sm font-semibold text-neutral-900">{review.name}</p>
    </Card>
  );
}
