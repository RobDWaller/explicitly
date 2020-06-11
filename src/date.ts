import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";
import { errorSimple } from "./message.ts";

export function dateTimeUTC(
  actual: Date,
  expected: Date,
): Result<string> {
  if (actual.toUTCString() === expected.toUTCString()) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(errorSimple(actual.toUTCString(), expected.toUTCString(), "does not match date"));
}

export function dateTimeUTCString(
  actual: Date,
  expected: string,
): Result<string> {
  if (actual.toUTCString() === expected) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(errorSimple(actual.toUTCString(), expected, "does not match date"));
}