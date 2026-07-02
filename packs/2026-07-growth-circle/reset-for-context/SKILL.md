---
name: reset-for-context
description: Detect when a playbook that works in one context is failing in another — market, language, platform, segment, or agent-mediated channel — and run the 99/1 reset protocol with native-informed deviations. Use when the same keystone reads very differently across segments, when entering a new market or platform, when metrics are flat somewhere the product "should" work, or when deciding how the product shows up in assistant recommendations.
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "The hardest growth lesson is that clear product value isn't clear everywhere — and the fix has a provenance rule: deviations are proposed by people native to the context, never by headquarters intuition wearing a localization hat."
  usage-count: "0"
---

# Reset for Context

99% of the framework stays fixed. 1% flexes — more if justified, and the
justification must come from someone native to the context.

## Gate
Requires `gate: keystone = open` — a context reset is measured as the
keystone read *per context*, so there must be a keystone to read. Contexts
can't be compared on vibes.

## Inputs
- `GROWTH.md` (`## Keystone`, `## Contexts`), keystone readings segmented
  by the suspect context, and a **native informant**: a person from the
  market/segment, a practitioner of the platform, or honest field research.
  For agent channels: transcripts of real assistant interactions about the
  product's category.

## Steps

1. **Confirm it's a context problem.** Segment the keystone by context. A
   uniform sag is a product problem (route to the loop); a sharp
   differential between contexts is a reset candidate.

2. **Name what the context changes.** With the native informant, walk the
   aha path as that context experiences it: language, trust conventions,
   device reality, social meaning of the core action, discovery habits.
   You are hunting the thing invisible from headquarters and obvious to a
   native — the detail that makes no sense to you and complete sense to
   them is usually it.

3. **Sort transfers from resets.** Most of the framework transfers — that's
   the 99%. List what doesn't, as specific deviations: a profile element, a
   different first-session path, a different channel, a different reading
   of the keystone's window.

4. **Justify or drop each deviation.** Every deviation carries: proposed-by
   (the native informant — provenance is the rule), the evidence, and the
   context-local keystone prediction. Deviations justified only by HQ
   intuition are dropped, by name.

5. **Test as experiments.** Deviations enter `run-the-loop` pre-registered
   and context-scoped. Never fork core value itself — only its expression.
   If value genuinely doesn't exist in this context, say so: redefine or
   leave beats limp localization.

6. **Record.** Write to `## Contexts`: what transfers, what resets,
   deviations with provenance, per-context keystone readings.

## Conventions
- "Translate the strings and ship" is not a reset; it's the null hypothesis
  the reset tests against.
- The agent-mediated channel is a context like any other: its natives are
  the assistants' actual outputs, its keystone reading is recommendation +
  first-use success. Treat probe transcripts as field research.
- Contexts multiply; resets shouldn't. If every context needs deep
  deviations, the product has no center — that's Ring 0 news, deliver it.

## Edge Cases
- **No native informant available.** Then no deviations ship. Recruit one,
  or run honest field research first. A simulated native (persona sim) may
  *propose* hypotheses but can never *justify* a deviation.
- **The deviation works but embarrasses HQ taste.** The context's keystone
  reading outranks aesthetics. Log the discomfort in the lore ledger; ship
  the deviation.
- **Two contexts want opposite deviations.** Fine — deviations are
  context-scoped by construction. Conflict only matters at the shared core,
  and the shared core doesn't fork.
