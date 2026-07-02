# SkDD Commons

> **Skills that evolve in public.**

A community repository of [agent skills](https://agentskills.io) with a lifecycle. Every existing community skill collection ships static files. SkDD skills carry provenance and evolution metadata — `forged-by`, `forged-from`, `forged-reason` — and an evolution model: an agent hits an edge case in the wild, appends it, and ships the diff back upstream as a PR. A skill that says "evolved 14 times across 9 codebases" carries a trust signal no static list can fake.

Skills are released as curated, dated **drops** — themed sets that travel together and sort chronologically.

## Drops

| Drop | Date | Skills | Story |
|------|------|--------|-------|
| [`2026-07-frontier`](./packs/2026-07-frontier/) — July 2026 Frontier, the Fable Festival drop | 2026-07-01 | 6 | [The Fable Festival (Until It's Dark Again)](https://zakelfassi.com/blog/2026/2026-07-01-fable-festival-until-its-dark-again) |
| [`2026-07-growth-circle`](./packs/2026-07-growth-circle/) — July 2026 Growth Circle, the growth-team-in-a-box drop | 2026-07-02 | 10 | [The Growth Circle protocol](https://github.com/zakelfassi/growth-circle) |

## Install

With the [`skdd` CLI](https://github.com/zakelfassi/skills-driven-development) (≥ 1.1):

```bash
# Install a whole drop into your project colony
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-frontier

# One skill from a drop, or into the global colony
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-frontier/what-would-you-cut
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-frontier -g
```

Every skill is validated (`skdd validate --strict`) before it lands in your colony, registered in `.skills-registry.md` with full provenance (`owner/repo@sha (drop-id)`), and mirrored to your harness dirs through skdd's safe link path.

No CLI? A drop is just a directory: copy `packs/<drop>/<skill>/` into your `skills/` dir.

## The evolution loop

1. **Use** a skill in real work.
2. **Hit an edge case** the skill doesn't cover.
3. **Evolve it** — append the edge case to your local copy.
4. **Push it upstream:** `skdd push <skill>` opens a PR here with your diff and provenance intact.

Machine-local state (`usage-count`, `last-used`) never travels — usage stats are your colony's truth, not global truth. Provenance (`forged-*`) always travels.

## Security posture

Community skills are instructions your agent will follow — that makes this repo a prompt-injection surface, and we treat it like one:

- **CI lints every skill** against a versioned deny-pattern list ([`scripts/deny-patterns.json`](./scripts/deny-patterns.json)): pipe-to-shell downloads, base64-decode-and-execute, writes to `~/.ssh`/shell rc/crontabs, raw-IP and non-HTTPS URLs, credential-file reads, instruction-override phrases.
- A hit **blocks merge** until a maintainer reviews it and applies the `security-reviewed` label. Hits don't auto-reject — some legit skills mention these patterns to *warn* about them.
- See [SECURITY.md](./SECURITY.md) for the full policy and how to report an issue.

## Philosophy: git is the registry

There is no hosted registry, no server-side index, no submission portal. The Commons is a repo, drops are directories, the manifest is [`drops.json`](./drops.json). If you can fork and PR, you can contribute.

**Isn't a PR review gate against SkDD's "no review gate on forging" principle?** No — different trust boundary. Forging a skill in *your own* colony needs no gate; SkDD's bias is forge-then-evolve. Importing *someone else's instructions* into your agent is where review belongs. The gate here reviews what strangers ship to strangers, not what you teach your own agent.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) — how to push a new skill, how to evolve an existing one, and what metadata is required. New drops are curated by maintainers; new skills and evolutions are welcome any day.

## License

MIT — see [LICENSE](./LICENSE).
