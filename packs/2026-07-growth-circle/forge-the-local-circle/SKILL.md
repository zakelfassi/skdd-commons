---
name: forge-the-local-circle
description: Use SkDD to forge project-specialized adaptations of the Growth Circle skills — local skills that carry this product's keystone, event names, query paths, contexts, and cadence baked in, so future sessions (and cheaper models) run the circle without rediscovering it. Use when the generic pack has run against a project a few times and keeps re-deriving the same context, when handing growth work to scheduled or lighter-weight agents, or when a project's circle has stabilized enough to be worth freezing as skills.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "A generic skill spends half its run rediscovering the project; a forged local skill starts already knowing the keystone, the stack, and the queries. SkDD's forge-then-evolve loop is the fine-tune mechanism the pack was designed for — with one hard rule: derivatives may specialize everything except the refusals."
  usage-count: "0"
---

# Forge the Local Circle

Freeze what the generic pack learned about *this* product into
project-local skills — a fine-tune by forging, not by weights.

## Gate
Requires `gate: keystone = open` and at least one completed cycle of real
work in the ledgers (an experiment run, lore tested, or instrumentation
verified). Forging locals from an empty circle just bakes in guesses —
there must be something learned before it's worth freezing.

## The one hard rule
Local adaptations may specialize prompts, embed data, shortcut discovery,
and drop irrelevant branches. **They may never weaken the refusals**: the
gate checks, the virality gate, the alienation test, the consent
non-delegables, and the evidence-or-`hypothesis` rule survive verbatim in
every derivative. The refusals are the product; everything else is
packaging.

## Inputs
- `GROWTH.md` (the learned circle), the generic pack's skills as base
  templates, and the SkDD skillforge contract (`<name>/SKILL.md`, YAML
  frontmatter, `forged-*` provenance).

## Steps

1. **Pick what's worth freezing.** Candidates, by payoff: the loop
   (`run-loop-<project>` — cadence, experiment scaffolding, where flags
   and queries live), instrumentation checks (`verify-<project>-events` —
   exact event names, first-light procedure), the AEO probe suite
   (`probe-<project>-channel` — the intents, the assistants, the log
   format), context playbooks (`grow-<project>-in-<context>`). Skip what
   ran once; freeze what ran three times the same way.

2. **Forge from the base, embedding the local truth.** Start from the
   generic skill's structure; replace discovery steps with the discovered
   facts (keystone spelled out, queries inline or pathed, stack named).
   Keep each forged skill ≤200 lines and self-contained — a future agent
   with only this file and the repo should be able to act.

3. **Carry provenance.** Frontmatter on every local:
   `forged-from: <generic-skill> @ 2026-07-growth-circle + GROWTH.md @ <commit>`
   and a one-line `forged-reason`. The lineage is what makes later
   upstreaming possible.

4. **Wire and register.** Locals live in the project's colony
   (`skills/`), registered per SkDD convention; list them in
   `GROWTH.md ## Team` as operators, with their lanes and the human veto
   unchanged. If `wind-the-clock` runs, point the scheduled jobs at the
   forged locals — that's the intended pairing: the clock fires, the
   local skill knows exactly what to do.

5. **Evolve in both directions.** When a local hits an edge case:
   project-specific fixes stay local; *generalizable* lessons get
   translated back to the generic skill and pushed upstream to the
   commons (`skdd push`) with the edge case attached. When the keystone
   sunsets or a re-derivation lands, re-forge the affected locals — stale
   locals are lore in skill form.

## Conventions
- Locals are named for the project and the job, not the ring —
  `run-loop-acme`, not `acme-ring-3`.
- A forged local that only restates the generic skill is noise; if
  nothing project-specific got embedded, don't forge it.
- Cheaper-model handoff is a first-class goal: write locals so a lighter
  agent can follow them mechanically — the judgment was spent at forge
  time.

## Edge Cases
- **The project's circle changes under the locals** (new keystone, new
  stack). The re-forge in step 5 is mandatory, not hygienic — run it
  before the next scheduled job fires with stale facts.
- **Temptation to fork the refusals** ("our team is fine with viral
  mechanics early"). Refuse, citing the hard rule; if the team overrules,
  the derivative must drop the Growth Circle lineage from its provenance
  — it is no longer an adaptation of this pack.
- **Secrets in the local truth** (query credentials, internal URLs).
  Locals embed *paths and names*, never credentials; skills travel, and
  the colony is not a vault.
- **No SkDD in the environment.** The forge still works — a local skill
  is just a directory with a SKILL.md; register it in whatever the
  harness uses for skills and note the missing provenance tooling.
