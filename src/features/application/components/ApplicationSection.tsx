import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApplicationForm } from "@/features/application/components/ApplicationForm";
import type { PricingPlan } from "@/types/pricing";

interface ApplicationSectionProps {
  title: string;
  plans: PricingPlan[];
}

export function ApplicationSection({ title, plans }: ApplicationSectionProps) {
  return (
    <section id="application" className="bg-zinc-50/50 py-24 lg:py-32 border-t border-zinc-100">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Оставьте заявку — мы свяжемся с вами, уточним детали и подберём оптимальную программу."
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <Card className="p-6 sm:p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm">
            <ApplicationForm plans={plans} />
          </Card>
        </div>
      </Container>
    </section>
  );
}