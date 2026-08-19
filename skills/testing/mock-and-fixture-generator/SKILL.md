---
name: mock-and-fixture-generator
description: Generates realistic, edge-case-rich mock fixtures and synthetic API payloads without leaking real PII.
---

## Purpose

Synthesize privacy-safe, edge-case-heavy test fixtures, mock API responses, and database seed data covering diverse data shapes, boundary values, and unicode variations.

## When to Use

- Seeding unit and end-to-end test suites with realistic mock records.
- Creating local mock APIs for frontend development before the backend is built.
- Replacing dangerous production database dumps with anonymized synthetic datasets.

## What to Analyze

1. **Data Model & Relationships**: Foreign key links, nested arrays, and enum constraints.
2. **Realistic Variety**: Realistic realistic names, addresses, emails, timestamps, and currency amounts.
3. **Boundary Edge Cases**: Zero values, max safe integers, empty strings, nulls, long multi-byte Unicode/emojis, and SQL injection strings.
4. **PII Safety**: Guaranteed zero real customer data (Faker/synthetic generated only).

## Output Format

- **JSON / TypeScript Fixture File**: Clean, typed mock dataset.
- **Factory Function**: Parameterized factory helper (e.g. `createMockUser({ role: 'admin' })`).
- **Edge Case Variants**: Specific payloads containing boundary test cases.

## Avoid

- Copying real production customer data into git repositories.
- Using trivial placeholders like `"test1"`, `"test2"` that miss boundary bugs.
