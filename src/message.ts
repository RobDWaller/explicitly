export function message(actual: unknown, expected: unknown, text: string): string {
  return `"${actual}" type of ${typeof actual} ${text} "${expected}" type of ${typeof expected}.`;
}