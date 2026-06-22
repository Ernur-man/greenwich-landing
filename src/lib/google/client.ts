import { google, type sheets_v4 } from "googleapis";

import { isGoogleSheetsConfigured } from "@/lib/google/constants";

let sheetsClient: sheets_v4.Sheets | null = null;

function getPrivateKey(): string {
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!rawKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is not configured");
  }
  return rawKey.replace(/\\n/g, "\n");
}

export function getSpreadsheetId(): string {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SPREADSHEET_ID is not configured");
  }
  return spreadsheetId;
}

export function getSheetsClient(): sheets_v4.Sheets {
  if (!isGoogleSheetsConfigured()) {
    throw new Error("Google Sheets integration is not configured");
  }

  if (sheetsClient) {
    return sheetsClient;
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (!email) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL is not configured");
  }

  const auth = new google.auth.JWT({
    email,
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

export class GoogleSheetsError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "GoogleSheetsError";
  }
}
