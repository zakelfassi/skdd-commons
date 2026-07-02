---
name: instrument-the-truth
description: Wire minimal, consent-first instrumentation into a codebase — an event schema for the keystone path, cohort queries, and experiment scaffolding on whatever stack exists. Use when GROWTH.md has an Aha but no verified instrumentation, when find-the-keystone stalls for lack of data, when a team is flying on vibes, or when an analytics setup has grown into an unusable event swamp and needs cutting back to the path that matters.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "The circle replaces lore with instruments, and instruments are code. This is the skill that does the wiring — with taste (≤10 events) and a consent posture that treats tracking a user like borrowing from them."
  usage-count: "0"
---

# Instrument the Truth

Instrument the keystone path — and almost nothing else. Verify with your
own eyes that one real event flows end-to-end before calling it done.

## Gate
Requires `gate: aha = open` in `GROWTH.md`. A keystone spec is ideal but
not required — this skill often runs *before* `find-the-keystone` to give
it data. Without even an aha, there is no path to instrument; run
`name-the-aha` first.

## Inputs
- The codebase, `GROWTH.md`, and whatever analytics/experimentation stack
  already exists (PostHog, GrowthBook, Statsig, Amplitude, plain SQL + a
  table — all fine). Prefer what's installed; never add a paid dependency
  uninvited.

## Steps

1. **Draw the path first.** From `## Aha` (and `## Keystone` if present),
   list the signup → aha → repeat-value sequence as concrete user actions.
   The event schema is this list and nothing else. Taste target: ≤10 events.

2. **Design the schema.** Per event: name (verb-first, keystone-path
   vocabulary), properties (minimum viable — cohort keys, timing, context),
   and an explicit **no-PII check** per property. Distinguish agent traffic
   by declared user-agent, never by fingerprinting.

3. **Check the consent posture.** Read the app's existing consent
   framework, privacy policy, and applicable defaults. Instrumentation must
   fit inside what users have actually agreed to. Collect under the stated
   basis or don't collect. Refuse dark patterns (consent walls, pre-checked
   boxes, tracking disguised as functionality) in writing, in the PR.

4. **Wire it.** Implement events in code, matching the repo's conventions.
   Add the cohort queries the keystone derivation needs (engaged
   cross-section, first-N-days paths, matched dead cohort) wherever queries
   live in this project.

5. **Verify first light.** Run the product, perform the aha path yourself,
   and watch the events arrive end-to-end — dashboard, table, or log. "The
   code merged" is not done; *"I watched the event land"* is done.

6. **Record.** Write to `GROWTH.md ## Instrumentation`: schema, query
   locations, consent posture, first-light date. Set
   `gate: instrumented = open`.

## Conventions
- Every event traces to a ring; if you can't say which growth question an
  event answers, delete it.
- Experiment scaffolding (flags, assignment, exposure logging) counts as
  instrumentation — add the minimal version if `run-the-loop` is next.
- When cutting an event swamp: keep the keystone path, archive the rest,
  and log the cut in the lore ledger (swamps encode dead beliefs).

## Edge Cases
- **No analytics stack at all.** Plain append-only table + three SQL
  queries beats installing a platform mid-skill. Note the upgrade path.
- **Consent posture is undefined.** Stop at step 3, draft the posture, and
  flag it for human decision — consent posture is non-delegable to agents.
- **Client-side only, privacy-sensitive product.** Count events without
  identifying users (anonymous aggregates, local-first counters). A cruder
  honest instrument beats a sharper invasive one.
- **First light won't verify.** Do not open the gate. A broken pipeline
  recorded as working poisons every downstream verdict.
