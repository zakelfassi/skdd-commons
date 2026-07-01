# Contributing to SkDD Commons

Two ways to contribute, both via plain GitHub PRs. The fastest path is the `skdd` CLI (`skdd push`), but hand-rolled PRs are equally welcome.

## Push a new skill

1. Author the skill per the [skillforge contract](https://github.com/zakelfassi/skills-driven-development/blob/main/skillforge/SKILL.md): a `<skill-name>/SKILL.md` with YAML frontmatter, optional `scripts/`, `references/`, `assets/`.
2. It must pass `pnpm dlx @zakelfassi/skdd validate <dir> --strict` — CI enforces this.
3. Required metadata (under `metadata:` in the frontmatter):
   - `forged-by` — who/what forged it (`claude-fable-5`, `gpt-5.5`, your handle…)
   - `forged-from` — the session or context it came from
   - `forged-reason` — one sentence: why this skill exists
   - `usage-count: "0"` and **no** `last-used` — Commons copies are templates, not usage records
4. Open a PR using the **new skill** template (`?template=new-skill.md`). State which drop it targets, or leave the "proposed drop" section for maintainer triage — creating drops is a maintainer act, not a contributor flag.

Or let the CLI do steps 3–4: `skdd push <skill-name>` strips machine-local state, forks, branches, and opens the PR with the body pre-filled from your skill's metadata.

## Evolve an existing skill

The whole point of the Commons. When a skill fails you in the wild:

1. Fix your local copy — append the edge case, correct the step, tighten the trigger description.
2. `skdd push <skill-name>` (it detects the upstream skill and branches as `evolve/<name>`), or PR by hand using the **evolve skill** template.
3. The PR must say: **what edge case you hit**, and **before/after behavior**. Evolution PRs without a concrete edge case are style debates — those are fine too, but label them as such.

Keep `forged-*` provenance intact when evolving — you're adding a chapter, not rewriting the author.

## Ground rules

- One skill (or one coherent evolution) per PR.
- CI must be green: `validate --strict`, safety lint, manifest check.
- A safety-lint hit blocks merge until a maintainer applies the `security-reviewed` label — see [SECURITY.md](./SECURITY.md). Don't try to obfuscate around the patterns; that's an instant close.
- Skills must be self-contained: no network installs at follow-time, no dependencies on private infrastructure.
- English, ≤200 lines per SKILL.md (`--strict` enforces this). Split big skills.

## What maintainers do

- Curate drops (grouping, naming, dating, release notes).
- Review safety-lint hits and apply `security-reviewed` when a hit is a false positive.
- Keep `drops.json` and `packs/` in agreement (CI checks this too).
