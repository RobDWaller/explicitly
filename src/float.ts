/**
 * This module helps assert the equality of two floats fixed to a set number of
 * decimal places and either rounded to the floor or ceiling.
 *
 * This is challenging because it is hard to round a float in JavaScript. To do
 * this accurately in JavaScript you need to positively shift the decimal place,
 * round the number and then return the decimal place to its original place.
 * This is done by multiplying and dividing by the same number. It also includes
 * parsing between strings and numbers, which isn't ideal.
 *
 * Example 0.155 to two decimal places rounded to the floor:
 * 0.155 * 100 = 15.5
 * round to floor = 15.0
 * 15.0 / 100 = 0.150
 * fix to two decimal places = "0.15"
 * parse to float = 0.15
 */
import { Result, ok, err } from "../deps.ts";
import { error } from "./message.ts";

export enum Round {
  Floor,
  Ceiling,
}

/**
 * Create the float multiplier for accurate rounding. If accuracy to 2 decimal
 * places is required the multiplier will be 100, for 3 it will be 1000.
 */
function multiplier(decimals: number): number {
  return Math.pow(10, decimals);
}

/**
 * Rounds a float to the floor and fixes it to a set number of decimal places.
 * 0.155 to two decimal places will become 0.15.
 */
function fixedFloor(float: number, decimals: number): number {
  return parseFloat(
    (Math.floor(float * multiplier(decimals)) / multiplier(decimals)).toFixed(
      decimals,
    ),
  );
}

/**
 * Rounds a float to the ceiling and fixes it to a set number of decimal places.
 * 0.155 to two decimal places will become 0.16.
 */
function fixedCeiling(float: number, decimals: number): number {
  return parseFloat(
    (Math.ceil(float * multiplier(decimals)) / multiplier(decimals)).toFixed(
      decimals,
    ),
  );
}

/**
 * Assert the equality of two floats when they are rounded to the floor to a
 * fixed number of decimal places.
 *
 * 0.156 and 0.152 will equal to two decimals places.
 */
export function floor(
  actual: number,
  expected: number,
  decimals: number,
): Result<string> {
  if (fixedFloor(actual, decimals) === fixedFloor(expected, decimals)) {
    return ok(
      `${fixedFloor(actual, decimals)} is equal to ${
        fixedFloor(expected, decimals)
      }`,
    );
  }

  return err(
    error(
      fixedFloor(actual, decimals),
      fixedFloor(expected, decimals),
      "does not equal expected value",
    ),
  );
}

/**
 * Assert the equality of two floats when they are rounded to the ceiling to a
 * fixed number of decimal places.
 *
 * 0.156 and 0.152 will equal to two decimals places.
 */
export function ceiling(
  actual: number,
  expected: number,
  decimals: number,
): Result<string> {
  if (fixedCeiling(actual, decimals) === fixedCeiling(expected, decimals)) {
    return ok(
      `${fixedCeiling(actual, decimals)} is equal to ${
        fixedCeiling(expected, decimals)
      }`,
    );
  }

  return err(
    error(
      fixedCeiling(actual, decimals),
      fixedCeiling(expected, decimals),
      "does not equal expected value",
    ),
  );
}
