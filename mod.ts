import {
  equals,
  greater,
  greaterOrEqual,
  less,
  lessOrEqual,
  instanceOf,
  typeOf,
} from "./src/equality.ts";
import {
  dateTimeUTC,
  dateTimeUTCString,
} from "./src/date.ts";
import {
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";
import { Result } from "https://deno.land/x/resulty/mod.ts";

function handleError(result: Result<string>): void {
  if (result.isError()) {
    throw new AssertionError(result.unwrap());
  }
}

export function assertTrue(actual: unknown): void {
  handleError(equals(actual, true));
}

export function assertFalse(actual: unknown): void {
  handleError(equals(actual, false));
}

export function assertSame(actual: unknown, expected: unknown): void {
  handleError(equals(actual, expected));
}

export function assertGreater(actual: unknown, expected: unknown): void {
  handleError(greater(actual, expected));
}

export function assertGreaterOrEqual(actual: unknown, expected: unknown): void {
  handleError(greaterOrEqual(actual, expected));
}

export function assertLess(actual: unknown, expected: unknown): void {
  handleError(less(actual, expected));
}

export function assertLessOrEqual(actual: unknown, expected: unknown): void {
  handleError(lessOrEqual(actual, expected));
}

export function assertInstanceOf(actual: unknown, expected: any): void {
  handleError(instanceOf(actual, expected));
}

export function assertTypeOf(actual: unknown, expected: string): void {
  handleError(typeOf(actual, expected));
}

export function assertDateTime(actual: Date, expected: Date | string): void {
  if (typeof expected === "string") {
    handleError(dateTimeUTCString(actual, expected));
  } else {
    handleError(dateTimeUTC(actual, expected));
  }
}
