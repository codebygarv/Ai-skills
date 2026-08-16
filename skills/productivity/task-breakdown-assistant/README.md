# ✅ Task Breakdown Assistant

Turn one big vague task into a checklist you can actually start on.

## What it does

Breaks a single ticket/task into concrete, sequenced subtasks — small enough to act on immediately — flags the riskiest one to tackle early, and calls out when a task is really two or three tasks bundled together.

## When to use it

- A single task feels too large or vague to just start on.
- Estimating a task requires understanding its real sub-steps.
- Handing a task to someone else and want to leave a concrete starting checklist.

## Best for

- Breaking down a vague or intimidating ticket
- Pre-estimation task decomposition
- Handoff checklists for delegated work

## Example usage

> "Break this down: add support for exporting user data to CSV."

## Expected output

A restated definition of done, a numbered, sequenced subtask checklist with dependency notes, and a flag on the riskiest subtask — plus an explicit split recommendation if the task turns out to be multiple tasks.

## Limitations

- Single-task scoped — for multi-task project phasing with cross-team dependencies, use [Project Planner](../../architecture/project-planner/) instead.
- Doesn't estimate time/effort by default — that requires context (skill level, familiarity with the codebase) this skill doesn't have unless told.
