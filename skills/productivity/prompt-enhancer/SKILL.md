---
name: prompt-enhancer
description: Refines vague, unstructured user prompts into clear, constraint-driven prompts with explicit formats and rules.
---

## Purpose

Transform loose, ambiguous, or incomplete user requests into high-precision, constraint-driven prompts with explicit roles, context requirements, step-by-step reasoning directives, output schemas, and boundary rules.

## When to Use

- When an initial prompt produces hallucinated, generic, or off-target AI responses.
- Writing reusable prompt templates or system instructions for AI agent workflows.
- Refining complex coding or architectural prompts before executing them.

## What to Analyze

1. **Role & Persona**: Establish precise expertise level (e.g. "Senior Rust Systems Engineer").
2. **Context & Inputs**: Identify missing variables, code snippets, or environment specs.
3. **Explicit Constraints**: Negative rules (what NOT to do) and boundary constraints.
4. **Step-by-Step Directives**: Breaking multi-faceted tasks into ordered execution steps.
5. **Output Format & Schema**: Defining the exact structure (JSON schema, markdown headings, code-only).

## Output Format

- **Enhanced Prompt**: Ready-to-use structured prompt using standard tagging or markdown.
- **Key Improvements Explained**: Why each constraint was added.
- **Recommended Variables**: Placeholders for dynamic inputs.

## Avoid

- Overloading prompts with conversational filler phrases.
- Omitting negative constraints (which lead to unwanted verbosity or disclaimers).
