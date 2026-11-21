# Veyra Project Rules

These rules apply to founders, contributors, contractors, automation, and coding agents. They protect the commercial product from fabricated claims, unsafe shortcuts, and undocumented scope drift.

The protected baseline is a commercial, non-hackathon SaaS for practical relocation, travel, work, and everyday communication: eight English-to-target tracks across seven target languages, with `pt-BR` and `pt-PT` separate. One founder may initially implement both frontend and backend; the other may contribute later. The founders jointly own the project, but ownership percentages remain unresolved. “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified. Changing any of these facts requires explicit evidence and a synchronized documentation update.

## 1. Truth and evidence

1. Do not fabricate functionality, deployments, customers, revenue, research, testimonials, usage, demand, partnerships, credentials, reviews, or metrics.
2. Do not claim a task, test, review, deployment, or provider flow is complete without inspectable evidence.
3. Do not present mocks, fixtures, stubs, screenshots, generated assets, or test doubles as live functionality.
4. Record uncertainty using `PROPOSED`, `UNKNOWN`, or `BLOCKED`; never turn an assumption into a fact through repetition.
5. `PROGRESS.md` contains only actual work and actual checks. Include command/environment and outcome for test claims.
6. Do not claim production readiness until every applicable launch gate in `PRD.md` is evidenced.

## 2. Product and scope

1. Work only on an approved numbered task from `TASKS.md`, or add the necessary task and dependency before implementation.
2. Make the smallest coherent change that satisfies its acceptance criteria.
3. Do not expand the MVP with AI tutors, social systems, gamification, native applications, or other excluded features without an explicit product decision and synchronized document update.
4. Preserve the distinction between planned, available, reviewed, published, and completed.
5. Do not use “Veyra” as a cleared commercial brand. Trademark, domain, and name clearance remain unresolved until documented evidence exists.
6. Do not invent founder ownership percentages, authority, IP assignments, or agreements.

## 3. Learning content and assets

1. Do not invent, improvise, machine-translate, or silently “correct” translations, regional expressions, pronunciation guides, or linguistic review.
2. Learning content requires a recorded source/version, locale, reviewer, review state, and approval evidence before publication.
3. Mandarin requires reviewed Simplified Chinese and Pinyin. Brazilian and European Portuguese remain distinct in text, audio, and metadata.
4. Do not ship synthetic, placeholder, mislabeled, or unlicensed audio as real pronunciation.
5. Do not implement or claim pronunciation scoring without a separately approved, validated, and honestly communicated method.
6. Use only original or lawfully licensed fonts, icons, illustrations, audio, copy, and other assets. Preserve license and consent records.
7. Do not copy competitor interfaces, lesson content, branding, or protected assets.

## 4. Billing and commercial claims

1. Proposed prices are hypotheses, not validation or live offers.
2. Do not assume a provider supports Nigerian merchant eligibility, payouts, currencies, taxes, refunds, or the intended business entity. Verify and document each requirement.
3. Never show a fake payment confirmation or grant access from a client redirect, client-supplied flag, or unverified webhook.
4. Server-side verified, deduplicated, idempotently processed provider state is the authority for paid entitlements.
5. Sandbox success is labeled sandbox success; it is not evidence of production onboarding or payouts.
6. Do not collect live payments until legal terms, privacy, cancellation/refund behavior, support, provider approval, and end-to-end verification are complete.

## 5. Security and privacy

1. Use secure, maintained authentication. Do not build custom cryptography or insecure session handling.
2. Authenticate and authorize every protected server action. Scope user data by the authenticated subject and deny by default.
3. Treat all client input, URLs, uploads, provider events, and imported content as untrusted.
4. Never commit or hardcode production secrets, tokens, private keys, credentials, or personal data. Use managed environment configuration and rotate exposed credentials.
5. Use parameterized data access, validated inputs, safe output handling, least-privilege credentials, secure cookies/headers, rate limits, and audit trails appropriate to risk.
6. Minimize personal data; document purpose, retention, access, export, and deletion before production collection.
7. Keep production data out of development and test environments unless an explicitly approved, lawful, minimized procedure exists.
8. Review dependencies, migrations, logs, backups, and external services for security and privacy impact.
9. Do not log passwords, tokens, full cookies, payment details, or unnecessary personal content.
10. Stop and escalate suspected secret exposure, cross-user access, payment inconsistency, content-license breach, or critical/high security issue.

## 6. Engineering quality

1. Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `RULES.md`, `TASKS.md`, `PROGRESS.md`, and `AGENTS.md` before application implementation.
2. Preserve established repository work and inspect the current state before editing.
3. Prefer clear, typed, testable domain logic and narrow interfaces over premature abstraction.
4. Select libraries only after compatibility, security, maintenance, licensing, accessibility, runtime, and actual need are checked.
5. Add or update tests proportionate to the changed risk. Run relevant checks and report exact outcomes truthfully.
6. Handle loading, empty, error, retry, unavailable, unauthorized, interrupted, and responsive states.
7. Keep migrations reviewed, reversible where practical, and safe for staged rollout. Protect data before destructive operations.
8. Do not weaken linting, types, tests, authentication, authorization, accessibility, or security controls merely to make a check pass.
9. Do not leave misleading dead controls, fake data, placeholder success messages, or production-facing TODO behavior.
10. Record material architecture/product decisions and keep all seven governance documents consistent.

## 7. Accessibility and responsive design

1. Target WCAG 2.2 AA for all key journeys and test with more than automation.
2. Use semantic HTML, visible focus, logical keyboard order, programmatic names, sufficient contrast, and accessible status/error handling.
3. Support touch and keyboard; do not require hover, drag, gesture, sound, color, or motion alone.
4. Honor reduced motion; prevent autoplay; provide text equivalents for audio content.
5. Start at a 320px layout and verify zoom/reflow and real mobile behavior.
6. Do not accept a visually polished component that blocks assistive technology or small-screen use.

## 8. Documentation and change control

1. `PRD.md` is authoritative for product outcomes and scope; `ARCHITECTURE.md` for system boundaries; `DESIGN.md` for experience; `RULES.md` for non-negotiable standards; `TASKS.md` for execution; `PROGRESS.md` for evidence; `AGENTS.md` for agent behavior.
2. Resolve conflicts using the precedence defined in `AGENTS.md`; do not silently overwrite a decision.
3. Update `TASKS.md` and `PROGRESS.md` after verified work. A task is not complete until acceptance criteria and evidence are satisfied.
4. Keep proposed and actual state separate. Use dates and links/paths to evidence where possible.
5. Preserve any existing “Serial Hackathon Winner Playbook” in full. This commercial project neither replaces nor modifies it. If it appears later, do not edit it without explicit authorization.
6. Never rewrite unrelated user changes or use destructive version-control/file operations without explicit authority and verified targets.

## 9. Stop conditions

Stop, mark the item `BLOCKED`, and request a decision when work would require:

- Inventing a translation, review, audio license, legal conclusion, provider eligibility, ownership term, or research result.
- Handling real payments without verified provider/legal readiness.
- Exposing or weakening protection of user data, credentials, or cross-user boundaries.
- Materially expanding scope or contradicting an established decision.
- Destructive or irreversible data/repository action not explicitly approved.
- Claiming completion without the required evidence.
