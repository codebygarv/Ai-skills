# Example: Project Planner

## Input

> "Plan out building a real-time notifications system for our app (in-app + email, users can configure preferences)."

## Output

**Goal:** users receive real-time in-app notifications and configurable email notifications for relevant events (exact event list TBD with product).
**Out of scope (for this plan):** push notifications to mobile devices — noted as a likely future phase, not included here.

**Phase 1 — Foundation**
- Task 1.1: Define the notification event schema (event type, payload shape, recipient resolution).
- Task 1.2: Design the notification-preferences data model (per-user, per-event-type opt-in/out).
- Task 1.3: Stand up a notifications table/store to persist delivered in-app notifications.
*(1.2 and 1.3 can happen in parallel once 1.1 is done; both depend on 1.1.)*

**Phase 2 — Delivery**
- Task 2.1: Build the in-app real-time delivery mechanism (WebSocket/SSE push to connected clients). *Depends on: 1.1, 1.3.*
- Task 2.2: Build the email delivery path (template rendering + send via existing email provider). *Depends on: 1.1, 1.2.*
- Task 2.3: Wire preference checks into both delivery paths so opted-out users don't receive notifications. *Depends on: 1.2, 2.1, 2.2.*

**Phase 3 — UI**
- Task 3.1: In-app notification bell/inbox UI, consuming Phase 2's real-time feed. *Depends on: 2.1.*
- Task 3.2: Notification preferences settings page. *Depends on: 1.2.*

**Critical path:** 1.1 → 1.3 → 2.1 → 3.1 (the in-app real-time delivery + UI chain is the longest dependency chain; email delivery (2.2) can proceed in parallel once 1.1/1.2 are done and won't extend the timeline unless it's slower than expected).

**Risks/unknowns**
- **Event schema completeness (Task 1.1):** if the actual set of notifiable events isn't well understood yet, this could churn and block everything downstream — sequenced first, deliberately, so this surfaces before delivery mechanisms are built against a schema that turns out wrong.
- **Real-time delivery mechanism choice (Task 2.1):** WebSocket vs. SSE vs. polling has real infrastructure implications; if unproven in this codebase, consider a small spike before committing Phase 2 effort, since a wrong choice here is expensive to unwind after Phase 3 UI is built on top of it.
