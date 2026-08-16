# Example: Cron Expression Translator

## Input

> "What does this cron mean: `0 9 1,15 * 1-5`"

## Output

**Field breakdown:**
- `0` — minute: 0
- `9` — hour: 9
- `1,15` — day-of-month: the 1st or the 15th
- `*` — month: every month
- `1-5` — day-of-week: Monday through Friday

**Plain English:** runs at 9:00am, but only on days that are *both* the 1st or 15th of the month *and* a weekday.

**Gotcha — important:** most cron implementations (including standard Unix cron) treat day-of-month and day-of-week as **OR**, not AND, when both are restricted (non-`*`). So this expression most likely actually means: "9:00am on the 1st, the 15th, OR any weekday" — which is effectively **every weekday at 9am, plus the 1st/15th even if they fall on a weekend**. If the intent was genuinely "only run on the 1st/15th when they happen to be a weekday," this expression does **not** achieve that in most cron implementations — that logic would need to be handled inside the job itself (check the date and exit early if it doesn't match), not expressed purely in the cron fields.

**Timezone:** not specified by the expression itself — depends entirely on the timezone your scheduler/server is configured to run in. Confirm this before assuming "9am" means 9am in any particular timezone.

**Example next runs (assuming server-local time, next few matches):** if today is before the 1st of next month, the next few matches would be every weekday between now and month-end, plus the 1st and 15th of next month regardless of weekday — worth generating exact dates against your actual current date if precision matters.

**Recommendation:** if the actual intent was "1st and 15th, but only if a weekday," split this into either two separate cron jobs or add an explicit date check in the job code — the combined day-of-month + day-of-week fields won't express that AND condition on most cron engines.
