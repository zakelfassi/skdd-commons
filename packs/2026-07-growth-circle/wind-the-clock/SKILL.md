---
name: wind-the-clock
description: Make the growth circle self-running — schedule its recurring checks (loop cadence, keystone sunset, first-light freshness, AEO probes, trust-ledger review) using whatever scheduling primitive the current harness offers, and record every schedule in GROWTH.md so it survives harness changes. Use when the circle's gates are open but nothing recurs, when a keystone sunset or instrumentation check exists only as a date nobody watches, after run-the-loop establishes a cadence, or when growth work keeps happening "whenever someone remembers".
metadata:
  pack: 2026-07-growth-circle
  forged-by: claude-fable-5
  forged-from: session-2026-07-02-growth-circle — the Growth Circle protocol (github.com/zakelfassi/growth-circle)
  forged-reason: "The circle's engine is monotony, and monotony dies without a clock. Dates written in a ledger that nothing watches are wishes; this skill converts them into schedules in whatever scheduler actually exists, and writes the schedule down so it outlives the session that created it."
  usage-count: "0"
---

# Wind the Clock

Every date in `GROWTH.md` that matters should have something watching it.
Find the harness's scheduling primitive, wire the circle's recurring
checks into it, and ledger the schedules.

## Gate
Requires `gate: aha = open` (there must be a circle to keep running).
Schedules for closed-gate work are allowed in one form only: a reminder to
re-attempt opening the gate.

## Inputs
- `GROWTH.md` (all sections — this skill reads dates and cadences out of
  the others' work), and the host environment's scheduling surface.

## Steps

1. **Discover the scheduler.** In order of preference, use what exists:
   the agent harness's native scheduling (cron tools, scheduled/recurring
   agents, loop commands), the repo's CI scheduler (e.g., a workflow on a
   cron trigger), the team's existing job runner, or — the floor — a
   `## Cadence` table a human wires into their own calendar. Never install
   new infrastructure just to have a clock; the humblest working scheduler
   wins.

2. **Inventory what recurs.** From the ledgers, collect the standing
   checks:
   - **Loop cadence** — run `run-the-loop` weekly/biweekly.
   - **Keystone sunset** — alert ahead of the review date; fire
     `find-the-keystone` re-derivation at it.
   - **Gaming tripwires** — periodic check of the keystone's listed gaming
     vectors against fresh data (keystone up, downstream flat → alarm).
   - **First-light freshness** — `gate: instrumented` silently closes when
     verification is stale (spec: 90 days); re-verify before it does.
   - **Probe suites** — AEO/agent-channel probes on their cadence.
   - **Trust-ledger review** — periodic human read; alarm on net-negative
     streaks.
   - **VALUE.md expiries** — claims nearing expiry need re-attestation or
     retraction.

3. **Schedule with a report path.** Each job states: what it checks, when,
   and **where its result lands** — an alert a human sees, or a ledger
   entry an agent appends. A check that reports nowhere is decoration.
   Scale frequency to what actually changes; a weekly product does not
   need hourly alarms.

4. **Ledger the clock.** Write every schedule to `GROWTH.md ## Cadence`:
   check, frequency, scheduler used, report path, owner. This is the
   portability layer — when the harness changes, the next agent rewires
   from this table instead of rediscovering the checks.

5. **Set the dead-man's switch.** One meta-check: does the cadence itself
   run? (Simplest form: the loop's own ledger entries are timestamped —
   an alert when the gap exceeds 2× cadence.) A clock nobody notices has
   stopped is worse than no clock.

## Conventions
- Alerts go to humans; bookkeeping goes to agents. An alarm that only an
  agent hears, for a judgment only a human can make (alienation, consent,
  keystone succession), is misrouted.
- Scheduled agent runs operate under the same gates and attribution rules
  as interactive ones — the clock grants punctuality, not autonomy.
- One schedule per check. A monolithic "do all growth things" cron
  produces unattributable failures.

## Edge Cases
- **No scheduler at all** (plain repo, no CI, harness without crons).
  Ship the `## Cadence` table with explicit next-due dates and a note at
  the top of GROWTH.md; a human calendar is a valid scheduler.
- **The harness changes** (new agent tool, CI migration). Rewire from
  `## Cadence`; the table is source of truth, the scheduler is an
  implementation detail.
- **Alert fatigue.** If a check alarms twice without action taken, the
  check is miscalibrated or the owner is wrong — fix the check or the
  owner in the table; never mute silently.
- **Scheduled run finds a closed gate.** It reports the closure and stops;
  it never bulldozes through gates just because it was scheduled.
