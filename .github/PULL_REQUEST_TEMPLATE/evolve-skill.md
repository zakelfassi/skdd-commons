# Evolve a skill

## Skill

<!-- Which existing Commons skill this evolves -->

## The edge case

<!-- What actually happened in the wild that the skill didn't cover. Be concrete: the task, the input, where the skill's steps fell short. Evolution PRs without a concrete edge case are style debates — welcome, but label them as such. -->

## Before / after behavior

<!-- What an agent following the skill did before this change, and what it does after. -->

## Checklist

- [ ] `forged-*` provenance left intact (you're adding a chapter, not rewriting the author)
- [ ] Still passes `pnpm dlx @zakelfassi/skdd validate <dir> --strict` (≤200 lines — split if you outgrew it)
- [ ] No machine-local state added (`usage-count` stays as upstream, no `last-used`)
