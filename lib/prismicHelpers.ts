import { asText } from "@prismicio/client";

/**
 * Helper to safely convert text fields (handles both plain text and rich text)
 * This is needed because Prismic may return either KeyTextField (string) or RichTextField (array)
 */
export const getText = (field: any): string => {
    if (!field) return "";
    if (typeof field === "string") return field;
    if (Array.isArray(field)) {
        const text = asText(field as any);
        return text || "";
    }
    if (field.text) return field.text;
    return String(field);
};
