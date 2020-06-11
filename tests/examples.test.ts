import {
  assertTrue,
  assertInstanceOf,
} from "../mod.ts";

Deno.test("Assert True Example", () => {
  function isOlderThanFive(age: number): boolean {
    return age >= 5;
  }

  const childAge: number = 6;

  const result: boolean = isOlderThanFive(childAge);

  assertTrue(result);
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
