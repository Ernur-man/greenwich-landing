import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/features/reviews/components/ReviewCard";
import type { Review } from "@/types/review";

interface ReviewsSectionProps {
  title: string;
  reviews: Review[];
}

export function ReviewsSection({ title, reviews }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="bg-neutral-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Истории студентов, которые уже достигли своих целей с Keenfort."
        />

        {reviews.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-500">Отзывы скоро появятся.</p>
        )}
      </Container>
    </section>
  );
}
