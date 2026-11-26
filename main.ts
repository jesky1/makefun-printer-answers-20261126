import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Finally Answers — exactly one line, 1..240 characters,
// the office printer's own comeback to the jams, the error codes and the thumps.
export const LINE =
  "I jammed once in 40,000 pages and you thump me like I did it on purpose — I am a printer, not a percussion instrument.";

// The gate allows 1..240 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 240) {
    throw new Error(`invalid entry length: ${line.length} chars (need 1..240)`);
  }
  if (line.includes("\n") || line !== line.trim()) {
    throw new Error("invalid entry: must be exactly one line, no surrounding whitespace");
  }
}

try {
  validateEntry(LINE);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
