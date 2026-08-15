# Example: UI Text Formatter

## Input

Screen copy:
- Heading: "Manage Your Team Members"
- Section heading: "Pending invites"
- Button: "OK"
- Button: "Delete"
- Error message: "Error 4029"
- Empty state: "No Data"

## Output

| Original | Suggested | Why |
|---|---|---|
| "Manage Your Team Members" | "Manage your team members" | Title Case heading vs. the app's other headings use sentence case (e.g. "Pending invites" right below it) — pick one convention; sentence case matches majority usage here. |
| "Pending invites" | *(no change)* | Already sentence case, consistent — kept as the reference point above. |
| "OK" | "Got it" or "Save changes" (depends on the action it confirms) | "OK" doesn't say what it does — a user scanning quickly can't tell if this saves, dismisses, or confirms something destructive. Name the action. |
| "Delete" | "Delete member" (or "Delete…" if it opens a confirmation step) | Bare "Delete" is ambiguous about what's being deleted, especially if this button appears in a list of members. Also: if it opens a confirmation dialog rather than deleting immediately, an ellipsis signals that. |
| "Error 4029" | "We couldn't save your changes. Please try again." (with error code shown in smaller/secondary text if needed for support purposes) | A raw error code communicates nothing to a user about what happened or what to do — lead with a plain-language explanation and next step. |
| "No Data" | "No pending invites yet — invite a teammate to get started." | Generic "No Data" doesn't tell the user what's missing or what to do about it; a specific, actionable empty state does. |

**App-wide pattern flagged:** headings mix Title Case and sentence case across this screen alone — worth a broader pass across other screens to confirm sentence case is in fact the intended app-wide convention before applying this fix everywhere.
