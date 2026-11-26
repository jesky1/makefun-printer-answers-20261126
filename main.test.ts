import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LINE } from "./main.ts";

test("entry is exactly one line in the printer's own voice", () => {
  assert.equal(LINE.split("\n").length, 1, "must be exactly one line");
  assert.ok(LINE.length >= 1 && LINE.length <= 240, `length ${LINE.length} must be 1..240`);
  assert.equal(LINE, LINE.trim(), "no leading/trailing whitespace");
  assert.match(LINE, /printer/i, "must be in the printer's voice");
  assert.match(LINE, /jam/i, "must answer the paper jam");
  assert.match(LINE, /thump/i, "must answer the thumping");
  console.log(`LINE (${LINE.length} chars): ${LINE}`);
});

test("program writes the same line to /output/entry.txt", () => {
  const written = readFileSync("/output/entry.txt", "utf8");
  assert.equal(written, LINE, "entry.txt must hold exactly the line, no trailing newline");
  assert.ok(written.length <= 240, `entry.txt is ${written.length} chars`);
});
