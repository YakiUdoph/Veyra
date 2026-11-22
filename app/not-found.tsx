import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="state-page">
      <p className="eyebrow">Local prototype</p>
      <h1>This page is not part of the foundation.</h1>
      <p>The prototype currently contains one public product-direction page.</p>
      <Link className="button button-primary" href="/">
        Return to the prototype
      </Link>
    </main>
  );
}
