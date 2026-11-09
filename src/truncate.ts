/**
 * Truncate text to at most `max` characters, breaking on a word boundary
 * and appending an ellipsis (…) when truncation occurs.
 *
 * Words are separated by spaces. The result never has trailing spaces.
 */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;

  // Reserve one character for the ellipsis (U+2026).
  const limit = max - 1;
  if (limit <= 0) return "…";

  // Find the last space within the first `limit` characters (inclusive).
  const slice = text.slice(0, limit + 1);
  const lastSpace = slice.lastIndexOf(" ");

  let prefix: string;
  if (lastSpace > 0) {
    // Take whole words up to the space, then remove any trailing spaces.
    prefix = text.slice(0, lastSpace).trimEnd();
  } else {
    // The first word doesn't fit; take the first `limit` characters.
    prefix = text.slice(0, limit).trimEnd();
  }

  return prefix + "…";
}
