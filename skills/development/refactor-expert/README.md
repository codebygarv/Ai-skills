# ✂️ Refactor Expert

Simplify code that works but shouldn't be this complicated.

## What it does

Identifies unnecessary complexity — deep nesting, duplication, indirection that doesn't pay for itself — and proposes a concrete simpler implementation that preserves the exact same behavior.

## When to use it

- Code works but is hard to read, extend, or reason about.
- A function has accumulated conditionals/branches over time and needs a reset.
- Before extending code that's already showing strain.

## Best for

- Cleaning up organically-grown functions before adding new features
- Reducing nesting/branching in conditional-heavy code
- Replacing manual loops/indirection with clearer built-in patterns

## Example usage

> "Refactor this function, it works but it's a mess" (paste code)

## Expected output

Before/after code, a one-line explanation of why the after version is simpler, and an explicit confirmation that behavior — including edge cases — is preserved.

## Limitations

- Doesn't fix bugs — if the original code has a defect, pair with [Bug Hunter](../bug-hunter/) first so the refactor isn't preserving broken behavior.
- Won't propose "clever" one-liners that trade readability for brevity — simplicity means easier to follow, not fewer characters.
