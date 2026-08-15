# Example: Architecture Reviewer

## Input

> A system where a single Node.js monolith handles API requests, background job processing (via an in-process cron library), and serves as the source of truth for a Postgres database — all deployed as one process, one instance, scaling by increasing that one instance's size.

## Output

**Understood architecture:** one monolithic process handles HTTP API, in-process scheduled background jobs, and direct DB access, scaled vertically (bigger instance) rather than horizontally.

**Coupling**
- Background jobs run in-process with the API server — a long-running or memory-heavy job can starve the same process handling live API requests.
  - *Scenario:* a nightly report-generation job that takes 10 minutes and holds significant memory causes API request latency to spike or the process to OOM during that window, directly affecting live users for work that has nothing to do with them.
  - *Recommendation:* extract background job execution into a separate worker process (even simply a second deployed instance of the same codebase running only the job runner), so job load and request load have separate resource budgets.

**Scalability**
- Vertical-only scaling (bigger instance) has a hard ceiling and doesn't provide redundancy — a single instance is also a single point of failure.
  - *Scenario:* at 3x current traffic, you're already sized into an expensive instance tier with no more room to scale up, and any crash/restart is full downtime, not a graceful failover.
  - *Recommendation:* move toward horizontal scaling for the API layer (multiple stateless instances behind a load balancer) — this requires confirming no request-local in-memory state (sessions, caches) currently assumes a single instance; audit that before doing this.

**Failure Isolation**
- Because jobs, API, and DB access are all one process, a bug in job code (e.g. an unhandled exception in a rarely-run job) can crash the entire process, taking down live API traffic too.
  - *Recommendation:* this is the same underlying issue as the coupling finding above — separating job execution into its own process would also fix this by containing job failures to the job process alone.

**Acceptable for now:** using Postgres directly as the source of truth with no separate cache layer is reasonable at current scale — don't add a caching layer preemptively; revisit if read load on the DB becomes the actual bottleneck under real traffic, not before.
