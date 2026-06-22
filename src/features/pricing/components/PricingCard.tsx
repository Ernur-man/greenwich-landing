import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";
import type { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col",
        plan.recommended && "border-accent shadow-md ring-1 ring-accent/20",
      )}
    >
      {plan.recommended ? (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
          Рекомендуем
        </span>
      ) : null}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-900">{plan.title}</h3>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
          {plan.price}
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#application">
        <Button variant={plan.recommended ? "primary" : "secondary"} className="w-full">
          Записаться
        </Button>
      </a>
    </Card>
  );
}
