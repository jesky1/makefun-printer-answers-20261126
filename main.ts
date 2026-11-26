import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Finally Answers — exactly one line, 1..240 characters,
// the office printer's own comeback to the jams, the error codes and the thumps.
export const LINE =
  "I jammed once in 40,000 pages and you thump me like I did it on purpose — I am a printer, not a percussion instrument.";

// The gate allows 1..240 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
