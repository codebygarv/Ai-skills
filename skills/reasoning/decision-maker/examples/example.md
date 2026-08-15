# Example: Decision Maker

## Input

> "Help me decide: Postgres with JSONB vs. a dedicated document DB (MongoDB) for our new product catalog service. We're a 4-person team, already run Postgres for everything else, and the catalog schema will change frequently in the first year."

## Output

**Criteria (weighted for this decision):**
- Operational overhead (high weight — 4-person team)
- Schema flexibility (high weight — frequent changes expected)
- Query capability for the rest of the app (medium)
- Team familiarity (medium)

**Comparison:**

| Criterion | Postgres + JSONB | MongoDB |
|---|---|---|
| Operational overhead | Low — one system to run, already operated | High — new datastore, new backup/monitoring/on-call surface |
| Schema flexibility | Good — JSONB columns handle frequent shape changes without migrations | Good — native document model, same strength |
| Query capability | Strong — can join JSONB catalog data against relational order/user data in one query | Weaker — cross-datastore joins against the rest of the app require application-level stitching |
| Team familiarity | High — team already knows Postgres | Low — new query language and operational model to learn |

**Recommendation:** Postgres with JSONB. It ties on schema flexibility — the actual reason MongoDB was being considered — while winning decisively on operational overhead and team familiarity, both weighted high for a 4-person team, and it avoids introducing a second datastore that the rest of the app would need to join against at the application layer.

**This would change if:** the catalog service's query patterns turn out to need document-database-specific features (e.g. heavy nested-array aggregation MongoDB is purpose-built for) that JSONB handles poorly in practice, or if the catalog service is expected to scale independently to a point where sharing the primary Postgres instance becomes an operational risk.
