# AI Skills Hub

*A community-driven collection of reusable AI skills — for discovering, exploring, and reusing specialized agent capabilities.*

---

## What is this?

AI Skills Hub is a centralized catalogue of reusable AI skills designed to extend the capabilities of AI coding agents, assistants, and developer workflows.

Instead of every developer re-writing the same instructions, prompts, and agent behaviors from scratch, you can browse this catalogue, find a skill that matches what you need, read what it does, and drop it into your own AI workflow.

Each skill is a **self-contained package of instructions** that teaches an AI agent how to perform one specific type of task consistently — for example:

- **[GrillMe](skills/reasoning/grill-me/)** → aggressively reviews, questions, and challenges an idea, implementation, architecture, or plan.
- **[UI Auditor](skills/ui-ux/ui-auditor/)** → analyzes a UI implementation for design-system, responsiveness, accessibility, and consistency issues.
- **[PR Reviewer](skills/development/pr-reviewer/)** → reviews a pull request like a senior engineer and flags bugs, architectural problems, and maintainability issues.
- **[UI Text Formatter](skills/ui-ux/ui-text-formatter/)** → detects poorly formatted UI text and improves capitalization, spacing, hierarchy, and readability.

## Core Vision

Think of it like a package registry, but for AI agent skills:

```
AI Skills Hub
      ↓
Search / Explore Skills
      ↓
Find "PR Reviewer"
      ↓
Read Documentation
      ↓
Install / Copy Skill
      ↓
Use it with your AI Agent
```

The long-term goal is to make AI skills **discoverable, reusable, shareable, version-controlled, community-driven, easy to install, easy to customize, and easy to contribute to.**

## What is an AI Skill?

An AI Skill is a structured set of instructions that gives an AI agent a specialized capability or behavior. A skill defines:

- What the AI should do
- When the AI should use the skill
- What information it should analyze
- What rules it should follow
- What output it should produce
- What it should avoid
- Examples of expected behavior

See [`docs/SKILL_SPEC.md`](docs/SKILL_SPEC.md) for the full folder structure and quality standards every skill in this repo follows.

## The Catalogue

30 skills across 6 categories.

### 🧠 Reasoning (`skills/reasoning/`)

| Skill | Description |
|---|---|
| [GrillMe](skills/reasoning/grill-me/) | Challenges ideas, assumptions, architecture, and decisions instead of blindly agreeing. |
| [Devil's Advocate](skills/reasoning/devils-advocate/) | Takes the opposing position and identifies weaknesses in an idea or decision. |
| [DeepThink](skills/reasoning/deep-think/) | Breaks complicated problems into smaller reasoning steps and evaluates multiple approaches. |
| [Decision Maker](skills/reasoning/decision-maker/) | Compares multiple solutions and produces a structured recommendation based on trade-offs. |
| [Requirements Extractor](skills/reasoning/requirements-extractor/) | Converts vague requirements into clear functional and technical requirements. |

### 💻 Development (`skills/development/`)

| Skill | Description |
|---|---|
| [Code Reviewer](skills/development/code-reviewer/) | Reviews source code for bugs, readability, maintainability, performance, and best practices. |
| [PR Reviewer](skills/development/pr-reviewer/) | Performs a pull-request-style review and organizes findings by severity. |
| [Bug Hunter](skills/development/bug-hunter/) | Searches code for potential bugs, edge cases, race conditions, and incorrect assumptions. |
| [Refactor Expert](skills/development/refactor-expert/) | Identifies unnecessarily complicated code and proposes cleaner implementations. |
| [TypeScript Guardian](skills/development/typescript-guardian/) | Focuses on TypeScript safety, types, generics, `any` usage, interfaces, and type design. |
| [API Designer](skills/development/api-designer/) | Helps design REST APIs, routes, request/response structures, validation, and conventions. |
| [Database Architect](skills/development/database-architect/) | Reviews database schemas, relationships, indexes, constraints, and data modeling. |
| [Security Auditor](skills/development/security-auditor/) | Analyzes implementations for common security weaknesses and unsafe practices. |
| [Performance Auditor](skills/development/performance-auditor/) | Looks for performance bottlenecks in frontend, backend, database, and network code. |
| [Dependency Auditor](skills/development/dependency-auditor/) | Reviews package dependencies for bloat, outdated patterns, duplication, and risk. |

### 🎨 UI / UX (`skills/ui-ux/`)

| Skill | Description |
|---|---|
| [UI Auditor](skills/ui-ux/ui-auditor/) | Reviews interfaces for visual consistency, spacing, hierarchy, and design-system compliance. |
| [Responsive Checker](skills/ui-ux/responsive-checker/) | Analyzes whether a UI behaves correctly across mobile, tablet, and desktop layouts. |
| [Accessibility Auditor](skills/ui-ux/accessibility-auditor/) | Checks interfaces against accessibility principles: keyboard nav, semantics, contrast, labels. |
| [Design System Guardian](skills/ui-ux/design-system-guardian/) | Detects hardcoded colors, spacing, typography, and widths that should use design tokens. |
| [UI Text Formatter](skills/ui-ux/ui-text-formatter/) | Improves UI copy, capitalization, labels, headings, and message consistency. |

### 📝 Documentation & Communication (`skills/documentation/`)

| Skill | Description |
|---|---|
| [Documentation Writer](skills/documentation/documentation-writer/) | Creates structured technical documentation from code, requirements, or notes. |
| [README Builder](skills/documentation/readme-builder/) | Creates professional README files for GitHub projects. |
| [Changelog Generator](skills/documentation/changelog-generator/) | Converts commits or dev updates into clean release notes and changelogs. |
| [Commit Message Expert](skills/documentation/commit-message-expert/) | Generates consistent, meaningful Git commit messages based on changes. |
| [Status Update Writer](skills/documentation/status-update-writer/) | Converts raw dev notes into professional daily/weekly project updates. |

### 🧪 Quality & Testing (`skills/testing/`)

| Skill | Description |
|---|---|
| [Test Generator](skills/testing/test-generator/) | Creates meaningful unit, integration, and component tests. |
| [Edge Case Hunter](skills/testing/edge-case-hunter/) | Focuses on unusual inputs, boundary conditions, empty states, and failure states. |
| [Test Case Designer](skills/testing/test-case-designer/) | Converts requirements into structured manual and automated test cases. |

### 🚀 Project & Architecture (`skills/architecture/`)

| Skill | Description |
|---|---|
| [Architecture Reviewer](skills/architecture/architecture-reviewer/) | Reviews application architecture for scalability, coupling, and maintainability issues. |
| [Project Planner](skills/architecture/project-planner/) | Converts an idea into a structured development plan with milestones and phases. |

> **Reserved for future contributions:** `security/`, `productivity/`, and `utilities/` are planned categories (see [Roadmap](#roadmap)) with no skills yet — open a PR if you'd like to seed one.

## Standard Skill Structure

Every skill follows the same layout:

```
skills/<category>/<skill-name>/
├── SKILL.md          # Instructions the AI agent actually reads (YAML frontmatter + body)
├── README.md          # Human-facing docs: what it does, when to use it, examples
└── examples/
    └── example.md     # A worked example of the skill in action
```

Full spec: [`docs/SKILL_SPEC.md`](docs/SKILL_SPEC.md). Contribution steps: [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Using a Skill

Today, usage is manual:

1. Browse the catalogue above and open a skill's `README.md`.
2. Copy the skill's folder (or just `SKILL.md`) into your AI agent's skills directory.
3. Reference or trigger it per your agent's conventions.

**Planned** — a one-line installer, so skills can be added like packages:

```bash
npx ai-skills add grill-me
# or
ai-skills install grill-me
```

which would place the skill into your agent's skills directory, e.g.:

```
.ai/
└── skills/
    ├── grill-me/
    ├── pr-reviewer/
    └── ui-auditor/
```

The exact installation mechanism is still to be decided (tracked in the roadmap below).

## Composing Skills

Skills are designed to be composable — stack them for deeper workflows:

```
GrillMe + Architecture Reviewer + Security Auditor = Deep Technical Review
```

## Roadmap

- [x] **Phase 1 — Foundation**: repo structure, skill spec, initial 30 skills, root docs, contribution guidelines.
- [ ] **Phase 2 — Discovery**: skill catalogue site, categories/tags/metadata, search, popularity indicators.
- [ ] **Phase 3 — Installation**: CLI for install/update/remove, versioning.
- [ ] **Phase 4 — Community**: community submissions, reviews, ratings, discussions, featured/trending skills.

## Contributing

New skills, fixes, and improvements are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md) for the process and quality bar.

## Long-Term Vision

Instead of every developer maintaining their own private collection of prompts and agent instructions, they discover specialized, vetted skills from one shared ecosystem — the place you go whenever you think *"I need my AI agent to be really good at this specific task."*
