import { NextResponse } from "next/server";

import { loadTeachers } from "@/server/content.service";
import { ContentLoadError } from "@/server/content.service";

export async function GET() {
  try {
    const data = await loadTeachers();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof ContentLoadError
        ? error.message
        : "Failed to load teachers";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
