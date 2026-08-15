#!/usr/bin/env node
'use strict';

// Validates every skill under skills/<category>/<skill-name>/ against docs/SKILL_SPEC.md:
//   - has SKILL.md, README.md, examples/example.md
//   - SKILL.md has YAML frontmatter with non-empty "name" and "description"
//   - frontmatter "name" matches the folder name

const fs = require('fs');
const path = require('path');

const SKILLS_ROOT = path.join(__dirname, '..', 'skills');
const REQUIRED_FILES = ['SKILL.md', 'README.md', path.join('examples', 'example.md')];

const errors = [];

function parseFrontmatter(content, relPath) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push(`${relPath}: missing YAML frontmatter (expected a "---" block at the top of the file)`);
    return null;
  }
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const fieldMatch = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (fieldMatch) fields[fieldMatch[1]] = fieldMatch[2].trim();
  }
  return fields;
}

function checkSkill(category, skillName) {
  const skillDir = path.join(SKILLS_ROOT, category, skillName);

  for (const rel of REQUIRED_FILES) {
    const filePath = path.join(skillDir, rel);
    if (!fs.existsSync(filePath)) {
      errors.push(`${path.relative(process.cwd(), skillDir)}: missing required file "${rel}"`);
    }
  }

  const skillMdPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) return;

  const relSkillMd = path.relative(process.cwd(), skillMdPath);
  const content = fs.readFileSync(skillMdPath, 'utf8');
  const fields = parseFrontmatter(content, relSkillMd);
  if (!fields) return;

  if (!fields.name) {
    errors.push(`${relSkillMd}: frontmatter missing "name"`);
  } else if (fields.name !== skillName) {
    errors.push(`${relSkillMd}: frontmatter name "${fields.name}" does not match folder name "${skillName}"`);
  }

  if (!fields.description) {
    errors.push(`${relSkillMd}: frontmatter missing "description"`);
  } else if (fields.description.length < 20) {
    errors.push(`${relSkillMd}: description looks too short to be useful for skill discovery ("${fields.description}")`);
  }
}

function main() {
  if (!fs.existsSync(SKILLS_ROOT)) {
    console.error(`Skills directory not found at ${SKILLS_ROOT}`);
    process.exit(1);
  }

  const categories = fs
    .readdirSync(SKILLS_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let skillCount = 0;
  for (const category of categories) {
    const categoryPath = path.join(SKILLS_ROOT, category);
    const skillDirs = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const skill of skillDirs) {
      checkSkill(category, skill);
      skillCount++;
    }
  }

  if (errors.length > 0) {
    console.error(`\n✗ Skill lint failed with ${errors.length} error(s):\n`);
    for (const e of errors) console.error(`  - ${e}`);
    console.error('');
    process.exit(1);
  }

  console.log(`✓ ${skillCount} skills passed lint (structure + frontmatter checks).`);
}

main();
