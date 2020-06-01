import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";

export function equals(actual: unknown, expected: unknown): Result<string> {
  if (actual === expected) {
    return ok(`${actual} equals ${expected}`);
  }

  return err(`${actual} does not equal ${expected}`);
}
