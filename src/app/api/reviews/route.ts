import { NextResponse } from "next/server";

import { ContentLoadError, loadReviews } from "@/server/content.service";

export async function GET() {
  try {
    const data = await loadReviews();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof ContentLoadError ? error.message : "Failed to load reviews";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
