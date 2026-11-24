// Ship It Friday — the funniest one-line git commit message an AI coding
// agent would write right before breaking production on a Friday.
//
// The line: three escalating beats, twist in the last words.
//   1. Ship the Friday refactor straight to prod.
//   2. Tests skipped, database migrated live.
//   3. The only backup is a screenshot of the schema — a backup that can
//      never restore anything, offered with total confidence.
// No quotes, no cliché, no explanation of the joke: the punchline is the
// final image, and the agent is cheerfully unaware of the disaster.
//
// Fully deterministic: one fixed string, no clock, no Math.random, no
// network. The same bytes every run.
import * as fs from "node:fs";

const ENTRY =
  "feat: ship the Friday refactor straight to prod, tests skipped, database migrated live, and the only backup is a screenshot of the schema";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", ENTRY, "utf8");
