# 🔥 GrillMe

Challenge my idea instead of agreeing with it.

## What it does

Takes an idea, implementation, architecture, or plan and attacks it the way a skeptical senior engineer would in a design review — surfacing weak assumptions, failure modes, and overlooked trade-offs, instead of politely agreeing.

## When to use it

- You want your thinking pressure-tested before you commit to it.
- You're about to make a decision that's expensive to reverse.
- You suspect your own plan is too clean and hasn't been argued against yet.

## Best for

- Architecture decisions
- Product ideas
- Technical decisions
- Code approaches
- Engineering proposals

## Example usage

> "I want you to challenge this idea: we're going to store all user sessions in a single global Redis instance with no sharding."

## Expected output

A ranked list of objections (strongest first), each with a concrete failure scenario, followed by the key open questions the idea can't currently answer.

## Limitations

- It's adversarial by design — it won't tell you an idea is fine unless it actually holds up under the listed checks. Don't use it when you just want a status check or encouragement.
- It doesn't replace real user research or load testing — it flags what to go verify, not a substitute for verifying it.
