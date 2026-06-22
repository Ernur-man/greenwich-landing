import { HeroSection } from "@/components/sections/HeroSection";
import { HowLearningWorksSection } from "@/components/sections/HowLearningWorksSection";
import { ApplicationSection } from "@/features/application/components/ApplicationSection";
import { PricingSection } from "@/features/pricing/components/PricingSection";
import { ReviewsSection } from "@/features/reviews/components/ReviewsSection";
import { TeachersSection } from "@/features/teachers/components/TeachersSection";
import { loadPageContent } from "@/server/content.service";

export const revalidate = 60;

export default async function HomePage() {
  const { settings, teachers, reviews, pricing } = await loadPageContent();

  return (
    <>
      <HeroSection
        title={settings.hero_title}
        subtitle={settings.hero_subtitle}
      />
      <HowLearningWorksSection title={settings.how_it_works_title} />
      <TeachersSection title={settings.teachers_title} teachers={teachers} />
      <ReviewsSection title={settings.reviews_title} reviews={reviews} />
      <PricingSection title={settings.pricing_title} plans={pricing} />
      <ApplicationSection title={settings.application_title} plans={pricing} />
    </>
  );
}
