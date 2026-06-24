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
        "relative flex h-full flex-col p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:border-zinc-200",
        plan.recommended && "border-zinc-900 shadow-md ring-1 ring-zinc-900/5 hover:border-zinc-900",
      )}
    >
      {plan.recommended && (
        <span className="absolute -top-2.5 left-6 rounded-full bg-zinc-900 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
          Рекомендуем
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{plan.title}</h3>
        <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
          {plan.price}
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-600">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 mt-0.5 border border-zinc-200/60">
              <Check className="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span className="leading-normal">{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#application" className="mt-auto block">
        <Button 
          variant={plan.recommended ? "primary" : "secondary"} 
          className={cn(
            "w-full rounded-xl font-medium transition-all active:scale-95 shadow-sm",
            plan.recommended 
              ? "bg-zinc-900 text-white hover:bg-zinc-800" 
              : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
          )}
        >
          Записаться
        </Button>
      </a>
    </Card>
  );
}