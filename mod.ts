import {
  equals,
  greater,
  greaterOrEqual,
  less,
  lessOrEqual,
  instanceOf,
  typeOf,
  count,
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
 * result of the equality check is false throw an error with the unwrapped error
 * message included. 
 */
function handleError(result: Result<string>): void {
  if (result.isError()) {
    throw new AssertionError(result.unwrapErr());
  }
}

/**
 * Assert the provided value is equal to true. 
 */
export function assertTrue(actual: unknown): void {
  handleError(equals(actual, true));
}

/**
 * Assert the provided value is equal to false. 
 */
export function assertFalse(actual: unknown): void {
  handleError(equals(actual, false));
}

/**
 * Assert the provided values have the same value and type. 
 */
export function assertSame(actual: unknown, expected: unknown): void {
  handleError(equals(actual, expected));
}

/**
 * Assert the actual value is greater in value or length than the 
 * expected value. 
 */
export function assertGreater(actual: unknown, expected: unknown): void {
  handleError(greater(actual, expected));
}

/**
 * Assert the actual value is greater or equal in value or length to the 
 * expected value. 
 */
export function assertGreaterOrEqual(actual: unknown, expected: unknown): void {
  handleError(greaterOrEqual(actual, expected));
}

/**
 * Assert the actual value is less in value or length than the 
 * expected value. 
 */
export function assertLess(actual: unknown, expected: unknown): void {
  handleError(less(actual, expected));
}

/**
 * Assert the actual value is less or equal in value or length to the 
 * expected value. 
 */
export function assertLessOrEqual(actual: unknown, expected: unknown): void {
  handleError(lessOrEqual(actual, expected));
}

/**
 * Assert the actual value is an instance of the expected type. Useful when 
 * checking polymorphic relationships.
 */
export function assertInstanceOf(actual: unknown, expected: any): void {
  handleError(instanceOf(actual, expected));
}

/**
 * Assert the actual value is of a specific type. Useful when a method returns
 * a value of any or unknown. 
 */
export function assertTypeOf(actual: unknown, expected: string): void {
  handleError(typeOf(actual, expected));
}

/**
 * Assert a date object has the same date time as another date object or a
 * date time string. 
 */
export function assertDateTime(actual: Date, expected: Date | string): void {
  if (typeof expected === "string") {
    handleError(dateTimeString(actual, expected));
  } else {
    handleError(dateTime(actual, expected));
  }
}

/**
 * Assert a date object has the same date as another date object or a 
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
 * Assert whether an actual float equals an expected float. Can define the 
 * equality accuracy to a number of decimal places and whether it should be 
 * based on rounding to the floor or ceiling.
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
 * Assert whether a function does not throw an error. May be a useful when 
 * refactoring a codebase.
 */
export function assertNotThrows(actual: Function) {
  handleError(notThrows(actual));
}

/** 
 * Assert an array has a expected number of elements.
 */
export function assertCount<T>(actual: Array<T>, expected: number) {
  handleError(count(actual, expected));
}