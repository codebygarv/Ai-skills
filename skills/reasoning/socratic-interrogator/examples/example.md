# Example: Socratic Interrogator

## Input

> "Ticket: Add a CSV export button to the user transaction dashboard."

## Output

### Key Ambiguities Identified
1. **Volume & Timeout Constraints**: Does export handle 50 rows or 500,000 rows? (Synchronous HTTP response vs Background email job).
2. **Field Scoping & Privacy**: Are sensitive PII fields (tax ID, masked card number) included in the export?
3. **Filtering Scope**: Does it export the currently filtered table view or the entire historical record?

### Socratic Questions for Stakeholder
1. *If a user has 250,000 transactions, should the browser download directly (risking timeout) or should we generate it asynchronously in worker and email a signed S3 link?*
2. *Should the export reflect current date/status filter pills active in the UI, or export unfiltered all-time records?*
3. *What timezone and currency formatting standard should be used in the exported CSV?*

### Recommended Defaults
- Export active filtered view with a limit of 10,000 rows synchronously; queue background email job for larger datasets.
