import { z } from "zod";

export const applicationFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя не должно превышать 100 символов"),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .max(20, "Номер телефона слишком длинный")
    .regex(/^[\d\s+\-()]+$/, "Некорректный формат телефона"),
  email: z
    .string()
    .email("Введите корректный email")
    .max(255, "Email слишком длинный"),
  plan: z.string().min(1, "Выберите тариф").max(100, "Некорректный тариф"),
  comment: z.string().max(1000, "Комментарий не должен превышать 1000 символов"),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;
