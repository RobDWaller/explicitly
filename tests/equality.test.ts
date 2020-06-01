import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import { equals } from "../src/equality.ts";

Deno.test("Assert True", () => {
  const result: Result<string> = equals(true, true);

  assertTrue(result.isOk());
});