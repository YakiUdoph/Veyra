# Veyra Task Plan

## 1. Task conventions

- Status values: `TODO`, `IN PROGRESS`, `BLOCKED`, `COMPLETED`.
- Every unimplemented item begins as `TODO`.
- A task becomes `COMPLETED` only after its acceptance criteria and evidence requirements are satisfied.
- Dependencies refer to task IDs. Tasks may be refined, but scope or decisions must remain consistent with the other governance documents.
- Application implementation requires explicit authorization after Phase 0.

### Current baseline and phase boundary

- Veyra is a commercial, non-hackathon SaaS for practical relocation, travel, work, and everyday communication.
- Scope is eight English-to-target tracks across seven target languages; `pt-BR` and `pt-PT` are separate tracks.
- One founder may initially implement both frontend and backend; the other may contribute later.
- The founders jointly own the project, but ownership percentages and the governing agreement remain unresolved.
- “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified.
- Documentation work has begun and D0.1 is complete. Business/editorial gates remain unresolved. Application implementation has not started and no application code exists.

## 2. Phase 0 — documentation (current task)

### D0.1 — Establish governance baseline — COMPLETED

- **Dependencies:** None.
- **Scope:** Inspect the repository and create the seven required project-specific governance documents without application code.
- **Acceptance criteria:** All seven files exist; planned vs actual state is explicit; unresolved brand, ownership, payment, linguistic review, and audio licensing questions are recorded; documents are consistent; existing work is preserved.
- **Checks:** Repository inventory, document presence check, cross-document terminology review, and Git diff review.
- **Completion evidence:** Root files `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `RULES.md`, `TASKS.md`, `PROGRESS.md`, and `AGENTS.md`; checks recorded in `PROGRESS.md`.

### D0.2 — Audit and stage the Phase 0 baseline — COMPLETED

- **Dependencies:** D0.1.
- **Scope:** Read all seven documents, inspect the repository and Git state, reconcile baseline terminology and dependencies, update evidence, run the required Git checks, and stage only the seven governance documents. Do not implement application code.
- **Acceptance criteria:** All seven documents consistently preserve the commercial/non-hackathon scope, eight tracks across seven target languages, practical communication focus, initial one-founder full-stack delivery model, unresolved joint-ownership percentages, working-name status, and absence of verified customers/payments/translations/audio; contradictions and unclear dependencies are corrected without inventing approvals; implementation remains explicitly not started; only the seven documents are staged; no commit or push occurs.
- **Checks:** Complete document read, repository inventory, `git status --short`, `git diff --check`, staged-file list, and no-commit verification.
- **Completion evidence:** Audit entry and exact command outcomes in `PROGRESS.md`; staged paths from `git diff --cached --name-only`.

## 3. Phase 1 — decisions and discovery

### T1.1 — Resolve founder governance — TODO

- **Dependencies:** D0.1.
- **Acceptance criteria:** Founders record ownership percentages, IP assignment, roles, decision rights, vesting/exit considerations as applicable, and who can approve product/legal/financial changes through qualified advice.
- **Tests/checks:** Both founders review the final agreement; counsel/accounting review where appropriate.
- **Evidence:** Signed/approved agreement location and non-sensitive decision summary; do not commit confidential terms unless intentionally approved.

### T1.2 — Conduct brand and domain clearance — TODO

- **Dependencies:** D0.1.
- **Acceptance criteria:** Relevant name, trademark, company, domain, and social-handle checks are documented for intended markets; founders decide whether to keep or replace the working name.
- **Tests/checks:** Qualified legal review where appropriate; verify domain availability at decision time.
- **Evidence:** Dated decision and counsel/search references without claiming broader clearance than performed.

### T1.3 — Validate user problems and commercial hypotheses — TODO

- **Dependencies:** D0.1.
- **Acceptance criteria:** Founders predefine participant segments, interview/usability method, sample target, and success/failure thresholds; conduct research; record anonymized findings and resulting scope/pricing decisions.
- **Tests/checks:** Research notes trace conclusions; contradictory evidence is retained; consent/privacy needs are handled.
- **Evidence:** Research plan, dated findings, and decision record. No fabricated statistics.

### T1.4 — Define launch jurisdictions, privacy, and legal requirements — TODO

- **Dependencies:** T1.1, T1.3.
- **Acceptance criteria:** Intended operating/launch jurisdictions, business entity, terms, privacy notice, cookies/analytics consent, age policy, consumer rights, content disclaimers, data subject processes, and retention requirements are approved.
- **Tests/checks:** Qualified legal/privacy review; product requirements mapped to implementation tasks.
- **Evidence:** Approved requirements and versioned legal documents/links.

### T1.5 — Verify billing providers and Nigerian payouts — TODO

- **Dependencies:** T1.1, T1.4.
- **Acceptance criteria:** Candidate providers are compared using current official evidence for merchant/entity eligibility, Nigeria support, currencies, settlement/payouts, fees, taxes, subscriptions, refunds/disputes, webhooks, sandbox, and customer portal; one provider is approved or billing remains blocked.
- **Tests/checks:** Provider onboarding feasibility confirmed directly; no reliance on a checkout demo alone.
- **Evidence:** Dated provider matrix, official sources, account eligibility result, and decision record.

### T1.6 — Define linguistic review workflow — TODO

- **Dependencies:** T1.3, T1.4.
- **Acceptance criteria:** Reviewer qualifications, locale choices, style guide, source attribution, draft/review/approval states, dispute handling, re-review/versioning, and specialist requirements for Mandarin, Korean, `pt-BR`, and `pt-PT` are approved.
- **Tests/checks:** Pilot entries pass the workflow with auditable feedback; reviewers explicitly approve locale metadata.
- **Evidence:** Content style guide, reviewer agreement/process, pilot review records.

### T1.7 — Define audio and illustration production/licensing — TODO

- **Dependencies:** T1.4, T1.6.
- **Acceptance criteria:** Speaker/source, locale, consent/license, recording specification, quality review, file format, storage, replacement, cost, and illustration provenance processes are approved.
- **Tests/checks:** Pilot assets pass linguistic, audio/visual quality, accessibility, metadata, and license checks.
- **Evidence:** Asset policy, license templates/records, technical spec, and pilot approval.

### T1.8 — Approve technical decision records — TODO

- **Dependencies:** T1.4, T1.6, T1.7. Billing-specific decisions additionally depend on T1.5; unresolved billing must not block decisions for a non-billing implementation foundation.
- **Acceptance criteria:** Hosting, PostgreSQL, data-access/migration tooling, authentication, email, storage/CDN, observability, and analytics choices have requirements-based decision records, version compatibility checks, costs, risks, and exit paths. A billing decision record is required only if billing is approved for the implementation scope; otherwise billing remains explicitly deferred and blocked.
- **Tests/checks:** Minimal isolated technical spikes only if explicitly authorized; security/privacy and license review.
- **Evidence:** Versioned architecture decision records and updated architecture/task dependencies.

### T1.9 — Produce and validate original UX prototypes — TODO

- **Dependencies:** T1.3, T1.6, T1.7.
- **Acceptance criteria:** Mobile-first flows cover public entry, authentication, track selection, home, situation, phrase lesson, exercise, review, progress, account, billing states, and error states; all supported scripts are exercised; representative users complete key prototype journeys against predefined criteria.
- **Tests/checks:** Accessibility review, keyboard/focus plan, contrast checks, 320px/reflow review, reduced-motion behavior, and usability sessions.
- **Evidence:** Original designs/prototypes, asset provenance, test plan/results, and approved changes.

### T1.10 — Define release quality budgets and support matrix — TODO

- **Dependencies:** T1.3, T1.8, T1.9.
- **Acceptance criteria:** Supported browsers/devices, performance budgets, availability/latency objectives, backup/restore objectives, monitoring thresholds, accessibility test matrix, and beta/launch metrics are explicitly approved.
- **Tests/checks:** Budgets are measurable in chosen tooling and realistic on representative mobile/network profiles.
- **Evidence:** Dated quality plan and updated PRD launch gates if numeric thresholds are approved.

## 4. Phase 2 — implementation foundation

### T2.1 — Bootstrap the application and quality toolchain — TODO

- **Dependencies:** T1.8, T1.10; explicit implementation authorization.
- **Acceptance criteria:** Supported Next.js App Router/TypeScript/Tailwind setup; pinned/runtime requirements; formatting, lint, typecheck, Vitest, Playwright, environment validation, and secret-safe examples; no unnecessary dependencies.
- **Tests/checks:** Install, format/lint, typecheck, unit smoke test, browser smoke test, and production build all execute successfully.
- **Evidence:** Commands and outputs recorded in `PROGRESS.md`; dependency decision references.

### T2.2 — Establish design tokens and accessible application shell — TODO

- **Dependencies:** T1.9, T2.1.
- **Acceptance criteria:** Approved tokens, fonts/fallbacks, landmarks, navigation, responsive shell, focus treatment, reduced motion, and base error/loading patterns exist without copied UI.
- **Tests/checks:** Component/unit checks, automated accessibility scan, keyboard walkthrough, 320px and zoom/reflow review.
- **Evidence:** Test output, screenshots across agreed viewports, and manual check notes.

### T2.3 — Establish database, migrations, and local test isolation — TODO

- **Dependencies:** T1.8, T2.1.
- **Acceptance criteria:** Approved schema foundation, migration workflow, constraints/indexes, generated types where selected, isolated test database, and documented safe reset procedure.
- **Tests/checks:** Apply migrations from empty state, idempotent setup where intended, integration test, and rollback/recovery strategy review.
- **Evidence:** Migration/test output and schema decision references.

### T2.4 — Implement secure authentication and account lifecycle — TODO

- **Dependencies:** T1.4, T1.8, T2.2, T2.3.
- **Acceptance criteria:** Registration/login/logout, verification/recovery as selected, protected routes/actions, session security, generic enumeration-safe errors, rate limits, and account/privacy controls required for beta.
- **Tests/checks:** Unit/integration/E2E for success, failure, expiry, revocation, CSRF considerations, horizontal access, keyboard, and accessible errors.
- **Evidence:** Actual test results and security review notes.

### T2.5 — Implement authorization and audit foundation — TODO

- **Dependencies:** T2.3, T2.4.
- **Acceptance criteria:** Deny-by-default policy, user-scoped repositories, explicit content/admin permissions, entitlement interface, and safe audit events.
- **Tests/checks:** Cross-user/object-ID attempts, unauthenticated calls, privilege escalation, unpublished content access, and log redaction tests.
- **Evidence:** Test outputs and threat-model update.

## 5. Phase 3 — content and learning experience

### T3.1 — Implement versioned content schema and validation — TODO

- **Dependencies:** T1.6, T1.7, T2.3, T2.5.
- **Acceptance criteria:** Track/release/situation/phrase/guide/exercise/asset models, immutable publication behavior, locale validation, review/license requirements, and safe import validation.
- **Tests/checks:** Invalid locale/count/review/license/markup/relationship cases; draft data is not publicly queryable; release history remains stable.
- **Evidence:** Migrations, fixtures labeled as test-only, and executed integration tests.

### T3.2 — Produce and approve MVP learning content — TODO

- **Dependencies:** T1.6, T3.1.
- **Acceptance criteria:** 192/192 planned entries across eight tracks meet the approved review workflow; three situations and eight phrases per situation; required regional/script metadata complete.
- **Tests/checks:** Automated structural validation plus human linguistic approval; duplicate and cross-locale review.
- **Evidence:** Review records, versioned release manifest, validator output. Machine checks do not replace human approval.

### T3.3 — Produce and approve audio/illustration assets — TODO

- **Dependencies:** T1.7, T3.2.
- **Acceptance criteria:** Every published phrase has approved locale-appropriate audio and required illustrations have lawful provenance and accessible treatment.
- **Tests/checks:** Checksum/format/duration metadata validation, human audio/locale QA, license/consent audit, visual accessibility review.
- **Evidence:** Asset manifest, license references, QA approvals, and validator output.

### T3.4 — Implement track, home, and situation navigation — TODO

- **Dependencies:** T2.2, T3.1.
- **Acceptance criteria:** Only published/available tracks and content are accessible; regional variants are explicit; loading/empty/error/locked/responsive states follow design.
- **Tests/checks:** Unit/integration/E2E, unpublished-content authorization, keyboard/screen-reader spot checks, responsive matrix.
- **Evidence:** Executed checks and screenshots/manual notes.

### T3.5 — Implement phrase lessons and audio delivery — TODO

- **Dependencies:** T3.1, T3.3, T3.4.
- **Acceptance criteria:** Script-aware phrase card, reviewed guide/context, accessible audio controls, difficult toggle, predictable navigation, retry/unavailable behavior, and lawful immutable asset delivery.
- **Tests/checks:** Audio success/failure, no autoplay, keyboard/screen reader, reduced motion, mobile data/loading, authorization/cache behavior.
- **Evidence:** Test outputs and manual audio/accessibility QA.

### T3.6 — Implement deterministic exercises — TODO

- **Dependencies:** T3.1, T3.5.
- **Acceptance criteria:** Listening/comprehension prompts use versioned reviewed answers; clear accessible feedback; retry-safe submission; audio failure cannot count as listening success.
- **Tests/checks:** Domain unit tests for answer evaluation; integration/E2E for attempts, retries, failure, accessibility, and content versions.
- **Evidence:** Executed test results and manual interaction review.

### T3.7 — Implement progress persistence and resume — TODO

- **Dependencies:** T2.5, T3.4, T3.6.
- **Acceptance criteria:** Transactional/idempotent user-scoped progress, explicit completion rules, concurrency handling, resume across sessions/devices, and version-aware history.
- **Tests/checks:** Retry/duplicate, concurrent update, cross-user, logout/login, new-content-version, partial/error-path tests.
- **Evidence:** Database/integration/E2E output and reviewed completion rules.

### T3.8 — Implement difficult-phrase review — TODO

- **Dependencies:** T3.5, T3.7.
- **Acceptance criteria:** Add/remove/defer and exercise-driven difficult state work by user/track/content version; empty and sync-error states are honest.
- **Tests/checks:** State-transition unit tests, persistence/isolation integration tests, responsive/accessibility E2E.
- **Evidence:** Executed tests and manual review notes.

## 6. Phase 4 — billing, operations, and release

### T4.1 — Implement billing adapter and verified event processing — TODO

- **Dependencies:** T1.5 approved (not blocked), T1.8, T2.5.
- **Acceptance criteria:** Server-owned plans/prices; signed raw-event verification; deduplication/idempotency; reconciliation; normalized states; no client-authoritative success.
- **Tests/checks:** Controlled unit/integration tests for valid/invalid signatures, duplicate/out-of-order/delayed events, renewal/failure/cancel/refund/dispute, and replay behavior.
- **Evidence:** Executed test output and provider documentation/version references.

### T4.2 — Implement subscription UX and entitlements — TODO

- **Dependencies:** T1.4, T4.1.
- **Acceptance criteria:** Transparent plans/terms, checkout, pending/active/failure/canceled/refunded/unknown states, customer management/cancellation, and server-enforced access.
- **Tests/checks:** Provider sandbox E2E plus authorization tests and accessible responsive states. Sandbox is labeled as such.
- **Evidence:** Test identifiers/results, webhook logs with secrets/personal data removed, and manual UX/accessibility review.

### T4.3 — Complete privacy, account data, and operational controls — TODO

- **Dependencies:** T1.4, T2.4, T3.7, T4.2 if billing launches.
- **Acceptance criteria:** Approved consent behavior, data inventory, retention, export/deletion, processor list, support route, redacted logging, backups, restore, and incident runbooks.
- **Tests/checks:** Export/deletion verification, backup restore exercise, log review, privilege/access audit, incident tabletop.
- **Evidence:** Dated execution records and approved policies/runbooks.

### T4.4 — Perform full security and accessibility verification — TODO

- **Dependencies:** T3.8, T4.2 if billing launches, T4.3.
- **Acceptance criteria:** Threat model updated; no unresolved critical/high finding; key journeys meet the approved WCAG 2.2 AA test plan; dependency/secret/configuration review complete.
- **Tests/checks:** Static/automated checks plus manual authorization, keyboard, focus, reflow, contrast, screen-reader, reduced-motion, and error recovery testing.
- **Evidence:** Dated reports, findings, remediation links, and retest results.

### T4.5 — Verify performance, reliability, and deployment — TODO

- **Dependencies:** T1.10, T4.3, T4.4.
- **Acceptance criteria:** Approved budgets/objectives met in a production-like environment; monitoring/alerts owned; migrations, rollback, backup restore, and asset failure behavior verified.
- **Tests/checks:** Production build, representative mobile performance runs, load/capacity checks as defined, recovery drill, smoke/E2E suite.
- **Evidence:** Environment/revision-tagged results and runbook links.

### T4.6 — Run controlled beta and evaluate launch gates — TODO

- **Dependencies:** T3.2, T3.3, T4.4, T4.5, and T4.2 if paid billing is included.
- **Acceptance criteria:** Predefined beta metrics/research completed with consent; defects triaged; every PRD launch gate is marked pass, fail, or blocked with evidence; founders record launch/no-launch decision.
- **Tests/checks:** Full acceptance suite and manual journey review on support matrix; evidence audit.
- **Evidence:** Honest beta report, launch-gate checklist, known risks, and signed decision.

## 7. Blocked-by-default conditions

- Paid billing tasks remain blocked unless T1.5 confirms provider eligibility and payouts.
- Publication of learning content remains blocked until T1.6 and human review evidence exist.
- Publication of audio remains blocked until T1.7 and license/consent evidence exist.
- Commercial use of “Veyra” remains provisional until T1.2.
- Any ownership-dependent commitment remains blocked until T1.1.
