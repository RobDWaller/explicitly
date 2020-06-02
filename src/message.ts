function getValueOrName(value: unknown): string {
  if (typeof value === "object") {
    return String(value?.constructor.name);
  }

  if (typeof value === "function") {
    return String(value?.name);
  }

  return String(value);
}

export function message(
  actual: unknown,
  expected: unknown,
  text: string,
): string {
  return `"${getValueOrName(actual)}" type of ${typeof actual} ${text} "${
    getValueOrName(expected)
  }" type of ${typeof expected}.`;
}
