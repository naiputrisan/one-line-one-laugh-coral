import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I put my phone on Do Not Disturb and felt so lonely I texted myself to check if I was still alive.";

// The gate: one line, 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
