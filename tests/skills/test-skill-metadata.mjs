import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

// Every skill in skills/ is discovered by directory on every harness, so each
// SKILL.md must satisfy the strictest loader: agentskills-style names that
// match the folder, a description within Codex's 1024-char limit, frontmatter
// a real YAML parser accepts, and an entry in the explicit Muse manifest.

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../..');
const skillsDir = join(repoRoot, 'skills');
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const skillDirs = readdirSync(skillsDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
  .map((e) => e.name)
  .sort();

// Minimal frontmatter reader for the top-level scalars loaders consume.
// Handles plain, single-quoted, double-quoted and block (> |) scalars, and
// flags the plain-scalar shapes YAML rejects ("key: a: b", "key: a #b").
function readFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/);
  if (!match) return null;
  const lines = match[1].split(/\r?\n/);
  const fields = {};
  const errors = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([A-Za-z0-9_-]+):(?:\s+(.*))?$/);
    if (!m) continue;
    const [, key, rawValue = ''] = m;
    const value = rawValue.trim();
    const continuation = [];
    let j = i + 1;
    while (j < lines.length && (lines[j].trim() === '' || /^\s/.test(lines[j]))) {
      continuation.push(lines[j]);
      j++;
    }
    if (/^[>|][+-]?$/.test(value)) {
      fields[key] = continuation.map((l) => l.trim()).join(value.startsWith('>') ? ' ' : '\n').trim();
    } else if (value.startsWith('"') || value.startsWith("'")) {
      const q = value[0];
      const joined = [value, ...continuation.map((l) => l.trim())].join(' ').trim();
      if (!joined.endsWith(q) || joined.length < 2) errors.push(`${key}: unterminated ${q}-quoted value`);
      const inner = joined.slice(1, -1);
      fields[key] = q === "'" ? inner.replace(/''/g, "'") : inner.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    } else if (value === '' || value.startsWith('[') || value.startsWith('{')) {
      fields[key] = value;
    } else {
      const joined = [value, ...continuation.map((l) => l.trim())].join(' ').trim();
      if (/:\s/.test(joined) || joined.endsWith(':')) errors.push(`${key}: plain value contains ": " (quote it)`);
      if (/\s#/.test(joined)) errors.push(`${key}: plain value contains " #" (quote it)`);
      fields[key] = joined;
    }
    i = j - 1;
  }
  return { fields, errors, body: match[2] };
}

test('every skills/ directory has a SKILL.md', () => {
  const missing = skillDirs.filter((d) => !existsSync(join(skillsDir, d, 'SKILL.md')));
  assert.deepEqual(missing, []);
});

test('every SKILL.md has loader-safe frontmatter', () => {
  const failures = [];
  for (const dir of skillDirs) {
    const file = join(skillsDir, dir, 'SKILL.md');
    if (!existsSync(file)) continue;
    const fm = readFrontmatter(readFileSync(file, 'utf8'));
    if (!fm) { failures.push(`${dir}: missing frontmatter`); continue; }
    for (const e of fm.errors) failures.push(`${dir}: ${e}`);
    const { name, description } = fm.fields;
    if (name !== dir) failures.push(`${dir}: name ${JSON.stringify(name)} must equal the folder name`);
    if (!NAME_RE.test(dir) || dir.length > 64) failures.push(`${dir}: folder name must be lowercase-hyphenated, <= 64 chars`);
    if (!description) failures.push(`${dir}: missing description`);
    else if (description.length > 1024) failures.push(`${dir}: description is ${description.length} chars (max 1024)`);
    if (fm.body.startsWith('---')) failures.push(`${dir}: body starts with a frontmatter delimiter`);
  }
  assert.deepEqual(failures, []);
});

test('Muse manifest lists exactly the skills on disk', () => {
  const manifest = JSON.parse(readFileSync(join(repoRoot, '.muse-plugin/plugin.json'), 'utf8'));
  const listed = manifest.capabilities.skills;
  assert.deepEqual(listed.map((s) => s.id), skillDirs, 'capabilities.skills ids must match skills/ (sorted)');
  for (const s of listed) {
    assert.equal(s.path, `skills/${s.id}/SKILL.md`);
    assert.ok(statSync(join(repoRoot, s.path)).isFile(), `${s.path} exists`);
  }
});
