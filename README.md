[![Actions Status](https://github.com/robdwaller/explicitly/workflows/ci/badge.svg)](https://github.com/robdwaller/explicitly/actions) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/robdwaller/explicitly) ![GitHub](https://img.shields.io/github/license/robdwaller/explicitly) [![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/explicitly/mod.ts)

# Explicitly

This library extends the [Deno asserts module](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts) with additional assertions so developers can write more explicit unit tests if they choose to. It works with [Deno Test Tools](https://deno.land/manual/testing) in the same way the built in assertions do.

The principle behind this library is unit tests should focus on small units of business logic. Assertions should therefore focus on the assertion of basic types in an explicit manner. This library provides assertions which fulfill this requirement and all the assertions are simple and specific which makes the intent of a unit test clearer.

For more generalised equality checks, better suited to integration or functional tests, please use the built in [Deno assertions module](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts).

## Installation

Before you use this library make sure you have read and understood how to set up [Deno Tests](https://deno.land/manual/testing).

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
  assertDate,
  assertDateTime,
  assertFloat,
  assertNotThrows,
  assertCount,
  assertEmpty
  Round
} from "https://deno.land/x/explicitly@0.5.0/mod.ts";
```

## Basic Usage

This assertion library makes 15 assertion methods available:

- `assertTrue(actual: unknown): void`
- `assertFalse(actual: unknown): void`
- `assertSame(actual: unknown, expected: unknown): void`
- `assertGreater(actual: unknown, expected: unknown): void`
- `assertGreaterOrEqual(actual: unknown, expected: unknown): void`
- `assertLess(actual: unknown, expected: unknown): void`
- `assertLessOrEqual(actual: unknown, expected: unknown): void`
- `assertInstanceOf(actual: unknown, expected: any): void`
- `assertTypeOf(actual: unknown, expected: string): void`
- `assertDateTime(actual: Date, expected: Date | string): void`
- `assertDate(actual: Date, expected: Date | string): void`
- `assertFloat(actual: number, expected: number, decimals?: number, round?: Round): void`
- `assertNotThrows(actual: Function): void`
- `assertCount<T>(actual: Array<T>, expected: number): void`
- `assertEmpty(actual: unknown): void`

Each of these assertions aims to test a single thing. This means unit tests are explicit and clearer to read.

### Assert True / Assert False Example

A basic example of when you may wish to assert true or assert false.

```js
Deno.test("Assert True Example", () => {
  function isOlderThanFive(age: number): boolean {
    return age >= 5;
  }

  assertTrue(isOlderThanFive(6));

  assertFalse(isOlderThanFive(4));
});
```

### Assert Same Example

Provide a simple, strict equality check based on `===`. Will not match two instances of identical objects. 

```js
Deno.test("Assert Same Example", () => {
  assertSame(3, 3);

  assertSame("Hello World", "Hello World");
});
```

### Assert Greater or Less Example

Assert whether a value is greater than, less than, greater or equal than, or less or equal than another value. 

```js
Deno.test("Assert Greater or Less Example", () => {
  assertGreater(4, 3);

  assertLess(5, 6);

  assertGreaterOrEqual(11, 10);

  assertGreaterOrEqual(10, 10);

  assertLessOrEqual(20, 21);

  assertLessOrEqual(21, 21);
});
```

### Assert Date and Time Example

Assert whether a date or date time match. Can assert based on two Date objects or a Date object and a string.

```js
Deno.test("Assert Date Time Example", () => {
  assertDate(new Date("2020/06/15"), new Date("2020/06/15"));

  assertDate(new Date("2020/06/15"), "2020/06/15");

  assertDateTime(new Date("2020/06/15 08:16:15"), new Date("2020/06/15 08:16:15"));

  assertDateTime(new Date("2020/06/15 08:16:15"), "2020/06/15 08:16:15");
});
```

### Assert Float Example

Assert whether two floats match. You can optionally define how many decimal places the assertion should be made to, along with defining if the check should be to the floor or ceiling. This is done by passing in the `Round` enum, either `Round.Floor` or `Round.Ceiling`. The assertion defaults to floor.

```js
Deno.test("Assert Float Example", () => {
  assertFloat(0.23, 0.23);

  assertFloat(3.46, 3.42, 1);

  assertFloat(11.732, 11.739, 2, Round.Ceiling);
});
```

### Assert Count Example

Assert whether an array has an expected number of elements. Will only count top level elements
will count nested elements as a single element.

```js
Deno.test("Assert Count Example", () => {
  const strings = ["Hello", "World"]
  
  assertCount(strings, 2);

  const numbers = [1, 2, [4, 5], 6];
  
  assertCount(numbers, 4);
});
```

## Assert Empty Example

Assert whether a string array or object literal are empty.

```js
Deno.test("Assert Empty Example", () => {
  assertEmpty("");

  assertEmpty([]);

  assertEmpty({});
});
```

### Assert Not Throws Example

Assert a function does not throw an Error. This assertion may be of use when testing complicated legacy code when you want to ensure no errors occur.

```js
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
```

### Assert Type Of Example

Assert whether a value is of a particular type. Useful when it's not clear what type a function returns.

```js
Deno.test("Assert Type Of Example", () => {
  assertTypeOf("Hello World", "string");

  assertTypeOf(4, "number");
});
```

### Assert Instance Of Example

A more advanced example of when you may wish to assert an instance of. This is useful when there is a polymorphic relationship between objects. Or if you are following Test Driven Development principles and are creating a new class.

```js
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
```