import { writeApplication } from "@/lib/google/writers/applications";
import { isGoogleSheetsConfigured } from "@/lib/google/constants";
import { GoogleSheetsError } from "@/lib/google/client";
import { enforceApplicationRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { validateRequestOrigin } from "@/lib/security/origin";
import { sanitizeApplicationFields, sanitizeText } from "@/lib/security/sanitize";
import { applicationFormSchema } from "@/lib/validation/application";
import type { ApiErrorResponse, ApiSuccessResponse } from "@/types/application";

export class ApplicationServiceError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApplicationServiceError";
  }
}

export async function submitApplication(
  request: Request,
  body: unknown,
): Promise<ApiSuccessResponse | ApiErrorResponse> {
  validateRequestOrigin(request);
  await enforceApplicationRateLimit(getClientIp(request));

  if (!isGoogleSheetsConfigured()) {
    throw new ApplicationServiceError(
      "Сервис временно недоступен. Попробуйте позже.",
      503,
    );
  }

  const parsed = applicationFormSchema.safeParse(body);
  if (!parsed.success) {
    return {
      success: false,
      message: "Проверьте правильность заполнения формы.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const sanitized = sanitizeApplicationFields({
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email,
    comment: parsed.data.comment,
  });

  try {
    await writeApplication({
      ...sanitized,
      plan: sanitizeText(parsed.data.plan),
    });
  } catch (error) {
    const message =
      error instanceof GoogleSheetsError
        ? "Не удалось сохранить заявку. Попробуйте позже."
        : "Произошла ошибка при отправке заявки.";
    throw new ApplicationServiceError(message, 500);
  }

  return {
    success: true,
    message: "Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.",
  };
}
