import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify, slugChar } from "./slug.ts";

test("slugChar returns '-' for space", () => {
  assert.equal(slugChar(" "), "-");
});

test("slugChar lowercases uppercase letters", () => {
  assert.equal(slugChar("A"), "a");
});

test("lowercases and joins words with dashes", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("slugify handles multiple spaces", () => {
  assert.equal(slugify("Hello  Big World"), "hello--big-world");
});
