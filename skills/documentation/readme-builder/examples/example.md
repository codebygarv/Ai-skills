# Example: README Builder

## Input

A small CLI tool. `package.json` shows:
```json
{
  "name": "json-diff-cli",
  "bin": { "jdiff": "./bin/jdiff.js" },
  "scripts": { "test": "vitest" },
  "dependencies": { "commander": "^11.0.0" }
}
```
Entry point takes two file paths and prints a diff. No existing README.

## Output

```markdown
# json-diff-cli

A tiny command-line tool for diffing two JSON files and printing a readable summary of what changed.

## Why

Comparing two JSON files by eye is error-prone once they're more than a few keys deep. `jdiff` prints just the additions, removals, and changed values, so you can see what actually differs at a glance.

## Installation

\`\`\`bash
npm install -g json-diff-cli
\`\`\`

## Usage

\`\`\`bash
jdiff old.json new.json
\`\`\`

Example output:
\`\`\`
+ user.email: "new@example.com"
- user.phone: "555-0100"
~ user.age: 30 -> 31
\`\`\`

## Development

\`\`\`bash
npm install
npm test
\`\`\`

## License

MIT
```

**Note:** the example output block above is illustrative — since the actual diff-formatting logic wasn't included in the source reviewed, confirm the real output format matches before publishing, or ask for a real sample run to paste in instead.
