import { isGoogleSheetsConfigured } from "@/lib/google/constants";
import { GoogleSheetsError } from "@/lib/google/client";
import { getContacts as getContactsFromSheet } from "@/lib/google/readers/contacts";
import { getPricing as getPricingFromSheet } from "@/lib/google/readers/pricing";
import { getReviews as getReviewsFromSheet } from "@/lib/google/readers/reviews";
import { getSettings as getSettingsFromSheet } from "@/lib/google/readers/settings";
import { getTeachers as getTeachersFromSheet } from "@/lib/google/readers/teachers";
import type { ContactInfo } from "@/types/contact";
import type { PricingPlan } from "@/types/pricing";
import type { Review } from "@/types/review";
import { DEFAULT_SETTINGS, type SiteSettings } from "@/types/settings";
import type { Teacher } from "@/types/teacher";

export class ContentLoadError extends Error {
  constructor(
    message: string,
    public readonly source: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "ContentLoadError";
  }
}

async function safeLoad<T>(
  source: string,
  loader: () => Promise<T>,
  fallback: T,
): Promise<T> {
  if (!isGoogleSheetsConfigured()) {
    console.warn(`[${source}] Google Sheets is not configured. Using fallback data.`);
    return fallback;
  }

  try {
    return await loader();
  } catch (error) {
    const message =
      error instanceof GoogleSheetsError
        ? error.message
        : `Failed to load ${source}`;
    console.error(`[${source}]`, message, error);
    return fallback;
  }
}

export async function loadTeachers(): Promise<Teacher[]> {
  return safeLoad("teachers", getTeachersFromSheet, []);
}

export async function loadReviews(): Promise<Review[]> {
  return safeLoad("reviews", getReviewsFromSheet, []);
}

export async function loadPricing(): Promise<PricingPlan[]> {
  return safeLoad("pricing", getPricingFromSheet, []);
}

export async function loadContacts(): Promise<ContactInfo> {
  return safeLoad("contacts", getContactsFromSheet, {
    phone: "",
    email: "",
    address: "",
    instagram: "",
    telegram: "",
    whatsapp: "",
  });
}

export async function loadSettings(): Promise<SiteSettings> {
  return safeLoad("settings", getSettingsFromSheet, DEFAULT_SETTINGS);
}

export interface PageContent {
  settings: SiteSettings;
  teachers: Teacher[];
  reviews: Review[];
  pricing: PricingPlan[];
  contacts: ContactInfo;
}

export async function loadPageContent(): Promise<PageContent> {
  const [settings, teachers, reviews, pricing, contacts] = await Promise.all([
    loadSettings(),
    loadTeachers(),
    loadReviews(),
    loadPricing(),
    loadContacts(),
  ]);

  return { settings, teachers, reviews, pricing, contacts };
}
