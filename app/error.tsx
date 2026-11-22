"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="state-page">
      <p className="eyebrow">Local prototype</p>
      <h1>Something interrupted this page.</h1>
      <p>
        No information was submitted. You can safely try rendering the page
        again.
      </p>
      <button className="button button-primary" onClick={reset} type="button">
        Try again
      </button>
    </main>
  );
}
