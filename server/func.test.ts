import { printReleaseDay } from "./func";

test("print release day", () => {
  expect(printReleaseDay()).toBe("Release: 2023/10/10")
});
