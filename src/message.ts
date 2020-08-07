import {
  red,
  green,
} from "../deps.ts";

/**
 * Retrieve the string value of the value under test, if not available in the 
 * case of functions and objects try to return the name.
 */
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

/**
 * Create an error message for the CLI using the actual test value, the expected
 * test value and some text. Appends value type information. Prints out the 
 * error in red, white and green text.
 */
export function errorWithTypes(
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

/**
 * Create an error message for the CLI using the actual test value, the expected
 * test value and some text. Prints out the error in red, white and green text.
 */
export function errorActualExpected(
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

/**
 * Create an error message for the CLI using the actual test value and
 * some text. Prints out the error in red text.
 */
export function error(actual: unknown, text: string): string {
  return red(`"${getValueOrName(actual)}" ${text}.`);
}
