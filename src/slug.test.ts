import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "./slug.ts";

test("lowercases and joins words with dashes", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("removes punctuation and collapses spaces", () => {
  assert.equal(slugify("Hello,  World!"), "hello-world");
});

test("collapses multiple dashes", () => {
  assert.equal(slugify("foo---bar"), "foo-bar");
});

test("trims leading dashes", () => {
  assert.equal(slugify("-hello-world"), "hello-world");
});

test("trims trailing dashes", () => {
  assert.equal(slugify("hello-world-"), "hello-world");
});

test("handles only punctuation", () => {
  assert.equal(slugify("!@#$"), "");
});

test("collapses mixed spaces and dashes", () => {
  assert.equal(slugify("hello   -   world"), "hello-world");
});
