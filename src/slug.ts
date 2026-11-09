/** Transform a single character for a URL-safe slug. */
export function slugChar(ch: string): string {
  if (ch === " ") return "-";
  return ch.toLowerCase();
}

/** A URL-safe slug for a title. */
export function slugify(title: string): string {
  let result = "";
  for (const ch of title) {
    result += slugChar(ch);
  }
  return result;
}
