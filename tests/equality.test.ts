import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import {
  equals,
  greater,
  greaterOrEqual,
  less,
  lessOrEqual,
  instanceOf,
  typeOf,
  dateUTC,
} from "../src/equality.ts";

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

Deno.test("Less Than", () => {
  const result: Result<string> = less(1, 2);

  assertTrue(result.isOk());
});

Deno.test("Less Than Fail", () => {
  const result: Result<string> = less(2, 2);

  assertTrue(result.isError());
});

Deno.test("Less or Equal", () => {
  const result: Result<string> = lessOrEqual(2, 2);

  assertTrue(result.isOk());
});

Deno.test("Less or Equal Fail", () => {
  const result: Result<string> = lessOrEqual(3, 2);

  assertTrue(result.isError());
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

  assertTrue(result.isError());
});

Deno.test("Type Of", () => {
  const hello = "World";

  const result: Result<string> = typeOf(hello, "string");

  assertTrue(result.isOk());
});

Deno.test("Type Of Fail", () => {
  const hello = "World";

  const result: Result<string> = typeOf(hello, "boolean");

  assertTrue(result.isError());
});

Deno.test("Date UTC", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-12 15:13:10"));

  const date2 = new Date();
  date2.setTime(Date.parse("2019-05-12 15:13:10"));

  const result: Result<string> = dateUTC(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date UTC Fail", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-11 15:13:10"));

  const date2 = new Date();
  date2.setTime(Date.parse("2019-05-12 15:13:10"));

  const result: Result<string> = dateUTC(date1, date2);

  assertTrue(result.isError());
});
