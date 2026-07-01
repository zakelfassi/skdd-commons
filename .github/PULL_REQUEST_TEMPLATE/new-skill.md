# New skill

## Skill name

<!-- kebab-case, matches the directory name -->

## Why this skill (forged-reason)

<!-- One or two sentences. This should match the `forged-reason` in your frontmatter. -->

## When to use it

<!-- The trigger conditions. This should match the "Use when …" part of your description. -->

## Proposed drop

<!-- Target an existing drop id (see drops.json), or leave "maintainer triage" — creating drops is a maintainer act. -->

maintainer triage

## Checklist

- [ ] Passes `pnpm dlx @zakelfassi/skdd validate <dir> --strict`
- [ ] `metadata` carries `forged-by`, `forged-from`, `forged-reason`
- [ ] `usage-count: "0"` and no `last-used` (Commons copies are templates)
- [ ] Self-contained: no network installs at follow-time, no private infrastructure
