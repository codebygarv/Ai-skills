---
name: task-breakdown-assistant
description: Breaks a single ticket or task into concrete, actionable subtasks. Use when one task feels too large or vague to just start on, at the individual-task level - not whole-project planning.
---

## Purpose

Break one task/ticket down into concrete, sequenced subtasks small enough to just start on. Deliberately atomic and single-task scoped — for whole-project phasing and cross-team dependencies, see [Project Planner](../../architecture/project-planner/) instead.

## When to Use

- A single ticket/task feels too large or vague to start on directly.
- Estimating a task requires understanding its real sub-steps first.
- Handing a task to someone else and want to leave them a concrete starting checklist.

Differs from [Project Planner](../../architecture/project-planner/): that skill produces phases/milestones for a multi-task project; this skill produces the subtask checklist for one task within that project.

## What to Analyze / Do

1. **Clarify the actual definition of done** for the task, if it's not already explicit.
2. **Break into subtasks** small enough that each one is independently completable in a short sitting, not another multi-day task in disguise.
3. **Sequence them** — note which subtasks block others, and which can happen in any order.
4. **Flag the riskiest/most uncertain subtask** — the one most likely to reveal a surprise or take longer than expected — and suggest tackling it earlier rather than last.
5. **Keep scope honest** — if breaking the task down reveals it's actually two or three separate tasks bundled together, say so explicitly rather than forcing a single flat checklist.

## Output Format

- Definition of done, restated briefly.
- Numbered subtask checklist, with dependency notes ("after subtask 2") where relevant.
- One line flagging the riskiest subtask and why.
- If scope creep was found, a explicit note recommending the task be split.

## Avoid

- Producing subtasks so granular they're just narrating obvious steps ("open the file," "save the file").
- Producing subtasks so broad they're just smaller versions of "do the whole task."
- Silently absorbing a task that's actually multiple unrelated tasks — flag it instead of forcing a single checklist.
