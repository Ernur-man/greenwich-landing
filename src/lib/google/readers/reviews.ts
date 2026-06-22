import { SHEET_NAMES } from "@/lib/google/constants";
import {
  createCachedReader,
  readSheetRange,
  rowsToRecords,
} from "@/lib/google/sheets";
import type { Review } from "@/types/review";

function parseRating(value: string | undefined): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return 5;
  }
  return Math.min(5, Math.max(1, Math.round(parsed)));
}

function parseReviewRow(row: string[], index: number): Review | null {
  const [name, role, review, rating] = row;

  if (!name?.trim() || !review?.trim()) {
    return null;
  }

  return {
    id: `review-${index + 1}`,
    name: name.trim(),
    review: review.trim(),
    rating: parseRating(rating),
  };
}

async function fetchReviews(): Promise<Review[]> {
  const rows = await readSheetRange(`${SHEET_NAMES.REVIEWS}!A:D`); 
  return rowsToRecords(rows, parseReviewRow);
}

export const getReviews = createCachedReader("reviews", fetchReviews);
