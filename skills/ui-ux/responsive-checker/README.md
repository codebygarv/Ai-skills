# 📱 Responsive Checker

Will this UI actually hold up on mobile and tablet, not just desktop?

## What it does

Analyzes layout code for breakpoint coverage, fixed vs. fluid sizing, overflow risk, touch target sizing, and layout reflow — flagging what breaks and at roughly what width.

## When to use it

- Reviewing responsive/adaptive layout code.
- Before shipping a UI meant to work across device classes.
- Debugging a specific "broken on mobile" report.

## Best for

- Pre-ship responsive layout review
- Catching hardcoded widths and overflow risks
- Verifying touch target sizing for mobile

## Example usage

> "Check if this layout is responsive" (paste component/CSS)

## Expected output

Findings grouped by viewport class (Mobile / Tablet / Desktop / All), each with what breaks, roughly at what width, and a concrete fix — noting which findings are code-inferred vs. worth a live visual check.

## Limitations

- Working from code alone can't catch every real-device quirk (safe-area insets, OS-specific keyboard behavior) — pair with an actual device/emulator check for anything shipping broadly.
- Won't second-guess deliberate, intentional responsive choices (e.g. hiding an element below a breakpoint) as bugs.
