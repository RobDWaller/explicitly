import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";
import { errorSimple } from "./message.ts";

export function dateString(
  actual: Date,
  expected: string,
): Result<string> {
  const expectedDate = new Date(expected);

  const actualDateString = actual.getFullYear() + "-" + 
    actual.getMonth() + "-" + 
    actual.getDay();

  const expectedDateString = expectedDate.getFullYear() + "-" + 
    expectedDate.getMonth() + "-" + 
    expectedDate.getDay();

  if (actualDateString === expectedDateString) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(
    errorSimple(
      actualDateString,
      expectedDateString,
      "does not match date",
    ),
  );
}

export function dateTime(
  actual: Date,
  expected: Date,
): Result<string> {
  if (actual.toISOString() === expected.toISOString()) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(
    errorSimple(
      actual.toISOString(),
      expected.toISOString(),
      "does not match date",
    ),
  );
}

export function dateTimeString(
  actual: Date,
  expected: string,
): Result<string> {
  if (actual.toISOString() === expected) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(
    errorSimple(actual.toISOString(), expected, "does not match date"),
  );
}
