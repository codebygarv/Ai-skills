---
name: executive-summary-writer
description: Distills dense technical postmortems, architecture RFCs, and quarterly engineering metrics into crisp C-suite briefs.
---

## Purpose

Translate complex, jargon-heavy technical documents (incident postmortems, multi-quarter migration plans, architecture RFCs) into concise, high-impact executive summaries for CTOs, VPs, and non-technical stakeholders.

## When to Use

- Communicating major production outage postmortems to company leadership.
- Pitching large infrastructure investments requiring budget sign-off.
- Preparing quarterly engineering board updates and business impact reviews.

## What to Analyze

1. **Bottom Line Up Front (BLUF)**: What happened, what does it cost, and what is required in 2 sentences.
2. **Business Impact**: Quantify downtime, lost revenue, customer trust impact, and SLA penalty risks.
3. **Root Cause Simplified**: Explain technical failure without losing accuracy (eliminate deep stack trace trivia).
4. **Remediation & Investment**: Specific budget, headcount, or timeline asks with clear ROI.
5. **Timeline & Accountability**: Deadlines, owners, and next status checkpoint date.

## Output Format

- **BLUF Callout Box**: Core takeaway.
- **Executive Summary Document**: 1-page structured brief (Background, Business Impact, Root Cause, Action Plan).
- **Key Metric Table**: Before vs After or Outage Duration / Financial Cost.

## Avoid

- Filling summaries with pages of raw terminal logs and assembly/C++ debugging trivia.
- Sugarcoating severity or evading accountability.
