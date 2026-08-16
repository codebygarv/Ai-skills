# Example: Onboarding Guide Generator

## Input

A Node/Express + React monorepo. `package.json` scripts: `dev`, `test`, `build`. `server/` contains the API, `client/` contains the frontend, `server/routes/` has one file per resource, `server/db/schema.sql` defines the database.

## Output

# Onboarding Guide

## Setup

```bash
git clone <repo>
cd <repo>
npm install
cp .env.example .env   # fill in DB connection details
npm run dev             # starts both server and client
npm test                 # run the test suite
```

*(Verified against `package.json` scripts — confirm `.env.example` exists and lists the required variables before following this step as-is.)*

## Architecture Overview

This is a monorepo with two main parts:
- **`server/`** — Express API. Routes are split one-file-per-resource under `server/routes/`.
- **`client/`** — React frontend, consumes the API.
- **`server/db/schema.sql`** — the database schema; start here to understand the data model before diving into route logic.

A request flows: client → Express route (`server/routes/`) → business logic → database, and back.

## Key Files / Where to Start Reading

- `server/db/schema.sql` — understand the data model first, it'll make every route make more sense.
- `server/routes/` — pick one resource's route file end-to-end to see the full request-handling pattern used across the app.
- `client/src/` entry point (confirm exact path) — see how the frontend is structured and where it calls the API.

## Suggested First Task

Look for a small, self-contained bug or a "good first issue"-labeled ticket that touches one route file and its corresponding frontend call — this exercises the full request path (route → logic → DB → response → frontend rendering) without requiring architecture-level changes.

## Getting Help

*(Not included — no team channels or contact information were provided in the source material. Add this section once that information is available.)*
