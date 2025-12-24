import { asText, KeyTextField, RichTextField } from "@prismicio/client";

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
