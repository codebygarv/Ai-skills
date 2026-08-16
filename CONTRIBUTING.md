# Contributing to AI Skills Hub

Thanks for considering adding to the catalogue. This doc covers how to propose a new skill, fix an existing one, and the quality bar submissions are held to.

## Before You Start

- Skim the [catalogue in the README](README.md#the-catalogue) to make sure a similar skill doesn't already exist. If one's close but not quite right, consider improving it instead of duplicating it.
- Read [`docs/SKILL_SPEC.md`](docs/SKILL_SPEC.md) — every skill must follow that folder structure and quality bar.

## Adding a New Skill

1. **Pick a category** from `skills/<category>/` (`reasoning`, `development`, `ui-ux`, `documentation`, `testing`, `architecture`, `security`, `productivity`, `utilities`, or a new one if it genuinely doesn't fit — say so in your PR description).
2. **Create the folder**: `skills/<category>/<skill-name>/` using a kebab-case name that matches what the skill is called.
3. **Add the three required files**:
   - `SKILL.md` — frontmatter (`name`, `description`) + instructions body. See the template in `docs/SKILL_SPEC.md`.
   - `README.md` — human-facing docs (what it does, when to use it, best-for, example, expected output, limitations).
   - `examples/example.md` — one realistic worked example.
4. **Self-check against the quality standards** in `docs/SKILL_SPEC.md`: Clear, Reusable, Deterministic, Focused, Composable, Documented.
5. **Add your skill to the catalogue table** in the root [`README.md`](README.md) under the right category.
6. **Open a PR** describing:
   - What the skill does and why it's useful
   - What it's best used alongside (if it composes with other skills)
   - Any limitations or known gaps

## Improving an Existing Skill

- Small fixes (typos, clearer wording, a missing edge case in the checklist): open a PR directly.
- Behavior changes (changing what the skill does, its output format, or its trigger conditions): explain the motivation in the PR — these affect anyone already using the skill.

## Skill Naming

- Folder name and the `name:` field in `SKILL.md` frontmatter must match exactly.
- Use kebab-case: `pr-reviewer`, not `PRReviewer` or `pr_reviewer`.
- Prefer a name that reads naturally as a command or role ("GrillMe", "Bug Hunter") over a generic one ("Helper", "Assistant").

## Review Checklist

A PR is ready to merge when:

- [ ] Folder structure matches `docs/SKILL_SPEC.md` exactly (`SKILL.md`, `README.md`, `examples/example.md`)
- [ ] `SKILL.md` frontmatter has both `name` and `description`, and `name` matches the folder
- [ ] The skill has one clear, focused purpose (not several unrelated jobs bundled together)
- [ ] `README.md` includes what it does, when to use it, and an example
- [ ] `examples/example.md` shows a realistic, non-trivial example
- [ ] Catalogue table in root `README.md` is updated

## Reporting Issues

Found a skill that gives inconsistent or low-quality output? Open an issue describing:

- Which skill (folder path)
- What input/context you gave it
- What you expected vs. what you got

## Code of Conduct

Be respectful, keep feedback constructive, and assume good faith — the goal is a catalogue people actually trust and reuse.
