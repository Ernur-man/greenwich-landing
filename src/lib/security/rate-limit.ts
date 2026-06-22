import { RateLimiterMemory } from "rate-limiter-flexible";

const APPLICATION_RATE_LIMIT_POINTS = 5;
const APPLICATION_RATE_LIMIT_DURATION_SECONDS = 600;

const applicationRateLimiter = new RateLimiterMemory({
  points: APPLICATION_RATE_LIMIT_POINTS,
  duration: APPLICATION_RATE_LIMIT_DURATION_SECONDS,
});

export class RateLimitExceededError extends Error {
  constructor() {
    super("Too many requests. Please try again later.");
    this.name = "RateLimitExceededError";
  }
}

export async function enforceApplicationRateLimit(ip: string): Promise<void> {
  try {
    await applicationRateLimiter.consume(ip);
  } catch {
    throw new RateLimitExceededError();
  }
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}
