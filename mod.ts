import { equals } from "./src/equality.ts";
import {
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";

export function assertTrue(actual: unknown): void {
  const result = equals(actual, true);

  if (result.isError()) {
    throw new AssertionError(result.unwrap());
  }
}

export function assertFalse(actual: unknown): void {
  const result = equals(actual, false);

  if (result.isError()) {
    throw new AssertionError(result.unwrap());
  }
}

export function assertSame(actual: unknown, expected: unknown): void {
  const result = equals(actual, expected);

  if (result.isError()) {
    throw new AssertionError(result.unwrap());
  }
}
