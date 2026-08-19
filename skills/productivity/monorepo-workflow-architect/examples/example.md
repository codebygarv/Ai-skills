# Example: Monorepo Workflow Architect

## Input

> "Design a Turborepo pipeline for a monorepo with Next.js web app, React Native mobile app, and shared `@repo/ui` and `@repo/tsconfig` packages."

## Output

### `turbo.json` Pipeline Configuration
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### Internal UI Package (`packages/ui/package.json`)
```json
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./button": "./src/button.tsx"
  },
  "devDependencies": {
    "@repo/tsconfig": "workspace:*"
  }
}
```
