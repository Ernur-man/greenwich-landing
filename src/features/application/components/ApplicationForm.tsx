"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  applicationFormSchema,
  type ApplicationFormValues,
} from "@/lib/validation/application";
import type { ApiErrorResponse, ApiSuccessResponse } from "@/types/application";
import type { PricingPlan } from "@/types/pricing";

interface ApplicationFormProps {
  plans: PricingPlan[];
}

export function ApplicationForm({ plans }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      plan: "",
      comment: "",
    },
  });

  const planOptions = plans.map((plan) => ({
    value: plan.title,
    label: `${plan.title} — ${plan.price}`,
  }));

  const onSubmit = async (values: ApplicationFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ApiSuccessResponse | ApiErrorResponse;

      if (!response.ok || !result.success) {
        const errorMessage =
          "message" in result && result.message
            ? result.message
            : "Не удалось отправить заявку.";
        toast.error(errorMessage);
        return;
      }

      toast.success(result.message ?? "Заявка успешно отправлена.");
      reset();
    } catch {
      toast.error("Ошибка сети. Проверьте подключение и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Имя"
          placeholder="Ваше имя"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Телефон"
          placeholder="+7 (999) 000-00-00"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Select
          label="Тариф"
          options={planOptions}
          error={errors.plan?.message}
          {...register("plan")}
        />
      </div>

      <Textarea
        label="Комментарий"
        placeholder="Расскажите о ваших целях обучения (необязательно)"
        error={errors.comment?.message}
        {...register("comment")}
      />

      <div className="pt-2">
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting} 
          className="w-full sm:w-auto rounded-xl bg-zinc-900 text-white font-medium transition-all hover:bg-zinc-800 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-sm"
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
      </div>
    </form>
  );
}