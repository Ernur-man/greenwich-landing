import { unstable_cache } from "next/cache";

import {
  getSheetsClient,
  getSpreadsheetId,
  GoogleSheetsError,
} from "@/lib/google/client";
import { getCacheRevalidate } from "@/lib/google/constants";

export async function readSheetRange(range: string): Promise<string[][]> {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    return (response.data.values as string[][]) ?? [];
  } catch (error) {
    throw new GoogleSheetsError(`Failed to read sheet range: ${range}`, error);
  }
}

export async function appendSheetRow(
  range: string,
  values: string[],
): Promise<void> {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [values],
      },
    });
  } catch (error) {
    throw new GoogleSheetsError(`Failed to append row to range: ${range}`, error);
  }
}

export function createCachedReader<T>(
  cacheKey: string,
  reader: () => Promise<T>,
): () => Promise<T> {
  return unstable_cache(reader, [cacheKey], {
    revalidate: getCacheRevalidate(),
    tags: [cacheKey],
  });
}

export function rowsToRecords<TRow>(
  rows: string[][],
  mapper: (row: string[], index: number) => TRow | null,
): TRow[] {
  if (rows.length <= 1) {
    return [];
  }

  return rows
    .slice(1)
    .map((row, index) => mapper(row, index))
    .filter((item): item is TRow => item !== null);
}
