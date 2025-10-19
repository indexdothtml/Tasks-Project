// Formatted output - dd-mm-yyyy
export function formatDateToLocal(date: string) {
  return new Date(date)
    .toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
}
