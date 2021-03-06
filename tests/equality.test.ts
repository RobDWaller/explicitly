import { Result } from "../dev_deps.ts";
import { assertTrue, assertFalse } from "../mod.ts";
import {
  equals,
  greater,
  greaterOrEqual,
  less,
  lessOrEqual,
  instanceOf,
  typeOf,
  count,
  empty,
} from "../src/equality.ts";

Deno.test("Equals Boolean", () => {
  const result: Result<string> = equals(true, true);

  assertTrue(result.isOk());
});

Deno.test("Not Equals Boolean", () => {
  const result: Result<string> = equals(false, true);

  assertFalse(result.isOk());
});

Deno.test("Greater Than", () => {
  const result: Result<string> = greater(2, 1);

  assertTrue(result.isOk());
});

Deno.test("Greater Than Fail", () => {
  const result: Result<string> = greater(2, 2);

  assertFalse(result.isOk());
});

Deno.test("Greater or Equal", () => {
  const result: Result<string> = greaterOrEqual(2, 2);

  assertTrue(result.isOk());
});

Deno.test("Greater or Equal Fail", () => {
  const result: Result<string> = greaterOrEqual(1, 2);

  assertFalse(result.isOk());
});

Deno.test("Less Than", () => {
  const result: Result<string> = less(1, 2);

  assertTrue(result.isOk());
});

Deno.test("Less Than Fail", () => {
  const result: Result<string> = less(2, 2);

  assertFalse(result.isOk());
});

Deno.test("Less or Equal", () => {
  const result: Result<string> = lessOrEqual(2, 2);

  assertTrue(result.isOk());
});

Deno.test("Less or Equal Fail", () => {
  const result: Result<string> = lessOrEqual(3, 2);

  assertFalse(result.isOk());
});

Deno.test("Instance Of", () => {
  class Foo {}

  const foo = new Foo();

  const result: Result<string> = instanceOf(foo, Foo);

  assertTrue(result.isOk());
});

Deno.test("Instance Of Fail", () => {
  class Foo {}
  class Bar {}

  const foo = new Foo();

  const result: Result<string> = instanceOf(foo, Bar);

  assertFalse(result.isOk());
});

Deno.test("Type Of", () => {
  const hello = "World";

  const result: Result<string> = typeOf(hello, "string");

  assertTrue(result.isOk());
});

Deno.test("Type Of Fail", () => {
  const hello = "World";

  const result: Result<string> = typeOf(hello, "boolean");

  assertFalse(result.isOk());
});

Deno.test("Count", () => {
  const result: Result<string> = count(["Hello", "World"], 2);

  assertTrue(result.isOk());
});

Deno.test("Count Fail", () => {
  const result: Result<string> = count(["Hello", "World", "Foo"], 2);

  assertFalse(result.isOk());
});

Deno.test("Count Mixed Types", () => {
  const result: Result<string> = count(["Hello", 4, "Foo"], 3);

  assertTrue(result.isOk());
});

Deno.test("Count Nested Elements", () => {
  const myArray = [
    "Hello",
    "World",
    ["Foo", "Bar"],
    "How",
    "Are",
    "You",
  ];

  const result: Result<string> = count(myArray, 6);

  assertTrue(result.isOk());
});

Deno.test("String is empty", () => {
  const result: Result<string> = empty("");

  assertTrue(result.isOk());
});

Deno.test("String is not empty", () => {
  const result: Result<string> = empty("Hello");

  assertFalse(result.isOk());
});

Deno.test("Array is empty", () => {
  const result: Result<string> = empty([]);

  assertTrue(result.isOk());
});

Deno.test("Array is not empty", () => {
  const result: Result<string> = empty([1]);

  assertFalse(result.isOk());
});

Deno.test("Object is empty", () => {
  const result: Result<string> = empty({});

  assertTrue(result.isOk());
});

Deno.test("Object is not empty", () => {
  const result: Result<string> = empty({ hello: "world" });

  assertFalse(result.isOk());
});
