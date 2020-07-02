import {
  red,
  green,
} from "../deps.ts";

function getValueOrName(value: unknown): string {
  if (typeof value === "object") {
    return String(value?.constructor.name);
  }

  if (typeof value === "function") {
    if (value.name === undefined || value.name === "") {
      return "Function";
    }

    return String(value.name);
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

export function errorSimple(
  actual: unknown,
  expected: unknown,
  text: string,
): string {
  let message: string = red(
    `"${getValueOrName(actual)}"`,
  );
  message = message.concat(` ${text} `);
  return message.concat(
    green(`"${getValueOrName(expected)}".`),
  );
}

export function errorMessage(actual: unknown, text: string): string {
  return red(`"${getValueOrName(actual)}" ${text}.`);
}
