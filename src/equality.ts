import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";

export function equals(actual: unknown, expected: unknown): Result<string> {
  return ok(`${actual} equals ${expected}`);
}