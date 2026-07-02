---
name: find-the-keystone
description: Derive a product's keystone metric — who × does-what × N times × window — by working backwards from engaged users, then stress-test it for causation and gameability before anyone reorganizes around it. Use when a team asks "what's our North Star", when activation work has no target, when an existing keystone was adopted from a blog post rather than cohort evidence, or when GROWTH.md has an Aha but an empty Keystone.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "The growth canon's most famous artifact is one legible activation metric a whole company organized around. Retellings disagree on its constants — which is the tell that the shape is the durable part: derived from engaged users, falsifiable, mortal."
  usage-count: "0"
---

# Find the Keystone

Work backwards from your most engaged users to one metric that
operationalizes core value — then try to break it before you build on it.

## Gate
Requires `gate: aha = open` in `GROWTH.md` (non-empty `## Aha`, not
`NONE FOUND`). If closed, stop and run `name-the-aha` first — a keystone
without a named aha is a number in search of a meaning.

## Inputs
- `GROWTH.md` (`## Aha`), and event/cohort data: analytics export, SQL
  access, or server logs. No data → stop, route to `instrument-the-truth`
  for a minimal keystone-path event trail, resume after first light.

## Steps

1. **Define "engaged" from the aha, not from activity.** Pick the behavior
   that IS repeated core value delivery (weekly voice note sent, not weekly
   app open). Select a broad cross-section of users who sustain it.

2. **Path backwards.** For each engaged user, reconstruct the first N days:
   what did they do, in what order, how fast? Contrast with a matched
   cohort that signed up and died. You're hunting the earliest common fork.

3. **Compress to the four fields.** `who × does-what × how-many-times ×
   within-window`. If it needs a fifth clause, it's a dashboard, not a
   keystone. Prefer legible-to-everyone over statistically maximal.

4. **Try to kill it — correlation first.** The classic critique: the early
   behavior may be the *symptom* of intent, not the cause of retention.
   Design the cheapest causal probe — an experiment that pushes marginal
   users over the threshold and watches whether retention follows.
   Pre-register it in the experiment ledger; set causal-probe status.

5. **Try to kill it — gameability second.** Red-team: how would a
   well-meaning team inflate this number while destroying value? (Auto-add
   connections. Prompt pressure.) Write the top 2 gaming vectors next to
   the metric — they are the anti-Goodhart tripwires.

6. **Write the spec with a sunset.** To `## Keystone`: the four fields,
   derivation evidence, causal-probe status, gaming vectors, and a review
   date (default: 2 quarters). Set `gate: keystone = open`. A keystone
   without planned obsolescence is Goodhart fuel.

## Conventions
- One keystone. Contexts may read it differently (`reset-for-context`),
  but the product has one center of gravity at a time.
- Never adopt a keystone by analogy ("we're like Slack, so 2,000
  messages"). Analogy proposes; only your cohorts dispose.
- Legibility is load-bearing: if the whole team can't recite it, it can't
  do its actual job, which is organizing people.

## Edge Cases
- **Too few users to cohort.** Say so. Output a provisional keystone tagged
  `hypothesis`, restrict `run-the-loop` to activation-only experiments, and
  set the review to "at 500 engaged users".
- **The causal probe fails.** A success of the method. Log the busted
  candidate in the lore ledger with its epitaph and return to step 2 for
  the next common fork.
- **Two candidates tie.** Pick the one the team can recite and affect.
- **Sunset date passed.** Re-run steps 1–5 against fresh cohorts before any
  other growth work; a stale keystone silently closes its gate.
