#!/usr/bin/env node
// Manifest check for SkDD Commons: assert drops.json and packs/ agree.
//
//   node scripts/manifest-check.mjs
//
// Checks:
//   1. Every skill listed in drops.json exists as packs/<drop>/<skill>/SKILL.md.
//   2. Every skill's frontmatter `metadata.pack` matches its drop id.
//   3. Every pack directory in packs/ is listed in drops.json (no orphans).
//   4. Every skill directory inside a pack is listed in its drop (no strays).
//   5. Drop ids follow YYYY-MM-<theme> and dates are ISO.
//   6. Each drop directory has a README.md.
//
// Exit codes: 0 = consistent, 1 = mismatch, 2 = config error.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PACKS_DIR = join(ROOT, "packs");
const DROP_ID_REGEX = /^\d{4}-\d{2}-[a-z0-9]+(-[a-z0-9]+)*$/;

const errors = [];

let manifest;
try {
  manifest = JSON.parse(readFileSync(join(ROOT, "drops.json"), "utf8"));
} catch (err) {
  console.error(`cannot read drops.json: ${err.message}`);
  process.exit(2);
}
if (!Array.isArray(manifest.drops)) {
  console.error('drops.json has no "drops" array');
  process.exit(2);
}

const listedDropIds = new Set();
for (const drop of manifest.drops) {
  listedDropIds.add(drop.id);

  if (!DROP_ID_REGEX.test(drop.id ?? "")) {
    errors.push(`drop id '${drop.id}' does not match YYYY-MM-<theme>`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(drop.date ?? "")) {
    errors.push(`drop '${drop.id}' has a non-ISO date: '${drop.date}'`);
  }
  if (!drop.title) errors.push(`drop '${drop.id}' is missing a title`);

  const dropDir = join(PACKS_DIR, drop.id);
  if (!existsSync(dropDir)) {
    errors.push(`drop '${drop.id}' listed in drops.json but packs/${drop.id}/ does not exist`);
    continue;
  }
  if (!existsSync(join(dropDir, "README.md"))) {
    errors.push(`packs/${drop.id}/ has no README.md (every drop needs its story)`);
  }

  const listedSkills = new Set(drop.skills ?? []);
  for (const skill of listedSkills) {
    const skillMd = join(dropDir, skill, "SKILL.md");
    if (!existsSync(skillMd)) {
      errors.push(`drop '${drop.id}' lists skill '${skill}' but ${skill}/SKILL.md is missing`);
      continue;
    }
    const content = readFileSync(skillMd, "utf8");
    const packLine = content.match(/^\s*pack:\s*(\S+)\s*$/m);
    if (!packLine) {
      errors.push(`packs/${drop.id}/${skill}/SKILL.md has no 'pack:' metadata line`);
    } else if (packLine[1] !== drop.id) {
      errors.push(
        `packs/${drop.id}/${skill}/SKILL.md declares pack '${packLine[1]}', expected '${drop.id}'`,
      );
    }
  }

  // Stray skill dirs not listed in the drop
  for (const entry of readdirSync(dropDir)) {
    const full = join(dropDir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (!listedSkills.has(entry)) {
      errors.push(`packs/${drop.id}/${entry}/ exists but is not listed in drops.json`);
    }
  }
}

// Orphan pack dirs not listed in the manifest
if (existsSync(PACKS_DIR)) {
  for (const entry of readdirSync(PACKS_DIR)) {
    const full = join(PACKS_DIR, entry);
    if (!statSync(full).isDirectory()) continue;
    if (!listedDropIds.has(entry)) {
      errors.push(`packs/${entry}/ exists but has no entry in drops.json`);
    }
  }
} else {
  errors.push("packs/ directory does not exist");
}

if (errors.length > 0) {
  console.error(`manifest-check: ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(
  `manifest-check: drops.json and packs/ agree (${manifest.drops.length} drop(s), ${manifest.drops.reduce((n, d) => n + (d.skills?.length ?? 0), 0)} skill(s)).`,
);
