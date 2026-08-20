# Example: Git Hook Automation Designer

## Input

> "Set up ultra-fast pre-commit and commit-msg hooks for a TypeScript repo using Lefthook."

## Output

### `lefthook.yml`
```yaml
pre-commit:
  parallel: true
  commands:
    lint-and-format:
      glob: "*.{ts,tsx,js,json,md}"
      run: npx prettier --write {staged_files} && git add {staged_files}
    typecheck:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit
    secrets-audit:
      run: npx @gitleaks/gitleaks protect --staged --verbose

commit-msg:
  commands:
    commitlint:
      run: npx --no -- commitlint --edit {1}
```

### `commitlint.config.js`
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```
