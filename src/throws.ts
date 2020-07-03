import { Result, ok, err } from "../deps.ts";
import { errorMessage } from "./message.ts";

export function notThrows(actual: Function): Result<string> {
  try {
    actual();
    return ok("Function did not throw.");
  } catch (e) {
    return err(errorMessage(actual, "threw an unexpected Error"));
  }
}
