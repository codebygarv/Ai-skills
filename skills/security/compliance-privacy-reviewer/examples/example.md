# Example: Compliance & Privacy Reviewer

## Input

> "Review this for privacy/compliance gaps: we're adding location tracking to improve delivery estimates. We'll collect GPS coordinates every 30 seconds while the app is open, store it indefinitely for 'future analytics,' and it's covered by our general Terms of Service that users accept at signup."

## Output

**Data Minimization — gap**
- Collecting GPS every 30 seconds continuously while the app is open is likely far more granular than needed for "delivery estimates," which realistically needs location only during an active delivery, not the entire time the app is open.
  - Recommendation: scope collection to active-delivery windows only, and consider a coarser update interval if precise real-time tracking isn't actually required for the estimate calculation.

**Purpose Limitation — gap**
- Storing location data indefinitely for "future analytics" is a different, undefined purpose from the stated "improve delivery estimates" — using data collected for one purpose for a vague future one is a common compliance gap.
  - Recommendation: define the actual analytics use case now, or don't collect/retain beyond the delivery-estimate purpose without separate justification.

**Consent — gap**
- Location tracking is being covered by general ToS acceptance at signup, not specific, informed consent for location tracking itself. Precise location data is typically treated as sensitive and expected to have its own explicit consent step in most privacy frameworks, not bundled into a general ToS.
  - Recommendation: add a specific, clear consent prompt for location tracking (ideally at first use, not just signup), separate from general ToS acceptance, and make it withdrawable.

**Retention — gap**
- No defined retention period ("indefinitely") for precise location history is a significant gap — indefinite retention of granular location data is one of the more scrutinized patterns in privacy review, since it enables detailed movement-pattern reconstruction.
  - Recommendation: define a retention period tied to actual need (e.g. delivery-related location data retained for N days post-delivery, then deleted or aggregated/anonymized if genuinely needed for analytics).

**User Rights — needs confirmation**
- Not addressed in the description: can a user request deletion of their location history specifically? Worth confirming this is technically feasible given wherever this data ends up stored (analytics pipelines, backups, etc.).

**Reminder:** these are technical/design gaps flagged for legal and compliance review — not a determination of whether this design satisfies any specific regulation. Location data is commonly treated as sensitive personal data under multiple frameworks; get legal sign-off before finalizing the collection/retention approach.
