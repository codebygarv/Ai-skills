#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const SKILLS_ROOT = path.join(REPO_ROOT, 'skills');
const DEFAULT_TARGET = path.join(process.cwd(), '.claude', 'skills');

function listAllSkills() {
  const categories = fs
    .readdirSync(SKILLS_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const skills = [];
  for (const category of categories) {
    const categoryPath = path.join(SKILLS_ROOT, category);
    const skillDirs = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const skill of skillDirs) {
      skills.push({ name: skill, category, dir: path.join(categoryPath, skill) });
    }
  }
  return skills;
}

function findSkill(name) {
  return listAllSkills().find((s) => s.name === name);
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cmdList() {
  const skills = listAllSkills().sort(
    (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
  );
  let lastCategory = null;
  for (const skill of skills) {
    if (skill.category !== lastCategory) {
      console.log(`\n${skill.category}/`);
      lastCategory = skill.category;
    }
    console.log(`  ${skill.name}`);
  }
  console.log(`\n${skills.length} skills total. Run "ai-skills add <name>" to install one.`);
}

function cmdAdd(names, opts) {
  if (names.length === 0) {
    console.error('Usage: ai-skills add <skill-name> [<skill-name> ...] [--target <dir>]');
    process.exitCode = 1;
    return;
  }
  const target = opts.target ? path.resolve(opts.target) : DEFAULT_TARGET;
  let failed = false;
  for (const name of names) {
    const skill = findSkill(name);
    if (!skill) {
      console.error(`✗ No skill named "${name}" found. Run "ai-skills list" to see available skills.`);
      failed = true;
      continue;
    }
    const dest = path.join(target, skill.name);
    copyDirRecursive(skill.dir, dest);
    console.log(`✓ Installed "${skill.name}" (${skill.category}) -> ${path.relative(process.cwd(), dest)}`);
  }
  if (failed) process.exitCode = 1;
}

function parseArgs(argv) {
  const opts = { target: null };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--target' || argv[i] === '-t') {
      opts.target = argv[++i];
    } else {
      positional.push(argv[i]);
    }
  }
  return { positional, opts };
}

function printHelp() {
  console.log(`ai-skills — install skills from AI Skills Hub into your project

Works with Claude Code, Google Antigravity, Cursor, Windsurf, GitHub Copilot, Roo Code, Aider, and custom agents.

Usage:
  ai-skills list                            List all available skills
  ai-skills add <skill-name>                 Install a skill into ./.claude/skills/
  ai-skills add <skill-name> --target <dir>  Install into a custom directory (e.g. .agents/skills or .cursor/rules)
  ai-skills add <a> <b> <c>                  Install multiple skills at once

Examples:
  npx github:codebygarv/Ai-skills add grill-me
  npx github:codebygarv/Ai-skills add pr-reviewer security-auditor --target .agents/skills
  npx github:codebygarv/Ai-skills list
`);
}

function main() {
  const [, , command, ...rest] = process.argv;
  const { positional, opts } = parseArgs(rest);

  switch (command) {
    case 'list':
      cmdList();
      break;
    case 'add':
      cmdAdd(positional, opts);
      break;
    case undefined:
    case 'help':
    case '--help':
    case '-h':
      printHelp();
      break;
    default:
      console.error(`Unknown command: "${command}"\n`);
      printHelp();
      process.exitCode = 1;
  }
}

main();
