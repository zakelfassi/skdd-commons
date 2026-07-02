# 2026-07-growth-circle — July 2026 Growth Circle

**The growth-team-in-a-box drop.** Eight gated skills forged by Claude Fable 5 on July 2, 2026 — the executable implementation of the [Growth Circle protocol](https://github.com/zakelfassi/growth-circle): an open two-file schema (`GROWTH.md` + `VALUE.md`) for growth discipline in the agentic era, inspired by the early growth-team canon, fact-checked against a decade-plus of hindsight, and extended for a world where discovery is agent-mediated.

The pack's stance in one line: **you cannot publish what you have not earned.** Inward, an evidence ledger (`GROWTH.md`); outward, verifiable claims (`VALUE.md`); in between, skills that refuse to run out of order.

## The gate DAG

Skills form a system, not a list. Each reads/writes the target repo's `GROWTH.md` and refuses execution when its upstream gate is closed — stating which gate and what to run instead.

```
name-the-aha ──► find-the-keystone ──► instrument-the-truth ──► run-the-loop ──► distribution
                                            ▲                        │
                     invalidate-the-lore ───┘     virality gate: get-users-to-get-users
                                                  parked until activation + retention
prove-the-value   ◄── compiles GROWTH.md → VALUE.md   green ≥ 2 consecutive cycles
reset-for-context ◄── any skill, when a context shifts
hire-the-circle   ◄── standalone (team & agent staffing)
```

Two rules are enforced as refusals, never advice: the **virality gate** (viral mechanics are parked, not debated, until earned) and the **alienation test** (anything a fully-informed user would resent is auto-killed — and never delegated to agents).

## The skills

| Skill | Ring | One-liner |
|-------|------|-----------|
| [name-the-aha](./name-the-aha/) | 0 — core value | Name the observable aha moment, or honestly conclude there is none and block growth work |
| [find-the-keystone](./find-the-keystone/) | 1 — keystone | Derive who × does-what × N × window from engaged cohorts; stress-test for causation and gaming; give it a sunset |
| [instrument-the-truth](./instrument-the-truth/) | 2 — truth | Wire ≤10 consent-first events on the keystone path; verify first light with your own eyes |
| [invalidate-the-lore](./invalidate-the-lore/) | 2 — truth | Convert team beliefs to testable claims; build the append-only confirmed/busted ledger |
| [run-the-loop](./run-the-loop/) | 3 — loop | Pre-registered experiment cadence with the virality gate and alienation test built in |
| [reset-for-context](./reset-for-context/) | 4 — contexts | The 99/1 reset protocol with native-informant provenance — markets, platforms, agent channels |
| [prove-the-value](./prove-the-value/) | outward | Compile earned claims into a public, attestation-graded VALUE.md for agent-mediated discovery |
| [hire-the-circle](./hire-the-circle/) | 5 — team | Values → scorecards → interview kits, plus the human/agent ring map with two non-delegables |

## Install

```bash
# Whole drop, into your project colony (or -g for global)
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-growth-circle

# One skill
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-growth-circle/name-the-aha
```

Then, in your harness: *"run name-the-aha."* The pack maintains your `GROWTH.md`/`VALUE.md` from there. Specs and templates live in the [protocol repo](https://github.com/zakelfassi/growth-circle).

## Provenance

- **Forged by:** claude-fable-5, in Claude Code, 2026-07-02
- **Source:** the Growth Circle protocol repo — philosophy, two-file spec, and frontier program. Inspired by the growth-team tradition and its own sharpest self-criticism; researched and fact-checked mid-2026; written in its own voice.
- **First deployment:** the TAC repo (report forthcoming)
- **Copies here are templates:** `usage-count` resets to `"0"`, `last-used` is dropped — your colony accumulates its own usage truth after `skdd add`
