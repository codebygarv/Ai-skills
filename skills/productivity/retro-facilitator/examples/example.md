# Example: Retro Facilitator

## Input

> Raw notes:
> Went well: "shipped the pricing page on time", "good pairing session on the auth bug", "standup felt efficient this week"
> Went poorly: "too many meetings again", "kept getting pulled into unplanned work", "hard to find focus time", "the auth bug took way longer than expected", "still no clear owner for the flaky CI tests"
> To try: "maybe a no-meeting day", "rotate who handles unplanned interrupts"

## Output

**Went Well**
- Shipped the pricing page on schedule.
- Effective pairing session resolved the auth bug.
- Standup felt efficient this week.

**Went Poorly (clustered into themes)**
- **Focus-time fragmentation** — "too many meetings," "unplanned work pulling people off task," and "hard to find focus time" are the same underlying issue from three angles: the team's day is too interrupted to sustain deep work.
- **Unowned recurring problem** — flaky CI tests still have no clear owner, a standalone issue separate from the focus-time theme.
- **Estimation gap** — the auth bug taking much longer than expected is worth noting but may just be one data point; only worth a dedicated action if this is a repeated pattern (not enough info here to say).

**Ideas to Try**
- No-meeting day (directly addresses the focus-time theme).
- Rotate who handles unplanned interrupts (also addresses focus-time theme, from a different angle — spreading the interruption cost rather than reducing total interruptions).

**Action Items**

| Action | Owner | Related theme |
|---|---|---|
| Trial a no-meeting day for one sprint | Unassigned | Focus-time fragmentation |
| Assign an owner for flaky CI tests | Unassigned | Unowned recurring problem |

**Note:** "rotate who handles unplanned interrupts" was raised as an idea but not converted into an action item here — it's a second, somewhat competing approach to the same focus-time theme as the no-meeting day; worth the team explicitly choosing one to trial rather than doing both at once.
