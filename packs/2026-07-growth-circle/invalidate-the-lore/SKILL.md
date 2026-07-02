---
name: invalidate-the-lore
description: Harvest a team's beliefs about why users behave, convert each into a testable claim, and run the cheapest disproving test — building an append-only lore ledger of confirmed/busted/undecidable verdicts. Use when roadmap arguments run on gut feeling, before any big bet built on an untested assumption, on a quarterly hygiene cadence, or when someone says "users churn because…" without a link attached.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "Every team accumulates folklore about its users, usually asserted by whoever struts most confidently. The cultural unlock isn't better guessing — it's the first time a favorite belief dies to a twenty-line query, after which assertions start arriving with evidence attached."
  usage-count: "0"
---

# Invalidate the Lore

Turn team beliefs into testable claims, test them cheaply, and log the
verdicts where nobody can un-log them.

## Gate
Works best with `gate: instrumented = open`, but may run earlier — some
lore dies to data that already exists (support tickets, store reviews, git
history, server logs). No gate blocks *collecting* lore; only verdicts
need evidence.

## Inputs
- Beliefs, harvested from: the user/founder directly ("tell me five things
  you know about your users"), docs and READMEs, PR discussions, support
  threads, marketing copy (every headline is a belief).
- Whatever data exists. `GROWTH.md ## Lore ledger` as working memory.

## Steps

1. **Harvest without judging.** Collect beliefs verbatim, attributed and
   dated. The confident ones and the load-bearing ones first — a belief
   that steers the roadmap is worth ten idle opinions.

2. **Sharpen each into a claim.** Rewrite as something falsifiable: "users
   churn because onboarding is long" → "churned users abandoned during
   onboarding at a higher rate than retained users." If a belief can't be
   sharpened, log it `undecidable` with the reason — that's a verdict too.

3. **Design the cheapest kill.** For each claim, the *minimum* test:
   usually a query, sometimes a cohort comparison, occasionally a real
   experiment (route those to `run-the-loop`). Order by
   load-bearing-ness ÷ cost. Independent claims fan out well — one lane
   per belief, verified separately.

4. **Run and rule.** `confirmed / busted / undecidable`, each with an
   evidence link. Busted lore gets a one-line epitaph. Never bust by
   counter-assertion — no evidence, no verdict.

5. **Ledger it.** Append to `GROWTH.md ## Lore ledger` (date, author,
   belief, status, evidence). Surface the two or three verdicts that
   should change what the team does next — a ledger nobody reads is a
   diary.

## Conventions
- Gut feeling isn't banned; it's *promoted* — from conclusion to
  hypothesis. Say this out loud when harvesting; it keeps people honest
  and unhumiliated.
- The ledger is append-only. Corrections are new entries citing old ones.
- Treat your own analyses as lore too: a conclusion this skill produced
  last quarter is a belief this quarter.

## Edge Cases
- **The ledger only ever confirms.** Audit the sharpening step — soft
  claims produce soft confirmations. A healthy ledger busts things.
- **Belief held by the person paying for the work.** Test it exactly as
  carefully, deliver the verdict exactly as plainly, with the evidence
  doing the talking.
- **Two beliefs conflict.** Perfect — at most one survives. Test the pair
  together and log both verdicts.
- **No data whatsoever.** Convert the top beliefs into the instrumentation
  wishlist and route to `instrument-the-truth`; log everything harvested
  as `untested` so the debt is visible.
