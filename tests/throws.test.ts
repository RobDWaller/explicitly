import { Result } from "../dev_deps.ts";
import { assertTrue, assertFalse } from "../mod.ts";
import { notThrows } from "../src/throws.ts";

Deno.test("Not Throws", () => {
  const toNotThrow = () => {
    return "Hello World";
  };

  const result: Result<string> = notThrows(toNotThrow);

  assertTrue(result.isOk());
});

Deno.test("Not Throws Fail", () => {
  const toThrow = () => {
    throw new Error("Error!");
  };

  const result: Result<string> = notThrows(toThrow);

  assertFalse(result.isOk());
});

Deno.test("Not Throws Class", () => {
  class AllOk {
    ok(): string {
      return "Ok";
    }
  }

  const allOk = new AllOk();

  const result: Result<string> = notThrows(() => {
    allOk.ok();
  });

  assertTrue(result.isOk());
});

Deno.test("Not Throws Class Fail", () => {
  class NotOk {
    notOk(): string {
      throw new Error();
    }
  }

  const notOk = new NotOk();

  const result: Result<string> = notThrows(() => {
    notOk.notOk();
  });

  assertFalse(result.isOk());
});
