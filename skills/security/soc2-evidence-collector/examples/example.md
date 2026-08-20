# Example: SOC 2 Evidence Collector

## Input

> "Prepare evidence for SOC 2 Control CC8.1: 'All software changes deployed to production are authorized, tested, and reviewed.'"

## Output

### Control Evidence Package: CC8.1 Change Management
```markdown
# Evidence Summary: CC8.1 Production Deployment Authorization

## 1. Automated Branch Protection Controls (GitHub)
- **Repository**: `github.com/org/core-api`
- **Branch**: `main`
- **Policy**:
  - Minimum 1 required approving review from designated `@org/maintainers` code owners.
  - Require status checks to pass before merging: `ci/test`, `ci/lint`, `security/snyk`.
  - Dismiss stale pull request approvals when new commits are pushed.
  - Enforce branch protection for administrators.

## 2. Sample Change Evidence (PR #892)
- **PR Link**: https://github.com/org/core-api/pull/892
- **Author**: @developer-jane
- **Reviewer Approval**: @senior-architect (Timestamp: 2026-08-14T10:22:00Z)
- **CI Test Run**: Passed 422 tests (Workflow ID: 9812450)
- **Deployment Tag**: `v2.4.1` deployed via GitHub Actions workflow `deploy-prod.yml`.
```
