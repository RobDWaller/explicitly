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

  assertDateTime(new Date("2020/06/15 08:16:15"), new Date("2020/06/15 08:16:15"));

  assertDateTime(new Date("2020/06/15 08:16:15"), "2020/06/15 08:16:15");
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
    name: string;
    age: number;
    location: string;

    constructor(name: string, age: number, location: string) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
  }

  class Child implements Person {
    name: string;
    age: number;
    location: string;

    constructor(name: string, age: number, location: string) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
  }

  function createPerson(name: string, age: number, location: string): Person {
    if (age < 18) {
      return new Child(name, age, location);
    }

    return new Adult(name, age, location);
  }

  const jenny = createPerson("Jenny Brown", 12, "US");

  assertInstanceOf(jenny, Child);
});
