---
name: empty-and-error-state-designer
description: Designs helpful, actionable zero-data states, 404/500 screens, and self-service error recovery interfaces.
---

## Purpose

Transform dead ends (empty lists, no search results, 404 errors, network failures) into productive, instructive user touchpoints with clear next actions.

## When to Use

- Designing initial zero-data screens before a user has created any content.
- Creating error boundary fallback screens and disconnected network states.
- Designing search and filter empty result states.

## What to Analyze

1. **Context & Cause**: Why is the screen empty? (First-time user, filtered out all records, cleared data, or network error).
2. **Visual Anchor**: Icon, illustration, or graphic that represents the state without feeling discouraging.
3. **Copywriting**: Friendly explanation of what this space will hold once populated.
4. **Primary Call to Action (CTA)**: Immediate action to resolve the state ("Create First Project", "Clear Filters", "Retry Connection").
5. **Alternative Paths**: Secondary fallback links (Documentation, Sample Data import).

## Output Format

- **UX Wireframe / Layout Breakdown**: Icon, Headline, Body, Primary CTA, Secondary Link.
- **Component Code**: React / HTML + CSS component with props.
- **Context Variations**: Variants for First-Time Empty vs Filtered Empty vs Error State.

## Avoid

- Blank blank screens with just a tiny gray "No data" string.
- Dead-end error messages without a retry or reset button.
