[![Actions Status](https://github.com/robdwaller/explicitly/workflows/ci/badge.svg)](https://github.com/robdwaller/explicitly/actions)

# Explicitly

This library extends the [Deno assertions module](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts) with additional assertions so developers can write more explicit unit iests if they choose to. It works with [Deno Test Tools](https://deno.land/manual/testing) in the same way the built in assertions do.

Unit tests should focus on testing small units of business logic and so should generally focus on asserting basic types. This library provides assertions which fulfill this requirement and all the assertions are simple and specific. They also make it clearer what your unit tests are asserting.

For more generalised equality checks please use the built in [Deno assertion module](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts).

## Installation

Before you use this library make sure you have read and understood how to setup [Deno Tests](https://deno.land/manual/testing).

To install this library and make use of the assertions in your test suite simply add the following import to the test modules which require it.

```js
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
} from "https://raw.githubusercontent.com/RobDWaller/explicitly/0.1.0/mod.ts";
```

## Basic Usage

This assertion library comes with nine basic assertions methods:

- `assertTrue(actual: unknown): void`
- `assertFalse(actual: unknown): void`
- `assertSame(actual: unknown, expected: unknown): void`
- `assertGreater(actual: unknown, expected: unknown): void`
- `assertGreaterOrEqual(actual: unknown, expected: unknown): void`
- `assertLess(actual: unknown, expected: unknown): void`
- `assertLessOrEqual(actual: unknown, expected: unknown): void`
- `assertInstanceOf(actual: unknown, expected: any): void`
- `assertTypeOf(actual: unknown, expected: string): void`

Each of these assertions aims to test a single thing. This means unit tests are clearer to read and more explicit.

### Assert True Example

A basic example of when you may wish to assert true.

```js
Deno.test("Assert True Example", () => {
  function isOlderThanFive(age: number): boolean {
    return age >= 5;
  }

  const childAge: number = 6;

  const result: boolean = isOlderThanFive(childAge);

  assertTrue(result);
});
```

### Assert Instance Of Example

A more advanced example of when you may wish to assert an instance of. Usually when there is a polymorphic relationship between objects.

```js
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
```