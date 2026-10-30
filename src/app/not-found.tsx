import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="wrap error-page">
      <p className="eyebrow">404 / PATH NOT FOUND</p>
      <h1>A small detour.</h1>
      <p>This page doesn’t exist. The work is still here.</p>
      <Link className="button button-primary" href="/#work">
        Explore the projects →
      </Link>
    </main>
  );
}
