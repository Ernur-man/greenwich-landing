import { NextResponse } from "next/server";

import { ContentLoadError, loadContacts } from "@/server/content.service";

export async function GET() {
  try {
    const data = await loadContacts();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message =
      error instanceof ContentLoadError ? error.message : "Failed to load contacts";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
