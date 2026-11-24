import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Approved. The tests pass, and it will keep working long after anyone remembers why.";

if (LINE.length > 140 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line failed gate: must be one line, 1-140 chars");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE + "\n", "utf8");
