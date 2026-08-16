'use strict';

// Structural tests for the skill catalogue itself: every skill matches the
// contract in docs/SKILL_SPEC.md, and the README stays in sync with reality.

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SKILLS_ROOT = path.join(ROOT, 'skills');
const README = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');

function listSkills() {
  return fs
    .readdirSync(SKILLS_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((category) =>
      fs
        .readdirSync(path.join(SKILLS_ROOT, category.name), { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((skill) => ({
          name: skill.name,
          category: category.name,
          dir: path.join(SKILLS_ROOT, category.name, skill.name),
          relPath: `skills/${category.name}/${skill.name}`,
        }))
    );
}

const skills = listSkills();

function frontmatter(skillDir) {
  const content = fs.readFileSync(path.join(skillDir, 'SKILL.md'), 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (field) fields[field[1]] = field[2].trim();
  }
  return fields;
}

describe('catalogue is non-empty', () => {
  test('finds skills on disk', () => {
    assert.ok(skills.length > 0, 'no skills found — the other tests would vacuously pass');
  });
});

describe('every skill matches the spec', () => {
  for (const skill of skills) {
    describe(skill.relPath, () => {
      test('has SKILL.md, README.md, and examples/example.md', () => {
        for (const file of ['SKILL.md', 'README.md', path.join('examples', 'example.md')]) {
          assert.ok(fs.existsSync(path.join(skill.dir, file)), `missing ${file}`);
        }
      });

      test('has frontmatter whose name matches the folder', () => {
        const fields = frontmatter(skill.dir);
        assert.ok(fields, 'SKILL.md has no YAML frontmatter block');
        assert.strictEqual(fields.name, skill.name);
      });

      test('has a description substantial enough for discovery', () => {
        const fields = frontmatter(skill.dir);
        assert.ok(fields.description, 'frontmatter is missing "description"');
        assert.ok(
          fields.description.length >= 20,
          `description is too short to match against: "${fields.description}"`
        );
      });

      test('has a non-empty body below the frontmatter', () => {
        const content = fs.readFileSync(path.join(skill.dir, 'SKILL.md'), 'utf8');
        const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').trim();
        assert.ok(body.length > 0, 'SKILL.md has frontmatter but no instructions');
      });
    });
  }
});

describe('skill names are unique across categories', () => {
  test('no duplicate names', () => {
    const seen = new Map();
    const duplicates = [];

    for (const skill of skills) {
      if (seen.has(skill.name)) {
        duplicates.push(`${skill.name} (${seen.get(skill.name)} and ${skill.category})`);
      }
      seen.set(skill.name, skill.category);
    }

    // `ai-skills add <name>` resolves by bare name, so a collision would make
    // one of the two skills unreachable from the CLI.
    assert.deepStrictEqual(duplicates, [], `duplicate skill names: ${duplicates.join(', ')}`);
  });
});

describe('README stays in sync with the catalogue', () => {
  test('links to every skill', () => {
    const missing = skills.filter((skill) => !README.includes(`](${skill.relPath}/)`));
    assert.deepStrictEqual(
      missing.map((s) => s.relPath),
      [],
      'these skills exist on disk but are not linked in the README catalogue'
    );
  });

  test('has no links to skills that do not exist', () => {
    const linked = [...README.matchAll(/\]\((skills\/[a-z0-9-]+\/[a-z0-9-]+)\/\)/g)].map((m) => m[1]);
    const broken = [...new Set(linked)].filter((rel) => !fs.existsSync(path.join(ROOT, rel)));
    assert.deepStrictEqual(broken, [], 'README links to skill folders that do not exist');
  });

  test('skill count badge matches the real count', () => {
    const badge = README.match(/badge\/skills-(\d+)-/);
    assert.ok(badge, 'could not find the skills count badge in the README');
    assert.strictEqual(
      Number(badge[1]),
      skills.length,
      'the README badge is stale — update it when adding or removing skills'
    );
  });

  test('catalogue heading matches the real skill and category counts', () => {
    const categories = new Set(skills.map((s) => s.category));
    const heading = README.match(/(\d+) skills across (\d+) categories/);

    assert.ok(heading, 'could not find the "N skills across M categories" line');
    assert.strictEqual(Number(heading[1]), skills.length, 'skill count in README is stale');
    assert.strictEqual(Number(heading[2]), categories.size, 'category count in README is stale');
  });
});
