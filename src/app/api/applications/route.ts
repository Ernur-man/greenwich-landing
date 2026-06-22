import { NextResponse } from "next/server";

import { RateLimitExceededError } from "@/lib/security/rate-limit";
import { OriginValidationError } from "@/lib/security/origin";
import {
  ApplicationServiceError,
  submitApplication,
} from "@/server/application.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      ...(body as Record<string, any>),
      Created_at: new Date().toLocaleString("ru-RU"),
    };

    const result = await submitApplication(request, body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    if (process.env.SHEET_MONKEY_URL) {
      try {
        await fetch(process.env.SHEET_MONKEY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (forwardError) {
        // Не блокируем успешный ответ пользователю из-за вторичной интеграции
        console.error("SHEET_MONKEY_URL forwarding failed:", forwardError);
      }
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    if (error instanceof OriginValidationError) {
      return NextResponse.json(
        { success: false, message: "Запрос отклонён." },
        { status: 403 },
      );
    }

    if (error instanceof RateLimitExceededError) {
      return NextResponse.json(
        { success: false, message: "Слишком много попыток. Попробуйте позже." },
        { status: 429 },
      );
    }

    if (error instanceof ApplicationServiceError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: error.status },
      );
    }

    console.error("Unhandled error in /api/applications:", error);
    return NextResponse.json(
      { success: false, message: "Произошла внутренняя ошибка. Попробуйте позже." },
      { status: 500 },
    );
  }
}
