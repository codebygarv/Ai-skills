# Example: Test Case Designer

## Input

> "Design test cases for this requirement: users can reset their password via a link emailed to them, valid for 1 hour."

## Output

| ID | Title | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|
| TC-01 | Successful password reset via valid link | Critical | User has an account; requested a reset link within the last hour | 1. Click the reset link from the email.<br>2. Enter a new valid password.<br>3. Confirm the new password.<br>4. Submit. | User's password is updated; user is redirected to login (or auto-logged-in per spec); confirmation message shown. |
| TC-02 | Reset link expired (>1 hour old) | High | User has a reset link older than 1 hour | 1. Click the expired reset link.<br>2. Observe the response. | User sees a clear "link expired" message and a way to request a new one; password is not changed. |
| TC-03 | Reset link already used once | High | User has already completed a reset with this link | 1. Click the same reset link a second time.<br>2. Attempt to submit a new password. | Link is rejected as already used/invalid; password is not changed a second time via the stale link. |
| TC-04 | New password fails validation rules | Medium | User has a valid, unexpired reset link | 1. Click the link.<br>2. Enter a password that violates policy (e.g. too short).<br>3. Submit. | Form shows a specific validation error; password is not changed. |
| TC-05 | Password and confirmation don't match | Medium | User has a valid, unexpired reset link | 1. Click the link.<br>2. Enter two different values in password/confirm fields.<br>3. Submit. | Form shows a mismatch error; password is not changed. |
| TC-06 | Reset requested for a non-existent email | Medium | No account exists for the entered email | 1. Request a password reset for an unregistered email. | System responds the same way as for a valid email (to avoid confirming account existence); no email is actually sent. |

**Skipped/needs clarification:** the requirement doesn't state whether a successful reset invalidates *other* outstanding reset links/sessions for the same account — flagging this rather than assuming an answer, since it affects at least one more test case (TC-07: "prior reset link invalidated after a successful reset elsewhere") once confirmed.
