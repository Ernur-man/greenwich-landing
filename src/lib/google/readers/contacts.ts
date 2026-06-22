import { SHEET_NAMES } from "@/lib/google/constants";
import { createCachedReader, readSheetRange } from "@/lib/google/sheets";
import type { ContactInfo } from "@/types/contact";

const EMPTY_CONTACTS: ContactInfo = {
  phone: "",
  email: "",
  address: "",
  instagram: "",
  telegram: "",
  whatsapp: "",
};

async function fetchContacts(): Promise<ContactInfo> {
  const rows = await readSheetRange(`${SHEET_NAMES.CONTACTS}!A:C`);

  if (rows.length <= 1) {
    return EMPTY_CONTACTS;
  }

  const data: Record<string, string> = {};
  rows.slice(1).forEach(([key, valueRu, valueKz]) => {
    if (key) {
      data[`${key.trim()}_ru`] = valueRu?.trim() ?? "";
      data[`${key.trim()}_kz`] = valueKz?.trim() ?? "";
    }
  });

  return {
    phone: data["phone_ru"] ?? "",
    email: data["email_ru"] ?? "",
    address: data["address_ru"] ?? "",
    instagram: data["instagram_ru"] ?? "",
    telegram: data["telegram_ru"] ?? "",
    whatsapp: data["whatsapp_ru"] ?? "",
  };
}

export const getContacts = createCachedReader("contacts", fetchContacts);
