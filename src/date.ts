import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";
import { errorSimple } from "./message.ts";

function toDateString(date: Date): string {
  return date.getFullYear() + "-" +
    (date.getMonth() + 1) + "-" +
    date.getDate();
}

export function date(
  actual: Date,
  expected: Date,
): Result<string> {
  if (toDateString(actual) === toDateString(expected)) {
    return ok(`${toDateString(actual)} is equal to ${toDateString(expected)}`);
  }

  return err(
    errorSimple(
      toDateString(actual),
      toDateString(expected),
      "does not match expected date",
    ),
  );
}

export function dateString(
  actual: Date,
  expected: string,
): Result<string> {
  const expectedDate = new Date(expected);

  if (toDateString(actual) === toDateString(expectedDate)) {
    return ok(
      `${toDateString(actual)} is equal to ${toDateString(expectedDate)}`,
    );
  }

  return err(
    errorSimple(
      toDateString(actual),
      toDateString(expectedDate),
      "does not match expected date",
    ),
  );
}

export function dateTime(
  actual: Date,
  expected: Date,
): Result<string> {
  if (actual.toISOString() === expected.toISOString()) {
    return ok(`${actual} is equal to ${expected}`);
  }

  return err(
    errorSimple(
      actual.toISOString(),
      expected.toISOString(),
      "does not match expected date",
    ),
  );
}

export function dateTimeString(
  actual: Date,
  expected: string,
): Result<string> {
  const expectedDate = new Date(expected);

  if (actual.toISOString() === expectedDate.toISOString()) {
    return ok(`${actual} is equal to ${expected}`);
  }

  return err(
    errorSimple(actual.toISOString(), expected, "does not match expected date"),
  );
}
