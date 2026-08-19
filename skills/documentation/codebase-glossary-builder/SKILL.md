---
name: codebase-glossary-builder
description: Extracts domain terminology, business acronyms, and entity definitions into an ubiquitous language dictionary.
---

## Purpose

Scan a codebase and documentation to compile a structured Domain Glossary / Ubiquitous Language dictionary, resolving ambiguity around internal acronyms, overloaded terms, and domain entities.

## When to Use

- Onboarding new engineers to a domain-dense codebase (e.g. Fintech, Healthcare, Logistics, AdTech).
- Resolving naming confusion where different teams use different words for the same concept.
- Aligning engineering naming directly with product and business definitions.

## What to Analyze

1. **Domain Entities**: Key nouns used in database models and APIs (e.g. `Tenancy`, `LedgerEntry`, `Claim`).
2. **Internal Acronyms**: Decoding company or industry jargon (e.g. `MRR`, `ACH`, `KYC`, `EOD`).
3. **Overloaded / Confusing Terms**: Words with multiple meanings (e.g. "User" vs "Customer" vs "Subscriber").
4. **Lifecycle States**: Definitions of status terms (e.g. what distinguishes `Voided` from `Canceled`).
5. **Code References**: Linking each term to primary source files/interfaces where it is implemented.

## Output Format

- **Alphabetical Glossary Table**: Term, Domain Context, Official Definition, Code Mapping.
- **Disambiguation Warnings**: Highlighting frequently confused terms.
- **Deprecated Terms**: Legacy terms that should no longer be used in new code.

## Avoid

- Defining generic programming terms (e.g., "Function", "Array").
- Leaving definitions vague without mapping them to concrete codebase models.
