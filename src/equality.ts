import { Result, ok, err } from "../deps.ts";
import { errorWithTypes, errorActualExpected, error } from "./message.ts";

export function equals(actual: unknown, expected: unknown): Result<string> {
  if (actual === expected) {
    return ok(`${actual} equals ${expected}`);
  }

  return err(errorWithTypes(actual, expected, "does not equal expected value"));
}

export function greater(actual: any, expected: any): Result<string> {
  if (actual > expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(
    errorWithTypes(actual, expected, "is not greater than expected value"),
  );
}

export function greaterOrEqual(actual: any, expected: any): Result<string> {
  if (actual >= expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(
    errorWithTypes(
      actual,
      expected,
      "is not greater than or equal to expected value",
    ),
  );
}

export function less(actual: any, expected: any): Result<string> {
  if (actual < expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(
    errorWithTypes(actual, expected, "is not less than expected value"),
  );
}

export function lessOrEqual(actual: any, expected: any): Result<string> {
  if (actual <= expected) {
    return ok(`${actual} greater than ${expected}`);
  }

  return err(
    errorWithTypes(
      actual,
      expected,
      "is not less than or equal to expected value",
    ),
  );
}

export function instanceOf(
  actual: unknown,
  expected: any,
): Result<string> {
  if (actual instanceof expected) {
    return ok(`${actual} is instance of ${expected}`);
  }

  return err(errorActualExpected(actual, expected, "is not an instance of"));
}

export function typeOf(
  actual: unknown,
  expected: string,
): Result<string> {
  if (typeof actual === expected) {
    return ok(`${actual} is type of ${expected}`);
  }

  return err(errorActualExpected(actual, expected, "is not a type of"));
}

export function count<T>(actual: Array<T>, expected: number): Result<string> {
  if (actual.length === expected) {
    return ok(`${actual} has a count of ${expected}`);
  }

  return err(errorActualExpected(actual, expected, "does not have a count of"));
}

export function empty(actual: unknown) {
  if (typeof actual === "string" && actual === "") {
    return ok(`${actual} is empty.`);
  }

  if (actual instanceof Array && actual.length === 0) {
    return ok(`${actual} is empty.`);
  }

  if (actual instanceof Object && Object.keys(actual).length === 0) {
    return ok(`${actual} is empty.`);
  }

  return err(error(actual, "is not empty"));
}
