import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import { equals, greater, greaterOrEqual } from "../src/equality.ts";

Deno.test("Equals Boolean", () => {
  const result: Result<string> = equals(true, true);

  assertTrue(result.isOk());
});

Deno.test("Not Equals Boolean", () => {
  const result: Result<string> = equals(false, true);

  assertTrue(result.isError());
});

Deno.test("Greater Than", () => {
  const result: Result<string> = greater(2, 1);

  assertTrue(result.isOk());
});

Deno.test("Greater Than Fail", () => {
  const result: Result<string> = greater(2, 2);

  assertTrue(result.isError());
});

Deno.test("Greater or Equal", () => {
  const result: Result<string> = greaterOrEqual(2, 2);

  assertTrue(result.isOk());
});

Deno.test("Greater or Equal Fail", () => {
  const result: Result<string> = greaterOrEqual(1, 2);

  assertTrue(result.isError());
});
