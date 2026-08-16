# 🎤 Interview Question Generator

Structured questions and a rubric, not improvised ones.

## What it does

Generates technical interview questions for a given role/skill area and seniority level, each paired with a rubric (strong/adequate/weak signals) and follow-up probes — so interviews are consistent and comparable across candidates and interviewers.

## When to use it

- Preparing to interview a candidate for a specific role/skill area.
- An interview loop needs consistent questions across interviewers.
- Existing questions feel stale or don't test what the role actually needs.

## Best for

- Building a structured interview loop
- Standardizing evaluation across multiple interviewers
- Refreshing a stale question bank

## Example usage

> "Generate interview questions for a mid-level backend engineer role, focused on API design and database skills, 45-minute slot."

## Expected output

A set of questions each with what it assesses, a rubric (strong/adequate/weak), and follow-up probes — ordered logically, with a total time-budget note.

## Limitations

- Questions are generated from the stated role/level/time budget — vague input produces vague/generic questions; more specific input produces better-targeted ones.
- Doesn't replace structured interviewer training on how to run the interview itself (pacing, avoiding bias) — this covers question content and rubric, not interview delivery.
