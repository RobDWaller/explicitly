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
  dateTime,
  dateTimeString,
  date,
  dateString,
} from "./src/date.ts";
import {
  floor,
  ceiling,
  Round,
} from "./src/float.ts";
export { Round } from "./src/float.ts";
import { Result, AssertionError } from "./deps.ts";

function handleError(result: Result<string>): void {
  if (result.isError()) {
    throw new AssertionError(result.unwrapErr());
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
    handleError(dateTimeString(actual, expected));
  } else {
    handleError(dateTime(actual, expected));
  }
}

export function assertDate(actual: Date, expected: Date | string): void {
  if (typeof expected === "string") {
    handleError(dateString(actual, expected));
  } else {
    handleError(date(actual, expected));
  }
}

export function assertFloat(
  actual: number,
  expected: number,
  decimals?: number,
  round?: Round,
): void {
  if (typeof decimals === "number" && round === Round.Ceiling) {
    handleError(ceiling(actual, expected, decimals));
  } else if (typeof decimals === "number") {
    handleError(floor(actual, expected, decimals));
  } else {
    handleError(equals(actual, expected));
  }
}
