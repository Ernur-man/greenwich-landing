import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/features/pricing/components/PricingCard";
import type { PricingPlan } from "@/types/pricing";

interface PricingSectionProps {
  title: string;
  plans: PricingPlan[];
}

export function PricingSection({ title, plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Прозрачные тарифы без скрытых условий. Выберите формат, который подходит вам."
        />

        {plans.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-500">Тарифы скоро появятся.</p>
        )}
      </Container>
    </section>
  );
}
