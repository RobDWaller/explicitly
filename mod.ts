import { equals } from "./src/equality.ts";
import {
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";

export function assertTrue(actual: unknown): void {
  if (equals(actual, true).isError()) {
    throw new AssertionError(`The value ${actual} does not equal true.`);
  }
}
