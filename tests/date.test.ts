import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import {
  dateTimeUTC,
  dateTimeUTCString,
} from "../src/date.ts";

Deno.test("Date Time UTC", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-12 15:13:10"));

  const date2 = new Date();
  date2.setTime(Date.parse("2019-05-12 15:13:10"));

  const result: Result<string> = dateTimeUTC(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date Time UTC Fail", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-11 15:13:10"));

  const date2 = new Date();
  date2.setTime(Date.parse("2019-05-12 15:13:10"));

  const result: Result<string> = dateTimeUTC(date1, date2);

  assertTrue(result.isError());
});

Deno.test("Date Time UTC String", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-12 15:13:10"));

  const date2 = "Sun, 12 May 2019 15:13:10 GMT";

  const result: Result<string> = dateTimeUTCString(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date Time UTC String Fail", () => {
  const date1 = new Date();
  date1.setTime(Date.parse("2019-05-12 15:13:10"));

  const date2 = "Sun, 12 May 2019 15:12:10 GMT";

  const result: Result<string> = dateTimeUTCString(date1, date2);

  assertTrue(result.isError());
});
