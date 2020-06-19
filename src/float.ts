import { Result, ok, err } from "https://deno.land/x/resulty/mod.ts";
import { error } from "./message.ts";

function multiplier(decimals: number): number {
  return parseInt(1.0.toFixed(decimals).replace(".", ""))
}

function fixedFloor(float: number, decimals: number): number {
  return parseFloat((Math.floor(float * multiplier(decimals))/multiplier(decimals)).toFixed(decimals))
}

export function floor(actual: number, expected: number, decimals: number): Result<string> {
  if (fixedFloor(actual, decimals) === fixedFloor(expected, decimals)) {
    return ok(`${fixedFloor(actual, decimals)} is equal to ${fixedFloor(expected, decimals)}`);
  }

  return err(error(fixedFloor(actual, decimals), fixedFloor(expected, decimals), "is not equal to"));
}