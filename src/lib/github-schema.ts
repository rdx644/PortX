import { z } from 'zod';
const repo = z.object({
  name: z.string(),
  html_url: z
    .string()
    .url()
    .refine((v) => v.startsWith('https://github.com/rdx644/')),
  language: z.string().nullable(),
  pushed_at: z.string().datetime(),
  fork: z.boolean(),
  stargazers_count: z.number().int().nonnegative(),
});
const user = z.object({ public_repos: z.number().int().nonnegative(), login: z.literal('rdx644') });
const event = z.object({
  type: z.string(),
  created_at: z.string().datetime(),
  repo: z.object({ name: z.string().startsWith('rdx644/') }),
});
export function normalizeGitHub(profile: unknown, repositories: unknown, activity: unknown) {
  const account = user.parse(profile);
  const repos = z
    .array(repo)
    .parse(repositories)
    .filter((r) => !r.fork)
    .slice(0, 6);
  const events = z
    .array(z.unknown())
    .parse(activity)
    .flatMap((value) => {
      const parsed = event.safeParse(value);
      return parsed.success ? [parsed.data] : [];
    })
    .slice(0, 5);
  return {
    publicRepos: account.public_repos,
    repositories: repos.map((r) => ({
      name: r.name,
      url: r.html_url,
      language: r.language,
      updated: r.pushed_at,
      stars: r.stargazers_count,
    })),
    events: events.map((e) => ({ type: e.type, date: e.created_at, repo: e.repo.name })),
    fetchedAt: new Date().toISOString(),
  };
}
export type GitHubData = ReturnType<typeof normalizeGitHub>;
