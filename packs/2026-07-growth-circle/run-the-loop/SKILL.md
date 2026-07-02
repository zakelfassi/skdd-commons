---
name: run-the-loop
description: Run the growth experiment cadence — propose ranked by keystone impact, pre-register before launch, evaluate by the committed rule, keep/kill without relitigating, log everything. Enforces the virality gate (get-users-to-get-users proposals are parked until activation and retention run green) and the alienation test (auto-kill anything a fully-informed user would resent). Use when the growth cadence comes due (weekly/biweekly), when someone proposes "a growth hack", or when experiment results need an honest verdict.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "The engine of the circle is deliberately boring: obvious things, repeatedly, without second-guessing. Its two hard constraints — the virality gate and the alienation test — are what separate a growth discipline from a spam machine, so they live in the skill as refusals, not advice."
  usage-count: "0"
---

# Run the Loop

Propose, pre-register, run, decide, log. Monotony is the feature. The loop
was written so an agent can operate it — and so nobody, agent or human, can
quietly cheat it.

## Gate
Requires `gate: aha`, `gate: keystone`, and `gate: instrumented` all open
in `GROWTH.md`. `gate: loop` is the *derived* summary of those three: if
all three are open and `loop` still reads closed (or is missing), set
`gate: loop = open` yourself and proceed; if any is closed, name it and
route there. **Missing gate lines are closed** — never treat an absent
gate as permission. Two standing sub-gates apply *inside* the loop:

- **Virality gate:** unless `GROWTH.md` explicitly says
  `gate: virality = open`, any proposal whose mechanism is
  get-users-to-get-users goes to `### Parked: virality` — not debated,
  not refined, parked (absent or malformed line = closed). The gate
  opens only after activation and retention experiments run green two
  consecutive cycles.
- **Alienation test:** every experiment answers, pre-launch: *would this
  alienate the user if they fully understood what it does?* Yes or unsure
  → killed or escalated to a human. Non-delegable to agents.

## Inputs
- `GROWTH.md` (keystone, ledgers, gates), experiment scaffolding from
  `instrument-the-truth`, and candidate sources: lore-ledger unknowns,
  activation friction, context findings, team proposals.

## Steps

1. **Propose.** Gather candidates; rank by expected keystone impact ÷
   effort. Apply the two sub-gates now — park virality mechanics, kill
   alienators, and log both actions (a refused experiment is a trust-ledger
   credit).

2. **Pre-register, then launch — in that order.** Per experiment, commit to
   the ledger *before* any flag flips: hypothesis, metric, decision rule,
   sample/duration, expected trust debit/credit. Git history is the
   ordering proof — a pre-registration that postdates its launch is void.

3. **Run without peeking.** Evaluate exactly when and how the
   pre-registration says. Early stopping only if the pre-registration
   defined it.

4. **Decide and log.** `keep / kill` by the committed rule, no
   relitigating. Append: result, decision, learning, actual trust
   debit/credit. Killed experiments get their learning written down — they
   are the loop's tuition.

5. **Tend the gates.** After each cycle: update green-cycle counts; open
   `gate: virality` when earned (and say so — it's a milestone); check the
   keystone's sunset date and gaming-vector tripwires, routing to
   `find-the-keystone` if either fires.

## Conventions
- Rank by keystone impact, not by interestingness. A boring ledger of
  small honest results is what winning looks like.
- One experiment per hypothesis. Bundles produce unattributable results.
- Agents may operate every step except the alienation verdict and consent
  changes; every entry carries `agent:` or `human:` attribution.

## Edge Cases
- **"Just this one growth hack."** The parked list is the answer, verbatim,
  plus when the gate opens. Banning the conversation, not just the tactic,
  is the design.
- **Results ambiguous under the committed rule.** Log `kill` (the default
  under ambiguity), note what a sharper pre-registration would have asked,
  and re-run if the hypothesis still ranks.
- **Someone wants to overturn a kill with new analysis.** New analysis =
  new pre-registered experiment. The ledger never re-tries the old one's
  verdict.
- **Trust ledger runs net-negative two cycles straight.** Stop proposing;
  audit with `invalidate-the-lore` — the candidates are coming from
  somewhere rotten.
