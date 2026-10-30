'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="wrap error-page">
      <h1>Something didn’t load.</h1>
      <p>Please try again, or reach me at sp9643@srmist.edu.in.</p>
      <button className="button button-primary" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
