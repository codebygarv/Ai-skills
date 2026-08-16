# Example: Task Breakdown Assistant

## Input

> "Break this down: add support for exporting user data to CSV."

## Output

**Definition of done:** a user can trigger an export of their own data and receive a downloadable CSV file containing it.

**Subtasks:**
1. Determine exactly which data fields belong in the export (confirm with product/design if not already specified).
2. Write the data-fetching logic that assembles a user's exportable data from wherever it currently lives (may span multiple tables/services).
3. Write the CSV-generation logic (field escaping, headers, encoding) — *risk flag, see below*.
4. Add the export trigger (button/endpoint) that kicks off the process.
5. Decide and implement delivery mechanism: immediate download vs. async job + email/notification when ready (depends on how large exports can realistically get — affects design significantly).
6. Add basic tests: empty data case, special characters/commas in fields (CSV escaping), and a large-dataset case if async delivery is chosen.

**Dependencies:** 2 must happen before 3; 5 should be decided before 4 is finalized, since the trigger's UX differs meaningfully between "instant download" and "we'll email you."

**Riskiest subtask: #3 (CSV generation).** Field escaping for values containing commas, quotes, or newlines is a common source of subtly broken exports that look fine in casual testing but break when real user data (e.g. a name with a comma, or free-text notes) hits it. Worth tackling this with real messy test data early, not last.

**Scope note:** if the answer to subtask 5 turns out to be "yes, exports need to be async with a notification," that's meaningfully more work (job queue, storage for generated files, notification delivery) than a synchronous download — worth confirming that decision before estimating the rest of the task, since it changes the shape of subtasks 4-6 substantially.
