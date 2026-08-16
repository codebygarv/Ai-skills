# Example: Interview Question Generator

## Input

> "Generate interview questions for a mid-level backend engineer role, focused on API design and database skills, 45-minute slot."

## Output

**Total time budget:** ~45 min — one deeper API design problem (~25 min including follow-ups), one database/query problem (~15 min), ~5 min buffer.

---

**Question 1 — API Design (25 min)**

*"Design the API for a simple task-management app: users can create projects, add tasks to a project, and mark tasks complete. Walk me through your endpoint design and why."*

- **Assessing:** resource modeling, REST conventions, thinking about edge cases (what happens completing an already-complete task, deleting a project with tasks in it).
- **Strong:** clear resource hierarchy, sensible status codes, proactively raises edge cases (cascade delete behavior, idempotency) without being prompted.
- **Adequate:** reasonable endpoint design, but only addresses edge cases when explicitly asked.
- **Weak:** RPC-style endpoints for everything (`/createTask`, `/completeTask`) with no reasoning about why, or no consideration of what happens to tasks when a project is deleted even after prompting.
- **Follow-ups:** "What status code do you return if someone tries to add a task to a project that doesn't exist?" / "How would you handle pagination if a project has thousands of tasks?"

---

**Question 2 — Database/Queries (15 min)**

*"Given a `users` table and an `orders` table, write a query to find users who have placed more than 3 orders in the last 30 days. Then: how would this query perform at 10 million orders, and what would you do about it?"*

- **Assessing:** SQL correctness (joins, aggregation, date filtering), and whether they can reason about performance/indexing, not just write a working query.
- **Strong:** correct query, proactively mentions indexing the date/user columns, recognizes a full table scan risk at scale.
- **Adequate:** correct query, only discusses performance when prompted.
- **Weak:** query has a correctness bug (e.g. wrong join type undercounting users with zero orders when that matters, or incorrect date boundary), and no meaningful performance reasoning even when prompted.
- **Follow-ups:** "What index would you add, and why that one specifically?" / "How would your approach change if 'last 30 days' needed to be a rolling window checked every hour?"

**Note:** both questions are calibrated for mid-level — they expect solid fundamentals and some proactive edge-case/performance thinking, but not senior-level distributed-systems depth (no expectation of discussing sharding, replication lag, etc. unless the candidate brings it up unprompted, which would be a strong positive signal beyond the baseline rubric).
