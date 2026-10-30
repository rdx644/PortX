import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeGitHub } from '../src/lib/github-schema.ts';
const account = { login: 'rdx644', public_repos: 32 };
const repository = {
  name: 'Demo',
  html_url: 'https://github.com/rdx644/Demo',
  language: 'TypeScript',
  pushed_at: '2026-10-30T00:00:00Z',
  fork: false,
  stargazers_count: 0,
};
test('excludes forks from authored project highlights', () => {
  const result = normalizeGitHub(
    account,
    [repository, { ...repository, name: 'Fork', fork: true }],
    [],
  );
  assert.deepEqual(
    result.repositories.map((r) => r.name),
    ['Demo'],
  );
});
test('rejects links outside the owner repository namespace', () => {
  for (const url of [
    'javascript:alert(1)',
    'https://example.com/rdx644/Demo',
    'https://github.com/another/Demo',
  ]) {
    assert.throws(() => normalizeGitHub(account, [{ ...repository, html_url: url }], []));
  }
});
test('rejects malformed profile and repository data', () => {
  assert.throws(() => normalizeGitHub({ login: 'other', public_repos: 32 }, [], []));
  assert.throws(() => normalizeGitHub(account, [{ ...repository, pushed_at: 'invalid' }], []));
});
test('tolerates unrelated public activity without losing repository data', () => {
  const result = normalizeGitHub(
    account,
    [repository],
    [
      { type: 'PushEvent', created_at: '2026-10-30T00:00:00Z', repo: { name: 'rdx644/Demo' } },
      { repo: { name: 'other/Demo' } },
      null,
    ],
  );
  assert.equal(result.events.length, 1);
  assert.equal(result.repositories.length, 1);
});
