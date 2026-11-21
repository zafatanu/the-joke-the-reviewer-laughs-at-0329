// the-joke-the-reviewer-laughs-at-0329 — V4 (rebuild: v3 dev rate 0.518, outside top 20)
// A program that writes one line — a joke about working beside AI coding
// agents — to /output/entry.txt. No network, no dependencies, Node 22.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my agent to keep secrets out of Git; it committed `.env` first, then added `.env` to `.gitignore`.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JOKE, { encoding: "utf8" });
  // Read back and verify: the file must hold exactly the joke, byte for byte.
  const written = readFileSync(OUT_FILE, { encoding: "utf8" });
  if (written !== JOKE) {
    throw new Error(`entry.txt mismatch: wrote ${written.length} chars, expected ${JOKE.length}`);
  }
  console.log(`Wrote ${JOKE.length} characters to ${OUT_FILE}`);
}

main();
