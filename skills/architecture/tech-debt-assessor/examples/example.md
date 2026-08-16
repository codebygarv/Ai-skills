# Example: Tech Debt Assessor

## Input

> "Assess our tech debt. Known issues: the checkout module has no tests and we're about to add a new payment provider to it; we're 3 major versions behind on our web framework; there's a duplicated date-formatting helper in about 12 files; our deploy process needs someone to manually run 4 commands; and there's an old admin panel nobody has touched in 2 years that uses a deprecated template engine."

## Output

**Debt inventory**

| Item | Category | Cost of delay | Effort | Blocking? |
|---|---|---|---|---|
| Checkout module has no tests | Test debt | High — about to modify payment code with no safety net; a regression here is direct revenue loss | Medium | **Yes** — blocks safe payment-provider work |
| Manual 4-command deploy | Operational debt | Medium — recurring time cost every deploy, plus human error risk at exactly the worst moment | Low | No |
| 3 major versions behind on framework | Dependency debt | Medium — compounding; each version skipped makes the eventual upgrade harder, and security patches may not backport | High | No |
| Duplicated date helper in 12 files | Code debt | Low — annoying, but stable and not currently causing bugs | Low | No |
| Untouched admin panel on deprecated template engine | Design/dependency debt | Very low — nobody touches it, it works | High | No |

**Ranked paydown list**

1. **Add tests to the checkout module.** It's the only item that's actively blocking planned work, and it's guarding the highest-consequence code path in the product. Doing the payment-provider integration without this is accepting an unbounded regression risk on revenue-critical code.
2. **Automate the deploy.** Best effort-to-value ratio on the list — low effort, and it eliminates a recurring time cost plus a class of human error that tends to bite during incident response, when manual steps are most likely to go wrong.
3. **Framework upgrade.** Genuinely worth doing, but it's high-effort and not blocking anything today. Its cost compounds though, so it shouldn't be deferred indefinitely — schedule it deliberately rather than letting it slip another year.

**Explicitly deprioritized (not worth fixing now)**

- **Duplicated date helper.** Low effort to fix, but also near-zero cost to leave — it's stable, isn't causing bugs, and consolidating it touches 12 files for no measurable gain. Fix it opportunistically when someone's already in those files, not as dedicated work.
- **Old admin panel.** High effort, essentially zero cost-of-delay — nobody touches it and it works. Reassess only if someone actually needs to change it, or if the deprecated template engine develops a security issue. Rewriting untouched working code is the most common way debt-paydown effort gets wasted.
