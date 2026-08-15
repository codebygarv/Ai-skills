# Example: Status Update Writer

## Input

> "fixed the login bug from yesterday. also fixed 2 other small bugs in the same area. started on the payments refactor, about 30% done. need design's input on the checkout flow before I can finish the UI part, been waiting 3 days. probably going to slip the payments work to next week if I don't get unblocked soon."

## Output

**Done**
- Fixed the login bug reported yesterday, plus two related smaller bugs in the same authentication code path.

**In Progress**
- Payments refactor — roughly 30% complete.

**Blocked**
- Checkout UI work is blocked on design input for the checkout flow — waiting 3 days so far. Need design's sign-off to proceed.

**Next**
- Continue payments refactor, contingent on unblocking checkout design input.

**Risk:** Payments refactor is at risk of slipping into next week if the checkout design blocker isn't resolved soon — flagging now rather than after it slips.

**Why this shape:** the three login-area bug fixes were grouped into one Done line since they're the same underlying work, not three separate accomplishments. The blocker explicitly states what's needed (design's input) and how long it's been outstanding (3 days), rather than a vague "blocked on design." The risk of slipping was called out as its own line rather than folded quietly into "Next," since burying it there would read as business-as-usual when it isn't.
