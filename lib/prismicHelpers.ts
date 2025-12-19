import { asText, KeyTextField, RichTextField } from "@prismicio/client";

/**
 * Helper to safely convert text fields (handles both plain text and rich text)
 * This is needed because Prismic may return either KeyTextField (string) or RichTextField (array)
 */
export const getText = (
  field: KeyTextField | RichTextField | null | undefined,
): string => {
  if (!field) return "";
  if (typeof field === "string") return field;
  if (Array.isArray(field)) {
    return asText(field) || "";
  }
  return "";
};
