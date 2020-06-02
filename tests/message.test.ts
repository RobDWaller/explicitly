import { assertSame } from "../mod.ts";
import { message } from "../src/message.ts";

Deno.test("Create Message", () => {
  const actual = message(true, true, "equals");
  const expected = `"true" type of boolean equals "true" type of boolean.`;

  assertSame(actual, expected);
});
