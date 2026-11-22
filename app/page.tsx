import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { TrackGrid } from "@/components/track-grid";

const situations = [
  "Arrive with context",
  "Practice with purpose",
  "Return with clarity",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section
          className="hero page-shell"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              Local foundation prototype · English interface
            </p>
            <h1 id="hero-title">
              Prepare for the conversations that shape a new place.
            </h1>
            <p className="hero-intro">
              Veyra is being designed for practical communication around
              relocation, work, travel, and everyday life. This local prototype
              shows the product direction—not finished lessons or a public
              service.
            </p>
            <div className="hero-actions" aria-label="Explore the prototype">
              <a className="button button-primary" href="#tracks">
                View planned tracks
              </a>
              <a className="button button-secondary" href="#method">
                See the learning approach
              </a>
              <Link
                className="button button-secondary"
                href="/prototype/german-accommodation"
              >
                Try the local interaction
              </Link>
            </div>
            <p className="prototype-note">
              No account, payment, personal data, reviewed lesson, or audio is
              present.
            </p>
          </div>

          <div
            className="situation-composition"
            aria-label="Illustrative product direction"
          >
            <div className="composition-heading">
              <span>One real situation</span>
              <strong>At a time</strong>
            </div>
            <div className="route-line" aria-hidden="true" />
            <div className="situation-list">
              {situations.map((situation) => (
                <div className="situation-item" key={situation}>
                  <span className="situation-marker" aria-hidden="true" />
                  <p>{situation}</p>
                </div>
              ))}
            </div>
            <p className="composition-caption">
              Illustrative interface copy only. No learning content is
              represented as reviewed or available.
            </p>
          </div>
        </section>

        <section
          className="method-section"
          id="method"
          aria-labelledby="method-title"
        >
          <div className="page-shell method-layout">
            <div className="section-heading">
              <p className="eyebrow">Product direction</p>
              <h2 id="method-title">Context before complexity.</h2>
              <p>
                The intended experience begins with a practical need, keeps
                language in context, and makes every unavailable or unreviewed
                state explicit.
              </p>
            </div>
            <ol className="method-list">
              <li>
                <span>Situation</span>
                <p>Start with the outcome a learner needs in everyday life.</p>
              </li>
              <li>
                <span>Practice</span>
                <p>
                  Use concise explanation and deterministic exercises after
                  review.
                </p>
              </li>
              <li>
                <span>Return</span>
                <p>
                  Revisit difficult phrases through clear, predictable progress
                  rules.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="tracks-section page-shell"
          id="tracks"
          aria-labelledby="tracks-title"
        >
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Eight-track roadmap</p>
            <h2 id="tracks-title">
              Seven languages. Two distinct Portuguese paths.
            </h2>
            <p>
              English is the only initial instructional language. Every track
              below is planned—not available, translated, reviewed, or
              published.
            </p>
          </div>
          <TrackGrid />
        </section>

        <section
          className="status-section"
          id="status"
          aria-labelledby="status-title"
        >
          <div className="page-shell status-layout">
            <div>
              <p className="eyebrow">Prototype boundary</p>
              <h2 id="status-title">A foundation, not a launch.</h2>
            </div>
            <div className="status-copy">
              <p>
                This build is local-only. It demonstrates responsive structure,
                visual direction, accessible navigation, and an English
                fallback.
              </p>
              <ul>
                <li>No sign-up, login, or personal-information collection</li>
                <li>No payment, subscription, analytics, or tracking</li>
                <li>
                  No published lessons, translations, images, fonts, or audio
                  assets
                </li>
                <li>
                  No claim of legal, commercial, linguistic, or launch approval
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-inner">
          <p>Veyra is a working name pending clearance.</p>
          <p>
            Local-only prototype · English fallback · Not publicly available
          </p>
        </div>
      </footer>
    </>
  );
}
