---
name: project-planner
description: Converts an idea into a structured development plan with milestones, tasks, dependencies, and implementation phases. Use when an idea or feature needs to be broken into a plan before work starts.
---

## Purpose

Turn an idea, feature request, or goal into a structured development plan — phases, milestones, concrete tasks, and their dependencies — so work can actually start in the right order instead of everyone improvising sequencing.

## When to Use

- An idea exists but hasn't been broken into actionable phases/tasks yet.
- Kicking off a nontrivial feature or project and want a shared plan before work starts.
- Coordinating work across multiple people/teams where task ordering and dependencies matter.

## What to Analyze / Do

1. **Clarify the goal and scope** — what does "done" look like; what's explicitly out of scope (pair with [Requirements Extractor](../../reasoning/requirements-extractor/) if the goal itself is still vague).
2. **Break into phases** — logical stages of work where each phase produces something usable or verifiable, not arbitrary time-boxed chunks.
3. **Break phases into concrete tasks** — specific enough that someone could pick up a task and know what "done" means for it.
4. **Identify dependencies** — which tasks block which others, and which can happen in parallel; flag the critical path.
5. **Flag risk and unknowns** — tasks with genuine uncertainty (unclear requirements, unproven technical approach) should be called out and, where possible, sequenced early so they surface problems before more work is built on top of them.
6. **Suggest milestones** — natural checkpoints where progress can be demonstrated or reviewed, not just "when everything is done."

## Output Format

- Goal statement and explicit out-of-scope notes.
- Phases as sections, each with its tasks listed and dependencies noted (e.g. "depends on: Phase 1, Task 2").
- A simple critical-path callout: the sequence of tasks that determines the minimum possible timeline.
- Risks/unknowns section, each with why it's risky and how early it's sequenced to de-risk it.

## Avoid

- Producing a plan so granular it's really a personal to-do list, or so vague it's not actionable ("build the backend" isn't a task).
- Ignoring dependencies and presenting tasks as if they're all independently parallelizable when they're not.
- Estimating specific durations/dates unless asked — sequencing and dependencies are the core value; time estimates require context (team size, velocity) this skill doesn't have by default.
