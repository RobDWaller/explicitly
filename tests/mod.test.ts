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
    "The value false does not equal true.",
  );
});
