import {
  assertThrows,
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";
import { assertTrue } from "../mod.ts";

Deno.test("Assert True", () => {
  assertTrue(true);
});

Deno.test("Assert True Fail", () => {
  assertThrows(
    (): void => {
      assertTrue(false);
    },
    AssertionError,
    `"false" does not equal the expected value "true".`,
  );
});
