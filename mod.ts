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
