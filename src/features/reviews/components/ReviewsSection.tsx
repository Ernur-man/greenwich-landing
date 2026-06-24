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
    <section id="reviews" className="bg-zinc-50/50 py-24 lg:py-32 border-y border-zinc-100">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Истории студентов, которые уже достигли своих целей с Keenfort."
        />

        {reviews.length > 0 ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/30 p-12 text-center">
            <p className="text-sm font-medium text-zinc-500 tracking-tight">
              Отзывы скоро появятся.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}