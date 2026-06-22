import { NextResponse } from "next/server";

import { ContentLoadError, loadPricing } from "@/server/content.service";

export async function GET() {
  try {
    const data = await loadPricing();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof ContentLoadError ? error.message : "Failed to load pricing";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
