import { Result } from "../dev_deps.ts";
import { assertTrue, assertFalse } from "../mod.ts";
import { notThrows } from "../src/throws.ts";

Deno.test("Not Throws", () => {
  const toNotThrow = () => {
    return "Hello World";
  }

  const result: Result<string> = notThrows(toNotThrow);

  assertTrue(result.isOk());
});

Deno.test("Not Throws", () => {
  const toThrow = () => {
    throw new Error("Error!");
  }

  const result: Result<string> = notThrows(toThrow);

  assertFalse(result.isOk());
});