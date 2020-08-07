import { Result, ok, err } from "../deps.ts";
import { error } from "./message.ts";

export function notThrows(actual: Function): Result<string> {
  try {
    actual();
    return ok("Function did not throw.");
  } catch (e) {
    return err(error(actual, "threw an unexpected Error"));
  }
}
