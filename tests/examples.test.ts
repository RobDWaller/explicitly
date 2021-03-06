import {
  assertTrue,
  assertFalse,
  assertSame,
  assertGreater,
  assertLess,
  assertGreaterOrEqual,
  assertLessOrEqual,
  assertDate,
  assertDateTime,
  assertTypeOf,
  assertInstanceOf,
  assertFloat,
  Round,
  assertCount,
  assertNotThrows,
  assertEmpty,
} from "../mod.ts";

Deno.test("Assert True Example", () => {
  function isOlderThanFive(age: number): boolean {
    return age >= 5;
  }

  assertTrue(isOlderThanFive(6));

  assertFalse(isOlderThanFive(4));
});

Deno.test("Assert Same Example", () => {
  assertSame(3, 3);

  assertSame("Hello World", "Hello World");
});

Deno.test("Assert Greater or Less Example", () => {
  assertGreater(4, 3);

  assertLess(5, 6);

  assertGreaterOrEqual(11, 10);

  assertGreaterOrEqual(10, 10);

  assertLessOrEqual(20, 21);

  assertLessOrEqual(21, 21);
});

Deno.test("Assert Date Time Example", () => {
  assertDate(new Date("2020/06/15"), new Date("2020/06/15"));

  assertDate(new Date("2020/06/15"), "2020/06/15");

  assertDateTime(
    new Date("2020/06/15 08:16:15"),
    new Date("2020/06/15 08:16:15"),
  );

  assertDateTime(new Date("2020/06/15 08:16:15"), "2020/06/15 08:16:15");
});

Deno.test("Assert Float Example", () => {
  assertFloat(0.23, 0.23);

  assertFloat(3.46, 3.42, 1);

  assertFloat(11.732, 11.739, 2, Round.Ceiling);
});

Deno.test("Assert Count Example", () => {
  const strings = ["Hello", "World"];

  assertCount(strings, 2);

  const numbers = [1, 2, [4, 5], 6];

  assertCount(numbers, 4);
});

Deno.test("Assert Empty Example", () => {
  assertEmpty("");

  assertEmpty([]);

  assertEmpty({});
});

Deno.test("Assert Not Throws Example", () => {
  const myFunc = () => true;

  assertNotThrows(myFunc);

  function canThrow(count: number): string {
    if (count > 5) {
      throw new Error("Oh No!");
    }

    return "Ok";
  }

  assertNotThrows(() => canThrow(4));
});

Deno.test("Assert Type Of Example", () => {
  assertTypeOf("Hello World", "string");

  assertTypeOf(4, "number");
});

Deno.test("Assert Instance Of Example", () => {
  interface Person {
    name: string;
    age: number;
    location: string;
  }

  class Adult implements Person {
    constructor(
      public name: string,
      public age: number,
      public location: string,
    ) {}
  }

  class Child implements Person {
    constructor(
      public name: string,
      public age: number,
      public location: string,
    ) {}
  }

  function createPerson(name: string, age: number, location: string): Person {
    return age < 18
      ? new Child(name, age, location)
      : new Adult(name, age, location);
  }

  const jenny = createPerson("Jenny", 12, "US");
  const devika = createPerson("Devika ", 28, "FR");

  assertInstanceOf(jenny, Child);
  assertInstanceOf(devika, Adult);
});
