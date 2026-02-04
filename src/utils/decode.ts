/** Decodes a base64 encoded string of comma-separated numbers into an array of numbers. */
export function decodePortfolioIds(encoded: string | null): number[] {
  if (!encoded) return [];

  try {
    // Decodes the base64 encoded string into a comma-separated string of numbers
    const decoded = atob(encoded); // "12,2,13"

    // Splits the decoded string into an array of numbers
    return decoded
      .split(",")
      .map((id) => Number(id))
      .filter(Boolean);
  } catch {
    // Returns an empty array if the decoding fails
    return [];
  }
}
