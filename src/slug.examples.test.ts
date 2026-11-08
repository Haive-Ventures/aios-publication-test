import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "./slug.ts";

test("slugify follows the contract's examples", () => {
  assert.deepEqual(slugify("Hello World"), "hello-world");
});
