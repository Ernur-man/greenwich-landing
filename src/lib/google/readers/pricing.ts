import { SHEET_NAMES } from "@/lib/google/constants";
import {
  createCachedReader,
  readSheetRange,
  rowsToRecords,
} from "@/lib/google/sheets";
import type { PricingPlan } from "@/types/pricing";

function parseRecommended(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "yes" || normalized === "1";
}

function parseFeatures(value: string | undefined): string[] {
  if (!value?.trim()) {
    return [];
  }
  return value
    .split("|")
    .map((feature) => feature.trim())
    .filter(Boolean);
}

function parsePricingRow(row: string[], index: number): PricingPlan | null {
  const [title, price, features, recommended] = row;

  if (!title?.trim() || !price?.trim()) {
    return null;
  }

  return {
    id: `plan-${index + 1}`,
    title: title.trim(),
    price: price.trim(),
    features: parseFeatures(features),
    recommended: parseRecommended(recommended),
  };
}

async function fetchPricing(): Promise<PricingPlan[]> {
  const rows = await readSheetRange(`${SHEET_NAMES.PRICING}!A:D`);
  return rowsToRecords(rows, parsePricingRow);
}

export const getPricing = createCachedReader("pricing", fetchPricing);
