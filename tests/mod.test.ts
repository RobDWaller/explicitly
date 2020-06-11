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
  assertDateTime,
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

Deno.test("Assert Date Time", () => {
  assertDateTime(new Date(), new Date());
});

Deno.test("Assert Date Time Fail", () => {
  const message = red(`"1984-04-25T03:30:00.000Z"`) +
    " does not match date " + green(`"1984-04-25T03:31:00.000Z".`);

  const date1 = new Date();
  date1.setTime(Date.parse("1984-04-25 03:30:00"));

  const date2 = new Date();
  date2.setTime(Date.parse("1984-04-25 03:31:00"));

  assertThrows(
    (): void => {
      assertDateTime(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Date Time String", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-12 15:13:10"));

  const date2 = "2019-05-12T15:13:10.000Z";

  assertDateTime(date1, date2);
});

Deno.test("Assert Date Time String Fail", () => {
  const message = red(`"1984-04-25T03:30:00.000Z"`) +
    " does not match date " + green(`"2019-05-12T15:13:10.000Z".`);

  const date1 = new Date();
  date1.setTime(Date.parse("1984-04-25 03:30:00"));

  const date2 = "2019-05-12T15:13:10.000Z";

  assertThrows(
    (): void => {
      assertDateTime(date1, date2);
    },
    AssertionError,
    message,
  );
});
