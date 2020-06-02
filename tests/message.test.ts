import { assertSame } from "../mod.ts";
import { message } from "../src/message.ts";

Deno.test("Create Message", () => {
  const actual = message(true, true, "equals");
  const expected = `"true" type of boolean equals "true" type of boolean.`;

  assertSame(actual, expected);
});

Deno.test("Create Message With Classes", () => {
  class Foo {}
  class Bar {}

  const foo = new Foo();
  const bar = new Bar();

  const actual = message(foo, bar, "does not equal");
  const expected = `"Foo" type of object does not equal "Bar" type of object.`;

  assertSame(actual, expected);
});

Deno.test("Create Message With Functions", () => {
  const fooFn = function foo() {};
  const barFn = function bar() {};

  const actual = message(fooFn, barFn, "does not equal");
  const expected =
    `"foo" type of function does not equal "bar" type of function.`;

  assertSame(actual, expected);
});
