import { NextResponse } from "next/server";

import { ContentLoadError, loadSettings } from "@/server/content.service";

export async function GET() {
  try {
    const data = await loadSettings();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof ContentLoadError ? error.message : "Failed to load settings";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
