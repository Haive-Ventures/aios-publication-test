import assert from "node:assert/strict";
import { test } from "node:test";
import { truncate } from "./truncate.ts";

test("returns text unchanged when within limit", () => {
  assert.equal(truncate("hello", 10), "hello");
  assert.equal(truncate("hello world", 11), "hello world");
  assert.equal(truncate("", 5), "");
  assert.equal(truncate("", 0), "");
  assert.equal(truncate("a", 1), "a");
});

test("truncates on word boundary with ellipsis", () => {
  // Criterion 2
  assert.equal(truncate("hello world", 10), "hello…");
  // Additional word-boundary cases
  assert.equal(truncate("hello world", 6), "hello…");
  assert.equal(truncate("hello beautiful world", 16), "hello beautiful…");
  assert.equal(truncate("a b c d e", 7), "a b c…");
});

test("truncates inside a word when first word doesn't fit", () => {
  // Criterion 3
  assert.equal(truncate("extraordinary", 5), "extr…");
  // Additional mid-word cases
  assert.equal(truncate("hello", 3), "he…");
  assert.equal(truncate("hello world", 4), "hel…");
});

test("handles edge cases", () => {
  // max too small for any text
  assert.equal(truncate("hello", 1), "…");
  assert.equal(truncate("hello", 2), "h…");
  // text with leading spaces
  assert.equal(truncate("  hello world", 10), "  hello…");
  // text with multiple spaces between words
  assert.equal(truncate("hello  world", 10), "hello…");
  // text that is exactly at limit with space at boundary
  assert.equal(truncate("hello world", 7), "hello…");
});
