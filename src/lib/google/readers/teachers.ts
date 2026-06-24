import { SHEET_NAMES } from "@/lib/google/constants";
import {
  createCachedReader,
  readSheetRange,
  rowsToRecords,
} from "@/lib/google/sheets";
import type { Teacher } from "@/types/teacher";

function parseTeacherRow(row: string[], index: number): Teacher | null {
  const [id, name, role, photo, bio] = row;
  if (!name?.trim()) {
    return null;
  }

  return {
    id: id ?? "",
    name: name ?? "",
    photo: photo?.trim() ?? "", 
    experience: role ?? "",     
    description: bio ?? "",     
  };
}

async function fetchTeachers(): Promise<Teacher[]> {
  const rows = await readSheetRange(`${SHEET_NAMES.TEACHERS}!A:E`);
  return rowsToRecords(rows, parseTeacherRow);
}

export const getTeachers = createCachedReader("teachers", fetchTeachers);
