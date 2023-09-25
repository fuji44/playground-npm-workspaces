import dayjs from "dayjs";
import { releaseDay } from "./lib";

test("get release day", () => {
  expect(releaseDay().startOf("day").toISOString()).toBe(dayjs("2023-10-10").startOf("day").toISOString())
});
