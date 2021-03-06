import { assertTrue, assertFalse, assertSame } from "../mod.ts";
import {
  floor,
  ceiling,
  Round,
} from "../src/float.ts";

Deno.test("Float Floor", () => {
  assertTrue(floor(1.472, 1.475, 2).isOk());
});

Deno.test("Float Floor Three Decimals", () => {
  assertTrue(floor(0.4728, 0.4726, 3).isOk());
});

Deno.test("Float Floor Three Decimals Fail", () => {
  assertFalse(floor(0.4732, 0.4726, 3).isOk());
});

Deno.test("Float Ceiling", () => {
  assertTrue(ceiling(2.6723, 2.6729, 3).isOk());
});

Deno.test("Float Ceiling Zero Decimals", () => {
  assertTrue(ceiling(0.4, 0.8, 0).isOk());
});

Deno.test("Float Ceiling Zero Decimals Fail", () => {
  assertFalse(ceiling(1.4, 0.8, 0).isOk());
});

Deno.test("Float Round Floor", () => {
  const floor = Round.Floor;

  assertSame(floor, Round.Floor);
});

Deno.test("Float Round Ceiling", () => {
  const ceiling = Round.Ceiling;

  assertSame(ceiling, Round.Ceiling);
});
