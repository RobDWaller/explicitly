import {
  assertThrows,
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";
import {
  red,
  green,
} from "https://deno.land/std/fmt/colors.ts";
import {
  assertTrue,
  assertFalse,
  assertSame,
  assertGreater,
  assertGreaterOrEqual,
  assertLess,
  assertLessOrEqual,
  assertInstanceOf,
  assertTypeOf,
} from "../mod.ts";

Deno.test("Assert True", () => {
  assertTrue(true);
});

Deno.test("Assert True Fail", () => {
  const message = red(`"false" type of boolean`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue(false);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert True Fail Number", () => {
  const message = red(`"1" type of number`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue(1);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert True Fail String", () => {
  const message = red(`"true" type of string`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertTrue("true");
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert False", () => {
  assertFalse(false);
});

Deno.test("Assert False Fail", () => {
  const message = red(`"true" type of boolean`) +
    " does not equal the expected value " + green(`"false" type of boolean.`);

  assertThrows(
    (): void => {
      assertFalse(true);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Same", () => {
  assertSame("Hello", "Hello");
});

Deno.test("Assert Same Fail", () => {
  const message = red(`"1" type of number`) +
    " does not equal the expected value " + green(`"true" type of boolean.`);

  assertThrows(
    (): void => {
      assertSame(1, true);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Greater Than", () => {
  assertGreater(2, 1);
});

Deno.test("Assert Greater Than Fail", () => {
  const message = red(`"2" type of number`) +
    " is not greater than expected value " + green(`"2" type of number.`);

  assertThrows(
    (): void => {
      assertGreater(2, 2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Greater or Equal", () => {
  assertGreaterOrEqual(2, 1);
});

Deno.test("Assert Greater or Equal is Equal", () => {
  assertGreaterOrEqual(2, 2);
});

Deno.test("Assert Greater or Equal Fail", () => {
  const message = red(`"1" type of number`) +
    " is not greater than or equal to expected value " +
    green(`"2" type of number.`);

  assertThrows(
    (): void => {
      assertGreaterOrEqual(1, 2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Less Than", () => {
  assertLess(1, 2);
});

Deno.test("Assert Greater or Equal Fail", () => {
  const message = red(`"2" type of number`) +
    " is not less than expected value " + green(`"2" type of number.`);

  assertThrows(
    (): void => {
      assertLess(2, 2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Less or Equal", () => {
  assertLessOrEqual(1, 2);
});

Deno.test("Assert Less or Equal is Equal", () => {
  assertLessOrEqual(2, 2);
});

Deno.test("Assert Greater or Equal Fail", () => {
  const message = red(`"3" type of number`) +
    " is not less than or equal to expected value " +
    green(`"2" type of number.`);

  assertThrows(
    (): void => {
      assertLessOrEqual(3, 2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Instance Of", () => {
  class Foo {}
  const foo = new Foo();
  assertInstanceOf(foo, Foo);
});

Deno.test("Assert Instance Of Fail", () => {
  const message = red(`"Foo"`) +
    " is not an instance of " +
    green(`"Bar".`);

  class Foo {}
  class Bar {}
  const foo = new Foo();

  assertThrows(
    (): void => {
      assertInstanceOf(foo, Bar);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Type Of", () => {
  assertTypeOf(2, "number");
});

Deno.test("Assert Type Of Fail", () => {
  const message = red(`"3"`) +
    " is not a type of " +
    green(`"string".`);

  assertThrows(
    (): void => {
      assertTypeOf(3, "string");
    },
    AssertionError,
    message,
  );
});

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
