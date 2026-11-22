import type { Metadata } from "next";
import Link from "next/link";

import { LessonPrototype } from "@/components/lesson-prototype";

export const metadata: Metadata = {
  title: "German accommodation interaction — Local Veyra prototype",
  description:
    "A local-only English test fixture for a deterministic lesson interaction. No reviewed German learning content is included.",
};

export default function GermanAccommodationPrototypePage() {
  return (
    <>
      <a className="skip-link" href="#lesson-content">
        Skip to lesson
      </a>
      <header className="lesson-header">
        <div className="lesson-shell lesson-header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Return to Veyra foundation"
          >
            <span className="brand-mark" aria-hidden="true">
              V
            </span>
            <span>
              Veyra
              <small>working name</small>
            </span>
          </Link>
          <div className="lesson-route-label">
            <span>Local lesson prototype</span>
            <strong>German accommodation</strong>
          </div>
        </div>
      </header>
      <main className="lesson-main" id="lesson-content">
        <div className="lesson-shell">
          <div className="lesson-boundary" role="note">
            Local-only · temporary session · English test content · no audio
          </div>
          <LessonPrototype />
          <p className="lesson-footnote">
            The planned German track remains unreviewed and unpublished. This
            route does not complete a production lesson or any gated task.
          </p>
        </div>
      </main>
    </>
  );
}
