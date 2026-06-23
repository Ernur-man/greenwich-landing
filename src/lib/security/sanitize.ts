
export function sanitizeText(value: string): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?[a-zA-Z!][^>]*>/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

export function sanitizeApplicationFields(fields: {
  name: string;
  phone: string;
  email: string;
  comment: string;
}): {
  name: string;
  phone: string;
  email: string;
  comment: string;
} {
  return {
    name: sanitizeText(fields.name),
    phone: sanitizeText(fields.phone),
    email: sanitizeText(fields.email).toLowerCase(),
    comment: sanitizeText(fields.comment),
  };
}