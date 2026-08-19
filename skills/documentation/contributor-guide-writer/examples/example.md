# Example: Contributor Guide Writer

## Input

> "Write a CONTRIBUTING.md guide for our TypeScript CLI tool that uses npm and node 18+."

## Output

```markdown
# Contributing to ToolCLI

Thank you for your interest in improving ToolCLI! We welcome all contributions.

## 🛠️ Local Development Setup

1. **Prerequisites**: Ensure you have Node.js 18+ installed.
2. **Clone & Install**:
   ```bash
   git clone https://github.com/org/toolcli.git
   cd toolcli
   npm install
   ```
3. **Run Locally**:
   ```bash
   npm run dev -- list
   ```
4. **Run Tests & Linter**:
   ```bash
   npm test
   npm run lint
   ```

## 🚀 Submitting a Pull Request
- Create a feature branch (`git checkout -b feat/my-new-feature`).
- Ensure all tests pass before opening your PR.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages.
```
