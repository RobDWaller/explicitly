import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import {
  floor,
} from "../src/float.ts";

Deno.test("Float Floor", () => {
  assertTrue(floor(1.472, 1.475, 2).isOk());
});

Deno.test("Float Floor", () => {
  assertTrue(floor(0.4728, 0.4726, 3).isOk());
});