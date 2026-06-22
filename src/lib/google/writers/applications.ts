import { format } from "date-fns";

import { SHEET_NAMES } from "@/lib/google/constants";
import { appendSheetRow } from "@/lib/google/sheets";
import type { ApplicationPayload } from "@/types/application";

export async function writeApplication(
  application: ApplicationPayload,
): Promise<void> {
  const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

  await appendSheetRow(`${SHEET_NAMES.APPLICATIONS}!A:F`, [
    date,
    application.name,
    application.phone,
    application.email,
    application.plan,
    application.comment,
  ]);
}
