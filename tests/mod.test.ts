import {
  assertThrows,
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";
import {
  red,
  green,
} from "https://deno.land/std/fmt/colors.ts";
import { assertTrue, assertFalse, assertSame, assertGreater } from "../mod.ts";

Deno.test("Assert True", () => {
  assertTrue(true);
});

Deno.test("Assert True Fail", () => {
  const message = red(`"false" type of boolean`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue(false);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert True Fail Number", () => {
  const message = red(`"1" type of number`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue(1);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert True Fail String", () => {
  const message = red(`"true" type of string`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue("true");
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert False", () => {
  assertFalse(false);
});

Deno.test("Assert False Fail", () => {
  const message = red(`"true" type of boolean`) +
    " does not equal the expected value " + green(`"false" type of boolean.`);

  assertThrows(
    (): void => {
      assertFalse(true);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Same", () => {
  assertSame("Hello", "Hello");
});

Deno.test("Assert Same Fail", () => {
  const message = red(`"1" type of number`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertSame(1, true);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Greater Than", () => {
  assertGreater(2, 1);
});

Deno.test("Assert Greater Than Fail", () => {
  const message = red(`"2" type of number`) +
    " is not greater than expected value " + green(`"2" type of number.`);

  assertThrows(
    (): void => {
      assertGreater(2, 2);
    },
    AssertionError,
    message,
  );
});
