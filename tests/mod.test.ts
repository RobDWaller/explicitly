import {
  assertThrows,
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";
import { assertTrue, assertFalse } from "../mod.ts";

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

Deno.test("Assert True Fail Number", () => {
  assertThrows(
    (): void => {
      assertTrue(1);
    },
    AssertionError,
    `"1" does not equal the expected value "true".`,
  );
});

Deno.test("Assert True Fail String", () => {
  assertThrows(
    (): void => {
      assertTrue("true");
    },
    AssertionError,
    `"true" does not equal the expected value "true".`,
  );
});

Deno.test("Assert False", () => {
  assertFalse(false);
});

Deno.test("Assert False Fail", () => {
  assertThrows(
    (): void => {
      assertFalse(true);
    },
    AssertionError,
    `"true" does not equal the expected value "false".`,
  );
});
