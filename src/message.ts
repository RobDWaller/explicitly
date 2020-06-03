import {
  red,
  green,
} from "https://deno.land/std/fmt/colors.ts";

function getValueOrName(value: unknown): string {
  if (typeof value === "object") {
    return String(value?.constructor.name);
  }

  if (typeof value === "function") {
    return String(value?.name);
  }

  return String(value);
}

export function error(
  actual: unknown,
  expected: unknown,
  text: string,
): string {
  let message: string = red(
    `"${getValueOrName(actual)}" type of ${typeof actual}`,
  );
  message = message.concat(` ${text} `);
  return message.concat(
    green(`"${getValueOrName(expected)}" type of ${typeof expected}.`),
  );
}
