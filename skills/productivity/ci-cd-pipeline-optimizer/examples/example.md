# Example: CI/CD Pipeline Optimizer

## Input

> "Optimize our GitHub Actions workflow that installs node modules and runs tests sequentially in 14 minutes."

## Output

```yaml
name: CI

on:
  pull_request:
    paths-ignore:
      - '**.md'
      - 'docs/**'

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        task: [lint, typecheck, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci --prefer-offline
      - run: npm run ${{ matrix.task }}
```
*Result: Matrix execution runs lint, typecheck, and test concurrently in ~2.5 minutes total (82% faster).*
