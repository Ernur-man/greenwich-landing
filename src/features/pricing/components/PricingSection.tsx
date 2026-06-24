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
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Прозрачные тарифы без скрытых условий. Выберите формат, который подходит вам."
        />

        {plans.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/30 p-12 text-center">
            <p className="text-sm font-medium text-zinc-500 tracking-tight">
              Тарифы скоро появятся.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}