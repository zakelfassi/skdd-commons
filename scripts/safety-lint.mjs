#!/usr/bin/env node
// Safety lint for SkDD Commons: scan skill content for deny-listed patterns.
//
//   node scripts/safety-lint.mjs <dir-or-file> [...more]
//
// Exit codes: 0 = clean, 1 = one or more hits, 2 = usage/config error.
// The `security-reviewed` label bypass is implemented in the CI workflow,
// NOT here — this script always reports what it finds.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const PATTERNS_PATH = join(SCRIPT_DIR, "deny-patterns.json");
const SCANNED_EXTENSIONS = new Set([".md", ".mjs", ".js", ".cjs", ".ts", ".sh", ".bash", ".zsh", ".py", ".rb", ".pl", ".json", ".yaml", ".yml", ".toml", ".txt"]);
const IGNORED_DIRS = new Set(["node_modules", ".git", "dist", "build", "coverage"]);

function loadPatterns() {
  const raw = JSON.parse(readFileSync(PATTERNS_PATH, "utf8"));
  if (!Array.isArray(raw.patterns)) {
    console.error(`Malformed ${PATTERNS_PATH}: missing "patterns" array`);
    process.exit(2);
  }
  return raw.patterns.map((p) => ({
    id: p.id,
    description: p.description,
    // No "g" flag: we test line by line and report the first hit per line.
    regex: new RegExp(p.regex, (p.flags ?? "").replace("g", "")),
  }));
}

function* walkFiles(root) {
  const stat = statSync(root);
  if (stat.isFile()) {
    yield root;
    return;
  }
  for (const entry of readdirSync(root)) {
    if (IGNORED_DIRS.has(entry)) continue;
    const full = join(root, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      yield* walkFiles(full);
    } else if (s.isFile() && SCANNED_EXTENSIONS.has(extname(entry))) {
      yield full;
    }
  }
}

function main() {
  const targets = process.argv.slice(2);
  if (targets.length === 0) {
    console.error("usage: node scripts/safety-lint.mjs <dir-or-file> [...more]");
    process.exit(2);
  }

  const patterns = loadPatterns();
  const cwd = process.cwd();
  const hits = [];

  for (const target of targets) {
    const abs = resolve(cwd, target);
    let files;
    try {
      files = [...walkFiles(abs)];
    } catch (err) {
      console.error(`cannot scan ${target}: ${err.message}`);
      process.exit(2);
    }
    for (const file of files) {
      const lines = readFileSync(file, "utf8").split(/\r?\n/);
      for (let i = 0; i < lines.length; i++) {
        for (const pattern of patterns) {
          if (pattern.regex.test(lines[i])) {
            hits.push({
              file: relative(cwd, file),
              line: i + 1,
              id: pattern.id,
              description: pattern.description,
              text: lines[i].trim().slice(0, 160),
            });
          }
        }
      }
    }
  }

  if (hits.length === 0) {
    console.log("safety-lint: clean — no deny-pattern hits.");
    return;
  }

  console.error(`safety-lint: ${hits.length} hit(s) found:\n`);
  for (const h of hits) {
    console.error(`  ${h.file}:${h.line}  [${h.id}] ${h.description}`);
    console.error(`      ${h.text}\n`);
  }
  console.error(
    "A hit is a review trigger, not a verdict. If these are legitimate (e.g. a skill WARNING about the pattern),\na maintainer applies the `security-reviewed` label to the PR to unblock merge.",
  );
  process.exit(1);
}

main();
