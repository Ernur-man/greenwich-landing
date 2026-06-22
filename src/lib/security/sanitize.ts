import DOMPurify from "isomorphic-dompurify";

export function sanitizeText(value: string): string {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
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
