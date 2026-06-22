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
    <section id="application" className="bg-neutral-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Оставьте заявку — мы свяжемся с вами, уточним детали и подберём оптимальную программу."
        />

        <Card className="mx-auto max-w-3xl">
          <ApplicationForm plans={plans} />
        </Card>
      </Container>
    </section>
  );
}
