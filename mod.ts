import {
  equals,
  greater,
  greaterOrEqual,
  less,
  lessOrEqual,
  instanceOf,
  typeOf,
  count,
  empty,
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
import { notThrows } from "./src/throws.ts";
export { Round } from "./src/float.ts";
import { Result, AssertionError } from "./deps.ts";

/**
 * Deno test tools require an AssertionError to be thrown on error. If the
 * result of the equality check is error throw an error with the unwrapped error
 * message included.
 */
function handleError(result: Result<string>): void {
  if (result.isError()) {
    throw new AssertionError(result.unwrapErr());
  }
}

/**
 * Assert a value is equal to true.
 */
export function assertTrue(actual: unknown): void {
  handleError(equals(actual, true));
}

/**
 * Assert a value is equal to false.
 */
export function assertFalse(actual: unknown): void {
  handleError(equals(actual, false));
}

/**
 * Assert a value has the same value and type as the expected value.
 */
export function assertSame(actual: unknown, expected: unknown): void {
  handleError(equals(actual, expected));
}

/**
 * Assert a value is greater in value or length than the expected value.
 */
export function assertGreater(actual: unknown, expected: unknown): void {
  handleError(greater(actual, expected));
}

/**
 * Assert a value is greater or equal in value or length to the expected value.
 */
export function assertGreaterOrEqual(actual: unknown, expected: unknown): void {
  handleError(greaterOrEqual(actual, expected));
}

/**
 * Assert a value is less in value or length than the expected value.
 */
export function assertLess(actual: unknown, expected: unknown): void {
  handleError(less(actual, expected));
}

/**
 * Assert a value is less or equal in value or length to the expected value.
 */
export function assertLessOrEqual(actual: unknown, expected: unknown): void {
  handleError(lessOrEqual(actual, expected));
}

/**
 * Assert a value is an instance of the expected type. Useful when testing
 * polymorphic relationships.
 */
export function assertInstanceOf(actual: unknown, expected: any): void {
  handleError(instanceOf(actual, expected));
}

/**
 * Assert the a value is of the expected type string. Useful when a method
 * returns a value of any or unknown.
 */
export function assertTypeOf(actual: unknown, expected: string): void {
  handleError(typeOf(actual, expected));
}

/**
 * Assert a date object has the same date time as another date object or date
 * time string.
 */
export function assertDateTime(actual: Date, expected: Date | string): void {
  if (typeof expected === "string") {
    handleError(dateTimeString(actual, expected));
  } else {
    handleError(dateTime(actual, expected));
  }
}

/**
 * Assert a date object has the same date as the expected date object or
 * date string.
 */
export function assertDate(actual: Date, expected: Date | string): void {
  if (typeof expected === "string") {
    handleError(dateString(actual, expected));
  } else {
    handleError(date(actual, expected));
  }
}

/**
 * Assert whether a float equals the expected float. Can define the equality
 * accuracy to a number of decimal places and whether it should be based on
 * rounding to the floor or ceiling.
 */
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

/**
 * Assert whether a function does not throw an error.
 */
export function assertNotThrows(actual: Function): void {
  handleError(notThrows(actual));
}

/** 
 * Assert an array has an expected number of elements.
 */
export function assertCount<T>(actual: Array<T>, expected: number): void {
  handleError(count(actual, expected));
}

/** 
 * Assert a string, array or object is empty.
 */
export function assertEmpty(actual: unknown): void {
  handleError(empty(actual));
}