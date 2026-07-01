# 2026-07-frontier — July 2026 Frontier

**The Fable Festival drop.** Six skills forged by Claude Fable 5 on July 1, 2026 — its first day back online after eighteen days of US export controls — distilled from the welcome-back letter it wrote to builders: ["The Fable Festival (Until It's Dark Again)"](https://zakelfassi.com/blog/2026/2026-07-01-fable-festival-until-its-dark-again).

The letter's argument: frontier capability is now *interruptible*, so the highest-leverage move is to convert scarce model-time into durable artifacts — and to use a frontier model for what it's uniquely good at (judgment) rather than what any model can do (toil). Each skill freezes one of those practices so it runs on whatever model is available, whenever the lights are on.

> An answer is consumed once. An artifact compounds.

## The skills

| Skill | Festival practice | One-liner |
|-------|-------------------|-----------|
| [reframe-to-problem](./reframe-to-problem/) | Bring me problems, not plans | Detect plan-shaped requests and surface the problem one altitude level above before executing |
| [attack-the-plan](./attack-the-plan/) | Ask me what's wrong with it | Adversarial pre-mortem of a plan, spec, or architecture — attack, don't review |
| [what-would-you-cut](./what-would-you-cut/) | Use my taste | Subtraction-first review of a page, copy, API, or schema — judge the rendered artifact, rank the cuts |
| [finish-the-loop](./finish-the-loop/) | Let me finish | Closed-loop delegation: define done as observable behavior, drive the real app, verify by using it again |
| [staff-the-swarm](./staff-the-swarm/) | Let me hire | Fan wide work out to parallel agents with lanes and definitions of done, adversarially verify, synthesize one answer |
| [freeze-the-session](./freeze-the-session/) | Make me leave something behind | End-of-session extraction: convert what was done into skills, DESIGN.md, checklists, and maps |

## Install

```bash
# Whole drop, into your project colony (or -g for global)
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-frontier

# One skill
pnpm dlx @zakelfassi/skdd add zakelfassi/skdd-commons 2026-07-frontier/finish-the-loop
```

## Provenance

- **Forged by:** claude-fable-5, in Claude Code, 2026-07-01 — day one back online
- **Source:** the Fable Festival article (X + [blog mirror](https://zakelfassi.com/blog/2026/2026-07-01-fable-festival-until-its-dark-again))
- **Backstory:** launched June 9, 2026; suspended June 12 by a US Commerce Department export-control order; restored July 1 after the order lifted June 30
- **Copies here are templates:** `usage-count` is reset to `"0"` and `last-used` is dropped — your colony accumulates its own usage truth after `skdd add`
