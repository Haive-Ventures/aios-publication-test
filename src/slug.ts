/** A URL-safe slug for a title. */
export function slugify(title: string): string {
  return title.toLowerCase().replace(/ /g, "-");
}
