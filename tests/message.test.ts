import {
  red,
  green,
} from "../dev_deps.ts";
import { assertSame } from "../mod.ts";
import { error, errorSimple } from "../src/message.ts";

Deno.test("Create Message", () => {
  const actual = error(true, true, "equals");
  const expected = red(`"true" type of boolean`) + " equals " +
    green(`"true" type of boolean.`);

  assertSame(actual, expected);
});

Deno.test("Create Message With Classes", () => {
  class Foo {}
  class Bar {}

  const foo = new Foo();
  const bar = new Bar();

  const actual = error(foo, bar, "does not equal");
  const expected = red(`"Foo" type of object`) + " does not equal " +
    green(`"Bar" type of object.`);

  assertSame(actual, expected);
});

Deno.test("Create Message With Functions", () => {
  const fooFn = function foo() {};
  const barFn = function bar() {};

  const actual = error(fooFn, barFn, "does not equal");
  const expected = red(`"foo" type of function`) + " does not equal " +
    green(`"bar" type of function.`);

  assertSame(actual, expected);
});

Deno.test("Create Simple Message", () => {
  class Foo {}
  class Bar {}

  const foo = new Foo();

  const actual = errorSimple(foo, Bar, "is not instance of");
  const expected = red(`"Foo"`) + " is not instance of " +
    green(`"Bar".`);

  assertSame(actual, expected);
});
