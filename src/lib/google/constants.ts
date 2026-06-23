export const SHEET_NAMES = {
  TEACHERS: "Teachers",
  REVIEWS: "Reviews",
  PRICING: "Pricing",
  CONTACTS: "Contacts",
  SETTINGS: "Settings",
  APPLICATIONS: "Applications",
} as const;

export function getCacheRevalidate(): number {
  const value = Number(process.env.SHEETS_CACHE_REVALIDATE ?? "60");
  return Number.isFinite(value) && value > 0 ? value : 60;
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SPREADSHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://keenfort-landing.vercel.app/";
}
