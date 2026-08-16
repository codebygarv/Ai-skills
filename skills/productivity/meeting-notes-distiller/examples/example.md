# Example: Meeting Notes Distiller

## Input

> Raw notes: "talked about the new pricing page. sarah thinks we should show annual pricing by default since it converts better, mike pushed back saying monthly is less confusing for new users and we should test both. decided to go with mike's suggestion for now, ship monthly-default and revisit after we have data. also talked about the mobile nav redesign, still not sure if we're doing a bottom tab bar or a hamburger menu, need design to mock up both before deciding. action: sarah to pull conversion data from the current pricing page by friday. also raised but didn't resolve: should the free trial be 14 or 30 days"

## Output

**Decisions**
- Ship the pricing page with **monthly pricing shown by default** (not annual), for now — revisit once conversion data is available.

**Action Items**

| Action | Owner | Deadline |
|---|---|---|
| Pull conversion data from the current pricing page | Sarah | Friday |
| Mock up both bottom tab bar and hamburger menu options for mobile nav | Design (unassigned individual) | Not stated |

**Open Questions**
- Mobile nav: bottom tab bar vs. hamburger menu — pending design mockups of both.
- Free trial length: 14 days vs. 30 days — raised but not discussed to resolution.

**Context:** the monthly-default decision was a compromise — Sarah favored annual-by-default for better conversion, Mike favored monthly-by-default for lower new-user confusion. Monthly was chosen as the safer default until real conversion data (from Sarah's Friday pull) can inform a data-backed decision either way.
