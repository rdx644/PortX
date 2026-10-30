import { normalizeGitHub } from '@/lib/github-schema';
export const revalidate = 3600;
export async function GET() {
  try {
    const paths = [
      '/users/rdx644',
      '/users/rdx644/repos?sort=pushed&per_page=30',
      '/users/rdx644/events/public?per_page=20',
    ];
    const data = await Promise.all(
      paths.map(async (path) => {
        const response = await fetch(`https://api.github.com${path}`, {
          headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'Shubham-Portfolio' },
          next: { revalidate: 3600 },
          signal: AbortSignal.timeout(6000),
        });
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
        return response.json();
      }),
    );
    return Response.json(
      { available: true, ...normalizeGitHub(...(data as [unknown, unknown, unknown])) },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
    );
  } catch {
    return Response.json(
      {
        available: false,
        message: 'Live activity is temporarily unavailable. Explore the repositories on GitHub.',
      },
      { headers: { 'Cache-Control': 'public, s-maxage=60' } },
    );
  }
}
