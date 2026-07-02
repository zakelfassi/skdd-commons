---
name: name-the-aha
description: Interrogate a product for its core value — name the observable aha moment, measure time-to-aha, or honestly conclude there is none yet. Use when starting Growth Circle work on any repo, when someone asks "how do we grow this", when GROWTH.md is missing or its Aha section is empty, or before any activation/retention/distribution work is proposed. This is the gatekeeper skill — every other growth skill depends on its output.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "Most products have no core value, and most could. Growth machinery pointed at a valueless product is spam with extra steps — so the circle's first skill exists to name the value or refuse the work."
  usage-count: "0"
---

# Name the Aha

Find the observable moment after which a user's behavior measurably changes —
or conclude, honestly, that no such moment exists yet. Write the verdict to
`GROWTH.md`; every downstream growth skill gates on it.

## Gate
None — this is the circle's entry point. If the repo has no `GROWTH.md`,
create one from the Growth Circle template (spec v0.1: sections Aha,
Keystone, Instrumentation, Lore ledger, Experiment ledger, Trust ledger,
Contexts, Team, Gates) before proceeding.

## Inputs
- The repo, and whatever exists of: product copy, onboarding flow, usage
  data, support tickets, reviews, user interviews.
- If the product can be run, run it — experience the first session yourself
  before reading anyone's description of it.

## Steps

1. **Use the product cold.** Fresh account, no shortcuts. Note the first
   moment you felt the thing work — and how many seconds/steps it took.
   If you can't reach value as a motivated evaluator, note where you stopped.

2. **Hunt the behavior change.** An aha is not a feeling; it's an event
   after which usage measurably changes. From any available data, look for
   the action that separates users who stayed from users who died. No data?
   Interview transcripts and reviews often name it verbatim ("once I saw X…").

3. **Draft the statement.** One sentence: *user + moment + value*.
   ("A commenter hears their first voice reply" — not "users love seamless
   audio collaboration.") If it can't fit one sentence, it isn't found yet.

4. **Measure the clock.** Time-to-aha from signup, measured if possible,
   estimated-and-tagged if not. Days is unrealistic; hours unrealistic;
   minutes necessary but insufficient. Set the reduction target one order
   of magnitude down.

5. **Deliver the verdict.** Write to `GROWTH.md ## Aha` (statement,
   evidence, time-to-aha, target) and set `gate: aha = open`. Every claim
   carries an evidence link or the tag `hypothesis` — an untagged assertion
   violates the spec.

6. **Or refuse.** If no behavior-changing moment exists, write
   `NONE FOUND — growth work blocked`, keep the gate closed, and output the
   shortest path to *having* value instead. This is a success of the method,
   not a failure of the session.

## Conventions
- The aha is the user's moment, not the team's ("first successful deploy",
  not "first paid conversion").
- If the product's users are agents, the aha is time-to-first-successful-call
  and the evaluation in step 1 is done through public docs only.
- Never soften the refusal into "the aha is probably X" to unlock downstream
  skills. A `hypothesis`-tagged aha is allowed; an invented one is not.

## Edge Cases
- **Pre-launch product, zero users.** Steps 1 and 3 still run; the statement
  ships tagged `hypothesis` with a named validation plan. The gate may open
  on a hypothesis — the tag travels with everything built on it.
- **Multiple candidate ahas.** Pick the earliest one that predicts retention;
  log the runners-up in the lore ledger as untested beliefs.
- **The team insists the aha is obvious.** Write their version down, then do
  step 2 anyway. Confirmed team intuition costs one query; wrong intuition
  unexamined costs the whole circle.
