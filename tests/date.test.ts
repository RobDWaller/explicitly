import { Result } from "https://deno.land/x/resulty/mod.ts";
import { assertTrue } from "../mod.ts";
import {
  date,
  dateString,
  dateTime,
  dateTimeString,
} from "../src/date.ts";

Deno.test("Date Time", () => {
  const date1 = new Date("2019-05-12 15:13:10");

  const date2 = new Date("2019-05-12 15:13:10");

  const result: Result<string> = dateTime(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date Time Fail", () => {
  const date1 = new Date("2019-05-11 15:13:10");

  const date2 = new Date("2019-05-12 15:13:10");

  const result: Result<string> = dateTime(date1, date2);

  assertTrue(result.isError());
});

Deno.test("Date Time String", () => {
  const date1 = new Date("2019-05-12 15:13:10");

  const date2 = "2019-05-12T15:13:10.000Z";

  const result: Result<string> = dateTimeString(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date Time String Fail", () => {
  const date1 = new Date("2019-05-12 15:13:10");

  const date2 = "2019-05-12T15:13:11.000Z";

  const result: Result<string> = dateTimeString(date1, date2);

  assertTrue(result.isError());
});

Deno.test("Date String Dash Format", () => {
  const date1 = new Date("2019-05-12");

  const date2 = "2019-05-12";

  const result: Result<string> = dateString(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date String Dash Format Fail", () => {
  const date1 = new Date("2019-05-12");

  const date2 = "2019-05-13";

  const result: Result<string> = dateString(date1, date2);

  assertTrue(result.isError());
});

Deno.test("Date String Slash Format", () => {
  const date1 = new Date("2019-05-12");

  const date2 = "2019/05/12";

  const result: Result<string> = dateString(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date String Slash Format Fail", () => {
  const date1 = new Date("2019-05-12");

  const date2 = "2019/05/13";

  const result: Result<string> = dateString(date1, date2);

  assertTrue(result.isError());
});

Deno.test("Date", () => {
  const date1 = new Date("2019-05-12");

  const date2 = new Date("2019-05-12");

  const result: Result<string> = date(date1, date2);

  assertTrue(result.isOk());
});

Deno.test("Date Fail", () => {
  const date1 = new Date("2019-05-12");

  const date2 = new Date("1989-05-12");

  const result: Result<string> = date(date1, date2);

  assertTrue(result.isError());
});
