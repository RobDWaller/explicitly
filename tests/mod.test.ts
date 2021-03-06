import {
  assertThrows,
  AssertionError,
} from "../dev_deps.ts";
import {
  red,
  green,
} from "../dev_deps.ts";
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
  assertDate,
  assertFloat,
  Round,
  assertNotThrows,
  assertCount,
  assertEmpty,
} from "../mod.ts";

Deno.test("Assert True", () => {
  assertTrue(true);
});

Deno.test("Assert True Fail", () => {
  const message = red(`"false" type of boolean`) +
    " does not equal expected value " + green(`"true" type of boolean.`);

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
    " does not equal expected value " + green(`"true" type of boolean.`);

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
    " does not equal expected value " + green(`"true" type of boolean.`);

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
    " does not equal expected value " + green(`"false" type of boolean.`);

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
    " does not equal expected value " + green(`"true" type of boolean.`);

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
    " does not match expected date " + green(`"1984-04-25T03:31:00.000Z".`);

  const date1 = new Date("1984-04-25 03:30:00");

  const date2 = new Date("1984-04-25 03:31:00");

  assertThrows(
    (): void => {
      assertDateTime(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Date Time String", () => {
  const date1 = new Date("2019-05-12 15:13:10");

  const date2 = "2019-05-12T15:13:10.000Z";

  assertDateTime(date1, date2);
});

Deno.test("Assert Date Time String Fail", () => {
  const message = red(`"1984-04-25T03:30:00.000Z"`) +
    " does not match expected date " + green(`"2019-05-12T15:13:10.000Z".`);

  const date1 = new Date("1984-04-25 03:30:00");

  const date2 = "2019-05-12T15:13:10.000Z";

  assertThrows(
    (): void => {
      assertDateTime(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Date", () => {
  assertDate(new Date(), new Date());
});

Deno.test("Assert Date String", () => {
  assertDate(new Date("2020-06-12"), "2020-06-12");
});

Deno.test("Assert Date Fail", () => {
  const message = red(`"1984-4-25"`) +
    " does not match expected date " + green(`"1984-12-29".`);

  const date1 = new Date("1984-04-25");

  const date2 = new Date("1984-12-29");

  assertThrows(
    (): void => {
      assertDate(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Date String Fail", () => {
  const message = red(`"1984-4-25"`) +
    " does not match expected date " + green(`"1986-1-30".`);

  const date1 = new Date("1984-04-25");

  const date2 = "1986-01-30";

  assertThrows(
    (): void => {
      assertDate(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Date String Fail February ", () => {
  const message = red(`"1984-4-25"`) +
    " does not match expected date " + green(`"2000-2-29".`);

  const date1 = new Date("1984-04-25");

  const date2 = "2000-02-29";

  assertThrows(
    (): void => {
      assertDate(date1, date2);
    },
    AssertionError,
    message,
  );
});

Deno.test("Assert Float", () => {
  assertFloat(0.3, 0.3);
});

Deno.test("Assert Float Three Decimals", () => {
  assertFloat(1.472, 1.472);
});

Deno.test("Assert Float Three Decimals to One Decimal", () => {
  assertFloat(1.472, 1.465, 1, Round.Ceiling);
});

Deno.test("Assert Float Fail", () => {
  assertThrows(
    (): void => {
      assertFloat(1.472, 1.465);
    },
    AssertionError,
    red(`"1.472" type of number`) + " does not equal expected value " +
      green(`"1.465" type of number`),
  );
});

Deno.test("Assert Float Fail Two Decimals Floor", () => {
  assertThrows(
    (): void => {
      assertFloat(1.472, 1.465, 2, Round.Floor);
    },
    AssertionError,
    red(`"1.47" type of number`) + " does not equal expected value " +
      green(`"1.46" type of number`),
  );
});

Deno.test("Assert Float Fail Three Decimals Ceiling", () => {
  assertThrows(
    (): void => {
      assertFloat(1.4732, 1.4729, 3, Round.Ceiling);
    },
    AssertionError,
    red(`"1.474" type of number`) + " does not equal expected value " +
      green(`"1.473" type of number`),
  );
});

Deno.test("Assert Not Throws", () => {
  assertNotThrows(() => {
    return true;
  });
});

Deno.test("Assert Not Throws Fail", () => {
  assertThrows(
    (): void => {
      assertNotThrows(() => {
        throw new Error("Fail!");
      });
    },
    AssertionError,
    red(`"Function" threw an unexpected Error.`),
  );
});

Deno.test("Assert Count", () => {
  const toCount = ["Hello", "World"];

  assertCount(toCount, 2);
});

Deno.test("Assert Not Throws Fail", () => {
  const toCount = ["Hello", "World"];

  assertThrows(
    (): void => {
      assertCount(toCount, 3);
    },
    AssertionError,
    red(`"Array"`) + " does not have a count of " + green(`"3".`),
  );
});

Deno.test("Assert Empty", () => {
  assertEmpty("");
  assertEmpty([]);
  assertEmpty({});
});

Deno.test("Assert Not Empty String", () => {
  assertThrows(
    (): void => {
      assertEmpty("Hello");
    },
    AssertionError,
    red(`"Hello" is not empty.`),
  );
});

Deno.test("Assert Not Empty Array", () => {
  assertThrows(
    (): void => {
      assertEmpty(["hello", "world"]);
    },
    AssertionError,
    red(`"Array" is not empty.`),
  );
});

Deno.test("Assert Not Empty Object", () => {
  assertThrows(
    (): void => {
      assertEmpty({ world: "Hello" });
    },
    AssertionError,
    red(`"Object" is not empty.`),
  );
});
