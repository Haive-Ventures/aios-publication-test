import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "./slug.ts";

test("lowercases and joins words with dashes", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});
