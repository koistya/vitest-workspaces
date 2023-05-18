import { test, expect } from "vitest";
import { foo } from "./index";

test("foo", () => {
  expect(foo()).toMatchInlineSnapshot('"OK"');
});
