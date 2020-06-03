import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";
import { error } from "./message.ts";

export function equals(actual: unknown, expected: unknown): Result<string> {
  if (actual === expected) {
    return ok(`${actual} equals ${expected}`);
  }

  return err(error(actual, expected, "does not equal the expected value"));
}

export function greater(actual: any, expected: any): Result<string> {
  if (actual > expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(error(actual, expected, "is not greater than expected value"));
}

export function greaterOrEqual(actual: any, expected: any): Result<string> {
  if (actual >= expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(
    error(actual, expected, "is not greater than or equal to expected value"),
  );
}
