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

      await fetch(process.env.SHEET_MONKEY_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    if (error instanceof OriginValidationError) {
      return NextResponse.json({ success: false, message: "Запрос отклонён." }, { status: 403 });
    }
  }
}
