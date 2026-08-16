'use strict';

// End-to-end tests for bin/ai-skills.js. The CLI is spawned as a real
// subprocess so exit codes and stdout/stderr routing are covered too.

const { test, describe, before, after } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const CLI = path.join(__dirname, '..', 'bin', 'ai-skills.js');

let workdir;

before(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-skills-test-'));
});

after(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

function run(args, cwd = workdir) {
  return spawnSync(process.execPath, [CLI, ...args], { cwd, encoding: 'utf8' });
}

describe('ai-skills list', () => {
  test('exits successfully', () => {
    assert.strictEqual(run(['list']).status, 0);
  });

  test('reports a total count matching the skills on disk', () => {
    const skillsRoot = path.join(__dirname, '..', 'skills');
    const actual = fs
      .readdirSync(skillsRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .reduce(
        (sum, category) =>
          sum +
          fs
            .readdirSync(path.join(skillsRoot, category.name), { withFileTypes: true })
            .filter((d) => d.isDirectory()).length,
        0
      );

    const match = run(['list']).stdout.match(/(\d+) skills total/);
    assert.ok(match, 'expected a "N skills total" line in list output');
    assert.strictEqual(Number(match[1]), actual);
  });

  test('groups skills under their category headings', () => {
    const { stdout } = run(['list']);
    assert.match(stdout, /^reasoning\/$/m);
    assert.match(stdout, /^\s+grill-me$/m);
  });
});

describe('ai-skills add', () => {
  test('installs a skill with all three required files', () => {
    const target = path.join(workdir, 'single');
    const result = run(['add', 'grill-me', '--target', target]);

    assert.strictEqual(result.status, 0);
    for (const file of ['SKILL.md', 'README.md', path.join('examples', 'example.md')]) {
      assert.ok(
        fs.existsSync(path.join(target, 'grill-me', file)),
        `expected installed skill to contain ${file}`
      );
    }
  });

  test('copies content faithfully from the source skill', () => {
    const target = path.join(workdir, 'content');
    run(['add', 'grill-me', '--target', target]);

    const installed = fs.readFileSync(path.join(target, 'grill-me', 'SKILL.md'), 'utf8');
    const source = fs.readFileSync(
      path.join(__dirname, '..', 'skills', 'reasoning', 'grill-me', 'SKILL.md'),
      'utf8'
    );
    assert.strictEqual(installed, source);
  });

  test('installs multiple skills in one invocation', () => {
    const target = path.join(workdir, 'multi');
    const result = run(['add', 'pr-reviewer', 'security-auditor', '--target', target]);

    assert.strictEqual(result.status, 0);
    assert.ok(fs.existsSync(path.join(target, 'pr-reviewer', 'SKILL.md')));
    assert.ok(fs.existsSync(path.join(target, 'security-auditor', 'SKILL.md')));
  });

  test('defaults to .claude/skills when no target is given', () => {
    const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-skills-default-'));
    try {
      const result = run(['add', 'grill-me'], cwd);
      assert.strictEqual(result.status, 0);
      assert.ok(fs.existsSync(path.join(cwd, '.claude', 'skills', 'grill-me', 'SKILL.md')));
    } finally {
      fs.rmSync(cwd, { recursive: true, force: true });
    }
  });

  test('accepts -t as an alias for --target', () => {
    const target = path.join(workdir, 'alias');
    assert.strictEqual(run(['add', 'grill-me', '-t', target]).status, 0);
    assert.ok(fs.existsSync(path.join(target, 'grill-me', 'SKILL.md')));
  });

  test('fails with a nonzero exit code for an unknown skill', () => {
    const result = run(['add', 'not-a-real-skill', '--target', path.join(workdir, 'unknown')]);
    assert.notStrictEqual(result.status, 0);
    assert.match(result.stderr, /No skill named "not-a-real-skill"/);
  });

  test('installs valid skills but still fails when one name is unknown', () => {
    const target = path.join(workdir, 'partial');
    const result = run(['add', 'grill-me', 'nope-not-real', '--target', target]);

    assert.notStrictEqual(result.status, 0, 'exit code should signal the failure');
    assert.ok(
      fs.existsSync(path.join(target, 'grill-me', 'SKILL.md')),
      'the valid skill should still have been installed'
    );
  });

  test('fails when no skill name is given', () => {
    const result = run(['add']);
    assert.notStrictEqual(result.status, 0);
    assert.match(result.stderr, /Usage: ai-skills add/);
  });
});

describe('ai-skills help and unknown commands', () => {
  for (const args of [[], ['help'], ['--help'], ['-h']]) {
    test(`prints usage for "${args.join(' ') || '(no args)'}"`, () => {
      const result = run(args);
      assert.strictEqual(result.status, 0);
      assert.match(result.stdout, /Usage:/);
    });
  }

  test('fails on an unknown command', () => {
    const result = run(['frobnicate']);
    assert.notStrictEqual(result.status, 0);
    assert.match(result.stderr, /Unknown command/);
  });
});
