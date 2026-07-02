---
name: prove-the-value
description: Compile a product's earned, evidence-backed claims from GROWTH.md into a public VALUE.md — the proof-of-value surface that agent-mediated discovery reads — with attestation levels, expiry dates, and honest retractions. Use when creating or refreshing a VALUE.md, when marketing copy needs grounding in evidence, when preparing a product to be evaluated by assistants and their principals' agents, or when a published claim has gone stale.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "In an agent-mediated market the reader's agent filters unverifiable claims at zero cost, so evidence is the only channel that stays open. This skill is the compiler from the inward ledger to the outward surface — and the one rule is that nothing publishes that wasn't earned."
  usage-count: "0"
---

# Prove the Value

Compile `GROWTH.md` (what you've earned) into `VALUE.md` (what you
publish). Written for a skeptical agent, not a landing page.

## Gate
Requires `gate: aha = open`. A `VALUE.md` can be born early and small —
even one honest claim beats a page of adjectives — but it cannot be born
from nothing: **every claim must trace to a `GROWTH.md` ledger entry.**
No entry, no claim. That rule has no exceptions and no expiry.

## Inputs
- `GROWTH.md` (all ledgers), the existing `VALUE.md` if any, current
  marketing/docs copy (as claim *candidates* to be graded, not as source
  of truth).

## Steps

1. **Harvest claim candidates.** From the experiment ledger (confirmed
   results), instrumentation (measured aha/keystone numbers), lore ledger
   (confirmed beliefs), and existing copy. Every candidate gets its
   provenance located — or marked unearned.

2. **Grade attestation honestly.** Per claim: `claimed` (stated, no
   evidence yet — legal, and weighted accordingly by readers) →
   `self-reported` (traces to a ledger entry) → `reproducible` (an outsider
   can re-derive it) → `attested` (third-party signed). When in doubt,
   grade down: a true claim tagged modestly earns more trust than an
   inflated tag.

3. **Write the aha as a falsifiable promise.** Not "delightful
   collaboration" — "a new user reaches X within N minutes, M% of the
   time," tagged and dated. If agents are users, include the agent aha:
   time-to-first-successful-call, and an *executable* quickstart.

4. **Set expiries.** Default two quarters per claim. Stale claims are
   re-attested or retracted — and a retraction is logged in `VALUE.md
   ## Retractions` *and* as a trust-ledger **credit** in `GROWTH.md`
   (public honesty is cheap trust; buy it every time).

5. **Write the consent posture for machine negotiation.** What's
   collected, never collected, and what a principal's agent may accept on
   their behalf — explicit enough to be evaluated without a human reading
   a policy page. Changes here are human-approved, always.

6. **Point the discovery surfaces at it.** `llms.txt` links `VALUE.md`;
   docs quote it rather than fork it. If an AEO probe suite exists, this
   compile is the experimental lever it measures.

## Conventions
- Plain declarative sentences. No superlative without a number, no number
  without provenance, no adjective a benchmark couldn't defend.
- Optimize claims and evidence, never phrasing-per-assistant — phrasing
  games are spam with a new target, and agents learn to price them.
- `VALUE.md` speaks for the product, not about competitors.

## Edge Cases
- **Marketing copy claims things the ledgers can't back.** The claim
  doesn't enter `VALUE.md`, and the gap is reported as a work item: either
  earn it (design the experiment) or stop saying it. Both are wins.
- **Brand-new product, empty ledgers.** Ship a small honest `VALUE.md`:
  what-this-is, a `claimed`-tagged aha promise, and a real quickstart.
  Smallness plus honesty is itself a signal agents can read.
- **A claim's evidence quietly rotted** (metric moved, feature changed).
  Retract proactively — an agent discovering the rot before you costs
  more than the retraction ever will.
- **Pressure to skip the tag** ("just say it's fast"). The tag *is* the
  product here. Refuse, citing the one rule.
