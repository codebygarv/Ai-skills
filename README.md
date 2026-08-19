# AI Skills Hub

*A community-driven collection of reusable AI skills — for discovering, exploring, and reusing specialized agent capabilities.*

[![CI](https://github.com/codebygarv/Ai-skills/actions/workflows/ci.yml/badge.svg)](https://github.com/codebygarv/Ai-skills/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-100-blue)](#the-catalogue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/codebygarv/Ai-skills?style=flat&color=yellow)](https://github.com/codebygarv/Ai-skills/stargazers)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=codebygarv.Ai-skills)

```bash
npx github:codebygarv/Ai-skills add grill-me
```

That's it — one command drops a battle-tested skill directly into your AI workflow.

---

## 🌐 Universal Multi-Agent Compatibility (Not Just for Claude Code!)

While skills install by default to `.claude/skills/`, **AI Skills Hub is universal and agent-agnostic**. Every skill is authored in standard Markdown with YAML frontmatter following the [Skill Specification](docs/SKILL_SPEC.md), making them natively compatible with all major AI coding assistants and agent frameworks:

| AI Assistant / Agent | Install Target | How to Install |
|---|---|---|
| **Claude Code** | `.claude/skills/` | `npx github:codebygarv/Ai-skills add grill-me` |
| **Google Antigravity** | `.agents/skills/` | `npx github:codebygarv/Ai-skills add grill-me --target .agents/skills` |
| **Cursor** | `.cursor/rules/` | `npx github:codebygarv/Ai-skills add grill-me --target .cursor/rules` |
| **Windsurf** | `.windsurf/rules/` | `npx github:codebygarv/Ai-skills add grill-me --target .windsurf/rules` |
| **GitHub Copilot / Workspace** | `.github/skills/` or custom docs | `npx github:codebygarv/Ai-skills add grill-me --target .github/skills` |
| **Roo Code / Cline** | Custom rule directories | `npx github:codebygarv/Ai-skills add grill-me --target .roo/rules` |
| **Aider & Custom LLM Toolchains** | Any local path | `npx github:codebygarv/Ai-skills add grill-me --target .ai/skills` |

---

## See it in action

**[GrillMe](skills/reasoning/grill-me/)** — challenges an idea instead of agreeing with it.

> **You:** "Grill me on this: our new feature flag system stores flags as rows in the primary Postgres database, read on every request."
>
> **GrillMe:** Every request now takes a read-path dependency on your primary database for something that's almost always the same answer for minutes at a time — you've turned a config lookup into a scaling bottleneck for your most critical path.
>
> 1. **Assumption: flag reads are cheap.** At 10x traffic, this competes for connections with actual business queries — a flag check can degrade checkout.
> 2. **No caching layer.** A single flag toggle now means every pod issues fresh reads with zero staleness tolerance, when 30 seconds of staleness would've been invisible.
> 3. **Alternative not addressed:** a push-based cache or a dedicated flag service solves this entirely — why wasn't that considered?
>
> **Questions to answer before shipping this:** What's your target read latency at peak, and does this design hit it with headroom?

Full transcript: [`skills/reasoning/grill-me/examples/example.md`](skills/reasoning/grill-me/examples/example.md). 99 more skills below.

---

## What is this?

AI Skills Hub is a centralized catalogue of reusable AI skills designed to extend the capabilities of AI coding agents, assistants, and developer workflows.

Instead of every developer re-writing the same instructions, prompts, and agent behaviors from scratch, you can browse this catalogue, find a skill that matches what you need, read what it does, and drop it into your own AI workflow.

Each skill is a **self-contained package of instructions** that teaches an AI agent how to perform one specific type of task consistently — for example:

- **[GrillMe](skills/reasoning/grill-me/)** → aggressively reviews, questions, and challenges an idea, implementation, architecture, or plan.
- **[UI Auditor](skills/ui-ux/ui-auditor/)** → analyzes a UI implementation for design-system, responsiveness, accessibility, and consistency issues.
- **[PR Reviewer](skills/development/pr-reviewer/)** → reviews a pull request like a senior engineer and flags bugs, architectural problems, and maintainability issues.
- **[SQL Query Optimizer](skills/development/sql-query-optimizer/)** → analyzes execution plans (EXPLAIN), eliminates table scans, and designs targeted composite indexes.

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
Install / Copy Skill (Claude, Antigravity, Cursor, Windsurf, Copilot, etc.)
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

100 skills across 9 categories.

### 🧠 Reasoning & Thinking (`skills/reasoning/`)

| Skill | Description |
|---|---|
| [Cognitive Bias Detector](skills/reasoning/cognitive-bias-detector/) | Audits design documents, sprint estimates, and technical debates for cognitive biases like anchoring, sunk cost, and optimistic scoping. |
| [Decision Maker](skills/reasoning/decision-maker/) | Compares multiple candidate solutions against explicit criteria and trade-offs, and produces a structured recommendation. Use when the user has several real options and needs a defensible pick, not just a pros/cons list. |
| [Deep Think](skills/reasoning/deep-think/) | Breaks a complicated problem into smaller reasoning steps and evaluates multiple possible approaches before recommending one. Use for genuinely hard, multi-faceted problems, not routine tasks. |
| [Devils Advocate](skills/reasoning/devils-advocate/) | Deliberately takes the opposing position to a stated idea or decision and builds the strongest possible case against it, to identify weaknesses before commitment. Use when the user wants a genuine counter-argument, not agreement. |
| [First Principles Analyzer](skills/reasoning/first-principles-analyzer/) | Deconstructs problems down to fundamental truths and foundational constraints rather than reasoning by analogy or convention. |
| [Grill Me](skills/reasoning/grill-me/) | Aggressively reviews, questions, and challenges an idea, implementation, architecture, or plan instead of agreeing with it. Use when the user wants their thinking pressure-tested, not validated. |
| [Pre Mortem Facilitator](skills/reasoning/pre-mortem-facilitator/) | Runs prospective failure simulations by assuming a project or deployment has failed and working backward to identify vulnerabilities. |
| [Requirements Extractor](skills/reasoning/requirements-extractor/) | Converts vague, informal, or incomplete requirements into clear functional and technical requirements, and flags open questions. Use when a request is too ambiguous to implement directly. |
| [Root Cause Diagnoser](skills/reasoning/root-cause-diagnoser/) | Performs 5-Whys and Ishikawa fishbone causal analysis to discover root causes behind systemic bugs, outages, and regressions. |
| [Tradeoff Matrix Builder](skills/reasoning/tradeoff-matrix-builder/) | Constructs weighted, multi-attribute decision matrices evaluating technical, architectural, or library choices. |

### 💻 Development (`skills/development/`)

| Skill | Description |
|---|---|
| [Api Designer](skills/development/api-designer/) | Helps design REST APIs - routes, request/response structures, validation, status codes, and conventions. Use when designing new endpoints or reviewing an existing API's design for consistency. |
| [Bug Hunter](skills/development/bug-hunter/) | Searches code specifically for potential bugs, edge cases, race conditions, and incorrect assumptions rather than general style/quality. Use when the goal is finding what's broken, not improving what already works. |
| [Code Reviewer](skills/development/code-reviewer/) | Reviews source code for bugs, readability, maintainability, performance, and best-practice violations. Use for general-purpose code review of a diff, file, or function, not tied to a specific language concern. |
| [Concurrency Race Detector](skills/development/concurrency-race-detector/) | Identifies race conditions, mutex contention, unsafe shared state, and deadlocks in concurrent and async code. |
| [Database Architect](skills/development/database-architect/) | Reviews database schemas, relationships, indexes, constraints, and data modeling decisions. Use when designing a new schema or reviewing an existing one for correctness and scalability. |
| [Dependency Auditor](skills/development/dependency-auditor/) | Reviews package dependencies for unnecessary packages, outdated or risky patterns, duplication, and licensing/maintenance risk. Use when a dependency manifest has grown unchecked or before adding a new dependency. |
| [Error Handling Architect](skills/development/error-handling-architect/) | Designs structured error hierarchies, domain error mapping, and resilient fallback/retry mechanisms across applications. |
| [Graphql Schema Designer](skills/development/graphql-schema-designer/) | Designs ergonomic, performant GraphQL schemas with Relay pagination, input validation, and N+1 prevention. |
| [Memory Leak Detector](skills/development/memory-leak-detector/) | Identifies unclosed handles, event listener accumulation, retain cycles, and heap memory leak patterns. |
| [Microservices Boundary Definer](skills/development/microservices-boundary-definer/) | Applies Domain-Driven Design (DDD) bounded contexts and event storming to decompose monoliths into clean services. |
| [Performance Auditor](skills/development/performance-auditor/) | Looks for performance bottlenecks across frontend rendering, backend logic, database access, and network usage. Use when something is slow or before it needs to scale. |
| [Pr Reviewer](skills/development/pr-reviewer/) | Performs a pull-request-style review across an entire diff, organizing findings by severity and considering scope/intent, not just line-level code quality. Use when reviewing a full PR rather than a single function. |
| [Refactor Expert](skills/development/refactor-expert/) | Identifies unnecessarily complicated code and proposes cleaner implementations while preserving behavior. Use when code works but is harder to read or change than it should be. |
| [Security Auditor](skills/development/security-auditor/) | Analyzes code and implementations for common security weaknesses and unsafe practices - injection, auth flaws, secrets handling, unsafe deserialization, and access control. Use before shipping anything handling user input, auth, or sensitive data. |
| [Sql Query Optimizer](skills/development/sql-query-optimizer/) | Analyzes SQL queries, execution plans, index usage, and lock contention to optimize database operations. |
| [State Machine Designer](skills/development/state-machine-designer/) | Designs deterministic Finite State Machines (FSMs) and statecharts for complex UI workflows and backend order lifecycles. |
| [Typescript Guardian](skills/development/typescript-guardian/) | Focuses specifically on TypeScript type safety - any usage, unsound generics, interface design, and type narrowing. Use for a deep type-system review, not general code quality. |

### 🎨 UI / UX (`skills/ui-ux/`)

| Skill | Description |
|---|---|
| [Accessibility Auditor](skills/ui-ux/accessibility-auditor/) | Checks an interface against accessibility principles - keyboard navigation, semantic HTML, color contrast, labels, and screen-reader behavior. Use before shipping any user-facing UI, especially public-facing ones. |
| [Color Palette Generator](skills/ui-ux/color-palette-generator/) | Generates accessible, high-contrast, semantic design-system color tokens for light and dark modes. |
| [Data Table Ux Designer](skills/ui-ux/data-table-ux-designer/) | Designs dense data grids with sorting, filtering, column customization, sticky headers, and virtualization.', |
| [Design System Guardian](skills/ui-ux/design-system-guardian/) | Detects hardcoded colors, spacing, typography, widths, and other raw values that should use design-system tokens instead. Use when a project has an established design system/token set and you want to catch drift from it. |
| [Empty And Error State Designer](skills/ui-ux/empty-and-error-state-designer/) | Designs helpful, actionable zero-data states, 404/500 screens, and self-service error recovery interfaces. |
| [Micro Interaction Designer](skills/ui-ux/micro-interaction-designer/) | Designs subtle UI motion physics, state transitions, hover states, and haptic timings for polished user experiences. |
| [Onboarding Flow Optimizer](skills/ui-ux/onboarding-flow-optimizer/) | Streamlines product onboarding, wizard steps, time-to-value, and progressive disclosure for new users. |
| [Responsive Checker](skills/ui-ux/responsive-checker/) | Analyzes whether a UI will behave correctly across mobile, tablet, and desktop layouts. Use when reviewing responsive/adaptive layout code or before shipping a UI meant to work across screen sizes. |
| [Ui Auditor](skills/ui-ux/ui-auditor/) | Reviews an interface implementation for visual consistency, spacing, hierarchy, and design-system compliance. Use after implementing or changing UI, before it ships. |
| [Ui Text Formatter](skills/ui-ux/ui-text-formatter/) | Detects poorly formatted UI text and improves capitalization, spacing, hierarchy, and readability - labels, headings, button text, and messages. Use when reviewing user-facing copy for consistency. |

### 📝 Documentation & Communication (`skills/documentation/`)

| Skill | Description |
|---|---|
| [Adr Generator](skills/documentation/adr-generator/) | Formats Architecture Decision Records (ADRs) capturing problem context, considered alternatives, and consequences. |
| [Changelog Generator](skills/documentation/changelog-generator/) | Converts commits or development updates into clean, categorized release notes and changelogs. Use when preparing a release and raw commit history needs to become human-readable notes. |
| [Codebase Glossary Builder](skills/documentation/codebase-glossary-builder/) | Extracts domain terminology, business acronyms, and entity definitions into an ubiquitous language dictionary. |
| [Commit Message Expert](skills/documentation/commit-message-expert/) | Generates consistent, meaningful Git commit messages based on a diff or description of changes. Use when writing or reviewing a commit message, especially to follow Conventional Commits or a project's existing convention. |
| [Contributor Guide Writer](skills/documentation/contributor-guide-writer/) | Creates clear, welcoming CONTRIBUTING.md files, PR templates, and local dev onboarding guides for open source projects. |
| [Documentation Writer](skills/documentation/documentation-writer/) | Creates structured technical documentation from code, requirements, or existing notes. Use when a feature, module, or system needs written docs and none exist yet, or existing ones are out of date. |
| [Readme Builder](skills/documentation/readme-builder/) | Creates professional README files for GitHub projects, covering purpose, installation, usage, and contribution info. Use when a repo has no README or an outdated/thin one. |
| [Release Notes Writer](skills/documentation/release-notes-writer/) | Converts git commits, PR summaries, and changelogs into engaging, user-facing product release notes. |
| [Rfc Proposal Writer](skills/documentation/rfc-proposal-writer/) | Drafts formal technical Requests for Comments (RFCs) complete with motivation, architecture design, and rollout plan. |
| [Runbook Generator](skills/documentation/runbook-generator/) | Generates structured, copy-pasteable operational runbooks and disaster recovery SOPs for on-call engineering teams. |
| [Status Update Writer](skills/documentation/status-update-writer/) | Converts raw development notes into professional daily or weekly project status updates. Use when turning scattered notes/bullet points into a shareable update for a team or stakeholder. |

### 🧪 Quality & Testing (`skills/testing/`)

| Skill | Description |
|---|---|
| [Chaos Experiment Designer](skills/testing/chaos-experiment-designer/) | Designs chaos engineering experiments like network latency injection and node termination to validate resilience. |
| [Contract Testing Designer](skills/testing/contract-testing-designer/) | Establishes consumer-driven contract tests using Pact or OpenAPI to prevent breaking changes across services. |
| [E2e Scenario Planner](skills/testing/e2e-scenario-planner/) | Plans high-value end-to-end critical user journeys with Playwright or Cypress focusing on revenue-critical flows. |
| [Edge Case Hunter](skills/testing/edge-case-hunter/) | Focuses specifically on unusual inputs, boundary conditions, empty states, and unexpected user behavior that implementations commonly miss. Use to find what a normal test pass would skip over. |
| [Flaky Test Diagnoser](skills/testing/flaky-test-diagnoser/) | Diagnoses why a test passes sometimes and fails others - timing, shared state, ordering dependence, or external dependencies - and proposes a fix. Use when a test fails intermittently. |
| [Load Test Scenario Builder](skills/testing/load-test-scenario-builder/) | Designs realistic load and performance testing scenarios with k6, Locust, or JMeter for traffic simulations. |
| [Mock And Fixture Generator](skills/testing/mock-and-fixture-generator/) | Generates realistic, edge-case-rich mock fixtures and synthetic API payloads without leaking real PII. |
| [Mutation Testing Advisor](skills/testing/mutation-testing-advisor/) | Analyzes test suites to identify surviving mutants, weak assertions, and false confidence in line coverage. |
| [Test Case Designer](skills/testing/test-case-designer/) | Converts requirements into structured manual and automated test cases with clear steps and expected results. Use when you need a test plan/test case document, not code-level unit tests. |
| [Test Coverage Analyzer](skills/testing/test-coverage-analyzer/) | Identifies which behaviors are meaningfully untested and risk-ranks the gaps, rather than reporting line-coverage percentage. Use when deciding where to add tests next. |
| [Test Generator](skills/testing/test-generator/) | Creates meaningful unit, integration, and component tests based on implementation and requirements. Use when code needs test coverage and you want tests that verify behavior, not just tests that pad a coverage number. |

### 🏗️ Project & Architecture (`skills/architecture/`)

| Skill | Description |
|---|---|
| [Adr Writer](skills/architecture/adr-writer/) | Writes an Architecture Decision Record (ADR) documenting a decision, its context, the options considered, and its consequences. Use to record a decision that's already been made so future readers understand why. |
| [Architecture Reviewer](skills/architecture/architecture-reviewer/) | Reviews application architecture for scalability, coupling, separation-of-concerns, and maintainability issues. Use for system-level review, not individual file/function-level code review. |
| [Cache Strategy Planner](skills/architecture/cache-strategy-planner/) | Designs multi-tier caching architectures (CDN, Redis, memory), invalidation policies, and stampede mitigations. |
| [Cost Optimization Auditor](skills/architecture/cost-optimization-auditor/) | Analyzes cloud infrastructure and architectures to identify wasted spend and right-sizing opportunities. |
| [Disaster Recovery Planner](skills/architecture/disaster-recovery-planner/) | Formulates RTO/RPO targets, cross-region failover, backup verification, and split-brain recovery procedures. |
| [Event Driven Architect](skills/architecture/event-driven-architect/) | Designs event-driven systems with CloudEvents schemas, message brokers, idempotency keys, and dead-letter queues. |
| [Migration Planner](skills/architecture/migration-planner/) | Plans a safe, incremental migration (framework, database, service, or platform) with rollback points and a dual-running strategy. Use when replacing something that's already in production and can't just be swapped in one step. |
| [Project Planner](skills/architecture/project-planner/) | Converts an idea into a structured development plan with milestones, tasks, dependencies, and implementation phases. Use when an idea or feature needs to be broken into a plan before work starts. |
| [Rate Limiting Architect](skills/architecture/rate-limiting-architect/) | Designs distributed token bucket, leaky bucket, and tiered rate limiting architectures to prevent abuse. |
| [Tech Debt Assessor](skills/architecture/tech-debt-assessor/) | Inventories technical debt across a codebase and prioritizes it by cost-of-delay versus effort, producing a ranked paydown list. Use when debt is accumulating but it's unclear what to fix first. |
| [Zero Downtime Migration Planner](skills/architecture/zero-downtime-migration-planner/) | Plans blue-green rollouts, canary deployments, and expand-and-contract schema migrations with zero downtime. |

### 🔐 Security & Compliance (`skills/security/`)

| Skill | Description |
|---|---|
| [Auth Flow Reviewer](skills/security/auth-flow-reviewer/) | Deep review of authentication, authorization, session, and SSO flows specifically - token lifecycle, session fixation, logout behavior, and OAuth/SSO correctness. Use when reviewing or designing login, session, or SSO code specifically. |
| [Compliance Privacy Reviewer](skills/security/compliance-privacy-reviewer/) | Reviews how a feature or system handles PII, data retention, and consent against common privacy-framework principles (GDPR-style). Use when a feature collects, stores, or processes personal data - not a substitute for legal advice. |
| [Cors Csrf Auditor](skills/security/cors-csrf-auditor/) | Reviews Cross-Origin Resource Sharing configs, CSRF protections, SameSite cookies, and origin security. |
| [Cryptographic Practices Auditor](skills/security/cryptographic-practices-auditor/) | Reviews cipher algorithms, key derivation parameters (Argon2, bcrypt), token signing keys, and TLS settings. |
| [Data Anonymizer Specifier](skills/security/data-anonymizer-specifier/) | Formulates redaction rules and masking strategies for PII, secrets, and customer data in logs and staging. |
| [Dependency Vulnerability Triage](skills/security/dependency-vulnerability-triage/) | Triages CVEs and Dependabot/Snyk security alerts to assess real runtime exploitability and reduce alarm fatigue. |
| [Incident Postmortem Writer](skills/security/incident-postmortem-writer/) | Structures raw incident notes into a blameless postmortem - timeline, root cause, impact, and action items. Use after an incident/outage once the immediate fire is out and it needs to be documented. |
| [Rbac Abac Designer](skills/security/rbac-abac-designer/) | Designs Role-Based and Attribute-Based Access Control models, permission bitmasks, and multi-tenant boundary checks. |
| [Secrets Scanner](skills/security/secrets-scanner/) | Narrowly scans code and config for hardcoded secrets, credentials, API keys, and tokens. Use before a commit/PR, or when auditing a codebase for accidentally-committed secrets. |
| [Threat Modeler](skills/security/threat-modeler/) | Performs proactive, pre-implementation threat modeling (STRIDE-style) for a feature or system before it's built. Use when designing something new that touches user data, auth, money, or external input, before writing code. |

### ⚡ Productivity & Workflow (`skills/productivity/`)

| Skill | Description |
|---|---|
| [Ci Cd Pipeline Optimizer](skills/productivity/ci-cd-pipeline-optimizer/) | Audits CI/CD workflows (GitHub Actions, GitLab CI) to implement caching, parallelization, and cut build durations. |
| [Context Window Optimizer](skills/productivity/context-window-optimizer/) | Curates and condenses codebase context, file contents, and prompts to optimize LLM token usage and response quality. |
| [Interview Question Generator](skills/productivity/interview-question-generator/) | Generates technical interview questions plus an evaluation rubric for a given role or skill area. Use when preparing to interview a candidate and need structured, fair questions rather than ad hoc ones. |
| [Meeting Notes Distiller](skills/productivity/meeting-notes-distiller/) | Turns raw meeting notes or transcripts into structured decisions and action items. Use after a meeting when raw notes/transcript exist and need to become a shareable summary. |
| [Monorepo Workflow Architect](skills/productivity/monorepo-workflow-architect/) | Designs monorepo workspaces, dependency graphs, package sharing, and incremental build pipelines with Turborepo or Nx. |
| [On Call Handover Writer](skills/productivity/on-call-handover-writer/) | Formats structured end-of-shift summaries covering active incidents, degraded services, and pending follow-ups. |
| [Onboarding Guide Generator](skills/productivity/onboarding-guide-generator/) | Generates a new-engineer onboarding guide from a codebase's actual structure - setup steps, architecture overview, key files, and where to start. Use when a project has no onboarding doc or an outdated one. |
| [Prompt Enhancer](skills/productivity/prompt-enhancer/) | Refines vague, unstructured user prompts into clear, constraint-driven prompts with explicit formats and rules. |
| [Retro Facilitator](skills/productivity/retro-facilitator/) | Structures raw sprint retro notes into themes and concrete actions. Use after a retro when raw sticky-note-style input (what went well/poorly/to try) needs to become a clean summary with follow-through. |
| [Task Breakdown Assistant](skills/productivity/task-breakdown-assistant/) | Breaks a single ticket or task into concrete, actionable subtasks. Use when one task feels too large or vague to just start on, at the individual-task level - not whole-project planning. |

### 🛠️ Utilities & DevOps (`skills/utilities/`)

| Skill | Description |
|---|---|
| [Cron Expression Translator](skills/utilities/cron-expression-translator/) | Translates cron expressions to plain English and back. Use when a cron schedule in code/config is unclear, or when you know when something should run but not the cron syntax for it. |
| [Dockerfile Optimizer](skills/utilities/dockerfile-optimizer/) | Audits Dockerfiles for multi-stage build efficiency, layer caching, non-root security, and minimal base image footprint. |
| [Environment Config Auditor](skills/utilities/environment-config-auditor/) | Reviews .env/config files for consistency and missing required variables across environments. Use when comparing dev/staging/prod config, or debugging an "it works locally but not in prod" issue. |
| [Helm K8s Manifest Reviewer](skills/utilities/helm-k8s-manifest-reviewer/) | Checks Kubernetes manifests and Helm charts for resource limits, readiness probes, and security contexts. |
| [Log Message Improver](skills/utilities/log-message-improver/) | Improves logging statements for observability - structured logging, appropriate log levels, and useful context. Use when logs are too sparse, too noisy, or missing the context needed to debug an incident from them alone. |
| [Naming Consultant](skills/utilities/naming-consultant/) | Suggests consistent, well-reasoned names for variables, functions, files, or classes given context. Use when a name feels off, ambiguous, or inconsistent with surrounding conventions. |
| [Openapi Spec Generator](skills/utilities/openapi-spec-generator/) | Generates valid, expressive OpenAPI 3.1 specifications from code handlers, route declarations, and data schemas. |
| [Regex Explainer](skills/utilities/regex-explainer/) | Explains what a regular expression does in plain English, or builds one from a plain-English description. Use when a regex is unreadable at a glance, or when you know what you want to match but not the regex syntax for it. |
| [Semver Bump Advisor](skills/utilities/semver-bump-advisor/) | Analyzes git commits and breaking changes to determine exact semantic version increments (PATCH vs MINOR vs MAJOR). |
| [Terraform Iac Auditor](skills/utilities/terraform-iac-auditor/) | Inspects Terraform and OpenTofu Infrastructure-as-Code modules for drift resilience, security, and state locking. |

---

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

**Option 1 — CLI (recommended):** install directly from this repo with `npx`, no clone or npm publish required.

```bash
# install one skill
npx github:codebygarv/Ai-skills add grill-me

# install several at once
npx github:codebygarv/Ai-skills add pr-reviewer security-auditor

# see everything available
npx github:codebygarv/Ai-skills list

# install for Antigravity, Cursor, Windsurf, or custom location
npx github:codebygarv/Ai-skills add grill-me --target .agents/skills
npx github:codebygarv/Ai-skills add grill-me --target .cursor/rules
```

By default this drops each skill into `.claude/skills/<skill-name>/` in your current directory. Use `--target` (or `-t`) to install into any target folder for **Google Antigravity**, **Cursor**, **Windsurf**, **GitHub Copilot**, **Aider**, or custom setups.

**Option 2 — manual:** browse the catalogue above, open a skill's `README.md`, and copy the skill's folder into your agent's skills directory yourself.

Cloned this repo locally instead? Run the same commands with `node bin/ai-skills.js` in place of `npx github:codebygarv/Ai-skills`.

## Composing Skills

Skills are designed to be composable — stack them for deeper workflows:

```
GrillMe + Architecture Reviewer + Security Auditor = Deep Technical Review
```

## Development

No dependencies — the CLI and tests use only the Node standard library (Node 18+).

```bash
npm test     # run the test suite (Node's built-in runner)
npm run lint # validate every skill's structure and frontmatter
npm run check # both
```

Tests cover the CLI end-to-end (install, multi-install, `--target`, error paths, exit codes) and catalogue integrity — every skill matches [`docs/SKILL_SPEC.md`](docs/SKILL_SPEC.md), skill names are unique, and the README's catalogue links and skill counts stay in sync with what's actually on disk. Both run in CI on every push and PR.

## Contributing

New skills, fixes, and improvements are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md) for the process and quality bar.

## Long-Term Vision

Instead of every developer maintaining their own private collection of prompts and agent instructions, they discover specialized, vetted skills from one shared ecosystem — the place you go whenever you think *"I need my AI agent to be really good at this specific task."*
