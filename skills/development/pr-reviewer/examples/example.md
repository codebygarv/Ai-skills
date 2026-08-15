# Example: PR Reviewer

## Input

> PR titled "Add email verification on signup." Diff touches `signup.ts` (adds a verification email send call), `emailService.ts` (new `sendVerificationEmail` function), and unrelated changes to `dashboard.ts` reformatting an unrelated component.

## Output

**Summary:** the PR adds email verification on signup by sending a verification email via a new `emailService` function — the core change appears to accomplish the stated intent, but the diff also includes an unrelated reformat of `dashboard.ts`.

**Blocking**
- `signup.ts`: the call to `sendVerificationEmail` isn't wrapped in error handling — if the email provider call throws, does signup itself fail? If so, a transient email-provider outage blocks all new signups, which is likely not intended.

**Should Fix**
- No test coverage added for the new verification flow — `emailService.ts`'s new function and the signup-path change both ship untested.
- `dashboard.ts` reformat is unrelated to this PR's stated purpose — pull it into a separate PR so this one stays reviewable and revertable as a single unit.

**Question**
- Is there a resend-verification-email flow, or is this a one-shot send with no retry if the user doesn't receive it?

**Verdict: Request changes.** The missing error handling around the email send is the main blocker — as written, an email provider hiccup would break signup entirely. The unrelated `dashboard.ts` change should also be split out before merge.
