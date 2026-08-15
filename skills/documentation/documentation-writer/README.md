# 📖 Documentation Writer

Turn code or notes into documentation people will actually read.

## What it does

Produces structured technical documentation from source code, requirements, or notes — matched to the intended audience, grounded in actual (not idealized) behavior, with concrete examples.

## When to use it

- A feature/module/API has no documentation, or it's stale.
- You have working code that needs explaining for other engineers or stakeholders.
- Turning requirements or meeting notes into a reference doc.

## Best for

- New module/feature documentation
- Bringing stale docs back in line with actual code behavior
- Turning informal notes into a shareable reference doc

## Example usage

> "Write documentation for this module" (paste code) or "Document this feature based on these requirements notes."

## Expected output

A structured Markdown doc (overview → how it works → usage/examples → configuration → limitations, adapted to the content), with real code examples and explicit notes on what's out of scope.

## Limitations

- When working from code, documents what the code actually does — if code and intended behavior diverge, that's flagged rather than silently documenting the "intended" version.
- Doesn't generate diagrams/visuals — text and code-block only; note where a diagram would help and let a human/tool add it.
